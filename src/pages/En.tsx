import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { EngineeringPillars } from '../components/EngineeringPillars';
import { GithubShowcase } from '../components/GithubShowcase';
import { KadoshCaseTeardown } from '../components/KadoshCaseTeardown';
import { BioAuthority } from '../components/BioAuthority';
import { AuditCTA } from '../components/AuditCTA';
import { FaqSection } from '../components/FaqSection';
import { Footer } from '../components/Footer';

export default function En() {
  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950">
      <Navbar locale="en" />
      <main className="flex-grow">
        <Hero locale="en" />
        <EngineeringPillars locale="en" />
        <GithubShowcase locale="en" />
        <KadoshCaseTeardown locale="en" />
        <BioAuthority locale="en" />
        <AuditCTA locale="en" />
        <FaqSection locale="en" />
      </main>
      <Footer locale="en" />
    </div>
  );
}

