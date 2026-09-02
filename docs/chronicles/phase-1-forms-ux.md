# Phase 1: Forms & UX polish

## Entry 1: Google Apps Script forms + UX fixes (2026-06-26)

**What**: Wired the contact/quote forms to a Google Apps Script Web App that
appends leads to a Google Sheet — free, no backend needed. Fixed a handful of
UX papercuts found in review.

**Why**: The user wanted a free-forever form backend rather than a paid
form service or a custom API, and asked for Microsoft Forms first — declined
in favor of Apps Script + Sheets after discussing tradeoffs.

**How**:
- Form POSTs `no-cors` to the Apps Script endpoint, fire-and-forget (not
  awaited) — awaiting it exposed a ~20s cold-start delay to the user, since
  the response is opaque under `no-cors` anyway and tells the caller nothing
- Email made mandatory; phone made optional and deliberately unvalidated
  (landline/mobile/WhatsApp formats all differ, a rejected valid number costs
  a lead)
- Fixed homepage URL rendering as `/index.html` instead of `/`
- All "Get Free Quote" CTAs now anchor to the contact page's form section
  instead of the top of the page

**Files**: see commits `f4217f9`–`b0558c1`
