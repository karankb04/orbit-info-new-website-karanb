/**
 * JSON-LD generators. All structured data for the site originates here.
 *
 * Two rules govern this file:
 *
 * 1. NEVER emit a property we cannot substantiate.
 *    Overstated markup is the fastest way to lose rich results entirely, and
 *    risks a manual action. In practice that means: no `geo` until the real
 *    coordinates are confirmed, no `priceRange` we haven't published, and
 *    absolutely no `aggregateRating` (see the note on reviews below).
 *
 * 2. ONE entity, linked by @id.
 *    The business is emitted exactly once, as a LocalBusiness at
 *    `{url}/#organization`. Every other node — WebSite, Service, breadcrumbs —
 *    REFERENCES that @id rather than restating the name and address. This is
 *    what lets a search engine resolve one coherent entity graph instead of
 *    several disconnected businesses that happen to share a phone number.
 */

import { siteConfig, absoluteUrl, formattedAddress } from "./siteConfig";

/** Stable @id anchors. Referenced across nodes — never inline these strings. */
export const ORG_ID = `${siteConfig.url}/#organization`;
export const WEBSITE_ID = `${siteConfig.url}/#website`;

type Json = Record<string, unknown>;

/**
 * The business itself. Emitted once, in the root layout, on every page.
 *
 * Type choice: plain `LocalBusiness`. schema.org has no `ComputerRepairService`,
 * and `ComputerStore` would misrepresent a business that is primarily a service
 * provider (repair, installation, AMC) rather than a retailer. `LocalBusiness`
 * is also the type Google supports most reliably for local rich results.
 */
export function getLocalBusinessSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": ORG_ID,
    name: siteConfig.name,

    // Lets Google reconcile the legacy directory listings (IndiaMART, TradeIndia,
    // JustDial) that still carry the previous trading name, instead of treating
    // them as citations for an unrelated business.
    alternateName: siteConfig.alternateName,

    description: siteConfig.description,
    url: siteConfig.url,
    logo: absoluteUrl("/logo-icon.png"),
    image: absoluteUrl("/logo-icon.png"),
    foundingDate: String(siteConfig.foundingYear),
    founder: { "@type": "Person", name: siteConfig.founder },

    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },

    telephone: siteConfig.phone.primary.e164,
    email: siteConfig.email,

    /**
     * GST registration. A verifiable government identifier is a genuine
     * legitimacy signal — and unlike a rating, it is something we can actually
     * substantiate, so it belongs here.
     */
    taxID: siteConfig.gstin,

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: siteConfig.hours.days,
        opens: siteConfig.hours.opens,
        closes: siteConfig.hours.closes,
      },
    ],

    areaServed: siteConfig.areaServed.map((name) => ({ "@type": "City", name })),
    sameAs: siteConfig.sameAs,

    /**
     * `geo` is included ONLY when real coordinates exist. While siteConfig.geo
     * is null we omit the block rather than approximate from the Plus Code —
     * wrong coordinates would place the business at the wrong point on a map,
     * which is worse than no coordinates at all.
     */
    ...(siteConfig.geo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
    }),

    /**
     * DELIBERATELY ABSENT: `aggregateRating` and `review`.
     *
     * Google prohibits self-serving review markup on LocalBusiness, and reviews
     * collected on Google (i.e. the GBP reviews we plan to display) may not be
     * re-marked as our own structured data. Displaying testimonials on the page
     * is fine and encouraged — marking them up is a manual-action risk for zero
     * gain, because the stars will not render either way.
     *
     * Do not add these, even if a plugin or audit tool suggests it.
     */
  };
}

/**
 * The website as an entity, linked to its publisher.
 *
 * No `SearchAction`: the site has no working search endpoint. Declaring a
 * sitelinks searchbox that resolves to nothing is a common silent error.
 * Add it here only once a real /search route exists.
 */
export function getWebsiteSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}

/**
 * Breadcrumbs. Pass the trail WITHOUT the home crumb — it is prepended here so
 * every page agrees on position 1.
 *
 * Note: the visible breadcrumb markup must mirror this. JSON-LD breadcrumbs on
 * top of a non-semantic `<div> / <div>` trail is a gap flagged in the reference
 * audit; the Breadcrumbs component renders a real <nav><ol> to match.
 */
export function getBreadcrumbSchema(trail: { name: string; path: string }[]): Json {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/**
 * A single service offering, linked back to the business as provider.
 *
 * `offers` is omitted entirely unless a real published price exists — a
 * `price: 0` reads to Google as a free service and is treated as deceptive.
 */
export function getServiceSchema(service: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: absoluteUrl(service.path),
    provider: { "@id": ORG_ID },
    areaServed: siteConfig.areaServed.map((name) => ({ "@type": "City", name })),
    ...(service.serviceType && { serviceType: service.serviceType }),
  };
}

/**
 * FAQ markup. Only for questions genuinely answered in the visible page copy —
 * Google requires the answer text to appear on the page, and hidden-only FAQ
 * markup is a guidelines violation.
 *
 * This is also the highest-leverage schema for AI answer engines: a clean
 * question/answer pair is directly extractable as a citation.
 */
export function getFaqSchema(faqs: { question: string; answer: string }[]): Json | null {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** Blog post markup, attributed to the business. */
export function getBlogPostingSchema(post: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: absoluteUrl(`/blog/${post.slug}`),
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(`/blog/${post.slug}`) },
    datePublished: post.datePublished,
    dateModified: post.dateModified ?? post.datePublished,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    ...(post.image && { image: absoluteUrl(post.image) }),
  };
}

/** Plain-text address helper, re-exported so schema consumers need one import. */
export { formattedAddress };
