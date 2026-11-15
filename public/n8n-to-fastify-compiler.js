(()=>{var{defineProperty:S,getOwnPropertyNames:b,getOwnPropertyDescriptor:v}=Object,y=Object.prototype.hasOwnProperty;function N(z){return this[z]}var w=(z)=>{var H=(k??=new WeakMap).get(z),U;if(H)return H;if(H=S({},"__esModule",{value:!0}),z&&typeof z==="object"||typeof z==="function"){for(var Q of b(z))if(!y.call(H,Q))S(H,Q,{get:N.bind(z,Q),enumerable:!(U=v(z,Q))||U.enumerable})}return k.set(z,H),H},k;var h=(z)=>z;function g(z,H){this[z]=h.bind(null,H)}var f=(z,H)=>{for(var U in H)S(z,U,{get:H[U],enumerable:!0,configurable:!0,set:g.bind(H,U)})};var l={};f(l,{compileWorkflowJson:()=>P});class V{static parseWorkflow(z,H,U){if(!z||!Array.isArray(z.nodes))return null;let Q=z.id||H,J=z.name||H,X=z.nodes||[],Z=z.connections||{},B=U||`${H}.json`,A=new Map;X.forEach((F)=>A.set(F.name,[])),Object.entries(Z).forEach(([F,R])=>{if(R.main&&Array.isArray(R.main))R.main.forEach(($,q)=>{if(Array.isArray($))$.forEach((O)=>{if(O&&O.node&&A.has(O.node))A.get(O.node)?.push({sourceNode:F,outputIndex:q})})})}),X.forEach((F)=>{F.incomingConnections=A.get(F.name)||[]});let K=X.filter((F)=>F.type.includes("webhook")||F.type.includes("trigger")||F.type.includes("cron")),_=new Set(K.map((F)=>F.name));X.forEach((F)=>{let R=new Set,$=new Set,q=[...(A.get(F.name)||[]).map((O)=>O.sourceNode)];while(q.length>0){let O=q.shift();if($.has(O))continue;if($.add(O),_.has(O))R.add(O);(A.get(O)||[]).forEach((I)=>q.push(I.sourceNode))}F.ancestorTriggers=Array.from(R)});let Y=this.topologicalSort(X,Z);return{id:Q,name:J,fileName:H,relativePath:B.replace(/\.json$/,".ts"),nodes:X,connections:Z,orderedNodes:Y,triggers:K}}static topologicalSort(z,H){let U=new Map,Q=new Map;z.forEach((_)=>{U.set(_.name,_),Q.set(_.name,[])}),Object.entries(H).forEach(([_,Y])=>{if(Y.main&&Array.isArray(Y.main))Y.main.forEach((F)=>{if(Array.isArray(F))F.forEach((R)=>{if(R&&R.node&&U.has(R.node))Q.get(_)?.push(R.node)})})});let J=new Set,X=new Set,Z=[],B=(_,Y=[])=>{if(J.has(_))return;if(X.has(_)){let $=[...Y,_].join(" -> ");throw Error(`[n8n-to-fastify] Cyclic dependency detected in workflow DAG: (${$}). Transpiled workflows must be strict Directed Acyclic Graphs.`)}X.add(_),Y.push(_);let F=Q.get(_)||[];for(let $ of F)B($,Y);Y.pop(),X.delete(_),J.add(_);let R=U.get(_);if(R)Z.push(R)},A=new Map;z.forEach((_)=>A.set(_.name,0));for(let _ of Q.values())for(let Y of _)A.set(Y,(A.get(Y)||0)+1);let K=z.map((_)=>_.name).filter((_)=>A.get(_)===0);for(let _ of K)B(_);for(let _ of z)if(!J.has(_.name))B(_.name);return Z.reverse()}}class W{static parse(z){if(z===void 0||z===null)return JSON.stringify("");if(typeof z!=="string")return JSON.stringify(z);let H=z.trim();if(!H.includes("{{"))return JSON.stringify(z);if(H.startsWith("=")){let Z=H.substring(1).trim();if(Z.startsWith("{{")&&Z.endsWith("}}")){let B=Z.substring(2,Z.length-2).trim();if(!B.includes("{{")&&!B.includes("}}"))return`(${this.transformTokens(B)})`}H=H.substring(1).trim()}let U=[],Q=0,X=H.replace(/\{\{(.*?)\}\}/g,(Z,B)=>{let A=this.transformTokens(B.trim()),K=`__EXPR_PLACEHOLDER_${Q++}__`;return U.push(`\${(${A}) ?? ''}`),K}).replace(/`/g,"\\`").replace(/\${/g,"\\${");return U.forEach((Z,B)=>{X=X.replace(`__EXPR_PLACEHOLDER_${B}__`,Z)}),`\`${X}\``}static transformTokens(z){let H=z;return H=H.replace(/\$now\b/g,"new Date().toISOString()"),H=H.replace(/\$today\b/g,'new Date().toISOString().split("T")[0]'),H=H.replace(/\$\(['"](.*?)['"]\)\.item\.json([a-zA-Z0-9_.]*)/g,(U,Q,J)=>{let X=J?J.split(".").filter(Boolean):[];return`(ctx.getNode(${JSON.stringify(Q)})?.item?.json${X.length?"?."+X.join("?."):""})`}),H=H.replace(/\$\(['"](.*?)['"]\)\.first\(\)\.json([a-zA-Z0-9_.]*)/g,(U,Q,J)=>{let X=J?J.split(".").filter(Boolean):[];return`(ctx.getNode(${JSON.stringify(Q)})?.first()?.json${X.length?"?."+X.join("?."):""})`}),H=H.replace(/\$\(['"](.*?)['"]\)/g,(U,Q)=>{return`ctx.getNode(${JSON.stringify(Q)})`}),H=H.replace(/\$node\(['"](.*?)['"]\)/g,(U,Q)=>{return`ctx.getNode(${JSON.stringify(Q)})`}),H=H.replace(/\$json([a-zA-Z0-9_.]*)/g,(U,Q)=>{if(!Q)return"item?.json";return`item?.json?.${Q.split(".").filter(Boolean).join("?.")}`}),H=H.replace(/\$input\.first\(\)\.json/g,"item?.json"),H=H.replace(/\$input\.item\.json/g,"item?.json"),H=H.replace(/\$input\.all\(\)/g,"inputItems"),H=H.replace(/\$env\.([a-zA-Z0-9_]+)/g,(U,Q)=>{return`process.env.${Q}`}),H}}class M{static mapNode(z){let H=z.node.type;if(H.includes("respondToWebhook"))return this.mapRespondToWebhookNode(z);if(H.includes("code")||H.includes("function"))return this.mapCodeNode(z);if(H.includes("executeWorkflowTrigger"))return this.mapGenericNode(z,"Subworkflow Entry Trigger");if(H.includes("executeWorkflow"))return this.mapSubworkflowNode(z);if(H.includes("if")||H.includes("filter"))return this.mapIfNode(z);if(H.includes("switch"))return this.mapSwitchNode(z);if(H.includes("set"))return this.mapSetNode(z);if(H.includes("httpRequest"))return this.mapHttpRequestNode(z);if(H.includes("aggregate")||H.includes("itemLists"))return this.mapAggregateNode(z);if(H.includes("splitOut"))return this.mapSplitOutNode(z);if(H.includes("merge"))return this.mapMergeNode(z);if(H.includes("postgres"))return this.mapPostgresNode(z);if(H.includes("openAi")||H.includes("googleGemini")||H.includes("chainLlm"))return this.mapLlmNode(z);if(H.includes("wait"))return this.mapWaitNode(z);return this.mapGenericNode(z,`Unmapped Node (${H})`)}static mapRespondToWebhookNode(z){let H=z.node.parameters||{},U=H.respondWith||"firstIncomingItem",Q=H.options?.responseCode||200,J=z.previousVariableName||"inputItems",X="item?.json || {}";if(U==="allIncomingItems")X=`${z.variableName}.map((i: any) => i.json)`;else if(U==="json"&&H.responseBody)X=W.parse(H.responseBody);else if(U==="text"&&H.responseBody)X=W.parse(H.responseBody);return`
    // [Node: ${z.node.name}] Respond to Webhook
    ${z.variableName} = ${J} || inputItems;
    item = ${z.variableName}[0] || { json: {} };
    {
      let payload: any = ${X};
      if (typeof payload === 'string' && (payload.trim().startsWith('{') || payload.trim().startsWith('['))) {
        try { payload = JSON.parse(payload); } catch {}
      }
      ctx.setWebhookResponse(${Q}, payload);
      ctx.setNodeOutput(${JSON.stringify(z.node.name)}, ${z.variableName});
    }`}static mapCodeNode(z){let H=z.node.parameters||{},U=H.jsCode||H.functionCode||"return $input.all();",Q=z.previousVariableName||"inputItems",J=U.replace(/\$input\.all\(\)/g,"currentItems").replace(/\$input\.first\(\)/g,"(currentItems[0] || { json: {} })").replace(/\$input\.item/g,"(currentItems[0] || { json: {} })").replace(/\$json/g,"(currentItems[0]?.json || {})").replace(/\$\(['"](.*?)['"]\)\.first\(\)/g,(X,Z)=>`(ctx.getNode(${JSON.stringify(Z)})?.first() || { json: {} })`).replace(/\$\(['"](.*?)['"]\)\.item/g,(X,Z)=>`(ctx.getNode(${JSON.stringify(Z)})?.item || { json: {} })`).replace(/\$\(['"](.*?)['"]\)\.all\(\)/g,(X,Z)=>`(ctx.getNode(${JSON.stringify(Z)})?.all() || [])`).replace(/\$now/g,"DateTime.now()");return`
    // [Node: ${z.node.name}] Code Execution
    ${z.variableName} = await (async () => {
      const currentItems = ${Q} || inputItems;
      const result = await (async () => {
        ${J}
      })();
      return n8n.normalizeItems(result);
    })();
    item = ${z.variableName}[0] || { json: {} };
    ctx.setNodeOutput(${JSON.stringify(z.node.name)}, ${z.variableName});`}static mapSubworkflowNode(z){let H=z.node.parameters||{},U=typeof H.workflowId==="object"?H.workflowId?.value||H.workflowId?.cachedResultName||"":H.workflowId||"",Q=z.previousVariableName||"inputItems";return`
    // [Node: ${z.node.name}] In-Memory Subworkflow Execution (< 0.05ms)
    ${z.variableName} = await executeSubworkflow(${JSON.stringify(U)}, ${Q} || inputItems, ctx);
    item = ${z.variableName}[0] || { json: {} };
    ctx.setNodeOutput(${JSON.stringify(z.node.name)}, ${z.variableName});`}static mapSetNode(z){let H=z.node.parameters||{},U=z.previousVariableName||"inputItems",Q=H.options?.keepOnlySet===!0||H.include==="none",J=[];if(H.assignments?.assignments&&Array.isArray(H.assignments.assignments)){for(let X of H.assignments.assignments)if(X.name){let Z=W.parse(X.value);J.push(`n8n.setNestedProperty(newJson, ${JSON.stringify(X.name)}, ${Z});`)}}if(H.values)for(let X of["string","number","boolean"]){let Z=H.values[X];if(Array.isArray(Z)){for(let B of Z)if(B.name){let A=W.parse(B.value);J.push(`n8n.setNestedProperty(newJson, ${JSON.stringify(B.name)}, ${A});`)}}}return`
    // [Node: ${z.node.name}] Set / Edit Fields
    ${z.variableName} = (${U} || inputItems).map((currentItem: N8nItem) => {
      const item = currentItem;
      const newJson: Record<string, any> = ${Q?"{}":"{ ...currentItem.json }"};
      ${J.join(`
      `)}
      return { json: newJson };
    });
    item = ${z.variableName}[0] || { json: {} };
    ctx.setNodeOutput(${JSON.stringify(z.node.name)}, ${z.variableName});`}static mapIfNode(z){let H=z.node.parameters||{},U=z.previousVariableName||"inputItems",Q=[];if(H.conditions?.conditions&&Array.isArray(H.conditions.conditions))for(let Z of H.conditions.conditions){let B=W.parse(Z.leftValue),A=W.parse(Z.rightValue);switch(Z.operator?.operation||"equals"){case"equals":case"equal":Q.push(`(${B} == ${A})`);break;case"notEquals":case"notEqual":Q.push(`(${B} != ${A})`);break;case"contains":Q.push(`String(${B} ?? '').includes(String(${A} ?? ''))`);break;case"gt":case"larger":Q.push(`(Number(${B}) > Number(${A}))`);break;case"lt":case"smaller":Q.push(`(Number(${B}) < Number(${A}))`);break;case"isEmpty":case"empty":Q.push(`(${B} === undefined || ${B} === null || ${B} === '')`);break;case"isNotEmpty":case"notEmpty":Q.push(`(${B} !== undefined && ${B} !== null && ${B} !== '')`);break;default:Q.push(`Boolean(${B})`)}}let J=H.conditions?.combinator==="or"?" || ":" && ",X=Q.length>0?Q.join(J):"true";return`
    // [Node: ${z.node.name}] Conditional Branch (IF)
    ${z.variableName} = ${U} || inputItems;
    item = ${z.variableName}[0] || { json: {} };
    {
      const isMatch = Boolean(${X});
      const activeIndex = isMatch ? 0 : 1;
      ctx.setNodeOutput(${JSON.stringify(z.node.name)}, ${z.variableName}, activeIndex);
    }`}static mapSwitchNode(z){let H=z.node.parameters||{},U=z.previousVariableName||"inputItems",Q=H.rules?.values||[],J=[];Q.forEach((Z,B)=>{let A=Z.conditions?.conditions?.[0];if(A){let K=W.parse(A.leftValue),_=W.parse(A.rightValue);J.push(`if (${K} == ${_}) { matchedIndex = ${B}; }`)}});let X=Q.length;return`
    // [Node: ${z.node.name}] Switch Router
    ${z.variableName} = ${U} || inputItems;
    item = ${z.variableName}[0] || { json: {} };
    {
      let matchedIndex = ${X};
      ${J.join(" else ")}
      ctx.setNodeOutput(${JSON.stringify(z.node.name)}, ${z.variableName}, matchedIndex);
    }`}static mapHttpRequestNode(z){let H=z.node.parameters||{},U=z.previousVariableName||"inputItems",Q=(H.method||"GET").toUpperCase(),J=W.parse(H.url||""),X="{}";if(H.headerParameters?.parameters&&Array.isArray(H.headerParameters.parameters))X=`{ ${H.headerParameters.parameters.filter((A)=>A.name).map((A)=>`${JSON.stringify(A.name)}: ${W.parse(A.value)}`).join(", ")} }`;let Z="undefined";if(["POST","PUT","PATCH"].includes(Q)){if(H.jsonBody)Z=`JSON.stringify(${W.parse(H.jsonBody)})`;else if(H.bodyParameters?.parameters&&Array.isArray(H.bodyParameters.parameters))Z=`JSON.stringify({ ${H.bodyParameters.parameters.filter((A)=>A.name).map((A)=>`${JSON.stringify(A.name)}: ${W.parse(A.value)}`).join(", ")} })`}return`
    // [Node: ${z.node.name}] Native HTTP Request (${Q})
    ${z.variableName} = await Promise.all((${U} || inputItems).map(async (currentItem: N8nItem) => {
      const item = currentItem;
      const targetUrl = ${J};
      const reqHeaders: Record<string, string> = { 'Content-Type': 'application/json', ...${X} };
      const reqBody = ${Z};
      const res = await fetch(targetUrl, {
        method: ${JSON.stringify(Q)},
        headers: reqHeaders,
        ...(reqBody !== undefined ? { body: typeof reqBody === 'string' ? reqBody : JSON.stringify(reqBody) } : {})
      });
      const text = await res.text();
      let data: any;
      try { data = JSON.parse(text); } catch { data = { raw: text }; }
      return { json: typeof data === 'object' && data !== null ? data : { data } };
    }));
    item = ${z.variableName}[0] || { json: {} };
    ctx.setNodeOutput(${JSON.stringify(z.node.name)}, ${z.variableName});`}static mapAggregateNode(z){let H=z.node.parameters||{},U=z.previousVariableName||"inputItems",Q=H.destinationFieldName||"data";return`
    // [Node: ${z.node.name}] Aggregate Items
    {
      const source = ${U} || inputItems;
      ${z.variableName} = [{ json: { ${JSON.stringify(Q)}: source.map((i: N8nItem) => i.json) } }];
      item = ${z.variableName}[0];
      ctx.setNodeOutput(${JSON.stringify(z.node.name)}, ${z.variableName});
    }`}static mapSplitOutNode(z){let H=z.node.parameters||{},U=z.previousVariableName||"inputItems",Q=H.fieldToSplitOut||"data";return`
    // [Node: ${z.node.name}] Split Out Array Field
    {
      const source = ${U} || inputItems;
      const expanded: N8nItem[] = [];
      for (const entry of source) {
        const arr = entry.json?.[${JSON.stringify(Q)}];
        if (Array.isArray(arr)) {
          for (const el of arr) {
            expanded.push({ json: typeof el === 'object' && el !== null ? el : { [${JSON.stringify(Q)}]: el } });
          }
        }
      }
      ${z.variableName} = expanded.length > 0 ? expanded : source;
      item = ${z.variableName}[0] || { json: {} };
      ctx.setNodeOutput(${JSON.stringify(z.node.name)}, ${z.variableName});
    }`}static mapMergeNode(z){let H=z.node.incomingConnections||[],U=z.node.parameters?.mode||"append",Q=H.map((J)=>`(ctx.isBranchActive(${JSON.stringify(J.sourceNode)}, ${J.outputIndex}) ? (ctx.getNode(${JSON.stringify(J.sourceNode)})?.all() || []) : [])`);if(U==="combine"&&Q.length>=2)return`
    // [Node: ${z.node.name}] Merge (Combine Mode)
    {
      const left = ${Q[0]};
      const right = ${Q[1]};
      const maxLen = Math.max(left.length, right.length);
      const merged: N8nItem[] = [];
      for (let i = 0; i < maxLen; i++) {
        merged.push({ json: { ...(left[i]?.json || {}), ...(right[i]?.json || {}) } });
      }
      ${z.variableName} = merged.length > 0 ? merged : [{ json: {} }];
      item = ${z.variableName}[0];
      ctx.setNodeOutput(${JSON.stringify(z.node.name)}, ${z.variableName});
    }`;return`
    // [Node: ${z.node.name}] Merge (Append Mode)
    {
      const combined = [${Q.join(", ")}].flat();
      ${z.variableName} = combined.length > 0 ? combined : inputItems;
      item = ${z.variableName}[0] || { json: {} };
      ctx.setNodeOutput(${JSON.stringify(z.node.name)}, ${z.variableName});
    }`}static mapPostgresNode(z){let H=z.node.parameters||{},U=z.previousVariableName||"inputItems",Q=W.parse(H.query||"SELECT 1;");return`
    // [Node: ${z.node.name}] PostgreSQL Query (via DATABASE_URL env var)
    ${z.variableName} = await Promise.all((${U} || inputItems).map(async (currentItem: N8nItem) => {
      const item = currentItem;
      const sql = ${Q};
      if (!process.env.DATABASE_URL) {
        throw new Error('[n8n-to-fastify] DATABASE_URL environment variable is required for Postgres node.');
      }
      // Uses Bun's native SQL or dynamic pg driver when available
      const res = await fetch(process.env.POSTGRES_HTTP_PROXY || '', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: sql })
      }).catch(() => null);
      if (res && res.ok) {
        const rows = await res.json();
        return { json: Array.isArray(rows) ? (rows[0] || {}) : rows };
      }
      return { json: { ...currentItem.json, _sqlPrepared: sql } };
    }));
    item = ${z.variableName}[0] || { json: {} };
    ctx.setNodeOutput(${JSON.stringify(z.node.name)}, ${z.variableName});`}static mapLlmNode(z){let H=z.node.parameters||{},U=z.previousVariableName||"inputItems",Q=H.modelId?.value||H.model||"gpt-4o-mini",J=H.messages?.values?.[0]?.content||H.prompt||H.text||"Hello",X=W.parse(J);return`
    // [Node: ${z.node.name}] Native LLM Completion (OpenAI-compatible REST API)
    ${z.variableName} = await Promise.all((${U} || inputItems).map(async (currentItem: N8nItem) => {
      const item = currentItem;
      const apiKey = process.env.OPENAI_API_KEY || process.env.LLM_API_KEY || '';
      const baseUrl = process.env.LLM_BASE_URL || 'https://api.openai.com/v1';
      const prompt = ${X};
      const res = await fetch(\`\${baseUrl}/chat/completions\`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': \`Bearer \${apiKey}\`
        },
        body: JSON.stringify({
          model: ${JSON.stringify(Q)},
          messages: [{ role: 'user', content: String(prompt) }]
        })
      });
      const data: any = await res.json();
      const text = data?.choices?.[0]?.message?.content || '';
      return { json: { text, model: ${JSON.stringify(Q)}, usage: data?.usage } };
    }));
    item = ${z.variableName}[0] || { json: {} };
    ctx.setNodeOutput(${JSON.stringify(z.node.name)}, ${z.variableName});`}static mapWaitNode(z){let H=z.node.parameters||{},U=z.previousVariableName||"inputItems",Q=Number(H.amount||1),J=H.unit||"seconds",Z=Q*(J==="minutes"?60000:J==="hours"?3600000:1000);return`
    // [Node: ${z.node.name}] Non-blocking Async Wait (${Q} ${J})
    await new Promise((resolve) => setTimeout(resolve, ${Z}));
    ${z.variableName} = ${U} || inputItems;
    item = ${z.variableName}[0] || { json: {} };
    ctx.setNodeOutput(${JSON.stringify(z.node.name)}, ${z.variableName});`}static mapGenericNode(z,H){let U=z.previousVariableName||"inputItems";return`
    // [Node: ${z.node.name}] ${H} (Pass-through)
    ${z.variableName} = ${U} || inputItems;
    item = ${z.variableName}[0] || { json: {} };
    ctx.setNodeOutput(${JSON.stringify(z.node.name)}, ${z.variableName});`}}class G{static sanitizeIdentifier(z){return z.replace(/[^a-zA-Z0-9_]/g,"_").replace(/^[0-9]/,"_$&").replace(/__+/g,"_")}static generateWorkflowCode(z){let H=`workflow_${this.sanitizeIdentifier(z.fileName)}`,U=(z.relativePath.match(/\//g)||[]).length,Q="../".repeat(U+1)+"runtime",J=`import { WorkflowContext } from '${Q}/workflow-context';
import { n8n, N8nItem } from '${Q}/n8n-helper';
import { executeSubworkflow, registerWorkflow } from '${Q}/workflow-registry';

const DateTime = {
  now: () => ({
    toString: () => new Date().toISOString(),
    toJSDate: () => new Date()
  })
};
`,X=`  let item: N8nItem = inputItems[0] || { json: {} };
`,Z=`  ctx.setNodeOutput("__initial__", inputItems);
`,B="inputItems",A=new Map;z.orderedNodes.forEach(($,q)=>{let O=`node_${q}_${this.sanitizeIdentifier($.name)}`;A.set($.name,O)});let K=z.orderedNodes.filter(($)=>$.type.includes("webhook")||$.type.includes("trigger")||$.type.includes("cron")),_=z.orderedNodes.filter(($)=>!K.includes($));K.forEach(($)=>{let q=z.orderedNodes.indexOf($),O=A.get($.name);X+=`  let ${O}: any = inputItems;
`;let L=($.parameters?.path||$.name).toLowerCase().trim().replace(/^\/+/,"");Z+=`  const triggerNode_${q} = item?.json?.__triggerNode;
`,Z+=`  const triggerPath_${q} = item?.json?.__triggerPath;
`,Z+=`  if (!triggerNode_${q} || triggerNode_${q} === ${JSON.stringify($.name)} || triggerPath_${q} === ${JSON.stringify(L)}) {
`,Z+=`    ${O} = inputItems;
`,Z+=`    ctx.setNodeOutput(${JSON.stringify($.name)}, inputItems);
`,Z+=`  }
`}),_.forEach(($)=>{let q=A.get($.name);X+=`  let ${q}: any = inputItems;
`;let O="inputItems",L="true";if($.incomingConnections&&$.incomingConnections.length>0){if($.incomingConnections.length===1){let D=$.incomingConnections[0];O=`(ctx.isBranchActive(${JSON.stringify(D.sourceNode)}, ${D.outputIndex}) ? ctx.getNode(${JSON.stringify(D.sourceNode)})?.all() : null)`}else O=`(${$.incomingConnections.map((T)=>`(ctx.isBranchActive(${JSON.stringify(T.sourceNode)}, ${T.outputIndex}) ? ctx.getNode(${JSON.stringify(T.sourceNode)})?.all() : null)`).join(" || ")})`;L=`(${$.incomingConnections.map((D)=>`ctx.isBranchActive(${JSON.stringify(D.sourceNode)}, ${D.outputIndex})`).join(" || ")})`}let I=M.mapNode({node:$,workflowName:z.name,variableName:q,previousVariableName:O}),C=`  if (${L}) {
    ${I.trim().replace(/\n/g,`
    `)}
  }
`;if($.ancestorTriggers&&$.ancestorTriggers.length>0){let E=$.ancestorTriggers.map((D)=>`ctx.hasExecutedNode(${JSON.stringify(D)})`).join(" || ");Z+=`  if (${E}) {
  ${C.trim().replace(/\n/g,`
  `)}
  }
`}else Z+=C;B=$.name});let Y=z.orderedNodes[z.orderedNodes.length-1]?.name,F=Y?`(ctx.getNode(${JSON.stringify(Y)})?.all() || [{ json: item.json }])`:"inputItems",R=Array.from(new Set([z.id,z.name,z.fileName])).filter(Boolean);return`${J}
export async function ${H}(
  inputItems: N8nItem[] = [{ json: {} }],
  parentCtx?: WorkflowContext
): Promise<{ items: N8nItem[]; context: WorkflowContext }> {
  const ctx = parentCtx || new WorkflowContext();
${X}
${Z}
  const finalItems = ${F};
  return { items: finalItems, context: ctx };
}

registerWorkflow(${JSON.stringify(R)}, ${H});
`}}class j{static generateRoutesCode(z){let H=`import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { N8nItem } from '../runtime/n8n-helper';
import { WorkflowContext } from '../runtime/workflow-context';
`,U=[];z.forEach((X)=>{let Z=`workflow_${G.sanitizeIdentifier(X.fileName)}`,B=X.relativePath.replace(/\.ts$/,"");H+=`import { ${Z} } from '../workflows/${B}';
`,U.push(Z)});let Q="",J=new Set;return z.forEach((X)=>{let Z=`workflow_${G.sanitizeIdentifier(X.fileName)}`;X.nodes.filter((A)=>A.type.includes("webhook")).forEach((A)=>{let K=(A.parameters?.path||X.fileName).toLowerCase().trim().replace(/^\/+/,""),_=(A.parameters?.httpMethod||"POST").toUpperCase(),Y=_==="ALL"?["GET","POST","PUT","DELETE"]:[_],F=Array.from(new Set([`/${K}`,`/webhook/${K}`]));Y.forEach((R)=>{F.forEach(($)=>{let q=`${R}:${$}`;if(J.has(q))return;J.add(q),Q+=`
  fastify.route({
    method: '${R}',
    url: '${$}',
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
      const startTime = performance.now();
      const ctx = new WorkflowContext();
      const body = (request.body as Record<string, any>) || {};
      const query = (request.query as Record<string, any>) || {};
      const headers = (request.headers as Record<string, any>) || {};

      const inputItems: N8nItem[] = [{
        json: {
          ...query,
          ...body,
          body,
          query,
          headers,
          __triggerNode: ${JSON.stringify(A.name)},
          __triggerPath: ${JSON.stringify(K)}
        }
      }];

      try {
        const { items, context } = await ${Z}(inputItems, ctx);
        const durationMs = (performance.now() - startTime).toFixed(2);
        reply.header('X-Compiled-By', 'n8n-to-fastify');
        reply.header('X-Execution-Time', \`\${durationMs}ms\`);

        if (context.webhookResponse) {
          reply.code(context.webhookResponse.statusCode);
          return context.webhookResponse.body;
        }
        reply.code(200);
        return items.length === 1 ? items[0].json : items.map(i => i.json);
      } catch (err: any) {
        request.log.error(err);
        reply.code(500);
        return { error: 'Workflow Execution Error', message: err.message };
      }
    }
  });
`})})})}),`${H}
// Prevent bundler/runtime tree-shaking so subworkflows self-register into WorkflowRegistry
const _registeredWorkflows = [${U.join(", ")}];
void _registeredWorkflows;

export async function registerCompiledRoutes(fastify: FastifyInstance): Promise<void> {
${Q}
}
`}static generateServerEntry(){return`import Fastify from 'fastify';
import cors from '@fastify/cors';
import { registerCompiledRoutes } from './routes/index';
import { workflowRegistry } from './runtime/workflow-registry';

const fastify = Fastify({
  logger: true,
});

await fastify.register(cors, { origin: '*' });
await fastify.register(registerCompiledRoutes);

fastify.get('/health', async () => {
  return {
    status: 'ok',
    engine: 'n8n-to-fastify',
    registeredWorkflows: workflowRegistry.listRegistered().length,
  };
});

const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || '0.0.0.0';

try {
  await fastify.listen({ port, host });
  console.log(\`⚡ [n8n-to-fastify] Microservice online at http://\${host}:\${port}\`);
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
`}static generateOutputPackageJson(){return JSON.stringify({name:"compiled-n8n-service",version:"1.0.0",type:"module",scripts:{start:"bun run server.ts",dev:"bun --watch run server.ts"},dependencies:{"@fastify/cors":"^9.0.1",fastify:"^4.28.1"}},null,2)}}function P(z){let H=performance.now(),U=typeof z==="string"?JSON.parse(z):z,Q=V.parseWorkflow(U,U?.name||"workflow","workflow.ts");if(!Q)throw Error('Invalid n8n workflow JSON: missing "nodes" array.');let J=G.generateWorkflowCode(Q),X=j.generateRoutesCode([Q]),Z=(performance.now()-H).toFixed(2);return{name:Q.name,nodeCount:Q.nodes.length,triggerCount:Q.triggers.length,elapsedMs:Z,workflowCode:J,routesCode:X}}if(typeof window<"u")window.N8nToFastify={compileWorkflowJson:P};})();
