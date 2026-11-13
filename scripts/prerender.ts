import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App';
import Pt from '../src/pages/Pt';
import En from '../src/pages/En';
import * as fs from 'node:fs';
import * as path from 'node:path';

const distDir = path.resolve(import.meta.dir, '../dist');
const assetsDir = path.join(distDir, 'assets');

interface PageTarget {
  name: string;
  filePath: string;
  component: React.ReactElement;
  jsEntryPrefix: string;
}

const targets: PageTarget[] = [
  {
    name: 'Root /',
    filePath: path.join(distDir, 'index.html'),
    component: React.createElement(App),
    jsEntryPrefix: 'index'
  },
  {
    name: 'PT /pt/',
    filePath: path.join(distDir, 'pt/index.html'),
    component: React.createElement(Pt),
    jsEntryPrefix: 'pt'
  },
  {
    name: 'EN /en/',
    filePath: path.join(distDir, 'en/index.html'),
    component: React.createElement(En),
    jsEntryPrefix: 'en'
  }
];

if (!fs.existsSync(distDir)) {
  console.error('❌ [SSG Prerender] Diretório dist/ não encontrado.');
  process.exit(1);
}

// 1. Obter o conteúdo do CSS compartilhado gerado pelo Vite
let cssContent = '';
if (fs.existsSync(assetsDir)) {
  const assetFiles = fs.readdirSync(assetsDir);
  const cssFile = assetFiles.find((f: string) => f.endsWith('.css'));
  if (cssFile) {
    cssContent = fs.readFileSync(path.join(assetsDir, cssFile), 'utf-8');
    console.log(`⚡ [Critical CSS] Localizado bundle CSS: ${cssFile} (${(cssContent.length / 1024).toFixed(1)} KB)`);
  }
}

// 2. Pré-renderizar cada target
for (const target of targets) {
  if (!fs.existsSync(target.filePath)) {
    console.warn(`⚠️ [SSG Prerender] Arquivo não encontrado: ${target.filePath}`);
    continue;
  }

  let html = fs.readFileSync(target.filePath, 'utf-8');

  // Renderizar componente React
  const appHtml = renderToString(target.component);
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  // Injetar CSS crítico inline eliminando qualquer stylesheet render-blocking
  if (cssContent) {
    const linkRegex = /<link[^>]*rel=["']stylesheet["'][^>]*>/gi;
    if (linkRegex.test(html)) {
      html = html.replace(linkRegex, `<style id="critical-css">${cssContent}</style>`);
    } else {
      html = html.replace('</head>', `<style id="critical-css">${cssContent}</style>\n</head>`);
    }
  }

  // Otimizar o bundle JS correspondente para carregar em idle / primeiro gesto
  if (fs.existsSync(assetsDir)) {
    const assetFiles = fs.readdirSync(assetsDir);
    const jsFile = assetFiles.find((f: string) => f.startsWith(target.jsEntryPrefix) && f.endsWith('.js'))
      || assetFiles.find((f: string) => f.endsWith('.js'));

    if (jsFile) {
      const scriptRegex = new RegExp(`<script\\s+type="module"[^>]*src=["'][^"']*${jsFile}["'][^>]*><\\/script>`, 'i');
      const genericScriptRegex = /<script\s+type="module"[^>]*src=["'][^"']*assets\/[^"']+\.js["'][^>]*><\/script>/i;

      const loaderScript = `<script>
(function() {
  var loaded = false;
  function loadBundle() {
    if (loaded) return;
    loaded = true;
    ['touchstart', 'scroll', 'mousemove', 'keydown', 'click'].forEach(function(evt) {
      window.removeEventListener(evt, loadBundle, { passive: true });
    });
    var s = document.createElement('script');
    s.type = 'module';
    s.src = '/assets/${jsFile}';
    document.body.appendChild(s);
  }
  ['touchstart', 'scroll', 'mousemove', 'keydown', 'click'].forEach(function(evt) {
    window.addEventListener(evt, loadBundle, { once: true, passive: true });
  });
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(loadBundle, { timeout: 6000 });
  } else {
    setTimeout(loadBundle, 6000);
  }
})();
</script>`;

      if (scriptRegex.test(html)) {
        html = html.replace(scriptRegex, '');
      } else if (genericScriptRegex.test(html)) {
        html = html.replace(genericScriptRegex, '');
      }
      html = html.replace('</body>', `${loaderScript}\n</body>`);
      console.log(`⚡ [On-Demand JS] Otimizado bundle JS para ${target.name} (/assets/${jsFile})`);
    }
  }

  fs.writeFileSync(target.filePath, html);
  console.log(`✅ [SSG Prerender] ${target.name} (${target.filePath}) pré-renderizado com sucesso!`);
}

console.log('🎉 [SSG Prerender] Todas as páginas (/ , /pt/ e /en/) foram pré-renderizadas e otimizadas com sucesso!');
