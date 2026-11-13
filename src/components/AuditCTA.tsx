import { siteConfig, getWhatsAppConsultUrl } from '../config/site.config';
import { ArrowRightIcon, ExternalLinkIcon, ShieldCheckIcon, TerminalIcon } from './Icons';

export function AuditCTA() {
  return (
    <section id="contato" className="py-24 border-b border-white/[0.08] bg-[#07090E] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-[0.08] blur-[150px]"
          style={{ background: 'radial-gradient(circle, #10B981 0%, transparent 70%)' }}
          aria-hidden="true"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.1] p-8 sm:p-14 text-center space-y-8 shadow-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Consultoria de Arquitetura &amp; Perícia Técnica</span>
          </div>

          {/* Heading */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Sua plataforma está preparada para{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                escala sem desperdício de nuvem?
              </span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Solicite uma <strong>Perícia Técnica de 5 Minutos</strong> gravada em vídeo: inspeciono sua esteira de automação, 
              waterfall de rede e microsserviços, apontando gargalos de latência, memória e vulnerabilidades de integração.
            </p>
          </div>

          {/* Value Badges */}
          <div className="flex flex-wrap justify-center gap-3 text-xs font-mono text-slate-300">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">
              <ShieldCheckIcon className="w-4 h-4 text-emerald-400" />
              <span>Auditoria Forense de Gargalos</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">
              <ShieldCheckIcon className="w-4 h-4 text-emerald-400" />
              <span>Upwork Rate: {siteConfig.profile.hourlyRate}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">
              <ShieldCheckIcon className="w-4 h-4 text-emerald-400" />
              <span>Contratos Globais &amp; Nacionais</span>
            </div>
          </div>

          {/* CTA Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={getWhatsAppConsultUrl(
                'Olá Rogério! Vi seu portal de autoridade e gostaria de solicitar uma Perícia Técnica de 5 minutos da minha arquitetura.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-bold font-mono tracking-wider transition-all duration-200 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_45px_rgba(16,185,129,0.5)] active:scale-[0.98]"
            >
              <span>Solicitar Perícia Técnica no WhatsApp</span>
              <ArrowRightIcon className="w-4 h-4 text-slate-950" />
            </a>

            <a
              href={siteConfig.profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-slate-200 text-sm font-mono transition-colors"
            >
              <span>Conectar no LinkedIn</span>
              <ExternalLinkIcon className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          <div className="text-[11px] font-mono text-slate-400">
            {siteConfig.profile.availabilityStatus}
          </div>
        </div>
      </div>
    </section>
  );
}

