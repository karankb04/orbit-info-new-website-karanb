/**
 * Catalogue of real photography, with the alt text each image ships with.
 *
 * Why this file exists
 * -------------------
 * The site previously hotlinked 25 generic Unsplash stock photos. That was bad
 * on three counts: a third-party request on the critical path, assets whose
 * lifetime we do not control, and — most importantly — stock imagery is not
 * evidence. For a local service business, photographs of the actual team doing
 * the actual work are a first-hand-experience signal that stock can never be,
 * and both Google's helpful-content systems and AI answer engines weight it.
 *
 * Alt text is written once, here, so the same photo is never described two
 * different ways on two different pages.
 */

export const IMAGES = {
  laptopChipRepair: {
    src: "/images/laptop-motherboard-chip-level-repair-mumbai.jpg",
    alt: "Orbit IT Solutions technician performing chip-level repair on an opened laptop motherboard at the Mulund West workshop",
    width: 960,
    height: 1280,
  },
  laptopRepairTechnician: {
    src: "/images/laptop-motherboard-repair-technician-orbit.jpg",
    alt: "Technician in an Orbit IT Solutions uniform working on a laptop mainboard with precision tools",
    width: 960,
    height: 1280,
  },
  desktopRepair: {
    src: "/images/desktop-pc-assembly-repair-workbench.jpg",
    alt: "Engineer assembling a desktop PC cabinet with Gigabyte and Zotac components at the Orbit IT Solutions bench",
    width: 960,
    height: 1280,
  },
  softwareSetup: {
    src: "/images/laptop-software-setup-technician.jpg",
    alt: "Engineer installing and configuring software on a customer laptop at Orbit IT Solutions",
    width: 960,
    height: 1280,
  },
  office: {
    src: "/images/orbit-it-solutions-office-mulund-west.jpg",
    alt: "The Orbit IT Solutions office in Mulund West, Mumbai, with staff at their workstations",
    width: 1280,
    height: 960,
  },
  helpdesk: {
    src: "/images/it-support-helpdesk-phone-mumbai.jpg",
    alt: "Orbit IT Solutions support engineer taking a customer call at the Mumbai helpdesk",
    width: 960,
    height: 1280,
  },
  networkRack: {
    src: "/images/office-network-rack-patch-panel-switch.jpg",
    alt: "Structured cabling in an office network rack with a patch panel and D-Link switch, installed by Orbit IT Solutions",
    width: 1200,
    height: 1600,
  },
  wallRack: {
    src: "/images/wall-mounted-network-rack-installation.jpg",
    alt: "Wall-mounted network and DVR enclosure installed above cabled power and data points",
    width: 960,
    height: 541,
  },
  doorPhoneMonitor: {
    src: "/images/hikvision-video-door-phone-monitor.jpg",
    alt: "Hikvision video door phone indoor monitor showing a live multi-camera view",
    width: 720,
    height: 960,
  },
  doorPhoneOutdoor: {
    src: "/images/hikvision-video-door-phone-outdoor-unit.jpg",
    alt: "Hikvision video door phone outdoor call unit mounted beside an apartment entrance",
    width: 720,
    height: 960,
  },
  biometric: {
    src: "/images/biometric-attendance-system-installation.jpg",
    alt: "Biometric fingerprint attendance terminal installed at an office entrance by Orbit IT Solutions",
    width: 1040,
    height: 585,
  },
  team: {
    src: "/images/orbit-it-solutions-team-mumbai.jpg",
    alt: "The Orbit IT Solutions team photographed together outside the Mulund West office",
    width: 960,
    height: 540,
  },
  laptopRepairPoster: {
    src: "/images/laptop-repair-services-mumbai-orbit.jpg",
    alt: "Orbit IT Solutions laptop repair services in Mumbai: screen repair, hinge and body repair, water damage recovery, keyboard replacement and SSD upgrades",
    width: 1024,
    height: 559,
  },
  brandPoster: {
    src: "/images/orbit-it-solutions-services-brand-poster.jpg",
    alt: "Orbit IT Solutions services overview: laptops, desktops, CCTV cameras, printers and Tally, as a certified Tally partner and Dell, HP and Lenovo dealer",
    width: 874,
    height: 677,
  },
} as const;

export type ImageKey = keyof typeof IMAGES;
