import { Locale, i18nContent } from '../config/i18n.content';
import { ArrowRightIcon, GithubIcon } from './Icons';

export function Hero({ locale = 'pt' }: { locale?: Locale }) {
  const t = i18nContent[locale];
  const isEn = locale === 'en';

  const whatsappUrl = `https://wa.me/${t.profile.whatsappDigits}?text=${encodeURIComponent(
    'Olá Rogério! Vi seu site e quero conversar sobre o meu cenário atual.'
  )}`;

  return (
    <section id="top" className="pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-white/[0.08] bg-[#07090E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* SIM 1: HUMAN PAIN & WHO SPEAKS */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              {isEn
                ? 'Rogério Maciel • 20+ Years in Software Architecture'
                : 'Rogério Maciel • 20+ Anos em Arquitetura de Software'}
            </p>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.12]">
              {isEn
                ? 'Automations crashing under load? AI inventing answers? Ads burning without attribution?'
                : 'Sua automação trava quando cresce, sua IA inventa resposta ou o tráfego pago não fecha a conta?'}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {isEn
                ? 'I design and ship the production backend that fixes those three bottlenecks — so your team stops firefighting low-code crashes and starts measuring real revenue.'
                : 'Eu projeto e coloco em produção a engenharia que resolve esses três gargalos — para você parar de apagar incêndio técnico e enxergar retorno real no caixa.'}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={isEn ? '#doors' : whatsappUrl}
                target={isEn ? undefined : '_blank'}
                rel={isEn ? undefined : 'noopener noreferrer'}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-bold font-mono tracking-wide transition-colors"
              >
                <span>{isEn ? 'See How I Solve This' : 'Falar Comigo no WhatsApp'}</span>
                <ArrowRightIcon className="w-4 h-4 text-slate-950" />
              </a>

              <a
                href={isEn ? '/en/cases/' : '#doors'}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-slate-200 text-sm font-mono transition-colors"
              >
                <span>{isEn ? 'Explore Live Cases' : 'Escolher Por Gargalo ↓'}</span>
              </a>

              <a
                href={t.profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-slate-400 hover:text-white text-sm font-mono transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* RIGHT: CLEAN PORTRAIT */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0B101B] border border-white/[0.08] overflow-hidden max-w-sm mx-auto lg:ml-auto">
              <div className="aspect-square w-full bg-[#090D16] overflow-hidden">
                <img
                  src="/images/rogerio-maciel.webp"
                  alt="Rogério Marinho Maciel — Software Architect"
                  width={480}
                  height={480}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-4 sm:p-5 border-t border-white/[0.06] flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-bold text-white">{t.profile.name}</div>
                  <div className="text-xs font-mono text-slate-400">
                    {isEn ? 'UFPB • Ex-Head Neoway • Ex-CTO' : 'UFPB • Ex-Head Neoway • Ex-CTO'}
                  </div>
                </div>
                <a
                  href={isEn ? '/en/about/' : '/pt/sobre/'}
                  className="text-xs font-mono text-emerald-400 hover:text-emerald-300 whitespace-nowrap"
                >
                  {isEn ? 'Bio →' : 'História →'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
