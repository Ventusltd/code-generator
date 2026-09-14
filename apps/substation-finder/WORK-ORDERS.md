# Work orders — Substation finder on a map

Written 2026-09-14 13:00 UTC. Each order is one file under `requests/` and one GitHub issue labelled [work-order](https://github.com/Ventusltd/code-generator/issues?q=is%3Aissue+label%3Awork-order). An agent takes an order, writes the missing package as a new file in a repository, and the next hourly run of the star numbers it.

## substation-finder-1 · maplibregl: supply the library for substation-finder

**What is missing.** `maplibregl` — library (global object). the MapLibre map library

**Where it will be used.** Si · #35 · substation-intelligence

- [atlas/cartridges/202609062358-substation-intelligence-v9-63.js:30](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/atlas/cartridges/202609062358-substation-intelligence-v9-63.js#L30) at ece8481
- [atlas/parts/202609040045-ventus-corev8engine-deep-link-receiver.js:4](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/atlas/parts/202609040045-ventus-corev8engine-deep-link-receiver.js#L4) at ece8481
- [atlas/releases/202608300453-atlas-v9/ventus-corev8engine.js:4](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/atlas/releases/202608300453-atlas-v9/ventus-corev8engine.js#L4) at ece8481
- [apps/substation-finder/Si/ventus-corev7engine.js:4](https://github.com/Ventusltd/code-generator/blob/130a182bd4ec84525f985700bab9448921812ba5/apps/substation-finder/Si/ventus-corev7engine.js#L4) at 130a182
- [apps/substation-finder/Si/ventus-corev8engine.js:4](https://github.com/Ventusltd/code-generator/blob/130a182bd4ec84525f985700bab9448921812ba5/apps/substation-finder/Si/ventus-corev8engine.js#L4) at 130a182
- [repd_grid_atlasv7/ventus-corev7engine.js:4](https://github.com/Ventusltd/globalgrid2050/blob/065a39d081f5ba131de4001167a11f5920d1fe93/repd_grid_atlasv7/ventus-corev7engine.js#L4) at 065a39d
- [repd_grid_atlasv8/ventus-corev8engine.js:4](https://github.com/Ventusltd/globalgrid2050/blob/065a39d081f5ba131de4001167a11f5920d1fe93/repd_grid_atlasv8/ventus-corev8engine.js#L4) at 065a39d

**What it must provide.** `maplibregl` (library (global object))

**Acceptance.** https://ventusltd.github.io/code-generator/apps/substation-finder/index.html loads without "maplibregl is not defined"; its needs table shows maplibregl as provided.

**Brief.** The app substation-finder uses the library global `maplibregl` (MapLibre GL JS, the map library) in Si, first at Ventusltd/gridatlas/atlas/cartridges/202609062358-substation-intelligence-v9-63.js@ece8481:30. Decide which version the app should load and add one script tag for it to apps/substation-finder/index.html before the parts; record the version and its source URL in this request. Nothing in the copied files may change.

Request file: `requests/substation-finder-1.json` · issue [#1](https://github.com/Ventusltd/code-generator/issues/1)

## substation-finder-2 · Si + Vn: test substation-intelligence with Nearest substation search for substation-finder

**What is missing.** `Si+Vn` — compatibility test. substation-intelligence and Nearest substation search have never been loaded together (no evidence either way).

**Where it will be used.** Si · #35 · substation-intelligence; Vn · #18 · Nearest substation search

- [atlas/cartridges/202609062358-substation-intelligence-v9-63.js](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/atlas/cartridges/202609062358-substation-intelligence-v9-63.js) at ece8481
- [atlas/modules/202609031958-menu-bar.js](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/atlas/modules/202609031958-menu-bar.js) at ece8481
- [atlas/parts/202609040045-ventus-corev8engine-deep-link-receiver.js](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/atlas/parts/202609040045-ventus-corev8engine-deep-link-receiver.js) at ece8481
- [atlas/releases/202608300453-atlas-v9/ventus-corev8engine.js](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/atlas/releases/202608300453-atlas-v9/ventus-corev8engine.js) at ece8481
- [apps/substation-finder/Si/ventus-corev7engine.js](https://github.com/Ventusltd/code-generator/blob/130a182bd4ec84525f985700bab9448921812ba5/apps/substation-finder/Si/ventus-corev7engine.js) at 130a182
- [apps/substation-finder/Si/ventus-corev8engine.js](https://github.com/Ventusltd/code-generator/blob/130a182bd4ec84525f985700bab9448921812ba5/apps/substation-finder/Si/ventus-corev8engine.js) at 130a182
- [repd_grid_atlasv7/ventus-corev7engine.js](https://github.com/Ventusltd/globalgrid2050/blob/065a39d081f5ba131de4001167a11f5920d1fe93/repd_grid_atlasv7/ventus-corev7engine.js) at 065a39d
- [repd_grid_atlasv8/ventus-corev8engine.js](https://github.com/Ventusltd/globalgrid2050/blob/065a39d081f5ba131de4001167a11f5920d1fe93/repd_grid_atlasv8/ventus-corev8engine.js) at 065a39d

**What it must provide.** `tests/Si+Vn` (a recorded composition test: the two blocks' files loaded together, every error listed, verdict proven or fails)

**Acceptance.** https://ventusltd.github.io/code-generator/apps/substation-finder/index.html loads the files of Si and Vn with no error attributed to either; the chemistry for Si+Vn on the periodic table changes from untested to a verdict with evidence.

**Brief.** Blocks Si (substation-intelligence) and Vn (Nearest substation search) are chosen together in substation-finder but the periodic table has no evidence they work together. Load the files listed (the assembly page apps/substation-finder/index.html does this in order) and record what happens: which file throws, on what name, and whether the two blocks need the same value under different names. Report the result as a composition test so the table can carry a verdict; do not change the copied files.

Request file: `requests/substation-finder-2.json` · issue [#2](https://github.com/Ventusltd/code-generator/issues/2)

## substation-finder-3 · Vn + Ug: test Nearest substation search with uk-gazetteer-flyto for substation-finder

**What is missing.** `Vn+Ug` — compatibility test. Nearest substation search and uk-gazetteer-flyto have never been loaded together (no evidence either way).

**Where it will be used.** Vn · #18 · Nearest substation search; Ug · #33 · uk-gazetteer-flyto

- [apps/substation-finder/Vn/nearest-search.mjs](https://github.com/Ventusltd/code-generator/blob/130a182bd4ec84525f985700bab9448921812ba5/apps/substation-finder/Vn/nearest-search.mjs) at 130a182
- [apps/substation-finder/Vn/v9-nearest-search.js](https://github.com/Ventusltd/code-generator/blob/130a182bd4ec84525f985700bab9448921812ba5/apps/substation-finder/Vn/v9-nearest-search.js) at 130a182
- [engine/v9-nearest-search.js](https://github.com/Ventusltd/ventus-grid-engine/blob/ba78b600f3004d6873e8f442f296f5b27675cfa7/engine/v9-nearest-search.js) at ba78b60
- [sources/v9-extracts/nearest-search.mjs](https://github.com/Ventusltd/ventus-grid-engine/blob/ba78b600f3004d6873e8f442f296f5b27675cfa7/sources/v9-extracts/nearest-search.mjs) at ba78b60
- [atlas/cartridges/202609071213-place-global-search-v9-5.js](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/atlas/cartridges/202609071213-place-global-search-v9-5.js) at ece8481
- [atlas/parts/202609040229-place-global-search-arrival-identity.js](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/atlas/parts/202609040229-place-global-search-arrival-identity.js) at ece8481
- [sandbox/202609051152/atlas/cartridges/202609041945-place-global-search-v9-5.js](https://github.com/Ventusltd/testcode/blob/e8f6222226a7254ce08091b549803c3c1b92d979/sandbox/202609051152/atlas/cartridges/202609041945-place-global-search-v9-5.js) at e8f6222
- [sandbox/202609052028/atlas/cartridges/202609052028-uk-gazetteer-flyto.js](https://github.com/Ventusltd/testcode/blob/e8f6222226a7254ce08091b549803c3c1b92d979/sandbox/202609052028/atlas/cartridges/202609052028-uk-gazetteer-flyto.js) at e8f6222

**What it must provide.** `tests/Vn+Ug` (a recorded composition test: the two blocks' files loaded together, every error listed, verdict proven or fails)

**Acceptance.** https://ventusltd.github.io/code-generator/apps/substation-finder/index.html loads the files of Vn and Ug with no error attributed to either; the chemistry for Vn+Ug on the periodic table changes from untested to a verdict with evidence.

**Brief.** Blocks Vn (Nearest substation search) and Ug (uk-gazetteer-flyto) are chosen together in substation-finder but the periodic table has no evidence they work together. Load the files listed (the assembly page apps/substation-finder/index.html does this in order) and record what happens: which file throws, on what name, and whether the two blocks need the same value under different names. Report the result as a composition test so the table can carry a verdict; do not change the copied files.

Request file: `requests/substation-finder-3.json` · issue [#3](https://github.com/Ventusltd/code-generator/issues/3)

## substation-finder-4 · Vn + Ps: test Nearest substation search with Place search and arrival for substation-finder

**What is missing.** `Vn+Ps` — compatibility test. Nearest substation search and Place search and arrival have never been loaded together (no evidence either way).

**Where it will be used.** Vn · #18 · Nearest substation search; Ps · #48 · Place search and arrival

- [apps/substation-finder/Vn/nearest-search.mjs](https://github.com/Ventusltd/code-generator/blob/130a182bd4ec84525f985700bab9448921812ba5/apps/substation-finder/Vn/nearest-search.mjs) at 130a182
- [apps/substation-finder/Vn/v9-nearest-search.js](https://github.com/Ventusltd/code-generator/blob/130a182bd4ec84525f985700bab9448921812ba5/apps/substation-finder/Vn/v9-nearest-search.js) at 130a182
- [engine/v9-nearest-search.js](https://github.com/Ventusltd/ventus-grid-engine/blob/ba78b600f3004d6873e8f442f296f5b27675cfa7/engine/v9-nearest-search.js) at ba78b60
- [sources/v9-extracts/nearest-search.mjs](https://github.com/Ventusltd/ventus-grid-engine/blob/ba78b600f3004d6873e8f442f296f5b27675cfa7/sources/v9-extracts/nearest-search.mjs) at ba78b60
- [atlas/cartridges/202609071213-place-global-search-v9-5.js](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/atlas/cartridges/202609071213-place-global-search-v9-5.js) at ece8481
- [apps/substation-finder/Ps/202609071213-place-global-search-v9-5.js](https://github.com/Ventusltd/code-generator/blob/130a182bd4ec84525f985700bab9448921812ba5/apps/substation-finder/Ps/202609071213-place-global-search-v9-5.js) at 130a182
- [apps/substation-finder/Ug/202609071213-place-global-search-v9-5.js](https://github.com/Ventusltd/code-generator/blob/130a182bd4ec84525f985700bab9448921812ba5/apps/substation-finder/Ug/202609071213-place-global-search-v9-5.js) at 130a182
- [tools/proofs/202609040219-transit-layer-availability.browser.mjs](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/tools/proofs/202609040219-transit-layer-availability.browser.mjs) at ece8481

**What it must provide.** `tests/Vn+Ps` (a recorded composition test: the two blocks' files loaded together, every error listed, verdict proven or fails)

**Acceptance.** https://ventusltd.github.io/code-generator/apps/substation-finder/index.html loads the files of Vn and Ps with no error attributed to either; the chemistry for Vn+Ps on the periodic table changes from untested to a verdict with evidence.

**Brief.** Blocks Vn (Nearest substation search) and Ps (Place search and arrival) are chosen together in substation-finder but the periodic table has no evidence they work together. Load the files listed (the assembly page apps/substation-finder/index.html does this in order) and record what happens: which file throws, on what name, and whether the two blocks need the same value under different names. Report the result as a composition test so the table can carry a verdict; do not change the copied files.

Request file: `requests/substation-finder-4.json` · issue [#4](https://github.com/Ventusltd/code-generator/issues/4)

## substation-finder-5 · Vn + Dt: test Nearest substation search with The MAP button (deep-link contract) for substation-finder

**What is missing.** `Vn+Dt` — compatibility test. Nearest substation search and The MAP button (deep-link contract) have never been loaded together (no evidence either way).

**Where it will be used.** Vn · #18 · Nearest substation search; Dt · #47 · The MAP button (deep-link contract)

- [apps/substation-finder/Vn/nearest-search.mjs](https://github.com/Ventusltd/code-generator/blob/130a182bd4ec84525f985700bab9448921812ba5/apps/substation-finder/Vn/nearest-search.mjs) at 130a182
- [apps/substation-finder/Vn/v9-nearest-search.js](https://github.com/Ventusltd/code-generator/blob/130a182bd4ec84525f985700bab9448921812ba5/apps/substation-finder/Vn/v9-nearest-search.js) at 130a182
- [engine/v9-nearest-search.js](https://github.com/Ventusltd/ventus-grid-engine/blob/ba78b600f3004d6873e8f442f296f5b27675cfa7/engine/v9-nearest-search.js) at ba78b60
- [sources/v9-extracts/nearest-search.mjs](https://github.com/Ventusltd/ventus-grid-engine/blob/ba78b600f3004d6873e8f442f296f5b27675cfa7/sources/v9-extracts/nearest-search.mjs) at ba78b60
- [automation/202608310209-hourly-logic-review/review.py](https://github.com/Ventusltd/chatgpt-audits/blob/2ffb435d105d3729be764e20f1fce6720d681133/automation/202608310209-hourly-logic-review/review.py) at 2ffb435
- [202608310050-gridatlas-next-version-builders/tools/202608310050-build-n1-deep-link-candidates.py](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/202608310050-gridatlas-next-version-builders/tools/202608310050-build-n1-deep-link-candidates.py) at ece8481
- [202608310050-gridatlas-next-version-builders/tools/202608310050-build-repd-ref-index.py](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/202608310050-gridatlas-next-version-builders/tools/202608310050-build-repd-ref-index.py) at ece8481
- [202608310050-gridatlas-next-version-builders/tools/202608310050-calibrate-design-freeze.py](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/202608310050-gridatlas-next-version-builders/tools/202608310050-calibrate-design-freeze.py) at ece8481

**What it must provide.** `tests/Vn+Dt` (a recorded composition test: the two blocks' files loaded together, every error listed, verdict proven or fails)

**Acceptance.** https://ventusltd.github.io/code-generator/apps/substation-finder/index.html loads the files of Vn and Dt with no error attributed to either; the chemistry for Vn+Dt on the periodic table changes from untested to a verdict with evidence.

**Brief.** Blocks Vn (Nearest substation search) and Dt (The MAP button (deep-link contract)) are chosen together in substation-finder but the periodic table has no evidence they work together. Load the files listed (the assembly page apps/substation-finder/index.html does this in order) and record what happens: which file throws, on what name, and whether the two blocks need the same value under different names. Report the result as a composition test so the table can carry a verdict; do not change the copied files.

Request file: `requests/substation-finder-5.json` · issue [#5](https://github.com/Ventusltd/code-generator/issues/5)

