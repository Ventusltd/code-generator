# Geodesy helpers

Generated 2026-09-14 08:57 UTC from 2 numbered parts of the [modular star](https://github.com/Ventusltd/stars/blob/main/MODULAR-STAR.md). Regenerate with:

```
node generate.mjs --name geodesy --families 511,8770
```

## Still needed from the surroundings

These names are used by the parts but not defined by any of them. They are declared in `context.mjs` as undefined; decide each one.

- `DEG`
- `EARTH_RADIUS_KM`

## Open decisions

- EARTH_RADIUS_KM: which earth radius is true is an open decision (EARTH_KM evidence pack); do not pick one silently

## Parts

| Family | Name | Kind | Self-contained | Needs | Used in | First written | Source | Live page |
|---|---|---|---|---|---|---|---|---|
| [#511](https://ventusltd.github.io/stars/code.html?family=511) | `distanceKm` | function | no | DEG, EARTH_RADIUS_KM | 40 place(s), 5 repo(s) | 2026-09-01 | [claude/sessions/202609031559-skin-architecture/prototype/engine.js](https://github.com/Ventusltd/claude/blob/df9da02425fdf0c65d11a84f32cd9b3ef927b309/sessions/202609031559-skin-architecture/prototype/engine.js#L35-L41) | – |
| [#8770](https://ventusltd.github.io/stars/code.html?family=8770) | `initialBearingDeg` | function | no | DEG | 40 place(s), 5 repo(s) | 2026-08-31 | [globalgrid2050/testcode/202609051152/atlas/cartridges/202609051152-substation-intelligence.js](https://github.com/Ventusltd/globalgrid2050/blob/a387cac3aa3f09b8cdd27d3ed8040d661303f127/testcode/202609051152/atlas/cartridges/202609051152-substation-intelligence.js#L1627-L1633) | [open](https://globalgrid2050.com/testcode/202609051152/atlas/cartridges/202609051152-substation-intelligence.js) |

## Line keys

The permanent line numbers of each part, first to last:

- #511 distanceKm: 7 lines, keys 14137, 14138, 14139, 14140, 14141, 14142, 1640
- #8770 initialBearingDeg: 7 lines, keys 78722, 79620, 79621, 38032, 38033, 79622, 1640

## Proof

Each part is fetched from GitHub at the exact commit the modular star recorded and copied unchanged. The workflow checks the generated module parses and imports. That proves it is assembled correctly, not that it is right for its new purpose.
