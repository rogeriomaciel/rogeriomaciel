export type Locale = 'pt' | 'en';

export interface PillarContent {
  id: string;
  badge: string;
  title: string;
  metric: string;
  metricLabel: string;
  description: string;
  techStack: string[];
  points: string[];
}

export interface RepoContent {
  name: string;
  fullName: string;
  url: string;
  description: string;
  tags: string[];
  highlight: string;
}

export interface TimelineContent {
  period: string;
  role: string;
  company: string;
  description: string;
  achievements: string[];
}

export interface FaqContent {
  question: string;
  answer: string;
}

export interface SiteDictionary {
  locale: Locale;
  nav: {
    pillars: string;
    github: string;
    kadoshCase: string;
    timeline: string;
    faq: string;
    consultCta: string;
    statusText: string;
  };
  profile: {
    name: string;
    shortName: string;
    roleBadge: string;
    title: string;
    subheadline: string;
    location: string;
    email: string;
    whatsapp: string;
    whatsappDigits: string;
    lattesUrl: string;
    lattesId: string;
    githubUrl: string;
    linkedinUrl: string;
    upworkUrl: string;
    hourlyRate: string;
    availabilityStatus: string;
  };
  badges: string[];
  hero: {
    topBadge: string;
    headlinePrefix: string;
    headlineHighlight: string;
    subheadline: string;
    exploreCta: string;
    githubCta: string;
    whatsappCta: string;
    quote: string;
    terminalTitle: string;
    terminalStatus: string;
    terminalMetrics: {
      transpilerTitle: string;
      transpilerStat: string;
      transpilerDesc: string;
      gitopsTitle: string;
      gitopsStat: string;
      gitopsDesc: string;
      seoTitle: string;
      seoStat: string;
      seoDesc: string;
      fintechTitle: string;
      fintechStat: string;
      fintechDesc: string;
    };
  };
  pillarsSection: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    pillars: PillarContent[];
  };
  githubSection: {
    badge: string;
    title: string;
    subtitle: string;
    inspectButton: string;
    viewAllOnGithub: string;
    repos: RepoContent[];
  };
  kadoshSection: {
    badge: string;
    title: string;
    subtitle: string;
    clientLabel: string;
    clientName: string;
    clientLocation: string;
    challengeTitle: string;
    challengeDesc: string;
    engineeringTitle: string;
    solutionPoints: string[];
    results: { metric: string; label: string }[];
    socialProofScore: string;
    socialProofQuote: string;
  };
  bioSection: {
    badge: string;
    title: string;
    subtitle: string;
    lattesLabel: string;
    lattesStatus: string;
    lattesAction: string;
    credentials: string[];
    timeline: TimelineContent[];
  };
  auditSection: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    badges: string[];
    whatsappCta: string;
    linkedinCta: string;
  };
  faqSection: {
    badge: string;
    title: string;
    subtitle: string;
    faqs: FaqContent[];
  };
  footer: {
    about: string;
    quote: string;
    reposTitle: string;
    connectionsTitle: string;
    allRightsReserved: string;
  };
}

