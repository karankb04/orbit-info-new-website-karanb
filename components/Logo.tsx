import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

/**
 * Logo lockup: the icon-only mark plus an HTML wordmark.
 *
 * The wordmark is live text rather than baked into the PNG. The original logo
 * file had the words rendered into the image, which meant the brand name was
 * invisible to search engines and unreadable at small sizes. Text also lets the
 * "IT" letters take the accent colour and keeps the name crawlable.
 */
export default function Logo({ priority = false }: { priority?: boolean }) {
  return (
    <Link href="/" className="logo" aria-label={`${siteConfig.name} home`}>
      <Image
        src="/logo-icon.png"
        alt={`${siteConfig.name} logo`}
        width={618}
        height={536}
        /**
         * The mark renders at roughly 81x70 in the nav and 90x78 in the footer,
         * never above ~100px wide. Without `sizes` the browser had no width hint
         * and picked the 1920px candidate from the srcset — downloading a
         * full-width image for a thumbnail slot, on every page.
         */
        sizes="(max-width: 560px) 60px, 100px"
        className="logo-img"
        priority={priority}
      />
      <div className="logo-txt">
        <span className="logo-word">
          ORB<span className="it">IT</span>
        </span>
        <span className="logo-sub">IT Solutions</span>
        <span className="logo-tag">{siteConfig.tagline}</span>
      </div>
    </Link>
  );
}
