// Code generator — build an app from blocks of the periodic table (or from numbered families).
//   node generate.mjs --name substation-finder --blocks Si,Vn,Ug,Ps,Dt [--title "Substation finder"]
//   node generate.mjs --name geodesy --families 511,8770
// A block's files are copied exactly from GitHub at the commit the modular star recorded, one file per source
// lineage (the newest version). Nothing is invented: what the app still needs from its surroundings is listed.
// Output: apps/<name>/ (the files under <symbol>/, REPORT.md, parts.json) and the Spider graph of all apps.
import { mkdirSync, writeFileSync, readdirSync, readFileSync, existsSync } from 'node:fs';
import path from 'node:path';

const STARS = 'https://ventusltd.github.io/stars/';
const SITE = 'https://ventusltd.github.io/code-generator/';
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
const buckets = new Map();
const family = async n => { const b = Math.floor(n / index.bucket_size); if (!buckets.has(b)) buckets.set(b, getJson(`${STARS}code/f/${b}.json`).catch(() => ({}))); return (await buckets.get(b))[n] || null; };

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
      copied.push({ ...f, saved: path.relative(dir, target).replace(/\\/g, '/'), link: ghUrl(f) });
    } catch (e) { copied.push({ ...f, saved: null, error: String(e.message).slice(0, 80) }); }
  }
  parts.push({ kind: 'block', symbol: b.symbol, number: b.number, title: b.title, description: b.description, category: b.category, functions: b.functions, needs: b.needs, inside: b.inside.slice(0, 20), files: copied, repos: b.repos });
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
    writeFileSync(target, `// family #${n} ${f.names[0]} · ${ghUrl(p)}#L${p.first}-L${p.last}\n${lines.join('\n')}\n`);
    parts.push({ kind: 'family', family: n, title: f.names[0], description: `Function ${f.names[0]}, used in ${f.places.length} place(s).`, functions: 1, needs: (f.needs || []).map(x => ({ name: x, meaning: x })), inside: [{ family: n, name: f.names[0] }], files: [{ ...p, saved: path.relative(dir, target).replace(/\\/g, '/'), link: `${ghUrl(p)}#L${p.first}-L${p.last}` }], repos: f.repos, lines: f.lines });
  } catch (e) { missing.push(String(n)); }
}
if (missing.length) console.log(`Not found or not fetchable: ${missing.join(', ')}`);
if (!parts.length) { console.error('Nothing to generate.'); process.exit(1); }

const have = new Set(parts.flatMap(p => p.inside.map(f => f.name)));
const needs = [...new Map(parts.flatMap(p => p.needs).filter(n => !have.has(n.name)).map(n => [n.name, n])).values()];
const decisions = needs.filter(n => /EARTH|RADIUS/i.test(n.name)).map(n => `${n.name}: which earth radius is true is an open decision (element Ek, EARTH_KM evidence pack); do not pick one silently`);

const recipe = { schema: 'code-generator.recipe.v2', name, title, generated_utc: stamp, blocks: blockSyms, families: familyNums, needs, decisions,
  parts: parts.map(p => ({ kind: p.kind, symbol: p.symbol, number: p.number, family: p.family, title: p.title, functions: p.functions, files: p.files.map(f => ({ repo: f.repo, commit: f.commit, path: f.path, saved: f.saved })) })) };
writeFileSync(path.join(dir, 'parts.json'), JSON.stringify(recipe, null, 2));

const md = [`# ${title}`, '', `Built ${stamp.slice(0, 16).replace('T', ' ')} UTC from ${parts.length} part${parts.length === 1 ? '' : 's'} of the [periodic table](https://ventusltd.github.io/stars/table.html). Rebuild with:`, '', '```',
  `node generate.mjs --name ${name}${blockSyms.length ? ' --blocks ' + blockSyms.join(',') : ''}${familyNums.length ? ' --families ' + familyNums.join(',') : ''}`, '```', ''];
