import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const dataDir = path.join(rootDir, 'src', 'data');
const outputFile = path.join(dataDir, 'site-content.generated.json');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Conteúdo base padrão
const content = {
  meta: {
    title: "Rogério Maciel — Máquinas de Aquisição Comercial | Arquitetura Core-Bare-Metal™",
    description: "Seu negócio não precisa de mais um site bonito. Precisa parar de queimar até 70% da sua verba de anúncios em páginas lentas e colocar clientes prontos no seu WhatsApp.",
    gtmId: "GTM-WNXV9S4X",
    whatsappNumber: "5562996232227",
    whatsappMessage: "Olá Rogério, li sua carta de vendas e quero um Diagnóstico Forense Gratuito do meu site para conhecer a Arquitetura Core-Bare-Metal.",
    logoText: "RM",
    brandName: "Rogério Maciel (Rogério Marinho Maciel)",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/macrogerio/",
      instagram: "https://www.instagram.com/mrcrogerio/"
    }
  },
  hero: {
    badge: "ARQUITETURA PROPRIETÁRIA CORE-BARE-METAL™ + PSICOLOGIA DE VENDAS",
    headline: "Seu negócio não precisa de mais um site \"bonito\".",
    headlineHighlight: "Precisa parar de queimar até 70% da sua verba de anúncios em páginas lentas e colocar clientes prontos no seu WhatsApp.",
    subheadline: "Desenvolvemos Máquinas de Aquisição Comercial na Arquitetura Proprietária Core-Bare-Metal™ (< 0.8s no celular, Nota 98+ no PageSpeed) baseadas no princípio \"Vender é um discurso e comprar é uma ação\".",
    primaryCtaText: "Solicitar Diagnóstico Forense Gratuito",
    secondaryCtaText: "Ver Diagnóstico Forense",
    stats: [
      { value: "< 0.8s", label: "Carregamento no Celular (Nota 98+)" },
      { value: "Core-Bare-Metal™", label: "Fricção Zero / 0 Plugins" },
      { value: "20+ Anos", label: "Ex-Head Neoway & Arquiteto IA" },
      { value: "100%", label: "Garantia Blindada ou Reembolso" }
    ]
  },
  problem: {
    tag: "SEÇÃO 1: O DIAGNÓSTICO FORENSE",
    title: "A Hemorragia Invisível do Seu Tráfego Pago",
    subtitle: "Os relatórios mostram centenas de cliques pagos, mas o comercial passa dias inteiros sem receber contatos qualificados. O seu problema não é o anúncio: é o site matando clientes antes deles lerem sua proposta.",
    cards: [
      {
        title: "1. O Padrão da Lentidão (90%)",
        description: "90% dos sites empresariais no Brasil usam WordPress/Elementor com plugins pesados."
      },
      {
        title: "2. Tempo Real no 4G/5G (8.2s a 12.8s)",
        description: "É o tempo médio de espera no celular para carregar o Largest Contentful Paint (LCP)."
      },
      {
        title: "3. Taxa de Fuga do Google (53% a 78%)",
        description: "Mais de 53% das pessoas fecham a aba após 3s e mais de 78% desistem após 6s de espera."
      }
    ]
  },
  mechanism: {
    tag: "SEÇÃO 2: A FILOSOFIA",
    title: "\"Vender é um discurso e comprar é uma ação\"",
    subtitle: "A decisão de compra é uma sequência de microdecisões psicológicas guiadas por 3 mandamentos de conversão.",
    steps: [
      {
        number: "01",
        title: "Velocidade Extrema (Fricção Zero)",
        description: "Abertura instantânea (< 0.8s) no 4G móvel sem telas brancas ou travamentos."
      },
      {
        number: "02",
        title: "Discurso Orientado à Decisão",
        description: "Capta a atenção em 3 segundos, dialoga com a dor real e quebra todas as objeções de preço e confiança."
      },
      {
        number: "03",
        title: "Mecanismo de Conversão Direta",
        description: "Navegação linear One Page conduzindo o olhar até o WhatsApp sem distrações de links soltos."
      }
    ]
  },
  services: {
    tag: "SEÇÃO 3: TECNOLOGIA PROPRIETÁRIA",
    title: "A Arquitetura Proprietária Core-Bare-Metal™",
    subtitle: "Engenharia de compilação estática pura, psicologia de vendas e inteligência de telemetria RUM nativos.",
    items: [
      {
        title: "Compilação Estática Direta (< 80 KB)",
        description: "Binários estáticos distribuídos em Edge Anycast global, executados no metal do dispositivo sem requisições bloqueantes."
      },
      {
        title: "Roteiro Estratégico de Psicologia de Vendas",
        description: "Narrativa desenhada com precisão comportamental aumentando imediatamente o valor percebido."
      },
      {
        title: "Rastreamento Cirúrgico de Conversões",
        description: "GTM e GA4 configurados para rastrear cliques no WhatsApp e otimizar campanhas no Google e Meta Ads."
      },
      {
        title: "Otimização para IAs (GEO + SEO)",
        description: "Metadados estruturados (Schema.org e llms.txt) para recomendação pelo Google, ChatGPT e Perplexity."
      },
      {
        title: "Zero Manutenção e Zero Quedas",
        description: "Sem banco de dados exposto no frontend, sem plugins que quebram e com estabilidade absoluta."
      }
    ]
  },
  authority: {
    tag: "SEÇÃO 5: QUEM É ROGÉRIO MACIEL",
    name: "Rogério Marinho Maciel",
    role: "Cientista da Computação UFPB, MBA Marketing, Ex-Head Neoway, 20+ anos de experiência",
    bio: "Arquiteto de Software, Engenheiro e CTO com mais de duas décadas de atuação. Ex-Head de Aplicação Digital na Neoway, criador da Arquitetura Core-Bare-Metal™ e do CoreAutoCRM / Kadu Engine (FSM com 28 módulos de IA a R$ 0,08 por operação). Autor dos livros 'A Vantagem Injusta', 'CoreAutoCRM' e 'As 5 Atitudes Diárias do Empreendedor de Sucesso'.",
    quote: "Vender é a narrativa de valor que você constrói para eliminar incertezas. Comprar é a ação natural e imediata que o cliente toma quando o atrito técnico é zero e a clareza é total."
  },
  faqs: [
    {
      question: "1. O que é a Arquitetura Core-Bare-Metal™ e por que ela é superior ao WordPress?",
      answer: "O WordPress com Elementor precisa rodar dezenas de scripts de banco de dados, temas e plugins a cada visita, levando de 8 a 12 segundos no 4G móvel. A Arquitetura Core-Bare-Metal™ compila todo o código previamente em arquivos estáticos ultra-leves (< 80 KB), entregando uma resposta instantânea (< 0.8s), fluidez total e blindagem absoluta contra invasões."
    },
    {
      question: "2. Meu site atual já é bonito. Por que eu deveria mudá-lo?",
      answer: "Beleza estética sem velocidade de engenharia e sem psicologia de discurso é apenas um \"panfleto decorativo\". Se 70% dos seus clientes desistem antes da página carregar ou se perdem em menus confusos, a estética visual não paga as contas dos seus anúncios."
    },
    {
      question: "3. Em quanto tempo meu site estará no ar?",
      answer: "Por utilizarmos uma esteira de engenharia moderna (Content-as-Code), entregamos a sua Máquina de Aquisição Core-Bare-Metal™ completa e testada em poucos dias, pronta para receber tráfego imediatamente."
    },
    {
      question: "4. O site já vem com o rastreamento de anúncios configurado?",
      answer: "Sim. Integramos nativamente o Google Tag Manager (GTM) com eventos de clique no WhatsApp e integração com Google Analytics 4, Pixel da Meta e conversões do Google Ads."
    }
  ],
  cta: {
    tag: "SEÇÃO 8: CHAMADA PARA AÇÃO",
    title: "Pare de ver seu dinheiro de anúncios evaporar na tela branca de um site lento.",
    subtitle: "Eu vou realizar uma Perícia Técnica Gratuita no seu site atual: medir o tempo no 4G/5G, calcular sua perda financeira em tráfego e traçar o plano de ação Core-Bare-Metal™.",
    buttonText: "SOLICITAR DIAGNÓSTICO FORENSE GRATUITO NO WHATSAPP",
    badges: ["Perícia Técnica Sem Custo", "Engenharia Core-Bare-Metal™", "Score 98+ Garantido"]
  }
};

// Parser de 00-dados-projeto.md
const dadosFile = path.join(rootDir, '00-dados-projeto.md');
if (fs.existsSync(dadosFile)) {
  const text = fs.readFileSync(dadosFile, 'utf-8');
  const gtmMatch = text.match(/GTM-[A-Z0-9]+/i);
  if (gtmMatch) content.meta.gtmId = gtmMatch[0];

  const zapMatch = text.match(/(?:55\d{10,11}|\(\d{2}\)\s*\d{4,5}-?\d{4})/);
  if (zapMatch) {
    const raw = zapMatch[0].replace(/\D/g, '');
    content.meta.whatsappNumber = raw.startsWith('55') ? raw : `55${raw}`;
  }

  const nameMatch = text.match(/(?:Nome da Empresa|Especialista|Nome):\s*([^\n\r]+)/i);
  if (nameMatch && nameMatch[1].trim()) {
    content.meta.brandName = nameMatch[1].trim();
  }
}

// Salva o arquivo de dados compilado
fs.writeFileSync(outputFile, JSON.stringify(content, null, 2), 'utf-8');
console.log(`⚡ [Content-as-Code] Dados extraídos e compilados em: ${outputFile}`);
