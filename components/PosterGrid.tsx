import Image from "next/image";
import { IMAGES, type ImageKey } from "@/lib/images";

/**
 * Brand posters, each shown whole in an equal 4:3 frame and linking to the
 * full-size file. `four` is the four-across layout.
 */
export default function PosterGrid({
  posters,
  four = false,
  className = "",
}: {
  posters: ImageKey[];
  four?: boolean;
  className?: string;
}) {
  return (
    <div className={`poster-grid${four ? " four" : ""}${className ? ` ${className}` : ""}`}>
      {posters.map((key) => {
        const img = IMAGES[key];
        return (
          <a key={key} href={img.src} target="_blank" rel="noopener">
            <Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="(max-width: 980px) 90vw, 400px" />
          </a>
        );
      })}
    </div>
  );
}
