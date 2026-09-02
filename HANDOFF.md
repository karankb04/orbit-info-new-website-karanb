# Orbit IT Solutions — Session Handoff

**Written**: 2026-08-30 · **Updated**: 2026-09-02 · **Repo**: `D:/Github_apps/claude/orbit-site` · **Branch**: `main`

## ⚠️ Read this first

**This file is a deep-dive snapshot, not the ongoing source of truth.** A
proper tracking system now lives in `docs/` — **read `docs/CONTEXT.md` first**
(under 50 lines, always current); it points to `docs/IMPLEMENTATION.md` (task
list) and `docs/DECISIONS.md` (why things are the way they are) as needed.
This file stays useful for the full bug-by-bug narrative of how this session's
rebuild happened, but don't treat it as current-state truth once `docs/`
diverges from it.

**Update, 2026-09-02**: the rebuild described below is now committed locally
as `7099037` ("Rebuild site on Next.js 16 with SEO foundation" — 61 files,
~5,950 lines). It is **not pushed** — the live site is still the old static
build, and nothing goes to GitHub/Vercel without the user explicitly saying so,
every time, no standing exceptions.

## What this project is

Rebuilding `orbititsolutions.in` (Mumbai IT/CCTV/Tally/backup company, est. 1998)
from 5 static HTML files into Next.js 16, with SEO/GEO/AEO as the actual goal —
not just a redesign. Old domain `orbitinfosystems.com` (DR 0, zero ranking
keywords) is being retired in favor of the new one.

## Standing rules (from the user's global CLAUDE.md — do not forget these)

- **Never commit or push without being told, every single time** — no standing exceptions.
- Never touch `main` directly without saying so — this session did, with permission ("directly touch the main its fine"), but that permission does **not** carry to a new session.
- Show diffs before committing; don't just say "done."
- Actually test in the browser before claiming something works.

## Canonical facts (single source of truth: `lib/siteConfig.ts`)

| Field | Value |
|---|---|
| Name | Orbit IT Solutions (`alternateName`: Orbit Info Systems) |
| Address | B-148, Shanti Industrial Estate, Sarojini Naidu Road, Tambe Nagar, Mulund West, Mumbai, Maharashtra 400080 |
| Phone (primary) | +91 93240 32476 |
| Phone (secondary) | +91 22 3570 1477 |
| Email | satish@orbititsolutions.in |
| Hours | Mon–Sat 10:30–20:00 |
| GSTIN | 27AFCPB5929E1ZQ |
| Geo | 19.1778016, 72.9559068 (from verified GBP Maps CID) |
| Est. | 1998 · Mayur R. Bhanushali |

Never hardcode any of this elsewhere — everything (schema, footer, nav, meta
tags) reads from `siteConfig`.

## Status by area

**Architecture** — Next.js 16.3.3, App Router, TypeScript. 5 pages ported +
`/blog` (markdown-driven, empty for now). Old duplicated CSS (1143 lines × 5
files) consolidated into one `app/globals.css` (641 lines).

**SEO foundation** — done: JSON-LD (`LocalBusiness`, `WebSite`, `BreadcrumbList`,
per-service `Service` nodes), canonical/OG/Twitter via one `buildMetadata()`
resolver, `sitemap.ts`/`robots.ts`. Deliberately omitted: `aggregateRating`
(Google prohibits self-serving review markup), `geo` was omitted until verified
(now filled in).

