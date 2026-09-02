import Link from "next/link";
import Logo from "./Logo";
import { siteConfig, formattedAddress } from "@/lib/siteConfig";

/**
 * Footer. Address and phone are read from siteConfig, never typed inline —
 * the footer NAP appears on every page and is one of the strongest local
 * signals, so it must match the GBP listing exactly.
 */
export default function Footer() {
  const { phone, hours } = siteConfig;

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Logo />
            <p>
              Mumbai&rsquo;s trusted IT &amp; electronic security partner since{" "}
              {siteConfig.foundingYear}. Fast. Reliable. Professional.
            </p>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li><Link href="/services#laptop">Laptop &amp; Desktop Repair</Link></li>
              <li><Link href="/services#cctv">CCTV Installation</Link></li>
              <li><Link href="/services#tally">Tally Software</Link></li>
              <li><Link href="/services#backup">Synology Backup</Link></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Reach us</h4>
            <ul>
              <li><a href={`tel:${phone.primary.e164}`}>{phone.primary.display}</a></li>
              <li><a href={`tel:${phone.secondary.e164}`}>{phone.secondary.display}</a></li>
              {/*
                Marked up as a real postal address. The old build had this as a
                plain <a> to the contact page, which told crawlers nothing.
              */}
              <li>
                <address style={{ fontStyle: "normal" }}>{formattedAddress}</address>
              </li>
              <li>Mon&ndash;Sat · {hours.opens}&ndash;{hours.closes}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {siteConfig.foundingYear}&ndash;{new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </span>
          <div className="tri">
            <i style={{ background: "#FF9933" }} />
            <i style={{ background: "#fff" }} />
            <i style={{ background: "#138808" }} />
            <span style={{ marginLeft: 8 }}>Proudly serving Mumbai &amp; Thane</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
