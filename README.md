# 🌐 Criar Sites Base — Template Mestre de One Page Sites

Template oficial e padronizado para criação de **One Page Sites / Landing Pages de Alta Conversão em React**, integrando inteligência artificial e a metodologia do livro **"Vídeos que Vendem"** de Rogério Maciel (*"Vender é um discurso e compra é uma ação"*).

---

## 🎯 Pilares e Arquitetura do Projeto

- **Arquitetura:** One Page Site (SPA) em **React** com **Vite** e TypeScript/JavaScript.
- **Navegação:** Transições suaves por âncoras e IDs na mesma página (`#inicio`, `#servicos`, `#sobre`, `#faq`, `#contato`).
- **Gerenciador de Pacotes:** **`bun`** exclusivamente (`bun install`, `bun run dev`, `bun run build`).
- **Design System & UI:** Tokens visuais modernos, contraste acessível (WCAG AA/AAA) e componentes responsivos via skill `ui-design-system`.
- **Deploy 100% Estático:** O build gerado pelo `bun run build` cria a pasta autocontida **`dist/`**. Para colocar o site no ar, basta publicar os arquivos da pasta `dist/` em qualquer servidor web ou CDN (Nginx, Apache, VPS, Vercel, Netlify, Cloudflare Pages, S3, etc.). Sem necessidade de servidor Node.js em produção.
- **Content-as-Code (Fonte Única da Verdade):** Todo o conteúdo do site é centralizado e mantido no arquivo markdown `07-roteiro-site.md`.

---

## 🚀 Passo a Passo: Como Usar este Projeto como Base

### 1. Criar um Novo Site Automaticamente (Comando Único)
Você pode criar um novo site do absoluto zero com um único comando.

#### **Opção A: Rodando o script localmente**
```bash
./novo-site.sh "site-clinica-sorriso"
```

#### **Opção B: A partir de qualquer pasta vazia (via curl)**
```bash
bash <(curl -s https://raw.githubusercontent.com/rogeriomaciel/criarsites-base/main/novo-site.sh) "site-clinica-sorriso"
```

O script executa automagicamente:
1. Clona o `criarsites-base` na pasta do novo cliente.
2. Configura o `upstream` apontando para o repositório base.
3. Cria o novo repositório privado no GitHub via GitHub CLI (`gh`).
4. Instala as dependências com `bun`.
5. Deixa o projeto pronto para abrir no **Antigravity IDE**.

---

### 2. Iniciar o Assistente de Conteúdo
Abra o chat do Antigravity no projeto e envie:
> *"Quero criar o conteúdo deste site usando a skill site-que-vende."*

O assistente iniciará a entrevista guiada com duas etapas simples:

#### **Bloco A: Dados Técnicos e Identidade**
- **Nome da Empresa / Especialista**
- **Logomarca & Cores da Marca** (a IA extrai as cores primárias/secundárias diretamente da logo enviada; caso ainda não possua logo, a IA gera uma paleta de alto padrão sob medida para o nicho)
- **ID do Google Tag Manager (GTM)** (ex: `GTM-XXXXXXX` para injeção automática de tags e pixels)
- **WhatsApp de Conversão** (número e mensagem personalizada de contato)
- **Redes Sociais** (Instagram, LinkedIn, YouTube, Facebook, etc.)

#### **Bloco B: Especialidade e Negócio (Metodologia do Livro)**
- **Especialidade principal e serviços/produtos oferecidos**
- **Perfil do cliente ideal no Brasil**
- **A grande transformação / benefício final entregue**
- **Diferenciais competitivos em relação ao mercado**

---

### 3. Geração da Esteira Estratégica (.md)
A IA executará a cadeia de persuasão do livro e criará automaticamente na raiz do projeto os seguintes arquivos:

