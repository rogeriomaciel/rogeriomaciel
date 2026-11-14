export interface SolutionContent {
  slug?: string;
  category?: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  fastAnswer: string;
  deepTension: string;
  antiPitch: string;
  authorityProof: string;
  contrastPrejudice: string;
  ctaLabel: string;
  whatsappPrompt: string;
  faq: {
    question: string;
    answer: string;
  }[];
}

export interface SolutionCluster extends SolutionContent {
  slug: string;
  category: 'IA no WhatsApp' | 'Escala de Automações' | 'Engenharia de Vendas' | 'Autoridade Regional' | 'Soluções por Nicho' | 'Engenharia de Plataforma' | 'Enterprise Architecture';
  en?: SolutionContent;
}

// Helper para gerar o slug em inglês se não fornecido
export function getEnSlug(sol: SolutionCluster): string {
  if (sol.en?.slug) return sol.en.slug;
  const slugMap: Record<string, string> = {
    'ia-whatsapp-sem-alucinacao': 'zero-hallucination-whatsapp-ai',
    'evitar-banimento-whatsapp-ia': 'avoid-whatsapp-meta-ban-ai',
    'transbordo-humano-ia-whatsapp': 'ai-to-human-handoff-whatsapp',
    'qualificacao-leads-ia-whatsapp': 'automatic-lead-qualification-ai-whatsapp',
    'recuperar-carrinho-stripe-whatsapp': 'stripe-checkout-whatsapp-cart-recovery',
    'automacao-cobranca-inadimplencia-whatsapp': 'debt-collection-invoicing-automation-whatsapp',
    'speed-to-lead-automacao-vendas': 'speed-to-lead-sales-automation-whatsapp',
    'atendimento-whatsapp-24-horas-ia': '24-7-whatsapp-ai-customer-service',
    'agendamento-consultas-whatsapp-ia': 'autonomous-appointment-booking-whatsapp-ai',
    'dashboard-operacional-whatsapp-vendedores': 'whatsapp-sales-sla-audit-dashboard',
    'ia-whatsapp-clinicas-consultorios': 'ai-whatsapp-medical-clinics',
    'ia-whatsapp-concessionarias-lojas-carros': 'whatsapp-sales-automation-car-dealerships',
    'ia-whatsapp-imobiliarias-corretores': 'ai-whatsapp-real-estate-qualification',
    'ia-whatsapp-distribuidoras-atacado': 'b2b-whatsapp-order-automation-wholesale',
    'ia-whatsapp-escritorios-advocacia': 'ai-whatsapp-law-firms-case-intake',
    'ia-whatsapp-agronegocio-revendas': 'whatsapp-automation-agribusiness-parts',
    'ia-whatsapp-centros-automotivos-oficinas': 'ai-whatsapp-auto-repair-shops',
    'ia-whatsapp-escolas-cursos-faculdades': 'student-enrollment-ai-whatsapp-schools',
    'ia-empresas-goiania-goias': 'ai-enterprise-consulting-goiania-brazil',
    'automacao-processos-goiania-aparecida': 'business-process-automation-goiania',
    'ia-whatsapp-setor-bueno-goiania': 'ai-whatsapp-clinics-bueno-goiania',
    'ia-whatsapp-setor-marista-goiania': 'vip-whatsapp-automation-marista-goiania',
    'ia-automacao-industrias-daia-anapolis': 'industrial-process-automation-daia-anapolis',
    'consultor-ia-empresas-rio-verde-goias': 'ai-consulting-agribusiness-rio-verde',
    'n8n-travando-memoria-solucao': 'n8n-out-of-memory-oom-solution',
    'transpilar-n8n-microsservicos-fastify': 'transpiling-n8n-to-fastify-microservices',
    'gitops-ci-cd-n8n-producao': 'gitops-cicd-n8n-production',
    'validar-webhook-hmac-sha256-nodejs': 'verify-webhook-hmac-sha256-nodejs',
    'high-throughput-n8n-scaling': 'high-throughput-n8n-scaling',
    'fastify-microservices-architecture': 'fastify-microservices-architecture',
    'ia-whatsapp-clinicas-setor-bueno': 'ai-medical-clinics-bueno-goiania',
    'ia-whatsapp-imobiliarias-jardim-goias': 'luxury-real-estate-whatsapp-jardim-goias',
    'automacao-vendas-concessionarias-goiania': 'car-dealership-sales-automation-goiania',
    'automacao-distribuidoras-aparecida-de-goiania': 'b2b-distribution-automation-aparecida',
    'ia-agronegocio-rio-verde': 'agribusiness-machinery-parts-whatsapp-rio-verde',
    'ia-whatsapp-centros-esteticos-goiania': 'aesthetic-clinics-whatsapp-automation-goiania',
    'automacao-cobranca-condominios-goiania': 'property-management-fee-automation-whatsapp',
    'ia-atendimento-bpo-financeiro-contabilidades': 'accounting-bpo-tax-automation-whatsapp'
  };
  return slugMap[sol.slug] || sol.slug;
}
