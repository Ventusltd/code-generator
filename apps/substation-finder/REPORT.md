# Substation finder on a map

Built 2026-09-14 09:34 UTC from 5 parts of the [periodic table](https://ventusltd.github.io/stars/table.html). Rebuild with:

```
node generate.mjs --name substation-finder --blocks Si,Vn,Ug,Ps,Dt
```

## Bill of materials

### Si · #35 · substation-intelligence

A plug-in part of the GridAtlas map.

664 functions inside · from globalgrid2050, gridatlas, testcode, youengineer-code-review, ventus-grid-engine, teleprinter, spiders

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

2 functions inside · from ventus-grid-engine

| file | copied to | source |
|---|---|---|
| engine/v9-nearest-search.js | Vn/v9-nearest-search.js | [ventus-grid-engine](https://github.com/Ventusltd/ventus-grid-engine/blob/be057061311fc088f27a4ff38756d5feb295175d/engine/v9-nearest-search.js) |
| sources/v9-extracts/nearest-search.mjs | Vn/nearest-search.mjs | [ventus-grid-engine](https://github.com/Ventusltd/ventus-grid-engine/blob/be057061311fc088f27a4ff38756d5feb295175d/sources/v9-extracts/nearest-search.mjs) |

### Ug · #33 · uk-gazetteer-flyto

A plug-in part of the GridAtlas map.

52 functions inside · from globalgrid2050, gridatlas, testcode, ventus-grid-engine

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

41 functions inside · from gridatlas, pipelinenews, globalgrid2050, testcode

| file | copied to | source |
|---|---|---|
| atlas/cartridges/202609071213-place-global-search-v9-5.js | Ps/202609071213-place-global-search-v9-5.js | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/atlas/cartridges/202609071213-place-global-search-v9-5.js) |
| tools/proofs/202609040219-transit-layer-availability.browser.mjs | Ps/202609040219-transit-layer-availability.browser.mjs | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/tools/proofs/202609040219-transit-layer-availability.browser.mjs) |
| tools/proofs/202609040229-arrival-identity.browser.mjs | Ps/202609040229-arrival-identity.browser.mjs | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/tools/proofs/202609040229-arrival-identity.browser.mjs) |
| atman/202608282348-verify-v9-6-2-equivalence.mjs | Ps/202608282348-verify-v9-6-2-equivalence.mjs | [pipelinenews](https://github.com/Ventusltd/pipelinenews/blob/4980096b57cb35f63ad2d80bded5687beb2a9532/atman/202608282348-verify-v9-6-2-equivalence.mjs) |
| tools/proofs/202609040229-arrival-identity-corpus.proof.mjs | Ps/202609040229-arrival-identity-corpus.proof.mjs | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/tools/proofs/202609040229-arrival-identity-corpus.proof.mjs) |
| testcode/202609051152/atlas/cartridges/202609041945-place-global-search-v9-5.js | Ps/202609041945-place-global-search-v9-5.js | [globalgrid2050](https://github.com/Ventusltd/globalgrid2050/blob/a387cac3aa3f09b8cdd27d3ed8040d661303f127/testcode/202609051152/atlas/cartridges/202609041945-place-global-search-v9-5.js) |
| atlas/parts/202609040229-place-global-search-arrival-identity.js | Ps/202609040229-place-global-search-arrival-identity.js | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/atlas/parts/202609040229-place-global-search-arrival-identity.js) |
| sandbox/202609051152/atlas/cartridges/202609041945-place-global-search-v9-5.js | Ps/202609041945-place-global-search-v9-5.js | [testcode](https://github.com/Ventusltd/testcode/blob/e8f6222226a7254ce08091b549803c3c1b92d979/sandbox/202609051152/atlas/cartridges/202609041945-place-global-search-v9-5.js) |

### Dt · #47 · The MAP button (deep-link contract)

The contract every MAP link obeys, so a link always arrives on the right feature.

131 functions inside · from chatgpt-audits, globalgrid2050, gridatlas, claude, companies, data-gridatlas, pipelinenews, data-grid-gb, ventus-grid-engine, testcode

| file | copied to | source |
|---|---|---|
| automation/202608310209-hourly-logic-review/review.py | Dt/review.py | [chatgpt-audits](https://github.com/Ventusltd/chatgpt-audits/blob/2ffb435d105d3729be764e20f1fce6720d681133/automation/202608310209-hourly-logic-review/review.py) |
| scripts/stamp_data_spine_doctrine.py | Dt/stamp_data_spine_doctrine.py | [globalgrid2050](https://github.com/Ventusltd/globalgrid2050/blob/a387cac3aa3f09b8cdd27d3ed8040d661303f127/scripts/stamp_data_spine_doctrine.py) |
| 202608310050-gridatlas-next-version-builders/tools/202608310050-build-n1-deep-link-candidates.py | Dt/202608310050-build-n1-deep-link-candidates.py | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/202608310050-gridatlas-next-version-builders/tools/202608310050-build-n1-deep-link-candidates.py) |
| 202608310050-gridatlas-next-version-builders/tools/202608310050-build-repd-ref-index.py | Dt/202608310050-build-repd-ref-index.py | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/202608310050-gridatlas-next-version-builders/tools/202608310050-build-repd-ref-index.py) |
| 202608310050-gridatlas-next-version-builders/tools/202608310050-calibrate-design-freeze.py | Dt/202608310050-calibrate-design-freeze.py | [gridatlas](https://github.com/Ventusltd/gridatlas/blob/ece848117a6d21b7fccb232557194877698c48a9/202608310050-gridatlas-next-version-builders/tools/202608310050-calibrate-design-freeze.py) |
| sessions/202609021813-wider-fleet-and-deep-link/scripts/render_transcript.py | Dt/render_transcript.py | [claude](https://github.com/Ventusltd/claude/blob/df9da02425fdf0c65d11a84f32cd9b3ef927b309/sessions/202609021813-wider-fleet-and-deep-link/scripts/render_transcript.py) |
| scripts/202608300232-build-atlas-v9-company-repd-links.py | Dt/202608300232-build-atlas-v9-company-repd-links.py | [companies](https://github.com/Ventusltd/companies/blob/ac70a37408d4f434e89e8a80cc36d40e450d3cfb/scripts/202608300232-build-atlas-v9-company-repd-links.py) |
| atman/202608291410-verify-repd-routing-release.py | Dt/202608291410-verify-repd-routing-release.py | [data-gridatlas](https://github.com/Ventusltd/data-gridatlas/blob/8bf88da9e210ce9f61dc0398869d3369f3fa2445/atman/202608291410-verify-repd-routing-release.py) |

## Still needed from outside

These names are used by the parts but not defined by any of them. Decide each one; the generator does not guess.

- `ACCEPTS` — ACCEPTS
- `BAR_ID` — BAR_ID
- `BASE_MVA` — BASE_MVA
- `BASIS` — BASIS
- `BLOCK_CLASS` — BLOCK_CLASS
- `Blob` — Blob
- `CABLE_FACTOR` — CABLE_FACTOR
- `CLICK_DEBOUNCE_MS` — CLICK_DEBOUNCE_MS
- `CODE` — CODE
- `CompressionStream` — CompressionStream
- `DATA_HEAD_CHARS` — DATA_HEAD_CHARS
- `DECLARED_MODEL` — DECLARED_MODEL
- `DEG` — degrees-to-radians constant (Ek's neighbour)
- `EARTH_RADIUS_KM` — the earth radius: an open decision (element Ek)
- `EDGE_DOT_CLEARANCE_PX` — EDGE_DOT_CLEARANCE_PX
- `ENGINE_GRAPH_URL` — ENGINE_GRAPH_URL
- `ENGINE_VIEW_URL` — ENGINE_VIEW_URL
- `ESTATE_LINKS` — ESTATE_LINKS
- `EXPECTED_ENGINE_LAYERS` — EXPECTED_ENGINE_LAYERS
- `EXPECTED_LAYER_CONTROLS` — EXPECTED_LAYER_CONTROLS
- `EXPECTED_PIPELINE_LAYERS` — EXPECTED_PIPELINE_LAYERS
- `FAILURE_ID` — FAILURE_ID
- `FALLBACK` — FALLBACK
- `FALLBACK_LABEL` — FALLBACK_LABEL
- `FETCH_TIMEOUT_MS` — FETCH_TIMEOUT_MS
- `FRAME_TIMEOUT_MS` — FRAME_TIMEOUT_MS
- `File` — File
- `GB_ID` — GB_ID
- `GRID_CONFIG` — GRID_CONFIG
- `HIT_RADIUS_EDGE_PX` — HIT_RADIUS_EDGE_PX
- `HIT_RADIUS_VERTEX_PX` — HIT_RADIUS_VERTEX_PX
- `HOVER_THROTTLE_MS` — HOVER_THROTTLE_MS
- `IMPEDANCE_BASIS` — IMPEDANCE_BASIS
- `ImageCapture` — ImageCapture
- `LEDGER_ID` — LEDGER_ID
- `MAX_RADIUS_KM` — MAX_RADIUS_KM
- `MAX_RESOURCES` — MAX_RESOURCES
- `MAX_TOTAL_BYTES` — MAX_TOTAL_BYTES
- `MAX_TRIES` — MAX_TRIES
- `MENUS` — MENUS
- `MINIMUM_KM` — MINIMUM_KM
- `MutationObserver` — MutationObserver
- `NEVER_INFERRED` — NEVER_INFERRED
- `NL` — NL
- `NOISE` — NOISE
- `NOT_AN_ASSESSMENT` — NOT_AN_ASSESSMENT
- `NOT_A_CONNECTION_OFFER` — NOT_A_CONNECTION_OFFER
- `NOT_A_COUNTERPARTY` — NOT_A_COUNTERPARTY
- `NOT_A_LOADING` — NOT_A_LOADING
- `NS` — NS
- `PANEL_ANCHOR` — PANEL_ANCHOR
- `PANEL_ID` — PANEL_ID
- `PINS` — PINS
- `POPUP_MAX_WIDTH` — POPUP_MAX_WIDTH
- `PRODUCT` — PRODUCT
- `PRODUCT_ID` — PRODUCT_ID
- `QUOTED_METRIC` — QUOTED_METRIC
- `QUOTED_METRIC_LABEL` — QUOTED_METRIC_LABEL
- `RAD` — RAD
- `RADIUS_MAX` — RADIUS_MAX
- `RADIUS_MIN` — RADIUS_MIN
- `RAW` — RAW
- `REPD_IDS` — REPD_IDS
- `REQUIRED_SCHEMA` — REQUIRED_SCHEMA
- `REQUIRES` — REQUIRES
- `ROUTING` — ROUTING
- `RUNTIME_STATE` — RUNTIME_STATE
- `RUN_COMMAND` — RUN_COMMAND
- `ResizeObserver` — ResizeObserver
- `Response` — Response
- `SCHEMA` — SCHEMA
- `SEARCH_THRESHOLD` — SEARCH_THRESHOLD
- `SINK_RULE` — SINK_RULE
- `STATUS_COLOURS` — STATUS_COLOURS
- `STATUS_ID` — STATUS_ID
- `STUDY_LINKS` — STUDY_LINKS
- `STYLE_ID` — STYLE_ID
- `TECH_COLOURS` — TECH_COLOURS
- `TECH_TERMS` — TECH_TERMS
- `TEXTUAL` — TEXTUAL
- `TOLERANCE_DEG_SQ` — TOLERANCE_DEG_SQ
- `TRANSIT_IDS` — TRANSIT_IDS
- `TRANSIT_SOURCE_MAP` — TRANSIT_SOURCE_MAP
- `TRANSIT_URLS` — TRANSIT_URLS
- `TRAY_ID` — TRAY_ID
- `UNDECLARED` — UNDECLARED
- `UNKNOWN` — UNKNOWN
- `ZONE_DRAW_DEFAULT_KM` — ZONE_DRAW_DEFAULT_KM
- `ZONE_DRAW_MAX_KM` — ZONE_DRAW_MAX_KM
- `ZONE_DRAW_VERTICES` — ZONE_DRAW_VERTICES
- `_lastHoverMs` — _lastHoverMs
- `_lastMouseMoveRaf` — _lastMouseMoveRaf
- `_pendingToolClick` — _pendingToolClick
- `_visibleHoverIds` — _visibleHoverIds
- `_visibleInteractiveIds` — _visibleInteractiveIds
- `_zoneDrawCollapsed` — _zoneDrawCollapsed
- `_zoneDrawPopupRaf` — _zoneDrawPopupRaf
- `activePopup` — activePopup
- `ad` — ad
- `added` — added
- `alert` — alert
- `allLayerIds` — allLayerIds
- `allREPDFeatures` — allREPDFeatures
- `area` — area
- `arrivalLayers` — arrivalLayers
- `asNumber` — asNumber
- `asString` — asString
- `atob` — atob
- `available` — available
- `b` — b
- `bandKey` — bandKey
- `bands` — bands
- `bar` — bar
- `base` — base
- `best` — best
- `box` — box
- `brandSlot` — brandSlot
- `byKind` — byKind
- `byName` — byName
- `byNode` — byNode
- `bytes` — bytes
- `c` — c
- `canonical` — canonical
- `canvas` — canvas
- `cap` — cap
- `chunks` — chunks
- `clearRadiusCircle` — clearRadiusCircle
- `controls` — controls
- `coord` — coord
- `copy` — copy
- `createImageBitmap` — createImageBitmap
- `curtainOpen` — curtainOpen
- `distanceKm` — distanceKm
- `doc` — doc
- `document` — a web page
- `draftKey` — draftKey
- `drawRadiusCircle` — drawRadiusCircle
- `e` — e
- `engineFetchStarted` — engineFetchStarted
- `features` — features
- `fetch` — network access
- `fileBlocks` — fileBlocks
- `finish` — finish
- `floor` — floor
- `forwardingLayerChoice` — forwardingLayerChoice
- `fragment` — fragment
- `fsActive` — fsActive
- `fsFragment` — fsFragment
- `fsGroupDiv` — fsGroupDiv
- `furniture` — furniture
- `getLayerConfig` — getLayerConfig
- `globalSubsData` — globalSubsData
- `graph` — graph
- `gridBody` — gridBody
- `gridHead` — gridHead
- `groupDiv` — groupDiv
- `headerLines` — headerLines
- `i` — i
- `id` — id
- `key` — key
- `kindLabels` — kindLabels
- `lastGroup` — lastGroup
- `lat` — lat
- `lat1` — lat1
- `latCos` — latCos
- `layerConfig` — layerConfig
- `layerConfigById` — layerConfigById
- `layerId` — layerId
- `layerProxies` — layerProxies
- `layerTargets` — layerTargets
- `layersControl` — layersControl
- `layersMarker` — layersMarker
- `left` — left
- `limit` — limit
- `lines` — lines
- `link` — link
- `localStorage` — localStorage
- `located` — located
- `location` — location
- `lon` — lon
- `mFeatures` — mFeatures
- `makeUnionFind` — makeUnionFind
- `map` — map
- `mapLayer` — mapLayer
- `maplibregl` — the MapLibre map library
- `matches` — matches
- `measureClosed` — measureClosed
- `measureMode` — measureMode
- `measurePoints` — measurePoints
- `measurementDock` — measurementDock
- `menu` — menu
- `min` — min
- `mounting` — mounting
- `moved` — moved
- `n` — n
- `nav` — nav
- `navigator` — navigator
- `networkQueue` — networkQueue
- `node` — node
- `nodes` — nodes
- `obj` — obj
- `observer` — observer
- `offsets` — offsets
- `openPanelRefs` — openPanelRefs
- `original` — original
- `ownerOfNode` — ownerOfNode
- `p` — p
- `panel` — panel
- `panels` — panels
- `parametersOf` — parametersOf
- `performance` — performance
- `points` — points
- `poll` — poll
- `position` — position
- `prepared` — prepared
- `preparing` — preparing
- `product` — product
- `proxy` — proxy
- `published` — published
- `rAreaInput` — rAreaInput
- `radiusAreaCenter` — radiusAreaCenter
- `radiusAreaMarker` — radiusAreaMarker
- `radiusAreaMode` — radiusAreaMode
- `radiusCenter` — radiusCenter
- `radiusInput` — radiusInput
- `radiusMarker` — radiusMarker
- `radiusMode` — radiusMode
- `ratingsOf` — ratingsOf
- `ref` — ref
- `requestAnimationFrame` — requestAnimationFrame
- `resolve` — resolve
- `resultsEl` — resultsEl
- `retire` — retire
- `right` — right
- `row` — row
- `run` — run
- `searchIndex` — searchIndex
- `seen` — seen
- `shot` — shot
- `siteOf` — siteOf
- `sitesByCode` — sitesByCode
- `solve` — solve
- `sourceId` — sourceId
- `splitIntoVolumes` — splitIntoVolumes
- `state` — state
- `states` — states
- `stats` — stats
- `statusMode` — statusMode
- `subs` — subs
- `text` — text
- `then` — then
- `timer` — timer
- `title` — title
- `titles` — titles
- `total` — total
- `tries` — tries
- `typed` — typed
- `units` — units
- `urlCache` — urlCache
- `video` — video
- `voltageOf` — voltageOf
- `was` — was
- `window` — a web page
- `wrap` — wrap
- `zdRadiusInput` — zdRadiusInput
- `zoneDrawDragIdx` — zoneDrawDragIdx
- `zoneDrawDragging` — zoneDrawDragging
- `zoneDrawJustDragged` — zoneDrawJustDragged
- `zoneDrawLocked` — zoneDrawLocked
- `zoneDrawMode` — zoneDrawMode
- `zoneDrawPoints` — zoneDrawPoints
- `zoneFile` — zoneFile
- `zoneHistory` — zoneHistory
- `zoneHistoryApplying` — zoneHistoryApplying
- `zoneLock` — zoneLock
- `normalise` — normalise
- `DUCKDB_MODULE` — DUCKDB_MODULE
- `FALSE_ORIGIN` — FALSE_ORIGIN
- `FULL_POSTCODE` — FULL_POSTCODE
- `GEOCODER_BASE` — GEOCODER_BASE
- `GLOBAL_GEOCODER_URL` — GLOBAL_GEOCODER_URL
- `MANIFEST_SHA256` — MANIFEST_SHA256
- `MANIFEST_URL` — MANIFEST_URL
- `OUTCODE` — OUTCODE
- `PARQUET_SHA256` — PARQUET_SHA256
- `PARQUET_URL` — PARQUET_URL
- `Worker` — Worker
- `activeQuerySerial` — activeQuerySerial
- `compactPostcode` — compactPostcode
- `compactRef` — compactRef
- `crypto` — crypto
- `debounceTimer` — debounceTimer
- `globalResult` — globalResult
- `history` — history
- `input` — input
- `locationPopup` — locationPopup
- `manifestPromise` — manifestPromise
- `params` — params
- `result` — result
- `rowObject` — rowObject
- `runtimePromise` — runtimePromise
- `searchable` — searchable
- `OriginalMap` — OriginalMap
- `PARQUET` — PARQUET
- `SENDER_REL` — SENDER_REL
- `SPINE_REL` — SPINE_REL
- `WIDER_REL` — WIDER_REL
- `XMLHttpRequest` — XMLHttpRequest
- `claimAgain` — claimAgain
- `consoleErrors` — consoleErrors
- `derivedIndex` — derivedIndex
- `events` — events
- `executeSearch` — executeSearch
- `existsSync` — existsSync
- `gateFunctions` — gateFunctions
- `interruptReason` — interruptReason
- `listeners` — listeners
- `manifestAttempts` — manifestAttempts
- `ownerFunctions` — ownerFunctions
- `path` — path
- `python` — python
- `queryError` — queryError
- `receiverFunctions` — receiverFunctions
- `renderResults` — renderResults
- `requestFailures` — requestFailures
- `retryRows` — retryRows
- `rows` — rows
- `search` — search
- `spawnSync` — spawnSync
- `spinePath` — spinePath
- `suppliedArrivalFields` — suppliedArrivalFields
- `testLink` — testLink
- `vm` — vm
- `waitForCapturedMap` — waitForCapturedMap
- `widerPath` — widerPath
- `xhr` — xhr
- `ACTIVE_TARGET` — ACTIVE_TARGET
- `ATLAS` — ATLAS
- `ATLAS_BASE` — ATLAS_BASE
- `ATLAS_DEEP_LINK_CONTRACT` — ATLAS_DEEP_LINK_CONTRACT
- `ATLAS_OUTPUT` — ATLAS_OUTPUT
- `ATLAS_V8_DEEP_LINK_CONTRACT` — ATLAS_V8_DEEP_LINK_CONTRACT
- `ATLAS_V9_DEEP_LINK_CONTRACT` — ATLAS_V9_DEEP_LINK_CONTRACT
- `BASE` — BASE
- `BASE_URL` — BASE_URL
- `BUCKETS` — BUCKETS
- `Buffer` — Buffer
- `CANONICAL_RECEIVER` — CANONICAL_RECEIVER
- `COMPILER_FILE` — COMPILER_FILE
- `COMPILER_METHOD` — COMPILER_METHOD
- `CONTROL_CHARACTER` — CONTROL_CHARACTER
- `DEFAULT_ZOOM` — DEFAULT_ZOOM
- `DETAIL_SOURCES` — DETAIL_SOURCES
- `EXPECTED_PARAMETERS` — EXPECTED_PARAMETERS
- `Event` — Event
- `FIELD` — FIELD
- `GENERATION` — GENERATION
- `GRIDATLAS_RECEIVER` — GRIDATLAS_RECEIVER
- `HTML_OUTPUT` — HTML_OUTPUT
- `IDENTITY_PARAM` — IDENTITY_PARAM
- `IDENTITY_ROUTING` — IDENTITY_ROUTING
- `INPUTS` — INPUTS
- `MANIFEST_OUTPUT` — MANIFEST_OUTPUT
- `MIME` — MIME
- `NAME` — NAME
- `OUTPUT` — OUTPUT
- `PARAMS` — PARAMS
- `PARENT` — PARENT
- `PARENT_ARTIFACT` — PARENT_ARTIFACT
- `PARENT_ARTIFACT_DIGEST` — PARENT_ARTIFACT_DIGEST
- `PARENT_GENERATION` — PARENT_GENERATION
- `PARENT_MANIFEST_SHA256` — PARENT_MANIFEST_SHA256
- `PARENT_RUN` — PARENT_RUN
- `PARENT_RUNTIME` — PARENT_RUNTIME
- `PARENT_SOURCE` — PARENT_SOURCE
- `PINNED_SHA256` — PINNED_SHA256
- `PROJECTS` — PROJECTS
- `PROJECTS_SHA256` — PROJECTS_SHA256
- `PROTECTED_RECOVERY_COMMIT` — PROTECTED_RECOVERY_COMMIT
- `QUERY_PARAMETER_ORDER` — QUERY_PARAMETER_ORDER
- `RECEIVER` — RECEIVER
- `REGISTRY_OUTPUT` — REGISTRY_OUTPUT
- `REGISTRY_SCHEMA` — REGISTRY_SCHEMA
- `RELEASE_ID` — RELEASE_ID
- `REPD_LAYER_IDS` — REPD_LAYER_IDS
- `REPD_REF` — REPD_REF
- `RETIRED_RECEIVERS` — RETIRED_RECEIVERS
- `ROLLBACK_GENERATION` — ROLLBACK_GENERATION
- `ROOT` — ROOT
- `RUNTIME_OUTPUT` — RUNTIME_OUTPUT
- `SOURCE` — SOURCE
- `SOURCE_PARENT` — SOURCE_PARENT
- `SOURCE_PARENT_COMMIT` — SOURCE_PARENT_COMMIT
- `START` — START
- `TECHNOLOGIES` — TECHNOLOGIES
- `TRUSTED_SHA256` — TRUSTED_SHA256
- `TRUSTED_SOURCE` — TRUSTED_SOURCE
- `a` — a
- `access` — access
- `actually` — actually
- `again` — again
- `an` — an
- `arrival` — arrival
- `assert` — assert
- `atlasOrigin` — atlasOrigin
- `bucket` — bucket
- `constants` — constants
- `createHash` — createHash
- `dictionary` — dictionary
- `failures` — failures
- `field` — field
- `fileURLToPath` — fileURLToPath
- `first` — first
- `fs` — fs
- `genuinely` — genuinely
- `get` — get
- `getComputedStyle` — getComputedStyle
- `has` — has
- `httpErrors` — httpErrors
- `is` — is
- `layerIdForBucket` — layerIdForBucket
- `leave` — leave
- `mkdir` — mkdir
- `never` — never
- `not` — not
- `outcome` — outcome
- `passed` — passed
- `pathToFileURL` — pathToFileURL
- `payload` — payload
- `pipelineOrigin` — pipelineOrigin
- `process` — process
- `produced` — produced
- `readFile` — readFile
- `receiverErrors` — receiverErrors
- `receiverFailures` — receiverFailures
- `record` — record
- `requireGeometry` — requireGeometry
- `server` — server
- `spec` — spec
- `stat` — stat
- `stranded` — stranded
- `tab` — tab
- `that` — that
- `the` — the
- `time` — time
- `trustedAtlasUrl` — trustedAtlasUrl
- `until` — until
- `visible` — visible
- `writeFile` — writeFile

## Open decisions

- EARTH_RADIUS_KM: which earth radius is true is an open decision (element Ek, EARTH_KM evidence pack); do not pick one silently
- HIT_RADIUS_EDGE_PX: which earth radius is true is an open decision (element Ek, EARTH_KM evidence pack); do not pick one silently
- HIT_RADIUS_VERTEX_PX: which earth radius is true is an open decision (element Ek, EARTH_KM evidence pack); do not pick one silently
- MAX_RADIUS_KM: which earth radius is true is an open decision (element Ek, EARTH_KM evidence pack); do not pick one silently
- RADIUS_MAX: which earth radius is true is an open decision (element Ek, EARTH_KM evidence pack); do not pick one silently
- RADIUS_MIN: which earth radius is true is an open decision (element Ek, EARTH_KM evidence pack); do not pick one silently
- clearRadiusCircle: which earth radius is true is an open decision (element Ek, EARTH_KM evidence pack); do not pick one silently
- drawRadiusCircle: which earth radius is true is an open decision (element Ek, EARTH_KM evidence pack); do not pick one silently
- radiusAreaCenter: which earth radius is true is an open decision (element Ek, EARTH_KM evidence pack); do not pick one silently
- radiusAreaMarker: which earth radius is true is an open decision (element Ek, EARTH_KM evidence pack); do not pick one silently
- radiusAreaMode: which earth radius is true is an open decision (element Ek, EARTH_KM evidence pack); do not pick one silently
- radiusCenter: which earth radius is true is an open decision (element Ek, EARTH_KM evidence pack); do not pick one silently
- radiusInput: which earth radius is true is an open decision (element Ek, EARTH_KM evidence pack); do not pick one silently
- radiusMarker: which earth radius is true is an open decision (element Ek, EARTH_KM evidence pack); do not pick one silently
- radiusMode: which earth radius is true is an open decision (element Ek, EARTH_KM evidence pack); do not pick one silently
- zdRadiusInput: which earth radius is true is an open decision (element Ek, EARTH_KM evidence pack); do not pick one silently

## Proof

Every file is fetched from GitHub at the exact commit the modular star recorded and copied unchanged. The workflow checks that each JavaScript file parses. That proves the app is assembled correctly, not that it is right for its new purpose.
