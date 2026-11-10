# Responsive QA report (Phase 5)

Date: 10 November 2026  
Environment: Next.js dev server `http://localhost:3001`  
Capture method: Chrome headless screenshots → `frontend/docs/qa/phase5/`

## Viewports tested

| Width | Intent | Result |
|------:|--------|--------|
| 1440px | Desktop | Pass — heroes, split product/claims layouts, hub discovery grids |
| 1280px | Laptop | Pass — leadership and nav remain usable |
| 768px | Tablet | Pass — claims process stacks cleanly; CTAs remain tappable |
| 390px | Mobile | Pass — full-width hero CTAs; contact HQ readable; no horizontal overflow observed |
| 360px | Small mobile | Pass — business hub compresses without broken grids |

## Route HTTP check

All 34 implemented routes returned **200** (homepage + hubs + products + company + support + news + legal). Failures: **0**.

## Screenshot set

| File | Viewport | Subject |
|------|----------|---------|
| `personal-1440.png` | 1440 | Personal hub hero + catalogue |
| `product-1440.png` | 1440 | Private Vehicle product composition |
| `claims-1440.png` | 1440 | Claims process + sticky rail |
| `contact-1440.png` | 1440 | Contact HQ + journeys |
| `about-1440.png` | 1440 | About institutional hero |
| `agents-1440.png` | 1440 | Agents opportunity page |
| `news-1440.png` | 1440 | News index |
| `leadership-1280.png` | 1280 | Leadership |
| `claims-768.png` | 768 | Claims tablet |
| `personal-390.png` | 390 | Personal mobile |
| `contact-390.png` | 390 | Contact mobile (stacked CTAs) |
| `business-360.png` | 360 | Business hub small mobile |

## Fixes applied during responsive pass

- Mobile hero/CTA full-width stacking retained at ≤640px.
- Location grid: 1 → 2 columns at 768px, 3 at 1100px.
- Hub discovery uses 2-column hairline grid from 900px (single column below).
- Product/claims sticky rail becomes stacked block below 900px.
- Breadcrumb wrapping verified with `/` separators on long product crumbs.

## Interaction checks

- Primary nav dropdowns and mobile drawer portal remain functional.
- Support, Contact utility, Claims, and footer legal/company links resolve to live routes.
- Claim form CTA continues to external `mua.rw` (no simulated backend).
- Quote CTAs target `/#quote` on the homepage.

## Console / assets

- Typecheck (`tsc --noEmit`) completed with no reported errors.
- No broken image URLs observed on captured key pages (brand SVG + inventory photography).
- Dev “N” indicator appears in screenshots (development overlay only).

## Residual responsive notes

- Very long product breadcrumb trails wrap to two lines on 360px — acceptable.
- Business mega-menu is denser after Phase 5; desktop panel scroll may be needed on short laptop heights.
