import * as fs from 'node:fs';
import * as path from 'node:path';
import * as crypto from 'node:crypto';

const SERVICE_ACCOUNT_PATH = process.env.GOOGLE_APPLICATION_CREDENTIALS 
  || path.resolve(process.cwd(), 'service-account.json');

function base64url(input: Buffer | string): string {
  const buf = Buffer.isBuffer(input) ? input : Buffer.from(input);
  return buf.toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

async function getGoogleAccessToken(clientEmail: string, privateKey: string, scope: string): Promise<string> {
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claimSet = {
    iss: clientEmail,
    scope: scope,
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
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    })
  });

  if (!tokenRes.ok) {
    throw new Error(`OAuth error: ${await tokenRes.text()}`);
  }

  const tokenData = await tokenRes.json() as { access_token: string };
  return tokenData.access_token;
}

async function inspectUrl(siteUrl: string, inspectionUrl: string, token: string) {
  const endpoint = 'https://searchconsole.googleapis.com/v1/urlInspection/index:inspect';
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      inspectionUrl: inspectionUrl,
      siteUrl: siteUrl
    })
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`[${res.status}] ${text}`);
  }

  return await res.json();
}

async function main() {
  const siteUrl = 'sc-domain:rogeriomaciel.com.br';
  const targetUrl = 'https://rogeriomaciel.com.br/';

  console.log(`🔍 [Search Console] Consultando status de indexação de: ${targetUrl}...`);

  if (!fs.existsSync(SERVICE_ACCOUNT_PATH)) {
    console.error('❌ service-account.json não encontrado.');
    process.exit(1);
  }

  const creds = JSON.parse(fs.readFileSync(SERVICE_ACCOUNT_PATH, 'utf-8'));
  const token = await getGoogleAccessToken(
    creds.client_email,
    creds.private_key,
    'https://www.googleapis.com/auth/webmasters.readonly'
  );

  try {
    const data = await inspectUrl(siteUrl, targetUrl, token);
    console.log('✅ Dados de Indexação:', JSON.stringify(data.inspectionResult, null, 2));
  } catch (err: any) {
    console.warn('⚠️ Nota sobre Search Console:', err.message);
    console.log('ℹ️ Para leitura via Search Console API, adicione o email', creds.client_email, 'como usuário com permissão no Search Console de rogeriomaciel.com.br.');
  }
}

main().catch(console.error);

