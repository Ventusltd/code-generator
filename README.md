# Code generator

Looks at every unique line of code ever written by Ventus Ltd, and its logic, and assists in assembling code that supports the creation of elements, concepts, apps or whatever needs building. Where there isn't code, it identifies that new code needs to be written.

Select functions from the [modular star](https://github.com/Ventusltd/stars/blob/main/MODULAR-STAR.md), get their
report, and apply them to a new app. Every part is copied exactly from GitHub at the commit the modular star
recorded, keyed by its permanent family number, with its line keys, its source link and the live page that uses it.

**Picker:** https://ventusltd.github.io/code-generator/ — search, select, assemble in the browser, copy or download.

**Durable:** the *Generate app* workflow (Actions tab, or the command the picker gives you) writes `apps/<name>/`:

| file | what |
|---|---|
| `<name>.mjs` (and `.py` for Python parts) | the parts, unchanged, exported |
| `context.mjs` | the values the parts still need from their surroundings, declared undefined, to be decided |
| `REPORT.md` | the code report: parts, needs, open decisions, sources, live pages, line keys |
| `parts.json` | the recipe, so the app can be regenerated from its keys |

The workflow proves the module parses and imports. That proves it is assembled correctly, not that it is right
for its new purpose.

**Rules the generator keeps**
- Nothing is invented. What a part needs from outside itself is listed, never guessed.
- Decisions stay decisions: an earth radius, for example, is flagged as open rather than picked.
- The Spider graph `spider/graphs/apps.json` wires every app to the parts it is made of and the repositories that
  already use those parts, on the same permanent keys as the modular graph, so the two join in the dashboard.
