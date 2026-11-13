import { siteConfig } from '../config/site.config';
import { ExternalLinkIcon, CheckCircle2Icon, GaugeIcon, StarIcon } from './Icons';

export function KadoshCaseTeardown() {
  const caseData = siteConfig.kadoshCase;

  return (
    <section id="kadosh-case" className="py-24 border-b border-white/[0.08] bg-[#07090E] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-[150px] bg-emerald-500 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <GaugeIcon className="w-3.5 h-3.5" />
            <span>Estudo de Caso Empírico em Produção</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            O Teardown da Oficina Kadosh
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Como a convergência entre Programmatic SEO, arquitetura Core-Bare-Metal e agentes determinísticos 
            transformou uma operação automotiva de alto ticket em autoridade líder da Grande Goiânia.
          </p>
        </div>

        {/* Case Body: 2 Columns */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: THE STORY & ENGINEERING */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="rounded-2xl bg-white/[0.02] border border-white/[0.08] p-8 space-y-6">
              {/* Client & URL Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Cliente / Operação
                  </div>
                  <div className="text-lg font-bold text-white font-mono">
                    {caseData.client}
                  </div>
                  <div className="text-xs text-slate-400">
                    {caseData.location}
                  </div>
                </div>

                <a
                  href={caseData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold transition-colors"
                >
                  <span>kadoshautomotiva.com.br</span>
                  <ExternalLinkIcon className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* The Challenge */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold flex items-center gap-2">
                  <span>🛑 O Desafio Operacional</span>
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {caseData.challenge}
                </p>
              </div>

              {/* The Solution */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2">
                  <span>⚡ A Engenharia Aplicada</span>
                </h3>
                <div className="space-y-2.5">
                  {caseData.solution.map((sol, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2Icon className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: METRICS & IMPACT CARDS */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="grid grid-cols-2 gap-4 h-full">
              {caseData.results.map((res, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white/[0.02] border border-white/[0.08] p-6 flex flex-col justify-center items-center text-center space-y-2 hover:border-emerald-500/30 transition-all"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-400">
                    {res.metric}
                  </div>
                  <div className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                    {res.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Proof Box */}
            <div className="rounded-2xl bg-gradient-to-br from-emerald-500/[0.08] to-teal-500/[0.03] border border-emerald-500/20 p-6 space-y-3">
              <div className="flex items-center gap-1.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-mono font-bold text-white ml-2">4.7 / 5.0 no Google Maps</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                "O tempo de resposta no celular caiu de 9 segundos para 0.38s. As buscas orgânicas de cauda longa 
                no Google cobrem todos os bairros e modelos de veículos, gerando fluxo constante de orçamentos qualificados no WhatsApp."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

