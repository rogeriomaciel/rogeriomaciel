import * as fs from 'node:fs';
import * as path from 'node:path';
import * as crypto from 'node:crypto';

const PROPERTY_ID = process.env.GA4_PROPERTY_ID || '552173370';
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

// 1. Relatório em Tempo Real (Últimos 30 minutos)
async function getRealtimeTraffic(token: string) {
  const endpoint = `https://analyticsdata.googleapis.com/v1beta/properties/${PROPERTY_ID}:runRealtimeReport`;
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      dimensions: [
        { name: 'country' },
        { name: 'city' },
        { name: 'unifiedScreenName' }
      ],
      metrics: [
        { name: 'activeUsers' }
      ]
    })
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`[Realtime ${res.status}] ${text}`);
  }

  return await res.json();
}

// 2. Relatório Padrão (Últimos 30 dias)
async function getHistoricalTraffic(token: string) {
  const endpoint = `https://analyticsdata.googleapis.com/v1beta/properties/${PROPERTY_ID}:runReport`;
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      dateRanges: [
        { startDate: '30daysAgo', endDate: 'today' }
      ],
      dimensions: [
        { name: 'sessionSource' },
        { name: 'sessionMedium' },
        { name: 'pagePath' }
      ],
      metrics: [
        { name: 'sessions' },
        { name: 'activeUsers' },
        { name: 'screenPageViews' }
      ],
      limit: 25
    })
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`[Historical ${res.status}] ${text}`);
  }

  return await res.json();
}

// 3. Eventos Registrados (ex: cliques em WhatsApp, formulários, etc.)
async function getEventsReport(token: string) {
  const endpoint = `https://analyticsdata.googleapis.com/v1beta/properties/${PROPERTY_ID}:runReport`;
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      dateRanges: [
        { startDate: '30daysAgo', endDate: 'today' }
      ],
      dimensions: [
        { name: 'eventName' }
      ],
      metrics: [
        { name: 'eventCount' },
        { name: 'totalUsers' }
      ]
    })
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`[Events ${res.status}] ${text}`);
  }

  return await res.json();
}

async function main() {
  console.log(`📡 [GA4 Analytics Engine] Conectando à Propriedade ${PROPERTY_ID}...`);

  if (!fs.existsSync(SERVICE_ACCOUNT_PATH)) {
    console.error('❌ service-account.json não encontrado.');
    process.exit(1);
  }

  const creds = JSON.parse(fs.readFileSync(SERVICE_ACCOUNT_PATH, 'utf-8'));
  const token = await getGoogleAccessToken(
    creds.client_email,
    creds.private_key,
    'https://www.googleapis.com/auth/analytics.readonly'
  );

  console.log('✅ [OAuth] Conexão com Google Analytics autenticada com sucesso!');

  // Realtime
  try {
    console.log('\n⚡ [TEMPO REAL] Consultando usuários ativos nos últimos 30 minutos...');
    const realtime = await getRealtimeTraffic(token);
    const rows = realtime.rows || [];
    console.log(`👥 Usuários ativos agora: ${realtime.rowCount || 0}`);
    if (rows.length > 0) {
      console.table(rows.map((r: any) => ({
        País: r.dimensionValues[0]?.value,
        Cidade: r.dimensionValues[1]?.value,
        Página: r.dimensionValues[2]?.value,
        'Usuários Ativos': r.metricValues[0]?.value
      })));
    } else {
      console.log('ℹ️ Nenhum usuário ativo nos últimos 30 minutos.');
    }
  } catch (err: any) {
    console.error('⚠️ Erro ao consultar Realtime:', err.message);
  }

  // Histórico Recente
  try {
    console.log('\n📈 [HISTÓRICO 30 DIAS] Canais de aquisição e páginas acessadas...');
    const hist = await getHistoricalTraffic(token);
    const rows = hist.rows || [];
    if (rows.length > 0) {
      console.table(rows.map((r: any) => ({
        Origem: r.dimensionValues[0]?.value,
        Mídia: r.dimensionValues[1]?.value,
        Página: r.dimensionValues[2]?.value,
        Sessões: r.metricValues[0]?.value,
        Usuários: r.metricValues[1]?.value,
        Visualizações: r.metricValues[2]?.value
      })));
    } else {
      console.log('ℹ️ Nenhuma sessão registrada no período.');
    }
  } catch (err: any) {
    console.error('⚠️ Erro ao consultar Histórico:', err.message);
  }

  // Eventos de Conversão
  try {
    console.log('\n🎯 [EVENTOS REGISTRADOS] Métricas de interação...');
    const ev = await getEventsReport(token);
    const rows = ev.rows || [];
    if (rows.length > 0) {
      console.table(rows.map((r: any) => ({
        Evento: r.dimensionValues[0]?.value,
        'Total de Ocorrências': r.metricValues[0]?.value,
        'Usuários Únicos': r.metricValues[1]?.value
      })));
    }
  } catch (err: any) {
    console.error('⚠️ Erro ao consultar Eventos:', err.message);
  }
}

main().catch(err => {
  console.error('❌ Falha fatal:', err);
  process.exit(1);
});
