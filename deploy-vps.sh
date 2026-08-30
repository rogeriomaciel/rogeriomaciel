#!/usr/bin/env bash

# ==============================================================================
# Script de Publicação / Deploy Estático para Servidor VPS
# ==============================================================================

set -e

# Cores para saída
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}======================================================${NC}"
echo -e "${BLUE}🚀 Publicador de Site Estático para VPS${NC}"
echo -e "${BLUE}======================================================${NC}"

# 1. Carregar variáveis do .env local ou do .env global da pasta /rogerio/core/.env
if [ -f .env ]; then
  echo -e "${YELLOW}📄 Carregando configurações de .env local...${NC}"
  set -a
  source .env
  set +a
elif [ -f "/rogerio/core/.env" ]; then
  echo -e "${YELLOW}📄 Carregando configurações de /rogerio/core/.env...${NC}"
  set -a
  source /rogerio/core/.env
  set +a
fi

# 2. Definição e validação das variáveis da VPS
VPS_IP="${DEPLOY_VPS_IP}"
VPS_USER="${DEPLOY_VPS_USER:-${DEPLOY_USER:-rogeriomaciel}}"
VPS_PASS="${DEPLOY_VPS_PASS:-${DEPLOY_USERPASSWORD}}"
PROJECT_NAME="$(basename "$(pwd)")"
REMOTE_DIR="${DEPLOY_REMOTE_DIR:-${DEPLOY_PATH:-/var/www/${PROJECT_NAME}}}"

if [ -z "$VPS_IP" ]; then
  echo -e "${RED}❌ Erro: DEPLOY_VPS_IP não configurado no .env.${NC}"
  echo -e "Por favor, defina DEPLOY_VPS_IP no arquivo .env."
  exit 1
fi

echo -e "📡 Servidor VPS: ${GREEN}${VPS_USER}@${VPS_IP}${NC}"
echo -e "📂 Destino na VPS: ${GREEN}${REMOTE_DIR}${NC}"

# 3. Configuração de Chave SSH ou Senha (sshpass)
SSH_OPT=""
if [ -n "$DEPLOY_SSH_KEY" ] && [ -f "$DEPLOY_SSH_KEY" ]; then
  SSH_OPT="-i $DEPLOY_SSH_KEY"
fi

SSHPASS_CMD=""
if [ -n "$VPS_PASS" ]; then
  if command -v sshpass &> /dev/null; then
    export SSHPASS="$VPS_PASS"
    SSHPASS_CMD="sshpass -e"
  fi
fi

# 4. Compilação do Site com Bun
echo -e "\n${YELLOW}🛠️ 1/4 Compilando o projeto localmente com Bun (bun run build)...${NC}"
if command -v bun &> /dev/null; then
  bun run build
else
  npm run build
fi

if [ ! -d "dist" ]; then
  echo -e "${RED}❌ Erro: Pasta dist/ não foi gerada pelo build.${NC}"
  exit 1
fi

# 5. Git Commit & Push Automático (se houver alterações)
if [ -n "$(git status --porcelain)" ]; then
  echo -e "\n${YELLOW}💾 2/4 Salvando alterações no Git...${NC}"
  git add -A
  COMMIT_MSG="${1:-deploy: atualizacao e publicacao do site estatico}"
  git commit -m "$COMMIT_MSG" || true
  CURRENT_BRANCH=$(git branch --show-current || echo "main")
  git push origin "$CURRENT_BRANCH" || true
fi

# 6. Compactação e Envio da pasta dist/
echo -e "\n${YELLOW}📦 3/4 Compactando e enviando pasta dist/ para a VPS...${NC}"
tar -czf dist_deploy.tar.gz -C dist .

# Cria o diretório de destino na VPS se não existir
$SSHPASS_CMD ssh -o StrictHostKeyChecking=no $SSH_OPT "$VPS_USER@$VPS_IP" "mkdir -p $REMOTE_DIR"

# Envia o pacote
$SSHPASS_CMD scp -o StrictHostKeyChecking=no $SSH_OPT dist_deploy.tar.gz "$VPS_USER@$VPS_IP:$REMOTE_DIR/"

# 7. Extração na VPS
echo -e "\n${YELLOW}🔄 4/4 Extraindo arquivos estáticos na VPS...${NC}"
$SSHPASS_CMD ssh -o StrictHostKeyChecking=no $SSH_OPT "$VPS_USER@$VPS_IP" << EOF
  cd "$REMOTE_DIR"
  tar -xzf dist_deploy.tar.gz
  rm dist_deploy.tar.gz
  chmod -R 755 "$REMOTE_DIR"
EOF

# Limpeza local
rm -f dist_deploy.tar.gz

echo -e "\n${GREEN}======================================================${NC}"
echo -e "${GREEN}🎉 Deploy estático concluído com sucesso na VPS!${NC}"
echo -e "${GREEN}Arquivos publicados em: ${REMOTE_DIR}${NC}"
echo -e "${GREEN}======================================================${NC}"
