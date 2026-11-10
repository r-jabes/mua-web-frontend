# Accessibility audit (Phase 6)

Date: 10 November 2026  
Target: WCAG 2.2 AA  
Method: Manual review + Lighthouse accessibility (Chrome headless, production build on localhost:3002)

## Baseline already present

- Skip link to `#main`
- `lang="en"`
- Visible `:focus-visible` outlines (including inverse surfaces)
- Header `aria-expanded` menus; mobile dialog with Escape
- `prefers-reduced-motion` in CSS + `useReveal`
- Descriptive image `alt` from inventory
- Semantic landmarks (`header`/`main`/`footer`/`nav`)

## Issues found and fixed

| Issue | Fix |
|-------|-----|
| White text on brand orange `#ff671d` (~2.91:1) | Primary buttons / skip link use `--mua-orange-strong` |
| Eyebrow orange on mist (~2.52:1, then 4.49:1) | Eyebrows / task accents use `#b45309` strong orange |
| Generic “Learn more” links | “View {product title}” / “Explore {title}” |
| Dropdown keyboard UX | Focus opens menus; blur closes; `aria-haspopup`, `role="menu"` / `menuitem` |
| Social new-tab links | `aria-label` notes new tab; `rel="noopener noreferrer"` |
| External CTA anchors | Safe `target`/`rel` for http(s) |
| Breadcrumbs | `<nav aria-label="Breadcrumb">` |

## Lighthouse accessibility scores

| Page | Score | Notes |
|------|------:|-------|
| `/` | 96 | SEO category reached 100 after link-text fix |
| `/personal` | 96 | Same pattern |

JSON artifacts: `frontend/docs/qa/phase6/lighthouse-*.json`

## Manual keyboard checks

| Control | Result |
|---------|--------|
| Skip link | Appears on focus |
| Desktop dropdowns | Keyboard open/close; Escape clears |
| Mobile drawer | Opens/closes; scroll lock |
| Quote deep links | Reach `#quote` |
| Claim / contact tel/mailto | Native protocols |

## Remaining limitations

- No full NVDA / VoiceOver certification pass in this environment.
- Decorative brand orange `#ff671d` may still appear on large borders/icons (not small body text).
- Find Us map is a non-interactive summary region.
- Absolute WCAG certification is not claimed.
