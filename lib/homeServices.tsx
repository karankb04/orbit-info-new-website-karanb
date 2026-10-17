// .tsx because each entry carries its card illustration and icon as JSX.
import type { ReactNode } from "react";
import type { CoreServiceId } from "@/lib/coreServices";
import type { ImageKey } from "@/lib/images";

/**
 * The four core services as the home page shows them: once as cards, then
 * again as tabs. Order matters: the tab index (`data-tab`/`data-panel`) that
 * HomeEffects switches on is the array index.
 */
export type HomeService = {
  id: CoreServiceId;
  num: string;
  /** Background class for the card photo (see globals.css). */
  bg: string;
  /** Line drawing behind the card text. */
  scene: ReactNode;
  icon: ReactNode;
  cardTitle: string;
  cardBlurb: string;
  /** Tab label, also the panel heading. */
  tabTitle: string;
  panelText: string;
  chips: string[];
  panelImage: ImageKey;
};

const sceneProps = { className: "scene", viewBox: "0 0 400 400", "aria-hidden": true } as const;
const sceneStroke = { fill: "none", stroke: "#fff", strokeWidth: "1.4", opacity: ".5" } as const;
const iconProps = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8" } as const;

export const HOME_SERVICES: HomeService[] = [
  {
    id: "laptop",
    num: "01",
    bg: "bg-laptop",
    scene: <svg {...sceneProps}><g {...sceneStroke}><rect x="120" y="150" width="160" height="100" rx="6" /><path d="M105 250h190l14 20H91z" /><line x1="160" y1="270" x2="240" y2="270" strokeWidth="3" /></g></svg>,
    icon: <svg {...iconProps}><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M2 20h20l-2-3H4z" /></svg>,
    cardTitle: "Laptop & Desktop Repair",
    cardBlurb: "Screens, hinges, water damage and SSD upgrades, plus chip-level motherboard repair that many shops won't take on.",
    tabTitle: "Laptop Repair",
    panelText: "Drop it off or we collect it. Chip-level diagnosis, honest quote, same-day on most jobs.",
    chips: ["Screen & hinge", "Water damage", "SSD upgrades", "Motherboard"],
    panelImage: "laptopChipRepair",
  },
  {
    id: "cctv",
    num: "02",
    bg: "bg-cctv",
    scene: <svg {...sceneProps}><g {...sceneStroke}><rect x="150" y="150" width="120" height="60" rx="10" /><circle cx="180" cy="180" r="16" /><path d="M270 165l40-22M270 195l40 22" /><circle cx="320" cy="140" r="6" /></g></svg>,
    icon: <svg {...iconProps}><path d="M3 8l14-4 2 6-14 4z" /><circle cx="10" cy="9" r="2.2" /><path d="M6 14v5M6 19h7" /></svg>,
    cardTitle: "CCTV Installation",
    cardBlurb: "Homes, offices, societies & commercial sites. We install CP Plus, Hikvision & Panasonic cameras with neat cabling.",
    tabTitle: "CCTV Setup",
    panelText: "Site survey, neat cabling, and a live view on your phone before we leave.",
    chips: ["CP Plus", "Hikvision", "Panasonic", "Remote view"],
    panelImage: "cctvBulletInstall",
  },
  {
    id: "tally",
    num: "03",
    bg: "bg-tally",
    scene: <svg {...sceneProps}><g {...sceneStroke}><rect x="140" y="140" width="120" height="120" rx="8" /><line x1="140" y1="180" x2="260" y2="180" /><line x1="200" y1="180" x2="200" y2="260" /></g></svg>,
    icon: <svg {...iconProps}><rect x="4" y="3" width="16" height="18" rx="2" /><line x1="8" y1="8" x2="16" y2="8" /><line x1="8" y1="12" x2="16" y2="12" /><line x1="8" y1="16" x2="12" y2="16" /></svg>,
    cardTitle: "Tally Software",
    cardBlurb: "Certified sales & implementation partner. We handle licensing, customization and support.",
    tabTitle: "Tally Software",
    panelText: "Licensing, GST-ready setup and customization, and support that answers the phone.",
    chips: ["Sales partner", "Implementation", "Customization", "AMC support"],
    panelImage: "softwareSetup",
  },
  {
    id: "backup",
    num: "04",
    bg: "bg-backup",
    scene: <svg {...sceneProps}><g {...sceneStroke}><rect x="160" y="130" width="80" height="140" rx="8" /><line x1="160" y1="165" x2="240" y2="165" /><line x1="160" y1="200" x2="240" y2="200" /><circle cx="200" cy="240" r="6" /></g></svg>,
    icon: <svg {...iconProps}><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" /><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" /></svg>,
    cardTitle: "NAS / Synology Backup",
    cardBlurb: "Authorized Synology partner. Business-grade backup so a dead drive never means a lost year.",
    tabTitle: "Synology Backup",
    panelText: "Automatic, redundant business backup configured by an authorized partner.",
    chips: ["NAS setup", "RAID config", "Auto backup", "Recovery plan"],
    panelImage: "networkRack",
  },
];
