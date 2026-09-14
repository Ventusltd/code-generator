// Code generator — build an app from blocks of the periodic table (or from numbered families).
//   node generate.mjs --name substation-finder --blocks Si,Vn,Ug,Ps,Dt [--title "Substation finder"]
//   node generate.mjs --name geodesy --families 511,8770
// A block's files are copied exactly from GitHub at the commit the modular star recorded, one file per source
// lineage (the newest version). Nothing is invented: what the app still needs from its surroundings is listed.
// Output: apps/<name>/ (the files under <symbol>/, index.html, REPORT.md, WORK-ORDERS.md, parts.json),
// requests/<name>-<n>.json (one work order each, for the agents) and the Spider graph of all apps.
import { mkdirSync, writeFileSync, readdirSync, readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { classify, inferType, usageIn, PLAIN, LIBRARIES } from './rules.mjs';

const STARS = 'https://ventusltd.github.io/stars/';
const SITE = 'https://ventusltd.github.io/code-generator/';
const REPO = 'Ventusltd/code-generator';
const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i > 0 ? process.argv[i + 1] : d; };
const name = arg('name'), title = arg('title', arg('name'));
if (!name || !/^[a-z0-9][a-z0-9-]{0,40}$/.test(name)) { console.error('--name: lowercase letters, digits and hyphens'); process.exit(2); }
const blockSyms = String(arg('blocks', '')).split(/[\s,]+/).filter(Boolean);
const familyNums = [...new Set(String(arg('families', '')).split(/[\s,]+/).filter(Boolean).map(Number))];
if (!blockSyms.length && !familyNums.length) { console.error('give --blocks or --families'); process.exit(2); }

const getJson = async u => { const r = await fetch(u); if (!r.ok) throw new Error(`${u} ${r.status}`); return r.json(); };
const rawUrl = p => `https://raw.githubusercontent.com/${p.repo}/${p.commit}/${p.path.split('/').map(encodeURIComponent).join('/')}`;
const ghUrl = p => `https://github.com/${p.repo}/blob/${p.commit}/${p.path.split('/').map(encodeURIComponent).join('/')}`;
const table = await getJson(STARS + 'blocks/blocks.json');
const index = await getJson(STARS + 'code/index.json');
const reactions = await getJson(STARS + 'blocks/reactions.json').catch(() => ({ reactions: [] }));
const buckets = new Map();
const family = async n => { const b = Math.floor(n / index.bucket_size); if (!buckets.has(b)) buckets.set(b, getJson(`${STARS}code/f/${b}.json`).catch(() => ({}))); return (await buckets.get(b))[n] || null; };
// Decision records from the stars repository: judgement with permanent keys. Linked, never restated.
const decisionsAll = await (async () => { try { const g = await getJson(STARS + 'decisions/graph.json'); const ids = g.nodes.filter(n => n.type === 'decision').map(n => n.id.replace(/^decision:/, '')); return (await Promise.all(ids.map(id => getJson(`${STARS}decisions/${id}.json`).catch(() => null)))).filter(Boolean); } catch { return []; } })();
const decisionUrl = d => `https://github.com/Ventusltd/stars/blob/main/decisions/${d.id}.json`;

const stamp = new Date().toISOString();
const dir = path.join('apps', name);
mkdirSync(dir, { recursive: true });
const parts = [], missing = [];

// ---- blocks: copy each block's files whole
for (const sym of blockSyms) {
  const b = table.blocks.find(x => x.symbol === sym);
  if (!b) { missing.push(sym); continue; }
  const copied = [];
  for (const f of b.files) {
    try {
      const r = await fetch(rawUrl(f)); if (!r.ok) throw new Error(r.status);
      const text = await r.text();
      const target = path.join(dir, b.symbol, path.basename(f.path));
      mkdirSync(path.dirname(target), { recursive: true });
      writeFileSync(target, text);
      copied.push({ ...f, saved: path.relative(dir, target).replace(/\\/g, '/'), link: ghUrl(f), text });
    } catch (e) { copied.push({ ...f, saved: null, error: String(e.message).slice(0, 80) }); }
  }
  parts.push({ kind: 'block', symbol: b.symbol, number: b.number, title: b.title, description: b.description, category: b.category, functions: b.functions, needs: b.needs, inside: b.inside.slice(0, 20), files: copied, repos: b.repos, depends_on: b.depends_on || [] });
}
// ---- families: copy single functions (the older route)
for (const n of familyNums) {
  const f = await family(n); if (!f) { missing.push(String(n)); continue; }
  const p = f.places[0];
  try {
    const r = await fetch(rawUrl(p)); if (!r.ok) throw new Error(r.status);
    const lines = (await r.text()).split('\n').slice(p.first - 1, p.last);
    const target = path.join(dir, 'functions', `${n}-${f.names[0].replace(/[^A-Za-z0-9_$]/g, '_')}${/\.py$/i.test(p.path) ? '.py' : '.mjs'}`);
    mkdirSync(path.dirname(target), { recursive: true });
    const text = `// family #${n} ${f.names[0]} · ${ghUrl(p)}#L${p.first}-L${p.last}\n${lines.join('\n')}\n`;
    writeFileSync(target, text);
    parts.push({ kind: 'family', family: n, title: f.names[0], description: `Function ${f.names[0]}, used in ${f.places.length} place(s).`, functions: 1, needs: (f.needs || []).map(x => ({ name: x, meaning: x })), inside: [{ family: n, name: f.names[0] }], files: [{ ...p, saved: path.relative(dir, target).replace(/\\/g, '/'), link: `${ghUrl(p)}#L${p.first}-L${p.last}`, text }], repos: f.repos, lines: f.lines, depends_on: [] });
  } catch (e) { missing.push(String(n)); }
}
if (missing.length) console.log(`Not found or not fetchable: ${missing.join(', ')}`);
if (!parts.length) { console.error('Nothing to generate.'); process.exit(1); }

