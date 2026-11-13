---
name: core-authority-engine
description: >
  Motor diário de inteligência de demanda, autoridade de engenharia e publicidade consultiva estruturado no ciclo Lean.
  Varre a atividade técnica recente dos repositórios GitHub de Rogério Maciel, cruza com dores e tendências reais de busca
  sobre Inteligência Artificial e Automação (Goiânia, Goiás, Brasil e Internacional), higieniza dados confidenciais (Zero-Leak)
  e gera estudos de caso de arquitetura de alta conversão, posts executivos e metadados de citação em IAs (GEO).
version: 1.0.0
category: growth-authority
---

# Core Authority Engine v1.0 — Motor Lean de Autoridade & Venda de Engenharia

Este skill define o sistema operacional contínuo para transformar o trabalho real de desenvolvimento nos repositórios de **Rogério Maciel** em **posicionamento público de autoridade, atração de clientes corporativos e dominância em buscas generativas de IA (GEO)**.

O motor rejeita "conteúdo raso de vaidade" (tutoriais para iniciantes ou dicas genéricas) e opera estritamente no modelo **Lean Startup (Construir – Medir – Aprender)** aplicado a autoridade:

```
[FASE 1: VARREDURA & DIAGNÓSTICO] ──> Lê commits recentes no Git + Identifica dores quentes de mercado
            │
            ▼
[FASE 2: HIPÓTESE & ÂNGULO]       ──> Cruzamento [Atividade Real x Dor de Negócio] + Proposta ao Rogério (NÃO PUBLICA)
            │
            ▼ (Aprovação do Rogério)
[FASE 3: CONSTRUÇÃO ZERO-LEAK]    ──> Higienização rigorosa + Artigo SSG (PT/EN) + Posts Executivos (LinkedIn/X)
            │
            ▼
[FASE 4: DISPARO & GEO]           ──> Atualiza llms-full.txt + Dispara Google Indexing API + IndexNow (Bing/ChatGPT)
```

---

## 🎯 Gatilhos (Trigger Terms)

Ative esta skill sempre que o usuário disser:
- "gerar conteúdo diário"
- "radar de autoridade"
- "analisar meus commits e sugerir pauta"
- "o que publicar hoje"
- "investigar trends e vender solução"
- "mostrar o que fiz no github de um jeito comercial"
- "posicionamento ia goiania"
- "authority radar"
- "core-authority"

---

## 🔒 Regra de Ouro Inegociável: As 4 Fases Estritas do Lean

> [!IMPORTANT]
> **COMPORTAMENTO MANDATÓRIO DA SKILL:**
> A skill opera **estritamente em 4 fases sequenciais**. É **TERMINANTEMENTE PROIBIDO** criar artigos públicos, alterar código de produção ou pré-publicar fora da **Fase 3 (Construção)**.
> Em cada rodada, a skill deve diagnosticar a atividade recente (Fase 1), formular o ângulo editorial e submeter à aprovação do usuário (Fase 2), aguardar o alinhamento, para somente então construir (Fase 3) e notificar os motores de busca (Fase 4).

---

## 📚 Roteamento de Módulos & Referências Especializadas

Para aprofundamento operacional imediato, consulte as referências empacotadas nesta skill:

| Cenário Operacional | Módulo de Referência Local |
| :--- | :--- |
| **Higienização de Código & Proteção de Segredos** (Zero-Leak Shield: mascarar tokens, IPs, nomes de clientes e regras proprietárias) | [`references/zero-leak-sanitizer.md`](references/zero-leak-sanitizer.md) |
| **Modelos de Copywriting Consultivo & Alto Ticket** (Framework PAARC, posts para LinkedIn de decisores, threads para Twitter/X) | [`references/authority-copywriting-matrix.md`](references/authority-copywriting-matrix.md) |
| **Citação em IAs & Posicionamento Regional/Global** (ChatGPT Search, Perplexity, passagens de 134-167 palavras, Goiânia, GO, Brasil, Upwork) | [`references/geo-ai-citation-playbook.md`](references/geo-ai-citation-playbook.md) |
| **Catálogo de Dores Quentes & Tendências de Busca** (Gargalos de low-code/n8n, IA corporativa local, segurança fintech, telemetria industrial) | [`references/demand-trends-catalog.md`](references/demand-trends-catalog.md) |

