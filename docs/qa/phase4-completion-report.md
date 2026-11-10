# Phase 4 — Internal pages completion report

Homepage quality preserved. Internal pages reuse the Phase 1–3 design system (tokens, header/footer, Button, Manrope/Nunito, verification notes). No CMS, backend, or agent-management system was added.

## 1. Completed routes (HTTP 200)

### Hubs
- `/personal`
- `/business`

### Personal products
- `/personal/motor/private-vehicle`
- `/personal/motor/commercial-vehicle`
- `/personal/motor/motorcycle`
- `/personal/domestic-package`
- `/leisure` (Travel)

### Business products
- `/business/liability`
- `/business/property`
- `/business/property/additional-covers`
- `/business/commercial-vehicle`
- `/business/private-vehicle`
- `/business/motorcycle`
- `/business/transport`
- `/business/more`
- `/business/more/special-financial-risks`
- `/business/corporate-health-insurance` *(gated with verification notes)*

### Claims & support
- `/make-a-claim`
- `/customer-care`
- `/contact-us`
- `/agents`

### Company
- `/about-us`
- `/our-vision-and-purpose`
- `/leadership`
- `/mua-in-africa`
- `/social-purpose`
- `/career`
- `/investors`

### News
- `/news/blog`
- `/news/[slug]` (5 verified inventory articles)

### Legal
- `/data-protection`
- `/cookie-policy`
- `/privacy` *(explicit placeholder — source notice missing)*

Homepage `/` remains intact; primary nav now points Personal/Business/Company to real hubs.

## 2. Screenshots

Saved under `docs/qa/phase4/`:

| File | Subject |
|------|---------|
| `personal-hub.png` | Personal catalogue |
| `private-vehicle.png` | Product detail |
| `claims.png` | Claims journey |
| `about-us.png` | Company about |
| `contact-mobile-390.png` | Contact @ 390px |

## 3. Missing or unverified content (intentionally gated)

- Individual Personal Accident, Tulizo Bora / individual Health, Life product pages — not created as full offers.
- Corporate Health retained with strong “Needs MUA confirmation” notes (GCR conflict + Kenya contacts).
- Work injury / WIBA and some motor statute naming flagged for legal confirmation.
- Privacy notice still unavailable from source — placeholder only.
- Customer Charter PDF not linked (download target unverified).
- Investor PDFs still open on mua.rw rather than locally hosted.
- Careers vacancies / spontaneous application deep-link to live mua.rw forms.
- News articles use inventory titles/summaries; full long-form source copy was not fully scraped into local CMS content.
- About “38 employees / 2 branches” stats not featured as hard claims (conflict with 11 locations).

## 4. Remaining technical issues

- Claim submission uses external mua.rw form destination (by design — no fake backend).
- Google Map embed not recreated on Contact (directory + verified phones only).
- Desktop mega-menu remains hover-oriented; mobile drawer uses portal (Phase 3 fix).
- Image set is still limited to existing homepage assets reused across pages.
- Occasional Next.js Dev Tools hydration badge may appear in automation browsers; `tsc --noEmit` passes.

## 5. Responsive testing

- All listed routes returned **200** in local QA.
- Desktop (1440): hubs, product detail, claims, about inspected — brand navy/orange, breadcrumbs, CTAs consistent.
- Mobile (390): contact page stacks hero CTAs, hamburger nav present, location cards readable; no horizontal overflow observed in spot checks.

## 6. Suggested git commit message

```
feat: implement Phase 4 internal pages from verified inventory

Add personal/business hubs and product detail templates, company,
claims, contact, agents, news and legal routes using shared page
primitives — gating unverified Health/Life/PA and privacy copy.
```

## Verdict

Phase 4 internal pages are complete for verified content. Stop here — do not implement CMS, backend, or agent-management systems in this phase.
