import React from 'react';
import { renderToString } from 'react-dom/server';
import { solutionsClusters, SolutionCluster } from '../src/data/solutions-clusters';
import { getEnSlug } from '../src/data/solutions-types';
import { SolutionPage } from '../src/pages/SolutionPage';
import { PillarSubpage, PillarSectionType } from '../src/pages/PillarSubpage';
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
    <link rel="icon" type="image/png" sizes="48x48" href="/icons/favicon-48.png?v=2" />
    <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32.png?v=2" />
    <link rel="shortcut icon" href="/favicon.ico?v=2" />
    <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png?v=2" />
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
    <meta property="og:image" content="https://rogeriomaciel.com.br/og-image.jpg?v=2" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${seoTitle}" />
    <meta name="twitter:description" content="${seoDesc}" />
    <meta name="twitter:image" content="https://rogeriomaciel.com.br/og-image.jpg?v=2" />

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

interface PillarRouteConfig {
  section: PillarSectionType;
  enPath: string;
  ptPath: string;
  enTitle: string;
  ptTitle: string;
  enDesc: string;
  ptDesc: string;
}

const pillarRoutes: PillarRouteConfig[] = [
  {
    section: 'architecture',
    enPath: 'en/architecture',
    ptPath: 'pt/arquitetura',
    enTitle: 'n8n to Fastify 5ms Transpiler Architecture',
    ptTitle: 'Arquitetura & Transpilador n8n para Fastify 5ms',
    enDesc: 'How 126 n8n workflows were transpiled to Fastify/Bun microservices: -98% RAM (25MB), 5ms latency, Kahn DAG sort & GitOps.',
    ptDesc: 'Como 126 workflows n8n foram transpilados para Fastify/Bun: -98% RAM (25MB), latência de 5ms, Kahn DAG e GitOps.',
  },
  {
    section: 'ai-systems',
    enPath: 'en/ai-systems',
    ptPath: 'pt/ia-em-producao',
    enTitle: 'Deterministic AI FSM & Concurrency Control',
    ptTitle: 'IA Determinística, FSM & Controle de Concorrência',
    enDesc: '73-workflow Cognitive FSM with @MODULE regex prompts, atomic queue locks, multimodal PDF pipeline & Stripe HMAC.',
    ptDesc: 'Máquina de estados com 73 workflows, prompts @MODULE por Regex, trava atômica de fila, pipeline PDF e Stripe HMAC.',
  },
  {
    section: 'cases',
    enPath: 'en/cases',
    ptPath: 'pt/cases',
    enTitle: 'Live Production Systems & Revenue Cases',
    ptTitle: 'Sistemas Online em Produção & Cases Reais',
    enDesc: '6 live systems in production: CoreAuto OS, AdsWhats SLA Monitor, CORE Mission Control, InRoom 60s QR & Kadosh.',
    ptDesc: '6 sistemas ao vivo em produção: CoreAuto OS, AdsWhats Monitor, CORE Mission Control, InRoom QR 60s e Kadosh.',
  },
  {
    section: 'about',
    enPath: 'en/about',
    ptPath: 'pt/sobre',
    enTitle: 'Executive Bio: UFPB, Neoway M&A & CTO',
    ptTitle: 'Trajetória: UFPB CNPq, Neoway M&A & Ex-CTO',
    enDesc: '20+ years of software architecture: UFPB/CNPq scholar, Neoway post-M&A Head of Digital Apps, Traffega CTO & Empretec.',
    ptDesc: '20+ anos em engenharia: pesquisador CNPq UFPB, Head na Neoway pós-M&A, ex-CTO Traffega, NF-e SEFAZ e Empretec.',
  },
  {
    section: 'solutions',
    enPath: 'en/solutions',
    ptPath: 'solucoes',
    enTitle: 'Engineering & Automation Solutions Catalog',
    ptTitle: 'Catálogo de Soluções & Arquiteturas Técnicas',
    enDesc: 'Complete catalog of production engineering guides covering AI FSMs, n8n scaling, Fastify microservices & Meta Ads SLA.',
    ptDesc: 'Catálogo completo de guias de engenharia: IA determinística, escala n8n, microsserviços Fastify e atribuição Meta Ads.',
  },
  {
    section: 'n8n-to-fastify',
    enPath: 'en/n8n-to-fastify',
    ptPath: 'pt/n8n-to-fastify',
    enTitle: 'n8n-to-fastify Playground — Compile n8n JSON to TypeScript',
    ptTitle: 'Playground n8n-to-fastify — Compile JSON do n8n para TypeScript',
    enDesc: 'Live client-side compiler that transpiles visual n8n workflows into 0.53ms bare-metal Fastify microservices. Zero data leaves your browser.',
    ptDesc: 'Compilador ao vivo no navegador que converte fluxos visuais do n8n em microsserviços Fastify de 0.53ms com privacidade total.',
  },
];

