import * as fs from 'node:fs';
import * as path from 'node:path';

const INDEXNOW_KEY = '61f53f62035a6493e50b0b59feca6748';
const HOST = 'rogeriomaciel.com.br';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;
const SITEMAP_PATH = path.resolve(process.cwd(), 'public/sitemap.xml');

async function submitIndexNow() {
  console.log('🚀 [IndexNow] Iniciando submissão em massa para Bing & ChatGPT Search...');

  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error('❌ [IndexNow] Arquivo sitemap.xml não encontrado.');
    process.exit(1);
  }

  const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  const locMatches = [...sitemapContent.matchAll(/<loc>([^<]+)<\/loc>/g)];
  const urls = locMatches.map(m => m[1].trim());

  console.log(`📋 [IndexNow] Total de URLs encontradas no sitemap: ${urls.length}`);

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls
  };

  const endpoints = [
    { name: 'IndexNow Global (api.indexnow.org)', url: 'https://api.indexnow.org/indexnow' },
    { name: 'Bing Direct (www.bing.com/indexnow)', url: 'https://www.bing.com/indexnow' }
  ];

  for (const ep of endpoints) {
    try {
      console.log(`\n⚡ Enviando para ${ep.name}...`);
      const res = await fetch(ep.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(payload)
      });

      if (res.status === 200 || res.status === 202) {
        console.log(`✅ [${ep.name}] Sucesso! Código HTTP: ${res.status}`);
      } else {
        const text = await res.text();
        console.warn(`⚠️ [${ep.name}] Resposta HTTP ${res.status}: ${text}`);
      }
    } catch (err: any) {
      console.error(`❌ [${ep.name}] Erro na conexão: ${err.message}`);
    }
  }

  console.log('\n🎉 [IndexNow] Concluído! O Bing e os motores de busca alimentados por IA foram notificados.');
}

submitIndexNow().catch(err => {
  console.error('❌ Erro fatal no IndexNow:', err);
  process.exit(1);
});

