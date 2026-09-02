import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schemas";
import { buildMetadata } from "@/lib/metadata";
import Counters from "@/components/Counters";

export const metadata = buildMetadata({
  title: "About — Mumbai's IT Partner Since 1998",
  description:
    "Orbit IT Solutions has served Mumbai & Thane businesses since 1998 — laptop repair, CCTV, Tally and Synology backup. Certified Tally & authorized Synology partner.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd schema={getBreadcrumbSchema([{ name: "About", path: "/about" }])} />
      <Counters />
<header className="phero">
<svg className="arc" viewBox="0 0 400 400" aria-hidden="true"><g fill="none" strokeWidth="1.4"><circle cx="200" cy="200" r="120" stroke="#2E97FF" opacity=".4" /><circle cx="200" cy="200" r="170" stroke="#FF9933" opacity=".25" /></g></svg>
<div className="wrap phero-inner">
<div className="crumbs"><a href="/">Home</a><span className="sep">/</span><span>About</span></div>
<h1>26 years in Mumbai. <span className="grad">Still around you.</span></h1>
<p>Orbit IT Solutions started in 1998 as a neighbourhood repair shop. The neighbourhood grew. So did we. The promise never changed.</p>
</div></header>

<section className="story"><div className="wrap"><div className="story-grid">
<div className="reveal"><span className="eyebrow on-light">Our story</span><h2>Built one fixed problem at a time.</h2>
<p>In 1998, a business owner in Mulund had a dead computer and a deadline. We fixed it that afternoon. Word travelled the way it does in Mumbai — desk to desk, shop to shop, accountant to accountant.</p>
<p>Twenty-six years later, the work is bigger — CCTV across whole societies, backup for entire offices, Tally for businesses that have outgrown their spreadsheets. But it&rsquo;s still the same idea: be local, be fast, and actually fix the thing.</p>
<p>We&rsquo;re the team a Mulund business owner shows to his accountant and says, &ldquo;Yaar, ye toh apna hi Orbit hai.&rdquo;</p>
<div className="sign">The Orbit IT Solutions team<span>Mulund West, Mumbai · Since 1998</span></div></div>
<div className="story-visual reveal"><img className="story-photo" src="/images/orbit-it-solutions-team-mumbai.jpg" alt="The Orbit IT Solutions team outside the Mulund West office" loading="lazy" /><svg className="ring" viewBox="0 0 400 400" aria-hidden="true"><g fill="none" strokeWidth="1"><circle cx="200" cy="200" r="90" stroke="#2E97FF" opacity=".5" /><circle cx="200" cy="200" r="140" stroke="#FF9933" opacity=".3" /><circle cx="200" cy="200" r="185" stroke="#fff" opacity=".12" /></g></svg><div className="est"><div className="y">1998</div><div className="t">Established</div></div><span className="badge">Serving Mumbai &amp; Thane ever since</span></div>
</div></div></section>

<section className="mini"><div className="wrap"><div className="mini-grid">
<div className="reveal"><div className="n" data-count="26" data-suffix="+"></div><div className="l">Years in business</div></div>
<div className="reveal"><div className="n" data-count="5000" data-suffix="+"></div><div className="l">Clients served</div></div>
<div className="reveal"><div className="n" data-count="15" data-suffix="+"></div><div className="l">Brands supported</div></div>
<div className="reveal"><div className="n" data-text="Same-Day"></div><div className="l">Service response</div></div>
</div></div></section>

<section className="timeline"><svg className="arc" viewBox="0 0 400 400" aria-hidden="true"><g fill="none" strokeWidth="1.4"><circle cx="200" cy="200" r="130" stroke="#2E97FF" opacity=".35" /><circle cx="200" cy="200" r="180" stroke="#138808" opacity=".25" /></g></svg>
<div className="wrap"><div className="sec-head dark reveal"><span className="eyebrow on-dark">Milestones</span><h2>The road from one shop<br />to Mumbai&rsquo;s IT partner.</h2></div>
<div className="tl"><div className="tl-item reveal"><div className="yr">1998</div><span className="dot"></span><div className="body"><h3>It starts in Mumbai</h3><p>Orbit IT Solutions opens its doors — a small computer hardware &amp; repair shop with a big promise: pick up the phone, and we&rsquo;ll handle it.</p></div></div><div className="tl-item reveal"><div className="yr">2004</div><span className="dot"></span><div className="body"><h3>Security enters the picture</h3><p>As businesses started worrying about more than data, we added CCTV &amp; electronic security to keep clients covered end to end.</p></div></div><div className="tl-item reveal"><div className="yr">2010</div><span className="dot"></span><div className="body"><h3>Certified Tally partner</h3><p>We became a certified Tally sales &amp; implementation partner, helping SMBs across the city run their books without the headaches.</p></div></div><div className="tl-item reveal"><div className="yr">2016</div><span className="dot"></span><div className="body"><h3>Authorized Synology partner</h3><p>Data became the asset that mattered most. We partnered with Synology to bring business-grade backup to local offices.</p></div></div><div className="tl-item reveal"><div className="yr">2024</div><span className="dot"></span><div className="body"><h3>26 years, 5000+ clients</h3><p>Same shop spirit, far bigger reach — thousands of Mumbai &amp; Thane businesses now have Orbit on speed dial.</p></div></div></div></div></section>

<section className="certs"><div className="wrap"><div className="sec-head light reveal"><span className="eyebrow on-light">Certifications</span><h2>Authorized, certified,<br />and accountable.</h2><p>We don&rsquo;t resell mystery boxes. Genuine products from partners who stand behind their work — and so do we.</p></div>
<div className="cert-grid"><div className="cert reveal"><span className="ribbon"></span><div className="medal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" /></svg></div><h3>Synology</h3><p>Authorized Partner</p></div><div className="cert reveal"><span className="ribbon"></span><div className="medal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="4" y="3" width="16" height="18" rx="2" /><line x1="8" y1="8" x2="16" y2="8" /><line x1="8" y1="12" x2="16" y2="12" /></svg></div><h3>Tally</h3><p>Certified Partner</p></div><div className="cert reveal"><span className="ribbon"></span><div className="medal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3 8l14-4 2 6-14 4z" /><circle cx="10" cy="9" r="2.2" /></svg></div><h3>CP Plus</h3><p>CCTV Channel Partner</p></div><div className="cert reveal"><span className="ribbon"></span><div className="medal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="5" y="8" width="9" height="6" rx="2" /><path d="M14 9l5-3M14 13l5 3" /></svg></div><h3>Hikvision</h3><p>Installation Partner</p></div></div></div></section>

<section className="values"><div className="wrap"><div className="sec-head light reveal"><span className="eyebrow on-light">How we work</span><h2>Three rules. Twenty-six years.</h2></div>
<div className="val-grid"><div className="val reveal"><div className="vn">01</div><h3>We pick up</h3><p>No call centres, no tickets that vanish. A real local person answers and owns your problem.</p></div><div className="val reveal"><div className="vn">02</div><h3>We&rsquo;re honest</h3><p>You hear the real diagnosis and the real price — before we touch a screw. No padding, no surprises.</p></div><div className="val reveal"><div className="vn">03</div><h3>We&rsquo;re fast</h3><p>&ldquo;Around you&rdquo; isn&rsquo;t a slogan. Being local means most jobs are sorted the same day.</p></div></div></div></section>

<section className="band"><svg className="rings" viewBox="0 0 400 400" aria-hidden="true"><g fill="none" strokeWidth="1.2"><circle cx="200" cy="200" r="80" stroke="#2E97FF" /><circle cx="200" cy="200" r="130" stroke="#FF9933" opacity=".6" /><circle cx="200" cy="200" r="180" stroke="#138808" opacity=".4" /></g></svg>
<div className="wrap band-inner"><h2>Let&rsquo;s add your business<br /><span className="grad">to the next 26 years.</span></h2><p>Whatever&rsquo;s on your desk — broken, slow, or not yet backed up — we&rsquo;re around you.</p>
<div className="band-cta"><a href="/contact#quote" className="btn btn-primary"><span>Get a Free Quote</span> <span className="arr">→</span></a><a href="https://wa.me/919324032476" target="_blank" rel="noopener" className="btn btn-ghost"><span>WhatsApp Us</span></a></div></div></section>    </>
  );
}
