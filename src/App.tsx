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
  ExternalLink,
  Menu,
  X,
  AlertTriangle,
  Gauge,
  BarChart3,
  Check,
  Award
} from 'lucide-react';

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
        'Um One Page Site (O tipo de site que criamos para você) concentra toda a jornada de compra em uma única página fluida com navegação suave por âncoras. Isso elimina o atrito cognitivo de menus complexos e múltiplos cliques, guiando o visitante do primeiro impacto até o botão de WhatsApp sem distrações.',
    },
    {
      question: 'Por que vocês usam React e Vite em vez de WordPress?',
      answer:
        'O WordPress é pesado, depende de dezenas de plugins que frequentemente quebram, é vulnerável a invasões e costuma ser lento no 4G móvel. Com React + Vite estático, você tem um site com velocidade instantânea (< 1 segundo), segurança impenetrável e zero custo com manutenções caras.',
    },
    {
      question: 'Eu poderei alterar o conteúdo do meu site no futuro?',
      answer:
        'Sim! Todo o conteúdo do site é gerido com clareza através de arquivos de roteiro. As atualizações são estruturadas e previsíveis.',
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
      title: 'Vídeos que Vendem',
      subtitle: 'O Guia Definitivo para Criar Vídeos que Vendem Todos os Dias',
      tag: 'Metodologia Autoral',
      desc: 'Fundamento da premissa "Vender é um discurso e compra é uma ação" aplicada à conversão digital.',
    },
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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. NAVBAR */}
      <header className="sticky top-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo / Monograma */}
          <a href="#inicio" className="flex items-center gap-3 group" aria-label="Rogério Maciel - Ir para o início da página">
            <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform duration-200" aria-hidden="true">
              <span className="font-mono text-lg font-extrabold tracking-tighter">RM</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-blue-400 transition-colors">
                Rogério Maciel
              </span>
              <span className="text-[11px] font-medium tracking-wider text-slate-400 uppercase">
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
                className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header CTA */}
          <div className="hidden sm:flex items-center gap-4">
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
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-panel border-b border-slate-800 px-6 py-5 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-slate-300 hover:text-blue-400 py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 text-slate-950 font-semibold text-sm shadow-lg shadow-emerald-500/20"
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
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-300 text-xs sm:text-sm font-semibold tracking-wide shadow-inner">
            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
            Engenharia de Software + Psicologia de Vendas + Inteligência Artificial
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
            Seu negócio não precisa de mais um site bonito.{' '}
            <span className="gradient-text block mt-2">
              Precisa de uma máquina que coloca clientes prontos no seu WhatsApp.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Desenvolvemos Sites ultrarrápidos e persuasivos baseados no método autoral{' '}
            <strong className="text-white font-semibold">"Vender é um Discurso e Compra é uma Ação"</strong>.
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-base transition duration-200"
            >
              Conhecer o Método
              <ChevronDown className="w-4 h-4" />
            </a>
          </div>

          {/* Badges de Autoridade e Performance */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
            <div className="glass-panel p-4 rounded-2xl border border-slate-800/80 hover:border-blue-500/30 transition">
              <Gauge className="w-6 h-6 text-sky-400 mb-2" />
              <div className="font-bold text-white text-sm sm:text-base">Carregamento &lt; 1s</div>
              <div className="text-xs text-slate-400 mt-0.5">Nota 98+ no Google PageSpeed</div>
            </div>
            <div className="glass-panel p-4 rounded-2xl border border-slate-800/80 hover:border-blue-500/30 transition">
              <BookOpen className="w-6 h-6 text-amber-400 mb-2" />
              <div className="font-bold text-white text-sm sm:text-base">Método Comprovado</div>
              <div className="text-xs text-slate-400 mt-0.5">Autor de "Vídeos que Vendem"</div>
            </div>
            <div className="glass-panel p-4 rounded-2xl border border-slate-800/80 hover:border-blue-500/30 transition">
              <Cpu className="w-6 h-6 text-indigo-400 mb-2" />
              <div className="font-bold text-white text-sm sm:text-base">20+ Anos de Engenharia</div>
              <div className="text-xs text-slate-400 mt-0.5">Ciência da Computação & MBA</div>
            </div>
            <div className="glass-panel p-4 rounded-2xl border border-slate-800/80 hover:border-blue-500/30 transition">
              <BarChart3 className="w-6 h-6 text-emerald-400 mb-2" />
              <div className="font-bold text-white text-sm sm:text-base">GTM & Rastreamento</div>
              <div className="text-xs text-slate-400 mt-0.5">Rastreamento total nativo</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEMA & EMPATIA */}
      <section id="problema" className="py-20 md:py-28 bg-slate-900/40 border-y border-slate-800/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase">
              A Realidade do Mercado
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Por que 90% dos sites na internet <span className="text-red-400">não vendem absolutamente nada</span>?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Muitas empresas investem caro em tráfego e redes sociais, mas enviam pessoas para páginas lentas, cheias de
              jargões técnicos e menus que confundem o visitante. Se o seu discurso não capturar o cliente em 3 segundos, ele
              compra do seu concorrente.
            </p>
          </div>

          {/* Os 3 Vilões */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="glass-panel p-8 rounded-3xl border border-red-500/20 bg-gradient-to-b from-red-950/20 to-slate-900/60 relative overflow-hidden group">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-6">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">1. Lentidão Oculta no Celular</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Sites pesados em WordPress que demoram 6 segundos para abrir no 4G fazem 50% dos visitantes desistirem antes
                de ler uma única linha.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-red-500/20 bg-gradient-to-b from-red-950/20 to-slate-900/60 relative overflow-hidden group">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-6">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">2. Discurso Vazio e Sem Alma</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Textos institucionais genéricos (*"somos uma empresa com excelência..."*) que não geram conexão emocional nem
                resolvem as dores reais do cliente.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-red-500/20 bg-gradient-to-b from-red-950/20 to-slate-900/60 relative overflow-hidden group">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-6">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">3. Falta de Caminho Claro</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Páginas com dezenas de botões e links dispersos onde o cliente não sabe qual ação deve tomar para comprar.
              </p>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl text-center max-w-2xl mx-auto border-blue-500/30 bg-blue-950/30">
            <p className="text-slate-200 text-sm sm:text-base font-medium">
              💡 <strong>A Solução:</strong> Substituir o panfleto digital por um <strong>Site de Alta Conversão</strong> que
              conduz o visitante por microdecisões até o WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* 4. SOLUÇÕES & SERVIÇOS */}
      <section id="servicos" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-blue-400 uppercase">
              Nossas Soluções Estratégicas
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Engenharia e Discurso Estruturados para <span className="gradient-text">Vender Todos os Dias</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Não criamos apenas páginas web; construímos ativos de conversão com metodologia validada.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1: Sites de Alta Conversão (Core) */}
            <div className="glass-panel glass-panel-hover p-8 rounded-3xl border border-blue-500/30 bg-gradient-to-b from-blue-950/40 via-slate-900 to-slate-950 flex flex-col justify-between relative">
              <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider shadow-md">
                Principal Serviço
              </div>
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                  <Zap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Sites de Alta Conversão</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Página única contínua com carregamento instantâneo, design executivo premium e funil de microdecisões
                    planejado para levar o visitante direto ao seu WhatsApp.
                  </p>
                </div>
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">O que está incluído:</div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Estrutura React + Vite estática</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Copy persuasiva autoral baseada no método</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Design responsivo mobile-first</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Injeção de GTM e botões inteligentes de conversão</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition shadow-lg shadow-blue-600/30"
                >
                  Solicitar Site de Alta Conversão
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Card 2: Reestruturação de Copy */}
            <div className="glass-panel glass-panel-hover p-8 rounded-3xl border border-slate-800 bg-slate-900/60 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <BookOpen className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Diagnóstico & Copy de Vendas</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Aplicação profunda do método "Vender é um Discurso e Compra é uma Ação" para redesenhar a narrativa do
                    seu produto/serviço e eliminar a guerra por preços.
                  </p>
                </div>
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">O que está incluído:</div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>Mapeamento de desejos e quebra de crenças limitantes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>Criação de Proposta Única de Valor (PUV)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>Roteirização completa de páginas e vídeos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>Posicionamento de autoridade instantânea</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition"
                >
                  Consultar Estratégia de Copy
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Card 3: Automação & Rastreamento */}
            <div className="glass-panel glass-panel-hover p-8 rounded-3xl border border-slate-800 bg-slate-900/60 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <BarChart3 className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Automação & Rastreamento Inteligente</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Configuração avançada de Google Tag Manager, pixels e esteiras de automação para negócios que desejam
                    escalar com previsibilidade matemática de ROI.
                  </p>
                </div>
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">O que está incluído:</div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>Disparo de eventos de conversão no WhatsApp</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>Integração com esteiras de CRM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>Mensuração e auditoria de retorno sobre anúncios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>Previsibilidade matemática de escala</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition"
                >
                  Falar Sobre Rastreamento
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MANIFESTO & SOBRE ROGÉRIO MACIEL */}
      <section id="sobre" className="py-20 md:py-28 bg-slate-900/50 border-y border-slate-800/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Bio */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                Quem Está Por Trás do Seu Projeto
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Rogério Marinho Maciel
              </h2>
              <p className="text-blue-400 font-medium text-lg">
                Engenheiro de Produto • CTO • Arquiteto de Software & IA • Autor
              </p>

              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                <p>
                  Sou <strong>Cientista da Computação pela Universidade Federal da Paraíba (UFPB)</strong> e pós-graduado com{' '}
                  <strong>MBA em Consultoria e Marketing</strong>. Possuo mais de <strong>20 anos de trajetória sólida</strong>{' '}
                  na liderança de engenharia de software, automação de processos e arquitetura de inteligência artificial.
                </p>
                <p>
                  Atuei como <strong>Head de Aplicação Digital na Neoway</strong> (uma das maiores empresas de inteligência de
                  mercado da América Latina) e sou criador do <strong>CoreAutoCRM</strong> — um SaaS conversacional operando
                  com máquina de estados finitos (FSM) de 28 módulos cognitivos de IA.
                </p>
                <p>
                  Como autor dos livros <em>"Vídeos que Vendem"</em>, <em>"A Vantagem Injusta"</em> e <em>"As 5 Atitudes Diárias"</em>,
                  eu aplico a ciência exata dos algoritmos à psicologia comportamental de compras para criar sites que não apenas
                  existem, mas geram resultados comerciais todos os dias.
                </p>
              </div>

              {/* Redes */}
              <div className="pt-2 flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/macrogerio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  LinkedIn
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.instagram.com/mrcrogerio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-400" />
                  Instagram
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Right Quote & Highlights */}
            <div className="lg:col-span-5 space-y-6">
              <div className="glass-panel p-8 rounded-3xl border-blue-500/30 bg-gradient-to-b from-blue-950/50 to-slate-900 relative">
                <div className="text-4xl text-blue-400 font-serif leading-none mb-4">“</div>
                <blockquote className="text-lg text-slate-200 font-medium leading-relaxed italic">
                  Vender é um discurso e compra é uma ação. Quando a sua engenharia de software remove todo o atrito técnico
                  e o seu discurso remove toda a dúvida, o cliente toma a decisão de compra naturalmente.
                </blockquote>
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white text-sm">Rogério Maciel</div>
                    <div className="text-xs text-slate-400">Autor de "Vídeos que Vendem"</div>
                  </div>
                  <span className="text-xs font-mono text-blue-400 bg-blue-950 px-2.5 py-1 rounded-md border border-blue-500/30">
                    Método Autoral
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Obras & Publicações */}
          <div className="pt-8 space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">Obras & Publicações Autorais</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {books.map((book, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-6 rounded-2xl border border-slate-800/90 hover:border-slate-700 transition space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <BookOpen className="w-5 h-5 text-blue-400" />
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {book.tag}
                    </span>
                  </div>
                  <h4 className="font-bold text-white text-base">{book.title}</h4>
                  <p className="text-xs text-blue-300 font-medium">{book.subtitle}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{book.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. DIFERENCIAIS */}
      <section id="diferenciais" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-emerald-400 uppercase">
              Vantagem Competitiva
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Por que os nossos sites <span className="gradient-text">convertem mais</span>?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              A união de 4 pilares inegociáveis para garantir o máximo retorno sobre o seu investimento digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-panel glass-panel-hover p-6 rounded-3xl border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Gauge className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Velocidade Extrema (React + Vite Puro)</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Sem WordPress, sem temas inchados, sem lentidão. O site carrega em fração de segundo no celular mais simples.
              </p>
            </div>

            <div className="glass-panel glass-panel-hover p-6 rounded-3xl border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Metodologia de Vendas Publicada</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Textos e hierarquia visual baseados em psicologia comportamental e métodos autorais testados.
              </p>
            </div>

            <div className="glass-panel glass-panel-hover p-6 rounded-3xl border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Segurança e Estabilidade Absolutas</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Pacote 100% estático. Zero banco de dados vulnerável a invasões e zero plugins que quebram com o tempo.
              </p>
            </div>

            <div className="glass-panel glass-panel-hover p-6 rounded-3xl border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Rastreamento de Elite (GTM Integrado)</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Saiba com exatidão quem clicou no WhatsApp, de onde veio a campanha e como otimizar seus anúncios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section id="faq" className="py-20 md:py-28 bg-slate-900/40 border-y border-slate-800/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-blue-400 uppercase">
              Tire Suas Dúvidas
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Perguntas Frequentes</h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Tudo o que você precisa saber sobre o desenvolvimento de Sites de alta conversão.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              const faqId = `faq-answer-${idx}`;
              return (
                <div
                  key={idx}
                  className="glass-panel rounded-2xl border border-slate-800 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    aria-controls={faqId}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-base sm:text-lg text-white hover:text-blue-400 transition"
                  >
                    <span>{faq.question}</span>
                    <div
                      className={`p-1.5 rounded-lg bg-slate-800/80 text-slate-300 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-400 bg-blue-950' : ''
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </button>
                  {isOpen && (
                    <div
                      id={faqId}
                      role="region"
                      className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/50"
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/20 blur-[140px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto glass-panel p-8 sm:p-14 md:p-16 rounded-3xl border border-blue-500/40 bg-gradient-to-b from-blue-950/80 via-slate-900 to-slate-950 text-center space-y-8 shadow-2xl glow-blue">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-semibold">
            <Zap className="w-4 h-4 text-emerald-400" />
            Próximo Passo
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Pronto para ter um site que transforma visitantes em <span className="gradient-text">clientes reais</span>?
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Dê adeus aos sites lentos e genéricos. Converse diretamente com Rogério Maciel e coloque uma máquina de alta
            conversão para trabalhar pelo seu negócio.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-lg transition duration-200 shadow-2xl shadow-emerald-500/30 hover:scale-105 transform glow-emerald"
            >
              <MessageSquare className="w-5 h-5" />
              Falar com Rogério Maciel no WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Atendimento direto e estratégico
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Análise personalizada da sua presença digital
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Entrega rápida com alta performance
            </div>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-white">
              <span className="font-mono text-base font-extrabold">RM</span>
            </div>
            <div>
              <div className="font-bold text-white text-base">Rogério Maciel</div>
              <div className="text-xs text-slate-400">Sites de Alta Conversão</div>
            </div>
          </div>

          <div className="text-center md:text-left space-y-1">
            <p className="text-xs text-slate-400 font-medium">
              "Vender é um discurso e compra é uma ação."
            </p>
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Rogério Maciel. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/macrogerio/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition"
              aria-label="LinkedIn de Rogério Maciel"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/mrcrogerio/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition"
              aria-label="Instagram de Rogério Maciel"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-900 transition"
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
