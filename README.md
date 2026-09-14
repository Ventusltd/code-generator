# Code generator

Looks at every unique line of code ever written by Ventus Ltd, and its logic, and assists in assembling code that supports the creation of elements, concepts, apps or whatever needs building. Where there isn't code, it identifies that new code needs to be written.

Select functions from the [modular star](https://github.com/Ventusltd/stars/blob/main/MODULAR-STAR.md), get their
report, and apply them to a new app. Every part is copied exactly from GitHub at the commit the modular star
recorded, keyed by its permanent family number, with its line keys, its source link and the live page that uses it.

**Picker:** https://ventusltd.github.io/code-generator/ — search, select, assemble in the browser, copy or download.

**Durable:** the *Generate app* workflow (Actions tab, or the command the picker gives you) writes `apps/<name>/`:

| file | what |
|---|---|
| `<symbol>/…` | each block's files, unchanged, one per source lineage at the commit the star recorded |
| `index.html` | the assembly page: loads the files in dependency order, asks for the values still needed, shows which files loaded and which threw |
| `REPORT.md` | the code report: bill of materials, load order, needs sorted by what to do about them, chemistry, open decisions (linked to `Ventusltd/stars/decisions`), work orders |
| `WORK-ORDERS.md` | what is to be written, in plain words, one order each |
| `parts.json` | the recipe, so the app can be regenerated from its keys |

And `requests/<name>-<n>.json`, one per work order: what is missing, where it will be used (blocks, files at commit),
what it must provide, the acceptance check, a brief. The workflow raises each as a GitHub issue labelled
[work-order](https://github.com/Ventusltd/code-generator/issues?q=is%3Aissue+label%3Awork-order) for the agents,
once (the issue number is written back into the request). `rules.mjs` holds the sorting of needs that the generator
and the picker share; `tools/check-assembly.mjs` is the workflow's check of the assembly page: its plan and script must
parse, every planned file must exist, and every name still needed must have a labelled input, or the run fails.

The workflow proves the files parse and the assembly page is sound. That proves the app is assembled correctly, not
that it is right for its new purpose; the assembly page, opened, shows what actually loads.

**Rules the generator keeps**
- Nothing is invented. What a part needs from outside itself is listed, never guessed.
- Decisions stay decisions: an earth radius, for example, is flagged as open rather than picked.
- The Spider graph `spider/graphs/apps.json` wires every app to the parts it is made of and the repositories that
  already use those parts, on the same permanent keys as the modular graph, so the two join in the dashboard.
