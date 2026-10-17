import type { ReactNode } from "react";
import BrandRow from "@/components/BrandRow";
import EquipmentGrid from "@/components/EquipmentGrid";
import PosterGrid from "@/components/PosterGrid";
import { BRANDS } from "@/lib/brands";
import { pickEquipment } from "@/lib/equipment";
import type { ImageKey } from "@/lib/images";
import { siteConfig, telHref } from "@/lib/siteConfig";

/**
 * One Service node per offering, each linked to the business as `provider`.
 * These are the pages we actually want ranking for commercial-intent queries
 * like "laptop repair Mulund", so each carries its own structured description.
 */
export const SERVICES = [
  {
    name: "Laptop & Desktop Repair",
    description:
      "Component-level laptop and desktop repair including screen replacement, hinge and body repair, liquid damage recovery, SSD and RAM upgrades, and chip-level motherboard work.",
    path: "/services#laptop",
    serviceType: "Computer Repair",
  },
  {
    name: "CCTV Installation",
    description:
      "CCTV survey, supply and installation for homes, offices, housing societies and commercial sites, including recording, storage and remote mobile viewing setup.",
    path: "/services#cctv",
    serviceType: "Security System Installation",
  },
  {
    name: "Tally Software Sales & Implementation",
    description:
      "Certified Tally sales and implementation partner: genuine licensing and renewals, GST-ready configuration, custom reports and TDLs, data migration and ongoing AMC support.",
    path: "/services#tally",
    serviceType: "Software Implementation",
  },
  {
    name: "Synology Data Backup",
    description:
      "Authorized Synology partner providing NAS supply and setup, RAID configuration, automatic scheduled backup, off-site and cloud sync, and disaster recovery planning.",
    path: "/services#backup",
    serviceType: "Data Backup Service",
  },
  {
    name: "UPS & Power Backup",
    description:
      "Online and offline UPS from APC by Schneider Electric, Luminous and Artis, 600 VA to 20 kVA, supplied from stock with sizing, installation and service.",
    path: "/services#ups",
    serviceType: "UPS Supply and Installation",
  },
];

/** A photo-plus-text block on /services (see components/ServiceSection). */
export type ServiceDetail = {
  id: "laptop" | "cctv" | "tally" | "backup";
  num: string;
  section: "light" | "white";
  /** Photo on the right instead of the left. */
  flip: boolean;
  tag: string;
  image: ImageKey;
  grad: string;
  /** Line-art drawn over the photo. */
  art: ReactNode;
  heading: ReactNode;
  lead: ReactNode;
  bullets: string[];
  /** Shown under the bullet list, before the buttons. */
  after?: ReactNode;
  /** Shown under the whole block, full width. */
  extra?: ReactNode;
};

