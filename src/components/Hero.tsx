import { Locale, i18nContent } from '../config/i18n.content';
import {
  ArrowRightIcon,
  GithubIcon,
  ExternalLinkIcon,
} from './Icons';

export function Hero({ locale = 'pt' }: { locale?: Locale }) {
  const t = i18nContent[locale];
  const isEn = locale === 'en';

  const whatsappMsg = isEn
    ? 'Hello Rogério! I visited your architecture portal and would like to discuss platform engineering / advisory for my team.'
    : 'Olá Rogério! Vi seu portal de engenharia e gostaria de conversar sobre consultoria de arquitetura / automação para a minha empresa.';

  const whatsappUrl = `https://wa.me/${t.profile.whatsappDigits}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28 border-b border-white/[0.08] bg-[#07090E]">
      {/* Subtle Architectural Backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 right-1/4 w-[520px] h-[520px] rounded-full opacity-[0.05] blur-[140px]"
          style={{ background: 'radial-gradient(circle, #10B981 0%, transparent 70%)' }}
          aria-hidden="true"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* LEFT: EDITORIAL & BUSINESS VALUE PROPOSITION */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>
                {isEn
                  ? 'Software Architect • Ex-Head at Neoway • Ex-CTO'
                  : 'Arquiteto de Software • Ex-Head na Neoway • Ex-CTO'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-white leading-[1.08]">
              {isEn ? (
                <>
                  Architecture That Cuts Cloud Bills, Eliminates AI Hallucinations &amp;{' '}
                  <span className="text-emerald-400">Protects P&amp;L.</span>
                </>
              ) : (
                <>
                  Arquitetura que Corta Custo de Nuvem, Blinda IA em Produção e{' '}
                  <span className="text-emerald-400">Protege Margem.</span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {isEn
                ? '20+ years bridging distributed systems, AI orchestration, and executive execution. From UFPB/CNPq real-time telemetry and post-M&A leadership at Neoway to transpiling 126 n8n workflows into 5ms Fastify/Bun microservices.'
                : 'Mais de 20 anos unindo sistemas distribuídos, orquestração de IA e gestão executiva. Da pesquisa CNPq/FINEP na UFPB e liderança pós-M&A na Neoway à transpilação de 126 fluxos n8n em microsserviços Fastify/Bun de 5ms.'}
            </p>

            {/* Clean 3-Metric Strip (No Fake Terminal Bars) */}
            <div className="grid grid-cols-3 gap-4 py-5 border-y border-white/[0.08]">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">20+ yrs</div>
                <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                  {isEn ? 'Systems & C-Level' : 'Sistemas & Liderança'}
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">5ms / -98%</div>
                <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                  {isEn ? 'n8n → Fastify RAM' : 'n8n → Fastify RAM'}
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">Ad → P&amp;L</div>
                <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                  {isEn ? 'Closed-Loop ROI' : 'Atribuição Ponta a Ponta'}
                </div>
              </div>
            </div>

            {/* Market-Calibrated CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              {isEn ? (
                <>
                  <a
                    href="#pilares"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-bold font-mono tracking-wider transition-all duration-200 active:scale-[0.98]"
                  >
                    <span>Inspect Architecture</span>
                    <ArrowRightIcon className="w-4 h-4 text-slate-950" />
                  </a>
                  <a
                    href={t.profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-slate-200 text-sm font-mono transition-all duration-200"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-200" />
                    <span>GitHub (@rogeriomaciel)</span>
                    <ExternalLinkIcon className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                  <a
                    href={`mailto:${t.profile.email}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-transparent hover:bg-white/[0.04] border border-white/[0.1] text-slate-300 hover:text-white text-sm font-mono transition-all duration-200"
                  >
                    <span>Email Advisory</span>
                  </a>
                </>
              ) : (
                <>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-bold font-mono tracking-wider transition-all duration-200 active:scale-[0.98]"
                  >
                    <span>Conversar no WhatsApp</span>
                    <ArrowRightIcon className="w-4 h-4 text-slate-950" />
                  </a>
                  <a
                    href="#pilares"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-slate-200 text-sm font-mono transition-all duration-200"
                  >
                    <span>Ver Arquitetura</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 text-emerald-400" />
                  </a>
                  <a
                    href={t.profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-transparent hover:bg-white/[0.04] border border-white/[0.1] text-slate-300 hover:text-white text-sm font-mono transition-all duration-200"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-200" />
                    <span>GitHub</span>
                  </a>
                </>
              )}
            </div>
          </div>

          {/* RIGHT: EXECUTIVE PORTRAIT & VERIFIABLE CREDENTIALS */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0B101B] border border-white/[0.1] overflow-hidden shadow-2xl max-w-md mx-auto lg:ml-auto">
              <div className="aspect-square w-full bg-[#090D16] relative overflow-hidden">
                <img
                  src="/images/rogerio-maciel.webp"
                  alt="Rogério Marinho Maciel — Software Architect & Automation Platform Engineer"
                  width={480}
                  height={480}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0B101B] to-transparent pointer-events-none" />
              </div>

              <div className="p-5 sm:p-6 space-y-3 border-t border-white/[0.06]">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h2 className="text-base font-bold text-white tracking-tight">
                      {t.profile.name}
                    </h2>
                    <p className="text-xs font-mono text-emerald-400">
                      {isEn ? 'Software Architect & Platform Lead' : 'Arquiteto de Software & Líder Técnico'}
                    </p>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-slate-300">
                    {t.profile.hourlyRate}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-slate-400 leading-relaxed space-y-1 pt-2 border-t border-white/[0.06]">
                  <div>• B.S. Computer Science (UFPB) • CNPq / FINEP</div>
                  <div>• Ex-Head Digital Applications (Neoway, Post-M&amp;A)</div>
                  <div>• Ex-CTO (Traffega) • Empretec (UN / SEBRAE)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
