import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App';
import * as fs from 'node:fs';
import * as path from 'node:path';

const distDir = path.resolve(import.meta.dir, '../dist');
const indexPath = path.join(distDir, 'index.html');
const assetsDir = path.join(distDir, 'assets');

if (fs.existsSync(indexPath)) {
  let indexHtml = fs.readFileSync(indexPath, 'utf-8');

  // 1. Pré-renderizar a árvore de componentes React no HTML inicial (FCP / Speed Index < 0.4s)
  const appHtml = renderToString(React.createElement(App));
  indexHtml = indexHtml.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  // 2. Localizar o arquivo CSS gerado pelo Vite e fazer o inline direto em <style>
  // Isso elimina 100% dos "Recursos que impedem a renderização" no Google PageSpeed / Cloudflare Edge
  if (fs.existsSync(assetsDir)) {
    const assetFiles = fs.readdirSync(assetsDir);
    const cssFile = assetFiles.find((f: string) => f.endsWith('.css'));

    if (cssFile) {
      const cssPath = path.join(assetsDir, cssFile);
      const cssContent = fs.readFileSync(cssPath, 'utf-8');

      // Substitui a tag <link rel="stylesheet" ...> pelo <style> com CSS inline
      const linkRegex = new RegExp(`<link[^>]*href=["'][^"']*${cssFile}["'][^>]*>`, 'i');
      if (linkRegex.test(indexHtml)) {
        indexHtml = indexHtml.replace(linkRegex, `<style id="critical-css">${cssContent}</style>`);
      } else {
        indexHtml = indexHtml.replace('</head>', `<style id="critical-css">${cssContent}</style>\n</head>`);
      }
      console.log(`⚡ [Critical CSS] Inlined ${cssFile} (${(cssContent.length / 1024).toFixed(1)} KB) directly into index.html`);
    }

    // 3. Mover o script JS principal para antes do fechamento do </body> para eliminar qualquer impacto no FCP
    const scriptRegex = /<script\s+type="module"[^>]*src=["'][^"']*assets\/index-[^"']*\.js["'][^>]*><\/script>/i;
    const scriptMatch = indexHtml.match(scriptRegex);
    if (scriptMatch) {
      const scriptTag = scriptMatch[0];
      indexHtml = indexHtml.replace(scriptTag, '');
      indexHtml = indexHtml.replace('</body>', `${scriptTag}\n</body>`);
      console.log('⚡ [Deferred JS] Moved main bundle script to bottom of <body>');
    }
  }

  fs.writeFileSync(indexPath, indexHtml);
  console.log('⚡ [SSG Prerender] dist/index.html 100% pré-renderizado e otimizado com sucesso!');
} else {
  console.error('❌ [SSG Prerender] dist/index.html não encontrado.');
  process.exit(1);
}
