import { siteConfig } from '../config/site.config';
import { GithubIcon, LinkedinIcon, ExternalLinkIcon } from './Icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-[#07090E] border-t border-white/[0.08] text-slate-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* BRAND & POSITIONING */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center font-bold text-slate-950 font-mono text-sm">
                RM
              </div>
              <div>
                <div className="text-sm font-bold text-white tracking-tight">
                  {siteConfig.profile.name}
                </div>
                <div className="text-[11px] text-emerald-400">
                  {siteConfig.profile.title}
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Mais de 20 anos projetando sistemas distribuídos de alta escala, esteiras de automação corporativa, 
              convergência TI/OT e microsserviços bare-metal.
            </p>

            <div className="text-[11px] text-slate-400 italic">
              "Simplicity is prerequisite for reliability." — Edsger W. Dijkstra
            </div>
          </div>

          {/* OPEN SOURCE REPOSITORIES */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Repositórios no GitHub
            </div>
            <ul className="space-y-2 text-xs">
              {siteConfig.repositories.map((repo) => (
                <li key={repo.name}>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{repo.name}</span>
                    <ExternalLinkIcon className="w-3 h-3 text-slate-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CANONICAL LINKS & CONTACT */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Conexões Oficiais
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={siteConfig.profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-2"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub (@rogeriomaciel)</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-2"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn (macrogerio)</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.profile.lattesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-2"
                >
                  <span>Currículo Lattes (CNPq)</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.profile.email}`}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {siteConfig.profile.email}
                </a>
              </li>
              <li>
                <span className="text-emerald-400">WhatsApp: {siteConfig.profile.whatsapp}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {currentYear} {siteConfig.profile.name}. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <a href="/llms.txt" className="hover:text-emerald-400 transition-colors">
              llms.txt
            </a>
            <a href="/llms-full.txt" className="hover:text-emerald-400 transition-colors">
              llms-full.txt
            </a>
            <span className="text-slate-400">•</span>
            <span className="text-slate-300">Arquitetura Core-Bare-Metal™</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

