"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import PhoneIcon from "./PhoneIcon";
import { siteConfig, telHref } from "@/lib/siteConfig";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

/** The Services menu: every service one click from any page. */
const SERVICE_LINKS = [
  { href: "/services#laptop", label: "Laptop & Desktop Repair", note: "Chip-level repair, most jobs same day" },
  { href: "/services#cctv", label: "CCTV Installation", note: "CP Plus & Hikvision distributor" },
  { href: "/services#tally", label: "Tally Software", note: "Licensing, GST setup, support" },
  { href: "/services#backup", label: "Synology Backup", note: "NAS, RAID and recovery" },
  { href: "/services#ups", label: "UPS & Power Backup", note: "600 VA to 20 kVA, in stock" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation, otherwise they stay open over the new page.
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Escape closes whichever menu is open.
  useEffect(() => {
    if (!menuOpen && !servicesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen, servicesOpen]);

  // A click anywhere outside the Services menu closes it.
  useEffect(() => {
    if (!servicesOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [servicesOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`} aria-label="Main">
        <div className="wrap nav-inner">
          {/* priority: the logo is above the fold on every page. */}
          <Logo priority />
          <div className="nav-links">
            {LINKS.map((l) =>
              l.href === "/services" ? (
                <div key={l.href} className={`nav-dd${servicesOpen ? " open" : ""}`} ref={servicesRef}>
                  <button
                    type="button"
                    className={`nav-dd-btn${isActive(l.href) ? " active" : ""}`}
                    aria-expanded={servicesOpen}
                    aria-controls="servicesMenu"
                    onClick={() => setServicesOpen((v) => !v)}
                  >
                    {l.label}
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
                  </button>
                  <div id="servicesMenu" className="nav-dd-panel">
                    <ul>
                      {SERVICE_LINKS.map((s) => (
                        <li key={s.href}>
                          <Link href={s.href} onClick={() => setServicesOpen(false)}>
                            <b>{s.label}</b>
                            <span>{s.note}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href="/services" className="nav-dd-all" onClick={() => setServicesOpen(false)}>
                      All services <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              ) : (
                <Link key={l.href} href={l.href} className={isActive(l.href) ? "active" : undefined} aria-current={isActive(l.href) ? "page" : undefined}>
                  {l.label}
                </Link>
              )
            )}
          </div>
          <div className="nav-cta">
            <a href={telHref} className="nav-phone">
              <PhoneIcon />
              {siteConfig.phone.primary.display}
            </a>
            <Link href="/contact#quote" className="btn btn-primary">
              <span>Get Free Quote</span>
            </Link>
          </div>
          <a href={telHref} className="nav-call" aria-label={`Call ${siteConfig.phone.primary.display}`}>
            <PhoneIcon />
          </a>
          <button
            className={`burger${menuOpen ? " open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobileMenu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div id="mobileMenu" className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {LINKS.map((l) => (
          <div key={l.href}>
            <Link href={l.href} className={isActive(l.href) ? "active" : undefined}>{l.label}</Link>
            {l.href === "/services" && (
              <ul className="mm-sub">
                {SERVICE_LINKS.map((s) => (
                  <li key={s.href}><Link href={s.href}>{s.label}</Link></li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <Link href="/contact#quote" className="btn btn-primary">
          <span>Get Free Quote</span>
        </Link>
        <a href={telHref} className="btn btn-ghost on-light">
          <span>Call {siteConfig.phone.primary.display}</span>
        </a>
      </div>
    </>
  );
}
