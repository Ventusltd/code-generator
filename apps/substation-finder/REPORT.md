# Substation finder on a map

Built 2026-09-14 13:00 UTC from 5 parts of the [periodic table](https://ventusltd.github.io/stars/table.html). Open the [assembly page](https://ventusltd.github.io/code-generator/apps/substation-finder/index.html) to see what loads. Rebuild with:

```
node generate.mjs --name substation-finder --blocks Si,Vn,Ug,Ps,Dt
```

## Bill of materials

### Si · #35 · substation-intelligence

A plug-in part of the GridAtlas map.

663 functions inside · from gridatlas, testcode, code-generator, globalgrid2050, youengineer-code-review, ventus-grid-engine, teleprinter, spiders · loads after Pr (not chosen), St (not chosen), Tp (not chosen), Gn (not chosen), Sa (not chosen)

| file | copied to | source |
|---|---|---|
| atlas/cartridges/202609062358-substation-intelligence-v9-63.js | Si/202609062358-substation-intelligence-v9-63.js | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/atlas/cartridges/202609062358-substation-intelligence-v9-63.js) |
| atlas/modules/202609031958-menu-bar.js | Si/202609031958-menu-bar.js | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/atlas/modules/202609031958-menu-bar.js) |
| atlas/parts/202609040045-ventus-corev8engine-deep-link-receiver.js | Si/202609040045-ventus-corev8engine-deep-link-receiver.js | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/atlas/parts/202609040045-ventus-corev8engine-deep-link-receiver.js) |
| atlas/releases/202608300453-atlas-v9/ventus-corev8engine.js | Si/ventus-corev8engine.js | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/atlas/releases/202608300453-atlas-v9/ventus-corev8engine.js) |
| apps/substation-finder/Si/ventus-corev7engine.js | Si/ventus-corev7engine.js | [code-generator](https://github.com/Ventusltd/code-generator/blob/130a182bd4ec84525f985700bab9448921812ba5/apps/substation-finder/Si/ventus-corev7engine.js) |
| apps/substation-finder/Si/ventus-corev8engine.js | Si/ventus-corev8engine.js | [code-generator](https://github.com/Ventusltd/code-generator/blob/130a182bd4ec84525f985700bab9448921812ba5/apps/substation-finder/Si/ventus-corev8engine.js) |
| repd_grid_atlasv7/ventus-corev7engine.js | Si/ventus-corev7engine.js | [globalgrid2050](https://github.com/Ventusltd/globalgrid2050/blob/065a39d081f5ba131de4001167a11f5920d1fe93/repd_grid_atlasv7/ventus-corev7engine.js) |
| repd_grid_atlasv8/ventus-corev8engine.js | Si/ventus-corev8engine.js | [globalgrid2050](https://github.com/Ventusltd/globalgrid2050/blob/065a39d081f5ba131de4001167a11f5920d1fe93/repd_grid_atlasv8/ventus-corev8engine.js) |

### Vn · #18 · Nearest substation search

Finds the nearest substations and lines to a point, the search the atlas runs on every click.

2 functions inside · from code-generator, ventus-grid-engine

| file | copied to | source |
|---|---|---|
| apps/substation-finder/Vn/nearest-search.mjs | Vn/nearest-search.mjs | [code-generator](https://github.com/Ventusltd/code-generator/blob/130a182bd4ec84525f985700bab9448921812ba5/apps/substation-finder/Vn/nearest-search.mjs) |
| apps/substation-finder/Vn/v9-nearest-search.js | Vn/v9-nearest-search.js | [code-generator](https://github.com/Ventusltd/code-generator/blob/130a182bd4ec84525f985700bab9448921812ba5/apps/substation-finder/Vn/v9-nearest-search.js) |
| engine/v9-nearest-search.js | Vn/v9-nearest-search.js | [ventus-grid-engine](https://github.com/Ventusltd/ventus-grid-engine/blob/ba78b600f3004d6873e8f442f296f5b27675cfa7/engine/v9-nearest-search.js) |
| sources/v9-extracts/nearest-search.mjs | Vn/nearest-search.mjs | [ventus-grid-engine](https://github.com/Ventusltd/ventus-grid-engine/blob/ba78b600f3004d6873e8f442f296f5b27675cfa7/sources/v9-extracts/nearest-search.mjs) |

### Ug · #33 · uk-gazetteer-flyto

A plug-in part of the GridAtlas map.

51 functions inside · from gridatlas, testcode, code-generator, globalgrid2050, ventus-grid-engine · loads after St (not chosen), Tp (not chosen), Pr (not chosen), Gn (not chosen)

| file | copied to | source |
|---|---|---|
| atlas/cartridges/202609071213-place-global-search-v9-5.js | Ug/202609071213-place-global-search-v9-5.js | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/atlas/cartridges/202609071213-place-global-search-v9-5.js) |
| atlas/parts/202609040229-place-global-search-arrival-identity.js | Ug/202609040229-place-global-search-arrival-identity.js | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/atlas/parts/202609040229-place-global-search-arrival-identity.js) |
| sandbox/202609051152/atlas/cartridges/202609041945-place-global-search-v9-5.js | Ug/202609041945-place-global-search-v9-5.js | [testcode](https://github.com/Ventusltd/testcode/blob/e8f6222226a7254ce08091b549803c3c1b92d979/sandbox/202609051152/atlas/cartridges/202609041945-place-global-search-v9-5.js) |
| sandbox/202609052028/atlas/cartridges/202609052028-uk-gazetteer-flyto.js | Ug/202609052028-uk-gazetteer-flyto.js | [testcode](https://github.com/Ventusltd/testcode/blob/e8f6222226a7254ce08091b549803c3c1b92d979/sandbox/202609052028/atlas/cartridges/202609052028-uk-gazetteer-flyto.js) |
| apps/substation-finder/Ps/202609040229-place-global-search-arrival-identity.js | Ug/202609040229-place-global-search-arrival-identity.js | [code-generator](https://github.com/Ventusltd/code-generator/blob/130a182bd4ec84525f985700bab9448921812ba5/apps/substation-finder/Ps/202609040229-place-global-search-arrival-identity.js) |
| atlas/cartridges/202608301136-place-postcode-search.js | Ug/202608301136-place-postcode-search.js | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/atlas/cartridges/202608301136-place-postcode-search.js) |
| atlas/releases/202608300453-atlas-v9/202608291818-place-postcode-search.js | Ug/202608291818-place-postcode-search.js | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/atlas/releases/202608300453-atlas-v9/202608291818-place-postcode-search.js) |
| atlas/releases/202608291818-atlas-v9/v9-parquet-fetch-bridge.js | Ug/v9-parquet-fetch-bridge.js | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/atlas/releases/202608291818-atlas-v9/v9-parquet-fetch-bridge.js) |

### Ps · #48 · Place search and arrival

Search any UK place or project, fly the map there, and arrive on the exact feature a deep link names.

41 functions inside · from gridatlas, code-generator, pipelinenews, testcode, globalgrid2050 · loads after Ss (not chosen), Wf (not chosen)

| file | copied to | source |
|---|---|---|
| atlas/cartridges/202609071213-place-global-search-v9-5.js | Ps/202609071213-place-global-search-v9-5.js | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/atlas/cartridges/202609071213-place-global-search-v9-5.js) |
| apps/substation-finder/Ps/202609071213-place-global-search-v9-5.js | Ps/202609071213-place-global-search-v9-5.js | [code-generator](https://github.com/Ventusltd/code-generator/blob/130a182bd4ec84525f985700bab9448921812ba5/apps/substation-finder/Ps/202609071213-place-global-search-v9-5.js) |
| apps/substation-finder/Ug/202609071213-place-global-search-v9-5.js | Ps/202609071213-place-global-search-v9-5.js | [code-generator](https://github.com/Ventusltd/code-generator/blob/130a182bd4ec84525f985700bab9448921812ba5/apps/substation-finder/Ug/202609071213-place-global-search-v9-5.js) |
| tools/proofs/202609040219-transit-layer-availability.browser.mjs | Ps/202609040219-transit-layer-availability.browser.mjs | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/tools/proofs/202609040219-transit-layer-availability.browser.mjs) |
| tools/proofs/202609040229-arrival-identity.browser.mjs | Ps/202609040229-arrival-identity.browser.mjs | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/tools/proofs/202609040229-arrival-identity.browser.mjs) |
| atman/202608282348-verify-v9-6-2-equivalence.mjs | Ps/202608282348-verify-v9-6-2-equivalence.mjs | [pipelinenews](https://github.com/Ventusltd/pipelinenews/blob/4980096b57cb35f63ad2d80bded5687beb2a9532/atman/202608282348-verify-v9-6-2-equivalence.mjs) |
| apps/substation-finder/Ps/202609040219-transit-layer-availability.browser.mjs | Ps/202609040219-transit-layer-availability.browser.mjs | [code-generator](https://github.com/Ventusltd/code-generator/blob/130a182bd4ec84525f985700bab9448921812ba5/apps/substation-finder/Ps/202609040219-transit-layer-availability.browser.mjs) |
| apps/substation-finder/Ps/202609040229-arrival-identity.browser.mjs | Ps/202609040229-arrival-identity.browser.mjs | [code-generator](https://github.com/Ventusltd/code-generator/blob/130a182bd4ec84525f985700bab9448921812ba5/apps/substation-finder/Ps/202609040229-arrival-identity.browser.mjs) |

### Dt · #47 · The MAP button (deep-link contract)

The contract every MAP link obeys, so a link always arrives on the right feature.

131 functions inside · from chatgpt-audits, gridatlas, code-generator, globalgrid2050, claude, companies, data-gridatlas, pipelinenews, data-grid-gb, ventus-grid-engine, testcode · loads after St (not chosen), Tp (not chosen), Pr (not chosen), Gn (not chosen)

| file | copied to | source |
|---|---|---|
| automation/202608310209-hourly-logic-review/review.py | Dt/review.py | [chatgpt-audits](https://github.com/Ventusltd/chatgpt-audits/blob/2ffb435d105d3729be764e20f1fce6720d681133/automation/202608310209-hourly-logic-review/review.py) |
| 202608310050-gridatlas-next-version-builders/tools/202608310050-build-n1-deep-link-candidates.py | Dt/202608310050-build-n1-deep-link-candidates.py | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/202608310050-gridatlas-next-version-builders/tools/202608310050-build-n1-deep-link-candidates.py) |
| 202608310050-gridatlas-next-version-builders/tools/202608310050-build-repd-ref-index.py | Dt/202608310050-build-repd-ref-index.py | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/202608310050-gridatlas-next-version-builders/tools/202608310050-build-repd-ref-index.py) |
| 202608310050-gridatlas-next-version-builders/tools/202608310050-calibrate-design-freeze.py | Dt/202608310050-calibrate-design-freeze.py | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/202608310050-gridatlas-next-version-builders/tools/202608310050-calibrate-design-freeze.py) |
| apps/substation-finder/Dt/202608310050-build-n1-deep-link-candidates.py | Dt/202608310050-build-n1-deep-link-candidates.py | [code-generator](https://github.com/Ventusltd/code-generator/blob/130a182bd4ec84525f985700bab9448921812ba5/apps/substation-finder/Dt/202608310050-build-n1-deep-link-candidates.py) |
| apps/substation-finder/Dt/202608310050-build-repd-ref-index.py | Dt/202608310050-build-repd-ref-index.py | [code-generator](https://github.com/Ventusltd/code-generator/blob/130a182bd4ec84525f985700bab9448921812ba5/apps/substation-finder/Dt/202608310050-build-repd-ref-index.py) |
| apps/substation-finder/Dt/202608310050-calibrate-design-freeze.py | Dt/202608310050-calibrate-design-freeze.py | [code-generator](https://github.com/Ventusltd/code-generator/blob/130a182bd4ec84525f985700bab9448921812ba5/apps/substation-finder/Dt/202608310050-calibrate-design-freeze.py) |
| apps/substation-finder/Dt/review.py | Dt/review.py | [code-generator](https://github.com/Ventusltd/code-generator/blob/130a182bd4ec84525f985700bab9448921812ba5/apps/substation-finder/Dt/review.py) |

## Load order

The assembly page loads the parts in this order: a block's dependencies among the chosen blocks first, then the order given.

1. `Si/202609062358-substation-intelligence-v9-63.js` (Si) — script
2. `Si/202609031958-menu-bar.js` (Si) — script
3. `Si/202609040045-ventus-corev8engine-deep-link-receiver.js` (Si) — script
4. `Si/ventus-corev8engine.js` (Si) — script
5. `Si/ventus-corev7engine.js` (Si) — script
6. `Vn/nearest-search.mjs` (Vn) — module
7. `Vn/v9-nearest-search.js` (Vn) — script
8. `Ug/202609071213-place-global-search-v9-5.js` (Ug) — script
9. `Ug/202609040229-place-global-search-arrival-identity.js` (Ug) — script
10. `Ug/202609041945-place-global-search-v9-5.js` (Ug) — script
11. `Ug/202609052028-uk-gazetteer-flyto.js` (Ug) — script
12. `Ug/202608301136-place-postcode-search.js` (Ug) — script
13. `Ug/202608291818-place-postcode-search.js` (Ug) — script
14. `Ug/v9-parquet-fetch-bridge.js` (Ug) — script
15. `Ps/202609071213-place-global-search-v9-5.js` (Ps) — script
16. `Ps/202609040219-transit-layer-availability.browser.mjs` (Ps) — module
17. `Ps/202609040229-arrival-identity.browser.mjs` (Ps) — module
18. `Ps/202608282348-verify-v9-6-2-equivalence.mjs` (Ps) — module
19. `Dt/review.py` (Dt) — python, not loaded
20. `Dt/202608310050-build-n1-deep-link-candidates.py` (Dt) — python, not loaded
21. `Dt/202608310050-build-repd-ref-index.py` (Dt) — python, not loaded
22. `Dt/202608310050-calibrate-design-freeze.py` (Dt) — python, not loaded

## Still needed from outside

These names are used by the parts and defined nowhere in the table. Each is an input on the assembly page and a work order for the agents; the generator does not guess.

- `maplibregl` — library (global object); the MapLibre map library; used by Si at [atlas/cartridges/202609062358-substation-intelligence-v9-63.js:30](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/atlas/cartridges/202609062358-substation-intelligence-v9-63.js#L30) → work order substation-finder-1

## Other names the table listed

Listed as needs by the periodic table, but nothing is written for them, for the reason given.

| name | what it is |
|---|---|
| `position` | defined by another block of the table: add it ([Sa](https://ventusltd.github.io/stars/table.html?block=Sa)) |
| `resolve` | defined by another block of the table: add it ([Ss](https://ventusltd.github.io/stars/table.html?block=Ss), [Wf](https://ventusltd.github.io/stars/table.html?block=Wf)) |
| `BLOCK_CLASS` | declared inside the copied files; nothing to write |
| `coord` | declared inside the copied files; nothing to write |
| `doc` | declared inside the copied files; nothing to write |
| `e` | declared inside the copied files; nothing to write |
| `GB_ID` | declared inside the copied files; nothing to write |
| `globalResult` | declared inside the copied files; nothing to write |
| `LEDGER_ID` | declared inside the copied files; nothing to write |
| `min` | declared inside the copied files; nothing to write |
| `obj` | declared inside the copied files; nothing to write |
| `PANEL_ID` | declared inside the copied files; nothing to write |
| `rows` | declared inside the copied files; nothing to write |
| `subs` | declared inside the copied files; nothing to write |
| `then` | declared inside the copied files; nothing to write |
| `time` | declared inside the copied files; nothing to write |
| `TRAY_ID` | declared inside the copied files; nothing to write |
| `alert` | provided by the web browser |
| `atob` | provided by the web browser |
| `Blob` | provided by the web browser |
| `CompressionStream` | provided by the web browser |
| `createImageBitmap` | provided by the web browser |
| `crypto` | provided by the web browser |
| `document` | provided by the web browser |
| `Event` | provided by the web browser |
| `fetch` | provided by the web browser ([Pr](https://ventusltd.github.io/stars/table.html?block=Pr)) |
| `File` | provided by the web browser |
| `getComputedStyle` | provided by the web browser |
| `history` | provided by the web browser |
| `ImageCapture` | provided by the web browser |
| `localStorage` | provided by the web browser |
| `location` | provided by the web browser |
| `MutationObserver` | provided by the web browser |
| `navigator` | provided by the web browser |
| `performance` | provided by the web browser |
| `requestAnimationFrame` | provided by the web browser |
| `ResizeObserver` | provided by the web browser |
| `Response` | provided by the web browser |
| `window` | provided by the web browser |
| `Worker` | provided by the web browser |
| `XMLHttpRequest` | provided by the web browser |
| `Buffer` | provided by Node.js, not by a web page |
| `process` | provided by Node.js, not by a web page |
| `claimAgain` | not in the copied files; the table saw it in another version of the block |
| `FIELD` | not in the copied files; the table saw it in another version of the block |
| `interruptReason` | not in the copied files; the table saw it in another version of the block |
| `layersMarker` | not in the copied files; the table saw it in another version of the block |
| `queryError` | not in the copied files; the table saw it in another version of the block |
| `retryRows` | not in the copied files; the table saw it in another version of the block |
| `START` | not in the copied files; the table saw it in another version of the block |
| `tab` | not in the copied files; the table saw it in another version of the block |
| `a` | a word from comments or text, not code |
| `actually` | a word from comments or text, not code |
| `again` | a word from comments or text, not code |
| `an` | a word from comments or text, not code |
| `arrival` | a word from comments or text, not code |
| `fileBlocks` | a word from comments or text, not code |
| `first` | a word from comments or text, not code |
| `genuinely` | a word from comments or text, not code |
| `has` | a word from comments or text, not code |
| `headerLines` | a word from comments or text, not code |
| `is` | a word from comments or text, not code |
| `leave` | a word from comments or text, not code |
| `never` | a word from comments or text, not code |
| `not` | a word from comments or text, not code |
| `outcome` | a word from comments or text, not code |
| `produced` | a word from comments or text, not code |
| `search` | a word from comments or text, not code |
| `seen` | a word from comments or text, not code |
| `splitIntoVolumes` | a word from comments or text, not code |
| `stranded` | a word from comments or text, not code |
| `that` | a word from comments or text, not code |
| `the` | a word from comments or text, not code |
| `until` | a word from comments or text, not code |
| `visible` | a word from comments or text, not code |

## Chemistry

- Si + Vn: untested (25%) — no evidence either way → work order substation-finder-2
- Si + Ug: unstable (77%) — 3261 of 4216 composition tests green
- Si + Ps: seen together (90%) — already used together in 5 app folders, never composition-tested
- Si + Dt: seen together (90%) — already used together in 4 app folders, never composition-tested
- Vn + Ug: untested (25%) — no evidence either way → work order substation-finder-3
- Vn + Ps: untested (25%) — no evidence either way → work order substation-finder-4
- Vn + Dt: untested (25%) — no evidence either way → work order substation-finder-5
- Ug + Ps: seen together (90%) — already used together in 7 app folders, never composition-tested
- Ug + Dt: seen together (90%) — already used together in 6 app folders, never composition-tested
- Ps + Dt: seen together (90%) — already used together in 8 app folders, never composition-tested

## Open decisions

No decision record concerns these blocks.


## Work orders

5 work orders in [WORK-ORDERS.md](WORK-ORDERS.md), one request file each under `requests/`, raised as GitHub issues labelled `work-order`.

## Proof

Every file is fetched from GitHub at the exact commit the modular star recorded and copied unchanged. The workflow checks that each JavaScript file parses and that the assembly page declares an input for every missing name. That proves the app is assembled correctly, not that it is right for its new purpose; the assembly page, opened in a browser, shows which files load and which throw.