const artProps = {
  className: "art",
  viewBox: "0 0 200 200",
  "aria-hidden": true,
} as const;
const strokeProps = {
  fill: "none",
  stroke: "#fff",
  strokeWidth: "3.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    id: "laptop",
    num: "01",
    section: "light",
    flip: false,
    tag: "Laptop & Desktop",
    image: "laptopChipRepair",
    grad: "g-laptop",
    art: (
      <svg {...artProps}><g {...strokeProps}><rect x="45" y="50" width="110" height="72" rx="6" /><path d="M32 122h136l12 20H20z" /><circle cx="100" cy="86" r="20" stroke="#2E97FF" /><path d="M100 76v10l7 7" stroke="#FF9933" /></g></svg>
    ),
    heading: <>Laptop &amp; desktop repair, down to the chip.</>,
    lead: <>A cracked screen is easy. A dead motherboard is where many shops give up, and that&apos;s the work we take on. We diagnose at component level, quote honestly, and return most jobs the same day.</>,
    bullets: ["Screen & display replacement", "Hinge & body repair", "Liquid / water damage recovery", "Keyboard & trackpad", "SSD & RAM upgrades", "Chip-level motherboard repair"],
    after: <BrandRow brands={[BRANDS.hp, BRANDS.dell, BRANDS.lenovo]} />,
  },
  {
    id: "cctv",
    num: "02",
    section: "white",
    flip: true,
    tag: "CCTV & Security",
    image: "societyCctvMonitors",
    grad: "g-cctv",
    art: (
      <svg {...artProps}><g {...strokeProps}><rect x="40" y="74" width="80" height="44" rx="10" /><circle cx="62" cy="96" r="11" stroke="#2E97FF" /><path d="M120 84l44-20M120 108l44 20" /><circle cx="170" cy="60" r="7" stroke="#FF9933" /><path d="M70 118v22M55 140h45" /></g></svg>
    ),
    heading: <>CCTV you can watch from your phone.</>,
    lead: <>Homes, offices, societies and commercial sites. We survey the site, install with neat cabling, and set up remote viewing on your phone before we leave.</>,
    bullets: ["Home & apartment cameras", "Office & retail surveillance", "Society & building-wide systems", "Commercial & warehouse", "Mobile / remote live view", "Recording & storage setup"],
    after: (
      <>
        <EquipmentGrid compact items={pickEquipment(["cctv-outdoor", "cctv-indoor", "cctv-ptz"])} />
        <BrandRow brands={[BRANDS.cpPlus, BRANDS.hikvision, BRANDS.panasonic]} />
      </>
    ),
    extra: (
      <div className="poster-block reveal">
        <span className="eyebrow on-light">Regional distributor</span>
        <h3>CP Plus, Hikvision and Seagate, from stock.</h3>
        <p>We are an authorised regional distributor for CP Plus and Hikvision, and a regional distributor for Seagate SkyHawk surveillance drives. We keep the full camera range in stock (analog, IP and PTZ cameras, DVR and NVR recorders, PoE switches, monitors and video door phones) and offer dealer pricing to installers and resellers. CP Plus Wi-Fi cameras in stock include the CP-E28Q (2MP), CP-E31Q (3MP), EZ-P34Q (3MP) and CP-E41Q (4MP). SkyHawk drives run from 1 TB to 16 TB. Call <a href={telHref}>{siteConfig.phone.primary.display}</a> for current prices.</p>
        <PosterGrid four posters={["posterCpPlusDistributor", "posterHikvisionDistributor", "posterCpPlusWifi", "posterSeagateSkyhawk"]} />
      </div>
    ),
  },
  {
    id: "tally",
    num: "03",
    section: "light",
    flip: false,
    tag: "Tally Software",
    image: "softwareSetup",
    grad: "g-tally",
    art: (
      <svg {...artProps}><g {...strokeProps}><rect x="55" y="40" width="90" height="120" rx="8" /><line x1="55" y1="76" x2="145" y2="76" /><line x1="72" y1="98" x2="128" y2="98" stroke="#2E97FF" /><line x1="72" y1="118" x2="128" y2="118" /><line x1="72" y1="138" x2="104" y2="138" stroke="#FF9933" /></g></svg>
    ),
    heading: <>Tally, set up properly and supported.</>,
    lead: <>As a certified sales and implementation partner, we handle licensing, GST-ready configuration, and the customizations your accountant asks for. When you call for support, someone picks up.</>,
    bullets: ["Genuine licensing & renewals", "Implementation & setup", "GST-ready configuration", "Custom reports & TDLs", "Data migration", "Ongoing AMC support"],
    after: <BrandRow brands={[BRANDS.tally, BRANDS.tallyPartner]} />,
  },
  {
    id: "backup",
    num: "04",
    section: "white",
    flip: true,
    tag: "Data Backup",
    image: "networkRack",
    grad: "g-backup",
    art: (
      <svg {...artProps}><g {...strokeProps}><ellipse cx="100" cy="52" rx="46" ry="16" stroke="#2E97FF" /><path d="M54 52v96c0 9 20 16 46 16s46-7 46-16V52" /><path d="M54 100c0 9 20 16 46 16s46-7 46-16" /><circle cx="100" cy="140" r="6" stroke="#FF9933" /></g></svg>
    ),
    heading: <>Synology backup, so a dead drive doesn&rsquo;t cost you your data.</>,
    lead: <>As an authorized Synology partner, we set up business-grade backup that runs on its own schedule, keeps redundant copies and can be restored when a drive fails.</>,
    bullets: ["Synology NAS supply & setup", "RAID configuration", "Automatic scheduled backup", "Off-site / cloud sync", "Disaster recovery planning", "Capacity & upgrade advice"],
    after: <BrandRow brands={[BRANDS.synology]} />,
  },
];
