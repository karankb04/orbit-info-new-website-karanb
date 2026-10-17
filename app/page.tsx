import Image from "next/image";
import { IMAGES } from "@/lib/images";
import JsonLd from "@/components/JsonLd";
import { getFaqSchema } from "@/lib/schemas";
import { buildMetadata } from "@/lib/metadata";
import LeadFormHandler from "@/components/LeadFormHandler";
import HomeEffects from "@/components/HomeEffects";
import Counters from "@/components/Counters";
import BrandMarquee from "@/components/BrandMarquee";
import EquipmentGrid from "@/components/EquipmentGrid";
import { pickEquipment } from "@/lib/equipment";
import { HOME_SERVICES } from "@/lib/homeServices";
import { siteConfig, yearsInBusiness, telHref, whatsappHref } from "@/lib/siteConfig";

export const metadata = buildMetadata({
  title: `${siteConfig.name} | Mumbai's IT & Security Partner Since 1998`,
  description:
    "Laptop & desktop repair, CCTV installation, Tally software, and Synology backup for businesses across Mumbai & Thane. Based in Mulund West since 1998.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <LeadFormHandler />
      <HomeEffects />
      <Counters />
{/* ===== HERO ===== */}
<header className="hero">
  <canvas id="orbitCanvas" aria-hidden="true"></canvas>
  {/* The brand mark the orbit system revolves around — decorative here, since
      the nav logo already names the business. Positioned by HomeEffects so it
      always sits exactly on the canvas's orbital centre. */}
  <div className="hero-core" id="heroCore" aria-hidden="true">
    <span className="hero-core-plate">
      <Image
        src="/orbit-it-solutions-logo.png"
        alt=""
        width={502}
        height={156}
        sizes="260px"
        className="hero-core-img"
        priority
      />
    </span>
  </div>
  <div className="hero-inner wrap">
    <span className="hero-badge" id="heroBadge"><span className="dot"></span> Mulund West, Mumbai · Since 1998</span>
    <h1 id="heroH1">
      <span className="word">When</span> <span className="word">tech</span> <span className="word">breaks,</span><br />
      <span className="word grad">we're</span> <span className="word grad">around</span> <span className="word grad">you.</span>
    </h1>
    <p className="hero-sub" id="heroSub">Laptop &amp; desktop repair, CCTV, Tally, and Synology backup for businesses across Mumbai &amp; Thane. You call, we handle it, and most jobs are done the same day.</p>
    <div className="hero-cta" id="heroCta">
      <a href="/contact#quote" className="btn btn-primary"><span>Get a Free Quote</span> <span className="arr">→</span></a>
      <a href={whatsappHref} target="_blank" rel="noopener" className="btn btn-ghost"><span>WhatsApp Us</span></a>
    </div>
    <div className="hero-meta" id="heroMeta">
      <div className="m"><b>{yearsInBusiness}<span className="accent">+</span></b><span>Years</span></div>
      <div className="m"><b>5000<span className="accent">+</span></b><span>Clients</span></div>
      <div className="m"><b>Same-Day</b><span>Service</span></div>
    </div>
  </div>
</header>

{/* ===== SERVICES SHOWCASE ===== */}
<section className="services" id="services">
  <div className="wrap">
    <div className="sec-head light reveal">
      <span className="eyebrow on-light">What we do</span>
      <h2>Four services,<br />one local team.</h2>
      <p>We fix cracked laptop screens and we wire whole buildings with cameras. Either way, the same team answers the phone and turns up.</p>
    </div>
    <div className="svc-grid">
      {HOME_SERVICES.map((svc) => (
        <a key={svc.id} href={`/services#${svc.id}`} className="svc-card" data-card={true}>
          <div className={`bg ${svc.bg}`}></div>
          {svc.scene}
          <div className="veil"></div>
          <span className="num">{svc.num}</span>
          <div className="ico">{svc.icon}</div>
          <h3>{svc.cardTitle}</h3>
          <p>{svc.cardBlurb}</p>
          <span className="go">Get Free Quote <span className="arr">→</span></span>
        </a>
      ))}
    </div>
  </div>
</section>

{/* ===== STICKY SHOWCASE ===== */}
<section className="svc-tab-sec">
  <svg className="arc-bg" viewBox="0 0 400 400" aria-hidden="true"><g fill="none" strokeWidth="1.2"><circle cx="200" cy="200" r="90" stroke="#2E97FF" opacity=".5" /><circle cx="200" cy="200" r="145" stroke="#FF9933" opacity=".3" /><circle cx="200" cy="200" r="195" stroke="#fff" opacity=".1" /></g></svg>
  <div className="wrap">
    <div className="sec-head dark reveal" style={{marginBottom:"0"}}>
      <span className="eyebrow on-dark">What we do</span>
      <h2 style={{marginTop:"16px"}}>Four services,<br />one local team.</h2>
    </div>
    <div className="svc-tabs reveal" role="tablist" style={{marginTop:"38px"}}>
      {HOME_SERVICES.map((svc, i) => (
        <button key={svc.id} className={`svc-tab${i === 0 ? "  active" : ""}`} data-tab={i} aria-selected={i === 0}>{svc.tabTitle}</button>
      ))}
    </div>
    <div className="svc-panels reveal">
      {HOME_SERVICES.map((svc, i) => {
        const img = IMAGES[svc.panelImage];
        return (
          <div key={svc.id} className={`svc-panel${i === 0 ? "  active" : ""}`} data-panel={i}>
            <div>
              <span className="step">SERVICE {svc.num}</span>
              <h3>{svc.tabTitle}</h3>
              <p>{svc.panelText}</p>
              <ul>{svc.chips.map((c) => <li key={c}>{c}</li>)}</ul>
              <div className="panel-cta"><a href={`/services#${svc.id}`} className="btn btn-primary"><span>Learn more</span> <span className="arr">→</span></a><a href="/contact#quote" className="btn btn-ghost"><span>Get a quote</span></a></div>
            </div>
            <div className="svc-panel-visual"><Image className="svc-panel-img" src={img.src} alt={img.alt} fill sizes="(max-width: 980px) 320px, 493px" /></div>
          </div>
        );
      })}
    </div>
  </div>
</section>

{/* ===== STATS ===== */}
<section className="stats" id="stats">
  <svg className="arc-bg" viewBox="0 0 400 400" aria-hidden="true"><g fill="none" strokeWidth="1.4"><circle cx="200" cy="200" r="120" stroke="#2E97FF" opacity=".4" /><circle cx="200" cy="200" r="170" stroke="#FF9933" opacity=".25" /><path d="M40 200a160 160 0 0 1 320 0" stroke="#138808" opacity=".3" /></g></svg>
  <div className="wrap">
    <div className="sec-head dark reveal">
      <span className="eyebrow on-dark">By the numbers</span>
      <h2>{yearsInBusiness} years of fixing things<br />for Mumbai businesses.</h2>
    </div>
    <div className="stats-grid">
      <div className="stat reveal"><div className="n" data-count={yearsInBusiness} data-suffix="+"></div><div className="l">Years in business</div></div>
      <div className="stat reveal"><div className="n" data-count="5000" data-suffix="+"></div><div className="l">Clients served</div></div>
      <div className="stat reveal"><div className="n" data-count="15" data-suffix="+"></div><div className="l">Brands supported</div></div>
      <div className="stat reveal"><div className="n" data-text="Same-Day"></div><div className="l">Service response</div></div>
    </div>
  </div>
</section>

{/* ===== PRECISION / 3D ===== */}
<section className="precision" id="precision">
  <div className="wrap precision-grid">
    <div className="reveal">
      <div className="repair-art">
<svg viewBox="0 0 520 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A circuit board under precision inspection, illustrating chip-level repair">
<defs>
<linearGradient id="ra-board" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#12295a" /><stop offset="1" stopColor="#0a1a3a" /></linearGradient>
<linearGradient id="ra-chip" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#0f2148" /><stop offset="1" stopColor="#060f24" /></linearGradient>
<linearGradient id="ra-scan" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2E97FF" stopOpacity="0" /><stop offset=".5" stopColor="#2E97FF" stopOpacity=".5" /><stop offset="1" stopColor="#2E97FF" stopOpacity="0" /></linearGradient>
<radialGradient id="ra-lens" cx="50%" cy="42%" r="68%"><stop offset="0" stopColor="#2E97FF" stopOpacity=".12" /><stop offset="1" stopColor="#2E97FF" stopOpacity="0" /></radialGradient>
<clipPath id="ra-clip"><rect x="40" y="45" width="440" height="350" rx="20" /></clipPath>
</defs>
<g opacity=".15" fill="none" strokeWidth="1.4"><circle cx="476" cy="54" r="66" stroke="#2E97FF" /><circle cx="476" cy="54" r="104" stroke="#FF9933" opacity=".7" /></g>
<rect x="40" y="45" width="440" height="350" rx="20" fill="url(#ra-board)" stroke="#2E97FF" strokeOpacity=".25" />
<rect x="40" y="45" width="440" height="120" rx="20" fill="#fff" opacity=".03" />
<g clipPath="url(#ra-clip)">
<g fill="none" stroke="#2E97FF" strokeOpacity=".28" strokeWidth="1.5"><path d="M70 110 H150 V170" /><path d="M70 330 H140 V250" /><path d="M450 120 H360 V180" /><path d="M450 320 H372 V250" /><path d="M260 70 V120" /><path d="M260 320 V378" /></g>
<rect x="78" y="150" width="46" height="30" rx="4" fill="#0f2148" stroke="#2E97FF" strokeOpacity=".25" />
<rect x="398" y="150" width="40" height="58" rx="4" fill="#0f2148" stroke="#2E97FF" strokeOpacity=".25" />
<circle cx="108" cy="322" r="13" fill="#0f2148" stroke="#FF9933" strokeOpacity=".5" /><circle cx="108" cy="322" r="5" fill="#FF9933" fillOpacity=".5" />
<circle cx="150" cy="322" r="13" fill="#0f2148" stroke="#2E97FF" strokeOpacity=".4" /><circle cx="150" cy="322" r="5" fill="#2E97FF" fillOpacity=".5" />
<g fill="#FF9933" fillOpacity=".5"><rect x="356" y="362" width="9" height="20" /><rect x="370" y="362" width="9" height="20" /><rect x="384" y="362" width="9" height="20" /><rect x="398" y="362" width="9" height="20" /><rect x="412" y="362" width="9" height="20" /></g>
<circle className="nd" cx="70" cy="110" r="4" fill="#2E97FF" /><circle className="nd d2" cx="450" cy="320" r="4" fill="#2E97FF" /><circle className="nd d3" cx="150" cy="322" r="4" fill="#FF9933" />
<g fill="#cfd8ec" fillOpacity=".5"><rect x="197.5" y="141" width="5" height="11" rx="1.5" /><rect x="197.5" y="288" width="5" height="11" rx="1.5" /><rect x="212.5" y="141" width="5" height="11" rx="1.5" /><rect x="212.5" y="288" width="5" height="11" rx="1.5" /><rect x="227.5" y="141" width="5" height="11" rx="1.5" /><rect x="227.5" y="288" width="5" height="11" rx="1.5" /><rect x="242.5" y="141" width="5" height="11" rx="1.5" /><rect x="242.5" y="288" width="5" height="11" rx="1.5" /><rect x="257.5" y="141" width="5" height="11" rx="1.5" /><rect x="257.5" y="288" width="5" height="11" rx="1.5" /><rect x="272.5" y="141" width="5" height="11" rx="1.5" /><rect x="272.5" y="288" width="5" height="11" rx="1.5" /><rect x="287.5" y="141" width="5" height="11" rx="1.5" /><rect x="287.5" y="288" width="5" height="11" rx="1.5" /><rect x="302.5" y="141" width="5" height="11" rx="1.5" /><rect x="302.5" y="288" width="5" height="11" rx="1.5" /><rect x="317.5" y="141" width="5" height="11" rx="1.5" /><rect x="317.5" y="288" width="5" height="11" rx="1.5" /><rect x="179" y="163.5" width="11" height="5" rx="1.5" /><rect x="330" y="163.5" width="11" height="5" rx="1.5" /><rect x="179" y="178.5" width="11" height="5" rx="1.5" /><rect x="330" y="178.5" width="11" height="5" rx="1.5" /><rect x="179" y="193.5" width="11" height="5" rx="1.5" /><rect x="330" y="193.5" width="11" height="5" rx="1.5" /><rect x="179" y="208.5" width="11" height="5" rx="1.5" /><rect x="330" y="208.5" width="11" height="5" rx="1.5" /><rect x="179" y="223.5" width="11" height="5" rx="1.5" /><rect x="330" y="223.5" width="11" height="5" rx="1.5" /><rect x="179" y="238.5" width="11" height="5" rx="1.5" /><rect x="330" y="238.5" width="11" height="5" rx="1.5" /><rect x="179" y="253.5" width="11" height="5" rx="1.5" /><rect x="330" y="253.5" width="11" height="5" rx="1.5" /><rect x="179" y="268.5" width="11" height="5" rx="1.5" /><rect x="330" y="268.5" width="11" height="5" rx="1.5" /><rect x="179" y="283.5" width="11" height="5" rx="1.5" /><rect x="330" y="283.5" width="11" height="5" rx="1.5" /></g>
<rect x="190" y="150" width="140" height="140" rx="9" fill="url(#ra-chip)" stroke="#2E97FF" strokeOpacity=".55" />
<rect x="208" y="168" width="104" height="104" rx="4" fill="#0a1a3a" stroke="#2E97FF" strokeOpacity=".22" />
<g fill="none" stroke="#2E97FF" strokeOpacity=".3" strokeWidth="1"><rect x="228" y="188" width="64" height="64" rx="2" /><rect x="244" y="204" width="32" height="32" rx="2" /></g>
<circle cx="260" cy="220" r="4" fill="#2E97FF" fillOpacity=".7" />
<g transform="translate(0)" className="scan"><rect x="40" y="42" width="440" height="44" fill="url(#ra-scan)" /><rect x="40" y="63" width="440" height="1.6" fill="#7dbcff" opacity=".8" /></g>
</g>
<g className="reticle">
<circle cx="260" cy="220" r="86" fill="url(#ra-lens)" stroke="#2E97FF" strokeOpacity=".75" strokeWidth="2" />
<circle cx="260" cy="220" r="86" fill="none" stroke="#2E97FF" strokeOpacity=".18" strokeWidth="6" />
<g stroke="#2E97FF" strokeOpacity=".4" strokeWidth="1"><line x1="200" y1="220" x2="320" y2="220" /><line x1="260" y1="160" x2="260" y2="280" /></g>
<g stroke="#2E97FF" strokeWidth="2.4" fill="none" strokeLinecap="round">
<path d="M186 168 v-12 h12" /><path d="M334 168 v-12 h-12" /><path d="M186 272 v12 h12" /><path d="M334 272 v12 h-12" /></g>
</g>
<g stroke="#cfd8ec" strokeOpacity=".85"><line x1="438" y1="70" x2="322" y2="170" strokeWidth="2" /></g>
<polygon points="322,170 334,167 330,180" fill="#eef3fb" />
<circle cx="438" cy="70" r="4" fill="#FF9933" />
<g transform="translate(330,86)"><rect x="0" y="0" width="118" height="26" rx="13" fill="#0a1a3a" stroke="#2E97FF" strokeOpacity=".4" /><circle cx="16" cy="13" r="4" fill="#2E97FF" /><text x="30" y="17" fontFamily="'Space Grotesk',sans-serif" fontSize="11" fontWeight="700" letterSpacing="1" fill="#dfe6f5">MICRO-SOLDER</text></g>
</svg></div>
    </div>
    <div className="reveal">
      <span className="eyebrow on-light">The craft</span>
      <h2 style={{fontSize:"clamp(2rem,4.5vw,3.2rem)",color:"var(--ink)",marginTop:"18px"}}>Chip-level repairs,<br />usually the same day.</h2>
      <p style={{marginTop:"18px",color:"var(--grey)",fontSize:"1.08rem"}}>Many shops swap the whole board and bill you for it. We trace the fault to the component and fix that part.</p>
      <div className="feat">
        <div className="row"><span className="tick">✓</span><div><b>Component-level diagnosis</b><p>Micro-soldering, IC replacement and power-rail repair.</p></div></div>
        <div className="row"><span className="tick">✓</span><div><b>Honest, upfront quotes</b><p>You approve the price before we open a single screw.</p></div></div>
        <div className="row"><span className="tick">✓</span><div><b>Same-day turnaround</b><p>Most laptop &amp; desktop jobs back in your hands the same day.</p></div></div>
      </div>
      <a href="/services#laptop" className="btn btn-primary" style={{marginTop:"30px"}}><span>See repair services</span> <span className="arr">→</span></a>
    </div>
  </div>
</section>

{/* ===== WHY ORBIT ===== */}
<section className="why" id="why">
  <div className="wrap">
    <div className="sec-head light reveal">
      <span className="eyebrow on-light">Why Orbit</span>
      <h2>Why Mulund businesses<br />call Orbit.</h2>
    </div>
    <div className="why-grid">
      <div className="why-card reveal"><div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2L4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6z" /><path d="M9 12l2 2 4-4" /></svg></div><h3>{yearsInBusiness} years, one team</h3><p>The same team has looked after Mumbai &amp; Thane businesses since 1998. You talk to us directly, not a call centre.</p></div>
      <div className="why-card reveal"><div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg></div><h3>Same-day, around you</h3><p>We're local, so when something breaks we're already nearby, and it's often fixed the same day.</p></div>
      <div className="why-card reveal"><div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 6L9 17l-5-5" /></svg></div><h3>Certified partners</h3><p>Synology authorized &amp; Tally certified. We sell genuine products with proper warranties and stand behind our work.</p></div>
    </div>
  </div>
</section>

{/* ===== EQUIPMENT PREVIEW ===== */}
<section className="kit-sec">
  <div className="wrap">
    <div className="sec-head light reveal">
      <span className="eyebrow on-light">Equipment we supply</span>
      <h2>The hardware behind the work.</h2>
      <p>Genuine cameras, racks, laptops and office systems, supplied and installed by the people you call later for service.</p>
    </div>
    <EquipmentGrid items={pickEquipment(["cctv-outdoor", "cctv-indoor", "cctv-ptz", "racks", "laptops", "pos"])} />
    <a href="/portfolio#equipment" className="kit-more">See all equipment <span className="arr">→</span></a>
  </div>
</section>

{/* ===== MARQUEE ===== */}
<BrandMarquee />

{/* ===== LEAD FORM ===== */}
<section className="lead" id="contact">
  <div className="glow"></div>
  <div className="wrap lead-grid">
    <div className="reveal">
      <span className="eyebrow on-dark">Free quote</span>
      <h2>Tell us what broke.<br />We'll tell you the fix.</h2>
      <p className="lead-sub">Send one message and a real person from Orbit replies, usually within the hour during shop hours.</p>
      <div className="contact-rows">
        <div className="crow"><span className="ci"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg></span><div><b>{siteConfig.phone.secondary.display} · {siteConfig.phone.primary.display}</b><span>Mon–Sat, 10:30 – 20:00</span></div></div>
        <div className="crow"><span className="ci"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></span><div><b>B-148 Shanti Industrial Estate</b><span>Mulund West, Mumbai</span></div></div>
      </div>
    </div>

    <div className="form-card reveal">
      <form id="leadForm" noValidate={true}>
        <div className="fld"><input type="text" id="name" placeholder=" " autoComplete="name" /><label htmlFor="name">Your name</label><span className="err">Please enter your name</span></div>
        <div className="fld"><input type="email" id="email" placeholder=" " autoComplete="email" /><label htmlFor="email">Email address</label><span className="err">Please enter a valid email</span></div>
        <div className="fld"><input type="tel" id="phone" placeholder=" " autoComplete="tel" /><label htmlFor="phone">Phone number (optional)</label></div>
        <div className="fld"><select id="service" defaultValue=""><option value="" disabled={true} hidden={true}></option><option>Laptop / Desktop Repair</option><option>CCTV Installation</option><option>Tally Software</option><option>NAS / Synology Backup</option><option>UPS / Power Backup</option><option>Networking / AMC / Other</option></select><label htmlFor="service">Service needed</label><span className="err">Please choose a service</span></div>
        <div className="fld"><textarea id="message" placeholder=" "></textarea><label htmlFor="message">What's the issue? (optional)</label></div>
        <button type="submit" className="btn btn-primary"><span>Send &amp; get my quote</span> <span className="arr">→</span></button>
      </form>
      <div className="form-success" id="formSuccess">
        <div className="ok"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg></div>
        <h3>Got it. We're on it.</h3>
        <p>Thanks, we'll call you back shortly. Need us now? <a href={whatsappHref} style={{color:"var(--blue-bright)",fontWeight:"600"}}>WhatsApp us →</a></p>
      </div>
    </div>
  </div>
</section>

{/* ===== FINAL CTA ===== */}
<section className="finale">
  <svg className="rings" viewBox="0 0 400 400" aria-hidden="true"><g fill="none" strokeWidth="1.2"><circle cx="200" cy="200" r="70" stroke="#2E97FF" /><circle cx="200" cy="200" r="120" stroke="#FF9933" opacity=".6" /><circle cx="200" cy="200" r="170" stroke="#138808" opacity=".4" /><circle cx="200" cy="200" r="195" stroke="#fff" opacity=".15" /></g></svg>
  <div className="wrap finale-inner">
    <h2>Got an IT problem?<br /><span className="grad">We're around you.</span></h2>
    <p>Call Orbit and we'll take it from there. Mumbai businesses have been doing that since 1998.</p>
    <div className="finale-cta">
      <a href={telHref} className="btn btn-primary"><span>Call {siteConfig.phone.primary.display}</span></a>
      <a href={whatsappHref} target="_blank" rel="noopener" className="btn btn-ghost"><span>Chat on WhatsApp</span></a>
    </div>
  </div>
</section>    </>
  );
}
