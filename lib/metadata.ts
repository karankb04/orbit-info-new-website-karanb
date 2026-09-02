/**
 * One metadata resolver for the whole site.
 *
 * Canonical, Open Graph and Twitter tags are all derived from the SAME `path`
 * argument, so it is structurally impossible for them to disagree with each
 * other — or with sitemap.ts, which builds its URLs from the same helper.
 * Disagreement between canonical and sitemap is the most common silent SEO bug
 * on hand-maintained sites, and this is the fix.
 */

import type { Metadata } from "next";
import { siteConfig, absoluteUrl } from "./siteConfig";

/** Default share image. Replace with a branded 1200x630 OG card once designed. */
const DEFAULT_OG_IMAGE = "/images/og-default.png";

export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  type = "website",
  publishedTime,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
}): Metadata {
  const url = absoluteUrl(path);

  // Brand suffix applied here, once, rather than repeated in every page's title.
  // Home passes its own full title and opts out via the exact-match check.
  const fullTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  return {
    /**
     * `absolute` bypasses the title.template declared in the root layout.
     * Without it the template fires on top of the suffix already applied above,
     * producing "Contact Orbit IT Solutions — Mulund West | Orbit IT Solutions".
     */
    title: { absolute: fullTitle },
    description,
    // Makes every relative URL below resolve against the canonical origin.
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          // Explicitly allow full snippets/previews. Without these, some
          // crawlers default to truncated snippets, which costs CTR.
          googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type,
      images: [{ url: image, width: 1200, height: 630, alt: siteConfig.name }],
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
