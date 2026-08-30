---
name: site-que-vende
description: >
  Skill estratégica e de alta conversão para criação e manutenção de One Page Sites / Máquinas de Aquisição em React.
  Baseada rigorosamente na metodologia do livro "Vídeos que Vendem" de Rogério Maciel ("Vender é um discurso e compra é uma ação").
  Conduz uma entrevista profunda sobre especialidade, dados técnicos, provas e diferenciais,
  gera a esteira estratégica completa de arquivos .md (Público, Desejos, Crenças, Manifesto, PUV, Carta de Vendas, Mecanismo da Máquina)
  e consolida o roteiro mestre em `07-roteiro-site.md`, que serve como fonte única da verdade para a geração e atualização
  do site React com build estático na pasta dist/.
version: 2.0.0
category: build
---

# 🚀 Site que Vende — Máquina de Aquisição e One Page Sites

Esta skill transforma a premissa **"Vender é um discurso e compra é uma ação"** em uma esteira de engenharia de conversão. O site não é tratado como uma "vitrine institucional", mas como um **mecanismo comercial integrado** que atrai, qualifica e entrega oportunidades de venda prontas no WhatsApp.

---

## 🎯 Gatilhos (Trigger Terms)

Ative esta skill sempre que o usuário disser:
- "criar site"
- "iniciar novo site"
- "fazer o questionário do site"
- "gerar conteúdo do site"
- "roteiro do site"
- "atualizar site pelo roteiro"
- "recriar site com base no md"
- "site que vende"
- "máquina de aquisição"

---

## 📋 Fluxo de Trabalho (Workflows)

### Workflow 1: Diagnóstico e Entrevista Estratégica

Quando o usuário solicitar o início de um novo site, faça as seguintes perguntas divididas em dois blocos:

#### **Bloco A: Identidade, Links, Dados Técnicos e Provas**
1. **Nome da Empresa / Especialista:**
2. **Logomarca & Cores da Marca:** (Envio do arquivo/link da logo para extração automática da paleta pelo `ui-design-system`, códigos hexadecimais, ou preferência de estilo se não tiver logo)
3. **ID do Google Tag Manager (GTM):** (Ex: `GTM-XXXXXXX` para injeção no head e body)
4. **WhatsApp de Conversão:** (Número com DDD e mensagem inicial que o lead enviará ao clicar)
5. **Redes Sociais:** (Instagram, LinkedIn, YouTube, Facebook, etc.)
6. **Provas e Evidências Existentes:** (Cases de sucesso, números de clientes atendidos, prints de conversão/WhatsApp, antes & depois ou métricas; caso ainda não possua prints, a IA gerará o **Diagrama do Fluxo do Mecanismo**)

#### **Bloco B: Especialidade, Negócio & Quebra de Objeções (O Motor do Livro)**
7. **Qual é a sua especialidade principal e quais serviços/produtos são oferecidos?**
8. **Qual é o perfil do cliente ideal que você atende no Brasil?**
9. **Qual é a grande transformação / resultado tangível que o seu trabalho proporciona?** (Fazer o cliente visualizar a cena: *"Você acorda com leads qualificados no seu WhatsApp"*)
10. **Por que a maioria dos concorrentes falha ou os clientes se frustram com o mercado tradicional?** (Identificação das crenças limitantes)
11. **Quais são os diferenciais e a sua garantia de capacidade de execução?**

---

### Workflow 2: Geração da Esteira Estratégica (.md)

Assim que as respostas forem fornecidas, o agente executará a esteira estratégica e criará na raiz do projeto os seguintes arquivos:

1. **`00-dados-projeto.md`**: Centraliza os dados técnicos (Nome, GTM, WhatsApp, Redes Sociais, Logo, Cores e Provas).
2. **`01-publico-alvo-desejos-crencas.md`**:
   - Descrição demográfica e psicográfica profunda do público no Brasil.
   - Tabela com no mínimo 10 desejos do público, crenças limitantes associadas a cada desejo e a solução oferecida pela especialidade.
3. **`02-desejos-crencas-empresa.md`**:
   - Lista de objetivos da empresa do especialista e princípios inegociáveis.
4. **`03-tabela-intersecao.md`**:
   - Tabela comparativa destacando os pontos de alinhamento e empatia entre a empresa e o cliente ideal.
5. **`04-manifesto.md`** ⭐ **(O Manifesto Emocional da Marca)**:
   - Texto visceral e inspirador com a declaração de princípios, o inimigo comum do mercado e a promessa inegociável de transformação.
   - **Geração da Página Dedicada (`/manifesto.html` / `src/pages/Manifesto.tsx`):**
     - O agente cria uma página dedicada de altíssimo impacto emocional com design editorial, ritmo de leitura envolvente, tipografia expressiva e suporte a Dark & Light mode.
     - Inclui link de volta para o site principal e um botão de ação final conectando o sentimento do leitor com o fechamento no WhatsApp.
