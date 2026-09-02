import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { getLocalBusinessSchema, getWebsiteSchema } from "@/lib/schemas";
import { siteConfig } from "@/lib/siteConfig";

/**
 * Root metadata. Individual pages override title/description/canonical via
 * their own `buildMetadata()` call; anything not overridden falls through here.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Mumbai's IT & Security Partner Since 1998`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#060F24",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        {/*
          No-JS fail-safe.
          Animated elements start at opacity 0 and are revealed by script. If
          scripts never run, this <noscript> block shows them instead of leaving
          a blank page.

          It must be <noscript> rather than a script that stamps a class on
          <html>: mutating the <html> element before React hydrates changes an
          attribute the server already rendered, which produces a hydration
          mismatch — and when hydration fails, the client components that drive
          these very animations never mount, blanking the page completely.
        */}
        <noscript>
          <style>{`.reveal,.hero-badge,.hero-sub,.hero-cta,.hero-meta,.hero h1 .word,.svc-card{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {/*
          The business entity and the website, emitted once site-wide and linked
          by @id. Every other schema on the site references these rather than
          restating the name and address, so there is one entity graph, not many.
        */}
        <JsonLd schema={getLocalBusinessSchema()} />
        <JsonLd schema={getWebsiteSchema()} />
      </head>
      <body>
        {/* Skip link: keyboard users shouldn't have to tab the whole nav. */}
        <a href="#main" className="skip-link">Skip to main content</a>
        <Nav />
        {/*
          <main> was entirely absent from the old static build (25 <section>
          elements, zero <main>). It gives assistive tech and crawlers an
          unambiguous "this is the page content" boundary.
        */}
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Reveal />
      </body>
    </html>
  );
}
