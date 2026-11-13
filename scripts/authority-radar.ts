import * as childProcess from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';

interface CommitItem {
  hash: string;
  subject: string;
  author: string;
  date: string;
}

interface TrendOpportunity {
  topic: string;
  marketPain: string;
  solutionAngle: string;
  targetAudience: string;
  geoTarget: string;
}

const opportunities: TrendOpportunity[] = [
  {
    topic: 'Real-Time Trend Surfing & Instant SEO/AI Indexing (Surfar a Onda em Horas)',
    marketPain: 'SEO tradicional leva semanas ou meses para engajar. Quando a página finalmente indexa, a tendência quente já passou e o tráfego foi para concorrentes ou leilões caros de Ads.',
    solutionAngle: 'Esteira bare-metal em React + Bun que detecta a dor, compila páginas SSG ultrarrápidas (<0.4s) e força a indexação no Google Indexing API e IndexNow em HORAS, posicionando na 1ª página e sendo citado por ChatGPT Search/Perplexity enquanto a onda ainda está no auge.',
    targetAudience: 'Chief Growth Officers (CGOs), Diretores de Marketing, Founders de Escala e Gestores de Tráfego.',
    geoTarget: 'Goiânia e Goiás (captura regional de leads), Brasil e Marcas Internacionais.'
  },
  {
    topic: 'Transpilação n8n ➔ Fastify/Bun (Baixa Latência & Queda de 98% de RAM)',
    marketPain: 'Servidores de n8n batendo 100% de CPU/RAM em automações de alto volume e webhooks demorando 4 a 12s para responder.',
    solutionAngle: 'Transpilar grafos de automação para microsserviços em Fastify e Bun: latência média de 5ms e redução de 98% no consumo de memória (de 1.2GB para 25MB).',
    targetAudience: 'CTOs, Heads de Operação, Founders de SaaS e Líderes de Engenharia.',
    geoTarget: 'Goiânia/GO (grandes operações corporativas), Brasil e Contratos Remotos no Upwork.'
  },
  {
    topic: 'GitOps Bi-Direcional para n8n com DAGs de Kahn',
    marketPain: 'Alterações perigosas feitas diretamente no canvas visual de produção derrubando fluxos críticos de vendas sem versionamento ou code review.',
    solutionAngle: 'Esteira GitOps com ambiente de staging visual sincronizado no Git (PRs/Code Review) e deploy automatizado via API oficial com ordenação topológica de DAGs.',
    targetAudience: 'Tech Leads, Engenheiros DevOps e Gestores de TI.',
    geoTarget: 'Brasil e Internacional.'
  },
  {
    topic: 'Fintech: Checkout Conversacional WhatsApp + HMAC Seguro',
    marketPain: 'Fricção extrema ao desviar o cliente do chat para sites lentos, além de vulnerabilidade a timing attacks em webhooks de pagamento.',
    solutionAngle: 'Sessão de Stripe Checkout dinâmica gerada dentro do WhatsApp com validação criptográfica HMAC-SHA256 em tempo constante (timingSafeEqual).',
    targetAudience: 'Empresas de E-commerce, Infoprodutores e Redes Varejistas.',
    geoTarget: 'Goiás e Nacional.'
  },
  {
    topic: 'IA Corporativa sem Alucinação & Agentes com Guardrails Determinísticos',
    marketPain: 'Empresas querendo adotar agentes de IA mas com medo de vazamento de dados confidenciais ou respostas alucinadas que quebram o negócio.',
    solutionAngle: 'Arquitetura de agentes locais em VPS privada com esquemas determinísticos de JSON, guardrails estritos e integração direta com ERP/CRM.',
    targetAudience: 'Diretores de Operações, Agronegócio, Hospitais e Indústrias.',
    geoTarget: 'Polo Industrial de Goiás, Goiânia e Centro-Oeste.'
  }
];

function getRecentCommits(limit = 10): CommitItem[] {
  try {
    const raw = childProcess.execSync(`git log -n ${limit} --format="%h|%s|%an|%ad" --date=short`, {
      encoding: 'utf-8',
      stdio: ['ignore', 'pipe', 'ignore']
    });
    return raw
      .trim()
      .split('\n')
      .filter(line => line.includes('|'))
      .map(line => {
        const [hash, subject, author, date] = line.split('|');
        return { hash, subject, author, date };
      });
  } catch (e) {
    return [];
  }
}

async function runRadar() {
  console.log('🛰️  [Core Authority Radar] Analisando atividade técnica e tendências de mercado...\n');

  const commits = getRecentCommits(8);

  console.log('📌 COMMITS RECENTES IDENTIFICADOS NO GIT:');
  if (commits.length === 0) {
    console.log('   (Nenhum commit recente encontrado no repositório local)');
  } else {
    commits.forEach(c => {
      console.log(`   • [${c.hash}] ${c.date} — ${c.subject}`);
    });
  }

  console.log('\n──────────────────────────────────────────────────────────────────────────────');
  console.log('🎯 MATRIZ DE OPORTUNIDADES DE AUTORIDADE & VENDA (Dores Quentes de Mercado):');
  console.log('──────────────────────────────────────────────────────────────────────────────\n');

  opportunities.forEach((op, idx) => {
    console.log(`[OPÇÃO ${idx + 1}] ${op.topic}`);
    console.log(`   🔴 A Dor do Mercado: ${op.marketPain}`);
    console.log(`   🟢 A Solução de Rogério Maciel: ${op.solutionAngle}`);
    console.log(`   🎯 Público Alvo: ${op.targetAudience}`);
    console.log(`   📍 Posicionamento Geográfico: ${op.geoTarget}`);
    console.log('');
  });

  console.log('──────────────────────────────────────────────────────────────────────────────');
  console.log('💡 COMANDOS DISPONÍVEIS:');
  console.log('   • Para compilar e testar pré-renderização: bun run build');
  console.log('   • Para notificar Google após publicar: bun run index:google');
  console.log('   • Para notificar Bing/ChatGPT Search: bun run index:bing');
  console.log('──────────────────────────────────────────────────────────────────────────────\n');
}

runRadar();
