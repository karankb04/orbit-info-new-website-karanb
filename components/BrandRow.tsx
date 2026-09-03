import Image from "next/image";
import type { Brand } from "@/lib/brands";

/**
 * One brand mark. Shared by the home-page marquee and the per-service brand
 * rows so a logo can never render two different ways in two places.
 */
export function BrandLogo({ brand, className = "brand-logo" }: { brand: Brand; className?: string }) {
  const alt = `${brand.name} logo`;
  return brand.type === "png" ? (
    <Image src={brand.file} alt={alt} width={brand.w} height={brand.h} className={className} />
  ) : (
    // eslint-disable-next-line @next/next/no-img-element -- local SVG, optimizer doesn't touch these
    <img src={brand.file} alt={alt} width={brand.w} height={brand.h} className={className} loading="lazy" />
  );
}

/**
 * The "Brands" strip under a service block. Replaces the plain-text chips
 * ("HP", "Dell") these rows used to render — a text chip claims a brand
 * relationship without showing the mark, which reads as a placeholder next to
 * the real logos already on the home page.
 */
export default function BrandRow({ brands, label = "Brands" }: { brands: Brand[]; label?: string }) {
  return (
    <div className="svc-brands">
      <span className="lbl">{label}</span>
      {brands.map((b) => (
        <span key={b.name} className="brand-pill" title={b.name}>
          <BrandLogo brand={b} className="brand-pill-img" />
        </span>
      ))}
    </div>
  );
}
