// Saves the rendered HTML of every page, normalised so two builds of the same
// markup compare equal. Used to prove refactors change no output:
//   npm run build && npx next start -p 3124
//   node scripts/snapshot-pages.mjs /tmp/snap-before
//   ...refactor, rebuild, restart...
//   node scripts/snapshot-pages.mjs /tmp/snap-after && diff -r /tmp/snap-before /tmp/snap-after
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BASE = process.env.SNAPSHOT_BASE ?? "http://localhost:3124";
const PAGES = { home: "/", services: "/services", about: "/about", portfolio: "/portfolio", contact: "/contact", blog: "/blog" };

const outDir = process.argv[2];
if (!outDir) {
  console.error("usage: node scripts/snapshot-pages.mjs <outDir>");
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });

const normalise = (html) =>
  html
    // React Server Components payload: build-specific chunk ids.
    .replace(/<script>self\.__next_f[\s\S]*?<\/script>/g, "")
    // Hashed asset paths and build ids.
    .replace(/\/_next\/static\/[^"'\s)]+/g, "/_next/static/HASH")
    .replace(/"buildId":"[^"]+"/g, '"buildId":"X"')
    // Text-node separators React inserts; they move when JSX is restructured.
    .replace(/<!-- -->/g, "")
    // One tag per line so diffs point at the element that changed.
    .replace(/>\s+</g, "><")
    .replace(/></g, ">\n<");

for (const [name, path] of Object.entries(PAGES)) {
  const res = await fetch(BASE + path);
  if (!res.ok) throw new Error(`${path} returned ${res.status}`);
  writeFileSync(join(outDir, `${name}.html`), normalise(await res.text()));
}
console.log(`saved ${Object.keys(PAGES).length} pages to ${outDir}`);
