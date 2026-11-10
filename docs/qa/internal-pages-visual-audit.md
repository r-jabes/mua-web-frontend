# Internal pages visual audit (Phase 5)

Date: 10 November 2026  
Scope: All Phase 4 internal routes against homepage Institutional Momentum standard  
Reference: `design-direction.md`, `design-system.md`, `site-architecture.md`, `content-inventory.md`

## Pages reviewed

| Area | Routes |
|------|--------|
| Hubs | `/personal`, `/business`, `/business/more` |
| Personal products | Private / commercial / motorcycle motor, Domestic Package, Travel (`/leisure`) |
| Business products | Liability, Property (+ additional covers), commercial/private/motorcycle motor, Transport, Special & Financial Risks, Corporate Health (gated) |
| Support | `/make-a-claim`, `/customer-care`, `/contact-us` |
| Company | About, Values, Leadership, MUA in Africa, Social purpose, Agents, Careers, Investors |
| News | `/news/blog`, article slug pages |
| Legal | Privacy (placeholder), Data protection, Cookie policy |

## Problems discovered (pre-fix)

1. Support nav pointed at a non-existent `/#support` anchor.
2. Breadcrumbs lacked separators.
3. Footer omitted Agents and Social purpose.
4. Product/hub layouts leaned on repetitive bordered cards and orange accent blocks.
5. Related links and leadership/location tiles felt boxed versus homepage editorial restraint.
6. Claims/contact hierarchy needed clearer practical grouping (contacts vs process; HQ vs outlets).
7. Inline styles diluted the shared page CSS module.
8. News articles lacked a strong editorial media + prose rhythm.

## Improvements implemented

- **Navigation:** Support → `/contact-us`; breadcrumb `/` separators; footer Agents + Social purpose; business menu densified.
- **Shared system:** Reworked `page.module.css` toward hairline editorial patterns (`hubGrid`, `coverStack`, `rail`, `related`, `quickLinks`, `hqFeature`, `valueGrid`, `noteStack`).
- **ProductView:** Cover detail stack + sticky benefits / how-to / verification rail + related rows.
- **HubCards:** Discovery list links instead of heavy card chrome.
- **Claims:** Numbered process + sticky contacts/uploads rail; external claim form retained (no fake backend).
- **Contact:** Featured Head Office + quick journeys; points of presence listed separately (HQ removed from duplicate grid).
- **Agents / Careers:** Opportunity and application framing with rails; no invented portals.
- **About / Values / Leadership / Africa:** Institutional layouts with timelines, value grids, people lists, verification notes.
- **News:** Index grid + article hero media + constrained prose.
- **Legal:** Data-protection rights as bare grid; privacy remains an explicit confirmation placeholder.

## Visual character by page type

| Type | Intent |
|------|--------|
| About / company | Credibility — timeline, strengths rail, restrained navy heroes |
| Products | Clarity — cover stack + sticky practical rail |
| Claims | Guidance — steps first, contacts always visible on desktop |
| Contact | Reachability — HQ first, then regional points |
| Agents | Opportunity — narrative + how-to, verification that no portal is implied |
| News | Editorial — media-led listing and article rhythm |

## Consistency with homepage

Shared tokens (navy/blue/orange, Manrope/Nunito, section rhythm, mist bands, navy closing CTAs) are preserved. Internal pages avoid homepage-only marketing sections while matching the same institutional restraint (hairlines over cards, purposeful whitespace, no decorative gradients).

## Screenshots

Stored under `frontend/docs/qa/phase5/` (desktop, tablet, and mobile samples of key templates).