function generatePillarHtml(route: PillarRouteConfig, locale: 'pt' | 'en'): string {
  const isEn = locale === 'en';
  const rawTitle = isEn ? route.enTitle : route.ptTitle;
  const rawDesc = isEn ? route.enDesc : route.ptDesc;
  const seoTitle = escapeHtml(buildSeoTitle(rawTitle));
  const seoDesc = escapeHtml(buildSeoDescription(rawDesc));
  const ptCanonicalUrl = `https://rogeriomaciel.com.br/${route.ptPath}/`;
  const enCanonicalUrl = `https://rogeriomaciel.com.br/${route.enPath}/`;
  const canonicalUrl = isEn ? enCanonicalUrl : ptCanonicalUrl;

  const appHtml = renderToString(
    React.createElement(PillarSubpage, { section: route.section, locale })
  );

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isEn ? 'Home' : 'Início',
        item: isEn ? 'https://rogeriomaciel.com.br/en/' : 'https://rogeriomaciel.com.br/pt/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: rawTitle,
        item: canonicalUrl,
      },
    ],
  };

  const playgroundScripts =
    route.section === 'n8n-to-fastify'
      ? `
    <script src="/n8n-to-fastify-compiler.js"></script>
    <script>
      (function () {
        var jsonInput = document.getElementById('n2f-json-input');
        var tsOutput = document.getElementById('n2f-ts-output');
        var statusEl = document.getElementById('n2f-status');
        var outputLabel = document.getElementById('n2f-output-label');
        if (!jsonInput || !tsOutput || !window.N8nToFastify) return;

        var defaultSample = jsonInput.value;
        var activeTab = 'workflow';
        var lastResult = null;
        var isEn = document.documentElement.lang === 'en';

        function renderTab() {
          if (!lastResult) return;
          if (activeTab === 'workflow') {
            tsOutput.textContent = lastResult.workflowCode;
            if (outputLabel) outputLabel.textContent = isEn ? 'Output: Standalone TypeScript (workflow.ts)' : 'Saída: TypeScript Puro (workflow.ts)';
          } else {
            tsOutput.textContent = lastResult.routesCode;
            if (outputLabel) outputLabel.textContent = isEn ? 'Output: Fastify Route Handler (routes/index.ts)' : 'Saída: Rotas Fastify (routes/index.ts)';
          }
        }

        function compileNow() {
          try {
            var res = window.N8nToFastify.compileWorkflowJson(jsonInput.value);
            lastResult = res;
            if (statusEl) {
              statusEl.textContent = '⚡ ' + (isEn ? 'Compiled ' + res.nodeCount + ' nodes in ' + res.elapsedMs + 'ms' : 'Compilado ' + res.nodeCount + ' nós em ' + res.elapsedMs + 'ms');
              statusEl.className = 'text-xs font-mono text-emerald-400 ml-2';
            }
            renderTab();
          } catch (err) {
            if (statusEl) {
              statusEl.textContent = '❌ ' + err.message;
              statusEl.className = 'text-xs font-mono text-red-400 ml-2';
            }
          }
        }

        document.querySelectorAll('[data-n2f-tab]').forEach(function (btn) {
          btn.addEventListener('click', function () {
            document.querySelectorAll('[data-n2f-tab]').forEach(function (b) {
              b.className = 'px-3 py-1.5 rounded-lg bg-transparent border border-white/[0.08] text-xs font-mono text-slate-400 hover:text-white cursor-pointer';
            });
            btn.className = 'px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-xs font-mono text-emerald-300 cursor-pointer';
            activeTab = btn.getAttribute('data-n2f-tab') || 'workflow';
            renderTab();
          });
        });

        var btnExample = document.getElementById('n2f-btn-example');
        if (btnExample) {
          btnExample.addEventListener('click', function () {
            jsonInput.value = defaultSample;
            compileNow();
          });
        }

        var btnFormat = document.getElementById('n2f-btn-format');
        if (btnFormat) {
          btnFormat.addEventListener('click', function () {
            try {
              jsonInput.value = JSON.stringify(JSON.parse(jsonInput.value), null, 2);
              compileNow();
            } catch (e) {}
          });
        }

        var btnCopy = document.getElementById('n2f-btn-copy');
        if (btnCopy) {
          btnCopy.addEventListener('click', function () {
            navigator.clipboard.writeText(tsOutput.textContent || '');
            var prev = btnCopy.textContent;
            btnCopy.textContent = isEn ? '✓ Copied!' : '✓ Copiado!';
            setTimeout(function () { btnCopy.textContent = prev; }, 1500);
          });
        }

        var btnDownload = document.getElementById('n2f-btn-download');
        if (btnDownload) {
          btnDownload.addEventListener('click', function () {
            var blob = new Blob([tsOutput.textContent || ''], { type: 'text/typescript' });
            var a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = activeTab === 'workflow' ? 'workflow.ts' : 'routes.ts';
            a.click();
          });
        }

        jsonInput.addEventListener('input', compileNow);
        compileNow();
      })();
    </script>`
      : '';

  return `<!DOCTYPE html>
<html lang="${isEn ? 'en' : 'pt-BR'}" class="dark scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" sizes="48x48" href="/icons/favicon-48.png?v=2" />
    <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32.png?v=2" />
    <link rel="shortcut icon" href="/favicon.ico?v=2" />
    <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png?v=2" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
    <meta name="theme-color" content="#07090E" />
    <title>${seoTitle}</title>
    <meta name="description" content="${seoDesc}" />
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <link rel="canonical" href="${canonicalUrl}" />
    <link rel="alternate" hreflang="pt-BR" href="${ptCanonicalUrl}" />
    <link rel="alternate" hreflang="en" href="${enCanonicalUrl}" />
    <link rel="alternate" hreflang="x-default" href="${enCanonicalUrl}" />
    <meta property="og:locale" content="${isEn ? 'en_US' : 'pt_BR'}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${seoTitle}" />
    <meta property="og:description" content="${seoDesc}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="https://rogeriomaciel.com.br/og-image.jpg?v=2" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${seoTitle}" />
    <meta name="twitter:description" content="${seoDesc}" />
    <meta name="twitter:image" content="https://rogeriomaciel.com.br/og-image.jpg?v=2" />
    <meta name="indexnow-key" content="61f53f62035a6493e50b0b59feca6748" />
    <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
    ${criticalCss ? `<style id="critical-css">${criticalCss}</style>` : ''}
  </head>
  <body class="bg-[#07090E] text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-slate-950">
    <div id="root">${appHtml}</div>${playgroundScripts}
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

  // 0. Gerar páginas de subpastas pilares (Architecture, AI Systems, Cases, About, Solutions Index)
  for (const route of pillarRoutes) {
    const enDir = path.join(distDir, route.enPath);
    fs.mkdirSync(enDir, { recursive: true });
    fs.writeFileSync(path.join(enDir, 'index.html'), generatePillarHtml(route, 'en'), 'utf-8');

    const ptDir = path.join(distDir, route.ptPath);
    fs.mkdirSync(ptDir, { recursive: true });
    fs.writeFileSync(path.join(ptDir, 'index.html'), generatePillarHtml(route, 'pt'), 'utf-8');

    console.log(`📂 [Pillar] /${route.enPath}/ & /${route.ptPath}/`);
  }

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

  for (const route of pillarRoutes) {
    const ptUrl = `https://rogeriomaciel.com.br/${route.ptPath}/`;
    const enUrl = `https://rogeriomaciel.com.br/${route.enPath}/`;
    const pHreflangs = `    <xhtml:link rel="alternate" hreflang="pt-BR" href="${ptUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}" />`;
    sitemapEntries += `  <url>
    <loc>${enUrl}</loc>
${pHreflangs}
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>${ptUrl}</loc>
${pHreflangs}
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>\n`;
  }

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
  console.log(`\n📋 [Sitemap] Sitemap limpo regenerado com ${generatedUrls.length + pillarRoutes.length * 2 + 2} URLs HTML canônicas!`);

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
