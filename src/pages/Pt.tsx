import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { EngineeringPillars } from '../components/EngineeringPillars';
import { GithubShowcase } from '../components/GithubShowcase';
import { KadoshCaseTeardown } from '../components/KadoshCaseTeardown';
import { SolutionsDirectory } from '../components/SolutionsDirectory';
import { BioAuthority } from '../components/BioAuthority';
import { AuditCTA } from '../components/AuditCTA';
import { FaqSection } from '../components/FaqSection';
import { Footer } from '../components/Footer';

export default function Pt() {
  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950">
      <Navbar locale="pt" />
      <main className="flex-grow">
        <Hero locale="pt" />
        <EngineeringPillars locale="pt" />
        <GithubShowcase locale="pt" />
        <KadoshCaseTeardown locale="pt" />
        <SolutionsDirectory locale="pt" />
        <BioAuthority locale="pt" />
        <AuditCTA locale="pt" />
        <FaqSection locale="pt" />
      </main>
      <Footer locale="pt" />
    </div>
  );
}

