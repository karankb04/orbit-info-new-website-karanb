/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Trailing slashes off: one canonical URL shape, matching what sitemap.ts emits.
  trailingSlash: false,
  images: {
    // Real job photos are served from /public and optimised by next/image.
    // No remotePatterns: we deliberately stopped hotlinking Unsplash — third-party
    // image requests hurt LCP and we don't control the asset lifetime.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
