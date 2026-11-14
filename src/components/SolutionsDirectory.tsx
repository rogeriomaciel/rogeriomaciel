import { useState } from 'react';
import { solutionsClusters, SolutionCluster } from '../data/solutions-clusters';
import { ArrowRightIcon, TerminalIcon } from './Icons';

export function SolutionsDirectory({ locale = 'pt' }: { locale?: 'pt' | 'en' }) {
  const [activeCategory, setActiveCategory] = useState<string>('Todas');

  const categories = [
    'Todas',
    'IA no WhatsApp',
    'Soluções por Nicho',
    'Engenharia de Vendas',
    'Autoridade Regional',
    'Engenharia de Plataforma'
  ];

  const filtered = activeCategory === 'Todas'
    ? solutionsClusters
    : solutionsClusters.filter(c => c.category === activeCategory);

  return (
    <section id="solucoes" className="py-24 sm:py-32 relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>{locale === 'en' ? 'Production Solutions Catalog' : 'Catálogo de Soluções em Produção'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            {locale === 'en'
              ? 'Real Business Problems Solved with Precision Engineering'
              : 'Dores Reais de Negócio Resolvidas com Engenharia de Precisão'}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {locale === 'en'
              ? 'Explore detailed case studies and technical architectures for conversational AI, speed-to-lead, and low-latency distributed systems.'
              : 'Explore estudos de caso aprofundados sobre IA no WhatsApp, automações sem alucinação, transbordo inteligente e microsserviços de 5ms.'}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                  : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filtered.map((sol: SolutionCluster) => (
            <a
              key={sol.slug}
              href={`/solucoes/${sol.slug}/`}
              className="group rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-emerald-500/40 p-6 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-[0_0_25px_rgba(16,185,129,0.12)] hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-emerald-400 font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    {sol.category}
                  </span>
                  <span className="text-slate-400">Teardown</span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                  {sol.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {sol.metaDescription}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-emerald-400 font-semibold">
                <span>{locale === 'en' ? 'Read full architecture' : 'Ver arquitetura completa'}</span>
                <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
