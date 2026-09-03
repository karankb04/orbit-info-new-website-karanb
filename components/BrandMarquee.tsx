import { MARQUEE_BRANDS } from "@/lib/brands";
import { BrandLogo } from "./BrandRow";

/**
 * Real brand logos scrolling in a seamless loop. The artwork and its sourcing
 * rules live in lib/brands.ts, shared with the per-service brand rows.
 */
export default function BrandMarquee() {
  // Rendered twice back-to-back so the CSS animation can scroll seamlessly
  // and loop without a visible jump.
  const row = (keyPrefix: string) => (
    <>
      {MARQUEE_BRANDS.map((b) => (
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
