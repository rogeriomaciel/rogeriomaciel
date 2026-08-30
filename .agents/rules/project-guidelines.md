# Regras e Diretrizes do Projeto

## Arquitetura e Deploy
1. **One Page Site em React**: O projeto é estruturado como um site de página única (One Page Site / Landing Page) construído com React + Vite.
2. **Build Estático (`dist/`)**: O build do projeto gerado por `bun run build` produz a pasta `dist/`. O deploy consiste exclusivamente em hospedar/subir a pasta `dist/` para a web sem necessitar de servidor backend Node.js em tempo de execução.
3. **Gerenciador de Pacotes**: Usar estritamente `bun` (`bun install`, `bun run dev`, `bun run build`).
4. **Navegação**: Transições suaves entre seções através de IDs e âncoras na mesma página.
5. **Design System**: Seguir os princípios de design tokens, contraste acessível WCAG AA e estética moderna (UI Design System).
