import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/siteConfig";
import { getAllPosts } from "@/lib/posts";

// Static export: generated once at build time.
export const dynamic = "force-static";

// Update a route's date when its content meaningfully changes. Bing uses
// lastmod to decide what to re-crawl, so never stamp every page with the build time.
const LAST_MODIFIED: Record<string, string> = {
  "/": "2026-11-14",
  "/services": "2026-11-14",
  "/about": "2026-11-14",
  "/portfolio": "2026-11-14",
  "/contact": "2026-11-14",
};

/**
 * Sitemap. URLs are built with the same `absoluteUrl` helper that produces the
 * canonical tags, so the two can never drift apart.
 *
 * Only canonical, indexable URLs belong here. Anything carrying noindex must be
 * excluded — listing a noindexed URL sends contradictory signals.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/services", "/about", "/portfolio", "/contact"];

  const posts = getAllPosts().map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.dateModified ?? post.datePublished,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route),
      lastModified: LAST_MODIFIED[route],
    })),
    ...posts,
  ];
}
