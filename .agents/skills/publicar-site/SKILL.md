---
name: publicar-site
description: >
  Skill para publicação e deploy automático de One Page Sites estáticos em servidor VPS.
  Compila o projeto com Bun (`bun run build`), faz commit e push do Git, e envia a pasta estática `dist/`
  diretamente para o diretório web de destino na VPS usando SSH/SCP seguro.
version: 1.0.0
category: deploy
---

# 🚀 Publicar Site — Deploy Estático para VPS

Esta skill automatiza a publicação em produção do site estático para o servidor VPS.

---

## 🎯 Gatilhos (Trigger Terms)

Ative esta skill sempre que o usuário disser:
- "publicar o site"
- "fazer deploy"
- "subir para a vps"
- "enviar para produção"
- "deploy"
- "publicar"
- "atualizar site no ar"

---

## ⚙️ Variáveis de Ambiente Necessárias (`.env` ou `/rogerio/core/.env`)

O script `./deploy-vps.sh` busca as credenciais no `.env` da raiz do projeto ou no `.env` global do ambiente (`/rogerio/core/.env`):

| Variável | Descrição | Exemplo |
|---|---|---|
| `DEPLOY_VPS_IP` | Endereço IP do servidor VPS | `50.19.157.121` |
| `DEPLOY_VPS_USER` ou `DEPLOY_USER` | Usuário SSH da VPS | `rogeriomaciel` ou `ubuntu` |
| `DEPLOY_VPS_PASS` ou `DEPLOY_USERPASSWORD` | Senha SSH (se usar autenticação por senha) | `sua-senha` |
| `DEPLOY_SSH_KEY` | Caminho da chave SSH privada (se usar chave) | `~/.ssh/id_rsa` |
| `DEPLOY_REMOTE_DIR` ou `DEPLOY_PATH` | Pasta de destino do site na VPS | `/var/www/seusite` |

---

## 📋 Fluxo de Execução

Quando o usuário pedir para publicar ou fazer deploy do site:

1. **Verificação de Ambiente:**
   - Garante que a pasta atual é o projeto do site.
   - Verifica se as variáveis de deploy estão presentes.

2. **Execução do Script de Deploy:**
   - Execute via `run_command`:
     ```bash
     ./deploy-vps.sh "Sua mensagem de commit opcional"
     ```
   - O script executará automaticamente:
     - 1. Compilação local rápida via `bun run build`.
     - 2. Git commit & push das alterações.
     - 3. Compactação da pasta `dist/`.
     - 4. Criação do diretório de destino na VPS (`mkdir -p`).
     - 5. Envio e descompactação limpa dos arquivos na pasta da VPS.
     - 6. Ajuste de permissões para o servidor web (`chmod -R 755`).

3. **Confirmação:**
   - Informe ao usuário que o deploy estático foi concluído com sucesso e confirme o diretório remoto publicado.
