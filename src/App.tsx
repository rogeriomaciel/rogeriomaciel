import { ArrowRight, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 glass-panel border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/30">
              ⚡
            </span>
            <span className="font-bold text-lg tracking-tight">CriarSites Base</span>
          </div>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition shadow-lg shadow-blue-600/25"
          >
            <MessageSquare className="w-4 h-4" />
            Fale Conosco
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center py-20 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Template Base Pronto
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Seu One Page Site de <span className="gradient-text">Alta Conversão</span>
          </h1>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Estrutura oficial baseada no método <em>"Vender é um discurso e compra é uma ação"</em>.
            Inicie a entrevista com a skill <strong>site-que-vende</strong> para gerar o conteúdo e o site completo.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition shadow-xl shadow-blue-600/30 hover:scale-105 transform duration-150"
            >
              Iniciar Projeto
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="glass-panel p-4 rounded-xl">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mb-2" />
              <h3 className="font-semibold text-sm">Deploy 100% Estático</h3>
              <p className="text-xs text-slate-400 mt-1">Pasta dist/ pronta para qualquer VPS ou CDN.</p>
            </div>
            <div className="glass-panel p-4 rounded-xl">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mb-2" />
              <h3 className="font-semibold text-sm">Content-as-Code</h3>
              <p className="text-xs text-slate-400 mt-1">Edição simples no arquivo 07-roteiro-site.md.</p>
            </div>
            <div className="glass-panel p-4 rounded-xl">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mb-2" />
              <h3 className="font-semibold text-sm">Google Tag Manager</h3>
              <p className="text-xs text-slate-400 mt-1">Tags e pixels configurados para conversão.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer id="contato" className="border-t border-slate-900 py-8 px-6 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} CriarSites Base — Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
