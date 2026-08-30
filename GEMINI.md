# Diretrizes do Projeto — Criar Sites Base

Consulte o arquivo completo de diretrizes em [AGENTS.md](file:///rogerio/core/criarsites-base/AGENTS.md).

### Resumo das Regras Obrigatórias:
1. **One Page Site em React**: Desenvolvido com React + Vite (SPA com navegação fluida por âncoras na mesma página).
2. **Deploy Estático via `dist/`**: Toda a aplicação compila em uma pasta estática `dist/` gerada por `bun run build`. O deploy consiste apenas em publicar essa pasta no servidor web.
3. **Gerenciador de Pacotes**: Utilizar exclusivamente `bun` (`bun install`, `bun run dev`, `bun run build`).
4. **Design System**: Utilizar a skill `ui-design-system` para manter coerência visual, cores acessíveis (WCAG AA), tipografia responsiva e componentes reutilizáveis.
5. **Sincronização Simples**: O comando `./sync-base.sh` ou a mensagem `sync base` no chat atualiza o fork com o template base automaticamente.
6. **SEO & Busca por IA (GEO)**: Presença mandatória de `public/llms.txt`, `public/llms-full.txt`, `robots.txt` para bots de IA e Schema.org JSON-LD no `index.html`.
7. **Deploy Contínuo (CI/CD)**: Publicação 100% automatizada na nuvem via GitHub Actions (`.github/workflows/deploy.yml`) a cada push na branch `main`.



