import { Locale, i18nContent } from '../config/i18n.content';
import {
  ArrowRightIcon,
  GithubIcon,
  ShieldCheckIcon,
  TerminalIcon,
  ActivityIcon,
  ExternalLinkIcon,
} from './Icons';

export function Hero({ locale = 'pt' }: { locale?: Locale }) {
  const t = i18nContent[locale];

  const whatsappMsg =
    locale === 'en'
      ? 'Hello Rogério! I visited your architecture portal and would like to discuss platform engineering / advisory for my team.'
      : 'Olá Rogério! Vi seu portal de engenharia e gostaria de conversar sobre consultoria de arquitetura / automação para a minha empresa.';

  const whatsappUrl = `https://wa.me/${t.profile.whatsappDigits}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32 border-b border-white/[0.08] bg-[#07090E]">
      {/* Background Glow Emitters */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.08] blur-[140px]"
          style={{ background: 'radial-gradient(circle, #10B981 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.05] blur-[140px]"
          style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* LEFT: EDITORIAL & VALUE PROPOSITION */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Pulse Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{t.hero.topBadge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              {t.hero.headlinePrefix}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 block sm:inline">
                {t.hero.headlineHighlight}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              {t.hero.subheadline}
            </p>

            {/* Authority Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {t.badges.map((b, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-300 hover:border-emerald-500/30 transition-colors"
                >
                  <span className="text-emerald-400">⚡</span>
                  <span>{b}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons: Sim 5 (A Venda da Conversa Direta no WhatsApp) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-bold font-mono tracking-wider transition-all duration-200 shadow-[0_0_25px_rgba(16,185,129,0.25)] hover:shadow-[0_0_35px_rgba(16,185,129,0.4)] active:scale-[0.98]"
              >
                <span>{t.hero.whatsappCta}</span>
                <ArrowRightIcon className="w-4 h-4 text-slate-950" />
              </a>

              <a
                href={t.profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.1] text-slate-200 text-sm font-mono transition-all duration-200"
              >
                <GithubIcon className="w-4 h-4 text-slate-200" />
                <span>{t.hero.githubCta}</span>
                <ExternalLinkIcon className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href="#kadosh-case"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.03] hover:bg-emerald-500/10 border border-white/[0.1] hover:border-emerald-500/30 text-emerald-400 text-sm font-mono transition-all duration-200"
              >
                <span>{t.hero.exploreCta}</span>
                <ArrowRightIcon className="w-3.5 h-3.5 text-emerald-400" />
              </a>
            </div>

            {/* Microcopy de Quebra de Objeção */}
            <div className="text-[11px] font-mono text-slate-400 flex items-center gap-2 pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>
                {locale === 'en'
                  ? 'No sales pitch • Direct WhatsApp conversation with Rogério Maciel'
                  : 'Sem papo de vendedor • Conversa franca e direta com Rogério Maciel'}
              </span>
            </div>

            {/* Trust Quote */}
            <div className="pt-2 text-xs text-slate-400 font-mono italic border-l-2 border-emerald-500/40 pl-3">
              {t.hero.quote}
            </div>
          </div>

          {/* RIGHT: LIVE TELEMETRY CONSOLE / ARCHITECTURE CARD */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#090D16] border border-white/[0.1] shadow-2xl overflow-hidden">
              {/* Terminal Window Bar */}
              <div className="px-4 py-3 bg-white/[0.02] border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.hero.terminalTitle}</span>
                </div>
                <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {t.hero.terminalStatus}
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs space-y-4">
                {/* Metric 1 */}
                <div className="space-y-1">
                  <div className="text-slate-400 text-[11px] uppercase tracking-wider flex items-center justify-between">
                    <span>{t.hero.terminalMetrics.transpilerTitle}</span>
                    <span className="text-emerald-400 font-bold">{t.hero.terminalMetrics.transpilerStat}</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/[0.05] overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 w-[96%]" />
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {t.hero.terminalMetrics.transpilerDesc}
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="space-y-1 pt-2 border-t border-white/[0.05]">
                  <div className="text-slate-400 text-[11px] uppercase tracking-wider flex items-center justify-between">
                    <span>{t.hero.terminalMetrics.gitopsTitle}</span>
                    <span className="text-cyan-400 font-bold">{t.hero.terminalMetrics.gitopsStat}</span>
                  </div>
                  <div className="text-[11px] text-slate-300">
                    <span className="text-emerald-400">✓</span> {t.hero.terminalMetrics.gitopsDesc}
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="space-y-1 pt-2 border-t border-white/[0.05]">
                  <div className="text-slate-400 text-[11px] uppercase tracking-wider flex items-center justify-between">
                    <span>{t.hero.terminalMetrics.seoTitle}</span>
                    <span className="text-emerald-400 font-bold">{t.hero.terminalMetrics.seoStat}</span>
                  </div>
                  <div className="text-[11px] text-slate-300">
                    {t.hero.terminalMetrics.seoDesc}
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="space-y-1 pt-2 border-t border-white/[0.05]">
                  <div className="text-slate-400 text-[11px] uppercase tracking-wider flex items-center justify-between">
                    <span>{t.hero.terminalMetrics.fintechTitle}</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <ShieldCheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                      {t.hero.terminalMetrics.fintechStat}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {t.hero.terminalMetrics.fintechDesc}
                  </div>
                </div>

                {/* Live Activity Pulse */}
                <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2 text-slate-300">
                    <ActivityIcon className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Upwork Rate: {t.profile.hourlyRate}</span>
                  </div>
                  <div className="text-[10px] text-emerald-400 font-bold">
                    VERIFIED EXPERT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