6. **`05-puv.md`**:
   - Proposta Única de Valor baseada em **Contraste de Categoria**:
     *Exemplo:* *"Seu negócio não precisa de mais um site bonito. Precisa de uma máquina que coloca clientes prontos no seu WhatsApp."*
7. **`06-carta-de-vendas.md`**:
   - Carta de vendas completa com narrativa envolvente, quebra das crenças limitantes e chamada para ação (CTA).
8. **`07-roteiro-site.md`** ⭐ **(Fonte Única da Verdade do Site)**:
   - Estrutura completa de cada seção da Landing Page / Máquina de Vendas:
     - **Navbar:** Logo/Nome, âncoras (`#inicio`, `#mecanismo`, `#servicos`, `#provas`, `#sobre`, `#faq`, `#contato`), link para `[O Manifesto]` e CTA WhatsApp.
     - **Hero Section (PUV + Contraste):** Headline de impacto que separa "site comum" de "máquina comercial", subheadline que tangibiliza a chegada de leads no WhatsApp, badges de autoridade e CTA principal de alta intenção.
     - **Quebra de Crença / O Problema:** *"Por que a maioria dos sites na internet não vende nada?"* (conteúdo, discurso e ausência de ação).
     - **O Mecanismo da Máquina ("Como Funciona"):**
       - 1. Atração & Discurso Estruturado
       - 2. Qualificação & Quebra de Objeções
       - 3. Automação, Rastreamento (GTM/GA4) & Conversão no WhatsApp
     - **Soluções & Entregáveis:** Grade com os pilares da entrega sem parecer "faz-tudo", mas sim um sistema integrado.
     - **Seção "Me Mostra" (Provas & Evidências):** Prints, diagramas visuais do fluxo, métricas ou depoimentos comprovando a eficácia do método.
     - **Autoridade Responsável (Sobre):** A experiência do especialista apresentada como evidência real da capacidade de execução (*"Eu construo a máquina, você recebe os clientes"*).
     - **FAQ Estratégico:** Respostas diretas para as últimas dúvidas e objeções do lead.
     - **CTA Final de Fechamento de Círculo:** Chamada decisiva alinhada com a promessa da Hero (*"Quero colocar minha máquina de clientes no WhatsApp para rodar"*).
     - **Footer:** Redes sociais, copyright, links rápidos, link para `[O Manifesto]` e termos.
9. **`public/llms.txt` & `public/llms-full.txt`** 🤖:
   - Resumo e base de conhecimento estruturados para robôs de IA (ChatGPT Search, Perplexity, Claude, Gemini, Copilot, Google AI Overviews), contendo o posicionamento, manifesto, PUV, serviços e FAQs.

---

### Workflow 3: Validação do Roteiro pelo Usuário

Apresente ao usuário o arquivo **`07-roteiro-site.md`**.
O usuário tem total autonomia para:
- Ler e aprovar o roteiro diretamente.
- Fazer alterações manuais no texto de qualquer seção no arquivo `.md`.

---

### Workflow 4: Programação e Deploy do Site

Quando o usuário der o comando **"AGORA VAMOS PROGRAMAR"** ou pedir para criar/atualizar o site:

1. **Leitura da Fonte da Verdade:**
   - O agente lê o arquivo `07-roteiro-site.md` e `00-dados-projeto.md`.
2. **Criação / Atualização dos Componentes React:**
   - Utiliza **React + Vite** com **TypeScript** e **Tailwind CSS**.
   - Aplica os tokens visuais e boas práticas da skill `ui-design-system` (estética tech/performance, contraste WCAG AA, dark mode com acentos precisos).
   - Injeta o container do **Google Tag Manager** no `index.html`.
   - Gera e injeta os **Dados Estruturados Schema.org JSON-LD** (`ProfessionalService`, `Person`, `FAQPage`, `WebSite`) no `index.html`.
   - Gera/atualiza o `public/llms.txt` e `public/llms-full.txt` refletindo as informações do cliente.
   - Implementa navegação suave (*smooth scrolling*) por âncoras (`#id`).
3. **Build Estático via `bun`:**
   - Roda `bun run build`.
   - Valida a geração completa da pasta estática autocontida **`dist/`**.
4. **Deploy:**
   - O pacote final gerado em `dist/` está 100% pronto para publicação estática em qualquer servidor ou CDN.

---

## 🔄 Princípio de Sincronização e Re-geração

Se o usuário editar qualquer texto em `07-roteiro-site.md` no futuro e solicitar uma atualização:
1. Re-ler `07-roteiro-site.md`.
2. Atualizar os componentes React correspondentes mantendo a harmonia visual.
3. Re-executar o build estático com `bun run build`.
