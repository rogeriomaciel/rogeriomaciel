import React from 'react';
import { renderToString } from 'react-dom/server';
import { solutionsClusters, SolutionCluster } from '../src/data/solutions-clusters';
import { getEnSlug } from '../src/data/solutions-types';
import { SolutionPage } from '../src/pages/SolutionPage';
import * as fs from 'node:fs';
import * as path from 'node:path';

const distDir = path.resolve(import.meta.dir, '../dist');
const assetsDir = path.join(distDir, 'assets');
const sitemapPath = path.resolve(import.meta.dir, '../public/sitemap.xml');
const llmsFullPath = path.resolve(import.meta.dir, '../public/llms-full.txt');

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function truncateAtWordBoundary(text: string, maxLen: number): string {
  if (text.length <= maxLen) return text;
  const sliced = text.slice(0, maxLen - 1);
  const lastSpace = sliced.lastIndexOf(' ');
  const base = lastSpace > Math.floor(maxLen * 0.6) ? sliced.slice(0, lastSpace) : sliced;
  return `${base.replace(/[,:;.\-–—]+$/, '').trim()}…`;
}

function buildSeoTitle(rawTitle: string): string {
  const suffix = ' | Rogério Maciel';
  if (rawTitle.length + suffix.length <= 65) {
    return `${rawTitle}${suffix}`;
  }
  if (rawTitle.length <= 65) {
    return rawTitle;
  }
  return truncateAtWordBoundary(rawTitle, 65);
}

function buildSeoDescription(rawDesc: string): string {
  return truncateAtWordBoundary(rawDesc, 158);
}

// 1. Obter o CSS crítico gerado pelo build do Vite
let criticalCss = '';
if (fs.existsSync(assetsDir)) {
  const assetFiles = fs.readdirSync(assetsDir);
  const cssFile = assetFiles.find((f: string) => f.endsWith('.css'));
  if (cssFile) {
    criticalCss = fs.readFileSync(path.join(assetsDir, cssFile), 'utf-8');
  }
}

