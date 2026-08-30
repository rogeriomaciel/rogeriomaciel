---
name: site-que-vende
description: >
  Skill estratégica para criação e manutenção de One Page Sites de alta conversão em React.
  Baseada na metodologia do livro "Vídeos que Vendem" de Rogério Maciel ("Vender é um discurso e compra é uma ação").
  Conduz uma entrevista profunda sobre a especialidade e dados técnicos (GTM, WhatsApp, redes sociais, logo),
  gera a esteira estratégica completa de arquivos .md (Público, Desejos, Crenças, Manifesto, PUV, Carta de Vendas)
  e consolida o roteiro mestre em `07-roteiro-site.md`, que serve como fonte única da verdade para a geração e atualização
  do site React com build estático na pasta dist/.
version: 1.0.0
category: build
---

# 🚀 Site que Vende — Gerador Estratégico de One Page Sites

Esta skill transforma o método **"Vender é um discurso e compra é uma ação"** em uma esteira automatizada para criação de sites de alta conversão.

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

---

## 📋 Fluxo de Trabalho (Workflows)

### Workflow 1: Diagnóstico e Entrevista do Especialista

Quando o usuário solicitar o início de um novo site, faça as seguintes perguntas objetivas divididas em dois blocos:

#### **Bloco A: Identidade, Links e Dados Técnicos**
1. **Nome da Empresa / Especialista:**
2. **Logomarca & Cores da Marca:** (Envio do arquivo/link da logo para extração automática da paleta de cores, códigos hexadecimais existentes, ou preferência de estilo caso ainda não possua logo)
3. **ID do Google Tag Manager (GTM):** (Ex: `GTM-XXXXXXX` para injeção no head e body)
4. **WhatsApp de Conversão:** (Número com DDD e mensagem padrão do botão de contato)
5. **Redes Sociais:** (Instagram, LinkedIn, YouTube, Facebook, etc.)

#### **Bloco B: Especialidade & Negócio (O Coração da Estratégia)**
6. **Qual é a sua especialidade principal e quais serviços/produtos são oferecidos?**
7. **Qual é o perfil do cliente ideal que você atende no Brasil?**
8. **Qual é a grande transformação / benefício final que o seu trabalho proporciona?**
9. **Quais são os principais diferenciais da sua empresa em relação ao mercado?**

---

### Workflow 2: Geração da Esteira Estratégica (.md)

Assim que as respostas forem fornecidas, o agente executará a esteira estratégica e criará na raiz do projeto os seguintes arquivos markdown:

1. **`00-dados-projeto.md`**: Centraliza os dados técnicos (Nome, GTM, WhatsApp, Redes Sociais, Logo e Cores).
2. **`01-publico-alvo-desejos-crencas.md`**:
   - Descrição demográfica e psicográfica profunda do público no Brasil.
   - Tabela com no mínimo 10 desejos do público, crenças associadas a cada desejo e a solução oferecida pela especialidade.
3. **`02-desejos-crencas-empresa.md`**:
   - Lista de desejos/objetivos da empresa do especialista.
   - Crenças e princípios fundamentais do negócio.
4. **`03-tabela-intersecao.md`**:
   - Tabela comparativa destacando os pontos em comum de desejos e crenças entre a empresa e o cliente ideal.
5. **`04-manifesto.md`**:
   - Manifesto oficial da marca, declaração de propósito, valores e promessa de impacto.
6. **`05-puv.md`**:
   - Proposta Única de Valor (PUV) persuasiva, direta e memorável.
7. **`06-carta-de-vendas.md`**:
   - Carta de vendas completa com narrativa envolvente, quebra de objeções e chamada para ação (CTA).
8. **`07-roteiro-site.md`** ⭐ **(Fonte Única da Verdade do Site)**:
   - Estrutura completa e detalhada de cada seção do One Page Site:
     - **Navbar:** Logo, links de âncoras (`#inicio`, `#sobre`, `#servicos`, `#diferenciais`, `#faq`, `#contato`) e botão CTA WhatsApp.
     - **Hero Section:** Headline de impacto baseada na PUV, subheadline com benefício claro, badges de autoridade e CTA principal.
     - **Problema & Empatia (Desejos & Crenças):** Mostra que a empresa entende a dor do visitante.
     - **Soluções & Serviços:** Grade com cards dos serviços, benefícios práticos e entregáveis.
     - **Manifesto & Sobre:** História, propósito e autoridade do especialista.
     - **Diferenciais / Por que nos escolher:** Pontos de valor e provas de excelência.
     - **FAQ / Quebra de Objeções:** Respostas para as principais dúvidas e crenças limitantes.
     - **Chamada Final (CTA) & WhatsApp:** Bloco de alta conversão.
     - **Footer:** Redes sociais, copyright, links rápidos e termos.

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
   - Utiliza **React + Vite** com **TypeScript** e **CSS moderno / Tailwind**.
   - Aplica os tokens visuais e boas práticas da skill `ui-design-system`.
   - Injeta o container do **Google Tag Manager** no `index.html`.
   - Garante navegação suave (*smooth scrolling*) por âncoras (`#id`).
3. **Build Estático via `bun`:**
   - Roda `bun run build`.
   - Valida a geração completa da pasta estática autocontida **`dist/`**.
4. **Deploy:**
   - O pacote final gerado em `dist/` está 100% pronto para publicação estática em qualquer servidor ou CDN.

---

## 🔄 Princípio de Sincronização e Re-geração

Se o usuário editar qualquer texto em `07-roteiro-site.md` no futuro e solicitar uma atualização, o agente deve:
1. Re-ler `07-roteiro-site.md`.
2. Atualizar os componentes React correspondentes mantendo o design e a harmonia visual.
3. Re-executar o build estático com `bun run build`.
