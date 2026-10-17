import Image from "next/image";
import { EQUIPMENT, equipmentImage, type EquipmentItem } from "@/lib/equipment";

/**
 * The "Equipment we supply" cards. `compact` is the three-across variant that
 * fits inside a service column.
 */
export default function EquipmentGrid({
  items = EQUIPMENT,
  compact = false,
}: {
  items?: EquipmentItem[];
  compact?: boolean;
}) {
  return (
    <div className={`kit-grid${compact ? " compact" : ""}`}>
      {items.map((item) => {
        const img = equipmentImage(item);
        return (
          <figure key={item.key} className="kit-card reveal">
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes={compact ? "160px" : "(max-width: 560px) 45vw, 220px"}
            />
            <figcaption>
              <b>{item.title}</b>
              <span>{item.note}</span>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
