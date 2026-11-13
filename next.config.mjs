import { DEVICE_SIZES, IMAGE_SIZES } from "./lib/imageSizes.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Plain static files in out/, served by Cloudflare Workers static assets
  // (free, no request cap). Nothing on the site needs a server at runtime.
  output: "export",
  reactStrictMode: true,
  // Trailing slashes off: one canonical URL shape, matching what sitemap.ts emits.
  trailingSlash: false,
  images: {
    // Real job photos are served from /public and optimised by next/image.
    // No remotePatterns: we deliberately stopped hotlinking Unsplash — third-party
    // image requests hurt LCP and we don't control the asset lifetime.
    // No image server in a static export: every size is pre-generated as WebP
    // by scripts/generate-images.mjs, and lib/imageLoader.ts points to them.
    loader: "custom",
    loaderFile: "./lib/imageLoader.ts",
    deviceSizes: DEVICE_SIZES,
    imageSizes: IMAGE_SIZES,
  },
};

export default nextConfig;
