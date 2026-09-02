import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "@/lib/siteConfig";

/**
 * robots.txt.
 *
 * IMPORTANT crawler semantics: the ABSENCE of a rule means ALLOWED. You cannot
 * block a crawler by deleting its entry — you block it by adding an explicit
 * Disallow. Equally, do not "allow" a bot by removing a line; that is a no-op.
 *
 * We currently disallow nothing. There is no private, faceted, or paginated
 * area on the site, and blanket-blocking AI crawlers would work directly
 * against the goal of being cited in AI answers.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url,
  };
}
