import { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
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
  Check
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
    { label: 'O Manifesto', href: './manifesto.html' },
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
        'Sim! Todo o conteúdo do site é gerido com clareza através de arquivos de roteiro (Content-as-Code). As atualizações são estruturadas e previsíveis.',
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition shadow-lg shadow-emerald-500/20 hover:scale-105 transform duration-150"
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
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 text-slate-950 font-semibold text-sm shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section id="inicio" className="relative pt-16 pb-24 md:pt-24 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/10 dark:bg-blue-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-500/10 dark:bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/80 border border-blue-300 dark:border-blue-500/40 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold tracking-wide shadow-inner">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 animate-pulse" />
            Engenharia de Software + Psicologia de Vendas + Inteligência Artificial
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white">
            Seu negócio não precisa de mais um site apenas bonito.{' '}
            <span className="gradient-text block mt-2">
              Precisa de uma máquina que coloque clientes qualificados no seu WhatsApp.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Desenvolvemos sites ultrarrápidos e persuasivos baseados no princípio{' '}
            <strong className="text-slate-900 dark:text-white font-semibold">"Vender é um discurso e comprar é uma ação"</strong>.
            Transforme visitantes anônimos em faturamento real — sem lentidão e sem plugins frágeis.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base transition duration-200 shadow-xl shadow-emerald-500/25 hover:scale-105 transform glow-emerald"
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

          {/* Badges de Autoridade e Performance */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
            <div className="glass-panel p-4 rounded-2xl border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/30 transition">
              <Gauge className="w-6 h-6 text-sky-500 dark:text-sky-400 mb-2" />
              <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">&lt; 0.8s no Celular</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Nota 98+ no Google PageSpeed</div>
            </div>
            <div className="glass-panel p-4 rounded-2xl border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/30 transition">
              <BookOpen className="w-6 h-6 text-amber-500 dark:text-amber-400 mb-2" />
              <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Psicologia de Compras</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Discurso focado em fechamento</div>
            </div>
            <div className="glass-panel p-4 rounded-2xl border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/30 transition">
              <Cpu className="w-6 h-6 text-indigo-500 dark:text-indigo-400 mb-2" />
              <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">20+ Anos de Engenharia</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Ex-Head Neoway &amp; Arquiteto IA</div>
            </div>
            <div className="glass-panel p-4 rounded-2xl border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/30 transition">
              <BarChart3 className="w-6 h-6 text-emerald-500 dark:text-emerald-400 mb-2" />
              <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Rastreamento de Leads</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Google Tag Manager &amp; GA4 nativos</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. O PROBLEMA */}
      <section id="problema" className="py-20 md:py-28 bg-slate-100/70 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-rose-600 dark:text-rose-400 uppercase flex items-center justify-center gap-1.5">
              <AlertTriangle className="w-4 h-4" /> O Diagnóstico Crítico
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Por que a maioria dos sites na internet <span className="text-rose-600 dark:text-rose-400">não geram vendas</span>?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
              A maioria das agências cria páginas estéticas como cartões de visita digitais, mas esquece que um site sem psicologia de conversão é dinheiro jogado fora.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 hover:border-rose-500/30 transition">
              <div className="h-12 w-12 rounded-xl bg-rose-100 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800/50 flex items-center justify-center text-rose-600 dark:text-rose-400 font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Lentidão que Queima Anúncios</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Sites em WordPress cheios de plugins demoram mais de 4 segundos para abrir. Cada segundo de atraso derruba até 53% dos seus visitantes antes mesmo de verem sua oferta.
              </p>
            </div>

            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 hover:border-rose-500/30 transition">
              <div className="h-12 w-12 rounded-xl bg-rose-100 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800/50 flex items-center justify-center text-rose-600 dark:text-rose-400 font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Discurso Institucional Vazio</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Textos genéricos falando sobre "missão, visão e valores" que não dialogam com a dor do cliente, não quebram objeções e não geram urgência de compra.
              </p>
            </div>

            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 hover:border-rose-500/30 transition">
              <div className="h-12 w-12 rounded-xl bg-rose-100 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800/50 flex items-center justify-center text-rose-600 dark:text-rose-400 font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Labirinto de Links Sem Foco</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Menus cheios de páginas dispersas que deixam o cliente perdido em vez de conduzi-lo diretamente ao WhatsApp para fechar negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. A SOLUÇÃO: MÁQUINA DE AQUISIÇÃO */}
      <section id="servicos" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
              O Conceito &amp; A Solução
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              O que é uma <span className="gradient-text">Máquina de Aquisição</span>?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Não é um site institucional estático e esquecido. É um <strong>sistema digital de 3 camadas</strong> projetado para atrair em milissegundos, conduzir a atenção sem dispersão e entregar clientes prontos para fechar no seu WhatsApp.
            </p>
          </div>

          {/* Os 3 Pilares */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 flex flex-col justify-between hover:border-blue-500/50 transition duration-300">
              <div className="space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-blue-100 dark:bg-blue-950/80 border border-blue-300 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">1. One Page Linear</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Concentra toda a jornada de decisão em uma única página fluida com navegação suave por âncoras. Elimina menus redundantes e conduz o visitante diretamente à compra.
                </p>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800/80 pt-4">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" /> Zero cliques dispersos
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" /> Foco absoluto na conversão
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" /> Navegação instantânea no 4G
                </li>
              </ul>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 flex flex-col justify-between hover:border-blue-500/50 transition duration-300">
              <div className="space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-indigo-100 dark:bg-indigo-950/80 border border-indigo-300 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <BookOpen className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">2. Discurso Persuasivo</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Estrutura inspirada na psicologia comportamental de compras: Proposta Única de Valor clara, quebra prévia de objeções e posicionamento sólido de autoridade.
                </p>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800/80 pt-4">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" /> Títulos de alto impacto
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" /> Alinhamento com a dor do cliente
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" /> Chamadas para ação irresistíveis
                </li>
              </ul>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 flex flex-col justify-between hover:border-blue-500/50 transition duration-300">
              <div className="space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-teal-100 dark:bg-teal-950/80 border border-teal-300 dark:border-teal-500/30 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <Cpu className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">3. Engenharia Jamstack</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Desenvolvida em React e Vite com arquitetura 100% estática. Sem dependência de servidores pesados, com segurança total e alta disponibilidade.
                </p>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800/80 pt-4">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" /> Carregamento em &lt; 0.8s
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" /> Imune a invasões comuns
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" /> Otimizada para SEO e GEO (IAs)
                </li>
              </ul>
            </div>
          </div>

          {/* ESTUDO DE CASO / PROVA SOCIAL REAL */}
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-blue-300 dark:border-blue-500/30 bg-gradient-to-br from-blue-50/80 via-white to-slate-50 dark:from-blue-950/40 dark:via-slate-900 dark:to-slate-950 space-y-8 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  Estudo de Caso &amp; Aplicação Real
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                  Kadosh Auto Center &amp; Plataforma CoreAutoCRM
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold w-fit">
                <CheckCircle2 className="w-4 h-4" /> Resultado Comprovado
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
              <div className="space-y-1 p-4 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400">+340%</div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Conversão de Leads</div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Aumento no volume de clientes qualificados entrando em contato pelo WhatsApp.</p>
              </div>

              <div className="space-y-1 p-4 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div className="text-3xl sm:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">&lt; 15s</div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Tempo de Triagem</div>
                <p className="text-xs text-slate-500 dark:text-slate-400">O lead chega pronto, interessado no serviço exato e sem dúvidas básicas.</p>
              </div>

              <div className="space-y-1 p-4 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">R$ 0,08</div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Custo Operacional</div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Engenharia de alta eficiência para automação com inteligência artificial.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
              ⚡ <strong>Transformação Operacional:</strong> De atendentes sobrecarregados com dúvidas repetitivas para um mecanismo automatizado que qualifica o cliente e responde em menos de 15 segundos, 24 horas por dia.
            </div>

            <blockquote className="italic text-sm sm:text-base text-slate-600 dark:text-slate-300 border-l-4 border-blue-500 pl-4 py-1 leading-relaxed">
              "Saímos de uma página tradicional com a qual quase ninguém interagia para um mecanismo ágil em que o cliente entra, compreende o valor do serviço e já clica no WhatsApp pronto para agendar."
            </blockquote>
          </div>
        </div>
      </section>

      {/* 5. SOBRE ROGÉRIO MACIEL */}
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
              <span className="text-xs sm:text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
                Autoridade &amp; Bastidores
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Engenharia de Alto Nível e Resultados Reais
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Sou <strong>Rogério Marinho Maciel</strong>, bacharel em Ciência da Computação (UFPB) e pós-graduado com MBA em Marketing, com mais de <strong>20 anos de liderança em engenharia e arquitetura de software</strong>.
                </p>
                <p>
                  Atuei como <strong>Head de Aplicação Digital na Neoway</strong> (uma das maiores empresas de Big Data e Inteligência da América Latina) e projetei o <strong>CoreAutoCRM / Kadu Engine</strong> — um ecossistema com máquina de estados finitos (FSM) de <strong>28 módulos de IA</strong> operando com custo ultraeficiente de <strong>R$ 0,08 por loja</strong>.
                </p>
                <p>
                  Aplico a mesma precisão de grandes arquiteturas empresariais para construir a sua <strong>Máquina de Aquisição</strong>: eliminando 100% da fricção técnica e alinhando o discurso para que o cliente tome a decisão de compra de forma natural.
                </p>
              </div>

              {/* Livros Publicados */}
              <div className="pt-4 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Obras e Publicações do Autor:</div>
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

      {/* 6. DIFERENCIAIS TÉCNICOS COM MÉTRICAS */}
      <section id="diferenciais" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
              Infraestrutura de Elite
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Métricas que superam qualquer agência tradicional
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
              Substituímos suposições e adjetivos vagos por números e engenharia de ponta.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-blue-100 dark:bg-blue-950/80 border border-blue-300 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <Gauge className="w-5 h-5" />
              </div>
              <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">&lt; 0.8s</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Velocidade no Celular</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                React 19 + Vite com nota 98+ no PageSpeed. Carregamento até 5x mais rápido do que no WordPress.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">0 Falhas</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Segurança &amp; Estabilidade</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Pacote 100% estático. Sem banco de dados exposto no frontend e com zero risco de quebra por plugins.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 border border-indigo-300 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">100% GEO</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Otimização para IAs</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Metadados estruturados (llms.txt e Schema JSON-LD) para citação em robôs de IA como ChatGPT, Perplexity e Google.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-teal-100 dark:bg-teal-950/80 border border-teal-300 dark:border-teal-500/30 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div className="text-2xl font-extrabold text-teal-600 dark:text-teal-400">100% Rastreável</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Custo por Lead e ROI</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                GTM e GA4 nativos para mensurar o custo de cada lead e acompanhar o retorno exato dos anúncios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section id="faq" className="py-20 md:py-28 bg-slate-100/70 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
              Tire Suas Dúvidas
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">Perguntas Frequentes</h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
              Tudo o que você precisa saber sobre o desenvolvimento de sites de alta conversão.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              const faqId = `faq-answer-${idx}`;
              return (
                <div
                  key={idx}
                  className="glass-panel rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    aria-controls={faqId}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-base sm:text-lg text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    <span>{faq.question}</span>
                    <div
                      className={`p-1.5 rounded-lg bg-slate-200/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-950' : ''
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </button>
                  {isOpen && (
                    <div
                      id={faqId}
                      role="region"
                      className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/50"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CHAMADA FINAL (CTA) */}
      <section id="contato" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-500/10 dark:bg-blue-600/20 blur-[140px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto glass-panel p-8 sm:p-14 md:p-16 rounded-3xl border border-blue-300 dark:border-blue-500/40 bg-gradient-to-b from-blue-50/90 via-slate-50 to-white dark:from-blue-950/80 dark:via-slate-900 dark:to-slate-950 text-center space-y-8 shadow-2xl glow-blue">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-semibold">
            <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            Máquina de Aquisição Ativa
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Pare de queimar tráfego em páginas lentas. <span className="gradient-text">Coloque uma Máquina de Aquisição no seu WhatsApp.</span>
          </h2>

          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Em poucos dias, tenha um ativo digital com carregamento em milissegundos (&lt; 0.8s), psicologia de fechamento e rastreamento nativo operando pelo seu negócio.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base transition duration-200 shadow-xl shadow-emerald-500/25 hover:scale-105 transform glow-emerald"
            >
              <MessageSquare className="w-5 h-5" />
              Quero Minha Máquina de Aquisição
            </a>
          </div>

          <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Atendimento direto e estratégico
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Análise personalizada da sua presença digital
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Entrega rápida com alta performance
            </div>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="border-t border-slate-200 dark:border-slate-900 bg-slate-100/80 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 text-slate-500 dark:text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-white">
              <span className="font-mono text-base font-extrabold">RM</span>
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white text-base">Rogério Maciel</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Sites de Alta Conversão</div>
            </div>
          </div>

          <div className="text-center md:text-left space-y-1">
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
              "Vender é um discurso e compra é uma ação."
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              © {new Date().getFullYear()} Rogério Maciel. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/macrogerio/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-200/80 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"
              aria-label="LinkedIn de Rogério Maciel"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/mrcrogerio/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-200/80 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"
              aria-label="Instagram de Rogério Maciel"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-200 dark:hover:bg-emerald-900 transition"
              aria-label="WhatsApp de Rogério Maciel"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
