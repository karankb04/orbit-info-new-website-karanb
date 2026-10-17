import Image from "next/image";
import EquipmentGrid from "@/components/EquipmentGrid";
import { pickEquipment } from "@/lib/equipment";
import { IMAGES } from "@/lib/images";
import JsonLd from "@/components/JsonLd";
import BrandRow, { BrandLogo } from "@/components/BrandRow";
import { BRANDS } from "@/lib/brands";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/schemas";
import { buildMetadata } from "@/lib/metadata";
import { yearsInBusiness } from "@/lib/siteConfig";

export const metadata = buildMetadata({
  title: "Services: Laptop Repair, CCTV, Tally & Backup",
  description:
    "Laptop & desktop repair, CCTV installation, Tally software, Synology backup and UPS for Mumbai & Thane businesses. CP Plus and Hikvision regional distributor. Plus networking, AMC, printers and antivirus.",
  path: "/services",
});

/**
 * One Service node per offering, each linked to the business as `provider`.
 * These are the pages we actually want ranking for commercial-intent queries
 * like "laptop repair Mulund", so each carries its own structured description.
 */
const SERVICES = [
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

export default function ServicesPage() {
  return (
    <>
      <JsonLd schema={getBreadcrumbSchema([{ name: "Services", path: "/services" }])} />
      {SERVICES.map((s) => (
        <JsonLd key={s.path} schema={getServiceSchema(s)} />
      ))}
<header className="phero">
<svg className="arc" viewBox="0 0 400 400" aria-hidden="true"><g fill="none" strokeWidth="1.4"><circle cx="200" cy="200" r="120" stroke="#2E97FF" opacity=".4" /><circle cx="200" cy="200" r="170" stroke="#FF9933" opacity=".25" /></g></svg>
<div className="wrap phero-inner">
<div className="crumbs"><a href="/">Home</a><span className="sep">/</span><span>Services</span></div>
<h1>Everything your office runs on. <span className="grad">One number to call.</span></h1>
<p>Five things we specialise in, plus the everyday IT jobs every office needs. All handled by a local team with {yearsInBusiness} years in the trade.</p>
<nav className="jump" aria-label="Services on this page"><a href="#laptop">Laptop repair</a><a href="#cctv">CCTV</a><a href="#tally">Tally</a><a href="#backup">Backup</a><a href="#ups">UPS</a><a href="#more">Other services</a></nav>
<div className="svc-cta-row" style={{marginTop:"34px"}}><a href="/contact#quote" className="btn btn-primary"><span>Get a Free Quote</span> <span className="arr">→</span></a><a href="https://wa.me/919324032476" target="_blank" rel="noopener" className="btn btn-ghost"><span>WhatsApp Us</span></a></div>
</div></header>

<section className="svc-sec light" id="laptop"><div className="wrap"><div className="svc-block">
<div className="svc-visual reveal"><Image className="svc-photo" src={IMAGES.laptopChipRepair.src} alt={IMAGES.laptopChipRepair.alt} fill sizes="(max-width: 980px) 100vw, 546px" /><div className="grad g-laptop"></div><svg className="ring" viewBox="0 0 400 400" aria-hidden="true"><g fill="none" strokeWidth="1"><circle cx="200" cy="200" r="90" stroke="#2E97FF" opacity=".5" /><circle cx="200" cy="200" r="140" stroke="#FF9933" opacity=".3" /><circle cx="200" cy="200" r="185" stroke="#fff" opacity=".12" /></g></svg><span className="tag">Laptop &amp; Desktop</span><svg className="art" viewBox="0 0 200 200" aria-hidden="true"><g fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><rect x="45" y="50" width="110" height="72" rx="6" /><path d="M32 122h136l12 20H20z" /><circle cx="100" cy="86" r="20" stroke="#2E97FF" /><path d="M100 76v10l7 7" stroke="#FF9933" /></g></svg></div>
<div className="reveal"><span className="svc-num">SERVICE 01</span><h2>Laptop &amp; desktop repair, down to the chip.</h2><p className="lead-p">A cracked screen is easy. A dead motherboard is where many shops give up, and that's the work we take on. We diagnose at component level, quote honestly, and return most jobs the same day.</p>
<ul className="svc-list"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Screen &amp; display replacement</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Hinge &amp; body repair</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Liquid / water damage recovery</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Keyboard &amp; trackpad</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>SSD &amp; RAM upgrades</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Chip-level motherboard repair</li></ul><BrandRow brands={[BRANDS.hp, BRANDS.dell, BRANDS.lenovo]} />
<div className="svc-cta-row"><a href="/contact#quote" className="btn btn-primary"><span>Get Free Quote</span> <span className="arr">→</span></a>
<a href="tel:+919324032476" className="btn btn-ghost on-light"><span>Call now</span></a></div></div>
</div></div></section>

<section className="svc-sec white" id="cctv"><div className="wrap"><div className="svc-block flip">
<div className="svc-visual reveal"><Image className="svc-photo" src={IMAGES.societyCctvMonitors.src} alt={IMAGES.societyCctvMonitors.alt} fill sizes="(max-width: 980px) 100vw, 546px" /><div className="grad g-cctv"></div><svg className="ring" viewBox="0 0 400 400" aria-hidden="true"><g fill="none" strokeWidth="1"><circle cx="200" cy="200" r="90" stroke="#2E97FF" opacity=".5" /><circle cx="200" cy="200" r="140" stroke="#FF9933" opacity=".3" /><circle cx="200" cy="200" r="185" stroke="#fff" opacity=".12" /></g></svg><span className="tag">CCTV &amp; Security</span><svg className="art" viewBox="0 0 200 200" aria-hidden="true"><g fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><rect x="40" y="74" width="80" height="44" rx="10" /><circle cx="62" cy="96" r="11" stroke="#2E97FF" /><path d="M120 84l44-20M120 108l44 20" /><circle cx="170" cy="60" r="7" stroke="#FF9933" /><path d="M70 118v22M55 140h45" /></g></svg></div>
<div className="reveal"><span className="svc-num">SERVICE 02</span><h2>CCTV you can watch from your phone.</h2><p className="lead-p">Homes, offices, societies and commercial sites. We survey the site, install with neat cabling, and set up remote viewing on your phone before we leave.</p>
<ul className="svc-list"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Home &amp; apartment cameras</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Office &amp; retail surveillance</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Society &amp; building-wide systems</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Commercial &amp; warehouse</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Mobile / remote live view</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Recording &amp; storage setup</li></ul><EquipmentGrid compact items={pickEquipment(["cctv-outdoor", "cctv-indoor", "cctv-ptz"])} /><BrandRow brands={[BRANDS.cpPlus, BRANDS.hikvision, BRANDS.panasonic]} />
<div className="svc-cta-row"><a href="/contact#quote" className="btn btn-primary"><span>Get Free Quote</span> <span className="arr">→</span></a>
<a href="tel:+919324032476" className="btn btn-ghost on-light"><span>Call now</span></a></div></div>
</div><div className="poster-block reveal"><span className="eyebrow on-light">Regional distributor</span><h3>CP Plus, Hikvision and Seagate, from stock.</h3><p>We are an authorised regional distributor for CP Plus and Hikvision, and a regional distributor for Seagate SkyHawk surveillance drives. We keep the full camera range in stock (analog, IP and PTZ cameras, DVR and NVR recorders, PoE switches, monitors and video door phones) and offer dealer pricing to installers and resellers. CP Plus Wi-Fi cameras in stock include the CP-E28Q (2MP), CP-E31Q (3MP), EZ-P34Q (3MP) and CP-E41Q (4MP). SkyHawk drives run from 1 TB to 16 TB. Call <a href="tel:+919324032476">93240 32476</a> for current prices.</p><div className="poster-grid four"><a href={IMAGES.posterCpPlusDistributor.src} target="_blank" rel="noopener"><Image src={IMAGES.posterCpPlusDistributor.src} alt={IMAGES.posterCpPlusDistributor.alt} width={IMAGES.posterCpPlusDistributor.width} height={IMAGES.posterCpPlusDistributor.height} sizes="(max-width: 980px) 90vw, 400px" /></a><a href={IMAGES.posterHikvisionDistributor.src} target="_blank" rel="noopener"><Image src={IMAGES.posterHikvisionDistributor.src} alt={IMAGES.posterHikvisionDistributor.alt} width={IMAGES.posterHikvisionDistributor.width} height={IMAGES.posterHikvisionDistributor.height} sizes="(max-width: 980px) 90vw, 400px" /></a><a href={IMAGES.posterCpPlusWifi.src} target="_blank" rel="noopener"><Image src={IMAGES.posterCpPlusWifi.src} alt={IMAGES.posterCpPlusWifi.alt} width={IMAGES.posterCpPlusWifi.width} height={IMAGES.posterCpPlusWifi.height} sizes="(max-width: 980px) 90vw, 400px" /></a><a href={IMAGES.posterSeagateSkyhawk.src} target="_blank" rel="noopener"><Image src={IMAGES.posterSeagateSkyhawk.src} alt={IMAGES.posterSeagateSkyhawk.alt} width={IMAGES.posterSeagateSkyhawk.width} height={IMAGES.posterSeagateSkyhawk.height} sizes="(max-width: 980px) 90vw, 400px" /></a></div></div></div></section>

<section className="svc-sec light" id="tally"><div className="wrap"><div className="svc-block">
<div className="svc-visual reveal"><Image className="svc-photo" src={IMAGES.softwareSetup.src} alt={IMAGES.softwareSetup.alt} fill sizes="(max-width: 980px) 100vw, 546px" /><div className="grad g-tally"></div><svg className="ring" viewBox="0 0 400 400" aria-hidden="true"><g fill="none" strokeWidth="1"><circle cx="200" cy="200" r="90" stroke="#2E97FF" opacity=".5" /><circle cx="200" cy="200" r="140" stroke="#FF9933" opacity=".3" /><circle cx="200" cy="200" r="185" stroke="#fff" opacity=".12" /></g></svg><span className="tag">Tally Software</span><svg className="art" viewBox="0 0 200 200" aria-hidden="true"><g fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><rect x="55" y="40" width="90" height="120" rx="8" /><line x1="55" y1="76" x2="145" y2="76" /><line x1="72" y1="98" x2="128" y2="98" stroke="#2E97FF" /><line x1="72" y1="118" x2="128" y2="118" /><line x1="72" y1="138" x2="104" y2="138" stroke="#FF9933" /></g></svg></div>
<div className="reveal"><span className="svc-num">SERVICE 03</span><h2>Tally, set up properly and supported.</h2><p className="lead-p">As a certified sales and implementation partner, we handle licensing, GST-ready configuration, and the customizations your accountant asks for. When you call for support, someone picks up.</p>
<ul className="svc-list"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Genuine licensing &amp; renewals</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Implementation &amp; setup</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>GST-ready configuration</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Custom reports &amp; TDLs</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Data migration</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Ongoing AMC support</li></ul><BrandRow brands={[BRANDS.tally, BRANDS.tallyPartner]} />
<div className="svc-cta-row"><a href="/contact#quote" className="btn btn-primary"><span>Get Free Quote</span> <span className="arr">→</span></a>
<a href="tel:+919324032476" className="btn btn-ghost on-light"><span>Call now</span></a></div></div>
</div></div></section>

<section className="svc-sec white" id="backup"><div className="wrap"><div className="svc-block flip">
<div className="svc-visual reveal"><Image className="svc-photo" src={IMAGES.networkRack.src} alt={IMAGES.networkRack.alt} fill sizes="(max-width: 980px) 100vw, 546px" /><div className="grad g-backup"></div><svg className="ring" viewBox="0 0 400 400" aria-hidden="true"><g fill="none" strokeWidth="1"><circle cx="200" cy="200" r="90" stroke="#2E97FF" opacity=".5" /><circle cx="200" cy="200" r="140" stroke="#FF9933" opacity=".3" /><circle cx="200" cy="200" r="185" stroke="#fff" opacity=".12" /></g></svg><span className="tag">Data Backup</span><svg className="art" viewBox="0 0 200 200" aria-hidden="true"><g fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="100" cy="52" rx="46" ry="16" stroke="#2E97FF" /><path d="M54 52v96c0 9 20 16 46 16s46-7 46-16V52" /><path d="M54 100c0 9 20 16 46 16s46-7 46-16" /><circle cx="100" cy="140" r="6" stroke="#FF9933" /></g></svg></div>
<div className="reveal"><span className="svc-num">SERVICE 04</span><h2>Synology backup, so a dead drive doesn&rsquo;t cost you your data.</h2><p className="lead-p">As an authorized Synology partner, we set up business-grade backup that runs on its own schedule, keeps redundant copies and can be restored when a drive fails.</p>
<ul className="svc-list"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Synology NAS supply &amp; setup</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>RAID configuration</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Automatic scheduled backup</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Off-site / cloud sync</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Disaster recovery planning</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Capacity &amp; upgrade advice</li></ul><BrandRow brands={[BRANDS.synology]} />
<div className="svc-cta-row"><a href="/contact#quote" className="btn btn-primary"><span>Get Free Quote</span> <span className="arr">→</span></a>
<a href="tel:+919324032476" className="btn btn-ghost on-light"><span>Call now</span></a></div></div>
</div></div></section>

<section className="svc-sec light" id="ups"><div className="wrap"><div className="reveal svc-intro"><span className="svc-num">SERVICE 05</span><h2>UPS and power backup, 600 VA to 20 kVA.</h2><p className="lead-p">Online and offline UPS from APC by Schneider Electric, Luminous and Artis, for homes, offices, server rooms and CCTV systems. We keep ready stock, help you size the right capacity, and install and service what we sell.</p></div><div className="poster-grid reveal"><a href={IMAGES.posterUpsApc.src} target="_blank" rel="noopener"><Image src={IMAGES.posterUpsApc.src} alt={IMAGES.posterUpsApc.alt} width={IMAGES.posterUpsApc.width} height={IMAGES.posterUpsApc.height} sizes="(max-width: 980px) 90vw, 400px" /></a><a href={IMAGES.posterUpsLuminous.src} target="_blank" rel="noopener"><Image src={IMAGES.posterUpsLuminous.src} alt={IMAGES.posterUpsLuminous.alt} width={IMAGES.posterUpsLuminous.width} height={IMAGES.posterUpsLuminous.height} sizes="(max-width: 980px) 90vw, 400px" /></a><a href={IMAGES.posterUpsArtis.src} target="_blank" rel="noopener"><Image src={IMAGES.posterUpsArtis.src} alt={IMAGES.posterUpsArtis.alt} width={IMAGES.posterUpsArtis.width} height={IMAGES.posterUpsArtis.height} sizes="(max-width: 980px) 90vw, 400px" /></a></div><div className="svc-cta-row" style={{marginTop:"30px"}}><a href="/contact#quote" className="btn btn-primary"><span>Get Free Quote</span> <span className="arr">→</span></a>
<a href="tel:+919324032476" className="btn btn-ghost on-light"><span>Call now</span></a></div></div></section>

<section className="sec2" id="more"><svg className="arc" viewBox="0 0 400 400" aria-hidden="true"><g fill="none" strokeWidth="1.4"><circle cx="200" cy="200" r="130" stroke="#2E97FF" opacity=".35" /><circle cx="200" cy="200" r="180" stroke="#138808" opacity=".25" /></g></svg>
<div className="wrap"><div className="sec-head dark reveal"><span className="eyebrow on-dark">Also handled</span><h2>The rest of your IT,<br />handled too.</h2><p>The everyday things that keep an office moving. One call covers all of it.</p></div>
<div className="sec2-grid"><div className="sec2-card reveal"><div className="sec2-shot photo"><Image src={IMAGES.racksOffice.src} alt={IMAGES.racksOffice.alt} width={IMAGES.racksOffice.width} height={IMAGES.racksOffice.height} sizes="(max-width: 980px) 90vw, 300px" className="sec2-img" style={{ objectPosition: "center 25%" }} /></div><div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M5 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm14 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM12 12v6m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" /></svg></div><h3>Networking</h3><p>Structured cabling, switches, routers &amp; Wi-Fi with coverage across your whole office.</p></div><div className="sec2-card reveal"><div className="sec2-shot photo"><Image src={IMAGES.helpdesk.src} alt={IMAGES.helpdesk.alt} width={IMAGES.helpdesk.width} height={IMAGES.helpdesk.height} sizes="(max-width: 980px) 90vw, 300px" className="sec2-img" /></div><div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 12l2 2 4-4" /></svg></div><h3>AMC Contracts</h3><p>Annual maintenance for your machines and network at a fixed yearly cost.</p></div><div className="sec2-card reveal"><div className="sec2-shot"><Image src={IMAGES.printer.src} alt={IMAGES.printer.alt} width={IMAGES.printer.width} height={IMAGES.printer.height} sizes="(max-width: 980px) 90vw, 300px" className="sec2-img" /></div><div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="6" y="9" width="12" height="7" rx="1" /><path d="M6 9V4h12v5M8 16v4h8v-4" /></svg></div><h3>Printers</h3><p>Sales, setup, sharing &amp; repair for inkjet, laser and multi-function printers.</p></div><div className="sec2-card reveal"><div className="sec2-shot"><BrandLogo brand={BRANDS.quickHeal} className="sec2-img" /></div><div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2L4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6z" /><path d="M9 12l2 2 4-4" /></svg></div><h3>Antivirus</h3><p>Genuine licensed antivirus &amp; endpoint protection, installed and kept current.</p></div><div className="sec2-card reveal"><div className="sec2-shot photo"><Image src={IMAGES.biometric.src} alt={IMAGES.biometric.alt} width={IMAGES.biometric.width} height={IMAGES.biometric.height} sizes="(max-width: 980px) 90vw, 300px" className="sec2-img" /></div><div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="3" /><path d="M5 20a7 7 0 0 1 14 0" /></svg></div><h3>Attendance Systems</h3><p>Biometric &amp; RFID attendance that plugs straight into your payroll.</p></div><div className="sec2-card reveal"><div className="sec2-shot"><Image src={IMAGES.epabx.src} alt={IMAGES.epabx.alt} width={IMAGES.epabx.width} height={IMAGES.epabx.height} sizes="(max-width: 980px) 90vw, 300px" className="sec2-img" /></div><div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg></div><h3>EPABX</h3><p>We install, extend and service office intercom &amp; phone systems.</p></div></div></div></section>

<section className="band"><svg className="rings" viewBox="0 0 400 400" aria-hidden="true"><g fill="none" strokeWidth="1.2"><circle cx="200" cy="200" r="80" stroke="#2E97FF" /><circle cx="200" cy="200" r="130" stroke="#FF9933" opacity=".6" /><circle cx="200" cy="200" r="180" stroke="#138808" opacity=".4" /></g></svg>
<div className="wrap band-inner"><h2>Not sure which one you need?</h2><p>Tell us what's going wrong. We'll work out the fix and explain it in plain language.</p>
<div className="band-cta"><a href="/contact#quote" className="btn btn-primary"><span>Get a Free Quote</span> <span className="arr">→</span></a><a href="tel:+919324032476" className="btn btn-ghost"><span>Call 93240 32476</span></a></div></div></section>    </>
  );
}
