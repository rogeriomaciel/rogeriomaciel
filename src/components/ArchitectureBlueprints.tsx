import { useState } from 'react';
import { Locale } from '../config/i18n.content';
import { CpuIcon, ActivityIcon, CheckCircle2Icon } from './Icons';

export function ArchitectureBlueprints({
  locale = 'pt',
  initialTab = 'transpiler',
}: {
  locale?: Locale;
  initialTab?: 'transpiler' | 'attribution';
}) {
  const [activeTab, setActiveTab] = useState<'transpiler' | 'attribution'>(initialTab);
  const isEn = locale === 'en';

  return (
    <section id="pilares" className="py-20 lg:py-24 border-b border-white/[0.08] bg-[#090D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              {isEn ? '01 / Architecture & Business P&L' : '01 / Arquitetura & Resultado de Negócio'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {isEn
                ? 'Systems Engineered for Margin, Speed & Accountability'
                : 'Engenharia Projetada para Margem, Velocidade e Caixa'}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {isEn
                ? 'Real production topologies built in 2026 — uniting bare-metal backend performance with commercial SLA, AI concurrency safety, and revenue attribution.'
                : 'Topologias reais em produção construídas em 2026 — unindo performance bare-metal com SLA comercial, segurança de concorrência em IA e atribuição de receita.'}
            </p>
          </div>

          <div className="inline-flex p-1 rounded-xl bg-white/[0.03] border border-white/[0.08] self-start">
            <button
              type="button"
              onClick={() => setActiveTab('transpiler')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-semibold transition-all ${activeTab === 'transpiler'
                ? 'bg-emerald-500 text-slate-950 shadow-sm'
                : 'text-slate-300 hover:text-white'
                }`}
            >
              <CpuIcon className="w-4 h-4" />
              <span>{isEn ? 'n8n → Fastify Transpiler' : 'Transpilador n8n → Fastify'}</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('attribution')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-semibold transition-all ${activeTab === 'attribution'
                ? 'bg-emerald-500 text-slate-950 shadow-sm'
                : 'text-slate-300 hover:text-white'
                }`}
            >
              <ActivityIcon className="w-4 h-4" />
              <span>{isEn ? 'CTWA Attribution & AI FSM' : 'Atribuição CTWA & FSM de IA'}</span>
            </button>
          </div>
        </div>

        {/* Blueprint Card */}
        {activeTab === 'transpiler' ? (
          <div className="rounded-2xl bg-[#07090E] border border-white/[0.08] p-6 sm:p-10 space-y-8">
            {/* SVG Architecture Diagram */}
            <div className="w-full overflow-x-auto pb-2">
              <svg
                viewBox="0 0 920 190"
                className="w-full min-w-[680px] h-auto"
                role="img"
                aria-label={
                  isEn
                    ? 'n8n to Fastify/Bun Bare-Metal Transpiler Architecture Diagram'
                    : 'Diagrama da Arquitetura do Transpilador n8n para Fastify/Bun'
                }
              >
                <defs>
                  <marker id="arrow-emerald" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#10B981" />
                  </marker>
                </defs>

                {/* Node 1 */}
                <rect x="10" y="35" width="195" height="115" rx="12" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
                <text x="107" y="65" textAnchor="middle" fill="#38BDF8" fontSize="11" fontFamily="monospace" fontWeight="bold">INPUT: VISUAL DAG</text>
                <text x="107" y="92" textAnchor="middle" fill="#F8FAFC" fontSize="14" fontFamily="sans-serif" fontWeight="bold">126 n8n Workflows</text>
                <text x="107" y="114" textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily="monospace">1.2 GB RAM • ~500ms</text>
                <text x="107" y="132" textAnchor="middle" fill="#64748B" fontSize="10" fontFamily="monospace">JSON AST + Credentials</text>

                <line x1="205" y1="92" x2="245" y2="92" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrow-emerald)" />

                {/* Node 2 */}
                <rect x="250" y="35" width="205" height="115" rx="12" fill="#0F172A" stroke="#10B981" strokeWidth="1.5" />
                <text x="352" y="65" textAnchor="middle" fill="#10B981" fontSize="11" fontFamily="monospace" fontWeight="bold">COMPILER PIPELINE</text>
                <text x="352" y="92" textAnchor="middle" fill="#F8FAFC" fontSize="14" fontFamily="sans-serif" fontWeight="bold">Kahn Topological Sort</text>
                <text x="352" y="114" textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily="monospace">Strict Cycle Validation</text>
                <text x="352" y="132" textAnchor="middle" fill="#64748B" fontSize="10" fontFamily="monospace">Fail-Fast Env Secrets</text>

                <line x1="455" y1="92" x2="495" y2="92" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrow-emerald)" />

                {/* Node 3 */}
                <rect x="500" y="35" width="200" height="115" rx="12" fill="#0F172A" stroke="#10B981" strokeWidth="1.5" />
                <text x="600" y="65" textAnchor="middle" fill="#10B981" fontSize="11" fontFamily="monospace" fontWeight="bold">BARE-METAL RUNTIME</text>
                <text x="600" y="92" textAnchor="middle" fill="#F8FAFC" fontSize="14" fontFamily="sans-serif" fontWeight="bold">Fastify + Bun Cluster</text>
                <text x="600" y="114" textAnchor="middle" fill="#10B981" fontSize="12" fontFamily="monospace" fontWeight="bold">25 MB RAM • 5ms Latency</text>
                <text x="600" y="132" textAnchor="middle" fill="#64748B" fontSize="10" fontFamily="monospace">Async Webhooks &amp; PM2</text>

                <line x1="700" y1="92" x2="740" y2="92" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrow-emerald)" />

                {/* Node 4 */}
                <rect x="745" y="35" width="165" height="115" rx="12" fill="#052E16" stroke="#10B981" strokeWidth="1.5" />
                <text x="827" y="65" textAnchor="middle" fill="#34D399" fontSize="11" fontFamily="monospace" fontWeight="bold">BUSINESS OUTCOME</text>
                <text x="827" y="94" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontFamily="monospace" fontWeight="bold">-98% RAM</text>
                <text x="827" y="116" textAnchor="middle" fill="#A7F3D0" fontSize="11" fontFamily="monospace">5.8x Throughput</text>
                <text x="827" y="134" textAnchor="middle" fill="#6EE7B7" fontSize="10" fontFamily="monospace">-80% Cloud Bill</text>
              </svg>
            </div>

            {/* Engineering + Leadership Breakdown */}
            <div className="grid md:grid-cols-2 gap-8 pt-4 border-t border-white/[0.06]">
              <div className="space-y-3">
                <h3 className="text-sm font-mono uppercase tracking-wider text-emerald-400 font-bold">
                  {isEn ? 'Engineering Depth (coreauto-backend)' : 'Profundidade Técnica (coreauto-backend)'}
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2Icon className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                    <span>
                      {isEn
                        ? '126/126 production workflows audited with bun test, strict DAG cycle detection, and shared execution history across PM2 cluster workers.'
                        : 'Auditoria de 126/126 workflows com suíte bun test, detecção estrita de ciclos DAG e histórico compartilhado em cluster PM2.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2Icon className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                    <span>
                      {isEn
                        ? 'Multimodal WhatsApp PDF pipeline (Evolution API getBase64FromMediaMessage → @google/genai) with non-blocking asynchronous webhooks.'
                        : 'Pipeline multimodal de PDF no WhatsApp (Evolution API → @google/genai) com webhooks assíncronos sem travar resposta.'}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold">
                  {isEn ? 'Executive & Cost Impact' : 'Impacto Executivo & Custo'}
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2Icon className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                    <span>
                      {isEn
                        ? 'Eliminates vertical server scaling bills when low-code platforms hit OOM crashes under concurrent load.'
                        : 'Elimina gastos crescentes com servidor quando plataformas low-code travam por falta de memória (OOM) sob carga.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2Icon className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                    <span>
                      {isEn
                        ? 'Zero-trust credential fail-fast validation and GitOps workflow synchronization so teams ship safely without manual UI edits.'
                        : 'Validação fail-fast de credenciais e GitOps bidirecional para equipes publicarem com Pull Request e rollback real.'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl bg-[#07090E] border border-white/[0.08] p-6 sm:p-10 space-y-8">
            {/* SVG Architecture Diagram 2 */}
            <div className="w-full overflow-x-auto pb-2">
              <svg
                viewBox="0 0 920 190"
                className="w-full min-w-[680px] h-auto"
                role="img"
                aria-label={
                  isEn
                    ? 'Meta Ads CTWA Attribution and Deterministic AI FSM Architecture'
                    : 'Diagrama de Atribuição Meta Ads CTWA e Máquina de Estados de IA'
                }
              >
                <defs>
                  <marker id="arrow-cyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#38BDF8" />
                  </marker>
                </defs>

                {/* Node 1 */}
                <rect x="10" y="35" width="195" height="115" rx="12" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
                <text x="107" y="65" textAnchor="middle" fill="#38BDF8" fontSize="11" fontFamily="monospace" fontWeight="bold">AD TRAFFIC INTAKE</text>
                <text x="107" y="92" textAnchor="middle" fill="#F8FAFC" fontSize="14" fontFamily="sans-serif" fontWeight="bold">Meta Ads CTWA</text>
                <text x="107" y="114" textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily="monospace">0s Ping • sendBeacon</text>
                <text x="107" y="132" textAnchor="middle" fill="#64748B" fontSize="10" fontFamily="monospace">7x24 Heatmap • No Pixel</text>

                <line x1="205" y1="92" x2="245" y2="92" stroke="#38BDF8" strokeWidth="2" markerEnd="url(#arrow-cyan)" />

                {/* Node 2 */}
                <rect x="250" y="35" width="210" height="115" rx="12" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
                <text x="355" y="65" textAnchor="middle" fill="#38BDF8" fontSize="11" fontFamily="monospace" fontWeight="bold">CONCURRENCY &amp; FSM</text>
                <text x="355" y="92" textAnchor="middle" fill="#F8FAFC" fontSize="14" fontFamily="sans-serif" fontWeight="bold">Atomic Lock + @MODULE</text>
                <text x="355" y="114" textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily="monospace">Regex Prompt Injection</text>
                <text x="355" y="132" textAnchor="middle" fill="#64748B" fontSize="10" fontFamily="monospace">Strict JSON State Output</text>

                <line x1="460" y1="92" x2="500" y2="92" stroke="#38BDF8" strokeWidth="2" markerEnd="url(#arrow-cyan)" />

                {/* Node 3 */}
                <rect x="505" y="35" width="195" height="115" rx="12" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
                <text x="602" y="65" textAnchor="middle" fill="#38BDF8" fontSize="11" fontFamily="monospace" fontWeight="bold">COMMERCE &amp; SLA</text>
                <text x="602" y="92" textAnchor="middle" fill="#F8FAFC" fontSize="14" fontFamily="sans-serif" fontWeight="bold">Stripe + SLA Tower</text>
                <text x="602" y="114" textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily="monospace">HMAC timingSafeEqual</text>
                <text x="602" y="132" textAnchor="middle" fill="#64748B" fontSize="10" fontFamily="monospace">Exact-Second Rep Audit</text>

                <line x1="700" y1="92" x2="740" y2="92" stroke="#38BDF8" strokeWidth="2" markerEnd="url(#arrow-cyan)" />

                {/* Node 4 */}
                <rect x="745" y="35" width="165" height="115" rx="12" fill="#082F49" stroke="#38BDF8" strokeWidth="1.5" />
                <text x="827" y="65" textAnchor="middle" fill="#7DD3FC" fontSize="11" fontFamily="monospace" fontWeight="bold">P&amp;L VISIBILITY</text>
                <text x="827" y="94" textAnchor="middle" fill="#FFFFFF" fontSize="17" fontFamily="monospace" fontWeight="bold">Ad → Revenue</text>
                <text x="827" y="116" textAnchor="middle" fill="#BAE6FD" fontSize="11" fontFamily="monospace">Zero Hallucination</text>
                <text x="827" y="134" textAnchor="middle" fill="#7DD3FC" fontSize="10" fontFamily="monospace">Closed-Loop ROI</text>
              </svg>
            </div>

            {/* Engineering + Leadership Breakdown */}
            <div className="grid md:grid-cols-2 gap-8 pt-4 border-t border-white/[0.06]">
              <div className="space-y-3">
                <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold">
                  {isEn ? 'AI Concurrency & Security (241+ PRs)' : 'Concorrência de IA & Segurança (241+ PRs)'}
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2Icon className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                    <span>
                      {isEn
                        ? 'Atomic queue locks prevent WhatsApp burst-message race conditions; modular @MODULE regex prompts enforce strict JSON state transitions across 73 workflows.'
                        : 'Trava atômica de fila evita race condition quando o lead manda várias mensagens seguidas; prompts modulares @MODULE forçam JSON estrito em 73 workflows.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2Icon className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                    <span>
                      {isEn
                        ? 'Zero-trust Postgres RLS (deny-by-default), 24h JWT expiration on kiosk endpoints, and HMAC-SHA256 constant-time Stripe webhook verification.'
                        : 'RLS Zero-Trust no Postgres, JWT de 24h em totens e validação criptográfica HMAC-SHA256 com timingSafeEqual em webhooks Stripe.'}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-mono uppercase tracking-wider text-emerald-400 font-bold">
                  {isEn ? 'Management & Sales Governance' : 'Gestão Comercial & Governança'}
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2Icon className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                    <span>
                      {isEn
                        ? 'Audits sales rep response SLA down to the exact second and tracks unique-customer conversion from paid ad click to invoiced revenue.'
                        : 'Audita o SLA de resposta de vendedores ao segundo e mede conversão por cliente único do clique no anúncio até o faturamento no balcão.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2Icon className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                    <span>
                      {isEn
                        ? 'Encodes Scrum rituals, PO governance, sprint retrospectives, and team execution metrics into an operational command center.'
                        : 'Codifica rituais de Sprint, governança de PO, retrospectivas e métricas de execução de equipe em uma sala de comando operacional.'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
