import Image from "next/image";
import { IMAGES } from "@/lib/images";
import JsonLd from "@/components/JsonLd";
import { BrandLogo } from "@/components/BrandRow";
import { BRANDS } from "@/lib/brands";
import { siteConfig, yearsInBusiness } from "@/lib/siteConfig";
import { getBreadcrumbSchema } from "@/lib/schemas";
import { buildMetadata } from "@/lib/metadata";
import Counters from "@/components/Counters";

export const metadata = buildMetadata({
  title: "About Orbit IT Solutions: Mumbai's IT Partner Since 1998",
  description:
    "Orbit IT Solutions has served Mumbai & Thane businesses since 1998 with laptop repair, CCTV, Tally and Synology backup. Certified Tally & authorized Synology partner.",
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
<h1>{yearsInBusiness} years in Mumbai. <span className="grad">Still around you.</span></h1>
<p>Orbit IT Solutions started in 1998 as a neighbourhood repair shop. The neighbourhood grew. So did we. The promise never changed.</p>
</div></header>

<section className="story"><div className="wrap"><div className="story-grid">
<div className="reveal"><span className="eyebrow on-light">Our story</span><h2>Built one fixed problem at a time.</h2>
<p>In 1998, a business owner in Mulund had a dead computer and a deadline. We fixed it that afternoon. Word travelled the way it does in Mumbai: desk to desk, shop to shop, accountant to accountant.</p>
<p>{yearsInBusiness} years later, the work is bigger: CCTV across whole societies, backup for entire offices, Tally for businesses that have outgrown their spreadsheets. But it&rsquo;s still the same idea: be local, be fast, and actually fix the thing.</p>
<p>We&rsquo;re the team a Mulund business owner shows to his accountant and says, &ldquo;Yaar, ye toh apna hi Orbit hai.&rdquo;</p>
<div className="sign">The Orbit IT Solutions team<span>Mulund West, Mumbai · Since 1998</span></div></div>
<div className="story-visual reveal"><Image className="story-photo" src={IMAGES.team.src} alt={IMAGES.team.alt} fill sizes="(max-width: 980px) 420px, 519px" /><svg className="ring" viewBox="0 0 400 400" aria-hidden="true"><g fill="none" strokeWidth="1"><circle cx="200" cy="200" r="90" stroke="#2E97FF" opacity=".5" /><circle cx="200" cy="200" r="140" stroke="#FF9933" opacity=".3" /><circle cx="200" cy="200" r="185" stroke="#fff" opacity=".12" /></g></svg><div className="est"><div className="y">1998</div><div className="t">Established</div></div><span className="badge">Serving Mumbai &amp; Thane ever since</span></div>
</div></div></section>

<section className="mini"><div className="wrap"><div className="mini-grid">
<div className="reveal"><div className="n" data-count="26" data-suffix="+"></div><div className="l">Years in business</div></div>
<div className="reveal"><div className="n" data-count="5000" data-suffix="+"></div><div className="l">Clients served</div></div>
<div className="reveal"><div className="n" data-count="15" data-suffix="+"></div><div className="l">Brands supported</div></div>
<div className="reveal"><div className="n" data-text="Same-Day"></div><div className="l">Service response</div></div>
</div></div></section>

<section className="timeline"><svg className="arc" viewBox="0 0 400 400" aria-hidden="true"><g fill="none" strokeWidth="1.4"><circle cx="200" cy="200" r="130" stroke="#2E97FF" opacity=".35" /><circle cx="200" cy="200" r="180" stroke="#138808" opacity=".25" /></g></svg>
<div className="wrap"><div className="sec-head dark reveal"><span className="eyebrow on-dark">Milestones</span><h2>The road from one shop<br />to Mumbai&rsquo;s IT partner.</h2></div>
<div className="tl"><div className="tl-item reveal"><div className="yr">1998</div><span className="dot"></span><div className="body"><h3>It starts in Mumbai</h3><p>Orbit IT Solutions opens as a small computer hardware &amp; repair shop with one promise: call us, and we&rsquo;ll handle it.</p></div></div><div className="tl-item reveal"><div className="yr">2004</div><span className="dot"></span><div className="body"><h3>Security enters the picture</h3><p>As businesses started worrying about more than data, we added CCTV &amp; electronic security.</p></div></div><div className="tl-item reveal"><div className="yr">2010</div><span className="dot"></span><div className="body"><h3>Certified Tally partner</h3><p>We became a certified Tally sales &amp; implementation partner, helping SMBs across the city run their books without the headaches.</p></div></div><div className="tl-item reveal"><div className="yr">2016</div><span className="dot"></span><div className="body"><h3>Authorized Synology partner</h3><p>Data became the asset that mattered most. We partnered with Synology to bring business-grade backup to local offices.</p></div></div><div className="tl-item reveal"><div className="yr">2024</div><span className="dot"></span><div className="body"><h3>26 years, 5000+ clients</h3><p>Still run like the original shop, but thousands of Mumbai &amp; Thane businesses now have Orbit on speed dial.</p></div></div><div className="tl-item reveal"><div className="yr">2026</div><span className="dot"></span><div className="body"><h3>One name: {siteConfig.name}</h3><p>Formerly {siteConfig.alternateName}, the business now goes by one name everywhere, with a new website at {new URL(siteConfig.url).host}. Same team, same {siteConfig.address.locality} workshop.</p></div></div></div></div></section>

<section className="certs"><div className="wrap"><div className="sec-head light reveal"><span className="eyebrow on-light">Certifications</span><h2>Our partners<br />and certifications.</h2><p>We sell genuine products from brands that back them with warranties, and we back our installation work too.</p></div>
<div className="cert-grid"><div className="cert reveal"><span className="ribbon"></span><div className="cert-logo"><BrandLogo brand={BRANDS.synology} className="cert-logo-img" /></div><h3>Synology</h3><p>Authorized Partner</p></div><div className="cert reveal"><span className="ribbon"></span><div className="cert-logo"><BrandLogo brand={BRANDS.tally} className="cert-logo-img" /></div><h3>Tally</h3><p>Certified Partner</p></div><div className="cert reveal"><span className="ribbon"></span><div className="cert-logo"><BrandLogo brand={BRANDS.cpPlus} className="cert-logo-img" /></div><h3>CP Plus</h3><p>Authorised Regional Distributor &amp; Channel Partner</p></div><div className="cert reveal"><span className="ribbon"></span><div className="cert-logo"><BrandLogo brand={BRANDS.hikvision} className="cert-logo-img" /></div><h3>Hikvision</h3><p>Authorised Regional Distributor &amp; Installation Partner</p></div></div></div></section>

<section className="values"><div className="wrap"><div className="sec-head light reveal"><span className="eyebrow on-light">How we work</span><h2>Three rules. {yearsInBusiness} years.</h2></div>
<div className="val-grid"><div className="val reveal"><div className="vn">01</div><h3>We pick up</h3><p>There&rsquo;s no call centre. A local person answers and stays with your problem until it&rsquo;s fixed.</p></div><div className="val reveal"><div className="vn">02</div><h3>We&rsquo;re honest</h3><p>We tell you what&rsquo;s wrong and what it will cost before we touch a screw.</p></div><div className="val reveal"><div className="vn">03</div><h3>We&rsquo;re fast</h3><p>We&rsquo;re local, so most jobs are sorted the same day.</p></div></div></div></section>

<section className="band"><svg className="rings" viewBox="0 0 400 400" aria-hidden="true"><g fill="none" strokeWidth="1.2"><circle cx="200" cy="200" r="80" stroke="#2E97FF" /><circle cx="200" cy="200" r="130" stroke="#FF9933" opacity=".6" /><circle cx="200" cy="200" r="180" stroke="#138808" opacity=".4" /></g></svg>
<div className="wrap band-inner"><h2>Let&rsquo;s add your business<br /><span className="grad">to the next {yearsInBusiness} years.</span></h2><p>If something on your desk is broken, slow or not backed up yet, we&rsquo;re around you.</p>
<div className="band-cta"><a href="/contact#quote" className="btn btn-primary"><span>Get a Free Quote</span> <span className="arr">→</span></a><a href="https://wa.me/919324032476" target="_blank" rel="noopener" className="btn btn-ghost"><span>WhatsApp Us</span></a></div></div></section>    </>
  );
}
