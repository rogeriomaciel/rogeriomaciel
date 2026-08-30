import { ArrowLeft, MessageSquare, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import { siteContent } from '../data/site-content';

export default function Manifesto() {
  const { meta } = siteContent;
  const whatsappUrl = `https://wa.me/${meta.whatsappNumber}?text=${encodeURIComponent(meta.whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white transition-colors duration-200">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-nav">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <a href="./" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Início
          </a>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Manifesto Body */}
      <main className="flex-1 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto space-y-12">
          {/* Badge */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/80 border border-blue-300 dark:border-blue-500/40 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-widest uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              O Manifesto Oficial
            </div>
          </div>

          {/* Title */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white">
              Vender é um Discurso e <span className="gradient-text">Comprar é uma Ação</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium">
              A filosofia por trás dos sites que geram faturamento real todos os dias.
            </p>
          </div>

          {/* Editorial Content */}
          <div className="space-y-8 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            <p className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white leading-snug border-l-4 border-blue-600 pl-4 py-1">
              Nós acreditamos que a internet está saturada de sites bonitos que não vendem absolutamente nada.
            </p>

            <p>
              Durante anos, o mercado vendeu a ilusão de que ter um site era apenas escolher um modelo pronto, colocar fotos genéricas e esperar que os clientes fizessem fila. O resultado? Empresas excelentes queimando dinheiro em anúncios, enviando tráfego qualificado para páginas lentas, confusas e sem alma, que geram zero vendas no final do mês.
            </p>

            <div className="glass-panel p-6 sm:p-8 rounded-2xl border-l-4 border-rose-500 space-y-2 my-8">
              <div className="font-bold text-rose-600 dark:text-rose-400 text-base uppercase tracking-wider">A Nossa Posição:</div>
              <p className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Nós rejeitamos o panfleto digital inútil.
              </p>
            </div>

            <p>
              A compra não acontece por sorte. Ela é o <strong>resultado inevitável de uma série de microdecisões psicológicas</strong> influenciadas por um discurso claro, empático e estruturado.
            </p>

            <p>
              Se o seu discurso for fraco, confuso ou genérico, o cliente vai embora em três segundos. Mas quando o seu discurso transporta o cliente do ceticismo à certeza de valor, o clique de compra se torna a única ação lógica.
            </p>

            {/* Principles Box */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-4 my-10 border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                O Nosso Pacto de Engenharia:
              </h3>
              <ul className="space-y-3 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span><strong>Sem códigos pesados</strong> que travam no 4G móvel.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span><strong>Sem plugins frágeis</strong> que quebram amanhã.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span><strong>Sem mensagens vazias</strong> que ninguém lê.</span>
                </li>
              </ul>
            </div>

            <p>
              Unimos mais de 20 anos de <strong>engenharia de software de ponta, inteligência artificial e psicologia de conversão</strong> para criar ativos digitais que trabalham por você e transformam visitantes anônimos em fechamentos diários.
            </p>

            <p className="text-xl font-bold text-slate-900 dark:text-white pt-4">
              Se você tem um serviço ou produto valioso, você merece uma presença digital à altura do seu padrão de excelência.
            </p>
          </div>

          {/* CTA Box */}
          <div className="pt-8">
            <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-blue-300 dark:border-blue-500/40 text-center space-y-6 bg-gradient-to-b from-blue-50/80 to-white dark:from-blue-950/60 dark:to-slate-950 glow-blue">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Vamos construir a sua máquina de aquisição?
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
                Dê o próximo passo. Converse diretamente comigo no WhatsApp e vamos estruturar o discurso de que seu negócio precisa.
              </p>
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base transition duration-200 shadow-xl shadow-emerald-500/25 hover:scale-105 transform glow-emerald"
                >
                  <MessageSquare className="w-5 h-5" />
                  Iniciar Conversa no WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-900 py-8 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} {meta.brandName}. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
