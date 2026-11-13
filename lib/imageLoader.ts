/**
 * next/image loader for the static export.
 *
 * There is no image server: scripts/generate-images.mjs writes a WebP for every
 * width in lib/imageSizes.mjs before the build, and this loader points each
 * srcset entry at the matching file. "/images/x.jpg" at 640px becomes
 * "/_img/images/x-640.webp". SVGs are served as they are.
 */
export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }): string {
  if (!src.startsWith("/") || src.endsWith(".svg")) return src;
  return `/_img${src.replace(/\.(jpe?g|png)$/i, "")}-${width}.webp`;
}
