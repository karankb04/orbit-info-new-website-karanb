// Pre-generates every responsive image size at build time, so the static export
// needs no image server (see lib/imageLoader.ts). Runs as `prebuild`.
//
// Sources: JPG/PNG files directly inside public/images and public/brands, plus
// PNGs at the top of public/. Subfolders are skipped on purpose (raw photo
// drops live there). Output: public/_img/<same path>-<width>.webp. Images are
// never enlarged: a 600px source still gets a "-1920" file, at 600px.
import { mkdirSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, extname } from "node:path";
import sharp from "sharp";
import { ALL_WIDTHS, OUT_DIR } from "../lib/imageSizes.mjs";

const PUBLIC = "public";
const SOURCES = ["images", "brands", ""];
const isRaster = (f) => /\.(jpe?g|png)$/i.test(f);

const files = SOURCES.flatMap((dir) =>
  readdirSync(join(PUBLIC, dir))
    .filter((f) => isRaster(f) && statSync(join(PUBLIC, dir, f)).isFile())
    .map((f) => (dir ? `${dir}/${f}` : f))
);

let written = 0;
let skipped = 0;
for (const rel of files) {
  const src = join(PUBLIC, rel);
  const base = rel.slice(0, -extname(rel).length);
  const quality = extname(rel).toLowerCase() === ".png" ? 90 : 80;
  const srcTime = statSync(src).mtimeMs;
  for (const w of ALL_WIDTHS) {
    const out = join(PUBLIC, OUT_DIR, `${base}-${w}.webp`);
    // Skip files already generated from an unchanged source (fast local rebuilds).
    if (existsSync(out) && statSync(out).mtimeMs >= srcTime) {
      skipped++;
      continue;
    }
    mkdirSync(dirname(out), { recursive: true });
    await sharp(src).rotate().resize({ width: w, withoutEnlargement: true }).webp({ quality }).toFile(out);
    written++;
  }
}
console.log(`generate-images: ${files.length} sources, ${written} written, ${skipped} up to date`);
