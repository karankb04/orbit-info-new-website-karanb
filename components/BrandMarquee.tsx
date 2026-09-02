import Image from "next/image";

/**
 * Real brand logos, replacing the plain-text chips the section used before.
 *
 * All eight files were pulled from each brand's own official source — the
 * logo shown in that company's Wikipedia infobox (sourced from Wikimedia
 * Commons, itself sourced from the company) for six of them, and CP Plus's
 * own site header for the seventh. None were taken from third-party logo/
 * clip-art sites, which often host altered or outdated marks.
 *
 * This is nominative use: identifying which brands Orbit installs and
 * services, not implying endorsement by any of them. Marks are shown
 * unaltered and at a consistent size — no recoloring, no cropping, no
 * distortion — which is the baseline every brand's own guidelines require.
 *
 * `type: "svg"` renders a plain <img>: Next's built-in optimizer refuses to
 * process local SVGs by default (dangerouslyAllowSVG is off project-wide,
 * deliberately — see next.config.mjs), so there is nothing for next/image to
 * do for these. `type: "png"` goes through next/image for automatic
 * AVIF/WebP + resizing, which matters most for the 300KB Tally source file.
 */
const BRANDS = [
  { name: "CP Plus", file: "/brands/cp-plus.png", type: "png" as const, w: 168, h: 28 },
  { name: "Hikvision", file: "/brands/hikvision.svg", type: "svg" as const, w: 1024, h: 137 },
  { name: "Panasonic", file: "/brands/panasonic.svg", type: "svg" as const, w: 2560, h: 392 },
  { name: "Synology", file: "/brands/synology.svg", type: "svg" as const, w: 300, h: 80 },
  { name: "Tally", file: "/brands/tally.png", type: "png" as const, w: 2484, h: 1142 },
  { name: "HP", file: "/brands/hp.svg", type: "svg" as const, w: 1014, h: 1012 },
  { name: "Dell", file: "/brands/dell.svg", type: "svg" as const, w: 72, h: 72 },
  { name: "Lenovo", file: "/brands/lenovo.svg", type: "svg" as const, w: 1000, h: 333 },
];

function BrandLogo({ brand }: { brand: (typeof BRANDS)[number] }) {
  const alt = `${brand.name} logo`;
  return brand.type === "png" ? (
    <Image src={brand.file} alt={alt} width={brand.w} height={brand.h} className="brand-logo" />
  ) : (
    // eslint-disable-next-line @next/next/no-img-element -- local SVG, optimizer doesn't touch these
    <img src={brand.file} alt={alt} width={brand.w} height={brand.h} className="brand-logo" loading="lazy" />
  );
}

export default function BrandMarquee() {
  // Rendered twice back-to-back so the CSS animation can scroll seamlessly
  // and loop without a visible jump.
  const row = (keyPrefix: string) => (
    <>
      {BRANDS.map((b) => (
        <span key={`${keyPrefix}-${b.name}`} className="brand-chip">
          <BrandLogo brand={b} />
        </span>
      ))}
    </>
  );

  return (
    <section className="marquee-sec">
      <p className="marquee-label">Trusted brands we install &amp; service</p>
      <div className="marquee">
        <div className="marquee-row">
          {row("a")}
          {row("b")}
        </div>
      </div>
    </section>
  );
}