| Arquivo | Descrição |
|---|---|
| `00-dados-projeto.md` | Dados técnicos centralizados (GTM, WhatsApp, links, cores, logo). |
| `01-publico-alvo-desejos-crencas.md` | Perfil aprofundado, tabela de 10 desejos, crenças e soluções. |
| `02-desejos-crencas-empresa.md` | Objetivos e princípios fundamentais do negócio. |
| `03-tabela-intersecao.md` | Pontos de conexão e empatia entre o público e a empresa. |
| `04-manifesto.md` | Manifesto oficial da marca e declaração de propósito. |
| `05-puv.md` | Proposta Única de Valor persuasiva e direta. |
| `06-carta-de-vendas.md` | Carta de vendas completa com quebra de objeções. |
| **`07-roteiro-site.md`** ⭐ | **Roteiro estruturado com toda a copy de cada seção da Landing Page.** |

---

### 4. Validação e Ajustes no Roteiro
Abra o arquivo **`07-roteiro-site.md`**:
- Você pode ler e revisar todas as seções (Hero, Sobre, Serviços, Prova Social, FAQ, CTA).
- Se desejar alterar qualquer frase, benefício ou texto, **edite diretamente no arquivo `.md`**. Ele é a fonte oficial do conteúdo.

---

### 5. Construção e Programação do Site
Assim que o roteiro estiver aprovado, envie no chat do Antigravity:
> **"AGORA VAMOS PROGRAMAR"**

O assistente irá:
1. Ler `07-roteiro-site.md` e `00-dados-projeto.md`.
2. Criar a estrutura completa da aplicação React com Vite.
3. Aplicar o Design System responsivo, moderno e acessível.
4. Integrar o container do Google Tag Manager e links de WhatsApp.
5. Rodar o build de produção com `bun run build`.

---

### 6. Como Fazer o Deploy (Colocar no Ar)
Após o build concluído:
1. A pasta **`dist/`** estará gerada na raiz do projeto contendo todo o site estático minificado (`index.html`, `assets/`, etc.).
2. Suba o conteúdo da pasta `dist/` para a sua hospedagem:
   - **VPS / Nginx:** Aponte a raiz do site para a pasta `dist/`.
   - **Vercel / Netlify / Cloudflare Pages:** Configure o comando de build como `bun run build` e o diretório de saída (*Output Directory*) como `dist`.

---

## 🔄 Como Atualizar Textos no Futuro

Se o cliente pedir para alterar algum texto, adicionar um novo serviço ou trocar o WhatsApp:
1. Abra o arquivo `07-roteiro-site.md` e faça as alterações desejadas.
2. Peça ao assistente: *"Atualize o site com base no 07-roteiro-site.md"*.
3. O código React será sincronizado e um novo `bun run build` atualizará a pasta `dist/`.

---

## 🔄 Como Sincronizar Evoluções da Base com Projetos Forkados

Quando este repositório base (`criarsites-base`) receber melhorias (novas skills, atualizações no Vite, melhorias no Design System ou novas regras), você pode atualizar qualquer projeto forkado com um **único comando simples**:

### Opção 1: Via Terminal (Comando Único)
No terminal do projeto forkado, basta rodar:
```bash
./sync-base.sh
```
*(O script se encarrega de verificar o upstream, baixar as novidades e mesclar na sua branch automaticamente).*

### Opção 2: Pelo Chat do Antigravity
Basta digitar apenas:
> **`sync base`** ou **`atualizar base`**

O assistente executará o script de sincronização mantendo 100% intactos todos os arquivos de conteúdo do cliente (`00-dados-projeto.md` a `07-roteiro-site.md`).

---

## 🛠️ Comandos Úteis (Sempre com Bun)

```bash
# Instalar dependências
bun install

# Iniciar servidor local de desenvolvimento
bun run dev

# Gerar build estático para produção (pasta dist/)
bun run build

# Pré-visualizar o build localmente
bun run preview
```

---

## 📄 Estrutura de Arquivos do Projeto Base

```text
├── .agents/
│   ├── rules/
│   │   └── project-guidelines.md    # Regras do projeto para a IA
│   └── skills/
│       ├── site-que-vende/          # Skill da metodologia de vendas
│       └── ui-design-system/        # Skill de design system e tokens
├── AGENTS.md                        # Diretrizes e arquitetura mestre
├── GEMINI.md                        # Regras e contexto rápido do workspace
├── README.md                        # Este guia de uso passo a passo
```
