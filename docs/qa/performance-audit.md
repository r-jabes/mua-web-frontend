# Performance audit (Phase 6)

Date: 10 November 2026  
Tool: Lighthouse 12.2.1 (Chrome headless)  
Server: `next start` production build on `http://localhost:3002`  
Hardware note: local Windows laptop — lab scores, not field CrUX.

## Optimizations implemented

### Images
- Next.js image pipeline already configured for AVIF/WebP.
- Device sizes tuned for 360–1920 viewports.
- JPEG sources recompressed (mozjpeg q≈78):

| File | Before | After |
|------|-------:|------:|
| hero-motor.jpg | 328 KB | 84 KB |
| hero-alt.jpg | 216 KB | 119 KB |
| news-1.jpg | 163 KB | 68 KB |
| news-2.jpg | 217 KB | 86 KB |
| news-3.jpg | 250 KB | 109 KB |

- Heroes use `priority` + `sizes="100vw"`; below-fold news/cards use responsive `sizes`.
- Removed unused Create-Next-App SVG assets (`next.svg`, `vercel.svg`, etc.).

### Frontend
- Dependency surface remains Next + React only (no animation libraries).
- Fonts: Manrope + Nunito Sans via `next/font` with `display: "swap"` and preload.
- Reveal motion uses IntersectionObserver + transform/opacity; respects reduced motion.
- `poweredByHeader: false`, response compression enabled.

### Security headers (perf-adjacent best practices)
- `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`.

## Lighthouse measurements (recorded)

### Homepage `/` (post-optimization run)

| Category | Score |
|----------|------:|
| Performance | 80–88 (run variance) |
| Accessibility | 96 |
| Best practices | 100 |
| SEO | 100 (after link-text fix) |

| Metric | Value | Target | Notes |
|--------|------:|-------:|-------|
| LCP | 3.2 s | ≤ 2.5 s | Local lab; LCP is hero image |
| CLS | 0 | ≤ 0.1 | Pass |
| TBT | 240–520 ms | (proxy for INP) | Lab CPU variance; no field INP |
| FCP | ~0.9–1.1 s | — | Acceptable |

### Personal hub `/personal`

| Category | Score |
|----------|------:|
| Performance | 82–96 (run variance) |
| Accessibility | 96 |
| SEO | 100 |

| Metric | Value |
|--------|------:|
| LCP | 2.6–2.9 s |
| CLS | 0 |
| TBT | 110–540 ms |

Raw JSON: `frontend/docs/qa/phase6/lighthouse-home.json`, `lighthouse-personal.json`.

## Core Web Vitals assessment

- **CLS:** Meeting “good” in lab (0).
- **LCP:** Slightly above “good” on this machine for homepage hero; improve further with CDN edge caching, HTTP/2/3 hosting, and optional hero AVIF source file.
- **INP:** Not directly measured in this Lighthouse lab run; TBT is used as a rough interaction proxy. No heavy third-party scripts observed.

## Recommendations (not blocking Phase 6)

1. Host on an edge CDN close to Rwanda users; re-measure field LCP.
2. Consider a dedicated compressed AVIF/WebP master for `hero-motor` beyond on-the-fly Next conversion.
3. Re-run Lighthouse on staging with throttling profiles matching mobile 4G.
4. Avoid adding analytics/tag managers without async/deferred loading.