function generateHtml(sol: SolutionCluster, locale: 'pt' | 'en' = 'pt'): string {
  const isEn = locale === 'en';
  const content = (isEn && sol.en) ? sol.en : sol;
  const enSlug = getEnSlug(sol);

  const ptCanonicalUrl = `https://rogeriomaciel.com.br/solucoes/${sol.slug}/`;
  const enCanonicalUrl = `https://rogeriomaciel.com.br/en/solutions/${enSlug}/`;
  const canonicalUrl = isEn ? enCanonicalUrl : ptCanonicalUrl;

  const appHtml = renderToString(React.createElement(SolutionPage, { solution: sol, locale }));

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Rogério Maciel — Software Architect & Automation Platform Engineer',
    url: 'https://rogeriomaciel.com.br',
    image: 'https://rogeriomaciel.com.br/images/rogerio-maciel.webp',
    telephone: '+55-62-99623-2227',
    email: 'rogerio@rogeriomaciel.com.br',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Goiânia',
      addressRegion: 'GO',
      addressCountry: 'BR'
    },
    areaServed: isEn ? ['United States', 'Europe', 'Global', 'Brazil'] : ['Goiânia', 'Goiás', 'Brasil', 'Global'],
    description: content.metaDescription
  };

  const seoTitle = escapeHtml(buildSeoTitle(content.title));
  const seoDesc = escapeHtml(buildSeoDescription(content.metaDescription));
  const seoKeywords = escapeHtml(content.keywords.join(', '));

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isEn ? 'Home' : 'Início',
        item: isEn ? 'https://rogeriomaciel.com.br/en/' : 'https://rogeriomaciel.com.br/pt/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: content.category || sol.category,
        item: canonicalUrl
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: content.title,
        item: canonicalUrl
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: content.title,
    description: content.metaDescription,
    inLanguage: isEn ? 'en' : 'pt-BR',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl
    },
    author: {
      '@type': 'Person',
      '@id': 'https://rogeriomaciel.com.br/#person',
      name: 'Rogério Marinho Maciel',
      url: 'https://rogeriomaciel.com.br/en/'
    },
    publisher: {
      '@type': 'Person',
      '@id': 'https://rogeriomaciel.com.br/#person',
      name: 'Rogério Marinho Maciel'
    }
  };

  return `<!DOCTYPE html>
<html lang="${isEn ? 'en' : 'pt-BR'}" class="dark scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
    <meta name="theme-color" content="#07090E" />

    <title>${seoTitle}</title>
    <meta name="description" content="${seoDesc}" />
    <meta name="keywords" content="${seoKeywords}" />
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <link rel="canonical" href="${canonicalUrl}" />

    <!-- Hreflang Parity (Google US & Google Brasil) -->
    <link rel="alternate" hreflang="pt-BR" href="${ptCanonicalUrl}" />
    <link rel="alternate" hreflang="en" href="${enCanonicalUrl}" />
    <link rel="alternate" hreflang="x-default" href="${enCanonicalUrl}" />

    <!-- Open Graph -->
    <meta property="og:locale" content="${isEn ? 'en_US' : 'pt_BR'}" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${seoTitle}" />
    <meta property="og:description" content="${seoDesc}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:site_name" content="Rogério Maciel — Software Architecture &amp; Automation" />
    <meta property="og:image" content="https://rogeriomaciel.com.br/og-image.jpg" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${seoTitle}" />
    <meta name="twitter:description" content="${seoDesc}" />
    <meta name="twitter:image" content="https://rogeriomaciel.com.br/og-image.jpg" />

    <!-- IndexNow Verification -->
    <meta name="indexnow-key" content="61f53f62035a6493e50b0b59feca6748" />

    <!-- AI Feeds (GEO) -->
    <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLMs Summary" />
    <link rel="alternate" type="text/markdown" href="/llms-full.txt" title="LLMs Full Knowledge Base" />

    <!-- Schema.org JSON-LD -->
    <script type="application/ld+json">
      ${JSON.stringify(serviceSchema)}
    </script>
    <script type="application/ld+json">
      ${JSON.stringify(faqSchema)}
    </script>
    <script type="application/ld+json">
      ${JSON.stringify(breadcrumbSchema)}
    </script>
    <script type="application/ld+json">
      ${JSON.stringify(articleSchema)}
    </script>

    <!-- Buffer Global de Analytics & Tracking sob demanda (TBT = 0ms) -->
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      var analyticsLoaded = false;
      function initAnalytics() {
        if (analyticsLoaded) return;
        analyticsLoaded = true;
        window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        var g = document.createElement('script');
        g.async = true;
        g.src = 'https://www.googletagmanager.com/gtag/js?id=GTM-WNXV9S4X';
        document.head.appendChild(g);
      }
      if (document.readyState === 'complete') {
        setTimeout(initAnalytics, 1500);
      } else {
        window.addEventListener('load', function() { setTimeout(initAnalytics, 1500); });
      }
      ['pointerdown', 'touchstart', 'scroll', 'keydown'].forEach(function(ev) {
        window.addEventListener(ev, initAnalytics, { once: true, passive: true });
      });
    </script>

    ${criticalCss ? `<style id="critical-css">${criticalCss}</style>` : ''}
  </head>
  <body class="bg-[#07090E] text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-slate-950">
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WNXV9S4X"
    title="Google Tag Manager" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

    <div id="root">${appHtml}</div>
    <script>
      if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || window.location.hostname === 'localhost')) {
        window.addEventListener('load', function() {
          navigator.serviceWorker.register('/sw.js').catch(function() {});
        });
      }
    </script>
  </body>
</html>`;
}

