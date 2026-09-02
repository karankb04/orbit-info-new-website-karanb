# Phase 3: Next.js rebuild & SEO foundation

## Entry 1: SEO audit, entity resolution, Next.js scaffold (2026-08-26)

**What**: Ran a full SEO/GEO/AEO audit on the existing static site, resolved a
three-way business-name conflict, and scaffolded the Next.js 16 rebuild with
its core SEO architecture.

**Why**: The user's actual goal was never the redesign — it was ranking. The
audit found zero JSON-LD, zero canonical/OG tags, no sitemap/robots, and (more
seriously) the business listed under three different names across GBP, the
old domain, and directories, which actively hurts local search matching.

**How**:
- Audited old domain (DR 0, zero ranking keywords — safe to fully retire),
  compared GBP vs directory listings, found the pincode conflict (400604 vs
  400080) and resolved it to 400080
- User confirmed canonical name "Orbit IT Solutions"; pulled real GBP geo
  coordinates from the Maps CID (not the `@lat,lng` camera position, which is
  the wrong value — a common mistake)
- Scaffolded Next.js 16.3.3 App Router project; upgraded off 15.1.6 after
  finding it carried a known CVE
- Built `lib/siteConfig.ts`, `lib/schemas.ts`, `lib/metadata.ts` — see
  DEC-001, DEC-002, DEC-003

**Decisions**: DEC-001, DEC-002, DEC-003

**Files**: `lib/siteConfig.ts`, `lib/schemas.ts`, `lib/metadata.ts`, `app/sitemap.ts`, `app/robots.ts`

---

## Entry 2: Full page port, then finding it was badly broken (2026-08-26 to 2026-08-30)

**What**: Ported all 5 pages to Next.js, mechanically converting the original
HTML to JSX and consolidating 5 separate stylesheets into one. Initial
self-testing falsely reported success; the user then found the pages were
still broken and asked for a real, extensive audit instead of one-bug-at-a-time
reports.

**Why**: A mechanical HTML→JSX conversion carries real risk — comments can get
mangled, and merging isolated per-page stylesheets into one removes the
isolation that let two pages safely reuse the same class name for different
things.

**How**:
- Root cause of the worst bug: `components/Reveal.tsx` (scroll-reveal) lives
  in the root layout, which does **not** remount on client-side navigation in
  the App Router — its effect had `[]` deps, so `.reveal` elements were only
  ever observed on the very first page load. Every page reached by clicking a
  nav link stayed at `opacity:0` forever. Fixed with a `usePathname()`
  dependency.
- Found the CSS-merge collision pattern: `.val` meant a white card on About
  and white text on Contact; `.lead` meant a full section on Home and a
  paragraph on Contact — bare class names that were safe while isolated per
  page, unsafe once merged. Both scoped to their containing selector to fix.
  Worth re-checking for this pattern if more per-page styles get merged later.
- Discovered mid-session that all "it works" verification up to that point
  was worthless: the Browser-pane tab was backgrounded (`document.hidden ===
  true`), so `requestAnimationFrame` and `IntersectionObserver` never fired —
  every check silently passed on a page that was never actually rendering.
  Playwright (a real, foregrounded browser) is what actually caught the
  nav-click bug.
- Also fixed: a hydration mismatch (a script mutating `<html>` before React
  hydrated — replaced with `<noscript>`), 115 lines of home-page inline JS
  dropped during conversion (hero canvas, intro stagger, counters, tab
  switcher — restored in `HomeEffects.tsx`/`Counters.tsx`, see DEC-004), the
  Google Maps embed using an address text-search instead of verified
  coordinates, an hours inconsistency (19:00 vs 20:00), and a logo served at
  1920px for an ~80px slot.

**Decisions**: DEC-004

**Files**: `components/Reveal.tsx`, `components/HomeEffects.tsx`, `components/Counters.tsx`, `app/globals.css`, `app/layout.tsx`

---

## Entry 3: Portfolio restoration, brand logos, commit (2026-08-30 to 2026-09-02)

**What**: Restored all 12 original portfolio case studies (an earlier pass had
replaced them with only 9, rewritten to match available photos), replaced the
text-only brand marquee with real logos, and committed the entire rebuild
locally for the first time.

**Why**: The user confirmed the original 12 case studies were real and wanted
them back, plus real logos instead of text chips for the "trusted brands"
section.

**How**:
- Restored all 12 projects verbatim; only paired a real photo with a project
  where the photo genuinely depicts that job (5 of 12) — caught and reverted
  one mismatch (a desktop-tower photo on a laptop hinge/screen job) — see
  DEC-006
- Sourced 8 brand logos (CP Plus, Hikvision, Panasonic, Synology, Tally, HP,
  Dell, Lenovo) from each brand's own official channel — Wikipedia infobox
  images or the brand's own site — rejecting third-party clip-art
  aggregators that turned up in search, per DEC-007
- Built `components/BrandMarquee.tsx`, stored logos in `public/brands/`
- Verified everything via Playwright in a real (foregrounded) browser:
  full nav click-through, zero broken images, zero console errors
- Committed the full rebuild: 61 files, ~5,950 lines, commit `7099037` —
  nothing pushed
- Wrote `docs/` tracking system (this file included) and `HANDOFF.md` for
  session transfer

**Decisions**: DEC-006, DEC-007

**Files**: `app/portfolio/page.tsx`, `components/BrandMarquee.tsx`, `public/brands/`, commit `7099037`
