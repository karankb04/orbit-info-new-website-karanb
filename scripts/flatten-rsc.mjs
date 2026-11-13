// Runs as `postbuild`, after the static export.
//
// Next 16's export writes per-page prefetch data as nested files, for example
// out/services/__next.services/__PAGE__.txt, but the client router requests
// the dotted form /services/__next.services.__PAGE__.txt. `next start` maps
// one to the other; a static host does not, so every prefetch 404s and each
// link click becomes a full page load. This copies each nested file to the
// dotted path the client asks for.
import { copyFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
if (!existsSync(OUT)) process.exit(0);

let copied = 0;
const walkSegments = (dir, prefix) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walkSegments(p, `${prefix}.${name}`);
    else {
      const target = `${prefix}.${name}`;
      if (!existsSync(target)) {
        copyFileSync(p, target);
        copied++;
      }
    }
  }
};
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (!statSync(p).isDirectory()) continue;
    if (name.startsWith("__next.")) walkSegments(p, p);
    else walk(p);
  }
};
walk(OUT);
console.log(`flatten-rsc: ${copied} prefetch files copied to dotted paths`);
