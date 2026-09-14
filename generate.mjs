// Code generator — assemble a new app from numbered functions in the modular star.
//   node generate.mjs --name geodesy --families 511,8770 [--title "Geodesy helpers"]
// Every function is copied exactly from GitHub at the commit the modular star recorded, with its family
// number, its permanent line numbers and its source link. Nothing is invented: what a function still needs
// from its surroundings is listed, not guessed. Output: apps/<name>/ (module, REPORT.md, parts.json) and
// the Spider graph of all apps (spider/graphs/apps.json, spider/features.yml).
import { mkdirSync, writeFileSync, readdirSync, readFileSync, existsSync } from 'node:fs';
import path from 'node:path';

const STARS = 'https://ventusltd.github.io/stars/';
const SITE = 'https://ventusltd.github.io/code-generator/';
const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i > 0 ? process.argv[i + 1] : d; };
const name = arg('name'), title = arg('title', arg('name'));
if (!name || !/^[a-z0-9][a-z0-9-]{0,40}$/.test(name)) { console.error('--name: lowercase letters, digits and hyphens'); process.exit(2); }
const families = [...new Set(String(arg('families', '')).split(/[\s,]+/).filter(Boolean).map(Number))];
if (!families.length || families.some(n => !Number.isInteger(n) || n < 1)) { console.error('--families: comma-separated family numbers'); process.exit(2); }

const getJson = async u => { const r = await fetch(u); if (!r.ok) throw new Error(`${u} ${r.status}`); return r.json(); };
const index = await getJson(STARS + 'code/index.json');
const buckets = new Map();
async function family(n) {
  const b = Math.floor(n / index.bucket_size);
  if (!buckets.has(b)) buckets.set(b, getJson(`${STARS}code/f/${b}.json`).catch(() => ({})));
  return (await buckets.get(b))[n] || null;
}
const raw = p => `https://raw.githubusercontent.com/${p.repo}/${p.commit}/${p.path.split('/').map(encodeURIComponent).join('/')}`;
const gh = p => `https://github.com/${p.repo}/blob/${p.commit}/${p.path.split('/').map(encodeURIComponent).join('/')}#L${p.first}-L${p.last}`;

const parts = [], missing = [];
for (const n of families) {
  const f = await family(n);
  if (!f) { missing.push(n); continue; }
  const p = f.places[0];
  const r = await fetch(raw(p)); if (!r.ok) { missing.push(n); continue; }
  const lines = (await r.text()).split('\n').slice(p.first - 1, p.last);
  parts.push({ family: n, name: f.names[0], kind: f.kind, lang: /\.py$/i.test(p.path) ? 'py' : 'js', standalone: f.standalone, needs: f.needs || [],
    first_written: f.first_written, library: f.library, lines: f.lines, source: { repo: p.repo, commit: p.commit, path: p.path, first: p.first, last: p.last, link: gh(p), live: p.live },
    used_in: f.places.length, repos: f.repos, text: lines.join('\n') });
}
if (missing.length) console.log(`Not found or not fetchable: ${missing.join(', ')}`);
if (!parts.length) { console.error('Nothing to generate.'); process.exit(1); }

// What the app still needs from outside: names used by a part that no part in the app defines.
const defined = new Set(parts.map(p => p.name));
const needs = [...new Set(parts.flatMap(p => p.needs))].filter(x => !defined.has(x)).sort();
const decisions = needs.filter(x => /EARTH|RADIUS/i.test(x)).map(x => `${x}: which earth radius is true is an open decision (EARTH_KM evidence pack); do not pick one silently`);

const dir = path.join('apps', name);
mkdirSync(dir, { recursive: true });
const stamp = new Date().toISOString();
const header = (c) => `${c} ${title} — generated ${stamp} by Ventusltd/code-generator from the modular star.\n${c} Each part is copied exactly from GitHub at the recorded commit. Family numbers are permanent keys.\n${c} Parts: ${parts.map(p => '#' + p.family + ' ' + p.name).join(', ')}\n`;
const js = parts.filter(p => p.lang === 'js'), py = parts.filter(p => p.lang === 'py');
if (js.length) {
  let out = header('//') + (needs.length ? `\n// Still needed from the surroundings (supply in context.mjs): ${needs.join(', ')}\n` : '') +
    (needs.length ? `import { ${needs.join(', ')} } from './context.mjs';\n` : '') + '\n';
  for (const p of js) {
    out += `// ── family #${p.family} ${p.name} · ${p.kind} · used in ${p.used_in} place(s) across ${p.repos.length} repositor${p.repos.length === 1 ? 'y' : 'ies'} · ${p.source.link}\n`;
    const isDecl = /^\s*(export\s+)?(async\s+)?(function|class)\b/.test(p.text) && !/^\s*export\s/.test(p.text);
    out += (isDecl ? 'export ' : `// not a plain declaration; exported as written:\n`) + p.text.replace(/\s+$/, '') + '\n\n';
  }
  writeFileSync(path.join(dir, `${name}.mjs`), out);
  if (needs.length) writeFileSync(path.join(dir, 'context.mjs'), `// Values the parts of ${title} need from their surroundings. Decide each one; the generator does not guess.\n` +
    needs.map(x => `export const ${x} = undefined; // TODO decide${decisions.some(d => d.startsWith(x + ':')) ? ' — see REPORT.md, open decision' : ''}`).join('\n') + '\n');
}
if (py.length) writeFileSync(path.join(dir, `${name}.py`), header('#') + '\n' + py.map(p => `# ── family #${p.family} ${p.name} · ${p.source.link}\n${p.text.replace(/\s+$/, '')}\n`).join('\n'));

