import { siteConfig } from '../config/site.config';
import { GithubIcon, ExternalLinkIcon, CodeIcon } from './Icons';

export function GithubShowcase() {
  return (
    <section id="github" className="py-24 border-b border-white/[0.08] bg-[#090D16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Open Source &amp; Blueprints de Produção</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Vitrine de Repositórios Públicos no GitHub
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Casos reais e código aberto de engenharia de alta escala: transpiladores, comércio conversacional em fintech, 
              arquitetura bare-metal SSG e monitoramento de atribuição de anúncios.
            </p>
          </div>

          <a
            href={siteConfig.profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-slate-200 text-xs font-mono font-bold transition-colors self-start md:self-end"
          >
            <GithubIcon className="w-4 h-4 text-slate-200" />
            <span>Ver Todos no GitHub (@rogeriomaciel)</span>
            <ExternalLinkIcon className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {siteConfig.repositories.map((repo) => (
            <div
              key={repo.name}
              className="rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-cyan-500/30 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Header with Title and Highlight Pill */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <CodeIcon className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <h3 className="text-base sm:text-lg font-bold font-mono text-white group-hover:text-cyan-300 transition-colors">
                      {repo.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
                    {repo.highlight}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {repo.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {repo.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-5 mt-5 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">
                  {repo.fullName}
                </span>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  <span>Inspecionar Repositório</span>
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

