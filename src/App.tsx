import { ArrowRight, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { siteContent } from './data/site-content';

export default function App() {
  const { meta, hero } = siteContent;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col justify-between selection:bg-blue-600 selection:text-white transition-colors duration-200">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 glass-panel border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/30">
              ⚡
            </span>
            <span className="font-bold text-lg tracking-tight">{meta.brandName || "CriarSites Base"}</span>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href={`https://wa.me/${meta.whatsappNumber}?text=${encodeURIComponent(meta.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition shadow-lg shadow-blue-600/25"
            >
              <MessageSquare className="w-4 h-4" />
              Fale Conosco
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center py-20 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 border border-blue-300 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            {hero.badge || "Template Base Pronto"}
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
            {hero.headline} <span className="gradient-text">{hero.headlineHighlight}</span>
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {hero.subheadline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={`https://wa.me/${meta.whatsappNumber}?text=${encodeURIComponent(meta.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition shadow-xl shadow-blue-600/30 hover:scale-105 transform duration-150"
            >
              {hero.primaryCtaText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="glass-panel p-4 rounded-xl">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mb-2" />
              <h3 className="font-semibold text-sm text-slate-900 dark:text-white">Deploy 100% Estático</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Pasta dist/ pronta para qualquer VPS ou CDN.</p>
            </div>
            <div className="glass-panel p-4 rounded-xl">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mb-2" />
              <h3 className="font-semibold text-sm text-slate-900 dark:text-white">Content-as-Code</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Edite o roteiro e o site se recompila na hora.</p>
            </div>
            <div className="glass-panel p-4 rounded-xl">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mb-2" />
              <h3 className="font-semibold text-sm text-slate-900 dark:text-white">Dark & Light Mode</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Suporte completo com persistência e auto-detecção.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800/80 py-6 text-center text-xs text-slate-500 dark:text-slate-500">
        <p>© {new Date().getFullYear()} {meta.brandName}. Todos os direitos reservados. Feito com CriarSites Base.</p>
      </footer>
    </div>
  );
}
