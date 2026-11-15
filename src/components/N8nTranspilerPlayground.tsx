import { Locale } from '../config/i18n.content';
import { GithubIcon, ArrowRightIcon } from './Icons';

const SAMPLE_WORKFLOW_JSON = JSON.stringify(
  {
    id: 'lead-intake-main',
    name: 'Lead Intake Webhook',
    nodes: [
      {
        id: 'n1',
        name: 'Webhook',
        type: 'n8n-nodes-base.webhook',
        typeVersion: 2,
        position: [100, 300],
        parameters: { httpMethod: 'POST', path: 'lead-intake' },
      },
      {
        id: 'n2',
        name: 'Validate Lead Subworkflow',
        type: 'n8n-nodes-base.executeWorkflow',
        typeVersion: 1,
        position: [320, 300],
        parameters: { workflowId: 'sub-validate-lead' },
      },
      {
        id: 'n3',
        name: 'Is Valid Lead?',
        type: 'n8n-nodes-base.if',
        typeVersion: 2,
        position: [540, 300],
        parameters: {
          conditions: {
            combinator: 'and',
            conditions: [
              {
                leftValue: '={{ $json.isValid }}',
                rightValue: true,
                operator: { operation: 'equals' },
              },
            ],
          },
        },
      },
      {
        id: 'n4',
        name: 'Enrich Payload',
        type: 'n8n-nodes-base.set',
        typeVersion: 3,
        position: [760, 200],
        parameters: {
          assignments: {
            assignments: [
              { name: 'status', value: 'accepted' },
              { name: 'processedAt', value: '={{ $now }}' },
            ],
          },
        },
      },
      {
        id: 'n5',
        name: 'Respond Success',
        type: 'n8n-nodes-base.respondToWebhook',
        typeVersion: 1,
        position: [980, 200],
        parameters: { respondWith: 'firstIncomingItem', options: { responseCode: 200 } },
      },
      {
        id: 'n6',
        name: 'Respond Rejected',
        type: 'n8n-nodes-base.respondToWebhook',
        typeVersion: 1,
        position: [760, 420],
        parameters: {
          respondWith: 'json',
          responseBody: '{ "status": "rejected", "reason": "Invalid email format" }',
          options: { responseCode: 400 },
        },
      },
    ],
    connections: {
      Webhook: { main: [[{ node: 'Validate Lead Subworkflow', type: 'main', index: 0 }]] },
      'Validate Lead Subworkflow': { main: [[{ node: 'Is Valid Lead?', type: 'main', index: 0 }]] },
      'Is Valid Lead?': {
        main: [
          [{ node: 'Enrich Payload', type: 'main', index: 0 }],
          [{ node: 'Respond Rejected', type: 'main', index: 0 }],
        ],
      },
      'Enrich Payload': { main: [[{ node: 'Respond Success', type: 'main', index: 0 }]] },
    },
  },
  null,
  2
);

