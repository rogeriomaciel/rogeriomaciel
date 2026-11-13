import * as childProcess from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';

interface CommitItem {
  hash: string;
  subject: string;
  author: string;
  date: string;
}

interface FiveYesPillar {
  sim1_dor: string;
  sim2_antivenda: string;
  sim3_autoridade: string;
  sim4_contraste: string;
  sim5_cta_whatsapp: string;
}

interface TrendOpportunity {
  topic: string;
  targetAudience: string;
  geoTarget: string;
  fiveYes: FiveYesPillar;
}

const opportunities: TrendOpportunity[] = [
  {
    topic: 'Vendas Perdidas no WhatsApp: O Atendimento com IA em 3s (Zero Alucinação)',
    targetAudience: 'Empresários, Diretores Comerciais e Founders de PMEs / E-commerce.',
    geoTarget: 'Goiânia/GO, Polo Industrial de Goiás e Nacional.',
    fiveYes: {
      sim1_dor: 'Perda comprovada de 20% a 40% das vendas no WhatsApp porque o cliente chama à noite ou fim de semana e a equipe demora horas para responder.',
      sim2_antivenda: 'Chatbots genéricos de R$ 99 passam vergonha, inventam descontos e irritam o cliente. Soluções prontas não entendem o seu processo.',
      sim3_autoridade: '20+ anos de engenharia, ex-Head Neoway Big Data e arquitetura FSM determinística (caso Kadosh com 220+ avaliações 4.7★).',
      sim4_contraste: 'Continuar jogando dinheiro fora em tráfego pago para o lead esfriar vs. ter um agente que responde em 3s e qualifica na hora.',
      sim5_cta_whatsapp: 'Trocar uma ideia sem compromisso no WhatsApp direto com Rogério Maciel para entender onde está o gargalo da empresa.'
    }
  },
  {
    topic: 'Real-Time Trend Surfing: Conquistar a 1ª Página do Google e Buscas de IA em Horas',
    targetAudience: 'Chief Growth Officers (CGOs), Diretores de Marketing e Donos de Negócios Locais de Alto Ticket.',
    geoTarget: 'Goiânia/GO (negócios locais), Brasil e Internacional.',
    fiveYes: {
      sim1_dor: 'SEO tradicional demora semanas para ranquear e a onda quente de demanda passa, forçando a empresa a pagar fortunas por clique no Google Ads.',
      sim2_antivenda: 'Agências tradicionais vendem "contrato de SEO de 6 meses" com relatórios que não trazem 1 cliente no WhatsApp.',
      sim3_autoridade: 'Arquitetura Bare-Metal em Bun + SSG com disparo atômico via Google Indexing API e IndexNow (Bing/ChatGPT) no minuto do deploy.',
      sim4_contraste: 'Gastar R$ 10 a R$ 30 por clique em leilões inflacionados vs. surfar a busca orgânica e citações no ChatGPT Search em poucas horas a custo zero.',
      sim5_cta_whatsapp: 'Mandar uma mensagem no WhatsApp para avaliar quais demandas da sua cidade sua empresa pode surfar agora.'
    }
  },
  {
    topic: 'O Gargalo do n8n: Como Eliminamos 98% da Memória e Batemos 5ms de Latência',
    targetAudience: 'CTOs, Tech Leads, Engenheiros de Automação e Clientes Globais do Upwork.',
    geoTarget: 'Upwork Internacional (EUA/Europa), Brasil e Grandes Operações.',
    fiveYes: {
      sim1_dor: 'Servidores de n8n batendo 100% de CPU/RAM em dias de pico e webhooks demorando 4 a 12s para responder, travando integrações críticas.',
      sim2_antivenda: 'Subir o tamanho da máquina na AWS só mascara o problema e multiplica a fatura da nuvem.',
      sim3_autoridade: 'Transpilador próprio de DAGs via algoritmo de Kahn que converte nós visuais em microsserviços compilados Fastify/Bun (código público no GitHub @rogeriomaciel).',
      sim4_contraste: 'Gastar R$ 5.000 a mais por mês em servidores lentos vs. rodar 126 fluxos com 25MB de RAM e 5ms estáveis.',
      sim5_cta_whatsapp: 'Conectar no WhatsApp ou no Upwork para uma auditoria técnica de arquitetura de automação.'
    }
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
  console.log('🛰️  [Core Authority Radar v2.0] Conectando Atividade do GitHub ➔ Psicologia dos 5 Sims ➔ WhatsApp Lead\n');

  const commits = getRecentCommits(6);

  console.log('📌 COMMITS RECENTES IDENTIFICADOS NO GIT:');
  if (commits.length === 0) {
    console.log('   (Nenhum commit recente)');
  } else {
    commits.forEach(c => {
      console.log(`   • [${c.hash}] ${c.date} — ${c.subject}`);
    });
  }

  console.log('\n──────────────────────────────────────────────────────────────────────────────');
  console.log('🎯 MATRIZ DE GERAÇÃO DE CONVERSAS NO WHATSAPP (Os 5 Sims em Ação):');
  console.log('──────────────────────────────────────────────────────────────────────────────\n');

  opportunities.forEach((op, idx) => {
    console.log(`[OPORTUNIDADE ${idx + 1}] ${op.topic}`);
    console.log(`   🎯 Público: ${op.targetAudience} | 📍 Alvo: ${op.geoTarget}`);
    console.log(`   • [Sim 1 - Kotler (Dor)]: ${op.fiveYes.sim1_dor}`);
    console.log(`   • [Sim 2 - Gitomer (Anti-Venda)]: ${op.fiveYes.sim2_antivenda}`);
    console.log(`   • [Sim 3 - Cialdini (Autoridade)]: ${op.fiveYes.sim3_autoridade}`);
    console.log(`   • [Sim 4 - Hormozi (Contraste)]: ${op.fiveYes.sim4_contraste}`);
    console.log(`   • [Sim 5 - Carol Iasmim (CTA WhatsApp)]: ${op.fiveYes.sim5_cta_whatsapp}`);
    console.log('');
  });

  console.log('──────────────────────────────────────────────────────────────────────────────');
  console.log('💡 COMANDOS DISPONÍVEIS:');
  console.log('   • Para compilar com SSG: bun run build');
  console.log('   • Para indexar no Google em minutos: bun run index:google');
  console.log('   • Para indexar no Bing/ChatGPT Search: bun run index:bing');
  console.log('──────────────────────────────────────────────────────────────────────────────\n');
}

runRadar();