**Images** — all Unsplash hotlinks removed (0 remaining). Real user-supplied
photos in `public/images/`, cataloged with real alt text in `lib/images.ts`.
Portfolio: all 12 original real case studies restored (5 have matching photos,
7 illustrated — no photo is paired with a job it doesn't depict).

**Brand marquee** (`components/BrandMarquee.tsx`) — just finished. Real logos
for CP Plus/Hikvision/Panasonic/Synology/Tally/HP/Dell/Lenovo, sourced from each
brand's own Wikipedia infobox or (CP Plus) their own site — not clip-art
aggregators. Stored in `public/brands/`.

**Known not done**:
- Story/hero `<img>` tags from the original port still bypass `next/image` (~900KB/page unoptimized) — services/about pages, not portfolio (already converted).
- No `<main>`-level a11y audit beyond what shipped.
- No redirects/noindex set up on the old domain yet (site isn't deployed).
- LinkedIn `sameAs` entry still missing — the URL supplied earlier was a private `/admin/dashboard/` link, need the public company page.
- Directory renames (JustDial/IndiaMART/TradeIndia → "Orbit IT Solutions") — user said not a priority, doesn't block anything.

## Bugs fixed this session (for context — don't re-investigate these)

1. Contact page: invisible white-on-white text — `.val` class meant a card on About and a text value on Contact; collided after merging 5 stylesheets into one. Scoped to `.val-grid .val`.
2. Contact page: huge blank gap — `.lead` meant a full section on Home, a paragraph on Contact. Scoped to `section.lead`.
3. **The big one**: clicking any nav link left the destination page permanently blank. `Reveal.tsx` (scroll-animation) lives in the root layout, which does *not* remount on client-side navigation in the App Router — its effect had `[]` deps, so it only ever ran once. Fixed with `usePathname()` as a dependency.
4. Hydration mismatch from a script mutating `<html>` pre-hydration — replaced with a `<noscript>` fallback.
5. 115 lines of home-page inline JS (hero canvas, intro stagger, card reveal, counters, tab switcher) were never ported when the site was converted from static HTML — ported to `HomeEffects.tsx` + `Counters.tsx`.
6. Google Maps iframe used an address text-search (could drop the pin on the wrong building) — now uses verified geo coordinates.
7. Hours inconsistency (19:00 vs 20:00 in different places) — standardized to 20:00 per GBP.
8. Logo served at 1920px for an ~81px slot — added `sizes`, now 256px.
9. Portfolio: a desktop-tower photo was misattributed to a laptop hinge/screen repair job — removed rather than left mismatched.

**Testing gotcha**: earlier in the session, the Browser pane tab was
backgrounded (`document.hidden = true`), so `requestAnimationFrame` and
`IntersectionObserver` never fired — every "it works" check during that period
was silently meaningless. Playwright (real browser) is what actually caught bug
#3. If Playwright disconnects in the new session, re-verify with it before
trusting the Claude_Browser pane for anything animation/observer-dependent.

## User-side actions (I can't do these — status as last reported)

- [ ] Verify phone on GBP — user said "request sent," not confirmed done
- [x] Fix GBP pincode 400604 → 400080 — user confirmed done
- [x] Register orbititsolutions.in in GSC — done; Bing still pending
- [ ] Rename business on JustDial/IndiaMART/TradeIndia — deferred, not priority
- [ ] Get public LinkedIn company page URL for `sameAs`
- [ ] Point GBP website field at orbititsolutions.in once the new site is live

## Immediate next steps, in order

1. ~~Commit this work locally~~ — done, `7099037`.
2. Convert remaining story/hero `<img>` tags to `next/image` (services/about pages).
3. User review + explicit go-ahead before any push/deploy.
4. Decide old-domain handling (canonical + noindex recommended, not yet implemented — no live site to redirect from yet).
5. Content/keyword strategy phase — not started at all.
6. GEO/AEO phase (`llms.txt`, extractable FAQ blocks) — not started.
7. Housekeeping: confirm whether the old static `.html` files + duplicate `logo.png`/`logo-icon.png` at repo root can be deleted now that Next.js supersedes them (don't delete without asking — surface it first). Also flag the stray sibling folder `orbit-info-new-website-karanb-copy` next to this repo — never confirmed as safe to remove.

## How to run it

Dev server: `.claude/launch.json` config `orbit-dev` lives at the **workspace
root** (`D:/Github_apps/claude/.claude/launch.json`), not inside this repo —
points `npm --prefix ./orbit-site run dev` at port 3000 (autoPort fallback if
taken). It does not survive a session/browser reset — restart it and verify
with `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/` before
trusting any tool-reported "server started" message; that message has been
wrong before in this session.

## Docs NOT to bring into a new session as project context

`LEARNINGS.md`, `SEO-LEARNINGS.md`, `Translation-audit.md` at the repo root are
reference material from an unrelated client project (Shanti Travel), kept
locally for pattern-borrowing only. They're git-ignored on purpose — never
commit them, and don't paste them in as if they describe *this* project.
