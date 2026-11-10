# Phase 3 — Visual audit completion report

Homepage only. Inspected live at `http://localhost:3001` across 1440 / 1280 / 768 / 390 / 360.

## 1. Initial visual problems identified

Critical
- Display fonts resolved to Times New Roman (`--font-manrope` / `--font-nunito` were not available where token aliases lived).
- Hero first viewport felt truncated; CTAs sat near the fold edge.
- Footer logo (brand blue) was nearly invisible on navy.

High
- Desktop header density / utility crowding risk around Get a quote.
- Hero brand mark contrast on photography was weak; decorative ken-burns added little.
- Personal chapters re-used weak Domestic/Travel photography.
- Scroll reveals on too many blocks felt template-like.
- Tablet (≤1023) still used desktop overlay hero while hamburger nav was active — cramped left-edge type on photo.
- Mobile drawer collapsed to ~header height because `position: fixed` was trapped by header `backdrop-filter`.

Medium
- Section transitions / Agents panel / map placeholder still utilitarian in places.
- Mobile top-level nav links (Claims, Careers) looked muted vs accordion summaries.

## 2. Improvements implemented

- Font variables applied on `<html>`; Manrope / Nunito Sans verified in-browser.
- Hero shortened, CTAs brought into first viewport; brand mark lightened; ken-burns removed; title leading tightened.
- Footer logo inverted to white on navy.
- Header grid densified; Contact text hidden 1024–1199 so Get a quote stays primary.
- Personal protection reveal noise reduced; Agents mist treatment; Find Us map restyle.
- Stacked navy hero composition extended to `max-width: 1023px` (aligned with hamburger breakpoint); full-width CTAs under 520px.
- `scroll-padding-top` for sticky header anchors.
- Mobile drawer portaled to `document.body`, slide panel renamed off mega-menu `.panel`, CTAs pinned with flex — full-viewport drawer restored.
- Mobile nav link weight/contrast unified for Claims / Careers.

## 3. Final screenshots

Saved under `docs/qa/phase3/`:

| File | Viewport / subject |
|------|--------------------|
| `final-1440-hero.png` | Desktop hero |
| `desktop-1440-hero-cdp.png` | Desktop hero (CDP capture) |
| `1280-hero.png` | Laptop hero |
| `final-768-hero.png` | Tablet stacked hero |
| `final-390-hero.png` | Mobile 390 hero |
| `final-360-hero.png` | Mobile 360 hero |
| `final-390-menu.png` | Mobile menu drawer |
| `final-1440-closing.png` | Closing CTA / lower page |

## 4. Remaining limitations

- Internal routes still 404 (out of scope for Phase 3).
- Isidora not licensed — Manrope remains the approved display fallback.
- Domestic / Travel photography quality remains weak vs Motor; replace when assets available.
- Find Us map is still a stylized placeholder, not a live map embed.
- Privacy / legal pages have no real copy yet.
- Occasional Next.js hydration warnings surfaced in the automation browser (component attribution jumped between files); not reproduced as a consistent SSR content mismatch after portal/scrolled fixes — monitor in a clean browser profile.

## 5. Performance and accessibility findings

Performance
- Hero and section images served via `next/image` (responsive `w=` variants); no broken images in audit.
- Manrope / Nunito Sans load via `next/font` (~220–235ms in local resource timing).
- No horizontal overflow at 1440 / 768 / 390 / 360.
- Page length ~9k px desktop — long but editorial by design.

Accessibility
- Skip link, landmark regions, sticky header, focus-visible orange ring present.
- Mega-menu and mobile drawer expose `aria-expanded` / dialog labelling; Escape closes drawer.
- Reduced-motion: global animation/transition kill + reveal short-circuit in `useReveal`.
- Contrast: hero white on navy scrim and inverted footer logo pass visual check; orange eyebrow on photo improved via lighter brand mark.
- Keyboard mega-menu still mouse-enter oriented on desktop — acceptable for Phase 3, strengthen focus-within later.

## 6. Suggested git commit message

```
fix: Phase 3 homepage visual QA and mobile drawer

Correct font tokens, tighten the hero first viewport, restore footer
logo contrast, stack the tablet hero with the hamburger breakpoint,
and portal the mobile nav so backdrop-filter no longer collapses it.
```

## Verdict

Homepage passes Phase 3 visual audit for perceived quality at the requested viewports. Do not proceed to internal pages until explicitly requested.
