# Diretrizes do Projeto — Criar Sites Base

Este documento estabelece as regras de arquitetura, tecnologia e fluxo de deploy do projeto. Qualquer agente de IA ou desenvolvedor deve seguir rigorosamente estas diretrizes.

---

## 1. Arquitetura da Aplicação
- **Tipo de Site:** **One Page Site** (Site de página única / Landing Page).
- **Navegação:** Todas as seções e conteúdos principais residem em uma única página interativa, utilizando links com navegação suave (*smooth scrolling*) por âncoras/IDs (ex: `#inicio`, `#servicos`, `#diferenciais`, `#depoimentos`, `#contato`).
- **Framework Principal:** **React** com **Vite** e TypeScript/JavaScript.
- **Design & UI:** Design System moderno, responsivo e de alta performance, utilizando CSS moderno / Tailwind e tokens de design conforme a skill `ui-design-system`.

---

## 2. Gerenciador de Pacotes
- **Gerenciador Exclusivo:** **`bun`**
  - Instalação: `bun install`
  - Servidor de desenvolvimento: `bun run dev`
  - Compilação / Build de produção: `bun run build`
  - Verificação de tipos/lint: `bun run lint`

---

## 3. Padrão de Build e Deploy Estático (`dist/`)
- **Regra de Ouro do Deploy:** Após a execução do comando `bun run build`, a aplicação deve gerar um pacote **100% estático e autocontido** dentro da pasta **`dist/`**.
- **Publicação:** Para colocar o site no ar (deploy), basta disponibilizar/subir diretamente os arquivos contidos na pasta **`dist/`** no servidor web ou serviço de hospedagem estática (ex: Nginx, Apache, VPS, Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.).
- **Zero Dependência de Backend Node.js em Produção:** O site não requer servidor Node/PM2 ativo para rodar o frontend no ar — ele funciona como recursos estáticos puros (HTML, CSS, JS minificados e assets).
- **Caminhos Relativos / Base:** A configuração do Vite (`vite.config.ts` ou `vite.config.js`) e os assets devem ser gerados de modo que o index.html e os bundles sejam servidos de forma direta e limpa.

---

## 4. Estrutura de Seções Padrão
1. **Header / Navbar:** Logo, menu com âncoras para as seções e botão de Call to Action (CTA).
2. **Hero Section:** Título de impacto, proposta de valor, CTA principal e elementos visuais atraentes.
3. **Recursos / Serviços:** Grade com os diferenciais ou serviços oferecidos.
4. **Social Proof / Depoimentos:** Avaliações, clientes atendidos ou métricas.
5. **Formulário / Contato / WhatsApp:** Canal direto de conversão do lead.
6. **Footer:** Links rápidos, copyright e redes sociais.

---

## 5. Sincronização com a Base (`sync-base.sh`)
- Em projetos forkados deste template, quando o usuário enviar comandos como `sync base`, `atualizar base` ou `sincronizar`, o agente deve executar o script `./sync-base.sh` preservando os arquivos de conteúdo específicos do cliente (`00-dados-projeto.md` a `07-roteiro-site.md`).

---

## 6. Otimização para SEO e Mecanismos de IA (GEO & llms.txt)
- **Robôs de IA (GEO):** O projeto deve manter arquivos `public/robots.txt` permitindo indexação por bots de IA (`GPTBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`).
- **Arquivos LLM:** Toda compilação e geração deve produzir arquivos `public/llms.txt` e `public/llms-full.txt` estruturados com o resumo de autoridade e serviços do especialista para citação em buscas de IA.
- **Dados Estruturados JSON-LD:** O `index.html` deve conter tags Schema.org (`ProfessionalService`, `Person`, `FAQPage`, `WebSite`) e metatags OpenGraph/Twitter Cards completas.


