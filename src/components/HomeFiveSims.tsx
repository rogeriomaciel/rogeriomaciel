import { Locale, i18nContent } from '../config/i18n.content';
import { ArrowRightIcon } from './Icons';

export function HomeFiveSims({ locale = 'pt' }: { locale?: Locale }) {
  const t = i18nContent[locale];
  const isEn = locale === 'en';

  const whatsappUrl = `https://wa.me/${t.profile.whatsappDigits}?text=${encodeURIComponent(
    'Olá Rogério! Vi seu site e quero conversar sobre o meu cenário atual.'
  )}`;
  const emailUrl = `mailto:${t.profile.email}?subject=${encodeURIComponent(
    'Architecture / AI Engineering Inquiry'
  )}`;

  const doors = isEn
    ? [
        {
          num: '01',
          title: 'Low-Code Bottlenecks & Cloud Cost',
          pain: 'Your n8n workflows hit memory limits (OOM) or slow down as volume grows.',
          action: 'Inspect n8n → Fastify 5ms Transpiler',
          href: '/en/architecture/',
        },
        {
          num: '02',
          title: 'AI Hallucinations & Race Conditions',
          pain: 'Your AI bot invents prices, loses context, or sends duplicate replies under burst messages.',
          action: 'Explore 73-Workflow FSM & Atomic Locks',
          href: '/en/ai-systems/',
        },
        {
          num: '03',
          title: 'Blind Ad Spend & Sales SLA',
          pain: 'You pay for Meta Ads / leads, but cannot trace which clicks actually turned into revenue.',
          action: 'View Live Systems & P&L Cases',
          href: '/en/cases/',
        },
      ]
    : [
        {
          num: '01',
          title: 'Automação Travando & Custo de Nuvem',
          pain: 'Seus fluxos no n8n estouram memória (OOM) ou ficam lentos quando o volume sobe.',
          action: 'Ver Transpilador n8n → Fastify 5ms',
          href: '/pt/arquitetura/',
        },
        {
          num: '02',
          title: 'IA Alucinando ou Duplicando Resposta',
          pain: 'Seu robô inventa preço, perde o fio ou responde duas vezes quando o cliente manda vários áudios.',
          action: 'Explorar FSM de 73 Fluxos & Travas',
          href: '/pt/ia-em-producao/',
        },
        {
          num: '03',
          title: 'Tráfego Pago Cego & SLA de Vendedores',
          pain: 'Você investe em anúncios, mas não sabe qual clique virou atendimento rápido e faturamento.',
          action: 'Ver Sistemas Online & Cases Reais',
          href: '/pt/cases/',
        },
      ];

  return (
    <>
      {/* SIM 2: WHO IS BEHIND IT (3 VERIFIABLE FACTS -> ABOUT) */}
      <section className="py-14 border-b border-white/[0.08] bg-[#090D16]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                {isEn ? '02 / Why Trust This Work' : '02 / Quem Está Por Trás'}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                {isEn
                  ? 'Not a weekend prompt wrapper. Two decades of real systems.'
                  : 'Não é código de fim de semana. São 20+ anos em produção.'}
              </h2>
            </div>
            <a
              href={isEn ? '/en/about/' : '/pt/sobre/'}
              className="text-sm font-mono text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>{isEn ? 'Full Executive Timeline' : 'Ver Trajetória Completa'}</span>
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#07090E] border border-white/[0.08] space-y-2">
              <div className="text-xs font-mono text-emerald-400">UFPB • CNPq / FINEP</div>
              <h3 className="text-base font-bold text-white">
                {isEn ? 'Real-Time Engineering Since 2001' : 'Tempo Real & Pesquisa Desde 2001'}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {isEn
                  ? 'B.S. in Computer Science and CNPq research scholar building industrial sensor telemetry showcased at Rio Oil & Gas.'
                  : 'Ciência da Computação pela UFPB e pesquisador CNPq/FINEP em telemetria industrial homologada na Rio Oil & Gas.'}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#07090E] border border-white/[0.08] space-y-2">
              <div className="text-xs font-mono text-cyan-400">NEOWAY • TRAFFEGA • SEFAZ</div>
              <h3 className="text-base font-bold text-white">
                {isEn ? 'M&A Exit & C-Level Execution' : 'M&A, Head de Engenharia & CTO'}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {isEn
                  ? 'Built software acquired by Latin America’s largest Big Data company (Neoway), led engineering teams as Head, and served as CTO.'
                  : 'Software próprio adquirido pela Neoway, liderança de times como Head de Aplicação Digital, ex-CTO na Traffega e pioneiro NF-e.'}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#07090E] border border-white/[0.08] space-y-2">
              <div className="text-xs font-mono text-emerald-400">2026 PRODUCTION</div>
              <h3 className="text-base font-bold text-white">
                {isEn ? '40+ Repos & 240+ PRs Shipped in 2026' : '40+ Repositórios & 240+ PRs em 2026'}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {isEn
                  ? 'Active hands-on builder shipping AI FSMs, Fastify transpilers, Stripe HMAC security, and live multi-tenant SaaS.'
                  : 'Mão na massa diária entregando máquinas de estado de IA, transpiladores Fastify, segurança Stripe e SaaS multi-tenant.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SIM 3: THREE DOORS -> SUBFOLDERS */}
      <section id="doors" className="py-16 lg:py-20 border-b border-white/[0.08] bg-[#07090E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 space-y-2">
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              {isEn ? '03 / Choose Your Bottleneck' : '03 / Escolha o Seu Gargalo'}
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              {isEn
                ? 'Where do you want to dive in?'
                : 'Qual problema você quer destravar primeiro?'}
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              {isEn
                ? 'Instead of a wall of text, pick the area that hurts today to inspect the real diagrams, code, and live deployments.'
                : 'Em vez de ler uma enciclopédia na Home, clique direto na pasta do problema que está travando a sua operação hoje.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {doors.map((door) => (
              <a
                key={door.num}
                href={door.href}
                className="group p-7 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-emerald-500/50 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <span className="text-xs font-mono text-emerald-400 font-bold">{door.num}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {door.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{door.pain}</p>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">
                  <span>{door.action}</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SIM 4: SHORT VALUE CONTRAST */}
      <section className="py-14 border-b border-white/[0.08] bg-[#090D16]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              {isEn ? '04 / Cost of Inaction vs. Engineering ROI' : '04 / O Custo de Não Resolver vs. Retorno'}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              {isEn ? 'What changes in production' : 'O que muda na prática'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#07090E] border border-white/[0.08]">
              <div className="text-xs font-mono text-slate-400 mb-2">
                {isEn ? 'Infrastructure Footprint' : 'Consumo de Infraestrutura'}
              </div>
              <div className="flex items-baseline gap-2 font-mono">
                <span className="text-sm text-red-400 line-through">1.2 GB RAM</span>
                <span className="text-slate-500">→</span>
                <span className="text-2xl font-bold text-emerald-400">25 MB</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                {isEn ? '126 workflows transpiled to Fastify + Bun.' : '126 fluxos transpilados para Fastify + Bun.'}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#07090E] border border-white/[0.08]">
              <div className="text-xs font-mono text-slate-400 mb-2">
                {isEn ? 'Execution Latency' : 'Latência de Execução'}
              </div>
              <div className="flex items-baseline gap-2 font-mono">
                <span className="text-sm text-red-400 line-through">~500 ms</span>
                <span className="text-slate-500">→</span>
                <span className="text-2xl font-bold text-emerald-400">5 ms</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                {isEn ? '5.8x throughput verified with reproducible benchmarks.' : '5.8x mais vazão com benchmark reproduzível.'}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#07090E] border border-white/[0.08]">
              <div className="text-xs font-mono text-slate-400 mb-2">
                {isEn ? 'Revenue Accountability' : 'Controle Comercial'}
              </div>
              <div className="flex items-baseline gap-2 font-mono">
                <span className="text-sm text-red-400 line-through">{isEn ? 'Blind Clicks' : 'Cliques Cegos'}</span>
                <span className="text-slate-500">→</span>
                <span className="text-2xl font-bold text-cyan-400">Ad → P&amp;L</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                {isEn ? 'Exact-second SLA + closed-loop ad attribution.' : 'SLA ao segundo + atribuição do anúncio ao caixa.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SIM 5: ZERO-PRESSURE NEXT STEP + CATALOG LINK */}
      <section className="py-16 lg:py-20 bg-[#07090E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-xs font-mono uppercase tracking-widest text-emerald-400">
            {isEn ? '05 / Next Step' : '05 / Próximo Passo'}
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            {isEn
              ? 'Send me your current bottleneck. No sales pitch.'
              : 'Me conta o seu gargalo atual. Sem papo de vendedor.'}
          </h2>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {isEn
              ? 'Whether you found me via Upwork or GitHub, send a short note with your stack and problem. In 5 minutes I will tell you honestly if and how it can be fixed.'
              : 'Me manda uma mensagem direta explicando a sua operação atual. Em poucos minutos eu te digo com franqueza se e como dá para resolver.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={isEn ? emailUrl : whatsappUrl}
              target={isEn ? undefined : '_blank'}
              rel={isEn ? undefined : 'noopener noreferrer'}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-bold font-mono transition-colors"
            >
              <span>{isEn ? 'Email Me Directly' : 'Conversar no WhatsApp'}</span>
              <ArrowRightIcon className="w-4 h-4 text-slate-950" />
            </a>

            <a
              href={isEn ? '/en/solutions/' : '/solucoes/'}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-slate-200 text-sm font-mono transition-colors"
            >
              <span>{isEn ? 'Browse Full Engineering Catalog (38+ Guides)' : 'Explorar Catálogo Técnico Completo (38+ Guias)'}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
