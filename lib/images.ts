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
  /**
   * Product / equipment shots, as distinct from the first-hand photography
   * above. These are catalogue images of the hardware Orbit sells and
   * installs — legitimate for illustrating what is on offer, but never as
   * portfolio evidence of a completed job (see DEC-006).
   */
  cctvOutdoorBullet: {
    src: "/images/cctv-camera-outdoor-bullet-wifi.png",
    alt: "Weatherproof outdoor Wi-Fi bullet CCTV camera of the type Orbit IT Solutions installs",
    width: 500,
    height: 500,
  },
  cctvIndoorPanTilt: {
    src: "/images/cctv-camera-indoor-pan-tilt.png",
    alt: "Indoor pan-and-tilt Wi-Fi CCTV camera supplied and installed by Orbit IT Solutions",
    width: 500,
    height: 500,
  },
  cctvPtzDome: {
    src: "/images/cctv-camera-ptz-speed-dome.png",
    alt: "CP Plus PTZ speed-dome CCTV camera for commercial and warehouse sites",
    width: 500,
    height: 500,
  },
  printer: {
    src: "/images/multifunction-printer-sales-service.png",
    alt: "Multi-function office printer of the type Orbit IT Solutions supplies, sets up and repairs",
    width: 500,
    height: 500,
  },
  epabx: {
    src: "/images/epabx-intercom-system.png",
    alt: "NEC EPABX office intercom system with desk handsets, installed and serviced by Orbit IT Solutions",
    width: 600,
    height: 400,
  },
  rackRange: {
    src: "/images/network-rack-cabinet-range.jpg",
    alt: "Range of floor-standing and wall-mount network rack cabinets supplied by Orbit IT Solutions",
    width: 1600,
    height: 1104,
  },
  rackAccessories: {
    src: "/images/network-rack-accessories-shelves-pdu.jpg",
    alt: "Network rack with fan tray, power distribution unit, shelves and cable couplers",
    width: 1200,
    height: 800,
  },
  businessLaptop: {
    src: "/images/business-laptop-sales-service.png",
    alt: "Business laptop of the type Orbit IT Solutions sells, upgrades and repairs",
    width: 500,
    height: 500,
  },
  peripherals: {
    src: "/images/keyboard-mouse-peripherals.png",
    alt: "Backlit keyboard and wireless mouse set supplied by Orbit IT Solutions",
    width: 500,
    height: 500,
  },
  /**
   * First-hand site photography supplied September 2026. These replace
   * mismatched images (a video door-phone under the CCTV heading) and give
   * several portfolio tiles their first real photo. Alt text describes only
   * what is visible — no invented locations or client names.
   */
  societyCctvMonitors: {
    src: "/images/housing-society-cctv-monitoring-wall.jpg",
    alt: "Live CCTV feeds on lobby monitors at a Mulund housing society, part of a 24-camera installation by Orbit IT Solutions",
    width: 1280,
    height: 960,
  },
  cctvBulletInstall: {
    src: "/images/cctv-bullet-camera-outdoor-installation.jpg",
    alt: "Orbit IT Solutions technician mounting an outdoor bullet CCTV camera on a pillar",
    width: 720,
    height: 1280,
  },
  cctvDomeInstall: {
    src: "/images/cctv-dome-camera-ceiling-installation.jpg",
    alt: "Technician installing a ceiling dome CCTV camera inside a building",
    width: 720,
    height: 1280,
  },
  societyCctvTeam: {
    src: "/images/orbit-technicians-society-cctv-handover.jpg",
    alt: "Orbit IT Solutions technicians at a Mulund housing society after completing its 24-camera CCTV installation",
    width: 1280,
    height: 720,
  },
  rackLabelled: {
    src: "/images/network-rack-labelled-patch-panels.jpg",
    alt: "Network rack with labelled patch panels and colour-coded cabling, marked with the Orbit IT Solutions logo",
    width: 720,
    height: 1280,
  },
  rackStructured: {
    src: "/images/structured-cabling-network-rack.jpg",
    alt: "Floor-standing network rack with neatly patched structured cabling",
    width: 719,
    height: 1280,
  },
  rackTechnician: {
    src: "/images/technician-patching-network-rack.jpg",
    alt: "Orbit IT Solutions technician patching cables into a floor-standing network rack",
    width: 720,
    height: 1280,
  },
  racksOffice: {
    src: "/images/network-racks-office-installation.jpg",
    alt: "Wall-mount and floor-standing network racks installed in an office",
    width: 960,
    height: 1280,
  },
  wifiApInstall: {
    src: "/images/wifi-access-point-ceiling-installation.jpg",
    alt: "Technician installing a ceiling-mounted Wi-Fi access point",
    width: 720,
    height: 1280,
  },
  epabxHandset: {
    src: "/images/epabx-desk-phone-handset.jpg",
    alt: "EPABX desk phone handset installed by Orbit IT Solutions",
    width: 719,
    height: 1280,
  },
  tradingDesk: {
    src: "/images/trading-desk-multi-monitor-workstations.jpg",
    alt: "Multi-monitor workstations set up on a trading desk",
    width: 1280,
    height: 720,
  },
  cozaSwitches: {
    src: "/images/coza-glass-touch-smart-switches.jpg",
    alt: "COZA glass touch switch panels in black and white finishes, supplied by Orbit IT Solutions",
    width: 1280,
    height: 853,
  },
  posSystem: {
    src: "/images/pos-billing-system-touchscreen.jpg",
    alt: "POS billing system with touchscreen terminal, cash drawer, barcode scanner and receipt printer",
    width: 851,
    height: 764,
  },
  webcam: {
    src: "/images/zebronics-webcam-video-calls.jpg",
    alt: "Zebronics USB webcam for office video calls, supplied by Orbit IT Solutions",
    width: 1032,
    height: 1280,
  },
} as const;

export type ImageKey = keyof typeof IMAGES;
