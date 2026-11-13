# Zero-Leak Sanitizer — Protocolo de Segurança & Anonimização de Código

Este protocolo estabelece as regras invioláveis de proteção intelectual, confidencialidade de clientes e segurança da informação ao transformar commits, branches e arquivos de repositórios em peças de autoridade e conteúdo público.

---

## 🚫 1. Lista Negra Inegociável (Nunca Publicar ou Expor)

| Categoria | O que NÃO pode aparecer | Ação Corretiva do Agente |
| :--- | :--- | :--- |
| **Credenciais & Segredos** | API Keys, Tokens JWT, senhas, webhooks com tokens, URLs com assinaturas | Substituir por placeholders genéricos (`process.env.STRIPE_SECRET_KEY`, `process.env.API_TOKEN`) |
| **Identificadores de Clientes** | Nomes de empresas clientes, CNPJs, nomes de sócios, domínios de clientes | Anonimizar como *"Grande operação de e-commerce"*, *"Empresa do setor automotivo em Goiás"*, *"Fintech nacional"* |
| **Infraestrutura Interna** | IPs de servidores (`50.19.157.121`, etc.), portas customizadas, subdomínios internos de staging | Substituir por nomes lógicos (`edge-gateway`, `vps-production`, `db-cluster`) |
| **Dados Pessoais (LGPD/GDPR)** | CPFs, e-mails de usuários, números de telefone de clientes, dados de WhatsApp de terceiros | Anonimizar 100% ou usar exemplos canônicos (`user@example.com`, `+55 62 99999-0000`) |
| **Regras de Negócio Críticas** | Algoritmos com segredo comercial único de clientes (ex: precificação confidencial, fórmulas proprietárias) | Extrair apenas a **técnica computacional** (ex: *"Algoritmo de Ordenação Topológica de Kahn"* ou *"Validação em tempo constante com timingSafeEqual"*) |

---

## 🛡️ 2. A Técnica da "Casca Arquitetural" (Architectural Shelling)

Para dar publicidade ao seu trabalho sem expor código fechado:
1. **Foco no DIAGRAMA CONCEITUAL e no FLUXO**:
   - Em vez de colar 200 linhas de código do cliente, apresente o diagrama de blocos em Mermaid ou tabela de decisões:
     - Entrada ➔ Validação de Assinatura ➔ Fila em Memória ➔ Processamento Concorrente ➔ Resposta 5ms.
2. **Foco nas MÉTRICAS e no IMPACTO**:
   - Destaque o ganho mensurável:
     - De 1.2GB de RAM para 25MB (-98%).
     - De 850ms de latência para 5ms (Fastify/Bun).
     - De deploys manuais com risco para Rollback Atômico em GitOps.
3. **Foco no PADRÃO DESIGN & DECISÃO DE ENGENHARIA**:
   - Explique **por que** a solução padrão quebrou e **como** a sua abordagem resolveu (ex: troca de JSON stringify pesado por streams nativos).

---

## 🔍 3. Checklist Automático de Pré-Publicação

Antes de qualquer publicação no site, no `llms-full.txt` ou em redes sociais, valide:
- [ ] O texto contém algum token de acesso, hash de senha ou URL privada?
- [ ] O nome do cliente ou da marca contratante foi anonimizado?
- [ ] Os trechos de código mostrados são genéricos e educativos (sem lógica de negócio confidencial)?
- [ ] As métricas apresentadas destacam a capacidade de entrega sem quebrar sigilo?
