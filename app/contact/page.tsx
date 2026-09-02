import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schemas";
import { buildMetadata } from "@/lib/metadata";
import LeadFormHandler from "@/components/LeadFormHandler";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = buildMetadata({
  title: "Contact Orbit IT Solutions — Mulund West, Mumbai",
  description:
    "Contact Orbit IT Solutions in Mulund West, Mumbai. Call 93240 32476 or WhatsApp for laptop repair, CCTV, Tally & Synology backup. Open Mon–Sat 10:30–20:00.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd schema={getBreadcrumbSchema([{ name: "Contact", path: "/contact" }])} />
      <LeadFormHandler />
<section className="phero">
  <svg className="arc" viewBox="0 0 400 400" aria-hidden="true"><g fill="none" strokeWidth="1"><circle cx="200" cy="200" r="90" stroke="#2E97FF" opacity=".6" /><circle cx="200" cy="200" r="140" stroke="#FF9933" opacity=".35" /><circle cx="200" cy="200" r="190" stroke="#138808" opacity=".3" /></g></svg>
  <div className="wrap phero-inner reveal">
    <div className="crumbs"><a href="/">Home</a><span className="sep">/</span><span>Contact</span></div>
    <span className="eyebrow on-dark">Get in touch</span>
    <h1 style={{marginTop:"18px"}}>Let&rsquo;s fix it. <span className="grad">Fast.</span></h1>
    <p>Broken laptop, new CCTV setup, a Tally licence or a backup that finally needs sorting — tell us what&rsquo;s up. We pick up the phone, and we&rsquo;re around you.</p>
  </div>
</section>

<section className="contact">
  <svg className="arc" viewBox="0 0 400 400" aria-hidden="true"><g fill="none" strokeWidth="1"><circle cx="200" cy="200" r="90" stroke="#2E97FF" opacity=".6" /><circle cx="200" cy="200" r="140" stroke="#FF9933" opacity=".35" /><circle cx="200" cy="200" r="190" stroke="#138808" opacity=".3" /></g></svg>
  <div className="wrap contact-grid">
    <div className="c-left reveal">
      <h2>Talk to a real<br />Orbit engineer.</h2>
      <p className="lead">No call centres, no tickets lost in a queue. Reach us directly — most issues get a same-day response.</p>
      <div className="c-rows">
        <div className="c-row">
          <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div>
          <div><span className="lbl">Visit the workshop</span>
            <span className="val">B-148 Shanti Industrial Estate</span>
            <span className="sub">Mulund West, Mumbai 400080 · Maharashtra</span></div>
        </div>
        <div className="c-row">
          <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg></div>
          <div><span className="lbl">Call us</span>
            <a className="val" href="tel:+912235701477">022-3570 1477</a>
            <a className="val sm" href="tel:+919324032476">+91 93240 32476</a></div>
        </div>
        <a className="c-row wa" href="https://wa.me/919324032476" target="_blank" rel="noopener">
          <div className="ic"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.039zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg></div>
          <div><span className="lbl">WhatsApp — we reply fast</span>
            <span className="val">93240 32476</span>
            <span className="sub">Send a photo of the problem, get a quote</span></div>
        </a>
        <div className="c-row">
          <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg></div>
          <div><span className="lbl">Working hours</span>
            <span className="val">Mon &ndash; Sat · 10:30 &ndash; 20:00</span>
            <span className="sub">Closed Sundays · Emergency AMC support on call</span></div>
        </div>
      </div>
    </div>

    <div className="c-right reveal">
      <div className="form-card" id="quote">
        <form id="leadForm" noValidate={true}>
          <div className="fh"><h3>Request a free quote</h3><p>Fill this in and we&rsquo;ll get back within working hours — usually much sooner.</p></div>
          <div className="fld"><input type="text" id="name" placeholder=" " autoComplete="name" /><label htmlFor="name">Your name</label><span className="err">Please enter your name</span></div>
          <div className="fld"><input type="email" id="email" placeholder=" " autoComplete="email" /><label htmlFor="email">Email address</label><span className="err">Please enter a valid email</span></div>
          <div className="fld"><input type="tel" id="phone" placeholder=" " autoComplete="tel" /><label htmlFor="phone">Phone number (optional)</label></div>
          <div className="fld"><select id="service" defaultValue=""><option value="" disabled={true} hidden={true}></option><option>Laptop / Desktop Repair</option><option>CCTV Installation</option><option>Tally Software</option><option>NAS / Synology Backup</option><option>Networking / AMC</option><option>Printers / Antivirus / Other</option></select><label htmlFor="service">Service needed</label><span className="err">Please choose a service</span></div>
          <div className="fld"><textarea id="message" placeholder=" "></textarea><label htmlFor="message">What&rsquo;s the issue? (optional)</label></div>
          <button type="submit" className="btn btn-primary"><span>Send my request</span> <span className="arr">&rarr;</span></button>
          <p className="form-note">Or call <a href="tel:+919324032476" style={{color:"var(--blue-bright)",fontWeight:"600"}}>93240 32476</a> — we&rsquo;re around you.</p>
        </form>
        <div className="form-success" id="formSuccess">
          <div className="ok"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></div>
          <h3>Got it — thank you!</h3>
          <p>Your request is in. An Orbit engineer will reach out shortly. Need us now? WhatsApp is fastest.</p>
          <a href="https://wa.me/919324032476" target="_blank" rel="noopener" className="btn btn-primary"><span>Open WhatsApp</span> <span className="arr">&rarr;</span></a>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="map-head">
  <div className="wrap">
    <span className="eyebrow on-light">Find us</span>
    <h2>Right here in Mulund West.</h2>
    <p>Drop in to the workshop, or let us come to you anywhere across Mumbai &amp; Thane.</p>
  </div>
</section>
<div className="map-wrap">
  <div className="map-pin"><div className="d"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div><div className="t"><b>Orbit IT Solutions</b><span>B-148 Shanti Industrial Estate, Mulund W</span></div></div>
  {/*
    Centred on the verified GBP coordinates rather than a text search.
    A `q=` address string is resolved by Google at load time and can land on a
    neighbouring building; the lat/long taken from the business's own listing
    always drops the pin in the right place.
  */}
  <iframe title="Orbit IT Solutions location map" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
    src={`https://www.google.com/maps?q=${siteConfig.geo!.latitude},${siteConfig.geo!.longitude}&z=16&output=embed`}></iframe>
</div>    </>
  );
}