// ---- needs: every name used but not defined by the chosen parts, sorted by what to do about it
const have = new Set(parts.flatMap(p => p.inside.map(f => f.name)));
const chosenSyms = new Set(parts.filter(p => p.symbol).map(p => p.symbol));
const definers = nm => table.blocks.filter(b => !chosenSyms.has(b.symbol) && b.kind !== 'auto' && b.inside.some(f => f.name === nm)).map(b => ({ symbol: b.symbol, title: b.title }));
const needs = [];
for (const n of [...new Map(parts.flatMap(p => p.needs).filter(n => !have.has(n.name)).map(n => [n.name, n])).values()]) {
  const users = parts.filter(p => p.needs.some(x => x.name === n.name));
  const where = [];
  let usage = null;
  for (const p of users) for (const f of p.files) {
    if (!f.text) continue;
    const u = usageIn(n.name, f.text, /\.py$/i.test(f.path));
    if (!u) continue;
    if (!u.used) { usage = usage || { used: false, mentioned: true }; continue; }
    where.push({ symbol: p.symbol || null, family: p.family || null, repo: f.repo, commit: f.commit, path: f.path, saved: f.saved, line: u.line, link: `${f.link.split('#')[0]}#L${u.line}` });
    usage = usage?.used ? { used: true, declared: usage.declared || u.declared, how: usage.how === 'value' ? u.how : usage.how } : u;
  }
  if (!usage) usage = { used: false, mentioned: false };
  const defs = definers(n.name);
  const kind = classify(n.name, { definers: defs, usage });
  const decisions = kind === 'word' || kind === 'browser' || kind === 'node' || /^[a-z]+$/.test(n.name) ? [] : decisionsAll.filter(d => new RegExp(`(?<![\\w$])${n.name.replace(/[$]/g, '\\$')}(?![\\w$])`).test([d.question, d.rationale, ...(d.evidence || [])].join(' ')) || (n.meaning.match(/\b([A-Z][a-z]?)'s neighbour/) && [d.subject.key, ...(d.also || [])].includes('block:' + n.meaning.match(/\b([A-Z][a-z]?)'s neighbour/)[1])));
  needs.push({ name: n.name, meaning: n.meaning, kind, plain: PLAIN[kind], type: kind === 'missing' || kind === 'library' ? inferType(n.name, usage.how) : null, defined_by: defs, used_by: users.map(p => p.symbol || `#${p.family}`), where: where.slice(0, 12), decisions: decisions.map(d => ({ id: d.id, key: d.subject.key, status: d.status, question: d.question, url: decisionUrl(d) })) });
}
const order = { missing: 0, library: 1, block: 2, defined: 3, browser: 4, node: 5, absent: 6, word: 7 };
needs.sort((a, b) => order[a.kind] - order[b.kind] || a.name.localeCompare(b.name));
const toWrite = needs.filter(n => n.kind === 'missing' || n.kind === 'library');

// ---- chemistry: block pairs the table has no evidence for
const pairs = [];
const syms = parts.filter(p => p.symbol).map(p => p.symbol);
for (let i = 0; i < syms.length; i++) for (let j = i + 1; j < syms.length; j++) {
  const r = reactions.reactions.find(x => (x.a === syms[i] && x.b === syms[j]) || (x.a === syms[j] && x.b === syms[i]));
  pairs.push(r ? { a: syms[i], b: syms[j], verdict: r.verdict, probability: r.probability, basis: r.basis } : { a: syms[i], b: syms[j], verdict: 'untested', probability: 0.25, basis: 'no evidence either way' });
}
const untested = pairs.filter(p => p.verdict === 'untested' || p.verdict === 'fails');

// ---- open decisions on the chosen blocks, by key
const blockDecisions = decisionsAll.filter(d => d.status === 'open' && [d.subject.key, ...(d.also || [])].some(k => k.split('+').some(s => chosenSyms.has(s.replace(/^block:/, '')))));