async function runGenerate() {
  console.log('🚀 [Bilingual Mass Production Engine] Iniciando geração de páginas de soluções em Português e Inglês...\n');

  if (!fs.existsSync(distDir)) {
    console.error('❌ Diretório dist/ não encontrado. Execute o build primeiro.');
    process.exit(1);
  }

  const generatedUrls: string[] = [];

  for (const sol of solutionsClusters) {
    const enSlug = getEnSlug(sol);

    // 1. Gerar versão em Português (/solucoes/[slug]/)
    const ptSolDir = path.join(distDir, 'solucoes', sol.slug);
    fs.mkdirSync(ptSolDir, { recursive: true });
    const ptHtml = generateHtml(sol, 'pt');
    fs.writeFileSync(path.join(ptSolDir, 'index.html'), ptHtml, 'utf-8');

    const ptFullUrl = `https://rogeriomaciel.com.br/solucoes/${sol.slug}/`;
    generatedUrls.push(ptFullUrl);
    console.log(`🇧🇷 [PT] /solucoes/${sol.slug}/ ➔ ${sol.title}`);

    // 2. Gerar versão em Inglês (/en/solutions/[enSlug]/)
    const enSolDir = path.join(distDir, 'en', 'solutions', enSlug);
    fs.mkdirSync(enSolDir, { recursive: true });
    const enHtml = generateHtml(sol, 'en');
    fs.writeFileSync(path.join(enSolDir, 'index.html'), enHtml, 'utf-8');

    const enFullUrl = `https://rogeriomaciel.com.br/en/solutions/${enSlug}/`;
    generatedUrls.push(enFullUrl);
    console.log(`🌐 [EN] /en/solutions/${enSlug}/ ➔ ${sol.en?.title || sol.title}`);
  }

  // 3. Gerar public/sitemap.xml e dist/sitemap.xml limpos (somente HTML canônicos + hreflang)
  const today = new Date().toISOString().split('T')[0];
  const rootHreflangs = `    <xhtml:link rel="alternate" hreflang="pt-BR" href="https://rogeriomaciel.com.br/pt/" />
    <xhtml:link rel="alternate" hreflang="pt" href="https://rogeriomaciel.com.br/pt/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://rogeriomaciel.com.br/en/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://rogeriomaciel.com.br/en/" />`;

  let sitemapEntries = `  <!-- Canonical Global (/en/) -->
  <url>
    <loc>https://rogeriomaciel.com.br/en/</loc>
${rootHreflangs}
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Versão Português (Brasil) -->
  <url>
    <loc>https://rogeriomaciel.com.br/pt/</loc>
${rootHreflangs}
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.95</priority>
  </url>\n`;

  for (const sol of solutionsClusters) {
    const enSlug = getEnSlug(sol);
    const ptUrl = `https://rogeriomaciel.com.br/solucoes/${sol.slug}/`;
    const enUrl = `https://rogeriomaciel.com.br/en/solutions/${enSlug}/`;
    const solHreflangs = `    <xhtml:link rel="alternate" hreflang="pt-BR" href="${ptUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}" />`;

    sitemapEntries += `  <url>
    <loc>${enUrl}</loc>
${solHreflangs}
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${ptUrl}</loc>
${solHreflangs}
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>\n`;
  }

  const cleanSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapEntries}</urlset>\n`;

  fs.writeFileSync(sitemapPath, cleanSitemap, 'utf-8');
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), cleanSitemap, 'utf-8');
  console.log(`\n📋 [Sitemap] Sitemap limpo regenerado com ${generatedUrls.length + 2} URLs HTML canônicas!`);

  // 4. Atualizar public/llms-full.txt com as soluções bilíngues
  if (fs.existsSync(llmsFullPath)) {
    let llmsFull = fs.readFileSync(llmsFullPath, 'utf-8');
    let llmsAppend = '\n\n---\n\n## 7. Global Architectural Solutions Catalog (English & Upwork)\n\n';

    for (const sol of solutionsClusters) {
      const enSlug = getEnSlug(sol);
      if (sol.en && !llmsFull.includes(`/en/solutions/${enSlug}/`)) {
        llmsAppend += `### ${sol.en.title}
- **Canonical URL:** https://rogeriomaciel.com.br/en/solutions/${enSlug}/
- **Category:** ${sol.en.category || sol.category}
- **30-Second Architecture Answer:** ${sol.en.fastAnswer}
- **Core Business Bottleneck:** ${sol.en.deepTension}
- **Engineering Proof by Rogério Maciel:** ${sol.en.authorityProof}
- **Direct WhatsApp Consultation:** https://wa.me/5562996232227?text=Hello%20Rog%C3%A9rio%2C%20I%20would%20like%20to%20discuss%20${enSlug}

`;
      }
    }

    if (llmsAppend.includes('###')) {
      llmsFull += llmsAppend;
      fs.writeFileSync(llmsFullPath, llmsFull);
      const distLlms = path.join(distDir, 'llms-full.txt');
      fs.writeFileSync(distLlms, llmsFull);
      console.log(`🧠 [LLMs Full] Adicionadas soluções em Inglês para citação no ChatGPT e Perplexity!`);
    }
  }

  console.log(`\n🎉 [Concluído com Sucesso] ${generatedUrls.length} páginas bilíngues geradas em dist/solucoes/ e dist/en/solutions/!`);
}

runGenerate();
