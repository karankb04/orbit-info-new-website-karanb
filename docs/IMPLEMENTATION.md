# Implementation

Orbit IT Solutions — Mumbai IT/CCTV/Tally/backup company site, rebuilt with
SEO/GEO/AEO as the actual goal, not a redesign for its own sake.

## Phase Overview

| # | Name | Status | Commits |
|---|------|--------|---------|
| 0 | Foundation (static site + logo) | ✅ Complete | 5b9cb1b–e61e655 |
| 1 | Forms & UX polish | ✅ Complete | f4217f9–b0558c1 |
| 2 | Real photos & static-site fixes | ✅ Complete | 6ed20f3–47c917b |
| 3 | Next.js rebuild & SEO foundation | 🔵 Current | 7099037–HEAD |

## Current Phase: Next.js rebuild & SEO foundation

**Goal**: Migrate the 5-page static HTML site to Next.js 16, with a proper SEO
architecture underneath — not just a framework swap. Driven by an SEO/GEO/AEO
audit that found: zero JSON-LD, zero canonical/OG tags, no sitemap/robots, and
a business entity split three ways (name mismatch across GBP/old
site/directories, which actively hurts local search ranking).

### Done

- [x] Resolved canonical NAP (name/address/phone) into `lib/siteConfig.ts` — every schema, footer, and meta tag reads from it, so it can't drift
- [x] JSON-LD: `LocalBusiness`, `WebSite`, `BreadcrumbList`, per-service `Service` nodes (`lib/schemas.ts`)
- [x] One `buildMetadata()` resolver drives canonical + OG + Twitter together (`lib/metadata.ts`)
- [x] `sitemap.ts` / `robots.ts` (native Next.js route handlers)
- [x] Ported all 5 pages: home, services, about, portfolio (renamed from "gallery"), contact
- [x] Added `/blog` route, markdown-driven (`lib/posts.ts`), empty until first posts are written
- [x] Consolidated 1143 lines of duplicated per-page CSS (5 files) into one `app/globals.css` (641 lines)
- [x] Replaced all Unsplash hotlinks with real user-supplied photos (`public/images/`, cataloged in `lib/images.ts`)
- [x] Restored all 12 original portfolio case studies with honest captions — no photo paired with a job it doesn't depict (see DEC-006)
- [x] Real brand logos in the "trusted brands" marquee, replacing text-only chips — sourced from official channels only (see DEC-008)
- [x] Verified geo coordinates in schema (from GBP Maps CID, not the old address text-search)
- [x] GSTIN added to `LocalBusiness` schema
- [x] Fixed nav-click pages rendering permanently blank (root-layout `Reveal` effect not re-running on route change — see chronicle for the debugging story)
- [x] Fixed two CSS class collisions (`.val`, `.lead`) from merging five stylesheets into one
- [x] Ported 115 lines of home-page inline JS that were dropped during an earlier static-site edit (hero canvas, intro stagger, card reveal, counters, tab switcher) — without the GSAP dependency
- [x] Committed the full rebuild locally (`7099037`) — 61 files, ~5,950 lines

### Not done

- [ ] Story/hero `<img>` tags on services/about pages still bypass `next/image` (~900KB/page unoptimized) — portfolio images already converted, these weren't
- [ ] No redirects/noindex set up on the old domain (`orbitinfosystems.com`) yet — nothing to redirect *to* until this site is deployed
- [ ] LinkedIn `sameAs` entry missing — supplied URL was a private `/admin/dashboard/` link, need the public company page
- [ ] Directory renames (JustDial/IndiaMART/TradeIndia → "Orbit IT Solutions") — user said not a priority, doesn't block anything
- [ ] Push to GitHub / deploy to Vercel — nothing pushed yet, live site is still the old static build
- [ ] Delete superseded static `.html` files + duplicate logo files at repo root (not deleted, not yet confirmed safe to remove)
- [ ] Bing Webmaster Tools registration for the new domain (GSC done, Bing pending)

See `chronicles/phase-3-nextjs-seo-rebuild.md` for the detailed session narrative,
and `HANDOFF.md` at the repo root for the full bug-by-bug writeup.

## Completed Phases

### Phase 0: Foundation
- Initial static 5-page site (home, services, about, gallery, contact) uploaded
- Multiple logo iterations: fixed white background, removed baked-in wordmark text, cropped to icon-only + HTML wordmark
- Mobile nav sizing pass
See: `chronicles/phase-0-foundation.md`

### Phase 1: Forms & UX polish
- Wired contact/quote forms to a Google Apps Script Web App (free, no backend) writing to a Google Sheet
- Fixed 20-second form-submit delay (fire-and-forget fetch instead of awaiting the Apps Script cold start)
- Made email mandatory, phone optional and unvalidated
- Fixed homepage URL showing `/index.html` instead of `/`
- Anchored all "Get Free Quote" buttons to the contact form section
See: `chronicles/phase-1-forms-ux.md`

### Phase 2: Real photos & static-site fixes
- Added real-life photos (Unsplash CDN at the time) across all pages
- Fixed a z-index/opacity bug that made the added images invisible on services and gallery pages
See: `chronicles/phase-2-real-photos.md`

## Future Phases

### Phase 4: Content & keyword strategy (not started)
- Keyword research for local + service-intent queries (e.g. "laptop repair Mulund")
- First blog posts written and published via the new `/blog` markdown pipeline
- Location-intent pages for Mulund/Bhandup/Thane/Powai/Ghatkopar

### Phase 5: GEO/AEO (not started)
- `llms.txt`
- FAQ blocks written as extractable Q&A pairs
- Entity-clarity pass so AI answer engines can cite the business confidently

### Phase 6: Launch
- Push to GitHub, deploy to Vercel
- Point domain + GBP at the new site
- Canonical + noindex on the old domain