---

## 🛠️ Comandos do Ecossistema

A skill se apoia nos scripts utilitários do projeto:

```bash
# 1. Rastrear a atividade recente do Git e gerar matriz de ideias de autoridade
bun run authority:radar

# 2. Auditar posições e palavras no Search Console para calibrar ganchos editoriais
bun run search:console

# 3. Pré-renderizar novas páginas e compilar estaticamente
bun run build

# 4. Disparar notificação imediata para Bing & ChatGPT Search
bun run index:bing

# 5. Disparar notificação imediata para Google Indexing API
bun run index:google
```

---

## 📋 Passo a Passo Operacional Detalhado

### Passo 1: Varredura & Diagnóstico
1. Rodar `git log -n 15 --oneline` (ou `bun run authority:radar`) nos repositórios locais para entender os últimos problemas resolvidos.
2. Identificar a classe de problema:
   - Performance / Latência / Otimização de RAM.
   - Segurança / Criptografia / Webhooks / Fintech.
   - Arquitetura de Agentes / IA Local / Integrações.
   - Confiabilidade / CI/CD / GitOps / Resolução de DAGs.
3. Consultar [`demand-trends-catalog.md`](references/demand-trends-catalog.md) para cruzar com uma dor quente que empresas em Goiânia, no Brasil ou no exterior estão buscando agora.

### Passo 2: Formulação da Hipótese Editorial (Submeter ao Rogério)
Apresentar ao usuário no chat:
* **Entregável Técnico do Dia:** *"Identificamos nos seus commits recentes o trabalho em X (ex: otimização de endpoints com Fastify/Bun)."*
* **Dor do Mercado Conectada:** *"Empresas de e-commerce e agências estão sofrendo com servidores travando por causa de webhooks lentos de 8 segundos."*
* **O Gancho Comercial:** *"Como nós arquitetamos uma resposta de 5ms sem gastar fortuna em cloud."*
* **Ângulo Geográfico:** *"Goiânia/GO (atendimento consultivo a empresas da região) + Brasil + Upwork Global."*
* **Aguardar Validação:** Perguntar ao usuário se o ângulo atende ao objetivo antes de redigir.

### Passo 3: Construção Zero-Leak & Conteúdo Multicanal
Após aprovação do usuário:
1. **Sanitização Absoluta:** Aplicar o [`zero-leak-sanitizer.md`](references/zero-leak-sanitizer.md). Zero tokens, zero IPs, zero nomes de clientes privados.
2. **Geração do Teardown Técnico:** Redigir o caso com foco no padrão de design e nas métricas de ganho (5ms, -98% RAM, etc.).
3. **Geração dos Formatos:**
   - **Post Executivo LinkedIn:** Focado em CTOs e Diretores de TI com CTA para diagnóstico de arquitetura.
   - **Artigo / Caso para o Site:** Injetar na base de conhecimento ou rota dedicada (`/pt/` e `/en/`).
   - **Citação para IA:** Atualizar `public/llms-full.txt` e `public/llms.txt` seguindo o formato de passagens citáveis do [`geo-ai-citation-playbook.md`](references/geo-ai-citation-playbook.md).

### Passo 4: Notificação Instantânea de Indexação
1. Executar `bun run build` para garantir que o SSG gerou o HTML estático com CSS crítico inlinado.
2. Fazer o commit e push para deploy na VPS.
3. Executar `bun run index:google` e `bun run index:bing` para forçar os rastreadores do Google, Bing e ChatGPT a indexarem a nova autoridade em minutos.
