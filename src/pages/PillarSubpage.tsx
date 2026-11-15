import { Locale } from '../config/i18n.content';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArchitectureBlueprints } from '../components/ArchitectureBlueprints';
import { GithubShowcase } from '../components/GithubShowcase';
import { LiveDeploymentsShowcase } from '../components/LiveDeploymentsShowcase';
import { KadoshCaseTeardown } from '../components/KadoshCaseTeardown';
import { BioAuthority } from '../components/BioAuthority';
import { SolutionsDirectory } from '../components/SolutionsDirectory';
import { AuditCTA } from '../components/AuditCTA';
import { FaqSection } from '../components/FaqSection';

export type PillarSectionType = 'architecture' | 'ai-systems' | 'cases' | 'about' | 'solutions';

export function PillarSubpage({
  section,
  locale = 'en',
}: {
  section: PillarSectionType;
  locale?: Locale;
}) {
  const isEn = locale === 'en';
  const homeHref = isEn ? '/en/' : '/pt/';

  const labels: Record<PillarSectionType, string> = {
    architecture: isEn ? 'Architecture & Transpiler' : 'Arquitetura & Transpilador',
    'ai-systems': isEn ? 'AI Systems & Concurrency' : 'IA em Produção & FSM',
    cases: isEn ? 'Live Deployments & Cases' : 'Sistemas Online & Cases',
    about: isEn ? 'Executive Timeline & Credentials' : 'Trajetória Executiva',
    solutions: isEn ? 'Engineering Solutions Catalog' : 'Catálogo de Soluções',
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950">
      <Navbar locale={locale} />

      <main className="flex-grow pt-24">
        {/* Subfolder Breadcrumb Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <a href={homeHref} className="hover:text-emerald-400 transition-colors">
              {isEn ? 'Home' : 'Início'}
            </a>
            <span>/</span>
            <span className="text-emerald-400">{labels[section]}</span>
          </div>

          <a
            href={homeHref}
            className="text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors"
          >
            {isEn ? '← Back to Overview' : '← Voltar para Visão Geral'}
          </a>
        </div>

        {section === 'architecture' && (
          <>
            <ArchitectureBlueprints locale={locale} initialTab="transpiler" />
            <GithubShowcase locale={locale} />
            <AuditCTA locale={locale} />
          </>
        )}

        {section === 'ai-systems' && (
          <>
            <ArchitectureBlueprints locale={locale} initialTab="attribution" />
            <FaqSection locale={locale} />
            <AuditCTA locale={locale} />
          </>
        )}

        {section === 'cases' && (
          <>
            <LiveDeploymentsShowcase locale={locale} />
            <KadoshCaseTeardown locale={locale} />
            <AuditCTA locale={locale} />
          </>
        )}

        {section === 'about' && (
          <>
            <BioAuthority locale={locale} />
            <AuditCTA locale={locale} />
          </>
        )}

        {section === 'solutions' && (
          <>
            <SolutionsDirectory locale={locale} />
            <AuditCTA locale={locale} />
          </>
        )}
      </main>

      <Footer locale={locale} />
    </div>
  );
}
