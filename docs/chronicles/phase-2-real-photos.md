# Phase 2: Real photos & static-site fixes

## Entry 1: Unsplash photos added, then made visible (2026-08-11 to 2026-08-13)

**What**: Added real-life imagery (laptop repair, CCTV cameras, etc., sourced
from Unsplash at the time) across all five pages. A follow-up session fixed a
bug where those images were invisible on the services and gallery pages.

**Why**: The site was text/illustration-heavy; the user wanted photographic
content throughout to look more credible and less like a template.

**How**:
- Added `<img>` elements and CSS `background-image` photo treatments across
  service cards, panel visuals, and gallery tiles
- Root cause of the invisibility bug: a solid gradient `<div>` sat later in
  the DOM at the same `z-index:0` as the photo, so it fully covered it —
  compounded by `opacity:.22` and `mix-blend-mode:luminosity` on the services
  page making the photo nearly invisible even where it should show
- Fix: bumped the gradient overlay above the photo in z-index, converted the
  gradients from opaque to ~50% rgba so the photo reads through as a tint
  rather than a cover

**Files**: see commits `6ed20f3`, `47c917b`

**Note**: These Unsplash images were entirely replaced with real user-supplied
photos in Phase 3 — this phase's images no longer exist in the codebase.
