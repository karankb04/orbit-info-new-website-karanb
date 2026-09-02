import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/siteConfig";
import { getAllPosts } from "@/lib/posts";

/**
 * Sitemap. URLs are built with the same `absoluteUrl` helper that produces the
 * canonical tags, so the two can never drift apart.
 *
 * Only canonical, indexable URLs belong here. Anything carrying noindex must be
 * excluded — listing a noindexed URL sends contradictory signals.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "/", priority: 1.0, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/portfolio", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/blog", priority: 0.6, changeFrequency: "weekly" as const },
  ];

  const posts = getAllPosts().map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.dateModified ?? post.datePublished),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...posts,
  ];
}
