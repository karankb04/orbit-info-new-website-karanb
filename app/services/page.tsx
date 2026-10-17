import Image from "next/image";
import ServiceSection from "@/components/ServiceSection";
import PosterGrid from "@/components/PosterGrid";
import { SERVICES, SERVICE_DETAILS } from "@/lib/services";
import { IMAGES } from "@/lib/images";
import JsonLd from "@/components/JsonLd";
import { BrandLogo } from "@/components/BrandRow";
import { BRANDS } from "@/lib/brands";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/schemas";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig, yearsInBusiness, telHref, whatsappHref } from "@/lib/siteConfig";

export const metadata = buildMetadata({
  title: "Services: Laptop Repair, CCTV, Tally & Backup",
  description:
    "Laptop & desktop repair, CCTV installation, Tally software, Synology backup and UPS for Mumbai & Thane businesses. CP Plus and Hikvision regional distributor. Plus networking, AMC, printers and antivirus.",
  path: "/services",
});

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
<div className="svc-cta-row" style={{marginTop:"34px"}}><a href="/contact#quote" className="btn btn-primary"><span>Get a Free Quote</span> <span className="arr">→</span></a><a href={whatsappHref} target="_blank" rel="noopener" className="btn btn-ghost"><span>WhatsApp Us</span></a></div>
</div></header>

{SERVICE_DETAILS.map((d) => (
  <ServiceSection key={d.id} s={d} />
))}

<section className="svc-sec light" id="ups"><div className="wrap"><div className="reveal svc-intro"><span className="svc-num">SERVICE 05</span><h2>UPS and power backup, 600 VA to 20 kVA.</h2><p className="lead-p">Online and offline UPS from APC by Schneider Electric, Luminous and Artis, for homes, offices, server rooms and CCTV systems. We keep ready stock, help you size the right capacity, and install and service what we sell.</p></div><PosterGrid className="reveal" posters={["posterUpsApc", "posterUpsLuminous", "posterUpsArtis"]} /><div className="svc-cta-row" style={{marginTop:"30px"}}><a href="/contact#quote" className="btn btn-primary"><span>Get Free Quote</span> <span className="arr">→</span></a>
<a href={telHref} className="btn btn-ghost on-light"><span>Call now</span></a></div></div></section>

<section className="sec2" id="more"><svg className="arc" viewBox="0 0 400 400" aria-hidden="true"><g fill="none" strokeWidth="1.4"><circle cx="200" cy="200" r="130" stroke="#2E97FF" opacity=".35" /><circle cx="200" cy="200" r="180" stroke="#138808" opacity=".25" /></g></svg>
<div className="wrap"><div className="sec-head dark reveal"><span className="eyebrow on-dark">Also handled</span><h2>The rest of your IT,<br />handled too.</h2><p>The everyday things that keep an office moving. One call covers all of it.</p></div>
<div className="sec2-grid"><div className="sec2-card reveal"><div className="sec2-shot photo"><Image src={IMAGES.racksOffice.src} alt={IMAGES.racksOffice.alt} width={IMAGES.racksOffice.width} height={IMAGES.racksOffice.height} sizes="(max-width: 980px) 90vw, 300px" className="sec2-img" style={{ objectPosition: "center 25%" }} /></div><div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M5 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm14 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM12 12v6m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" /></svg></div><h3>Networking</h3><p>Structured cabling, switches, routers &amp; Wi-Fi with coverage across your whole office.</p></div><div className="sec2-card reveal"><div className="sec2-shot photo"><Image src={IMAGES.helpdesk.src} alt={IMAGES.helpdesk.alt} width={IMAGES.helpdesk.width} height={IMAGES.helpdesk.height} sizes="(max-width: 980px) 90vw, 300px" className="sec2-img" /></div><div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 12l2 2 4-4" /></svg></div><h3>AMC Contracts</h3><p>Annual maintenance for your machines and network at a fixed yearly cost.</p></div><div className="sec2-card reveal"><div className="sec2-shot"><Image src={IMAGES.printer.src} alt={IMAGES.printer.alt} width={IMAGES.printer.width} height={IMAGES.printer.height} sizes="(max-width: 980px) 90vw, 300px" className="sec2-img" /></div><div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="6" y="9" width="12" height="7" rx="1" /><path d="M6 9V4h12v5M8 16v4h8v-4" /></svg></div><h3>Printers</h3><p>Sales, setup, sharing &amp; repair for inkjet, laser and multi-function printers.</p></div><div className="sec2-card reveal"><div className="sec2-shot"><BrandLogo brand={BRANDS.quickHeal} className="sec2-img" /></div><div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2L4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6z" /><path d="M9 12l2 2 4-4" /></svg></div><h3>Antivirus</h3><p>Genuine licensed antivirus &amp; endpoint protection, installed and kept current.</p></div><div className="sec2-card reveal"><div className="sec2-shot photo"><Image src={IMAGES.biometric.src} alt={IMAGES.biometric.alt} width={IMAGES.biometric.width} height={IMAGES.biometric.height} sizes="(max-width: 980px) 90vw, 300px" className="sec2-img" /></div><div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="3" /><path d="M5 20a7 7 0 0 1 14 0" /></svg></div><h3>Attendance Systems</h3><p>Biometric &amp; RFID attendance that plugs straight into your payroll.</p></div><div className="sec2-card reveal"><div className="sec2-shot"><Image src={IMAGES.epabx.src} alt={IMAGES.epabx.alt} width={IMAGES.epabx.width} height={IMAGES.epabx.height} sizes="(max-width: 980px) 90vw, 300px" className="sec2-img" /></div><div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg></div><h3>EPABX</h3><p>We install, extend and service office intercom &amp; phone systems.</p></div></div></div></section>

<section className="band"><svg className="rings" viewBox="0 0 400 400" aria-hidden="true"><g fill="none" strokeWidth="1.2"><circle cx="200" cy="200" r="80" stroke="#2E97FF" /><circle cx="200" cy="200" r="130" stroke="#FF9933" opacity=".6" /><circle cx="200" cy="200" r="180" stroke="#138808" opacity=".4" /></g></svg>
<div className="wrap band-inner"><h2>Not sure which one you need?</h2><p>Tell us what's going wrong. We'll work out the fix and explain it in plain language.</p>
<div className="band-cta"><a href="/contact#quote" className="btn btn-primary"><span>Get a Free Quote</span> <span className="arr">→</span></a><a href={telHref} className="btn btn-ghost"><span>Call {siteConfig.phone.primary.display}</span></a></div></div></section>    </>
  );
}
