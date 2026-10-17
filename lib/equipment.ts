import { IMAGES, type ImageKey } from "@/lib/images";

/**
 * Hardware Orbit supplies, shown as equipment cards on the home, services and
 * portfolio pages. These are catalogue shots, not job photos (DEC-006), so they
 * never sit next to a case study.
 */
export type EquipmentItem = { key: string; image: ImageKey; title: string; note: string };

export const EQUIPMENT: EquipmentItem[] = [
  { key: "cctv-outdoor", image: "cctvOutdoorBullet", title: "Outdoor CCTV", note: "Weatherproof Wi-Fi bullet" },
  { key: "cctv-indoor", image: "cctvIndoorPanTilt", title: "Indoor CCTV", note: "Pan & tilt, remote view" },
  { key: "cctv-ptz", image: "cctvPtzDome", title: "PTZ speed dome", note: "Commercial & warehouse" },
  { key: "racks", image: "rackRange", title: "Network racks", note: "Wall-mount to floor-standing" },
  { key: "rack-accessories", image: "rackAccessories", title: "Rack accessories", note: "Shelves, PDU, fan trays" },
  { key: "laptops", image: "businessLaptop", title: "Business laptops", note: "Sales, upgrades & repair" },
  { key: "printers", image: "printer", title: "Printers", note: "Inkjet, laser & multi-function" },
  { key: "epabx", image: "epabx", title: "EPABX systems", note: "Office intercom & handsets" },
  { key: "peripherals", image: "peripherals", title: "Peripherals", note: "Keyboards, mice & more" },
  { key: "switches", image: "cozaSwitches", title: "Smart touch switches", note: "COZA glass panels" },
  { key: "pos", image: "posSystem", title: "POS systems", note: "Billing, scanner & printer" },
  { key: "webcams", image: "webcam", title: "Webcams", note: "For video calls & meetings" },
];

export const pickEquipment = (keys: string[]): EquipmentItem[] =>
  keys.map((k) => {
    const item = EQUIPMENT.find((e) => e.key === k);
    if (!item) throw new Error(`Unknown equipment key: ${k}`);
    return item;
  });

export const equipmentImage = (item: EquipmentItem) => IMAGES[item.image];
