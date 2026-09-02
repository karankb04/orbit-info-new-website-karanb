/**
 * SINGLE SOURCE OF TRUTH for everything that must match across surfaces:
 * the website, the Google Business Profile, JSON-LD schema, and every
 * external citation (JustDial, IndiaMART, TradeIndia, Facebook, LinkedIn).
 *
 * Why this file exists
 * -------------------
 * Local search resolves a business as one *entity*, matched across sources by
 * near-exact NAP (Name / Address / Phone) strings. An audit on 2026-08-13 found
 * this business listed under THREE different names in the wild:
 *
 *   "Orbit Info Systems"  — IndiaMART, TradeIndia, JustDial, old website
 *   "Orbit Infosystems"   — old website <title>
 *   "Orbit IT Solutions"  — GBP, Facebook, this website
 *
 * ...plus two different pincodes (400080 vs 400604) and three spellings of the
 * street. That split is the single biggest drag on map-pack ranking, and it is
 * far more damaging than any missing schema.
 *
 * The decision (2026-08-13): "Orbit IT Solutions" is canonical everywhere.
 * Nothing in this codebase may hardcode a name, address or phone number.
 * Import from here instead, so there is exactly one place to change.
 */

export const siteConfig = {
  /** Canonical legal/display name. Must match the GBP listing character-for-character. */
  name: "Orbit IT Solutions",

  /**
   * Former trading name, still live on IndiaMART / TradeIndia / JustDial and the
   * old domain. Emitted as schema.org `alternateName` so Google can reconcile the
   * legacy citations with the current entity instead of treating them as a
   * separate business. Remove this only once every directory has been updated.
   */
  alternateName: "Orbit Info Systems",

  legalName: "Orbit IT Solutions",
  foundingYear: 1998,
  founder: "Mayur R. Bhanushali",

  tagline: "around you...",
  description:
    "Mumbai's IT and electronic security partner since 1998 — laptop and desktop repair, CCTV installation, Tally software and Synology backup for businesses across Mumbai and Thane.",

  /**
   * Canonical origin. No trailing slash — every URL helper appends its own,
   * so a trailing slash here would produce "//" in sitemap and canonical tags.
   */
  url: "https://orbititsolutions.in",

  /**
   * The previous domain. Stays live for email continuity and old business cards,
   * but serves rel=canonical -> this site plus noindex, so Google indexes exactly
   * one entity. See docs/seo-roadmap for the migration checklist.
   */
  legacyUrl: "https://www.orbitinfosystems.com",

  address: {
    /**
     * GBP renders this as "B-148"; TradeIndia has "Plot No.148". GBP wins —
     * it is the listing Google itself reads. Keep both halves in sync manually
     * with the GBP dashboard whenever either changes.
     */
    streetAddress: "B-148, Shanti Industrial Estate, Sarojini Naidu Road, Tambe Nagar",
    locality: "Mulund West",
    region: "Maharashtra",
    /**
     * 400080, NOT the 400604 currently shown on the GBP listing.
     * 400604 is a Thane pincode; Mulund West is 400080, which is what the old
     * website and TradeIndia both carry. The GBP address needs correcting —
     * tracked as an open action in the roadmap.
     */
    postalCode: "400080",
    country: "IN",
  },

  phone: {
    /**
     * Primary, and the number used for the main call-to-action and WhatsApp.
     * E.164 for `tel:` links and schema; `display` for human-readable text.
     */
    primary: { e164: "+919324032476", display: "93240 32476" },
    secondary: { e164: "+912235701477", display: "022-3570 1477" },
    whatsapp: "919324032476",
    /** Second mobile advertised on print material; listed for completeness. */
    tertiary: { e164: "+919322432475", display: "93224 32475" },
  },

  /**
   * On the new domain, matching the address advertised on the company's own
   * print material. The previous info@orbitinfosystems.com sat on the domain
   * being retired, so publishing it would have kept pointing customers there.
   */
  email: "satish@orbititsolutions.in",

  /**
   * Opening hours in schema.org OpeningHoursSpecification order.
   * GBP shows "Closes 8 pm"; the legacy site said 19:00. 20:00 follows GBP,
   * since that is the listing customers actually see. Verify against GBP
   * before changing — the two must agree.
   */
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:30",
    closes: "20:00",
  },

  /**
   * Verified from the Google Business Profile Maps URL, taken from the !3d/!4d
   * place-pin pair rather than the '@lat,lng' camera position (which sits about
   * 500m away and would drop the pin in the wrong place).
   */
  geo: { latitude: 19.1778016, longitude: 72.9559068 } as { latitude: number; longitude: number } | null,

  /**
   * GST registration number, from the company's own brand poster. Emitted as
   * schema.org taxID: a verifiable government registration is a strong
   * legitimacy signal for a local business, and India-specific directories and
   * AI answers both surface it.
   */
  gstin: "27AFCPB5929E1ZQ",

  /**
   * Public profile URLs, emitted as schema.org `sameAs` so search engines can
   * stitch the entity graph together across the web.
   *
   * NOTE: these still carry the OLD "Orbit Info Systems" name. Each needs
   * renaming to "Orbit IT Solutions" — until then they actively work against
   * NAP consistency. Listed here so the cleanup list stays visible in code.
   */
  sameAs: [
    // Canonical Google Business Profile link, built from the listing's CID.
    "https://maps.google.com/?cid=4626141864255586721",
    "https://www.facebook.com/orbitinfosystem/",
    "https://www.justdial.com/Mumbai/Orbit-Info-Systems-Tambe-Nagar-Mulund-West/022P1100215_BZDET",
    "https://www.indiamart.com/orbitinfo-systems/aboutus.html",
    "https://www.tradeindia.com/orbit-info-systems-3108410/",
    // LinkedIn omitted: the URL supplied was an /admin/dashboard/ link, which is
    // private. Add the PUBLIC company page URL here once available.
  ],

  /**
   * Areas we actually serve, used for schema `areaServed` and to drive the
   * location landing pages. Ordered by proximity to the Mulund West premises.
   */
  areaServed: [
    "Mulund",
    "Bhandup",
    "Thane",
    "Powai",
    "Vikhroli",
    "Ghatkopar",
    "Navi Mumbai",
    "Mumbai",
  ],
} as const;

/** Full postal address as one line, for footers and plain-text contexts. */
export const formattedAddress = [
  siteConfig.address.streetAddress,
  siteConfig.address.locality,
  `${siteConfig.address.region} ${siteConfig.address.postalCode}`,
].join(", ");

/**
 * Builds an absolute URL from a site-relative path.
 * Tolerates a leading slash or not, so callers never produce "//" or a
 * missing separator — the classic source of canonical/sitemap disagreement.
 */
export const absoluteUrl = (path = "/"): string =>
  `${siteConfig.url}/${path.replace(/^\//, "")}`.replace(/\/$/, "") || siteConfig.url;
