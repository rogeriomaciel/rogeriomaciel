---
name: publicar-site
description: >
  Skill para publicação e deploy contínuo (CI/CD) de One Page Sites estáticos via GitHub Actions para VPS.
  Realiza o salvamento, commit e envio (git push) para a branch principal no GitHub,
  disparando automaticamente a pipeline de CI/CD que compila com Bun e publica os arquivos estáticos na VPS.
version: 2.0.0
category: deploy
---

# 🚀 Publicar Site — Deploy Contínuo (CI/CD via GitHub Actions)

Esta skill aciona o fluxo oficial de **CI/CD no GitHub Actions** para compilar e publicar o site estático na VPS.

---

## 🎯 Gatilhos (Trigger Terms)

Ative esta skill sempre que o usuário disser:
- "publicar o site"
- "fazer deploy"
- "subir para produção"
- "deploy via github"
- "disparar ci/cd"
- "publicar"
- "atualizar site no ar"

---

## ⚙️ Configuração dos GitHub Secrets (No Repositório GitHub)

Para que a pipeline do GitHub Actions consiga enviar os arquivos da pasta `dist/` para o seu servidor VPS, configure os seguintes Secrets em **Settings ➔ Secrets and variables ➔ Actions** no GitHub:

| Secret | Descrição | Exemplo |
|---|---|---|
| `DEPLOY_VPS_IP` | Endereço IP do servidor VPS | `50.19.157.121` |
| `DEPLOY_VPS_USER` | Usuário SSH da VPS | `rogeriomaciel` ou `ubuntu` |
| `DEPLOY_VPS_PASS` ou `DEPLOY_SSH_KEY` | Senha SSH ou Chave Privada | `sua-senha` |
| `DEPLOY_REMOTE_DIR` *(Opcional)* | Pasta de destino na VPS | `/var/www/nome-do-site` |

---

## 📋 Fluxo de Execução

Quando o usuário pedir para publicar ou fazer deploy do site:

1. **Commit & Push para o GitHub:**
   - O agente adiciona todas as alterações com `git add -A`.
   - Cria um commit semântico: `git commit -m "deploy: atualizacao do site para producao"`.
   - Faz o envio para o repositório remoto: `git push origin main`.

2. **Execução Automática da Pipeline de CI/CD no GitHub:**
   - O GitHub Actions detecta o push na branch `main`.
   - Instala as dependências e o Bun na nuvem.
   - Roda `bun run build` gerando a pasta `dist/`.
   - Transfere os arquivos estáticos via SCP/SSH diretamente para o diretório de destino na VPS.
   - Ajusta as permissões de leitura web (`chmod -R 755`).

3. **Confirmação:**
   - O agente informa ao usuário que o envio foi feito e que a pipeline do GitHub Actions está executando o deploy em produção.
