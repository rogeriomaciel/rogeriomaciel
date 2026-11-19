import React from 'react';
import {
  AbsoluteFill,
  Audio,
  Img,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export type TechCaseProps = {
  locale: 'pt' | 'en';
  audioFile: string | null;
};

interface CaptionBeat {
  startSec: number;
  endSec: number;
  text: string;
}

const COPY = {
  pt: {
    role: 'Arquiteto de Software & Automação IA',
    hookTag: 'CASE DE PRODUÇÃO',
    hookTitle: 'Quando o n8n trava por falta de memória em produção',
    problemTag: 'O GARGALO',
    problemTitle: 'JSON gigante em memória = Out-of-Memory (OOM)',
    problemBullets: [
      'Cada execução carrega payloads completos na RAM',
      'Picos de webhook derrubam o container inteiro',
      'Latência sobe para segundos antes do crash',
    ],
    archTag: 'A DECISÃO DE ARQUITETURA',
    archTitle: 'Transpilado para microsserviço Node.js + Fastify',
    codeLines: [
      'fastify.post("/webhook", async (req, reply) => {',
      '  verifyHmacSha256(req.rawBody, req.headers);',
      '  await queue.enqueue(req.body.eventId);',
      '  return reply.code(202).send({ ok: true });',
      '});',
    ],
    metricsTag: 'RESULTADO EM PRODUÇÃO',
    metrics: [
      { label: 'Latência P95', value: '5 ms', sub: 'antes: ~1.800 ms' },
      { label: 'Consumo de RAM', value: '-98%', sub: '32 MB vs. 1.6 GB' },
      { label: 'Quedas por OOM', value: '0', sub: 'estável sob pico' },
    ],
    ctaTag: 'ARQUITETURA COMPLETA NO SITE',
    ctaHeadline: 'Código limpo, arquitetura previsível.',
    ctaUrl: 'rogeriomaciel.com.br/solucoes/n8n-travando-memoria-solucao/',
    captions: [
      { startSec: 0, endSec: 5, text: 'O n8n é ótimo para prototipar rápido — mas em produção pesada ele cobra caro na memória.' },
      { startSec: 5, endSec: 10, text: 'Eu tinha um fluxo crítico recebendo centenas de webhooks com payloads grandes.' },
      { startSec: 10, endSec: 16, text: 'Quando o volume subia, o consumo de RAM batia 100% e o container caía com Out-of-Memory.' },
      { startSec: 16, endSec: 23, text: 'Em vez de só aumentar o servidor, eu transpilei o fluxo crítico para um microsserviço em Fastify.' },
      { startSec: 23, endSec: 31, text: 'Validação criptográfica HMAC na entrada, fila assíncrona e zero estado pesado preso em memória.' },
      { startSec: 31, endSec: 40, text: 'O resultado? A latência caiu para 5 milissegundos e o uso de RAM caiu 98%.' },
      { startSec: 40, endSec: 48, text: 'No-code serve para validar. Quando o negócio escala, código enxuto traz previsibilidade.' },
      { startSec: 48, endSec: 55, text: 'O desenho completo dessa arquitetura está no meu site. Link aqui na descrição.' },
    ] satisfies CaptionBeat[],
  },
  en: {
    role: 'Software & AI Automation Architect',
    hookTag: 'PRODUCTION CASE STUDY',
    hookTitle: 'Why I Replaced Crashing n8n Workflows with Fastify',
    problemTag: 'THE BOTTLENECK',
    problemTitle: 'Large JSON payloads in RAM = Out-of-Memory (OOM)',
    problemBullets: [
      'Visual nodes hold full JSON trees inside memory',
      'Traffic spikes crash the entire worker container',
      'Response latency jumps to seconds before failure',
    ],
    archTag: 'THE ARCHITECTURE SHIFT',
    archTitle: 'Compiled into a lean Node.js + Fastify microservice',
    codeLines: [
      'fastify.post("/webhook", async (req, reply) => {',
      '  verifyHmacSha256(req.rawBody, req.headers);',
      '  await queue.enqueue(req.body.eventId);',
      '  return reply.code(202).send({ ok: true });',
      '});',
    ],
    metricsTag: 'PRODUCTION IMPACT',
    metrics: [
      { label: 'P95 Latency', value: '5 ms', sub: 'down from ~1,800 ms' },
      { label: 'RAM Usage', value: '-98%', sub: '32 MB vs. 1.6 GB' },
      { label: 'OOM Crashes', value: '0', sub: 'stable under spikes' },
    ],
    ctaTag: 'FULL ARCHITECTURE BREAKDOWN',
    ctaHeadline: 'Clean code. Predictable scale.',
    ctaUrl: 'rogeriomaciel.com.br/en/solutions/n8n-out-of-memory-oom-solution/',
    captions: [
      { startSec: 0, endSec: 6, text: "Quick note: my English isn't fluent yet, I'm still learning — thanks for watching." },
      { startSec: 6, endSec: 12, text: 'n8n is great to build fast. But under heavy load, it burns a lot of RAM.' },
      { startSec: 12, endSec: 19, text: 'I had a webhook workflow that kept crashing with Out-of-Memory errors during traffic spikes.' },
      { startSec: 19, endSec: 27, text: 'Instead of paying for a bigger server, I rewrote the core flow as a Fastify microservice.' },
      { startSec: 27, endSec: 35, text: 'Fast HMAC security check at the edge, async queue, and almost zero memory footprint.' },
      { startSec: 35, endSec: 43, text: 'Latency dropped to 5 milliseconds, and memory usage went down by 98 percent.' },
      { startSec: 43, endSec: 50, text: 'Low-code is great to validate ideas. Lean code is how you scale them safely.' },
      { startSec: 50, endSec: 55, text: 'You can read the full architecture breakdown on my website. Link in the description.' },
    ] satisfies CaptionBeat[],
  },
} as const;

const BackgroundGrid: React.FC = () => (
  <AbsoluteFill
    style={{
      backgroundColor: '#09090b',
      backgroundImage:
        'radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.14), transparent 45%), radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.10), transparent 45%), linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
      backgroundSize: '100% 100%, 100% 100%, 64px 64px, 64px 64px',
    }}
  />
);

const TopBrandBar: React.FC<{ tag: string }> = ({ tag }) => (
  <div
    style={{
      position: 'absolute',
      top: 56,
      left: 88,
      right: 88,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'Inter, system-ui, sans-serif',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <div
        style={{
          width: 12,
          height: 12,
          borderRadius: 999,
          backgroundColor: '#10b981',
          boxShadow: '0 0 18px #10b981',
        }}
      />
      <span
        style={{
          color: '#10b981',
          fontSize: 20,
          fontWeight: 700,
          letterSpacing: '0.16em',
        }}
      >
        {tag}
      </span>
    </div>
    <span style={{ color: '#71717a', fontSize: 20, fontWeight: 500 }}>
      rogeriomaciel.com.br
    </span>
  </div>
);

const CaptionBar: React.FC<{ captions: readonly CaptionBeat[] }> = ({ captions }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sec = frame / fps;
  const active = captions.find((c) => sec >= c.startSec && sec < c.endSec);

  if (!active) return null;

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 52,
        left: 120,
        right: 120,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(9, 9, 11, 0.88)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 16,
          padding: '18px 34px',
          color: '#f4f4f5',
          fontSize: 32,
          fontWeight: 600,
          lineHeight: 1.35,
          textAlign: 'center',
          fontFamily: 'Inter, system-ui, sans-serif',
          boxShadow: '0 18px 45px rgba(0,0,0,0.55)',
          maxWidth: 1440,
        }}
      >
        {active.text}
      </div>
    </div>
  );
};