// ---- load order: a block's dependencies (among the chosen) load before it; the rest keep the order given
const bySym = new Map(parts.filter(p => p.symbol).map(p => [p.symbol, p]));
const ordered = [], placed = new Set();
const place = (p, trail = []) => { if (!p || placed.has(p.symbol || p.family)) return; if (trail.includes(p)) return; for (const d of p.depends_on || []) if (bySym.has(d.symbol)) place(bySym.get(d.symbol), [...trail, p]); placed.add(p.symbol || p.family); ordered.push(p); };
for (const p of parts) place(p);
const loadKind = f => /\.mjs$/i.test(f) ? 'module' : /\.js$/i.test(f) ? 'script' : /\.py$/i.test(f) ? 'python' : /\.html?$/i.test(f) ? 'page' : 'other';
const seenSaved = new Set();
const plan = ordered.flatMap(p => p.files.filter(f => f.saved && !seenSaved.has(f.saved) && seenSaved.add(f.saved)).map(f => ({ part: p.symbol || `#${p.family}`, title: p.title, saved: f.saved, kind: loadKind(f.saved), load: /^(module|script)$/.test(loadKind(f.saved)), source: f.link, after: (p.depends_on || []).filter(d => bySym.has(d.symbol)).map(d => d.symbol) })));

// ---- work orders: one per missing need and one per untested pair; numbers are kept across re-runs by key
mkdirSync('requests', { recursive: true });
const existing = readdirSync('requests').filter(f => f.startsWith(name + '-') && f.endsWith('.json')).map(f => { try { return JSON.parse(readFileSync(path.join('requests', f), 'utf8')); } catch { return null; } }).filter(x => x && x.key);
let next = existing.reduce((m, r) => Math.max(m, Number(String(r.id).slice(name.length + 1)) || 0), 0) + 1;
const orders = [];
const fileAt = w => `${w.repo}/${w.path}@${w.commit.slice(0, 7)}:${w.line}`;
for (const n of toWrite) {
  const key = `need:${n.name}`; const prior = existing.find(r => r.key === key);
  const id = prior ? prior.id : `${name}-${next++}`;
  const blocks = n.used_by.map(s => bySym.get(s)).filter(Boolean).map(b => ({ symbol: b.symbol, number: b.number, title: b.title }));
  const where = n.where.map(w => ({ repo: w.repo, commit: w.commit, path: w.path, line: w.line, link: w.link, saved: w.saved }));
  const isLib = n.kind === 'library';
  const brief = isLib
    ? `The app ${name} uses the library global \`${n.name}\` (${LIBRARIES[n.name]}) in ${blocks.map(b => b.symbol).join(', ') || n.used_by.join(', ')}, first at ${where[0] ? fileAt(where[0]) : 'an unknown line'}. Decide which version the app should load and add one script tag for it to apps/${name}/index.html before the parts; record the version and its source URL in this request. Nothing in the copied files may change.`
    : `The app ${name} uses \`${n.name}\` (${n.type}; ${n.meaning}) in ${blocks.map(b => `${b.symbol} ${b.title}`).join(', ') || n.used_by.join(', ')}, first at ${where[0] ? fileAt(where[0]) : 'an unknown line'}, and nothing in the table defines it. Read the ${where.length} place${where.length === 1 ? '' : 's'} listed to learn what the callers expect of it, write it as a new file in a repository of your choosing (a new file gets its own numbers on the next hourly run; the copied files may not change), and say in one paragraph what it does and what it needs in turn. Then open apps/${name}/index.html: the row for this name must read "provided", and every file that threw "${n.name} is not defined" must now load.`;
  orders.push({ schema: 'code-generator.work-order.v1', id, key, kind: isLib ? 'library' : 'need', app: name, title: isLib ? `${n.name}: supply the library for ${name}` : `${n.name}: write the missing ${n.type} for ${name}`,
    missing: { name: n.name, type: n.type, meaning: n.meaning }, used_in: { blocks, families: parts.filter(p => p.family && n.used_by.includes(`#${p.family}`)).map(p => p.family), files: where },
    must_provide: [{ name: n.name, type: n.type }], acceptance: `${SITE}apps/${name}/index.html loads without "${n.name} is not defined"; its needs table shows ${n.name} as provided.`,
    decisions: n.decisions.map(d => d.url), brief, status: 'open', issue: prior?.issue || null, created_utc: prior?.created_utc || stamp, updated_utc: stamp });
}
for (const p of untested) {
  const key = `pair:${p.a}+${p.b}`; const prior = existing.find(r => r.key === key);
  const id = prior ? prior.id : `${name}-${next++}`;
  const A = bySym.get(p.a), B = bySym.get(p.b);
  const files = [A, B].flatMap(b => b.files.filter(f => f.saved).map(f => ({ repo: f.repo, commit: f.commit, path: f.path, link: f.link, saved: f.saved })));
  const decs = decisionsAll.filter(d => [d.subject.key, ...(d.also || [])].some(k => k === `block:${p.a}+block:${p.b}` || k === `block:${p.b}+block:${p.a}`)).map(decisionUrl);
  orders.push({ schema: 'code-generator.work-order.v1', id, key, kind: 'pair', app: name, title: `${p.a} + ${p.b}: test ${A.title} with ${B.title} for ${name}`,
    missing: { name: `${p.a}+${p.b}`, type: 'compatibility test', meaning: `${A.title} and ${B.title} have never been loaded together (${p.basis}).` },
    used_in: { blocks: [A, B].map(b => ({ symbol: b.symbol, number: b.number, title: b.title })), families: [], files },
    must_provide: [{ name: `tests/${p.a}+${p.b}`, type: 'a recorded composition test: the two blocks\' files loaded together, every error listed, verdict proven or fails' }],
    acceptance: `${SITE}apps/${name}/index.html loads the files of ${p.a} and ${p.b} with no error attributed to either; the chemistry for ${p.a}+${p.b} on the periodic table changes from untested to a verdict with evidence.`,
    decisions: decs, brief: `Blocks ${p.a} (${A.title}) and ${p.b} (${B.title}) are chosen together in ${name} but the periodic table has no evidence they work together. Load the files listed (the assembly page apps/${name}/index.html does this in order) and record what happens: which file throws, on what name, and whether the two blocks need the same value under different names. Report the result as a composition test so the table can carry a verdict; do not change the copied files.`,
    status: 'open', issue: prior?.issue || null, created_utc: prior?.created_utc || stamp, updated_utc: stamp });
}
for (const o of orders) writeFileSync(path.join('requests', `${o.id}.json`), JSON.stringify(o, null, 2) + '\n');

