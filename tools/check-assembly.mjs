// Check an assembled app without a browser: node tools/check-assembly.mjs apps/<name>
// Fails (exit 1) when the assembly page is missing, its inline script does not compile, a file it plans to load is
// not on disk, or a name the recipe says is still needed has no input on the page. A missing input is a failure,
// never a skip: the page must ask for every value it cannot supply. Parse problems in the copied files are reported
// but do not fail, because those files are copied unchanged and the page's job is to show what they do.
import { readFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import vm from 'node:vm';

const dir = process.argv[2];
if (!dir || !existsSync(dir)) { console.error('usage: node tools/check-assembly.mjs apps/<name>'); process.exit(2); }
const fail = [], warn = [], ok = [];
const pagePath = path.join(dir, 'index.html');
if (!existsSync(pagePath)) { console.error(`FAIL no assembly page at ${pagePath}`); process.exit(1); }
const html = readFileSync(pagePath, 'utf8');
const recipe = JSON.parse(readFileSync(path.join(dir, 'parts.json'), 'utf8'));

// 1. the plan the page carries must parse and agree with the recipe
const planMatch = html.match(/<script type="application\/json" id="plan">([\s\S]*?)<\/script>/);
let plan = null;
if (!planMatch) fail.push('the page carries no plan (<script type="application/json" id="plan">)');
else { try { plan = JSON.parse(planMatch[1]); ok.push(`plan parses: ${plan.plan.length} file(s), ${plan.inputs.length} input(s)`); } catch (e) { fail.push('the plan is not valid JSON: ' + e.message); } }
if (plan && recipe.load_order && recipe.load_order.join('\n') !== plan.plan.map(f => f.saved).join('\n')) fail.push('the load order on the page differs from parts.json');

// 2. every inline script must compile
for (const m of html.matchAll(/<script(?![^>]*type="application\/json")[^>]*>([\s\S]*?)<\/script>/g)) {
  try { new vm.Script(m[1], { filename: pagePath }); ok.push('inline script compiles'); } catch (e) { fail.push('inline script does not compile: ' + e.message); }
}

// 3. every file the page plans to load must exist on disk, and every referenced link must be relative
if (plan) for (const f of plan.plan) {
  if (!existsSync(path.join(dir, f.saved))) fail.push(`planned file missing on disk: ${f.saved}`);
  if (/^(\/|https?:)/.test(f.saved)) fail.push(`planned file is not a relative path: ${f.saved}`);
}

// 4. every name still needed must have a labelled input on the page
const inputs = new Set([...html.matchAll(/<input[^>]*data-need="([^"]+)"/g)].map(m => m[1]));
const labels = new Set([...html.matchAll(/<label for="need-([^"]+)"/g)].map(m => m[1]));
for (const n of recipe.inputs || []) {
  if (!inputs.has(n)) fail.push(`no input on the page for the needed name ${n}`);
  else if (!labels.has(n)) fail.push(`input for ${n} has no label`);
  else ok.push(`input declared: ${n}`);
}
for (const n of inputs) if (!(recipe.inputs || []).includes(n)) warn.push(`input ${n} on the page is not in the recipe`);

// 5. copied JavaScript files: report parse problems, do not fail
if (plan) for (const f of plan.plan.filter(f => f.load)) {
  try { execFileSync(process.execPath, ['--check', path.join(dir, f.saved)], { stdio: 'pipe' }); }
  catch (e) { warn.push(`${f.saved} does not parse as ${f.kind === 'module' ? 'a module' : 'a script'} under Node: ${String(e.stderr || e.message).split('\n').find(l => /Error/.test(l)) || 'parse error'}`); }
}

for (const l of ok) console.log('ok    ' + l);
for (const l of warn) console.log('note  ' + l);
for (const l of fail) console.log('FAIL  ' + l);
console.log(`${fail.length ? 'FAILED' : 'PASSED'}: ${ok.length} check(s) passed, ${warn.length} note(s), ${fail.length} failure(s)`);
process.exit(fail.length ? 1 : 0);
