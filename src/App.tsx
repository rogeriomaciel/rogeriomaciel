import { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  MessageSquare,
  Zap,
  ShieldCheck,
  Cpu,
  BookOpen,
  ChevronDown,
  Menu,
  X,
  AlertTriangle,
  Gauge,
  BarChart3,
  Check,
  Award
} from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';

function LinkedinIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function InstagramIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const whatsappUrl =
    'https://wa.me/5562996232227?text=Ol%C3%A1%20Rog%C3%A9rio,%20vim%20pelo%20seu%20site%20e%20quero%20um%20Site%20de%20Alta%20Convers%C3%A3o%20para%20o%20meu%20neg%C3%B3cio.';

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'O Diagnóstico', href: '#problema' },
    { label: 'Soluções', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  const faqs = [
    {
      question: 'O que é um One Page Site e por que ele converte mais do que um site tradicional?',
      answer:
        'Um One Page Site concentra toda a jornada de compra em uma única página fluida com navegação suave por âncoras. Isso elimina o atrito cognitivo de menus complexos e múltiplos cliques, guiando o visitante do primeiro impacto até o botão de WhatsApp sem distrações.',
    },
    {
      question: 'Por que vocês usam React e Vite em vez de WordPress?',
      answer:
        'O WordPress é pesado, depende de dezenas de plugins que frequentemente quebram, é vulnerável a invasões e costuma ser lento no 4G móvel. Com React + Vite estático, você tem um site com velocidade instantânea (< 1 segundo), segurança impenetrável e zero custo com manutenções caras.',
    },
    {
      question: 'Eu poderei alterar o conteúdo do meu site no futuro?',
      answer:
        'Sim! Todo o conteúdo do site é gerido com clareza através de arquivos de roteiro (Content-as-Code). As atualizações são estruturadas, previsíveis e você pode recompilar quando quiser.',
    },
    {
      question: 'O site já vem configurado para anúncios no Google e Meta (Facebook/Instagram)?',
      answer:
        'Sim. Integramos nativamente o Google Tag Manager com possibilidade de rastreamento de cliques no WhatsApp, permitindo que suas campanhas de tráfego sejam mensuradas com máxima precisão.',
    },
    {
      question: 'Como funciona o processo de contratação e entrega?',
      answer:
        'Você entra em contato direto comigo pelo WhatsApp, alinhamos os dados do seu negócio, validamos o roteiro estratégico e construímos o seu site com código de alta performance pronto para publicação estática.',
    },
  ];

  const books = [
    {
      title: 'A Vantagem Injusta',
      subtitle: 'O Sistema que Trabalha Enquanto Você Dorme (Método CORE™)',
      tag: 'Gestão & Sistemas',
      desc: 'Arquitetura de disciplina algorítmica e sistemas operacionais de alta eficiência.',
    },
    {
      title: 'CoreAutoCRM',
      subtitle: 'O Sistema Operacional de Fricção Zero',
      tag: 'Engenharia de Software',
      desc: 'A tecnologia e os bastidores de um SaaS B2B conversacional operado por IA.',
    },
    {
      title: 'As 5 Atitudes Diárias',
      subtitle: 'Do Empreendedor de Sucesso',
      tag: 'Liderança',
      desc: 'Princípios práticos de foco, execução estratégica e construção de valor.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white transition-colors duration-200">
      {/* 1. NAVBAR */}
      <header className="sticky top-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo / Monograma */}
          <a href="#inicio" className="flex items-center gap-3 group" aria-label="Rogério Maciel - Ir para o início da página">
            <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform duration-200" aria-hidden="true">
              <span className="font-mono text-lg font-extrabold tracking-tighter">RM</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Rogério Maciel
              </span>
              <span className="text-[11px] font-medium tracking-wider text-slate-500 dark:text-slate-400 uppercase">
                Sites de Alta Conversão
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <ThemeToggle />
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition shadow-lg shadow-emerald-600/20 hover:scale-105 transform duration-150"
            >
              <MessageSquare className="w-4 h-4" />
              Falar no WhatsApp
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-900"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section id="inicio" className="relative pt-16 pb-24 md:pt-24 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/80 border border-blue-300 dark:border-blue-500/40 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold">
            ⚡ Engenharia de Software + Psicologia de Vendas + Inteligência Artificial
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white">
            Seu negócio não precisa de mais um site bonito.{' '}
            <span className="gradient-text block mt-2">
              Precisa de uma máquina que coloca clientes prontos no seu WhatsApp.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Desenvolvemos Sites ultrarrápidos e persuasivos baseados no princípio{' '}
            <strong className="text-slate-900 dark:text-white font-semibold">"Vender é um Discurso e Compra é uma Ação"</strong>.
            Transforme visitantes anônimos em faturamento real — sem lentidão e sem plugins frágeis.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base transition duration-200 shadow-xl shadow-emerald-600/25 hover:scale-105 transform glow-emerald"
            >
              <MessageSquare className="w-5 h-5" />
              Quero um Site de Alta Conversão
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#problema"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-semibold text-base transition duration-200 shadow-sm"
            >
              Conhecer o Método
              <ChevronDown className="w-4 h-4" />
            </a>
          </div>

          {/* Badges de Performance */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
            <div className="glass-panel p-4 rounded-2xl border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/30 transition">
              <Gauge className="w-6 h-6 text-sky-500 dark:text-sky-400 mb-2" />
              <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Carregamento &lt; 1s</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Zero perda por lentidão</div>
            </div>
            <div className="glass-panel p-4 rounded-2xl border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/30 transition">
              <Zap className="w-6 h-6 text-amber-500 dark:text-amber-400 mb-2" />
              <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">One Page Direta</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Jornada fluida e sem atrito</div>
            </div>
            <div className="glass-panel p-4 rounded-2xl border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/30 transition">
              <ShieldCheck className="w-6 h-6 text-emerald-500 dark:text-emerald-400 mb-2" />
              <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Código Puro &amp; Seguro</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Sem WordPress, sem invasões</div>
            </div>
            <div className="glass-panel p-4 rounded-2xl border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/30 transition">
              <BarChart3 className="w-6 h-6 text-indigo-500 dark:text-indigo-400 mb-2" />
              <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">GTM + GA4 Nativo</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Métricas de conversão reais</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. O PROBLEMA */}
      <section id="problema" className="py-20 md:py-28 bg-slate-100/70 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-red-600 dark:text-red-400 flex items-center justify-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              O Grande Erro do Mercado
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Por que a maioria dos sites na internet{' '}
              <span className="text-red-600 dark:text-red-400">não gera nenhum cliente?</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
              A maioria das agências cria páginas estéticas como cartões de visita digitais, mas esquece que um site sem psicologia de conversão é dinheiro jogado fora.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 hover:border-red-500/30 transition">
              <div className="h-12 w-12 rounded-2xl bg-red-100 dark:bg-red-950/60 border border-red-300 dark:border-red-800/50 flex items-center justify-center text-red-600 dark:text-red-400 font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Lentidão que Queima Anúncios</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Sites em WordPress cheios de plugins demoram mais de 4 segundos para abrir. Cada segundo de atraso derruba até 53% dos seus visitantes antes mesmo de verem sua oferta.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 hover:border-red-500/30 transition">
              <div className="h-12 w-12 rounded-2xl bg-red-100 dark:bg-red-950/60 border border-red-300 dark:border-red-800/50 flex items-center justify-center text-red-600 dark:text-red-400 font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Discurso Institucional Vazio</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Textos genéricos falando sobre "missão, visão e valores" que não dialogam com a dor do cliente, não quebram objeções e não geram urgência de compra.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 hover:border-red-500/30 transition">
              <div className="h-12 w-12 rounded-2xl bg-red-100 dark:bg-red-950/60 border border-red-300 dark:border-red-800/50 flex items-center justify-center text-red-600 dark:text-red-400 font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Labirinto de Links Sem Foco</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Menus cheios de páginas dispersas que deixam o cliente perdido em vez de conduzi-lo diretamente ao WhatsApp para fechar negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOLUÇÕES E SERVIÇOS */}
      <section id="servicos" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              O Que Construímos
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              A Engenharia de uma <span className="gradient-text">Máquina de Vendas</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
              Combinamos o melhor da tecnologia de ponta com copywriting orientado à ação imediata.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 flex flex-col justify-between hover:border-blue-500/50 transition duration-300">
              <div className="space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-blue-100 dark:bg-blue-950/80 border border-blue-300 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">One Page Sites de Alta Conversão</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Sites de página única focados em conduzir o lead para o fechamento no WhatsApp. Carregamento quase instantâneo e layout 100% responsivo.
                </p>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800/80 pt-4">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" /> React 19 + Vite de ultra performance
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" /> Deploy estático sem custos de servidor
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" /> Design moderno e Dark/Light Mode
                </li>
              </ul>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 flex flex-col justify-between hover:border-blue-500/50 transition duration-300">
              <div className="space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-indigo-100 dark:bg-indigo-950/80 border border-indigo-300 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <BookOpen className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Engenharia de Copywriting</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Construção do roteiro completo baseado no método do livro <em>"Vídeos que Vendem"</em>: PUV irrefutável, quebra de objeções e chamadas irresistíveis.
                </p>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800/80 pt-4">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" /> Headlines que retêm a atenção
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" /> Estrutura de discurso persuasivo
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" /> Roteiro em Content-as-Code
                </li>
              </ul>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 flex flex-col justify-between hover:border-blue-500/50 transition duration-300">
              <div className="space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-teal-100 dark:bg-teal-950/80 border border-teal-300 dark:border-teal-500/30 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <Cpu className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Rastreamento &amp; Busca por IA</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Configuração profissional de Google Tag Manager (GTM), GA4 e otimização para robôs de Inteligência Artificial (GEO e llms.txt).
                </p>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800/80 pt-4">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" /> Rastreamento de cliques no WhatsApp
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" /> Schema JSON-LD &amp; llms.txt
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" /> Indexação para ChatGPT &amp; Perplexity
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SOBRE O ESPECIALISTA */}
      <section id="sobre" className="py-20 md:py-32 bg-slate-100/70 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="relative mx-auto max-w-sm">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-600 to-indigo-600 opacity-20 blur-xl"></div>
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-200 dark:bg-slate-900 p-2 shadow-2xl">
                  <div className="aspect-[4/5] rounded-2xl bg-gradient-to-b from-slate-300 to-slate-400 dark:from-slate-800 dark:to-slate-950 flex flex-col items-center justify-center text-center p-8 space-y-4">
                    <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-3xl font-extrabold text-white shadow-xl shadow-blue-500/30">
                      RM
                    </div>
                    <div className="space-y-1">
                      <div className="text-xl font-bold text-slate-900 dark:text-white">Rogério Marinho Maciel</div>
                      <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Arquiteto de Software &amp; Autor</div>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-2">
                      Especialista em unir arquitetura de software moderna com psicologia de discurso para vendas diárias.
                    </p>
                    <div className="flex gap-4 pt-2">
                      <a
                        href="https://www.linkedin.com/in/macrogerio/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                        aria-label="Perfil no LinkedIn de Rogério Maciel"
                      >
                        <LinkedinIcon className="w-5 h-5" />
                      </a>
                      <a
                        href="https://www.instagram.com/mrcrogerio/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                        aria-label="Perfil no Instagram de Rogério Maciel"
                      >
                        <InstagramIcon className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                Autoridade &amp; Bastidores
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Quem constrói a sua presença na web
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Sou <strong>Rogério Marinho Maciel</strong>, arquiteto de software e autor do livro <em>"Vídeos que Vendem: O Guia Definitivo para Criar Vídeos que Vendem Todos os Dias"</em>.
                </p>
                <p>
                  Ao longo de anos desenvolvendo plataformas digitais, identifiquei que o maior erro das empresas não está no design, mas sim no <strong>desalinhamento entre o discurso de valor e o mecanismo de ação</strong>.
                </p>
                <p>
                  Criamos o conceito de <strong>Máquinas de Aquisição</strong> para empresários que não querem perder tempo com código quebrado ou sites institucionais estéreis.
                </p>
              </div>

              {/* Livros Publicados */}
              <div className="pt-4 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Obras &amp; Publicações do Autor:</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {books.map((b, i) => (
                    <div key={i} className="glass-panel p-3 rounded-xl border border-slate-200 dark:border-slate-800/80 space-y-1">
                      <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 uppercase">{b.tag}</span>
                      <div className="font-bold text-xs text-slate-900 dark:text-white">{b.title}</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">{b.subtitle}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section id="faq" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Tire Suas Dúvidas
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="glass-panel rounded-2xl border border-slate-200 dark:border-slate-800/80 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white text-base sm:text-lg hover:text-blue-600 dark:hover:text-blue-400 transition"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 text-slate-500 dark:text-slate-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CTA FINAL */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-blue-100/50 dark:to-blue-950/20">
        <div className="max-w-5xl mx-auto glass-panel p-8 sm:p-14 rounded-3xl border border-blue-300 dark:border-blue-500/30 text-center space-y-8 relative overflow-hidden glow-effect">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/80 border border-blue-300 dark:border-blue-500/40 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold">
            <Award className="w-4 h-4" />
            Comece Hoje Mesmo
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Pronto para transformar sua presença em uma{' '}
            <span className="gradient-text">Máquina de Fechamento?</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Não desperdice mais visitantes em páginas lentas. Fale diretamente com Rogério Maciel no WhatsApp e vamos desenhar a solução ideal para o seu momento.
          </p>

          <div className="pt-4 flex justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-9 py-5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg transition duration-200 shadow-2xl shadow-emerald-600/30 hover:scale-105 transform glow-emerald"
            >
              <MessageSquare className="w-6 h-6" />
              Falar com Rogério Maciel no WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="border-t border-slate-200 dark:border-slate-800/80 py-12 px-4 sm:px-6 lg:px-8 bg-slate-100/50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white">
              <span className="font-mono text-xs">RM</span>
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white">Rogério Maciel</span> — Máquinas de Aquisição de Alta Conversão
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="#inicio" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Início</a>
            <a href="#servicos" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Soluções</a>
            <a href="#sobre" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Sobre</a>
            <a href="#faq" className="hover:text-blue-600 dark:hover:text-blue-400 transition">FAQ</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">WhatsApp</a>
          </div>

          <div>
            © {new Date().getFullYear()} Rogério Marinho Maciel. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