// ---- recipe
const recipe = { schema: 'code-generator.recipe.v3', name, title, generated_utc: stamp, blocks: blockSyms, families: familyNums,
  needs: needs.map(n => ({ name: n.name, meaning: n.meaning, kind: n.kind, type: n.type, defined_by: n.defined_by.map(d => d.symbol), used_by: n.used_by, decisions: n.decisions.map(d => d.id) })),
  inputs: toWrite.map(n => n.name), pairs, work_orders: orders.map(o => ({ id: o.id, key: o.key, title: o.title })), decisions: blockDecisions.map(d => ({ id: d.id, key: d.subject.key, url: decisionUrl(d) })),
  load_order: plan.map(f => f.saved),
  parts: parts.map(p => ({ kind: p.kind, symbol: p.symbol, number: p.number, family: p.family, title: p.title, functions: p.functions, files: p.files.map(f => ({ repo: f.repo, commit: f.commit, path: f.path, saved: f.saved })) })) };
writeFileSync(path.join(dir, 'parts.json'), JSON.stringify(recipe, null, 2));

// ---- the assembly page: opens on Pages, loads the parts in order, says what loaded and what threw
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const page = { name, title, generated_utc: stamp, plan, inputs: toWrite.map(n => ({ name: n.name, type: n.type, meaning: n.meaning, used_by: n.used_by, order: orders.find(o => o.key === 'need:' + n.name)?.id || null })),
  provided: needs.filter(n => n.kind === 'browser').map(n => n.name), other: needs.filter(n => !/^(missing|library|browser)$/.test(n.kind)).map(n => ({ name: n.name, kind: n.kind, plain: n.plain, defined_by: n.defined_by.map(d => d.symbol) })), pairs: untested.map(p => `${p.a}+${p.b}`) };
