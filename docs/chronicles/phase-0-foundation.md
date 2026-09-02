# Phase 0: Foundation

## Entry 1: Initial static site + logo iteration (2026-06-13 to 2026-06-25)

**What**: Five-page static HTML/CSS/JS site built and uploaded for Orbit IT
Solutions (Mumbai, est. 1998) — home, services, about, gallery, contact.
Multiple logo revisions followed.

**Why**: Get a working marketing site live; the logo needed several passes
because the sourced file had baked-in issues.

**How**:
- Uploaded initial 5-page static build, iterated a few times same-day
- Logo: fixed a white background baked into the source PNG (JPEG-sourced,
  flood-filled transparent with Python PIL)
- Logo: removed a duplicate baked-in wordmark, replaced with HTML text
  (`ORB`+`IT` styled span) so the name is crawlable and legible small
- Logo: cropped to icon-only + large clean wordmark; portrait aspect ratio
  originally made it render tiny at a fixed height
- Mobile nav: shrunk the "Get Free Quote" button for smaller screens

**Files**: see commits `5b9cb1b`–`e61e655`
