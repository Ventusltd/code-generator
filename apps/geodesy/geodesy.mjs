// Geodesy helpers — generated 2026-09-14T08:57:44.649Z by Ventusltd/code-generator from the modular star.
// Each part is copied exactly from GitHub at the recorded commit. Family numbers are permanent keys.
// Parts: #511 distanceKm, #8770 initialBearingDeg

// Still needed from the surroundings (supply in context.mjs): DEG, EARTH_RADIUS_KM
import { DEG, EARTH_RADIUS_KM } from './context.mjs';

// ── family #511 distanceKm · function · used in 40 place(s) across 5 repositories · https://github.com/Ventusltd/claude/blob/df9da02425fdf0c65d11a84f32cd9b3ef927b309/sessions/202609031559-skin-architecture/prototype/engine.js#L35-L41
export   function distanceKm(lon1, lat1, lon2, lat2) {
    const dLat = (lat2 - lat1) * DEG;
    const dLon = (lon2 - lon1) * DEG;
    const a = Math.sin(dLat / 2) ** 2
      + Math.cos(lat1 * DEG) * Math.cos(lat2 * DEG) * Math.sin(dLon / 2) ** 2;
    return EARTH_RADIUS_KM * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

// ── family #8770 initialBearingDeg · function · used in 40 place(s) across 5 repositories · https://github.com/Ventusltd/globalgrid2050/blob/a387cac3aa3f09b8cdd27d3ed8040d661303f127/testcode/202609051152/atlas/cartridges/202609051152-substation-intelligence.js#L1627-L1633
export   function initialBearingDeg(lon1, lat1, lon2, lat2) {
    const p1 = lat1 * DEG; const p2 = lat2 * DEG;
    const dl = (lon2 - lon1) * DEG;
    const y = Math.sin(dl) * Math.cos(p2);
    const x = Math.cos(p1) * Math.sin(p2) - Math.sin(p1) * Math.cos(p2) * Math.cos(dl);
    return (Math.atan2(y, x) / DEG + 360) % 360;
  }

