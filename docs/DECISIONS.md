# Decisions

Architectural decisions for this project. Search with `grep -i "keyword" docs/DECISIONS.md`.

## Active Decisions

### DEC-001: Migrate the static HTML site to Next.js 16 (2026-08-26)

**Status**: Active

**Context**: The user wants to run SEO/GEO/AEO on this site, including a
regularly-updated blog. Five hand-written HTML files can't support that —
publishing a post means hand-editing HTML, and the 123 lines of CSS
duplicated across all five files already caused two shipped bugs (a logo fix
needed five separate edits; an image-visibility bug shipped in two places).

**Decision**: Rebuild on Next.js 16 (App Router, TypeScript), with markdown-driven
blog posts (`lib/posts.ts`) and one shared `app/globals.css`.

**Alternatives considered**:
- Stay static, edit HTML directly per post — doesn't scale, user explicitly ruled this out
- Static site + a headless CMS — extra dependency/cost the user didn't want
- Keep static, generate posts via a script — still doesn't solve the CSS duplication problem

**Consequences**: Real build step and dependency tree now exist (previously zero
tooling). Gains: one metadata resolver, one schema layer, structurally
impossible for canonical/sitemap/OG to disagree with each other.

---

### DEC-002: `lib/siteConfig.ts` is the single source of truth for NAP (2026-08-26)

**Status**: Active

**Context**: An SEO audit found the business name split three ways
("Orbit IT Solutions" on GBP/Facebook/new site vs "Orbit Info Systems" on
JustDial/IndiaMART/TradeIndia/old site), plus a pincode conflict (GBP said
400604, everywhere else said 400080) and inconsistent hours. For local SEO,
NAP (name/address/phone) consistency is a core ranking factor — Google
resolves a business as one entity by matching NAP across sources.

**Decision**: One typed config object holds name, `alternateName`, address,
phone (primary/secondary/tertiary/WhatsApp), email, hours, geo, GSTIN, and
`sameAs` profile links. Every schema generator, the footer, and the contact
page read from it — nothing hardcodes these values elsewhere.

**Alternatives considered**: Hardcode NAP per-component (what the static site
did) — rejected, it's exactly what caused the inconsistency in the first place.

**Consequences**: Fixing any NAP fact is now a one-line change that propagates
everywhere. `geo` and other unverified fields are typed as nullable and
omitted from schema output until confirmed, rather than guessed.

---

### DEC-003: Never emit `aggregateRating` or `review` schema (2026-08-26)

**Status**: Active

**Context**: The user wants to display GBP reviews on the site. Google
explicitly prohibits self-serving review markup on `LocalBusiness`, and
reviews sourced from Google cannot be re-marked as the business's own
structured data — doing so risks a manual action and gains nothing (the
stars won't render either way).

**Decision**: `lib/schemas.ts` never outputs `aggregateRating` or `review`.
Reviews may be displayed on the page as plain content, just never marked up
as schema. This is documented in-code as a rule, not a per-page judgement call.

**Alternatives considered**: Mark up reviews anyway for the rich-result
snippet — rejected as a guidelines violation with real penalty risk.

**Consequences**: No star rating in search results from this markup. Any
future page that wants review schema must justify why it's substantiated,
against this explicit rule.

---

### DEC-004: Drop GSAP; use native Web Animations API + IntersectionObserver (2026-08-26)

**Status**: Active

**Context**: The static site loaded GSAP + ScrollTrigger from a CDN (~70KB,
two blocking requests) purely to fade elements in on scroll and animate a
hero canvas. That's native-API territory.

**Decision**: `components/Reveal.tsx`, `components/HomeEffects.tsx`, and
`components/Counters.tsx` reimplement the same effects with
`IntersectionObserver`, `element.animate()`, and `requestAnimationFrame` —
zero third-party script.

**Alternatives considered**: Keep GSAP for its easing/timeline ergonomics —
rejected, the effects are simple enough that the native APIs cover them, and
removing two blocking third-party requests helps LCP.

**Consequences**: Every one of these components needed an explicit safety-net
timeout (see chronicle Entry 1) because hand-rolled observer code has more
edge cases than a mature library — e.g. `fill:"forwards"` animations
outranking inline-style overrides, React StrictMode double-invoking effects
and stacking two animations on one element.

---

### DEC-005: Canonical business name is "Orbit IT Solutions" (2026-08-26)

**Status**: Active

**Context**: Three names in the wild for the same business (see DEC-002).
User confirmed GBP itself says "Orbit IT Solutions."

**Decision**: "Orbit IT Solutions" is canonical everywhere going forward.
"Orbit Info Systems" is kept as `alternateName` in schema (not deleted) so
Google can reconcile the legacy citations with the current entity instead of
reading them as an unrelated business.

**Alternatives considered**: Revert to "Orbit Info Systems" (majority of
existing citations) — rejected, abandons the GBP/new-site branding already
in place and the domain name itself.

**Consequences**: JustDial/IndiaMART/TradeIndia listings still say "Orbit
Info Systems" and haven't been updated (tracked as an open item, not
blocking). `alternateName` is the bridge until they are.

---

### DEC-006: A portfolio photo may only accompany a project it genuinely depicts (2026-08-30)

**Status**: Active

**Context**: While restoring the 12 original portfolio case studies, a
desktop-tower photo was initially attached to a "Hinge & screen fix" entry —
a laptop repair job the photo doesn't show.

**Decision**: Every photo-to-project pairing in `app/portfolio/page.tsx` must
depict that specific job. Projects without a matching real photo keep the
original illustrated SVG treatment rather than borrowing an unrelated photo.

**Alternatives considered**: Pair whatever photo is thematically close enough
— rejected as a fabricated case study, which is both a trust risk for a
business that sells on honesty and the kind of unverifiable claim AI answer
engines increasingly discount.

**Consequences**: Only 5 of 12 portfolio tiles currently carry a real photo.
Adding more requires the user to supply a photo of that specific job, not just
any similar-looking work.

---

### DEC-007: Brand logos sourced only from official channels, used unaltered (2026-08-30)

**Status**: Active

**Context**: User asked for real brand logos (CP Plus, Hikvision, Panasonic,
Synology, Tally, HP, Dell, Lenovo) in the "trusted brands" marquee, replacing
plain text chips. Web search surfaced multiple third-party clip-art
aggregators (pngtree, seeklogo, etc.) with unclear provenance and often
altered/outdated marks.

**Decision**: Every logo file was pulled from the brand's own official
source — six from that company's Wikipedia infobox image (itself sourced from
Wikimedia Commons / the company), CP Plus from its own site header. None from
third-party logo-dump sites. Logos are displayed unaltered — no recoloring,
cropping, or distortion — sized only via CSS `object-fit: contain`.

**Alternatives considered**: Pull from the first clip-art result — rejected,
provenance and current-accuracy are both unverifiable there, and using an
altered mark is more likely to violate a brand's usage guidelines than using
the official one unaltered.

**Consequences**: This is nominative use (identifying which brands Orbit
installs/services), not an endorsement claim. `components/BrandMarquee.tsx`
documents the sourcing rule in-code for future additions.

---

## Superseded/Deprecated

*(none yet)*
