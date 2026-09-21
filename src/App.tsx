import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Zap,
  ShieldCheck,
  ChevronDown,
  Menu,
  X,
  Gauge,
  Check,
  Coins,
  TrendingUp,
  Award,
  HelpCircle,
  Eye,
  Calculator,
  Flame,
  Building2,
  Cpu,
  Clock,
  Database,
  Layers,
  Activity
} from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';

function LinkedinIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function InstagramIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="20" height="20" x="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Estado do Simulador de Perda Financeira (4º Sim: O Valor)
  const [monthlyAdSpend, setMonthlyAdSpend] = useState<number>(3000); // X = Investimento em Anúncios
  const [costPerClick, setCostPerClick] = useState<number>(5.0); // CPC atual
  const [leadToSaleRate, setLeadToSaleRate] = useState<number>(10.0); // % conversão de leads em vendas
  const [averageTicket, setAverageTicket] = useState<number>(1500); // Ticket médio por venda (R$)

  const whatsappUrl =
    'https://wa.me/5562996232227?text=Ol%C3%A1%20Rog%C3%A9rio,%20vi%20seu%20site%20e%20quero%20uma%20Per%C3%ADcia%20T%C3%A9cnica%20Gratuita%20para%20recriar%20meu%20site%20na%20Arquitetura%20Core-Bare-Metal.';

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // ---------------------------------------------------------------------------
  // ETAPA 1: TRÁFEGO & QUEIMA NA TELA BRANCA
  // ---------------------------------------------------------------------------
  const totalClicks = Math.round(monthlyAdSpend / (costPerClick || 1));
  const lostRate = 0.65; // 65% de fuga por lentidão (> 3s)
  const wastedAdSpendMonthly = Math.round(monthlyAdSpend * lostRate); // Verba queimada na tela branca
  const lostClicksMonthly = Math.round(totalClicks * lostRate); // Cliques perdidos
  const validClicksMonthly = Math.max(0, totalClicks - lostClicksMonthly); // Cliques que abrem hoje

  const leadCaptureRate = 0.15; // Média de 15% de conversão clique -> lead
  const lostLeadsMonthly = Math.max(1, Math.round(lostClicksMonthly * leadCaptureRate)); // Leads perdidos na tela branca
  const validLeadsMonthly = Math.max(1, Math.round(validClicksMonthly * leadCaptureRate)); // Leads válidos hoje

  // ---------------------------------------------------------------------------
  // ETAPA 2: COMERCIAL & RECUPERAÇÃO DE LEADS DEIXADOS NA MESA
  // ---------------------------------------------------------------------------
  const currentSalesMonthly = Math.max(1, Math.round(validLeadsMonthly * (leadToSaleRate / 100))); // Vendas atuais hoje
  const currentRevenueMonthly = Math.round(currentSalesMonthly * averageTicket); // Y = Faturamento Atual (sem otimização)

  const recoveredSalesMonthly = Math.max(1, Math.round(lostLeadsMonthly * (leadToSaleRate / 100))); // Novos convertidos dos leads recuperados
  const recoveredRevenueMonthly = Math.round(recoveredSalesMonthly * averageTicket); // Faturamento deixado na mesa
  const recoveredRevenueYearly = recoveredRevenueMonthly * 12;

  // ---------------------------------------------------------------------------
  // ETAPA 3: VEREDITO COMPARATIVO (INVESTE X -> FATURA Y | OTIMIZADO: INVESTE X -> FATURA Z)
  // ---------------------------------------------------------------------------
  const totalSalesOptimized = currentSalesMonthly + recoveredSalesMonthly; // Total de vendas com site rápido
  const optimizedRevenueMonthly = Math.round(totalSalesOptimized * averageTicket); // Z = Faturamento Otimizado

  // Links do Menu com rótulos concisos e diretos
  const navLinks = [
    { label: 'Especialista', href: '#especialista' },
    { label: 'Estrutura', href: '#estrutura' },
    { label: 'Mecanismo', href: '#solucao' },
    { label: 'Simulador', href: '#simulador' },
    { label: 'Garantia', href: '#fechamento' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  const faqs = [
    {
      question: 'Eu preciso refazer o design ou mudar a identidade visual do meu site atual?',
      answer:
        'Não! Se você já gosta do visual, das cores e do layout do seu site atual, nós recriamos exatamente a mesma aparência visual. Nós trocamos apenas o "motor" por trás: eliminamos o WordPress, o Elementor e dezenas de plugins pesados, substituindo tudo por código puro compilado em Core-Bare-Metal™. O resultado é um site visualmente idêntico, mas que abre em menos de 1 segundo no celular.',
    },
    {
      question: 'O que é a Arquitetura Core-Bare-Metal™ e por que ela impede a perda de vendas?',
      answer:
        'A maioria dos sites em WordPress roda dezenas de consultas a bancos de dados, scripts de plugins e temas pesados a cada visita, levando de 8 a 12 segundos no 4G do celular. Como 53% a 78% das pessoas desistem antes de 6 segundos, você perde mais da metade dos seus cliques pagos. O Core-Bare-Metal™ compila todo o site em arquivos estáticos ultraleves (< 80 KB) executados diretamente no dispositivo do visitante em menos de 1 segundo. O clique abre no mesmo instante.',
    },
    {
      question: 'Como funciona a Garantia Blindada de Engenharia?',
      answer:
        'Nós garantimos em contrato que a sua nova versão Core-Bare-Metal™ atingirá Nota 95+ no Google PageSpeed Mobile oficial e abrirá em menos de 1 segundo. Se não atingir essa métrica de engenharia, ajustamos sem custo ou devolvemos 100% do valor pago. O risco técnico é todo nosso.',
    },
    {
      question: 'Em quanto tempo o novo site fica pronto para receber anúncios?',
      answer:
        'Por utilizarmos uma esteira moderna de engenharia automatizada (Content-as-Code e compilação direta Jamstack), entregamos a sua versão Core-Bare-Metal™ completa, testada e com nota 95+ no Google em poucos dias úteis.',
    },
    {
      question: 'O site já vem com o rastreamento dos meus anúncios configurado?',
      answer:
        'Sim. Integramos nativamente o Google Tag Manager (GTM), Google Analytics 4 (GA4) e Pixel da Meta com telemetria para rastrear cada clique no botão de WhatsApp. Isso envia sinais de conversão de alta precisão de volta para o algoritmo do Google Ads e Meta Ads otimizarem seus lances.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white transition-colors duration-200">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 glass-nav border-b border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md bg-white/90 dark:bg-slate-950/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
          
          {/* Logo / Monograma */}
          <a href="#especialista" className="flex items-center gap-3 group flex-shrink-0" aria-label="Rogério Maciel - Início">
            <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200" aria-hidden="true">
              <span className="font-mono text-base sm:text-lg font-extrabold tracking-tighter">RM</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Rogério Maciel
                </span>
                <span className="hidden md:inline-block px-1.5 py-0.5 text-[9px] font-bold uppercase rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-700">
                  Core-Bare-Metal™
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wide text-slate-500 dark:text-slate-400 uppercase">
                Engenharia de Performance
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Ações da Direita */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <ThemeToggle />
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition shadow-md shadow-emerald-500/20 hover:scale-105 transform duration-150 whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Perícia Gratuita</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition"
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
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                Solicitar Perícia Gratuita no WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* 1º SIM — O ESPECIALISTA (Rogério Maciel / Confiança & Autoridade Técnica) */}
      {/* ========================================================================= */}
      <section id="especialista" className="relative pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/10 dark:bg-blue-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-500/10 dark:bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Headline de Alto Impacto */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-slate-900 dark:text-white">
              Seu site está demorando para abrir. <br />
              <span className="text-rose-600 dark:text-rose-400">
                E cada segundo de lentidão queima até 70% da sua verba de anúncios.
              </span>
            </h1>
          </div>

          {/* Subheadline Clara & Proposta de Autoridade */}
          <div className="max-w-3xl mx-auto space-y-3">
            <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
              Sou <strong>Rogério Maciel</strong>. Há mais de 20 anos construo engenharia de software para que empresas parem de perder vendas por travamentos técnicos e lentidão.
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">
              ⚡ Vou recriar o seu site atual com o <strong>mesmo visual que você já tem</strong>, só que abrindo em <strong>menos de 1 segundo no celular e Nota 95+ no Google PageSpeed</strong>.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base transition duration-200 shadow-xl shadow-emerald-500/25 hover:scale-105 transform glow-emerald"
            >
              <MessageSquare className="w-5 h-5" />
              Falar Direto com Rogério Maciel
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#estrutura"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-semibold text-base transition duration-200 shadow-sm"
            >
              Conhecer a Engenharia
              <ChevronDown className="w-4 h-4" />
            </a>
          </div>

          {/* 4 Badges de Credibilidade */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
            <div className="glass-panel p-4 rounded-2xl border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/30 transition">
              <Award className="w-6 h-6 text-blue-500 dark:text-blue-400 mb-2" />
              <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">20+ Anos de Carreira</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">UFPB, MBA &amp; Ex-Head Neoway</div>
            </div>
            <div className="glass-panel p-4 rounded-2xl border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/30 transition">
              <Gauge className="w-6 h-6 text-sky-500 dark:text-sky-400 mb-2" />
              <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">&lt; 1s no Celular</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Nota 95+ no Google PageSpeed</div>
            </div>
            <div className="glass-panel p-4 rounded-2xl border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/30 transition">
              <Eye className="w-6 h-6 text-indigo-500 dark:text-indigo-400 mb-2" />
              <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Visual Idêntico</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Mantemos o design que você gosta</div>
            </div>
            <div className="glass-panel p-4 rounded-2xl border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/30 transition">
              <ShieldCheck className="w-6 h-6 text-emerald-500 dark:text-emerald-400 mb-2" />
              <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Garantia Blindada</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Nota 95+ ou 100% Reembolso</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2º SIM — A EMPRESA / ESTRUTURA (A Solidez da Engenharia & Provas Reais)    */}
      {/* ========================================================================= */}
      <section id="estrutura" className="py-20 md:py-28 bg-slate-100/70 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Foto / Perfil Card */}
            <div className="lg:col-span-5 space-y-6">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-3 shadow-2xl space-y-4">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-inner group">
                    <picture>
                      <source type="image/webp" srcSet="/images/rogerio-maciel.webp" />
                      <img
                        src="/images/rogerio-maciel.jpg"
                        alt="Rogério Marinho Maciel - Especialista em Engenharia de Software e Alta Performance"
                        width="600"
                        height="750"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="text-lg font-bold">Rogério Marinho Maciel</div>
                      <div className="text-xs text-blue-300 font-medium">UFPB &amp; MBA • 20+ Anos de Engenharia</div>
                    </div>
                  </div>

                  <div className="px-2 pb-2 space-y-3 text-center">
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Arquiteto de Software e Engenheiro com mais de duas décadas de experiência em plataformas corporativas, Big Data e otimização extrema de conversão.
                    </p>
                    <div className="flex justify-center gap-3 pt-1">
                      <a
                        href="https://www.linkedin.com/in/macrogerio/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition shadow-sm"
                        aria-label="LinkedIn de Rogério Maciel"
                      >
                        <LinkedinIcon className="w-5 h-5" />
                      </a>
                      <a
                        href="https://www.instagram.com/mrcrogerio/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition shadow-sm"
                        aria-label="Instagram de Rogério Maciel"
                      >
                        <InstagramIcon className="w-5 h-5" />
                      </a>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition shadow-sm flex items-center gap-2 text-xs"
                        aria-label="WhatsApp de Rogério Maciel"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Falar no WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
            </div>

            {/* Texto de Apresentação da Estrutura */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 border border-blue-300 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-4 h-4" /> A Solidez da Nossa Estrutura
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Engenharia de Grande Escala Aplicada às Suas Vendas
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Atuei como <strong>Head de Aplicação Digital na Neoway</strong> (líder em Big Data na América Latina) e sou o criador da arquitetura <strong>Core-Bare-Metal™</strong> e da plataforma <strong>CoreAutoCRM / Cora Engine</strong>.
                </p>
                <p>
                  Não utilizamos templates genéricos ou construtores visuais de agência que pesam e travam o celular do cliente. Aplicamos o mesmo rigor de grandes arquiteturas de software para que <strong>sua empresa nunca mais perca uma venda por tempo de carregamento</strong>.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3º SIM — O PRODUTO / SOLUÇÃO (Arquitetura Core-Bare-Metal™ & 3 Pilares)    */}
      {/* ========================================================================= */}
      <section id="solucao" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header da Seção */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 border border-blue-300 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-4 h-4" /> A Solução Definitiva
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Mantenha o Visual Que Você Gosta. <br />
              <span className="gradient-text">Troque Apenas o Motor por Core-Bare-Metal™</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Você não precisa perder semanas aprovando novos layouts ou descartando o site que já construiu. Pegamos a <strong>mesma identidade visual e estrutura</strong> da sua página atual e reconstruímos todo o código em arquitetura pura, eliminando 100% dos intermediários e da lentidão.
            </p>
          </div>

          {/* O Conceito de Bare-Metal Aplicado à Web */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 space-y-4 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <Cpu className="w-4 h-4" /> O Que é a Engenharia Core-Bare-Metal™?
            </div>
            <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
              Tradicionalmente na computação, <em>"bare-metal"</em> refere-se ao software rodando diretamente no hardware, sem camadas de virtualização pesadas. Na web moderna, traduz-se em uma <strong>aplicação despojada de qualquer "gordura" de CMS</strong>, sem intermediários pesados, interpretadores lentos de runtime ou bancos dinâmicos no momento da entrega ao visitante.
            </p>
          </div>

          {/* Os 3 Pilares Técnicos da Arquitetura */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pilar 1 */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 hover:border-blue-500/40 transition">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/80 border border-blue-300 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Database className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Pilar 1</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Zero Runtime &amp; Banco na Borda
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Diferente de um CMS dinâmico (WordPress) que a cada visita precisa carregar PHP e consultar MySQL, o site é <strong>100% pré-compilado</strong>. O servidor não processa código: entrega diretamente arquivos estáticos puros compilados (HTML, CSS e JS) em nível de bytes.
              </p>
            </div>

            {/* Pilar 2 */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 hover:border-blue-500/40 transition">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-950/80 border border-indigo-300 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <Layers className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Pilar 2</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Stack Enxuta (React + Edge CDN)
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Bundle ultra-leve <strong>(&lt; 80 KB gzipped)</strong> contendo apenas o essencial. Imagens convertidas em <code>.webp</code> com dimensões explícitas para evitar saltos na tela <strong>(CLS = 0)</strong> e distribuídas pelo ponto de presença mais próximo do usuário (Cloudflare Edge).
              </p>
            </div>

            {/* Pilar 3 */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 hover:border-blue-500/40 transition">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Activity className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Pilar 3</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Telemetria Não Bloqueante
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Toda a inteligência de rastreamento (GTM, GA4, Meta Pixel) roda de forma assíncrona via APIs e <code>sendBeacon</code> sem travar a thread principal do celular. O resultado prático é <strong>Total Blocking Time (TBT) em 0 ms</strong> e resposta tátil imediata ao clique.
              </p>
            </div>
          </div>

          {/* Comparativo Visual do Motor & Telemetria */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-blue-200 dark:border-blue-900/60 bg-white/90 dark:bg-slate-900/90 shadow-xl space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase">
                  Engenharia de Fricção Zero
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  O Mesmo Design. Abertura em menos de 1 segundo.
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Não criamos páginas do zero que descaracterizam a marca que você consolidou. Preservamos sua identidade e trocamos o motor frágil por código 100% puro para que <strong>nenhum lead seja perdido por lentidão</strong>.
                </p>
                <div className="space-y-2 pt-2 text-sm">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span><strong>Preservação estética:</strong> Logotipo, fotos, cores e seções mantidas.</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span><strong>Carregamento instantâneo:</strong> O clique no anúncio abre na hora (&lt; 1s no celular).</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span><strong>Zero manutenção e zero quedas:</strong> Sem plugins para quebrar o site.</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 text-white dark:bg-slate-950 border border-slate-800 space-y-4 font-mono text-xs sm:text-sm">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-slate-400">TELEMETRIA OFICIAL</span>
                  <span className="text-emerald-400 font-bold">CORE-BARE-METAL™</span>
                </div>
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Tempo de Abertura (FCP):</span>
                    <span className="text-emerald-400 font-bold">&lt; 0.4s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Maior Elemento Visual (LCP):</span>
                    <span className="text-emerald-400 font-bold">&lt; 1s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Bloqueio de Scripts (TBT):</span>
                    <span className="text-emerald-400 font-bold">0ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Deslocamento Visual (CLS):</span>
                    <span className="text-emerald-400 font-bold">0.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Nota Google PageSpeed Mobile:</span>
                    <span className="text-emerald-400 font-bold">95 a 100</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-slate-800 pt-2.5">
                    <span className="text-slate-300 font-bold">Taxa de Aproveitamento de Cliques:</span>
                    <span className="text-emerald-400 font-bold">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparativo Lado a Lado */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Lado WordPress */}
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border-2 border-rose-300 dark:border-rose-900/60 space-y-6 shadow-sm">
              <div className="space-y-2 border-b border-rose-100 dark:border-rose-900/40 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                  Como a maioria dos sites funciona hoje
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">WordPress / Elementor / Wix</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span><strong>8 a 12 segundos</strong> para carregar no 4G móvel</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span><strong>Dezenas de plugins pesados</strong> que deixam a página instável</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span><strong>53% a 78% dos cliques desistem</strong> na tela em branco</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Banco de dados vulnerável a invasões e quedas de servidor</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Custo por clique mais caro no Google Ads (Índice de Qualidade baixo)</span>
                </li>
              </ul>
            </div>

            {/* Lado Core-Bare-Metal */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 via-emerald-500/10 to-transparent border-2 border-emerald-500 space-y-6 shadow-xl relative">
              <div className="absolute -top-3 right-6 bg-emerald-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase">
                Recomendado
              </div>
              <div className="space-y-2 border-b border-emerald-500/30 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Reconstrução de Engenharia
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Arquitetura Core-Bare-Metal™</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-200">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Abertura em menos de 1 segundo</strong> no celular (Nota 95+ no Google)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero plugins e zero dependências frágeis</strong>: código 100% puro</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>100% de aproveitamento dos cliques pagos</strong>: o lead vê a oferta na hora</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Deploy estático blindado e imune a invasões comuns</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Redução do Custo por Lead (CPL) com Índice de Qualidade 10/10</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4º SIM — O VALOR / PREÇO (Custo da Inação & Simulador de Faturamento)      */}
      {/* ========================================================================= */}
      <section id="simulador" className="py-20 md:py-28 bg-slate-100/70 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950/80 border border-rose-300 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-4 h-4" /> Simulador de Faturamento & Sangria de Tráfego
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Quanto Faturamento Seu Site Lento Deixa na Mesa Todo Mês?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
              Veja em tempo real o que acontece com a sua verba de tráfego e quanto a mais o seu negócio pode faturar investindo exatamente o mesmo valor em anúncios.
            </p>
          </div>

          <div className="glass-panel p-6 sm:p-10 rounded-3xl border-2 border-rose-400 dark:border-rose-600/50 bg-gradient-to-br from-rose-50/90 via-white to-slate-50 dark:from-rose-950/30 dark:via-slate-900 dark:to-slate-950 space-y-10 shadow-xl">

            {/* ------------------------------------------------------------- */}
            {/* ETAPA 1: TRÁFEGO & QUEIMA NA TELA BRANCA                      */}
            {/* ------------------------------------------------------------- */}
            <div className="space-y-6 pb-8 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-600 text-white font-black text-xs">1</span>
                Etapa 1: Seus Anúncios (Investimento & Custo por Clique)
              </div>

              {/* Sliders da Etapa 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {/* 1. Investimento em Anúncios */}
                <div className="space-y-2.5 p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between items-center">
                    <label htmlFor="ad-spend" className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      Quanto você investe em anúncios por mês?
                    </label>
                    <span className="text-base font-black text-rose-600 dark:text-rose-400">
                      R$ {monthlyAdSpend.toLocaleString('pt-BR')}
                    </span>
                  </div>
                  <input
                    id="ad-spend"
                    type="range"
                    min="1000"
                    max="50000"
                    step="500"
                    value={monthlyAdSpend}
                    onChange={(e) => setMonthlyAdSpend(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-rose-600"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    <span>R$ 1.000</span>
                    <span>R$ 15.000</span>
                    <span>R$ 30.000</span>
                    <span>R$ 50.000</span>
                  </div>
                </div>

                {/* 2. Custo Médio por Clique */}
                <div className="space-y-2.5 p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between items-center">
                    <label htmlFor="cpc" className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      Qual o seu Custo Médio por Clique (CPC)?
                    </label>
                    <span className="text-base font-black text-rose-600 dark:text-rose-400">
                      R$ {costPerClick.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  <input
                    id="cpc"
                    type="range"
                    min="1"
                    max="30"
                    step="0.5"
                    value={costPerClick}
                    onChange={(e) => setCostPerClick(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-rose-600"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    <span>R$ 1,00</span>
                    <span>R$ 10,00</span>
                    <span>R$ 20,00</span>
                    <span>R$ 30,00</span>
                  </div>
                </div>
              </div>

              {/* Resposta do Sistema para a Etapa 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {/* Verba Queimada */}
                <div className="p-4 sm:p-5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border-2 border-rose-300 dark:border-rose-800 text-left space-y-1">
                  <div className="flex items-center gap-1.5 text-rose-700 dark:text-rose-400">
                    <Flame className="w-4 h-4" />
                    <span className="text-xs font-extrabold uppercase tracking-wider">Verba Queimada na Tela Branca</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-rose-600 dark:text-rose-400">
                    R$ {wastedAdSpendMonthly.toLocaleString('pt-BR')} <span className="text-xs font-semibold text-slate-500">/ mês</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    65% da sua verba é gasta com visitantes que clicam no anúncio mas desistem antes do site lento carregar.
                  </p>
                </div>

                {/* Leads Perdidos */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-rose-200 dark:border-rose-900/60 text-left space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                    <TrendingUp className="w-4 h-4 text-rose-500" />
                    <span className="text-xs font-extrabold uppercase tracking-wider">Leads Perdidos por Lentidão</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                    ~{lostLeadsMonthly} leads <span className="text-xs font-semibold text-slate-500">/ mês</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Contatos comerciais qualificados que pagaram o clique mas nunca chegaram a ver a sua oferta.
                  </p>
                </div>
              </div>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* ETAPA 2: COMERCIAL, TAXA DE CONVERSÃO & TICKET MÉDIO           */}
            {/* ------------------------------------------------------------- */}
            <div className="space-y-6 pb-8 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white font-black text-xs">2</span>
                Etapa 2: Seu Comercial (Taxa de Conversão & Ticket Médio)
              </div>

              {/* Sliders da Etapa 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {/* 3. Taxa de Conversão */}
                <div className="space-y-2.5 p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between items-center">
                    <label htmlFor="lead-rate" className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      Qual a taxa de conversão de leads em vendas?
                    </label>
                    <span className="text-base font-black text-blue-600 dark:text-blue-400">
                      {leadToSaleRate.toFixed(0)}% dos leads
                    </span>
                  </div>
                  <input
                    id="lead-rate"
                    type="range"
                    min="2"
                    max="30"
                    step="1"
                    value={leadToSaleRate}
                    onChange={(e) => setLeadToSaleRate(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    <span>2% (conservador)</span>
                    <span>10% (médio)</span>
                    <span>20% (forte)</span>
                    <span>30% (alto)</span>
                  </div>
                </div>

                {/* 4. Ticket Médio */}
                <div className="space-y-2.5 p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between items-center">
                    <label htmlFor="average-ticket" className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      Qual o seu Ticket Médio por venda / contrato?
                    </label>
                    <span className="text-base font-black text-blue-600 dark:text-blue-400">
                      R$ {averageTicket.toLocaleString('pt-BR')}
                    </span>
                  </div>
                  <input
                    id="average-ticket"
                    type="range"
                    min="100"
                    max="15000"
                    step="100"
                    value={averageTicket}
                    onChange={(e) => setAverageTicket(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    <span>R$ 100</span>
                    <span>R$ 3.000</span>
                    <span>R$ 8.000</span>
                    <span>R$ 15.000</span>
                  </div>
                </div>
              </div>

              {/* Resposta do Sistema para a Etapa 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                {/* Leads Recuperados */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-left space-y-1">
                  <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">Leads que Param de se Perder</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                    ~{lostLeadsMonthly} leads
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Passam a abrir sua página instantaneamente (&lt;1s).
                  </p>
                </div>

                {/* Vendas Convertidas com a Otimização */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-left space-y-1">
                  <div className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400">
                    <Check className="w-4 h-4" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">Novas Vendas Convertidas</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                    +{recoveredSalesMonthly} {recoveredSalesMonthly === 1 ? 'venda' : 'vendas'}
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Fechadas com sua taxa de {leadToSaleRate}%.
                  </p>
                </div>

                {/* Faturamento Deixado na Mesa */}
                <div className="p-4 sm:p-5 rounded-2xl bg-rose-600 text-white dark:bg-rose-950/90 border border-rose-500 dark:border-rose-800 text-left space-y-1 shadow-md">
                  <div className="flex items-center gap-1.5 text-rose-100 dark:text-rose-300">
                    <Coins className="w-4 h-4" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">Faturamento Deixado na Mesa</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white dark:text-rose-200">
                    R$ {recoveredRevenueMonthly.toLocaleString('pt-BR')} <span className="text-xs font-normal text-rose-200">/ mês</span>
                  </div>
                  <p className="text-[11px] text-rose-100 dark:text-rose-300">
                    R$ {recoveredRevenueYearly.toLocaleString('pt-BR')} no ano que voltam para seu bolso.
                  </p>
                </div>
              </div>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* ETAPA 3: O VEREDITO DE IMPACTO (X -> Y vs X -> Z)             */}
            {/* ------------------------------------------------------------- */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border-2 border-emerald-500/80 space-y-8 shadow-2xl">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                  <Zap className="w-3.5 h-3.5" /> Veredito de Impacto no Faturamento
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Comparativo de Faturamento: Sem Otimização vs. Core-Bare-Metal™
                </h3>
              </div>

              {/* Grid Comparativo em 2 Colunas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Coluna 1: Cenário Atual (Site Lento) */}
                <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-rose-900/60 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                      Situação Atual (Site Lento)
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">Sem Otimização</span>
                  </div>
                  <div className="space-y-2 text-sm text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Você investe em tráfego:</span>
                      <span className="font-bold text-white">R$ {monthlyAdSpend.toLocaleString('pt-BR')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Leads válidos capturados:</span>
                      <span className="font-bold text-white">~{validLeadsMonthly} leads</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Vendas convertidas:</span>
                      <span className="font-bold text-white">~{currentSalesMonthly} vendas</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-slate-800">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Resultado Atual (Faturamento Y):
                    </span>
                    <div className="text-2xl sm:text-3xl font-black text-slate-200">
                      R$ {currentRevenueMonthly.toLocaleString('pt-BR')} <span className="text-xs font-normal text-slate-400">/ mês</span>
                    </div>
                  </div>
                </div>

                {/* Coluna 2: Com Core-Bare-Metal (Site Otimizado) */}
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-slate-900/90 border-2 border-emerald-500/80 space-y-4 shadow-lg glow-emerald">
                  <div className="flex items-center justify-between border-b border-emerald-900/60 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Com Core-Bare-Metal™ (Ultra Rápido)
                    </span>
                    <span className="text-[11px] text-emerald-400 font-mono font-bold">&lt; 1s de abertura</span>
                  </div>
                  <div className="space-y-2 text-sm text-slate-200">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Você continua investindo:</span>
                      <span className="font-bold text-emerald-300">R$ {monthlyAdSpend.toLocaleString('pt-BR')} (mesmo valor)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Leads totais aproveitados:</span>
                      <span className="font-bold text-emerald-300">~{validLeadsMonthly + lostLeadsMonthly} leads</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Vendas totais ({currentSalesMonthly} atuais + {recoveredSalesMonthly} novos):</span>
                      <span className="font-bold text-emerald-300">~{totalSalesOptimized} vendas</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-emerald-900/60">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block">
                      Novo Faturamento Estimado (Faturamento Z):
                    </span>
                    <div className="text-2xl sm:text-3xl font-black text-emerald-400">
                      R$ {optimizedRevenueMonthly.toLocaleString('pt-BR')} <span className="text-xs font-normal text-emerald-200">/ mês</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Frase Resumo Exata de Alto Impacto */}
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center sm:text-left space-y-2">
                <p className="text-base sm:text-lg leading-relaxed text-slate-100">
                  📢 <strong>Conclusão Clara:</strong> Hoje você investe <span className="text-rose-400 font-extrabold">R$ {monthlyAdSpend.toLocaleString('pt-BR')}</span> para ter um resultado de <span className="text-slate-200 font-extrabold">R$ {currentRevenueMonthly.toLocaleString('pt-BR')}</span> de faturamento (considerando apenas os leads válidos que conseguem abrir seu site lento). Com a nossa otimização você continua investindo os mesmos <span className="text-emerald-400 font-extrabold">R$ {monthlyAdSpend.toLocaleString('pt-BR')}</span>, mas o seu faturamento pode chegar a <span className="text-emerald-400 font-extrabold">R$ {optimizedRevenueMonthly.toLocaleString('pt-BR')} por mês</span> (resgatando <span className="text-emerald-300 font-bold">+R$ {recoveredRevenueMonthly.toLocaleString('pt-BR')}</span> que hoje são jogados no lixo).
                </p>
              </div>

              {/* CTA do Simulador */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
                <div className="text-xs text-slate-400 text-center sm:text-left">
                  ⚡ Recriamos seu site na arquitetura Core-Bare-Metal™ mantendo o mesmo design e entregando nota 95+ no Google.
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-base shadow-xl whitespace-nowrap transition duration-200 hover:scale-105"
                >
                  <MessageSquare className="w-5 h-5" />
                  Solicitar Perícia Gratuita no WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5º SIM — O MOMENTO (Perícia Gratuita, Garantia Blindada & WhatsApp)        */}
      {/* ========================================================================= */}
      <section id="fechamento" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-100/70 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800/80">
        {/* Glow de Fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/10 dark:bg-emerald-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto space-y-10">
          {/* Header do Fechamento */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-semibold">
              <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Diagnóstico Sem Custo & Risco Zero
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Pare de ver seu dinheiro de anúncios evaporar na tela branca.
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
              Veja exatamente quanto tráfego você recupera e como colocar seu site abrindo em menos de 1 segundo com código puro de engenharia.
            </p>
          </div>

          {/* Card Principal Unificado com Perícia Técnica + Garantia Blindada */}
          <div className="glass-panel p-8 sm:p-12 md:p-14 rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-b from-emerald-50/70 via-white to-slate-50 dark:from-emerald-950/30 dark:via-slate-900 dark:to-slate-950 space-y-8 shadow-2xl glow-emerald">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* Coluna 1: Como Funciona a Perícia Gratuita */}
              <div className="bg-white/90 dark:bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    <CheckCircle2 className="w-4 h-4" />
                    Como Funciona Sua Perícia Técnica Gratuita:
                  </div>
                  <ol className="space-y-3 text-sm sm:text-base text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/80 text-blue-600 dark:text-blue-300 font-bold text-xs flex items-center justify-center mt-0.5">1</span>
                      <span><strong>Envio do Link:</strong> Você me manda o endereço do seu site atual via WhatsApp.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/80 text-blue-600 dark:text-blue-300 font-bold text-xs flex items-center justify-center mt-0.5">2</span>
                      <span><strong>Diagnóstico no 4G/5G:</strong> Meço o tempo real de abertura no celular e calculo a sangria de anúncios.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/80 text-blue-600 dark:text-blue-300 font-bold text-xs flex items-center justify-center mt-0.5">3</span>
                      <span><strong>Plano de Ação:</strong> Apresento a reconstrução em Core-Bare-Metal™ mantendo seu design.</span>
                    </li>
                  </ol>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                  🎯 Perícia realizada pessoalmente por Rogério Maciel (20+ anos de experiência).
                </div>
              </div>

              {/* Coluna 2: A Garantia Blindada de Engenharia */}
              <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-950/60 dark:to-slate-900/90 p-6 sm:p-8 rounded-2xl border-2 border-emerald-500/60 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                      Garantia Blindada de Engenharia (Risco Zero)
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-snug">
                    Nota 95+ no Google PageSpeed ou 100% de Devolução
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                    Se o seu novo site não carregar em <strong>menos de 1 segundo no celular</strong> e não atingir <strong>nota 95+ no Google PageSpeed oficial</strong>, refinamos sem custos ou <strong>devolvemos 100% do valor pago</strong>.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-100/80 dark:bg-emerald-950/80 px-3 py-1.5 rounded-lg border border-emerald-300 dark:border-emerald-800">
                  <Check className="w-4 h-4" /> Sem letras miúdas. O risco técnico é 100% meu.
                </div>
              </div>
            </div>

            {/* Chamada para Ação Centralizada no WhatsApp */}
            <div className="pt-4 flex flex-col items-center justify-center gap-4 text-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-base sm:text-xl transition duration-200 shadow-2xl shadow-emerald-500/30 hover:scale-105 transform glow-emerald"
              >
                <MessageSquare className="w-6 h-6" />
                SOLICITAR PERÍCIA TÉCNICA GRATUITA NO WHATSAPP
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Atendimento direto com Rogério Maciel via WhatsApp: <strong className="text-slate-900 dark:text-white">(62) 99623-2227</strong>
              </p>
            </div>

            {/* Badges Finais de Confiança */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Perícia Técnica Sem Custo
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Reconstrução em Core-Bare-Metal™
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Nota 95+ Garantida
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DÚVIDAS FREQUENTES */}
      <section id="faq" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800/80">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 border border-blue-300 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" /> Perguntas Frequentes
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Dúvidas Frequentes
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
              Tudo sobre como funciona a recriação do seu site na Arquitetura Core-Bare-Metal™.
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
                      className={`p-1.5 rounded-lg bg-slate-200/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-950' : ''
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

      {/* FOOTER */}
      <footer className="border-t border-slate-200 dark:border-slate-900 bg-slate-100/80 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 text-slate-500 dark:text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-white">
              <span className="font-mono text-base font-extrabold">RM</span>
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white text-base">Rogério Maciel</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Arquitetura Core-Bare-Metal™</div>
            </div>
          </div>

          <div className="text-center md:text-left space-y-1">
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
              "Vender é um discurso e comprar é uma ação."
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
