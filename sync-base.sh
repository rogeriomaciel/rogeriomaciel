#!/usr/bin/env bash

# ==============================================================================
# Script de Sincronização Automática com o Repositório Base (criarsites-base)
# ==============================================================================

set -e

# Cores para saída
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # Sem cor

echo -e "${YELLOW}🔄 Verificando atualizações do repositório base (upstream)...${NC}"

# Verifica se o remote upstream está configurado
if ! git remote | grep -q "upstream"; then
  echo -e "${YELLOW}⚠️ Remote 'upstream' não encontrado.${NC}"
  echo -e "Informe a URL do repositório base criarsites-base (ex: https://github.com/usuario/criarsites-base.git):"
  read -r UPSTREAM_URL
  if [ -n "$UPSTREAM_URL" ]; then
    git remote add upstream "$UPSTREAM_URL"
    echo -e "${GREEN}✅ Upstream configurado com sucesso!${NC}"
  else
    echo -e "${RED}❌ URL inválida. Operação cancelada.${NC}"
    exit 1
  fi
fi

# Busca as atualizações do upstream
echo -e "${YELLOW}📥 Baixando novidades do upstream...${NC}"
git fetch upstream

# Descobre a branch atual
CURRENT_BRANCH=$(git branch --show-current || echo "main")

# Faz o merge mantendo a integridade
echo -e "${YELLOW}🔀 Mesclando melhorias na branch '${CURRENT_BRANCH}'...${NC}"
git merge upstream/main -m "chore: sincronizacao com criarsites-base (upstream)" --no-edit || {
  echo -e "${RED}⚠️ Ocorreu um conflito no merge. O Antigravity pode ajudar a resolver mantendo os dados do cliente intactos.${NC}"
  exit 1
}

echo -e "${GREEN}🎉 Projeto atualizado com sucesso com as últimas melhorias da base!${NC}"