export function N8nTranspilerPlayground({ locale = 'en' }: { locale?: Locale }) {
  const isEn = locale === 'en';
  const repoUrl = 'https://github.com/rogeriomaciel/n8n-to-fastify';
  const consultHref = isEn ? '/en/about/' : '/pt/sobre/';

  const metrics = isEn
    ? [
        { label: 'Avg HTTP Latency', value: '0.53 ms', sub: 'vs 220ms n8n container' },
        { label: 'Subworkflow Call', value: '< 0.05 ms', sub: 'In-memory, 0 DB locks' },
        { label: 'Throughput', value: '1,885 req/s', sub: 'Single Bun/Fastify worker' },
        { label: 'RAM Footprint', value: '~25 MB', sub: '98% reduction vs n8n' },
      ]
    : [
        { label: 'Latência HTTP Média', value: '0.53 ms', sub: 'vs 220ms container n8n' },
        { label: 'Chamada Subworkflow', value: '< 0.05 ms', sub: 'Em memória, zero lock de banco' },
        { label: 'Vazão (Throughput)', value: '1,885 req/s', sub: 'Worker único Bun/Fastify' },
        { label: 'Consumo de RAM', value: '~25 MB', sub: '98% menor que n8n padrão' },
      ];

  return (
    <section className="py-10 lg:py-14 border-b border-white/[0.08] bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* ADVERTISING / AUTHORITY HERO */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span>OPEN SOURCE AOT COMPILER</span>
            <span>•</span>
            <span>{isEn ? '100% CLIENT-SIDE (PRIVACY FIRST)' : '100% NO NAVEGADOR (PRIVACIDADE TOTAL)'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.12] max-w-4xl">
            {isEn
              ? 'Your n8n Workflows Crashing at 1.2GB RAM? Compile Them to Bare-Metal Fastify in 3ms.'
              : 'Seus Fluxos do n8n Travando em 1.2GB de RAM? Compile para Fastify Bare-Metal em 3ms.'}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {isEn
              ? 'Use n8n as your visual IDE in staging. Paste any exported workflow JSON below to test our Ahead-Of-Time compiler live in your browser — zero data leaves your machine.'
              : 'Use o n8n como sua IDE visual em staging. Cole qualquer JSON exportado do n8n abaixo para testar nosso compilador Ahead-Of-Time ao vivo no navegador — nenhum dado sai da sua máquina.'}
          </p>

          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-bold font-mono transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>{isEn ? '⭐ Star on GitHub' : '⭐ Dar Estrela no GitHub'}</span>
            </a>

            <a
              href="#playground-ide"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-slate-200 text-sm font-mono transition-colors"
            >
              <span>{isEn ? 'Test Live Compiler ↓' : 'Testar Compilador Abaixo ↓'}</span>
            </a>

            <a
              href={consultHref}
              className="inline-flex items-center gap-2 px-4 py-3 text-emerald-400 hover:text-emerald-300 text-sm font-mono transition-colors"
            >
              <span>{isEn ? 'Hire Me for Migration' : 'Contratar Migração Enterprise'}</span>
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* TELEMETRY BENCHMARK STRIP */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="p-4 rounded-xl bg-[#0B101B] border border-white/[0.08] space-y-1"
            >
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                {m.label}
              </div>
              <div className="text-2xl font-bold font-mono text-emerald-400">{m.value}</div>
              <div className="text-xs text-slate-400">{m.sub}</div>
            </div>
          ))}
        </div>

        {/* INTERACTIVE BROWSER PLAYGROUND */}
        <div
          id="playground-ide"
          className="rounded-2xl border border-white/[0.1] bg-[#0B101B] overflow-hidden shadow-2xl"
        >
          {/* Toolbar */}
          <div className="px-4 py-3 border-b border-white/[0.08] bg-[#090D16] flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                id="n2f-btn-example"
                className="px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-mono text-slate-200 transition-colors cursor-pointer"
              >
                {isEn ? 'Load Lead Intake Example' : 'Carregar Exemplo Completo'}
              </button>
              <button
                type="button"
                id="n2f-btn-format"
                className="px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-mono text-slate-200 transition-colors cursor-pointer"
              >
                {isEn ? 'Format JSON' : 'Formatar JSON'}
              </button>
              <span id="n2f-status" className="text-xs font-mono text-emerald-400 ml-2">
                ⚡ {isEn ? 'Initializing compiler...' : 'Inicializando compilador...'}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                data-n2f-tab="workflow"
                className="px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-xs font-mono text-emerald-300 cursor-pointer"
              >
                workflow.ts
              </button>
              <button
                type="button"
                data-n2f-tab="routes"
                className="px-3 py-1.5 rounded-lg bg-transparent border border-white/[0.08] text-xs font-mono text-slate-400 hover:text-white cursor-pointer"
              >
                routes/index.ts
              </button>
              <button
                type="button"
                id="n2f-btn-copy"
                className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold font-mono transition-colors cursor-pointer"
              >
                {isEn ? 'Copy TS' : 'Copiar TS'}
              </button>
              <button
                type="button"
                id="n2f-btn-download"
                className="px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-mono text-slate-200 transition-colors cursor-pointer"
              >
                {isEn ? 'Download .ts' : 'Baixar .ts'}
              </button>
            </div>
          </div>

          {/* Split Screen */}
          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
            <div className="flex flex-col h-[520px]">
              <div className="px-4 py-2 text-[11px] font-mono uppercase tracking-wider text-slate-400 bg-[#07090E] border-b border-white/[0.06] flex justify-between">
                <span>{isEn ? 'Input: n8n Workflow JSON' : 'Entrada: JSON do Workflow n8n'}</span>
                <span>{isEn ? 'Paste any .json' : 'Cole seu .json aqui'}</span>
              </div>
              <textarea
                id="n2f-json-input"
                spellCheck={false}
                defaultValue={SAMPLE_WORKFLOW_JSON}
                className="flex-1 w-full p-4 bg-[#07090E] text-slate-300 font-mono text-xs leading-relaxed resize-none focus:outline-none"
              />
            </div>

            <div className="flex flex-col h-[520px]">
              <div className="px-4 py-2 text-[11px] font-mono uppercase tracking-wider text-slate-400 bg-[#07090E] border-b border-white/[0.06] flex justify-between">
                <span id="n2f-output-label">
                  {isEn ? 'Output: Standalone TypeScript (workflow.ts)' : 'Saída: TypeScript Puro (workflow.ts)'}
                </span>
                <span className="text-emerald-400">&lt; 5ms runtime</span>
              </div>
              <pre
                id="n2f-ts-output"
                className="flex-1 p-4 m-0 overflow-auto bg-[#05070B] text-emerald-300 font-mono text-xs leading-relaxed whitespace-pre-wrap break-words"
              >
                {isEn
                  ? '// Loading TypeScript output...'
                  : '// Carregando saída em TypeScript...'}
              </pre>
            </div>
          </div>

          {/* CLI Promo Bar */}
          <div className="px-4 py-3 border-t border-white/[0.08] bg-[#090D16] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
            <span>
              {isEn
                ? 'Want multi-workflow compilation, in-memory Subworkflow Registry & CI/CD?'
                : 'Quer compilar pastas inteiras com Subworkflows em memória e CI/CD?'}
            </span>
            <code className="px-2.5 py-1 rounded bg-[#07090E] border border-white/[0.08] text-emerald-400">
              git clone {repoUrl}
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}
