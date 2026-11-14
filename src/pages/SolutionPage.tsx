import { SolutionCluster } from '../data/solutions-clusters';
import { getEnSlug } from '../data/solutions-types';
import { ArrowRightIcon, TerminalIcon } from '../components/Icons';

export function SolutionPage({
  solution,
  locale = 'pt'
}: {
  solution: SolutionCluster;
  locale?: 'pt' | 'en';
}) {
  const isEn = locale === 'en';
  const content = (isEn && solution.en) ? solution.en : solution;
  const enSlug = getEnSlug(solution);

  const whatsappUrl = `https://wa.me/5562996232227?text=${encodeURIComponent(content.whatsappPrompt)}`;
  const ptUrl = `/solucoes/${solution.slug}/`;
  const enUrl = `/en/solutions/${enSlug}/`;

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950">
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href={isEn ? '/en/' : '/pt/'} className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center font-bold text-slate-950 font-mono shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover:scale-105 transition-transform">
              RM
            </div>
            <div>
              <div className="text-sm font-bold text-slate-100 group-hover:text-emerald-400 transition-colors tracking-tight flex items-center gap-2">
                <span>Rogério Maciel</span>
                <span className="hidden sm:inline-block text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Architect
                </span>
              </div>
              <div className="text-[11px] text-slate-400 hidden sm:block font-mono">
                Software Architect &amp; Automation Platform Engineer
              </div>
            </div>
          </a>

          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08]">
              <a
                href={ptUrl}
                className={`${!isEn ? 'text-emerald-400 font-bold' : 'text-slate-400 hover:text-white'} transition-colors`}
              >
                PT
              </a>
              <span className="text-slate-600">|</span>
              <a
                href={enUrl}
                className={`${isEn ? 'text-emerald-400 font-bold' : 'text-slate-400 hover:text-white'} transition-colors`}
              >
                EN
              </a>
            </div>

            <a
              href={isEn ? '/en/' : '/pt/'}
              className="text-xs font-mono text-slate-300 hover:text-emerald-400 transition-colors hidden sm:block"
            >
              {isEn ? '← Back to Portal' : '← Voltar ao Portal'}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold font-mono tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] active:scale-[0.98]"
            >
              <span>{isEn ? 'Chat on WhatsApp' : 'Conversar no WhatsApp'}</span>
              <ArrowRightIcon className="w-3.5 h-3.5 text-slate-950" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-32 pb-24 lg:pt-40">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumb & Category Badge */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <a href={isEn ? '/en/' : '/pt/'} className="hover:text-emerald-400 transition-colors">
                {isEn ? 'Home' : 'Início'}
              </a>
              <span>/</span>
              <span className="text-slate-500">{isEn ? 'Solutions' : 'Soluções'}</span>
              <span>/</span>
              <span className="text-emerald-400">{content.category || solution.category}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
              <TerminalIcon className="w-3.5 h-3.5" />
              <span>{content.category || solution.category}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12]">
              {content.title}
            </h1>
          </div>

          {/* Direct Answer Box (Google AI Overviews / Perplexity / AEO Fast Answer) */}
          <div className="rounded-2xl bg-gradient-to-br from-emerald-500/[0.08] to-teal-500/[0.03] border border-emerald-500/30 p-6 sm:p-8 space-y-3 shadow-[0_0_25px_rgba(16,185,129,0.1)]">
            <div className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{isEn ? 'DIRECT ARCHITECTURE ANSWER (30 SECONDS)' : 'RESPOSTA DIRETA DE ARQUITETURA (EM 30 SEGUNDOS)'}</span>
            </div>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              {content.fastAnswer}
            </p>
          </div>

          {/* Sim 1: A Dor Real do Negócio & Onde o Dinheiro Escorre */}
          <section className="rounded-2xl bg-white/[0.02] border border-white/[0.08] p-6 sm:p-8 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-rose-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-400" />
              <span>{isEn ? 'THE REAL BUSINESS PROBLEM' : 'O PROBLEMA QUE O MERCADO ESTÁ ENFRENTANDO'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {isEn ? 'What happens when companies rely on fragile workarounds' : 'O que acontece quando empresas tentam resolver isso com soluções improvisadas'}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {content.deepTension}
            </p>
          </section>

          {/* Sim 2 & 3: Anti-Venda & A Arquitetura Comprovada de Rogério Maciel */}
          <section className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/[0.02] border border-white/[0.08] p-6 sm:p-8 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                {isEn ? 'ANTI-SALES & TRANSPARENCY' : 'ANTI-VENDA & TRANSPARÊNCIA'}
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {isEn ? 'What DOES NOT work & What we DO NOT do' : 'O que NÃO funciona e o que NÃO fazemos'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {content.antiPitch}
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.03] border border-emerald-500/30 p-6 sm:p-8 space-y-3 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                {isEn ? 'REAL PRODUCTION PROOF' : 'PROVA REAL EM PRODUÇÃO'}
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {isEn ? "Rogério Maciel's Engineering" : 'A Engenharia de Rogério Maciel'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {content.authorityProof}
              </p>
            </div>
          </section>

          {/* Sim 4: A Matemática do Contraste (O Risco do Imobilismo) */}
          <section className="rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.1] p-6 sm:p-8 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              {isEn ? 'THE BUSINESS CONTRAST' : 'O CONTRASTE DE NEGÓCIO'}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {isEn ? 'The cost of inaction vs. High-performance architecture' : 'O custo de continuar como está vs. O resultado da arquitetura certa'}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {content.contrastPrejudice}
            </p>
          </section>

          {/* FAQ Accordion Nativo (Schema.org FAQPage) */}
          <section className="space-y-6 pt-4 border-t border-white/[0.08]">
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                {isEn ? 'FREQUENTLY ASKED QUESTIONS' : 'DÚVIDAS FREQUENTES'}
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                {isEn ? 'Frequently Asked Questions by CTOs & Leaders' : 'Perguntas Frequentes de Empresários & Gestores'}
              </h2>
            </div>

            <div className="space-y-3">
              {content.faq.map((item, idx) => (
                <details
                  key={idx}
                  className="group rounded-xl bg-white/[0.02] border border-white/[0.08] p-5 transition-colors open:border-emerald-500/30 open:bg-white/[0.04]"
                >
                  <summary className="font-semibold text-white cursor-pointer list-none flex items-center justify-between text-sm sm:text-base">
                    <span>{item.question}</span>
                    <span className="text-emerald-400 font-mono text-lg transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed pt-2 border-t border-white/[0.05]">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Sim 5: O Grande CTA Desarmador (Venda da Conversa no WhatsApp) */}
          <section className="rounded-3xl bg-gradient-to-b from-emerald-500/[0.08] to-transparent border border-emerald-500/30 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
              <span>{isEn ? 'Direct Conversation with Rogério Maciel' : 'Conversa Direta com Rogério Maciel'}</span>
            </div>

            <div className="max-w-2xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {isEn ? 'Want to solve this bottleneck in your company?' : 'Quer entender como resolver esse gargalo na sua empresa?'}
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                {isEn
                  ? 'No canned answers, no aggressive sales pitches. Connect directly with Rogério Maciel on WhatsApp outlining your current architecture, and I will frankly share whether and how high-performance systems can fix your problem.'
                  : 'Sem caixinhas prontas e sem papo de vendedor. Me manda uma mensagem no WhatsApp contando o seu cenário atual, e eu te digo com franqueza se e como a IA pode resolver o seu problema.'}
              </p>
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-bold font-mono tracking-wider transition-all duration-200 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_45px_rgba(16,185,129,0.5)] active:scale-[0.98]"
              >
                <span>{content.ctaLabel}</span>
                <ArrowRightIcon className="w-4 h-4 text-slate-950" />
              </a>
            </div>

            <div className="text-[11px] font-mono text-slate-400">
              {isEn
                ? 'Available for contracts worldwide (US, Europe, Latin America) and Brazil.'
                : 'Disponível para empresas em Goiânia/GO, todo o Brasil e contratos internacionais.'}
            </div>
          </section>
        </article>
      </main>

      {/* Footer Minimalista */}
      <footer className="border-t border-white/[0.08] bg-[#07090E] py-8 text-center text-xs font-mono text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            Rogério Maciel © {new Date().getFullYear()} — Software Architect &amp; Automation Platform Engineer
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <a href={isEn ? '/en/' : '/pt/'} className="hover:text-emerald-400 transition-colors">
              {isEn ? 'Home Portal' : 'Portal Principal'}
            </a>
            <a href="https://github.com/rogeriomaciel" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
              GitHub
            </a>
            <a href="https://lattes.cnpq.br/5008294767552521" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
              Lattes CNPq
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