const recipe = { schema: 'code-generator.recipe.v1', name, title, generated_utc: stamp, families, needs, decisions,
  parts: parts.map(({ text, ...p }) => p) };
writeFileSync(path.join(dir, 'parts.json'), JSON.stringify(recipe, null, 2));

const md = [`# ${title}`, '', `Generated ${stamp.slice(0, 16).replace('T', ' ')} UTC from ${parts.length} numbered part${parts.length === 1 ? '' : 's'} of the [modular star](https://github.com/Ventusltd/stars/blob/main/MODULAR-STAR.md). Regenerate with:`, '',
  '```', `node generate.mjs --name ${name} --families ${families.join(',')}`, '```', ''];
if (needs.length) md.push('## Still needed from the surroundings', '', `These names are used by the parts but not defined by any of them. They are declared in \`context.mjs\` as undefined; decide each one.`, '', ...needs.map(x => `- \`${x}\``), '');
if (decisions.length) md.push('## Open decisions', '', ...decisions.map(d => `- ${d}`), '');
md.push('## Parts', '', '| Family | Name | Kind | Self-contained | Needs | Used in | First written | Source | Live page |', '|---|---|---|---|---|---|---|---|---|');
for (const p of parts) md.push(`| [#${p.family}](${STARS}code.html?family=${p.family}) | \`${p.name}\` | ${p.kind} | ${p.standalone ? 'yes' : 'no'} | ${p.needs.join(', ') || '–'} | ${p.used_in} place(s), ${p.repos.length} repo(s) | ${(p.first_written || '').slice(0, 10) || '–'} | [${p.source.repo.split('/')[1]}/${p.source.path}](${p.source.link}) | ${p.source.live ? `[open](${p.source.live})` : '–'} |`);
md.push('', '## Line keys', '', 'The permanent line numbers of each part, first to last:', '');
for (const p of parts) md.push(`- #${p.family} ${p.name}: ${p.lines.length} lines, keys ${p.lines.slice(0, 12).join(', ')}${p.lines.length > 12 ? ', …' : ''}`);
md.push('', '## Proof', '', 'Each part is fetched from GitHub at the exact commit the modular star recorded and copied unchanged. The workflow checks the generated module parses and imports. That proves it is assembled correctly, not that it is right for its new purpose.');
writeFileSync(path.join(dir, 'REPORT.md'), md.join('\n') + '\n');

// Spider graph of every generated app and its parts. Ids are the same permanent keys the modular graph uses,
// so the two graphs join in the dashboard.
const apps = readdirSync('apps', { withFileTypes: true }).filter(e => e.isDirectory() && existsSync(path.join('apps', e.name, 'parts.json')))
  .map(e => JSON.parse(readFileSync(path.join('apps', e.name, 'parts.json'), 'utf8')));
const nodes = [], edges = [], seen = new Set();
for (const a of apps) {
  nodes.push({ id: `app:${a.name}`, label: a.title, type: 'app', rag: a.needs.length ? 'amber' : 'green',
    reason: `${a.parts.length} part(s)` + (a.needs.length ? ` · still needs ${a.needs.join(', ')}` : ' · complete') + (a.decisions.length ? ` · ${a.decisions.length} open decision(s)` : ''),
    gh: `https://github.com/Ventusltd/code-generator/tree/main/apps/${a.name}`, ext: `${SITE}apps/${a.name}/REPORT.md` });
  for (const p of a.parts) {
    const id = `family:${p.family}`;
    if (!seen.has(id)) { seen.add(id); nodes.push({ id, label: `#${p.family} ${p.name}`, type: p.standalone ? 'library element' : 'element', rag: p.standalone ? 'green' : 'amber',
      reason: `used in ${p.used_in} place(s) across ${p.repos.length} repositor${p.repos.length === 1 ? 'y' : 'ies'}` + (p.needs.length ? ` · needs ${p.needs.join(', ')}` : ' · self-contained'), gh: p.source.link, ext: `${STARS}code.html?family=${p.family}` }); }
    edges.push({ from: `app:${a.name}`, to: id, type: 'made-of' });
    for (const r of p.repos) { const rid = `repo:${r}`; if (!seen.has(rid)) { seen.add(rid); nodes.push({ id: rid, label: r.split('/')[1], type: 'repo', rag: 'green', reason: 'already uses this part', gh: `https://github.com/${r}` }); } edges.push({ from: id, to: rid, type: 'found-in' }); }
  }
}
mkdirSync('spider/graphs', { recursive: true });
writeFileSync('spider/graphs/apps.json', JSON.stringify({ schema: 'code-generator-graph.v1', label: 'Generated apps', generated_utc: stamp, nodes, edges }));
const q = s => JSON.stringify(s);
writeFileSync('spider/features.yml', ['# Graphs this repository publishes for the Spider dashboard. Written by generate.mjs.', 'schema_version: spider-features-v1', `site: ${q(SITE)}`, 'graphs:',
  '  - id: "generated-apps"', '    title: "Generated apps"', `    path: ${q(SITE + 'spider/graphs/apps.json')}`, '    edges_path: null', '    source_spider: "code-generator (generate.mjs)"',
  `    description: ${q('Apps assembled from numbered parts of the modular star, wired to the parts they are made of and the repositories that already use those parts. Amber apps still need values from their surroundings; the report lists them.')}`, `    nodes: ${nodes.length}`, `    edges: ${edges.length}`].join('\n') + '\n');
console.log(`apps/${name}: ${parts.length} part(s)${needs.length ? `, still needs ${needs.join(', ')}` : ', complete'}${decisions.length ? `, ${decisions.length} open decision(s)` : ''}. Graph: ${apps.length} app(s), ${nodes.length} nodes.`);