const html = `<!doctype html>
<html lang="en">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)} · assembly</title>
<style>
  :root{color-scheme:dark}
  body{margin:0;padding:16px 18px 40px;background:#0b0d12;color:#eef2fb;font:15px/1.5 Inter,ui-sans-serif,system-ui,sans-serif}
  a{color:#00e5ff} h1{font-size:22px;margin:0 0 4px} h2{font-size:15px;font-family:ui-monospace,monospace;letter-spacing:.14em;text-transform:uppercase;color:#9aa3b5;margin:22px 0 8px}
  .ey{font-family:ui-monospace,monospace;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#00e5ff} .muted{color:#9aa3b5}
  .card{border:1px solid #262b36;border-radius:14px;padding:14px 16px;margin:12px 0;background:linear-gradient(160deg,rgba(255,255,255,.055),rgba(255,255,255,.014))}
  label{display:block;margin:10px 0 4px} label b{font-family:ui-monospace,monospace} label small{color:#9aa3b5;display:block}
  input{width:100%;box-sizing:border-box;padding:9px 12px;background:#12151c;border:1px solid #262b36;color:inherit;font:inherit;border-radius:10px}
  .btn{background:#0f1218;border:1px solid #00e5ff;color:#eef2fb;padding:9px 14px;border-radius:999px;font:inherit;cursor:pointer;margin:12px 8px 0 0} .btn:disabled{opacity:.4;cursor:not-allowed}
  table{border-collapse:collapse;width:100%;font-size:13px} td,th{padding:6px 8px;border-bottom:1px solid #1a1f2a;text-align:left;vertical-align:top} th{color:#9aa3b5;font-weight:500}
  .ok{color:#39d353} .bad{color:#ff5555} .wait{color:#9aa3b5} .amber{color:#ffd54a} .mono{font-family:ui-monospace,monospace;font-size:12px}
  details{margin:8px 0} summary{cursor:pointer;color:#9aa3b5} .wrap{overflow-x:auto}
</style>
<div class="ey">Ventus · Global Grid 2050 · Code generator · assembly</div>
<h1>${esc(title)}</h1>
<div class="muted">Built ${stamp.slice(0, 16).replace('T', ' ')} UTC from ${parts.length} part${parts.length === 1 ? '' : 's'}: ${esc(ordered.map(p => p.symbol ? `${p.symbol} ${p.title}` : `#${p.family} ${p.title}`).join(', '))}. Every file is copied unchanged from GitHub at a pinned commit; this page loads them in dependency order and reports what happened. <a href="REPORT.md">Report</a> · <a href="WORK-ORDERS.md">Work orders</a> · <a href="parts.json">Recipe</a></div>

<div class="card" id="inputs-card">
  <h2>Values still needed</h2>
  ${page.inputs.length ? `<p class="muted">These names are used by the parts but defined nowhere in the table. Give each a value here to try the assembly; each also has a work order for the agents.</p><form id="inputs">${page.inputs.map(n => `<label for="need-${esc(n.name)}"><b>${esc(n.name)}</b> <span class="muted">· ${esc(n.type)} · used by ${esc(n.used_by.join(', '))}${n.order ? ` · <a href="../../requests/${esc(n.order)}.json">work order ${esc(n.order)}</a>` : ''}</span><small>${esc(n.meaning)}</small></label><input id="need-${esc(n.name)}" data-need="${esc(n.name)}" data-type="${esc(n.type)}" placeholder="${esc(n.type.startsWith('function') ? 'a JavaScript expression for the function, e.g. (x) => x' : n.type.startsWith('library') ? 'the URL of the library script to load first' : 'a value, as JSON or plain text')}">`).join('')}</form>` : '<p class="ok">Nothing: every name the parts use is provided by the browser or defined by the parts themselves.</p>'}
  <button class="btn" id="go">Load the parts</button> <span class="muted" id="state">not started</span>
</div>

<div class="card">
  <h2>What loaded</h2>
  <div class="wrap"><table id="files"><thead><tr><th>order</th><th>part</th><th>file</th><th>kind</th><th>result</th></tr></thead><tbody>
  ${plan.map((f, i) => `<tr data-file="${esc(f.saved)}"><td>${i + 1}</td><td class="mono">${esc(f.part)}</td><td class="mono"><a href="${esc(f.source)}">${esc(f.saved)}</a></td><td>${esc(f.kind)}</td><td class="${f.load ? 'wait' : 'muted'} res">${f.load ? 'waiting' : f.kind === 'python' ? 'Python: not loadable in a page' : f.kind === 'page' ? 'a page of its own: not loaded here' : 'not loaded'}</td></tr>`).join('\n  ')}
  </tbody></table></div>
  ${page.pairs.length ? `<p class="amber">Untested combinations: ${esc(page.pairs.join(', '))}. Whatever this page reports for their files is the first evidence.</p>` : ''}
</div>

<div class="card">
  <h2>Provided by the browser</h2>
  <p class="muted">Names the parts use that a web browser supplies. Checked when the page opens.</p>
  <div class="mono" id="provided">${page.provided.map(n => `<span data-provided="${esc(n)}">${esc(n)}</span>`).join(' · ') || 'none'}</div>
  ${page.other.length ? `<details><summary>${page.other.length} other name${page.other.length === 1 ? '' : 's'} the table listed as needs, and why nothing is written for them</summary><div class="wrap"><table><thead><tr><th>name</th><th>what it is</th></tr></thead><tbody>${page.other.map(n => `<tr><td class="mono">${esc(n.name)}</td><td>${esc(n.plain)}${n.defined_by.length ? ' (' + esc(n.defined_by.join(', ')) + ')' : ''}</td></tr>`).join('')}</tbody></table></div></details>` : ''}
</div>

