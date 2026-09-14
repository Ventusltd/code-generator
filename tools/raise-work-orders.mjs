// Raise one GitHub issue per new work order: node tools/raise-work-orders.mjs [requests/<name>-*.json ...]
// A request that already records an issue is left alone. Before creating, the open and closed issues are searched
// for the request id in the title, so a re-run after a lost commit does not open a second issue. The issue number
// and URL are written back into the request file, which the workflow then commits. Needs gh with GH_TOKEN.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

const REPO = process.env.GH_REPO || 'Ventusltd/code-generator';
const gh = (args, input) => execFileSync('gh', [...args, '-R', REPO], { encoding: 'utf8', input, stdio: ['pipe', 'pipe', 'pipe'] }).trim();
const files = process.argv.slice(2).length ? process.argv.slice(2) : readdirSync('requests').filter(f => f.endsWith('.json')).map(f => path.join('requests', f));
const template = readFileSync('.github/ISSUE_TEMPLATE/work-order.md', 'utf8').replace(/^---[\s\S]*?---\s*/, '');

try { gh(['label', 'create', 'work-order', '--color', 'FFD54A', '--description', 'A package for an agent to write: what is missing, where it is used, how it is checked', '--force']); } catch (e) { console.log('label: ' + String(e.stderr || e.message).trim().split('\n')[0]); }

let raised = 0, kept = 0, found = 0;
for (const file of files) {
  const o = JSON.parse(readFileSync(file, 'utf8'));
  if (o.issue && o.issue.number) { kept++; continue; }
  const title = `Work order ${o.id}: ${o.title}`;
  let issue = null;
  try {
    const hits = JSON.parse(gh(['issue', 'list', '--state', 'all', '--label', 'work-order', '--search', `"Work order ${o.id}:" in:title`, '--json', 'number,title,url', '--limit', '20']));
    const hit = hits.find(h => h.title.startsWith(`Work order ${o.id}:`));
    if (hit) { issue = { number: hit.number, url: hit.url }; found++; }
  } catch (e) { console.log(`search failed for ${o.id}: ${String(e.stderr || e.message).trim().split('\n')[0]}`); }
  if (!issue) {
    const body = template
      .replace('{{missing}}', `\`${o.missing.name}\` — ${o.missing.type}. ${o.missing.meaning}`)
      .replace('{{used_in}}', [o.used_in.blocks.map(b => `- ${b.symbol} · #${b.number} · ${b.title}`).join('\n'), o.used_in.families.map(f => `- family #${f}`).join('\n'), o.used_in.files.slice(0, 10).map(f => `- [${f.path}${f.line ? ':' + f.line : ''}](${f.link}) at ${f.commit.slice(0, 7)}`).join('\n')].filter(Boolean).join('\n') || '- (not recorded)')
      .replace('{{must_provide}}', o.must_provide.map(m => `- \`${m.name}\` — ${m.type}`).join('\n'))
      .replace('{{acceptance}}', o.acceptance)
      .replace('{{decisions}}', o.decisions.length ? o.decisions.map(u => `- ${u}`).join('\n') : '- none recorded; if a value has to be chosen, raise a decision record in Ventusltd/stars first')
      .replace('{{brief}}', o.brief)
      .replace('{{request}}', `https://github.com/${REPO}/blob/main/requests/${o.id}.json`)
      .replace('{{app}}', `https://ventusltd.github.io/code-generator/apps/${o.app}/index.html`);
    try {
      const url = gh(['issue', 'create', '--title', title, '--label', 'work-order', '--body-file', '-'], body);
      const number = Number(url.split('/').pop());
      issue = { number, url }; raised++;
      console.log(`raised #${number} ${title}`);
    } catch (e) { console.log(`could not raise ${o.id}: ${String(e.stderr || e.message).trim().split('\n').slice(-1)[0]}`); continue; }
  } else console.log(`found #${issue.number} ${title}`);
  o.issue = issue; o.updated_utc = new Date().toISOString();
  writeFileSync(file, JSON.stringify(o, null, 2) + '\n');
}
console.log(`${raised} issue(s) raised, ${found} found by title, ${kept} already recorded, ${files.length} request(s) in all.`);
