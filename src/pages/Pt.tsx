import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { HomeFiveSims } from '../components/HomeFiveSims';
import { Footer } from '../components/Footer';

export default function Pt() {
  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950">
      <Navbar locale="pt" />
      <main className="flex-grow">
        <Hero locale="pt" />
        <HomeFiveSims locale="pt" />
      </main>
      <Footer locale="pt" />
    </div>
  );
}
