import { siteConfig } from '../config/site.config';
import { CpuIcon, LayersIcon, ActivityIcon, ShieldCheckIcon, CheckIcon } from './Icons';

export function EngineeringPillars() {
  const pillarIcons = [
    <CpuIcon className="w-6 h-6 text-emerald-400" />,
    <LayersIcon className="w-6 h-6 text-cyan-400" />,
    <ActivityIcon className="w-6 h-6 text-emerald-400" />,
    <ShieldCheckIcon className="w-6 h-6 text-teal-400" />,
  ];

  return (
    <section id="pilares" className="py-24 border-b border-white/[0.08] bg-[#07090E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <span>Arquitetura de Plataforma</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Os 4 Pilares da Engenharia de{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
              Rogério Maciel
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Sistemas distribuídos projetados para eliminar gargalos de concorrência, cortar custos de infraestrutura 
            e garantir resiliência operacional com rigor de engenharia de software de nível corporativo.
          </p>
        </div>

        {/* 2x2 Grid of Pillars */}
        <div className="grid md:grid-cols-2 gap-8">
          {siteConfig.pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className="rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-emerald-500/30 p-8 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                {/* Header with Icon and Big Metric */}
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {pillarIcons[index % pillarIcons.length]}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">
                      {pillar.metric}
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      {pillar.metricLabel}
                    </div>
                  </div>
                </div>

                {/* Badge & Title */}
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-emerald-400/90 font-semibold mb-1">
                    {pillar.badge}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                    {pillar.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2 pt-2">
                  {pillar.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckIcon className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills Footer */}
              <div className="pt-6 mt-6 border-t border-white/[0.06] flex flex-wrap gap-2">
                {pillar.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

