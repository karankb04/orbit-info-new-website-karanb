import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

/**
 * Logo lockup: the full brand artwork on a deliberate white plate.
 *
 * The supplied PNG ships with an opaque white background. Rather than fight
 * that, the mark sits on a rounded white card so it reads as an intentional
 * design element against the dark navy nav and footer — the contrast is the
 * point, not an artefact.
 *
 * Tradeoff worth knowing: the wordmark is baked into the image, so it is no
 * longer live HTML text. `alt` carries the brand name for crawlers, and every
 * page still states the name in its <title> and in the LocalBusiness schema,
 * so the name is never image-only.
 */
export default function Logo({ priority = false }: { priority?: boolean }) {
  return (
    <Link href="/" className="logo" aria-label={`${siteConfig.name} home`}>
      <span className="logo-plate">
        <Image
          src="/orbit-it-solutions-logo.png"
          alt={siteConfig.name}
          width={502}
          height={156}
          /**
           * Renders ~186px wide in the nav and ~210px in the footer. Without a
           * width hint the browser would pull the full 502px candidate for a
           * slot a third that size, on every page.
           */
          sizes="(max-width: 560px) 150px, 220px"
          className="logo-img"
          priority={priority}
        />
      </span>
    </Link>
  );
}
