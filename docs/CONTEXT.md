---
phase: 3
phase_name: Next.js rebuild & SEO foundation
updated: 2026-09-02
last_commit: 7099037
last_entry: 3
---

## Current Focus

The Next.js rebuild is done and committed locally. Nothing pushed yet — the
live site is still the old static build. Next real work is either finishing
the remaining "not done" items below, or moving into content/keyword strategy.

## Active Tasks

- [ ] Convert remaining story/hero `<img>` tags (services/about pages) to `next/image` — portfolio already converted
- [ ] Get user's go-ahead, then push to GitHub / deploy to Vercel
- [ ] Set up canonical + noindex on the old domain once the new site is live
- [ ] Blocked: need the public LinkedIn company page URL (current one is a private `/admin/dashboard/` link) for `sameAs`

## Blockers

None hard-blocking. LinkedIn URL above is a soft blocker on one schema field only.

## Context

- **Never commit or push without being told, every time** — this session's local commit (`7099037`) was done with explicit go-ahead; that permission does not carry forward automatically.
- `lib/siteConfig.ts` is the only place NAP facts should ever be written — see DEC-002.
- Never emit `aggregateRating`/`review` schema, ever — see DEC-003.
- A portfolio photo may only pair with a project it genuinely depicts — see DEC-006.
- Testing gotcha: if the Browser-pane tab is backgrounded (`document.hidden === true`), `requestAnimationFrame`/`IntersectionObserver` never fire and every visual check silently lies. Use Playwright (real, foregrounded browser) for anything reveal/animation-dependent.
- Dev server config lives at the *workspace root* (`D:/Github_apps/claude/.claude/launch.json`), not inside this repo. It doesn't survive a session reset — restart and verify with `curl` before trusting a "server started" tool message.

## Next Session

Read this file, then `HANDOFF.md` at the repo root for the full bug-by-bug
writeup if more detail is needed. Restart the dev server and confirm with curl
before doing anything else. Then either: (1) finish the "not done" list above,
or (2) move into Phase 4 (content/keyword strategy) per `docs/IMPLEMENTATION.md`.