md.push('## Bill of materials', '');
for (const p of parts) {
  md.push(`### ${p.symbol ? p.symbol + ' · #' + p.number + ' · ' : '#' + p.family + ' · '}${p.title}`, '', p.description, '', `${p.functions} function${p.functions === 1 ? '' : 's'} inside${p.repos?.length ? ' · from ' + p.repos.map(r => r.split('/')[1]).join(', ') : ''}`, '');
  md.push('| file | copied to | source |', '|---|---|---|');
  for (const f of p.files) md.push(`| ${f.path} | ${f.saved || 'not copied: ' + f.error} | [${f.repo.split('/')[1]}](${f.link || ghUrl(f)}) |`);
  md.push('');
}
if (needs.length) md.push('## Still needed from outside', '', 'These names are used by the parts but not defined by any of them. Decide each one; the generator does not guess.', '', ...needs.map(n => `- \`${n.name}\` — ${n.meaning}`), '');
if (decisions.length) md.push('## Open decisions', '', ...decisions.map(d => `- ${d}`), '');
md.push('## Proof', '', 'Every file is fetched from GitHub at the exact commit the modular star recorded and copied unchanged. The workflow checks that each JavaScript file parses. That proves the app is assembled correctly, not that it is right for its new purpose.');
writeFileSync(path.join(dir, 'REPORT.md'), md.join('\n') + '\n');

// ---- Spider graph of every generated app and its blocks, on the same keys as the periodic table graph
const apps = readdirSync('apps', { withFileTypes: true }).filter(e => e.isDirectory() && existsSync(path.join('apps', e.name, 'parts.json'))).map(e => JSON.parse(readFileSync(path.join('apps', e.name, 'parts.json'), 'utf8')));
const nodes = [], edges = [], seen = new Set();
for (const a of apps) {
  nodes.push({ id: `app:${a.name}`, label: a.title, type: 'app', rag: (a.needs || []).length ? 'amber' : 'green', reason: `${a.parts.length} part(s)` + ((a.needs || []).length ? ` · still needs ${a.needs.map(n => n.meaning || n).slice(0, 5).join(', ')}` : ' · complete'), gh: `https://github.com/Ventusltd/code-generator/tree/main/apps/${a.name}`, ext: `${SITE}apps/${a.name}/REPORT.md` });
  for (const p of a.parts) {
    if (!p.files) p.files = p.source ? [p.source] : []; // recipes written by the first version carry a single source
    if (!p.kind) { p.kind = 'family'; p.title = p.name; p.functions = 1; }
    const id = p.kind === 'block' ? `block:${p.symbol}` : `family:${p.family}`;
    if (!seen.has(id)) { seen.add(id); nodes.push({ id, label: p.kind === 'block' ? `${p.symbol} · ${p.title}` : `#${p.family} ${p.title}`, type: p.kind, rag: 'green', reason: `${p.functions} function(s)`, gh: p.files[0] ? `https://github.com/${p.files[0].repo}/blob/${p.files[0].commit}/${p.files[0].path}` : null, ext: p.kind === 'block' ? `${STARS}table.html?block=${p.symbol}` : `${STARS}code.html?family=${p.family}` }); }
    edges.push({ from: `app:${a.name}`, to: id, type: 'made-of' });
  }
}
mkdirSync('spider/graphs', { recursive: true });
writeFileSync('spider/graphs/apps.json', JSON.stringify({ schema: 'code-generator-graph.v1', label: 'Applications', generated_utc: stamp, nodes, edges }));
const q = s => JSON.stringify(s);
writeFileSync('spider/features.yml', ['# Graphs this repository publishes for the Spider dashboard. Written by generate.mjs.', 'schema_version: spider-features-v1', `site: ${q(SITE)}`, 'graphs:',
  '  - id: "generated-apps"', '    title: "Applications"', `    path: ${q(SITE + 'spider/graphs/apps.json')}`, '    edges_path: null', '    source_spider: "code-generator (generate.mjs)"',
  `    description: ${q('Apps built from blocks of the periodic table, wired to the blocks they are made of. Amber apps still need values from their surroundings; the report lists them.')}`, `    nodes: ${nodes.length}`, `    edges: ${edges.length}`].join('\n') + '\n');
console.log(`apps/${name}: ${parts.length} part(s), ${parts.reduce((s, p) => s + p.files.filter(f => f.saved).length, 0)} file(s) copied${needs.length ? `, still needs ${needs.map(n => n.name).join(', ')}` : ', complete'}.`);
