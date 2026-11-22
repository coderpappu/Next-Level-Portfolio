/* ---------------------------------------------------------------------------
   Post-build step for the static export (runs automatically after
   `npm run build`).

   Next.js writes the per-segment prefetch payloads in nested folders, e.g.
     out/about/__next.about/__PAGE__.txt
   but the browser requests the flat name
     /about/__next.about.__PAGE__.txt
   A static host (Apache) has nothing to map one to the other, so client-side
   navigation falls back to full page loads and logs 404s. This copies every
   nested payload to the flat name the router asks for. Idempotent.
   --------------------------------------------------------------------------- */

import fs from "node:fs";
import path from "node:path";

const OUT = path.resolve("out");
let copied = 0;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith("__next.")) flatten(dir, full, entry.name);
    else if (entry.name !== "_next") walk(full);
  }
}

/* Every file under routeDir/__next.X/... becomes routeDir/__next.X.<a>.<b>.txt */
function flatten(routeDir, segDir, prefix) {
  for (const entry of fs.readdirSync(segDir, { withFileTypes: true })) {
    const full = path.join(segDir, entry.name);
    const name = `${prefix}.${entry.name}`;
    if (entry.isDirectory()) flatten(routeDir, full, name);
    else {
      fs.copyFileSync(full, path.join(routeDir, name));
      copied += 1;
    }
  }
}

if (!fs.existsSync(OUT)) {
  console.error("flatten-segments: out/ not found (run next build first)");
  process.exit(1);
}
walk(OUT);
console.log(`flatten-segments: wrote ${copied} prefetch file(s) at their requested paths`);
