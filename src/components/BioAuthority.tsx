import { Locale, i18nContent } from '../config/i18n.content';
import {
  GraduationCapIcon,
  Building2Icon,
  CpuIcon,
  AwardIcon,
  ExternalLinkIcon,
  CheckIcon,
} from './Icons';

export function BioAuthority({ locale = 'pt' }: { locale?: Locale }) {
  const t = i18nContent[locale];

  const timelineIcons = [
    <CpuIcon className="w-5 h-5 text-emerald-400" />,
    <Building2Icon className="w-5 h-5 text-cyan-400" />,
    <AwardIcon className="w-5 h-5 text-amber-400" />,
    <GraduationCapIcon className="w-5 h-5 text-emerald-400" />,
  ];

  return (
    <section id="trajetoria" className="py-24 border-b border-white/[0.08] bg-[#090D16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <AwardIcon className="w-3.5 h-3.5" />
            <span>{t.bioSection.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {t.bioSection.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {t.bioSection.subtitle}
          </p>
        </div>

        {/* Profile Card & Timeline Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: EXECUTIVE PROFILE SUMMARY */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl bg-white/[0.02] border border-white/[0.08] p-6 space-y-5">
              {/* Profile Image & Name */}
              <div className="flex items-center gap-4">
                <img
                  src="/images/rogerio-maciel.webp"
                  alt={t.profile.name}
                  width={72}
                  height={72}
                  loading="lazy"
                  decoding="async"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                />
                <div>
                  <h3 className="text-lg font-bold text-white font-mono leading-tight">
                    {t.profile.name}
                  </h3>
                  <div className="text-xs text-emerald-400 font-mono">
                    {t.profile.title}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                    UFPB • CNPq • Ex-Neoway
                  </div>
                </div>
              </div>

              {/* Bio Highlights */}
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.profile.subheadline}
              </p>

              {/* Lattes CNPq Link Box */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-1.5">
                <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>{t.bioSection.lattesLabel}</span>
                  <span className="text-emerald-400 font-bold">{t.bioSection.lattesStatus}</span>
                </div>
                <div className="text-xs font-mono text-white font-semibold flex items-center justify-between">
                  <span>ID: {t.profile.lattesId}</span>
                  <a
                    href={t.profile.lattesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 text-[11px]"
                  >
                    <span>{t.bioSection.lattesAction}</span>
                    <ExternalLinkIcon className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Key Credentials List */}
              <div className="space-y-2 pt-2 text-xs text-slate-300">
                {t.bioSection.credentials.map((cred, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckIcon className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: TIMELINE ACCORDION / CARDS */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-6">
              {t.bioSection.timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 sm:pl-10 pb-8 border-l border-white/[0.08] last:border-l-0 last:pb-0 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-[#090D16] border border-white/[0.1] flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">
                    {timelineIcons[index % timelineIcons.length]}
                  </div>

                  {/* Card Content */}
                  <div className="rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-emerald-500/30 p-6 transition-all space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {item.role}
                        </h4>
                        <div className="text-xs font-mono text-emerald-400">
                          {item.company}
                        </div>
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-white/[0.04] text-slate-300 self-start sm:self-auto">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      {item.achievements.map((ach, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                          <span className="text-emerald-400 font-bold">›</span>
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
