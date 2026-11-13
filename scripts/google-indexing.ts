import * as fs from 'node:fs';
import * as path from 'node:path';
import * as crypto from 'node:crypto';

const SITEMAP_PATH = path.resolve(process.cwd(), 'public/sitemap.xml');
const SERVICE_ACCOUNT_PATH = process.env.GOOGLE_APPLICATION_CREDENTIALS 
  || path.resolve(process.cwd(), 'service-account.json');

function base64url(input: Buffer | string): string {
  const buf = Buffer.isBuffer(input) ? input : Buffer.from(input);
  return buf.toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

async function getGoogleAccessToken(clientEmail: string, privateKey: string): Promise<string> {
  const header = {
    alg: 'RS256',
    typ: 'JWT'
  };

  const now = Math.floor(Date.now() / 1000);
  const claimSet = {
    iss: clientEmail,
    scope: 'https://www.googleapis.com/auth/indexing',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  };

  const encodedHeader = base64url(JSON.stringify(header));
  const encodedClaimSet = base64url(JSON.stringify(claimSet));
  const signatureInput = `${encodedHeader}.${encodedClaimSet}`;

  const signer = crypto.createSign('RSA-SHA256');
  signer.update(signatureInput);
  const signature = signer.sign(privateKey);
  const encodedSignature = base64url(signature);

  const jwt = `${signatureInput}.${encodedSignature}`;

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    })
  });

  if (!tokenRes.ok) {
    const errorText = await tokenRes.text();
    throw new Error(`Falha ao obter token OAuth2 do Google: ${tokenRes.status} ${errorText}`);
  }

  const tokenData = await tokenRes.json() as { access_token: string };
  return tokenData.access_token;
}

async function notifyGoogleIndexing(url: string, accessToken: string) {
  const endpoint = 'https://indexing.googleapis.com/v3/urlNotifications:publish';
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify({
      url: url,
      type: 'URL_UPDATED'
    })
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`[${response.status}] ${errText}`);
  }

  return await response.json();
}

async function main() {
  console.log('🚀 [Google Indexing API] Iniciando notificação de URLs para rogeriomaciel.com.br...');

  if (!fs.existsSync(SERVICE_ACCOUNT_PATH)) {
    console.error(`❌ [Google Indexing] Arquivo de credenciais não encontrado: ${SERVICE_ACCOUNT_PATH}`);
    process.exit(1);
  }

  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error(`❌ [Google Indexing] Arquivo sitemap.xml não encontrado: ${SITEMAP_PATH}`);
    process.exit(1);
  }

  const creds = JSON.parse(fs.readFileSync(SERVICE_ACCOUNT_PATH, 'utf-8'));
  const clientEmail = creds.client_email;
  const privateKey = creds.private_key;

  console.log(`🔑 [Google Indexing] Autenticando com service account: ${clientEmail}...`);
  const accessToken = await getGoogleAccessToken(clientEmail, privateKey);
  console.log('✅ [Google Indexing] Token de acesso obtido com sucesso!');

  const sitemapXml = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  const locMatches = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)];
  const urls = locMatches.map(m => m[1].trim());

  console.log(`📋 [Google Indexing] Total de URLs para indexar: ${urls.length}\n`);

  let successCount = 0;
  let failCount = 0;

  for (const url of urls) {
    try {
      const res = await notifyGoogleIndexing(url, accessToken);
      console.log(`⚡ [Indexado] ${url} ➔ ${res.urlNotificationMetadata?.latestUpdate?.notifyTime || 'OK'}`);
      successCount++;
    } catch (err: any) {
      console.error(`❌ [Falha] ${url}: ${err.message}`);
      failCount++;
    }
    // Rate limit suave
    await new Promise(r => setTimeout(r, 200));
  }

  console.log(`\n🎉 [Concluído] ${successCount} enviadas com sucesso, ${failCount} falhas.`);
}

main().catch(err => {
  console.error('❌ Erro fatal:', err);
  process.exit(1);
});
