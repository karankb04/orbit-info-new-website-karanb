import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/siteConfig";
import { getAllPosts } from "@/lib/posts";

// Static export: generated once at build time.
export const dynamic = "force-static";

/**
 * Sitemap. URLs are built with the same `absoluteUrl` helper that produces the
 * canonical tags, so the two can never drift apart.
 *
 * Only canonical, indexable URLs belong here. Anything carrying noindex must be
 * excluded — listing a noindexed URL sends contradictory signals.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/services",
    "/about",
    "/portfolio",
    "/contact",
    "/terms",
    "/privacy",
  ];

  const posts = getAllPosts().map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
  }));

  return [
    ...staticRoutes.map((route) => ({ url: absoluteUrl(route) })),
    ...posts,
  ];
}