export const TechCaseVideo: React.FC<TechCaseProps> = ({ locale, audioFile }) => {
  const t = COPY[locale];
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const introOpacity = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: 'clamp' });
  const introSlide = spring({ frame, fps, config: { damping: 16 } });

  const problemStart = 10 * 30;
  const ramPct = interpolate(
    frame,
    [problemStart + 10, problemStart + 110],
    [28, 100],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const archStart = 19 * 30;
  const metricsStart = 34 * 30;
  const ctaStart = 47 * 30;

  return (
    <AbsoluteFill style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#fafafa' }}>
      <BackgroundGrid />
      {audioFile ? <Audio src={staticFile(audioFile)} /> : null}

      {/* SCENE 1: HOOK & AUTHOR (0s - 10s) */}
      <Sequence from={0} durationInFrames={10 * 30}>
        <AbsoluteFill style={{ opacity: introOpacity }}>
          <TopBrandBar tag={t.hookTag} />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 68,
              padding: '0 110px',
              height: '100%',
              transform: `translateY(${(1 - introSlide) * 24}px)`,
            }}
          >
            <div
              style={{
                width: 340,
                height: 340,
                borderRadius: 28,
                overflow: 'hidden',
                border: '3px solid rgba(16, 185, 129, 0.5)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.65)',
                flexShrink: 0,
              }}
            >
              <Img
                src={staticFile('rogerio-maciel.jpg')}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              <h1 style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.12, margin: 0 }}>
                {t.hookTitle}
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 8 }}>
                <div style={{ width: 48, height: 3, backgroundColor: '#10b981' }} />
                <div>
                  <div style={{ fontSize: 28, fontWeight: 700, color: '#ffffff' }}>
                    Rogério Maciel
                  </div>
                  <div style={{ fontSize: 22, color: '#a1a1aa' }}>{t.role}</div>
                </div>
              </div>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 2: BOTTLENECK / RAM SPIKE (10s - 19s) */}
      <Sequence from={problemStart} durationInFrames={9 * 30}>
        <AbsoluteFill>
          <TopBrandBar tag={t.problemTag} />
          <div
            style={{
              padding: '150px 110px 180px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 36,
              height: '100%',
            }}
          >
            <h2 style={{ fontSize: 54, fontWeight: 800, margin: 0, color: '#fca5a5' }}>
              {t.problemTitle}
            </h2>

            <div
              style={{
                backgroundColor: '#18181b',
                border: '1px solid rgba(239, 68, 68, 0.35)',
                borderRadius: 20,
                padding: 36,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 16,
                  fontSize: 26,
                  fontWeight: 700,
                }}
              >
                <span>n8n-worker-prod • Container RAM</span>
                <span style={{ color: ramPct > 88 ? '#ef4444' : '#f59e0b' }}>
                  {Math.round(ramPct)}% {ramPct >= 99 ? '• OOM KILLED' : ''}
                </span>
              </div>
              <div
                style={{
                  height: 36,
                  backgroundColor: '#27272a',
                  borderRadius: 999,
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${ramPct}%`,
                    height: '100%',
                    background:
                      ramPct > 85
                        ? 'linear-gradient(90deg, #f59e0b, #ef4444)'
                        : 'linear-gradient(90deg, #10b981, #f59e0b)',
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {t.problemBullets.map((item, idx) => (
                <div
                  key={idx}
                  style={{ fontSize: 30, color: '#d4d4d8', display: 'flex', gap: 16 }}
                >
                  <span style={{ color: '#ef4444', fontWeight: 800 }}>✕</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 3: ARCHITECTURE & CODE (19s - 34s) */}
      <Sequence from={archStart} durationInFrames={15 * 30}>
        <AbsoluteFill>
          <TopBrandBar tag={t.archTag} />
          <div
            style={{
              padding: '150px 110px 180px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 36,
              height: '100%',
            }}
          >
            <h2 style={{ fontSize: 52, fontWeight: 800, margin: 0, color: '#6ee7b7' }}>
              {t.archTitle}
            </h2>

            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              {['Webhook', 'HMAC-SHA256', 'Fastify (5ms)', 'Async Queue'].map((step, i) => (
                <React.Fragment key={step}>
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: '#18181b',
                      border: '1px solid rgba(16, 185, 129, 0.4)',
                      borderRadius: 14,
                      padding: '22px 24px',
                      textAlign: 'center',
                      fontSize: 26,
                      fontWeight: 700,
                      color: '#ecfdf5',
                    }}
                  >
                    {step}
                  </div>
                  {i < 3 && (
                    <span style={{ fontSize: 30, color: '#10b981', fontWeight: 800 }}>→</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div
              style={{
                backgroundColor: '#111113',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 18,
                padding: '32px 38px',
                fontFamily: 'JetBrains Mono, Fira Code, monospace',
                fontSize: 26,
                lineHeight: 1.6,
                color: '#e4e4e7',
              }}
            >
              {t.codeLines.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 4: PRODUCTION METRICS (34s - 47s) */}
      <Sequence from={metricsStart} durationInFrames={13 * 30}>
        <AbsoluteFill>
          <TopBrandBar tag={t.metricsTag} />
          <div
            style={{
              padding: '150px 110px 180px',
              display: 'flex',
              alignItems: 'center',
              gap: 36,
              height: '100%',
            }}
          >
            {t.metrics.map((m) => (
              <div
                key={m.label}
                style={{
                  flex: 1,
                  backgroundColor: '#18181b',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  borderRadius: 24,
                  padding: '48px 36px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                }}
              >
                <div style={{ fontSize: 24, color: '#a1a1aa', fontWeight: 600 }}>{m.label}</div>
                <div style={{ fontSize: 84, fontWeight: 900, color: '#10b981', lineHeight: 1 }}>
                  {m.value}
                </div>
                <div style={{ fontSize: 22, color: '#d4d4d8' }}>{m.sub}</div>
              </div>
            ))}
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 5: CTA & URL (47s - 55s) */}
      <Sequence from={ctaStart} durationInFrames={8 * 30}>
        <AbsoluteFill>
          <TopBrandBar tag={t.ctaTag} />
          <div
            style={{
              padding: '0 110px',
              display: 'flex',
              alignItems: 'center',
              gap: 56,
              height: '100%',
            }}
          >
            <div
              style={{
                width: 240,
                height: 240,
                borderRadius: 999,
                overflow: 'hidden',
                border: '3px solid #10b981',
                flexShrink: 0,
              }}
            >
              <Img
                src={staticFile('rogerio-maciel.jpg')}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <h2 style={{ fontSize: 56, fontWeight: 800, margin: 0 }}>{t.ctaHeadline}</h2>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: '#10b981',
                  backgroundColor: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  padding: '16px 24px',
                  borderRadius: 12,
                  alignSelf: 'flex-start',
                }}
              >
                {t.ctaUrl}
              </div>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      <CaptionBar captions={t.captions} />
    </AbsoluteFill>
  );
};
