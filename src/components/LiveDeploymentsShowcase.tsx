import { Locale, i18nContent } from '../config/i18n.content';
import { ExternalLinkIcon, ActivityIcon } from './Icons';

export function LiveDeploymentsShowcase({ locale = 'pt' }: { locale?: Locale }) {
  const t = i18nContent[locale];
  const section = t.deploymentsSection;

  return (
    <section id="producao" className="py-24 border-b border-white/[0.08] bg-[#07090E] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.05] blur-[160px] bg-emerald-500 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{section.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {section.title}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {section.subtitle}
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-emerald-400/80 bg-white/[0.02] border border-white/[0.08] px-4 py-2 rounded-xl">
            <ActivityIcon className="w-4 h-4 text-emerald-400" />
            <span>6/6 Ambientes Auditados & Operacionais</span>
          </div>
        </div>

        {/* Deployments 3-Column Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {section.deployments.map((dep) => (
            <div
              key={dep.id}
              className="rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-emerald-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group relative"
            >
              <div className="space-y-4">
                {/* Header: Category & Pulse Status */}
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/[0.06]">
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                    {dep.category}
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>{dep.status}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold font-mono text-white group-hover:text-emerald-300 transition-colors">
                  {dep.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed min-h-[4rem]">
                  {dep.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {dep.stack.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-5 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400 truncate max-w-[170px]">
                  {dep.displayUrl}
                </span>
                <a
                  href={dep.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 text-xs font-mono font-semibold transition-all shadow-sm"
                >
                  <span>{section.accessLiveButton}</span>
                  <ExternalLinkIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
