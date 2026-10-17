# Code Cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the page files maintainable without changing a single rendered word, link or class.

**Architecture:** Repeated markup moves into small components fed by data arrays, the same pattern as `components/EquipmentGrid.tsx` + `lib/equipment.ts`. Contact details come only from `lib/siteConfig.ts` (DEC-002). A snapshot script captures the rendered HTML of every page before the work starts; each task must reproduce it exactly.

**Tech Stack:** Next.js 16 (App Router, server components), TypeScript, plain CSS in `app/globals.css`.

**Spec:** The user's request (2026-10-17): "Code cleanup with Superpowers… the site would look exactly the same, but every future change gets faster and less error-prone."

## Global Constraints

- Zero visual change: rendered HTML of `/`, `/services`, `/about`, `/portfolio`, `/contact`, `/blog` must match the baseline after normalisation (see Task 0).
- No new dependencies. No CSS changes unless a class becomes unused.
- `tel:` and `wa.me` URLs and the displayed phone number come from `siteConfig.phone` only.
- User's standing rule for this repo: commit to `main` and push without asking, after verification.

## Review Focus

1. A copy edit lost in extraction (e.g. a `&rsquo;` turned into `'`, or the "flip" layout lost on CCTV/Backup): caught by the HTML snapshot diff, which compares text and attributes.
2. The phone number rendered differently after moving to siteConfig (e.g. `+91 93240 32476` vs `93240 32476`): snapshot diff on contact and home.
3. `next/image` attributes (`sizes`, `priority`, `fill`) silently changed: snapshot keeps `<img>` `sizes`/`srcset`.
4. The schema JSON-LD on /services changing when the SERVICES array is touched: snapshot includes `<script type="application/ld+json">`.
5. Mobile layout regressions not visible in HTML: one phone-width screenshot pass at the end (Task 4).

---

### Task 0: Rendered-HTML snapshot harness

**Files:**
- Create: `scripts/snapshot-pages.mjs`

**Interfaces:**
- Produces: `node scripts/snapshot-pages.mjs <outDir>` writes `<outDir>/<page>.html` for the six pages, fetched from `http://localhost:3124` (a `next start` of the current build). Normalisation: drop `/_next/static/...` hashes, `<!-- -->` markers, the RSC payload `self.__next_f` scripts, and collapse whitespace between tags.

- [ ] **Step 1:** Build, `npx next start -p 3124`, run the script into `/tmp/snap-before`.
- [ ] **Step 2:** Run it again into `/tmp/snap-again` and `diff -r` the two. Expected: no output (the harness is deterministic).
- [ ] **Step 3:** Commit the script.

### Task 1: Contact details only from siteConfig

**Files:**
- Modify: `app/page.tsx`, `app/services/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx`, `app/portfolio/page.tsx`
- Modify: `lib/siteConfig.ts` (add helpers)

**Interfaces:**
- Produces: in `lib/siteConfig.ts`, `export const telHref = \`tel:${siteConfig.phone.primary.e164}\`` and `export const whatsappHref = \`https://wa.me/${siteConfig.phone.whatsapp}\``.

- [ ] **Step 1:** Replace every literal `tel:+919324032476`, `https://wa.me/919324032476` and visible `93240 32476` in the five pages with the helpers / `siteConfig.phone.primary.display`.
- [ ] **Step 2:** `grep -rn "919324032476\|93240 32476" app --include=*.tsx`. Expected: no matches.
- [ ] **Step 3:** Build, snapshot to `/tmp/snap-t1`, `diff -r /tmp/snap-before /tmp/snap-t1`. Expected: no output.
- [ ] **Step 4:** Commit.

### Task 2: Services page from data

**Files:**
- Create: `components/CheckIcon.tsx`, `components/ServiceSection.tsx`, `lib/services.tsx`
- Modify: `app/services/page.tsx`

**Interfaces:**
- Consumes: `telHref` (Task 1), `BRANDS`, `IMAGES`, `BrandRow`, `EquipmentGrid`.
- Produces:
  - `CheckIcon()`: the 24×24 tick SVG used by `.svc-list`.
  - `type ServiceDetail = { id: "laptop" | "cctv" | "tally" | "backup"; num: string; section: "light" | "white"; flip: boolean; tag: string; image: ImageKey; grad: string; art: ReactNode; heading: ReactNode; lead: ReactNode; bullets: string[]; after?: ReactNode }` and `SERVICE_DETAILS: ServiceDetail[]` in `lib/services.tsx`. `after` holds what follows the bullet list (brand rows, compact equipment cards, distributor block) verbatim.
  - `ServiceSection({ s }: { s: ServiceDetail })` renders the existing `<section className="svc-sec …">` skeleton including the ring SVG and the CTA row.
  - The JSON-LD `SERVICES` array also moves to `lib/services.tsx` unchanged.

- [ ] **Step 1:** Implement, keeping the UPS section, "Also handled" and band as they are (they don't share the skeleton).
- [ ] **Step 2:** `grep -c "M20 6L9 17l-5-5" app/services/page.tsx`. Expected: `0`.
- [ ] **Step 3:** Build, snapshot, diff against baseline. Expected: no output.
- [ ] **Step 4:** Commit.

### Task 3: Home service cards and tab panels from data

**Files:**
- Create: `lib/homeServices.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Produces: `HOME_SERVICES` — four entries each with `id`, `num`, `bg`, `scene` (SVG), `icon` (SVG), `cardTitle`, `cardBlurb`, `tabTitle` (tab label and panel heading, which were identical), `panelText`, `chips: string[]`, `panelImage: ImageKey`. The card grid, tab buttons and panels in `app/page.tsx` each become one `.map`.

- [ ] **Step 1:** Implement. Tab `data-tab`/`data-panel` indexes, `active` class on index 0 and `aria-selected` values must match the baseline (HomeEffects drives them).
- [ ] **Step 2:** Build, snapshot, diff. Expected: no output.
- [ ] **Step 3:** In a browser, click each of the four tabs and confirm the panel switches.
- [ ] **Step 4:** Commit.

### Task 4: Whole-branch review and ship

- [ ] **Step 1:** Run superpowers:requesting-code-review on the full diff from the baseline commit.
- [ ] **Step 2:** Phone-width (390px) screenshots of `/` and `/services`; console has no errors.
- [ ] **Step 3:** Push to `main`; confirm the live site serves the new build.
