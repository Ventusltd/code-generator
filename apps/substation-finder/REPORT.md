# Substation finder on a map

Built 2026-09-14 12:29 UTC from 5 parts of the [periodic table](https://ventusltd.github.io/stars/table.html). Rebuild with:

```
node generate.mjs --name substation-finder --blocks Si,Vn,Ug,Ps,Dt
```

## Bill of materials

### Si · #35 · substation-intelligence

A plug-in part of the GridAtlas map.

664 functions inside · from globalgrid2050, gridatlas, testcode, code-generator, youengineer-code-review, ventus-grid-engine, teleprinter, spiders

| file | copied to | source |
|---|---|---|
| repd_grid_atlasv3/index.html | Si/index.html | [globalgrid2050](https://github.com/Ventusltd/globalgrid2050/blob/a387cac3aa3f09b8cdd27d3ed8040d661303f127/repd_grid_atlasv3/index.html) |
| repd_grid_atlasv4/index.html | Si/index.html | [globalgrid2050](https://github.com/Ventusltd/globalgrid2050/blob/a387cac3aa3f09b8cdd27d3ed8040d661303f127/repd_grid_atlasv4/index.html) |
| repd_grid_atlasv6/ventus-corev6engine.js | Si/ventus-corev6engine.js | [globalgrid2050](https://github.com/Ventusltd/globalgrid2050/blob/a387cac3aa3f09b8cdd27d3ed8040d661303f127/repd_grid_atlasv6/ventus-corev6engine.js) |
| repd_grid_atlasv7/ventus-corev7engine.js | Si/ventus-corev7engine.js | [globalgrid2050](https://github.com/Ventusltd/globalgrid2050/blob/a387cac3aa3f09b8cdd27d3ed8040d661303f127/repd_grid_atlasv7/ventus-corev7engine.js) |
| repd_grid_atlasv8/ventus-corev8engine.js | Si/ventus-corev8engine.js | [globalgrid2050](https://github.com/Ventusltd/globalgrid2050/blob/a387cac3aa3f09b8cdd27d3ed8040d661303f127/repd_grid_atlasv8/ventus-corev8engine.js) |
| testcode/202609060537/atlas/cartridges/202609060537-substation-intelligence.js | Si/202609060537-substation-intelligence.js | [globalgrid2050](https://github.com/Ventusltd/globalgrid2050/blob/a387cac3aa3f09b8cdd27d3ed8040d661303f127/testcode/202609060537/atlas/cartridges/202609060537-substation-intelligence.js) |
| ventus-core.js | Si/ventus-core.js | [globalgrid2050](https://github.com/Ventusltd/globalgrid2050/blob/a387cac3aa3f09b8cdd27d3ed8040d661303f127/ventus-core.js) |
| atlas/cartridges/202609062358-substation-intelligence-v9-63.js | Si/202609062358-substation-intelligence-v9-63.js | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/atlas/cartridges/202609062358-substation-intelligence-v9-63.js) |

### Vn · #18 · Nearest substation search

Finds the nearest substations and lines to a point, the search the atlas runs on every click.

2 functions inside · from code-generator, ventus-grid-engine

| file | copied to | source |
|---|---|---|
| apps/substation-finder/Vn/nearest-search.mjs | Vn/nearest-search.mjs | [code-generator](https://github.com/Ventusltd/code-generator/blob/e1217f540cf7ced342109a87f118627c1330cdbd/apps/substation-finder/Vn/nearest-search.mjs) |
| apps/substation-finder/Vn/v9-nearest-search.js | Vn/v9-nearest-search.js | [code-generator](https://github.com/Ventusltd/code-generator/blob/e1217f540cf7ced342109a87f118627c1330cdbd/apps/substation-finder/Vn/v9-nearest-search.js) |
| engine/v9-nearest-search.js | Vn/v9-nearest-search.js | [ventus-grid-engine](https://github.com/Ventusltd/ventus-grid-engine/blob/e3deb3d0546cad0b63f2044a4a0e1af2bd3162d6/engine/v9-nearest-search.js) |
| sources/v9-extracts/nearest-search.mjs | Vn/nearest-search.mjs | [ventus-grid-engine](https://github.com/Ventusltd/ventus-grid-engine/blob/e3deb3d0546cad0b63f2044a4a0e1af2bd3162d6/sources/v9-extracts/nearest-search.mjs) |

### Ug · #33 · uk-gazetteer-flyto

A plug-in part of the GridAtlas map.

52 functions inside · from globalgrid2050, gridatlas, testcode, code-generator, ventus-grid-engine

| file | copied to | source |
|---|---|---|
| testcode/202609051152/atlas/cartridges/202609041945-place-global-search-v9-5.js | Ug/202609041945-place-global-search-v9-5.js | [globalgrid2050](https://github.com/Ventusltd/globalgrid2050/blob/a387cac3aa3f09b8cdd27d3ed8040d661303f127/testcode/202609051152/atlas/cartridges/202609041945-place-global-search-v9-5.js) |
| testcode/202609052023/atlas/cartridges/202609052023-uk-gazetteer-flyto.js | Ug/202609052023-uk-gazetteer-flyto.js | [globalgrid2050](https://github.com/Ventusltd/globalgrid2050/blob/a387cac3aa3f09b8cdd27d3ed8040d661303f127/testcode/202609052023/atlas/cartridges/202609052023-uk-gazetteer-flyto.js) |
| atlas/cartridges/202609071213-place-global-search-v9-5.js | Ug/202609071213-place-global-search-v9-5.js | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/atlas/cartridges/202609071213-place-global-search-v9-5.js) |
| atlas/parts/202609040229-place-global-search-arrival-identity.js | Ug/202609040229-place-global-search-arrival-identity.js | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/atlas/parts/202609040229-place-global-search-arrival-identity.js) |
| sandbox/202609051152/atlas/cartridges/202609041945-place-global-search-v9-5.js | Ug/202609041945-place-global-search-v9-5.js | [testcode](https://github.com/Ventusltd/testcode/blob/e8f6222226a7254ce08091b549803c3c1b92d979/sandbox/202609051152/atlas/cartridges/202609041945-place-global-search-v9-5.js) |
| sandbox/202609051623/atlas/cartridges/202609051623-uk-gazetteer-flyto.js | Ug/202609051623-uk-gazetteer-flyto.js | [testcode](https://github.com/Ventusltd/testcode/blob/e8f6222226a7254ce08091b549803c3c1b92d979/sandbox/202609051623/atlas/cartridges/202609051623-uk-gazetteer-flyto.js) |
| atlas/cartridges/202608301136-place-postcode-search.js | Ug/202608301136-place-postcode-search.js | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/atlas/cartridges/202608301136-place-postcode-search.js) |
| atlas/releases/202608300453-atlas-v9/202608291818-place-postcode-search.js | Ug/202608291818-place-postcode-search.js | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/atlas/releases/202608300453-atlas-v9/202608291818-place-postcode-search.js) |

### Ps · #48 · Place search and arrival

Search any UK place or project, fly the map there, and arrive on the exact feature a deep link names.

41 functions inside · from gridatlas, code-generator, pipelinenews, globalgrid2050, testcode

| file | copied to | source |
|---|---|---|
| atlas/cartridges/202609071213-place-global-search-v9-5.js | Ps/202609071213-place-global-search-v9-5.js | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/atlas/cartridges/202609071213-place-global-search-v9-5.js) |
| apps/substation-finder/Ps/202609071213-place-global-search-v9-5.js | Ps/202609071213-place-global-search-v9-5.js | [code-generator](https://github.com/Ventusltd/code-generator/blob/e1217f540cf7ced342109a87f118627c1330cdbd/apps/substation-finder/Ps/202609071213-place-global-search-v9-5.js) |
| apps/substation-finder/Ug/202609071213-place-global-search-v9-5.js | Ps/202609071213-place-global-search-v9-5.js | [code-generator](https://github.com/Ventusltd/code-generator/blob/e1217f540cf7ced342109a87f118627c1330cdbd/apps/substation-finder/Ug/202609071213-place-global-search-v9-5.js) |
| tools/proofs/202609040219-transit-layer-availability.browser.mjs | Ps/202609040219-transit-layer-availability.browser.mjs | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/tools/proofs/202609040219-transit-layer-availability.browser.mjs) |
| tools/proofs/202609040229-arrival-identity.browser.mjs | Ps/202609040229-arrival-identity.browser.mjs | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/tools/proofs/202609040229-arrival-identity.browser.mjs) |
| atman/202608282348-verify-v9-6-2-equivalence.mjs | Ps/202608282348-verify-v9-6-2-equivalence.mjs | [pipelinenews](https://github.com/Ventusltd/pipelinenews/blob/4980096b57cb35f63ad2d80bded5687beb2a9532/atman/202608282348-verify-v9-6-2-equivalence.mjs) |
| apps/substation-finder/Ps/202609040219-transit-layer-availability.browser.mjs | Ps/202609040219-transit-layer-availability.browser.mjs | [code-generator](https://github.com/Ventusltd/code-generator/blob/e1217f540cf7ced342109a87f118627c1330cdbd/apps/substation-finder/Ps/202609040219-transit-layer-availability.browser.mjs) |
| apps/substation-finder/Ps/202609040229-arrival-identity.browser.mjs | Ps/202609040229-arrival-identity.browser.mjs | [code-generator](https://github.com/Ventusltd/code-generator/blob/e1217f540cf7ced342109a87f118627c1330cdbd/apps/substation-finder/Ps/202609040229-arrival-identity.browser.mjs) |

### Dt · #47 · The MAP button (deep-link contract)

The contract every MAP link obeys, so a link always arrives on the right feature.

131 functions inside · from chatgpt-audits, globalgrid2050, gridatlas, code-generator, claude, companies, data-gridatlas, pipelinenews, data-grid-gb, ventus-grid-engine, testcode

| file | copied to | source |
|---|---|---|
| automation/202608310209-hourly-logic-review/review.py | Dt/review.py | [chatgpt-audits](https://github.com/Ventusltd/chatgpt-audits/blob/2ffb435d105d3729be764e20f1fce6720d681133/automation/202608310209-hourly-logic-review/review.py) |
| scripts/stamp_data_spine_doctrine.py | Dt/stamp_data_spine_doctrine.py | [globalgrid2050](https://github.com/Ventusltd/globalgrid2050/blob/a387cac3aa3f09b8cdd27d3ed8040d661303f127/scripts/stamp_data_spine_doctrine.py) |
| 202608310050-gridatlas-next-version-builders/tools/202608310050-build-n1-deep-link-candidates.py | Dt/202608310050-build-n1-deep-link-candidates.py | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/202608310050-gridatlas-next-version-builders/tools/202608310050-build-n1-deep-link-candidates.py) |
| 202608310050-gridatlas-next-version-builders/tools/202608310050-build-repd-ref-index.py | Dt/202608310050-build-repd-ref-index.py | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/202608310050-gridatlas-next-version-builders/tools/202608310050-build-repd-ref-index.py) |
| 202608310050-gridatlas-next-version-builders/tools/202608310050-calibrate-design-freeze.py | Dt/202608310050-calibrate-design-freeze.py | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/202608310050-gridatlas-next-version-builders/tools/202608310050-calibrate-design-freeze.py) |
| apps/substation-finder/Dt/202608310050-build-n1-deep-link-candidates.py | Dt/202608310050-build-n1-deep-link-candidates.py | [code-generator](https://github.com/Ventusltd/code-generator/blob/e1217f540cf7ced342109a87f118627c1330cdbd/apps/substation-finder/Dt/202608310050-build-n1-deep-link-candidates.py) |
| apps/substation-finder/Dt/202608310050-build-repd-ref-index.py | Dt/202608310050-build-repd-ref-index.py | [code-generator](https://github.com/Ventusltd/code-generator/blob/e1217f540cf7ced342109a87f118627c1330cdbd/apps/substation-finder/Dt/202608310050-build-repd-ref-index.py) |
| apps/substation-finder/Dt/202608310050-calibrate-design-freeze.py | Dt/202608310050-calibrate-design-freeze.py | [code-generator](https://github.com/Ventusltd/code-generator/blob/e1217f540cf7ced342109a87f118627c1330cdbd/apps/substation-finder/Dt/202608310050-calibrate-design-freeze.py) |

## Still needed from outside

These names are used by the parts but not defined by any of them. Decide each one; the generator does not guess.

- `BLOCK_CLASS` — BLOCK_CLASS
- `Blob` — Blob
- `CompressionStream` — CompressionStream
- `DEG` — degrees-to-radians constant (Ek's neighbour)
- `File` — File
- `GB_ID` — GB_ID
- `ImageCapture` — ImageCapture
- `LEDGER_ID` — LEDGER_ID
- `MutationObserver` — MutationObserver
- `PANEL_ID` — PANEL_ID
- `ResizeObserver` — ResizeObserver
- `Response` — Response
- `TRAY_ID` — TRAY_ID
- `alert` — alert
- `atob` — atob
- `coord` — coord
- `createImageBitmap` — createImageBitmap
- `doc` — doc
- `document` — a web page
- `e` — e
- `fetch` — network access
- `fileBlocks` — fileBlocks
- `headerLines` — headerLines
- `lat` — lat
- `layersMarker` — layersMarker
- `localStorage` — browser storage
- `location` — the page address
- `maplibregl` — the MapLibre map library
- `min` — min
- `navigator` — a web browser
- `obj` — obj
- `performance` — performance
- `position` — position
- `requestAnimationFrame` — requestAnimationFrame
- `splitIntoVolumes` — splitIntoVolumes
- `subs` — subs
- `then` — then
- `window` — a web page
- `Worker` — Worker
- `crypto` — crypto
- `globalResult` — globalResult
- `history` — history
- `XMLHttpRequest` — XMLHttpRequest
- `claimAgain` — claimAgain
- `interruptReason` — interruptReason
- `queryError` — queryError
- `resolve` — resolve
- `retryRows` — retryRows
- `rows` — rows
- `search` — search
- `Buffer` — Buffer
- `Event` — Event
- `FIELD` — FIELD
- `START` — START
- `a` — a
- `actually` — actually
- `again` — again
- `an` — an
- `arrival` — arrival
- `first` — first
- `genuinely` — genuinely
- `getComputedStyle` — getComputedStyle
- `has` — has
- `is` — is
- `leave` — leave
- `never` — never
- `not` — not
- `outcome` — outcome
- `process` — process
- `produced` — produced
- `seen` — seen
- `stranded` — stranded
- `tab` — tab
- `that` — that
- `the` — the
- `time` — time
- `until` — until
- `visible` — visible

## Proof

Every file is fetched from GitHub at the exact commit the modular star recorded and copied unchanged. The workflow checks that each JavaScript file parses. That proves the app is assembled correctly, not that it is right for its new purpose.
