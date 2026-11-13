export interface Pillar {
  id: string;
  badge: string;
  title: string;
  metric: string;
  metricLabel: string;
  description: string;
  techStack: string[];
  points: string[];
}

export interface GitHubRepo {
  name: string;
  fullName: string;
  url: string;
  description: string;
  stars?: number;
  tags: string[];
  highlight: string;
}

export interface TimelineItem {
  period: string;
  role: string;
  company: string;
  description: string;
  achievements: string[];
}

export const siteConfig = {
  profile: {
    name: 'Rogério Marinho Maciel',
    shortName: 'Rogério Maciel',
    title: 'Software Architect & Automation Platform Engineer',
    subheadline:
      'Conectando a velocidade da orquestração visual à robustez da engenharia bare-metal. Mais de 20 anos projetando sistemas distribuídos de alto throughput, microsserviços de 5ms, telemetria em tempo real e arquiteturas orientadas a eventos.',
    location: 'Aparecida de Goiânia, GO – Brasil (Disponibilidade Global)',
    email: 'rogerio@rogeriomaciel.com.br',
    whatsapp: '+55 62 99623-2227',
    whatsappDigits: '5562996232227',
    lattesUrl: 'https://lattes.cnpq.br/5008294767552521',
    lattesId: '5008294767552521',
    githubUrl: 'https://github.com/rogeriomaciel',
    linkedinUrl: 'https://www.linkedin.com/in/macrogerio',
    upworkUrl: 'https://www.upwork.com',
    siteUrl: 'https://rogeriomaciel.com.br',
    photoUrl: '/images/rogerio-maciel.webp',
    hourlyRate: '$35.00/hr',
    availabilityStatus: 'Disponível para Consultoria de Arquitetura & Contratos Internacionais',
  },

  badges: [
    { label: '20+ Anos de Computação', icon: 'clock' },
    { label: 'B.S. Ciência da Computação UFPB', icon: 'graduation' },
    { label: 'Pesquisador Bolsista CNPq', icon: 'award' },
    { label: 'Ex-Head Neoway Big Data', icon: 'building' },
    { label: 'Ex-CTO Traffega', icon: 'cpu' },
  ],

  pillars: [
    {
      id: 'bare-metal',
      badge: 'BARE-METAL PERFORMANCE',
      title: 'Transpilação de Fluxos Visuais para Microsserviços de 5ms',
      metric: '-98%',
      metricLabel: 'Consumo de RAM (1.2GB para 25MB)',
      description:
        'Eliminação do gargalo computacional do n8n em escala. Um compilador customizado que converte grafos declarativos de automação em microsserviços autônomos em Fastify e Bun, com latência de execução de 5ms e zero dependências de runtime visual.',
      techStack: ['TypeScript', 'Fastify', 'Bun', 'n8n JSON AST', 'Kahn Algorithm'],
      points: [
        'Ordenação topológica de DAG com resolução determinística de nós',
        'Substituição de serialização JSON pesada por pipeline nativo em memória',
        'Execução bare-metal consumindo 25MB de RAM para 126 fluxos simultâneos',
      ],
    },
    {
      id: 'gitops-n8n',
      badge: 'ENTERPRISE GITOPS',
      title: 'CI/CD Bidirecional & Workflow-as-Code para n8n',
      metric: '0-Downtime',
      metricLabel: 'Deploy Automatizado com Rollback Atômico',
      description:
        'Sincronização bidirecional entre o ambiente visual de Staging e o repositório Git local. Deploy automatizado para a API oficial do n8n em produção com ordenação topológica e substituição dinâmica de credenciais por ambiente.',
      techStack: ['n8n API v1', 'GitHub Actions', 'Git Hooks', 'PostgreSQL', 'Docker'],
      points: [
        'Fim do versionamento "cego" em interfaces no-code/low-code',
        'Pull Requests reais com diffs de código antes de qualquer merge em produção',
        'Subworkflows resolvidos e ativados automaticamente na ordem correta',
      ],
    },
    {
      id: 'programmatic-seo',
      badge: 'AUTONOMOUS SEO & RUM',
      title: 'Programmatic SEO Autônomo & Telemetria First-Party < 5ms',
      metric: '120+',
      metricLabel: 'Páginas Vivas Geradas por Tendências de Busca',
      description:
        'Engine viva que monitora tendências de busca diárias e gera páginas estáticas atômicas de altíssima conversão, indexando-as instantaneamente via Google Indexing API e IndexNow. Telemetria first-party assíncrona (sendBeacon) imune a AdBlockers.',
      techStack: ['Google Indexing API', 'IndexNow', 'navigator.sendBeacon', 'Nginx Edge', 'Vite SSG'],
      points: [
        'Captura cirúrgica de buscas de cauda longa com alta intenção de compra',
        'Abertura instantânea (0.38s) cravando PageSpeed 99-100/100 no celular',
        'Telemetria de leads em tempo real diretamente gravada no log de borda',
      ],
    },
    {
      id: 'fintech-commerce',
      badge: 'FINTECH & CONVERSATIONAL COMMERCE',
      title: 'Stripe WhatsApp Checkout & Webhooks Criptografados',
      metric: '100%',
      metricLabel: 'Proteção Criptográfica HMAC-SHA256 timingSafeEqual',
      description:
        'Infraestrutura de comércio conversacional gerando sessões personalizadas de Stripe Checkout diretamente em fluxos de WhatsApp. Webhooks blindados com validação criptográfica nativa contra timing attacks e forjamento de payloads.',
      techStack: ['Stripe API v1', 'WhatsApp Cloud API', 'Evolution API', 'HMAC-SHA256', 'Node.js Crypto'],
      points: [
        'Validação criptográfica em tempo constante eliminando vulnerabilidades de assinatura',
        'Gestão de ciclo de vida de assinaturas, reembolsos e conciliação financeira',
        'Fluxo de checkout fluido sem redirecionamentos externos desnecessários',
      ],
    },
  ] as Pillar[],

  repositories: [
    {
      name: 'coreautocrm-architecture',
      fullName: 'rogeriomaciel/coreautocrm-architecture',
      url: 'https://github.com/rogeriomaciel/coreautocrm-architecture',
      description:
        'Transpiler n8n ➔ Fastify microsserviços. Converte 126 workflows visuais em código TypeScript autônomo com latência de 5ms e -98% de consumo de RAM.',
      tags: ['TypeScript', 'Fastify', 'n8n', 'DevOps', 'Microservices'],
      highlight: 'Latência 5ms • -98% RAM',
    },
    {
      name: 'n8n-stripe-whatsapp-checkout',
      fullName: 'rogeriomaciel/n8n-stripe-whatsapp-checkout',
      url: 'https://github.com/rogeriomaciel/n8n-stripe-whatsapp-checkout',
      description:
        'Engine de comércio conversacional no WhatsApp com geração dinâmica de Stripe Checkout Sessions e verificação de assinatura HMAC-SHA256 timingSafeEqual.',
      tags: ['Stripe', 'n8n', 'WhatsApp', 'Fintech', 'HMAC-SHA256'],
      highlight: 'Fintech & Security',
    },
    {
      name: 'core-bare-metal-base',
      fullName: 'rogeriomaciel/core-bare-metal-base',
      url: 'https://github.com/rogeriomaciel/core-bare-metal-base',
      description:
        'Template de arquitetura frontend de ultra alta performance. Score 99/100 no Google PageSpeed Mobile, LCP < 0.5s e TBT 0ms com Bun, Vite e SSG.',
      tags: ['Bun', 'Vite', 'React 19', 'Tailwind', 'PageSpeed 99'],
      highlight: 'PageSpeed 99/100 Mobile',
    },
    {
      name: 'adswhats-monitor',
      fullName: 'rogeriomaciel/adswhats-monitor',
      url: 'https://github.com/rogeriomaciel/adswhats-monitor',
      description:
        'Torre de controle operacional multi-loja para rastreamento de atribuição de Meta Ads (Click-to-WhatsApp) e auditoria de SLA de resposta ao segundo.',
      tags: ['React', 'TypeScript', 'Bun', 'n8n', 'Meta CTWA'],
      highlight: 'SLA ao Segundo • Multi-Tenant',
    },
  ] as GitHubRepo[],

  kadoshCase: {
    client: 'Oficina Mecânica KADOSH',
    location: 'Aparecida de Goiânia & Goiânia, GO',
    url: 'https://kadoshautomotiva.com.br',
    challenge:
      'Operação mecânica de alta precisão (câmbio automático por diálise e linha premium) dependente de tráfego pago com custo crescente, taxa de rejeição por lentidão de página e perda de orçamentos por demora no atendimento humano inicial.',
    solution: [
      'Geração autônoma de 120+ landing pages cobrindo todos os sintomas e marcas automotivas da região metropolitana',
      'Arquitetura Core-Bare-Metal cravando tempo de abertura de 0.38s e PageSpeed 99 no celular',
      'Agente de IA determinístico de WhatsApp com Máquina de Estados Finitos (FSM) de 39 estados com Protocolo Suprema Honestidade (zero alucinação)',
      'Painel de telemetria de pátio em Smart TV 4K com ordens de serviço por comando de voz para os mecânicos',
    ],
    results: [
      { metric: '0.38s', label: 'Tempo de Carregamento Real (LCP)' },
      { metric: '120+', label: 'Páginas Indexadas no Google' },
      { metric: '4.7★', label: 'Avaliação com 220+ Avaliações Reais' },
      { metric: '< 5s', label: 'Latência de Telemetria de Leads' },
    ],
  },

  timeline: [
    {
      period: '2022 – Presente',
      role: 'Fundador & Arquiteto-Chefe',
      company: 'Ecossistema CORE / CoreAuto & Desfruute LTDA',
      description:
        'Concepção de arquitetura proprietária de automação e telemetria operacional com transpilador de DAGs n8n para microsserviços TypeScript de ultra baixa latência sobre Fastify e Bun. Conciliação financeira automatizada e agentes determinísticos com FSM.',
      achievements: [
        'Transpilação de 126 workflows com redução de 98% de RAM e resposta em 5ms',
        'Esteira autônoma de Programmatic SEO gerando e indexando mais de 120 páginas estáticas',
        'Rastreamento em tempo real imune a bloqueadores com telemetria direta no Nginx',
      ],
    },
    {
      period: 'Jan 2019 – Mai 2021',
      role: 'Head de Aplicação Digital & Liderança Técnica',
      company: 'Neoway Business Solutions',
      description:
        'Liderança técnica de sistemas corporativos de enriquecimento e integração de dados na principal empresa de Big Data e inteligência de mercado da América Latina, após aquisição de tecnologia e ativo de software concebido por Rogério.',
      achievements: [
        'Concepção e refatoração de esteiras analíticas em nuvem de alta concorrência',
        'Governança estrita de dados, compliance regulatório e tolerância a falhas',
        'Integração de barramentos corporativos, ERPs e microsserviços distribuídos',
      ],
    },
    {
      period: 'Período Consolidado',
      role: 'Diretor de Tecnologia (CTO)',
      company: 'Traffega & Empresa Familiar de Tecnologia',
      description:
        'Arquitetura de pipelines de mensageria de alto throughput e desenvolvimento integral de ERP empresarial corporativo, contábil, tributário e fabril.',
      achievements: [
        'Pioneirismo na emissão e contingência de NF-e via web services e XML direto na SEFAZ',
        'Modernização de arquiteturas legadas Java EE / ASP para plataformas web escaláveis',
      ],
    },
    {
      period: '2000 – 2002',
      role: 'Pesquisador Bolsista CNPq & Desenvolvedor de Tempo Real',
      company: 'Laboratório de Energia Solar (LES / UFPB)',
      description:
        'Projeto institucional FINEP sob orientação do Prof. Dr. Francisco Antônio Belo: estudo de polarização e condução elétrica aplicada a derivados de petróleo.',
      achievements: [
        'Desenvolvimento de software de aquisição de dados em tempo real para 8 sensores eletromagnéticos',
        'Calibração matricial e regressão multivariada no MATLAB para modelo embarcado',
        'Coautoria de software registrado no CNPq demonstrado na 17ª Feira Mundial de Petróleo (Rio Oil & Gas Expo 2002)',
      ],
    },
  ] as TimelineItem[],

  faqs: [
    {
      question: 'Como funciona a consultoria de arquitetura e otimização de plataformas?',
      answer:
        'A consultoria atua diretamente na raiz dos problemas de escala, latência e custo operacional. Analisamos a arquitetura atual (fluxos n8n, microsserviços, consumo de banco de dados, esteiras de mensageria) e traçamos o plano de transição para código nativo bare-metal (Fastify/Bun), reduzindo custos de nuvem em até 80% e cortando a latência para menos de 10ms.',
    },
    {
      question: 'O que diferencia a sua abordagem de automação das soluções no-code comuns?',
      answer:
        'Ferramentas no-code são excelentes para validar hipóteses, mas se tornam armadilhas de custo e lentidão em produção. Minha abordagem une a agilidade da modelagem visual com o rigor de engenharia: Workflow-as-Code com versionamento no Git, testes unitários automatizados, transpilação para microsserviços nativos e telemetria first-party de nível militar.',
    },
    {
      question: 'Você atende clientes e contratos internacionais?',
      answer:
        'Sim. Possuo perfil ativo e validado no Upwork ($35.00/hr) com contratos gerenciados em dólares, além de disponibilidade para projetos de consultoria de arquitetura, refatoração de infraestrutura crítica e implantação de plataformas corporativas no Brasil e no exterior.',
    },
    {
      question: 'O que é a Perícia Técnica de 5 minutos?',
      answer:
        'É uma análise forense gravada em vídeo onde eu inspeciono pessoalmente o seu site, API ou fluxo de automação: avalio métricas de Core Web Vitals no celular, inspeciono o waterfall de rede, identifico gargalos de CPU/memória e aponto exatamente quanto dinheiro sua operação está deixando na mesa por causa de atrasos técnicos.',
    },
  ],
};

export function getWhatsAppConsultUrl(customText?: string): string {
  const text =
    customText ||
    'Olá Rogério! Vi seu portal de engenharia e gostaria de conversar sobre consultoria de arquitetura / automação para a minha empresa.';
  return `https://wa.me/${siteConfig.profile.whatsappDigits}?text=${encodeURIComponent(text)}`;
}

