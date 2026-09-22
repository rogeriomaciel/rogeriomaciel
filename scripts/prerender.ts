import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App';
import * as fs from 'node:fs';
import * as path from 'node:path';

const distDir = path.resolve(import.meta.dir, '../dist');
const indexPath = path.join(distDir, 'index.html');

if (fs.existsSync(indexPath)) {
  let indexHtml = fs.readFileSync(indexPath, 'utf-8');
  const appHtml = renderToString(React.createElement(App));
  indexHtml = indexHtml.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  fs.writeFileSync(indexPath, indexHtml);
  console.log('⚡ [SSG Prerender] dist/index.html pré-renderizado com sucesso!');
} else {
  console.error('❌ [SSG Prerender] dist/index.html não encontrado.');
  process.exit(1);
}
