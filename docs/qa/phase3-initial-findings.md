# Phase 3 — Initial visual findings (pre-refinement)

Inspected live at http://localhost:3000 across intended viewports.

## Critical
1. **Fonts falling back to Times New Roman** — `--font-manrope` / `--font-nunito` applied on `body`, but token aliases defined on `:root` resolve before those variables exist. Site reads as generic serif, not MUA system.
2. **Hero first-viewport incomplete** — headline sits low; CTAs near bottom edge (~y 740 in 900px viewport). First impression feels truncated.
3. **Footer logo contrast** — official SVG wordmark is brand blue on navy footer → near-invisible.

## High
4. Desktop header utility/CTA can feel crowded; Get a quote must remain unmistakably primary.
5. Hero brand mark orange-on-photo contrast is weak without a solid scrim pocket.
6. Hero 8s scale hover feels decorative, not institutional.
7. Personal chapters reuse weak/mismatched photography (esp. Domestic/Travel).
8. Section reveals on every block risk looking template-animated.

## Medium
9. Task strip → Personal transition lacks deliberate cadence.
10. Agents blue panel reads slightly generic vs editorial personal chapters.
11. Map placeholder on Find us is utilitarian but unfinished-looking.
12. Mobile hero stacks well, but CTA block needs tighter rhythm so quote/claim appear sooner.

## Accessibility / engineering
13. Confirm keyboard mega-menu and focus rings after font fix.
14. Broken internal routes remain expected (out of scope).
15. Console: watch for Next.js image / hydration noise only.
