import generatedContent from './site-content.generated.json';

export interface SiteContent {
  meta: {
    title: string;
    description: string;
    gtmId: string;
    whatsappNumber: string;
    whatsappMessage: string;
    logoText: string;
    brandName: string;
    socialLinks: {
      linkedin?: string;
      instagram?: string;
      youtube?: string;
      facebook?: string;
    };
  };
  hero: {
    badge: string;
    headline: string;
    headlineHighlight: string;
    subheadline: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    stats: Array<{ value: string; label: string }>;
  };
  problem: {
    tag: string;
    title: string;
    subtitle: string;
    cards: Array<{ title: string; description: string }>;
  };
  mechanism: {
    tag: string;
    title: string;
    subtitle: string;
    steps: Array<{ number: string; title: string; description: string }>;
  };
  services: {
    tag: string;
    title: string;
    subtitle: string;
    items: Array<{ title: string; description: string }>;
  };
  authority: {
    tag: string;
    name: string;
    role: string;
    bio: string;
    quote: string;
  };
  faqs: Array<{ question: string; answer: string }>;
  cta: {
    tag: string;
    title: string;
    subtitle: string;
    buttonText: string;
    badges: string[];
  };
}

export const siteContent: SiteContent = generatedContent as SiteContent;
export default siteContent;
