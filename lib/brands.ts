/**
 * The one registry of brand logo artwork.
 *
 * Why this file exists
 * -------------------
 * Brand marks were needed in two places — the home-page marquee and the
 * per-service brand rows on /services — and the services page was still
 * rendering plain text chips ("HP", "Dell") long after the marquee had moved
 * to real logos. Keeping the artwork in one registry is what stops those two
 * surfaces drifting apart again.
 *
 * Sourcing rule (unchanged): every file comes from the brand's own official
 * source — the logo in that company's Wikipedia infobox, sourced from
 * Wikimedia Commons and itself sourced from the company — except CP Plus,
 * taken from its own site header, and the Tally partner badge and Quick Heal
 * mark, which were supplied by Orbit from their own partner material. None
 * come from third-party logo or clip-art sites, which routinely host altered
 * or outdated marks.
 *
 * This is nominative use: identifying which brands Orbit sells, installs and
 * services, not implying endorsement. Marks render unaltered and at a
 * consistent size — no recolouring, cropping or distortion.
 *
 * `type: "svg"` renders a plain <img>: the built-in optimizer refuses local
 * SVGs by default (dangerouslyAllowSVG is off project-wide, deliberately —
 * see next.config.mjs), so next/image has nothing to do for them. `type:
 * "png"` goes through next/image for AVIF/WebP + resizing, which matters most
 * for the 300KB Tally source file.
 */
export type Brand = {
  name: string;
  file: string;
  type: "svg" | "png";
  w: number;
  h: number;
};

export const BRANDS = {
  cpPlus: { name: "CP Plus", file: "/brands/cp-plus.png", type: "png", w: 168, h: 28 },
  hikvision: { name: "Hikvision", file: "/brands/hikvision.svg", type: "svg", w: 1024, h: 137 },
  panasonic: { name: "Panasonic", file: "/brands/panasonic.svg", type: "svg", w: 2560, h: 392 },
  synology: { name: "Synology", file: "/brands/synology.svg", type: "svg", w: 300, h: 80 },
  tally: { name: "Tally", file: "/brands/tally.png", type: "png", w: 2484, h: 1142 },
  hp: { name: "HP", file: "/brands/hp.svg", type: "svg", w: 1014, h: 1012 },
  dell: { name: "Dell", file: "/brands/dell.svg", type: "svg", w: 72, h: 72 },
  lenovo: { name: "Lenovo", file: "/brands/lenovo.svg", type: "svg", w: 1000, h: 333 },
  tallyPartner: {
    name: "Tally Certified Partner",
    file: "/brands/tally-certified-partner.png",
    type: "png",
    w: 150,
    h: 50,
  },
  quickHeal: { name: "Quick Heal", file: "/brands/quick-heal.png", type: "png", w: 150, h: 50 },
} satisfies Record<string, Brand>;

/** The marquee shows the headline eight, in a deliberate order. */
export const MARQUEE_BRANDS: Brand[] = [
  BRANDS.cpPlus,
  BRANDS.hikvision,
  BRANDS.panasonic,
  BRANDS.synology,
  BRANDS.tally,
  BRANDS.hp,
  BRANDS.dell,
  BRANDS.lenovo,
];