export const i18nContent: Record<Locale, SiteDictionary> = {
  // =========================================================================
  // PORTUGUÊS (BRASIL)
  // =========================================================================
  pt: {
    locale: 'pt',
    nav: {
      pillars: 'Pilares',
      github: 'GitHub Showcase',
      kadoshCase: 'Estudo Kadosh',
      timeline: 'Trajetória 20+ Anos',
      faq: 'FAQ',
      consultCta: 'Trocar Ideia / WhatsApp',
      statusText: 'Disponível para Consultoria & Contratos',
    },
    profile: {
      name: 'Rogério Marinho Maciel',
      shortName: 'Rogério Maciel',
      roleBadge: 'Arquiteto',
      title: 'Software Architect & Automation Platform Engineer',
      subheadline:
        'Conectando a velocidade da orquestração visual à robustez da engenharia bare-metal. Mais de 20 anos projetando sistemas distribuídos de alta taxa de transferência, microsserviços de 5ms, telemetria em tempo real e arquiteturas orientadas a eventos.',
      location: 'Aparecida de Goiânia, GO – Brasil (Disponibilidade Global)',
      email: 'rogerio@rogeriomaciel.com.br',
      whatsapp: '+55 62 99623-2227',
      whatsappDigits: '5562996232227',
      lattesUrl: 'https://lattes.cnpq.br/5008294767552521',
      lattesId: '5008294767552521',
      githubUrl: 'https://github.com/rogeriomaciel',
      linkedinUrl: 'https://www.linkedin.com/in/macrogerio',
      upworkUrl: 'https://www.upwork.com',
      hourlyRate: '$35.00/hr',
      availabilityStatus: 'Disponível para Consultoria de Arquitetura & Contratos Internacionais',
    },
    badges: [
      '20+ Anos de Computação',
      'B.S. Ciência da Computação UFPB',
      'Pesquisador Bolsista CNPq',
      'Ex-Head Neoway Big Data',
      'Ex-CTO Traffega',
    ],
    hero: {
      topBadge: 'Software Architecture & Platform Engineering',
      headlinePrefix: 'Automações corporativas e IA que ',
      headlineHighlight: 'vendem 24/7 sem alucinar.',
      subheadline:
        'Mais de 20 anos projetando sistemas que não caem em picos de tráfego, agentes de WhatsApp com resposta em 3 segundos e esteiras que cortam até 80% do custo de nuvem. Da empresa local em Goiânia a operações globais no Upwork.',
      exploreCta: 'Ver Caso Real da Kadosh',
      githubCta: 'GitHub Repos',
      whatsappCta: 'Trocar uma Ideia no WhatsApp',
      quote: '"Simplicity is prerequisite for reliability." — Edsger W. Dijkstra',
      terminalTitle: 'core-bare-metal-engine.ts',
      terminalStatus: 'LIVE',
      terminalMetrics: {
        transpilerTitle: 'Transpiler Engine (n8n ➔ Fastify)',
        transpilerStat: '5.0ms avg',
        transpilerDesc: '126 Workflows Ativos • -98% RAM (1.2GB ➔ 25MB)',
        gitopsTitle: 'GitOps CI/CD DAG Resolution',
        gitopsStat: 'Kahn Alg.',
        gitopsDesc: 'Staging UI ➔ Git Sync ➔ Official n8n API (Dynamic Credentials)',
        seoTitle: 'Programmatic SEO & RUM',
        seoStat: 'Score 99/100',
        seoDesc: '120+ LPs Vivas (LCP 0.38s) • sendBeacon < 5ms Nginx',
        fintechTitle: 'Fintech & Security',
        fintechStat: 'HMAC SHA-256',
        fintechDesc: 'crypto.timingSafeEqual() constant-time signature verification',
      },
    },
    pillarsSection: {
      badge: 'Arquitetura de Plataforma',
      titlePrefix: 'Os 4 Pilares da Engenharia de ',
      titleHighlight: 'Rogério Maciel',
      subtitle:
        'Sistemas distribuídos projetados para eliminar gargalos de concorrência, cortar custos de infraestrutura e garantir resiliência operacional com rigor de engenharia de software corporativo.',
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
            '💡 Para seu negócio: Seu sistema nunca mais cai em picos de tráfego e você corta até 80% do custo com servidores.',
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
            '💡 Para seu negócio: Mudanças operacionais nunca mais derrubam o faturamento da empresa por erro humano.',
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
            '💡 Para seu negócio: Sua empresa conquista clientes no Google e nas IAs em poucas horas com custo zero de clique.',
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
            '💡 Para seu negócio: O cliente fecha e paga em segundos direto no chat do WhatsApp, eliminando abandono de carrinho.',
            'Validação criptográfica em tempo constante eliminando vulnerabilidades de assinatura',
            'Gestão de ciclo de vida de assinaturas, reembolsos e conciliação financeira',
            'Fluxo de checkout fluido sem redirecionamentos externos desnecessários',
          ],
        },
      ],
    },
    githubSection: {
      badge: 'Open Source & Blueprints de Produção',
      title: 'Vitrine de Repositórios Públicos no GitHub',
      subtitle:
        'Casos reais e código aberto de engenharia de alta escala: transpiladores, comércio conversacional em fintech, arquitetura bare-metal SSG e monitoramento de atribuição de anúncios.',
      inspectButton: 'Inspecionar Repositório',
      viewAllOnGithub: 'Ver Todos no GitHub (@rogeriomaciel)',
      repos: [
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
      ],
    },
    kadoshSection: {
      badge: 'Estudo de Caso Empírico em Produção',
      title: 'O Teardown da Oficina Kadosh',
      subtitle:
        'Como a convergência entre Programmatic SEO, arquitetura Core-Bare-Metal e agentes determinísticos transformou uma operação automotiva de alto ticket em autoridade líder da Grande Goiânia.',
      clientLabel: 'Cliente / Operação',
      clientName: 'Oficina Mecânica KADOSH',
      clientLocation: 'Aparecida de Goiânia & Goiânia, GO',
      challengeTitle: '🛑 O Desafio Operacional',
      challengeDesc:
        'Operação mecânica de alta precisão (câmbio automático por diálise e linha premium) dependente de tráfego pago com custo crescente, taxa de rejeição por lentidão de página e perda de orçamentos por demora no atendimento humano inicial.',
      engineeringTitle: '⚡ A Engenharia Aplicada',
      solutionPoints: [
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
      socialProofScore: '4.7 / 5.0 no Google Maps',
      socialProofQuote:
        '"O tempo de resposta no celular caiu de 9 segundos para 0.38s. As buscas orgânicas de cauda longa no Google cobrem todos os bairros e modelos de veículos, gerando fluxo constante de orçamentos qualificados no WhatsApp."',
    },
    bioSection: {
      badge: '20+ Anos de Computação Pesada',
      title: 'Trajetória de Liderança Técnica & Pesquisa',
      subtitle:
        'Da pesquisa científica em sistemas de tempo real na UFPB à liderança em Big Data na Neoway e arquiteturas autônomas bare-metal em produção.',
      lattesLabel: 'Currículo Lattes (CNPq):',
      lattesStatus: 'Validado',
      lattesAction: 'Acessar',
      credentials: [
        'Convergência TI/OT & Sensores Industriais',
        'Pioneirismo em NF-e direta na SEFAZ',
        '17ª Feira Mundial de Petróleo / Rio Oil & Gas',
        'Engenharia de Compiladores (Kahn DAG)',
      ],
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
            'Liderança técnica de sistemas corporativos de enriquecimento e integração de dados na principal empresa de Big Data e inteligência de mercado da América Latina, após aquisição de tecnologia concebida por Rogério.',
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
      ],
    },
    auditSection: {
      badge: 'Conversa Estratégica & Diagnóstico',
      titlePrefix: 'Sua empresa está perdendo vendas no atendimento ou ',
      titleHighlight: 'queimando dinheiro com infraestrutura lenta?',
      subtitle:
        'Sem caixinhas prontas, sem cursos e sem papo de vendedor. Me manda uma mensagem no WhatsApp contando o seu cenário atual. Em uma conversa franca, eu te mostro onde a sua operação está vazando dinheiro e qual a arquitetura exata para blindar o seu negócio com IA.',
      badges: [
        'Sem Papo de Vendedor',
        'Diagnóstico Direto com Rogério',
        'Goiânia, Brasil & Global',
      ],
      whatsappCta: 'Falar com Rogério Maciel no WhatsApp',
      linkedinCta: 'Conectar no LinkedIn',
    },
    faqSection: {
      badge: 'Perguntas Frequentes de CTOs & Fundadores',
      title: 'Respostas Técnicas Diretas',
      subtitle:
        'Dúvidas comuns sobre consultoria de arquitetura, esteiras bare-metal e contratos internacionais.',
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
    },
    footer: {
      about:
        'Mais de 20 anos projetando sistemas distribuídos de alta escala, esteiras de automação corporativa, convergência TI/OT e microsserviços bare-metal.',
      quote: '"Simplicity is prerequisite for reliability." — Edsger W. Dijkstra',
      reposTitle: 'Repositórios no GitHub',
      connectionsTitle: 'Conexões Oficiais',
      allRightsReserved: 'Todos os direitos reservados.',
    },
  },

  // =========================================================================
  // ENGLISH (INTERNATIONAL)
  // =========================================================================
  en: {
    locale: 'en',
    nav: {
      pillars: 'Pillars',
      github: 'GitHub Showcase',
      kadoshCase: 'Case Study',
      timeline: '20+ Year Career',
      faq: 'FAQ',
      consultCta: 'Chat on WhatsApp',
      statusText: 'Available for Advisory & Contracts',
    },
    profile: {
      name: 'Rogério Marinho Maciel',
      shortName: 'Rogério Maciel',
      roleBadge: 'Architect',
      title: 'Software Architect & Automation Platform Engineer',
      subheadline:
        'Bridging the gap between visual workflow orchestration and low-latency bare-metal engineering. 20+ years architecting distributed systems, 5ms microservices, real-time telemetry, and event-driven backends.',
      location: 'Goiânia / São Paulo, Brazil (Global Remote Availability)',
      email: 'rogerio@rogeriomaciel.com.br',
      whatsapp: '+55 62 99623-2227',
      whatsappDigits: '5562996232227',
      lattesUrl: 'https://lattes.cnpq.br/5008294767552521',
      lattesId: '5008294767552521',
      githubUrl: 'https://github.com/rogeriomaciel',
      linkedinUrl: 'https://www.linkedin.com/in/macrogerio',
      upworkUrl: 'https://www.upwork.com',
      hourlyRate: '$35.00/hr',
      availabilityStatus: 'Available for International Contracts & Architecture Advisory',
    },
    badges: [
      '20+ Years in Computing',
      'B.S. in Computer Science (UFPB)',
      'CNPq Research Scholar',
      'Former Head at Neoway Big Data',
      'Former CTO at Traffega',
    ],
    hero: {
      topBadge: 'Software Architecture & Platform Engineering',
      headlinePrefix: 'Enterprise AI and automation that ',
      headlineHighlight: 'drives revenue 24/7 without hallucinating.',
      subheadline:
        '20+ years architecting high-throughput distributed systems, conversational AI responding in 3 seconds, and pipelines slashing up to 80% of cloud bills. From regional mid-market enterprises to high-scale global operations.',
      exploreCta: 'Inspect Kadosh Case Study',
      githubCta: 'GitHub Repos',
      whatsappCta: 'Discuss on WhatsApp',
      quote: '"Simplicity is prerequisite for reliability." — Edsger W. Dijkstra',
      terminalTitle: 'core-bare-metal-engine.ts',
      terminalStatus: 'LIVE',
      terminalMetrics: {
        transpilerTitle: 'Transpiler Engine (n8n ➔ Fastify)',
        transpilerStat: '5.0ms avg',
        transpilerDesc: '126 Active Workflows • -98% RAM (1.2GB ➔ 25MB)',
        gitopsTitle: 'GitOps CI/CD DAG Resolution',
        gitopsStat: 'Kahn Alg.',
        gitopsDesc: 'Staging UI ➔ Git Sync ➔ Official n8n API (Dynamic Credentials)',
        seoTitle: 'Programmatic SEO & RUM',
        seoStat: 'Score 99/100',
        seoDesc: '120+ Live Pages (LCP 0.38s) • sendBeacon < 5ms Nginx',
        fintechTitle: 'Fintech & Security',
        fintechStat: 'HMAC SHA-256',
        fintechDesc: 'crypto.timingSafeEqual() constant-time signature verification',
      },
    },
    pillarsSection: {
      badge: 'Platform Architecture',
      titlePrefix: 'The 4 Engineering Pillars of ',
      titleHighlight: 'Rogério Maciel',
      subtitle:
        'Distributed systems engineered to break concurrency ceilings, slash cloud bills by up to 80%, and enforce operational reliability with enterprise rigor.',
      pillars: [
        {
          id: 'bare-metal',
          badge: 'BARE-METAL PERFORMANCE',
          title: 'Transpiling Visual Workflows into 5ms Microservices',
          metric: '-98%',
          metricLabel: 'RAM Consumption (1.2GB down to 25MB)',
          description:
            'Solving the memory and latency ceiling of n8n at scale. A custom compiler converting declarative automation graphs into autonomous Fastify and Bun microservices with 5ms execution latency and zero visual runtime dependencies.',
          techStack: ['TypeScript', 'Fastify', 'Bun', 'n8n JSON AST', 'Kahn Algorithm'],
          points: [
            '💡 Business Impact: Your system never crashes under traffic spikes and your cloud bills shrink by up to 80%.',
            'Topological DAG sorting with deterministic node dependency resolution',
            'Replacing heavy JSON serialization with in-memory native stream pipes',
            'Consuming only 25MB RAM to power 126 concurrent production workflows',
          ],
        },
        {
          id: 'gitops-n8n',
          badge: 'ENTERPRISE GITOPS',
          title: 'Bi-Directional CI/CD & Workflow-as-Code for n8n',
          metric: '0-Downtime',
          metricLabel: 'Automated Deployments with Atomic Rollbacks',
          description:
            'Bi-directional synchronization between the visual Staging canvas and the local Git repository. Automated deployments to the production n8n official API with topological subworkflow ordering and dynamic credential remapping.',
          techStack: ['n8n API v1', 'GitHub Actions', 'Git Hooks', 'PostgreSQL', 'Docker'],
          points: [
            '💡 Business Impact: Operational updates never disrupt live sales workflows or cause costly outages.',
            'Eliminating blind changes inside visual no-code/low-code dashboards',
            'Enforcing true Git diff Pull Requests and code reviews prior to production merge',
            'Automatically resolving and activating subworkflows in precise topological order',
          ],
        },
        {
          id: 'programmatic-seo',
          badge: 'AUTONOMOUS SEO & RUM',
          title: 'Autonomous Programmatic SEO & First-Party Telemetry < 5ms',
          metric: '120+',
          metricLabel: 'Live Pages Generated via Real-Time Search Trends',
          description:
            'An autonomous engine monitoring Google search trends and generating atomic static pages optimized for high commercial intent, indexed instantly via Google Indexing API and IndexNow. Async first-party telemetry (<5ms) immune to AdBlockers.',
          techStack: ['Google Indexing API', 'IndexNow', 'navigator.sendBeacon', 'Nginx Edge', 'Vite SSG'],
          points: [
            '💡 Business Impact: Your company captures high-intent buyers on Google & AI search engines in hours at zero paid ad cost.',
            'Surgically capturing high-intent long-tail customer search queries',
            'Instant 0.38s page loads nailing 99-100/100 PageSpeed on mobile devices',
            'Real-time conversion telemetry piped directly to edge server logs',
          ],
        },
        {
          id: 'fintech-commerce',
          badge: 'FINTECH & CONVERSATIONAL COMMERCE',
          title: 'Stripe WhatsApp Checkout & Hardened Webhooks',
          metric: '100%',
          metricLabel: 'Cryptographic Protection via HMAC-SHA256 timingSafeEqual',
          description:
            'Conversational commerce infrastructure generating dynamic Stripe Checkout Sessions inside WhatsApp chat flows. Webhook handlers hardened with native cryptographic validation against timing attacks and payload spoofing.',
          techStack: ['Stripe API v1', 'WhatsApp Cloud API', 'Evolution API', 'HMAC-SHA256', 'Node.js Crypto'],
          points: [
            '💡 Business Impact: Customers checkout and pay directly inside chat in seconds, eradicating abandoned carts.',
            'Constant-time signature verification preventing cryptographic timing leaks',
            'Full subscription lifecycle management, dispute handling, and ledger reconciliation',
            'Frictionless in-chat purchasing flows with zero clumsy app switching',
          ],
        },
      ],
    },
    githubSection: {
      badge: 'Open Source & Production Blueprints',
      title: 'Featured Open Source Repositories on GitHub',
      subtitle:
        'Battle-tested production code: automation transpilers, fintech conversational checkout, bare-metal SSG architecture, and ad attribution towers.',
      inspectButton: 'Inspect Repository',
      viewAllOnGithub: 'View All on GitHub (@rogeriomaciel)',
      repos: [
        {
          name: 'coreautocrm-architecture',
          fullName: 'rogeriomaciel/coreautocrm-architecture',
          url: 'https://github.com/rogeriomaciel/coreautocrm-architecture',
          description:
            'Architectural deep-dive: Transpiling 126 n8n workflows into high-throughput Node.js/Fastify microservices (5ms latency, 98% RAM reduction).',
          tags: ['TypeScript', 'Fastify', 'n8n', 'DevOps', 'Microservices'],
          highlight: '5ms Latency • -98% RAM',
        },
        {
          name: 'n8n-stripe-whatsapp-checkout',
          fullName: 'rogeriomaciel/n8n-stripe-whatsapp-checkout',
          url: 'https://github.com/rogeriomaciel/n8n-stripe-whatsapp-checkout',
          description:
            'Production-grade n8n workflows for WhatsApp conversational commerce: dynamic Stripe Checkout and HMAC-SHA256 timingSafeEqual signature verification.',
          tags: ['Stripe', 'n8n', 'WhatsApp', 'Fintech', 'HMAC-SHA256'],
          highlight: 'Fintech & Security',
        },
        {
          name: 'core-bare-metal-base',
          fullName: 'rogeriomaciel/core-bare-metal-base',
          url: 'https://github.com/rogeriomaciel/core-bare-metal-base',
          description:
            'Ultra-high performance frontend boilerplate (Bun + Vite + Tailwind + SSG). PageSpeed 99/100 Mobile, LCP <0.5s, TBT 0ms.',
          tags: ['Bun', 'Vite', 'React 19', 'Tailwind', 'PageSpeed 99'],
          highlight: 'PageSpeed 99/100 Mobile',
        },
        {
          name: 'adswhats-monitor',
          fullName: 'rogeriomaciel/adswhats-monitor',
          url: 'https://github.com/rogeriomaciel/adswhats-monitor',
          description:
            'Operational control tower for WhatsApp traffic, Meta Ads (CTWA) attribution, and multi-tenant SLA auditing built with React, Bun, and n8n.',
          tags: ['React', 'TypeScript', 'Bun', 'n8n', 'Meta CTWA'],
          highlight: 'Second-Level SLA • Multi-Tenant',
        },
      ],
    },
    kadoshSection: {
      badge: 'Empirical Production Case Study',
      title: 'The Oficina Kadosh Teardown',
      subtitle:
        'How combining Programmatic SEO, Core-Bare-Metal architecture, and deterministic AI transformed a high-ticket automotive service into the regional market leader.',
      clientLabel: 'Client / Business',
      clientName: 'Oficina Mecânica KADOSH',
      clientLocation: 'Goiânia Metropolitan Area, Brazil',
      challengeTitle: '🛑 The Operational Challenge',
      challengeDesc:
        'A high-precision specialized repair shop (automatic transmission fluid flush and luxury vehicles) bleeding ad budgets due to slow mobile landing pages and customer drop-off during manual intake.',
      engineeringTitle: '⚡ The Engineering Solution',
      solutionPoints: [
        'Autonomous programmatic engine generating 120+ landing pages targeting every vehicle make and transmission symptom',
        'Core-Bare-Metal architecture delivering a blazing 0.38s LCP and 99/100 Google PageSpeed on mobile devices',
        'Deterministic 39-state WhatsApp FSM AI agent enforcing the Supreme Honesty Protocol (zero hallucinations)',
        'Keyless garage floor terminal on 4K Smart TV with voice-to-text task logging for mechanics',
      ],
      results: [
        { metric: '0.38s', label: 'Actual Mobile LCP Load Time' },
        { metric: '120+', label: 'Organic Pages Indexed on Google' },
        { metric: '4.7★', label: 'Rating Across 220+ Verified Reviews' },
        { metric: '< 5s', label: 'Real-Time Lead Telemetry Latency' },
      ],
      socialProofScore: '4.7 / 5.0 on Google Maps',
      socialProofQuote:
        '"Mobile load time dropped from 9 seconds to 0.38s. Long-tail organic search traffic now dominates regional rankings, generating a steady stream of pre-qualified quotes straight into WhatsApp."',
    },
    bioSection: {
      badge: '20+ Years in Heavy Computing',
      title: 'Technical Leadership & Research Track Record',
      subtitle:
        'From real-time systems research at UFPB to leading enterprise Big Data architecture at Neoway and shipping bare-metal autonomous stacks.',
      lattesLabel: 'Curriculum Lattes (CNPq):',
      lattesStatus: 'Verified',
      lattesAction: 'Access',
      credentials: [
        'IT/OT Convergence & Industrial Transducers',
        'Pioneer in Direct SEFAZ Electronic Invoicing (NF-e)',
        '17th World Petroleum Congress / Rio Oil & Gas',
        'Compiler Engineering & DAG Kahn Resolution',
      ],
      timeline: [
        {
          period: '2022 – Present',
          role: 'Founder & Chief Architect',
          company: 'CORE Ecosystem / CoreAuto & Desfruute LTDA',
          description:
            'Architected proprietary automation and telemetry platforms including an n8n DAG compiler generating ultra-low-latency Fastify and Bun microservices. Built automated ledger reconciliation and deterministic FSM agents.',
          achievements: [
            'Transpiled 126 workflows reducing RAM consumption by 98% with 5ms response times',
            'Autonomous Programmatic SEO pipeline generating and indexing over 120 static pages',
            'AdBlocker-immune real-time telemetry running directly on edge Nginx servers',
          ],
        },
        {
          period: 'Jan 2019 – May 2021',
          role: 'Head of Digital Applications / Tech Lead',
          company: 'Neoway Business Solutions',
          description:
            'Led software architecture and enterprise integration systems at Latin America’s largest Big Data & market intelligence company following the acquisition of a proprietary software asset conceived by Rogério.',
          achievements: [
            'Architected and refactored high-concurrency cloud analytical query engines',
            'Enforced rigorous data governance, regulatory compliance, and fault tolerance',
            'Integrated enterprise service buses (ESB), corporate ERPs, and distributed microservices',
          ],
        },
        {
          period: 'Prior Consolidated Career',
          role: 'Chief Technology Officer (CTO)',
          company: 'Traffega & Enterprise Tech Firm',
          description:
            'Architected high-throughput message streaming pipelines and led full lifecycle development of corporate manufacturing, tax, and accounting ERP systems.',
          achievements: [
            'Pioneered electronic invoicing (NF-e) via direct SEFAZ XML web services before commercial libraries existed',
            'Migrated legacy Java EE and ASP stacks into modern high-scale web platforms',
          ],
        },
        {
          period: '2000 – 2002',
          role: 'CNPq Research Scholar / Real-Time Systems Engineer',
          company: 'Solar Energy Laboratory (LES / UFPB)',
          description:
            'FINEP institutional research under Dr. Francisco Antônio Belo: electromagnetic polarization and electrical conduction modeling for petroleum derivatives.',
          achievements: [
            'Built real-time data acquisition software for an 8-sensor electromagnetic array',
            'Implemented experimental calibration matrices and multivariable regression in MATLAB for embedded runtimes',
            'Co-authored CNPq-registered software demonstrated at the 17th World Petroleum Congress (Rio Oil & Gas Expo 2002)',
          ],
        },
      ],
    },
    auditSection: {
      badge: 'Strategic Advisory & Architecture Diagnosis',
      titlePrefix: 'Is your company losing sales to slow response times or ',
      titleHighlight: 'burning budgets on bloated infrastructure?',
      subtitle:
        'No cookie-cutter templates, no courses, and no sales pitch. Drop me a direct message on WhatsApp sharing your current bottlenecks. In a candid conversation, I will pinpoint where your revenue is leaking and outline the exact architecture to scale with deterministic AI.',
      badges: [
        'No Sales Pitch',
        'Direct Access to Rogério',
        'Global Remote Contracts',
      ],
      whatsappCta: 'Connect with Rogério Maciel on WhatsApp',
      linkedinCta: 'Connect on LinkedIn',
    },
    faqSection: {
      badge: 'Frequently Asked Questions from CTOs & Founders',
      title: 'Direct Technical Answers',
      subtitle:
        'Straightforward answers regarding architecture advisory, bare-metal stacks, and international contracting.',
      faqs: [
        {
          question: 'How does your architecture advisory and platform optimization engagement work?',
          answer:
            'We pinpoint the root causes of latency spikes, concurrency limits, and excessive cloud bills. We profile your existing stack (n8n workflows, microservices, database queries, message queues) and execute a migration plan to native bare-metal runtimes (Fastify/Bun), slashing cloud costs by up to 80% and bringing latency under 10ms.',
        },
        {
          question: 'How does your approach differ from standard no-code/low-code builders?',
          answer:
            'No-code tools are great for rapid prototyping but become expensive operational liabilities at scale. My approach combines visual design velocity with software engineering rigor: Workflow-as-Code with Git versioning, automated unit tests, native microservice transpilation, and military-grade first-party telemetry.',
        },
        {
          question: 'Do you take on international clients and contracts?',
          answer:
            'Yes. I hold an active and verified Upwork profile ($35.00/hr) with contracts managed in USD, available for remote software architecture advisory, infrastructure refactoring, and enterprise platform engineering worldwide.',
        },
        {
          question: 'What is the 5-Minute Technical Audit?',
          answer:
            'A recorded video forensic teardown where I inspect your site, API, or automation pipeline: auditing mobile Core Web Vitals, analyzing network request waterfalls, detecting CPU/memory bottlenecks, and calculating exactly how much revenue your operation is leaving on the table due to technical friction.',
        },
      ],
    },
    footer: {
      about:
        '20+ years architecting large-scale distributed systems, enterprise automation pipelines, IT/OT convergence, and bare-metal microservices.',
      quote: '"Simplicity is prerequisite for reliability." — Edsger W. Dijkstra',
      reposTitle: 'GitHub Repositories',
      connectionsTitle: 'Official Links',
      allRightsReserved: 'All rights reserved.',
    },
  },
};