<script type="application/json" id="plan">${JSON.stringify(page).replace(/</g, '\\u003c')}</script>
<script>
(function () {
  var plan = JSON.parse(document.getElementById('plan').textContent);
  var $ = function (s) { return document.querySelector(s); };
  var rows = {}; plan.plan.forEach(function (f) { rows[f.saved] = document.querySelector('tr[data-file="' + f.saved.replace(/"/g, '&quot;') + '"] .res'); });
  var current = null, errors = {};
  function note(file, cls, text) { var r = rows[file]; if (!r) return; r.className = 'res ' + cls; r.textContent = text; }
  window.addEventListener('error', function (e) {
    var file = current; var src = e.filename || '';
    plan.plan.forEach(function (f) { if (src && src.indexOf(f.saved) >= 0) file = f.saved; });
    if (!file) return; errors[file] = (errors[file] || []).concat([(e.message || String(e.error || e))]);
    note(file, 'bad', 'threw: ' + errors[file].join(' | '));
  });
  window.addEventListener('unhandledrejection', function (e) { if (!current) return; var m = e.reason && e.reason.message || String(e.reason); errors[current] = (errors[current] || []).concat([m]); note(current, 'bad', 'rejected: ' + errors[current].join(' | ')); });
  plan.provided.forEach(function (n) { var el = document.querySelector('[data-provided="' + n + '"]'); var ok; try { ok = typeof window[n] !== 'undefined' || (n in window); } catch (x) { ok = false; } if (el) el.className = ok ? 'ok' : 'bad'; });
  function applyInputs() {
    var missing = [];
    Array.prototype.forEach.call(document.querySelectorAll('input[data-need]'), function (i) {
      var v = i.value.trim(), n = i.dataset.need;
      if (!v) { missing.push(n); return; }
      try { if (/^function|^class/.test(i.dataset.type)) window[n] = (0, eval)('(' + v + ')'); else if (/^library/.test(i.dataset.type)) window['__lib_' + n] = v; else { try { window[n] = JSON.parse(v); } catch (x) { window[n] = v; } } }
      catch (x) { missing.push(n + ' (' + x.message + ')'); }
    });
    return missing;
  }
  function loadOne(f) {
    return new Promise(function (resolve) {
      current = f.saved;
      var s = document.createElement('script'); if (f.kind === 'module') s.type = 'module'; s.src = f.saved;
      s.onload = function () { setTimeout(function () { if (!errors[f.saved]) note(f.saved, 'ok', 'loaded'); current = null; resolve(); }, 0); };
      s.onerror = function () { note(f.saved, 'bad', 'failed to load (not served, or a module that could not be fetched)'); current = null; resolve(); };
      note(f.saved, 'wait', 'loading…'); document.body.appendChild(s);
    });
  }
  function loadLib(url) { return new Promise(function (resolve) { var s = document.createElement('script'); s.src = url; s.onload = resolve; s.onerror = resolve; document.body.appendChild(s); }); }
  $('#go').onclick = function () {
    var missing = applyInputs();
    var libs = Object.keys(window).filter(function (k) { return k.indexOf('__lib_') === 0; }).map(function (k) { return window[k]; });
    $('#go').disabled = true; $('#state').textContent = missing.length ? 'loading without ' + missing.join(', ') : 'loading';
    var q = Promise.resolve(); libs.forEach(function (u) { q = q.then(function () { return loadLib(u); }); });
    plan.plan.filter(function (f) { return f.load; }).forEach(function (f) { q = q.then(function () { return loadOne(f); }); });
    q.then(function () { var bad = Object.keys(errors).length, all = plan.plan.filter(function (f) { return f.load; }).length; $('#state').textContent = (all - bad) + ' of ' + all + ' file' + (all === 1 ? '' : 's') + ' loaded clean' + (bad ? '; ' + bad + ' threw' : '') + (missing.length ? '; still missing ' + missing.join(', ') : ''); $('#state').className = bad || missing.length ? 'amber' : 'ok'; });
  };
  if (!plan.inputs.length && location.search.indexOf('auto') >= 0) $('#go').click();
})();
</script>
</html>
`;
writeFileSync(path.join(dir, 'index.html'), html);

// ---- REPORT.md
const md = [`# ${title}`, '', `Built ${stamp.slice(0, 16).replace('T', ' ')} UTC from ${parts.length} part${parts.length === 1 ? '' : 's'} of the [periodic table](https://ventusltd.github.io/stars/table.html). Open the [assembly page](${SITE}apps/${name}/index.html) to see what loads. Rebuild with:`, '', '```',
  `node generate.mjs --name ${name}${blockSyms.length ? ' --blocks ' + blockSyms.join(',') : ''}${familyNums.length ? ' --families ' + familyNums.join(',') : ''}`, '```', ''];
md.push('## Bill of materials', '');
for (const p of parts) {
  md.push(`### ${p.symbol ? p.symbol + ' · #' + p.number + ' · ' : '#' + p.family + ' · '}${p.title}`, '', p.description, '', `${p.functions} function${p.functions === 1 ? '' : 's'} inside${p.repos?.length ? ' · from ' + p.repos.map(r => r.split('/')[1]).join(', ') : ''}${p.depends_on?.length ? ' · loads after ' + p.depends_on.map(d => d.symbol + (bySym.has(d.symbol) ? '' : ' (not chosen)')).join(', ') : ''}`, '');
  md.push('| file | copied to | source |', '|---|---|---|');
  for (const f of p.files) md.push(`| ${f.path} | ${f.saved || 'not copied: ' + f.error} | [${f.repo.split('/')[1]}](${f.link || ghUrl(f)}) |`);
  md.push('');
}
md.push('## Load order', '', 'The assembly page loads the parts in this order: a block\'s dependencies among the chosen blocks first, then the order given.', '', ...plan.map((f, i) => `${i + 1}. \`${f.saved}\` (${f.part}${f.after.length ? ', after ' + f.after.join(', ') : ''}) — ${f.load ? f.kind : f.kind + ', not loaded'}`), '');
if (toWrite.length) md.push('## Still needed from outside', '', 'These names are used by the parts and defined nowhere in the table. Each is an input on the assembly page and a work order for the agents; the generator does not guess.', '', ...toWrite.map(n => `- \`${n.name}\` — ${n.type}; ${n.meaning}; used by ${n.used_by.join(', ')}${n.where[0] ? ` at [${n.where[0].path}:${n.where[0].line}](${n.where[0].link})` : ''} → work order ${orders.find(o => o.key === 'need:' + n.name)?.id}${n.decisions.length ? ' · decisions ' + n.decisions.map(d => `[${d.id}](${d.url})`).join(', ') : ''}`), '');
const rest = needs.filter(n => n.kind !== 'missing' && n.kind !== 'library');
if (rest.length) md.push('## Other names the table listed', '', 'Listed as needs by the periodic table, but nothing is written for them, for the reason given.', '', '| name | what it is |', '|---|---|', ...rest.map(n => `| \`${n.name}\` | ${n.plain}${n.defined_by.length ? ' (' + n.defined_by.map(d => `[${d.symbol}](https://ventusltd.github.io/stars/table.html?block=${d.symbol})`).join(', ') + ')' : ''} |`), '');
md.push('## Chemistry', '', ...pairs.map(p => `- ${p.a} + ${p.b}: ${p.verdict} (${Math.round(p.probability * 100)}%) — ${p.basis}${untested.includes(p) ? ` → work order ${orders.find(o => o.key === `pair:${p.a}+${p.b}`)?.id}` : ''}`), '');
md.push('## Open decisions', '', blockDecisions.length || needs.some(n => n.decisions.length) ? 'Judgement the engine cannot settle, held as records in the stars repository. An open record is a question; a decided record is permission.' : 'No decision record concerns these blocks.', '');
for (const d of blockDecisions) md.push(`- [${d.id}](${decisionUrl(d)}) · ${d.subject.key} · ${d.status} — ${d.question}`);
for (const n of needs) for (const d of n.decisions) if (!blockDecisions.some(x => x.id === d.id)) md.push(`- [${d.id}](${d.url}) · ${d.key} · ${d.status} — ${d.question} (concerns \`${n.name}\`)`);
md.push('', '## Work orders', '', orders.length ? `${orders.length} work order${orders.length === 1 ? '' : 's'} in [WORK-ORDERS.md](WORK-ORDERS.md), one request file each under \`requests/\`, raised as GitHub issues labelled \`work-order\`.` : 'None: nothing is missing and every pair has evidence.', '');
md.push('## Proof', '', 'Every file is fetched from GitHub at the exact commit the modular star recorded and copied unchanged. The workflow checks that each JavaScript file parses and that the assembly page declares an input for every missing name. That proves the app is assembled correctly, not that it is right for its new purpose; the assembly page, opened in a browser, shows which files load and which throw.');
writeFileSync(path.join(dir, 'REPORT.md'), md.join('\n') + '\n');

// ---- WORK-ORDERS.md: the same requests in plain words, for a person
const wo = [`# Work orders — ${title}`, '', `Written ${stamp.slice(0, 16).replace('T', ' ')} UTC. Each order is one file under \`requests/\` and one GitHub issue labelled [work-order](https://github.com/${REPO}/issues?q=is%3Aissue+label%3Awork-order). An agent takes an order, writes the missing package as a new file in a repository, and the next hourly run of the star numbers it.`, ''];
if (!orders.length) wo.push('Nothing to write: every name is provided or defined, and every pair of blocks has evidence.', '');
for (const o of orders) {
  wo.push(`## ${o.id} · ${o.title}`, '', `**What is missing.** \`${o.missing.name}\` — ${o.missing.type}. ${o.missing.meaning}`, '',
    `**Where it will be used.** ${o.used_in.blocks.map(b => `${b.symbol} · #${b.number} · ${b.title}`).join('; ') || o.used_in.families.map(f => '#' + f).join(', ')}`, '');
  if (o.used_in.files.length) wo.push(...o.used_in.files.slice(0, 8).map(f => `- [${f.path}${f.line ? ':' + f.line : ''}](${f.link}) at ${f.commit.slice(0, 7)}`), '');
  wo.push(`**What it must provide.** ${o.must_provide.map(m => `\`${m.name}\` (${m.type})`).join(', ')}`, '', `**Acceptance.** ${o.acceptance}`, '');
  if (o.decisions.length) wo.push(`**Decisions that bear on it.** ${o.decisions.map(u => `[${u.split('/').pop().replace('.json', '')}](${u})`).join(', ')}`, '');
  wo.push(`**Brief.** ${o.brief}`, '', `Request file: \`requests/${o.id}.json\`${o.issue ? ` · issue [#${o.issue.number}](${o.issue.url})` : ''}`, '');
}
writeFileSync(path.join(dir, 'WORK-ORDERS.md'), wo.join('\n') + '\n');

// ---- Spider graph of every generated app and its blocks, on the same keys as the periodic table graph
const apps = readdirSync('apps', { withFileTypes: true }).filter(e => e.isDirectory() && existsSync(path.join('apps', e.name, 'parts.json'))).map(e => JSON.parse(readFileSync(path.join('apps', e.name, 'parts.json'), 'utf8')));
const nodes = [], edges = [], seen = new Set();
for (const a of apps) {
  const open = (a.inputs || (a.needs || []).map(n => n.name || n));
  nodes.push({ id: `app:${a.name}`, label: a.title, type: 'app', rag: open.length ? 'amber' : 'green', reason: `${a.parts.length} part(s)` + (open.length ? ` · still needs ${open.slice(0, 5).join(', ')}` : ' · complete') + (a.work_orders?.length ? ` · ${a.work_orders.length} work order(s)` : ''), gh: `https://github.com/${REPO}/tree/main/apps/${a.name}`, ext: `${SITE}apps/${a.name}/${a.load_order ? 'index.html' : 'REPORT.md'}` });
  for (const p of a.parts) {
    if (!p.files) p.files = p.source ? [p.source] : []; // recipes written by the first version carry a single source
    if (p.kind !== 'block') { p.kind = 'family'; p.functions = p.functions || 1; p.title = p.title || p.name || (await family(p.family))?.names?.[0] || '(unnamed family)'; }
    const id = p.kind === 'block' ? `block:${p.symbol}` : `family:${p.family}`;
    if (!seen.has(id)) { seen.add(id); nodes.push({ id, label: p.kind === 'block' ? `${p.symbol} · ${p.title}` : `#${p.family} ${p.title}`, type: p.kind, rag: 'green', reason: `${p.functions} function(s)`, gh: p.files[0] ? `https://github.com/${p.files[0].repo}/blob/${p.files[0].commit}/${p.files[0].path}` : null, ext: p.kind === 'block' ? `${STARS}table.html?block=${p.symbol}` : `${STARS}code.html?family=${p.family}` }); }
    edges.push({ from: `app:${a.name}`, to: id, type: 'made-of' });
  }
  for (const w of a.work_orders || []) { const id = `order:${w.id}`; if (!seen.has(id)) { seen.add(id); nodes.push({ id, label: w.title, type: 'work-order', rag: 'amber', reason: 'to be written by an agent', gh: `https://github.com/${REPO}/blob/main/requests/${w.id}.json`, ext: `https://github.com/${REPO}/issues?q=is%3Aissue+label%3Awork-order+${encodeURIComponent('"' + w.id + '"')}` }); } edges.push({ from: `app:${a.name}`, to: id, type: 'needs' }); }
}
mkdirSync('spider/graphs', { recursive: true });
writeFileSync('spider/graphs/apps.json', JSON.stringify({ schema: 'code-generator-graph.v1', label: 'Applications', generated_utc: stamp, nodes, edges }));
const q = s => JSON.stringify(s);
writeFileSync('spider/features.yml', ['# Graphs this repository publishes for the Spider dashboard. Written by generate.mjs.', 'schema_version: spider-features-v1', `site: ${q(SITE)}`, 'graphs:',
  '  - id: "generated-apps"', '    title: "Applications"', `    path: ${q(SITE + 'spider/graphs/apps.json')}`, '    edges_path: null', '    source_spider: "code-generator (generate.mjs)"',
  `    description: ${q('Apps built from blocks of the periodic table, wired to the blocks they are made of and the work orders still open. Amber apps still need values from their surroundings; the assembly page shows what loads.')}`, `    nodes: ${nodes.length}`, `    edges: ${edges.length}`].join('\n') + '\n');
console.log(`apps/${name}: ${parts.length} part(s), ${parts.reduce((s, p) => s + p.files.filter(f => f.saved).length, 0)} file(s) copied, ${plan.filter(f => f.load).length} loadable; ${toWrite.length} name(s) to be written, ${untested.length} untested pair(s), ${orders.length} work order(s).`);
