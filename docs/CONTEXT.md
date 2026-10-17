---
phase: 3
phase_name: Next.js rebuild & SEO foundation
updated: 2026-10-17
last_commit: 264680f
last_entry: 3
---

## Current Focus

The rebuild is pushed and Vercel auto-deploys `main` to production, but only on
`orbit-info-new-website-karanb-1adp.vercel.app`. The real domain
`orbititsolutions.in` isn't attached to Vercel yet — it 301s to the old site.
Getting the domain live is the gate for everything launch-related.

## Active Tasks

- [ ] Attach `orbititsolutions.in` to the Vercel project (Vercel account: karan.m.bhanushali@gmail.com, team `karanmbhanushali-gmailcoms-projects`) and repoint DNS — needs the user
- [ ] Only after that: canonical/noindex or redirects on the old domain `www.orbitinfosystems.com`
- [ ] Decide on the 26 unused September photos (`public/images/14 september new/`, untracked) and move the raw originals out of `public/`

## Blockers

Domain attach + DNS is a user action. Old-domain handling must not happen before it.

## Context

- **Never commit or push without being told, every time.** That permission never carries forward.
- `lib/siteConfig.ts` is the only place NAP facts should ever be written — see DEC-002.
- Never emit `aggregateRating`/`review` schema, ever — see DEC-003.
- A portfolio photo may only pair with a project it genuinely depicts — see DEC-006.
- Pushing to `main` deploys to production on Vercel.
- Testing gotcha: if the Browser-pane tab is backgrounded (`document.hidden === true`), `requestAnimationFrame`/`IntersectionObserver` never fire and every visual check silently lies. Use Playwright (real, foregrounded browser) for anything reveal/animation-dependent.
- Dev server config lives at the *workspace root* (`D:/Github_apps/claude/.claude/launch.json`), not inside this repo, and the Browser preview tool may not find it. Fallback: `npm run dev -- -p 3123` in the background, then `curl` to confirm.

## Next Session

Run `git fetch` first. Then check whether `orbititsolutions.in` is attached in Vercel
(`curl -sI https://orbititsolutions.in` should no longer 301 to orbitinfosystems.com).
If it is, do the old-domain handling. Otherwise move on to Phase 4
(content/keyword strategy) per `docs/IMPLEMENTATION.md`.
