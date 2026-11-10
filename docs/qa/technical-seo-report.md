# Technical SEO report (Phase 6)

Date: 10 November 2026  
Environment: Next.js 16 production build (`npm run build` / `npm run start` on port 3002)

## Summary

Public routes now ship unique titles/descriptions, canonical URLs, Open Graph + Twitter cards, Organization/WebSite JSON-LD, BreadcrumbList on internal heroes, Article JSON-LD on news, plus `sitemap.xml` and `robots.txt`.

## Metadata coverage

| Area | Implementation |
|------|----------------|
| Root defaults | `src/app/layout.tsx` — title template, description, OG/Twitter, robots, theme-color |
| Shared builder | `src/lib/seo.ts` → `buildPageMetadata` / `productMetadata` |
| Homepage | Absolute title (avoids duplicated site name) |
| Product pages | Canonical + OG via `productMetadata(product)` |
| Company / support | `buildPageMetadata` with verified leads |
| News articles | Article OG type + Article schema |
| Privacy placeholder | `noindex, follow` |
| Corporate Health | `noindex, follow` (gated content) |
| 404 | Custom `not-found.tsx`, `noindex` |

## Structured data

- **Organization + InsuranceAgency** (verified HQ, phone, email, logo, social)
- **WebSite** with publisher
- **BreadcrumbList** on pages using `PageHero` crumbs
- **Article** on `/news/[slug]`

Validated by inspecting rendered HTML for `application/ld+json` on homepage and 404 (Organization/WebSite present).

## Indexing configuration

| Asset | Status |
|-------|--------|
| `/robots.txt` | Allow `/`; disallow `/api/`, `/_next/`; sitemap + host set |
| `/sitemap.xml` | Static routes + news articles; excludes `/privacy` and `/business/corporate-health-insurance` |
| Canonical strategy | Absolute `https://www.mua.rw{path}` via `metadataBase` |
| HTTP codes | Indexable pages 200; unknown path 404 |

## Findings fixed

1. Missing per-page canonical / social metadata beyond basic title/description.
2. No sitemap or robots route handlers.
3. No Organization/WebSite/Breadcrumb/Article schema.
4. No dedicated 404 experience.
5. Homepage title risk of template duplication.

## Lighthouse SEO

Homepage and Personal hub SEO category scored **100** after descriptive link-text fixes (artifacts under `frontend/docs/qa/phase6/`).

## Remaining SEO limitations

- Privacy notice is still a placeholder — kept noindexed until MUA supplies approved copy.
- Corporate Health remains noindexed pending underwriting confirmation.
- No `hreflang` (single English Rwanda locale).
- Search Action / FAQ schema not added (no verified FAQ corpus).
- Production host currently assumed as `https://www.mua.rw`; confirm final deploy domain before launch.
