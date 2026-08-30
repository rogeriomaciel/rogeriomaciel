#!/usr/bin/env bash

# ==============================================================================
# Gerador Automático de Novos Sites a partir do Template Base (criarsites-base)
# ==============================================================================

set -e

GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Configuração da URL Base padrão (Altere para o seu repositório no GitHub se necessário)
BASE_REPO_URL="https://github.com/rogeriomaciel/criarsites-base.git"

echo -e "${BLUE}======================================================${NC}"
echo -e "${BLUE}🚀 Inicializador de Novo Site — Criar Sites Base${NC}"
echo -e "${BLUE}======================================================${NC}"

# 1. Nome do Projeto
PROJECT_NAME="$1"
if [ -z "$PROJECT_NAME" ]; then
  echo -e "${YELLOW}Digite o nome da pasta / repositório para o novo site:${NC}"
  read -r -p "Nome (ex: site-clinica-sorriso): " PROJECT_NAME
fi

if [ -z "$PROJECT_NAME" ]; then
  echo -e "${RED}❌ O nome do projeto não pode ser vazio.${NC}"
  exit 1
fi

# 2. Clona o template base para a nova pasta
echo -e "\n${YELLOW}📦 1/4 Clonando template base para a pasta '${PROJECT_NAME}'...${NC}"
git clone "$BASE_REPO_URL" "$PROJECT_NAME"

cd "$PROJECT_NAME"

# 3. Configura os remotes do Git (Origem do cliente e Upstream da base)
echo -e "\n${YELLOW}🔧 2/4 Configurando remotes do Git...${NC}"
git remote rename origin upstream || git remote add upstream "$BASE_REPO_URL"

# 4. Cria o novo repositório no GitHub via GitHub CLI (se disponível)
if command -v gh &> /dev/null && gh auth status &> /dev/null; then
  echo -e "\n${YELLOW}🐙 3/4 Criando novo repositório no GitHub via gh CLI...${NC}"
  gh repo create "$PROJECT_NAME" --private --source=. --remote=origin --push || {
    echo -e "${YELLOW}⚠️ Não foi possível criar via gh CLI automaticamente. Você pode definir o remote origin manualmente depois.${NC}"
  }
else
  echo -e "\n${YELLOW}ℹ️ GitHub CLI (gh) não autenticado ou indisponível. Para enviar para o GitHub manualmente:${NC}"
  echo -e "   git remote add origin https://github.com/SEU_USUARIO/${PROJECT_NAME}.git"
  echo -e "   git push -u origin main"
fi

# 5. Instalação de dependências com Bun (se houver package.json)
if [ -f "package.json" ]; then
  echo -e "\n${YELLOW}⚡ 4/4 Instalando dependências com Bun...${NC}"
  bun install
fi

echo -e "\n${GREEN}======================================================${NC}"
echo -e "${GREEN}🎉 Novo site '${PROJECT_NAME}' criado e pronto com sucesso!${NC}"
echo -e "${GREEN}======================================================${NC}"
echo -e "\nPara começar:"
echo -e "  1. Abra a pasta no Antigravity:"
echo -e "     ${BLUE}cd $(pwd)${NC}"
echo -e "  2. No chat do Antigravity, diga:"
echo -e "     ${YELLOW}\"Quero criar o conteúdo deste site usando a skill site-que-vende\"${NC}\n"
