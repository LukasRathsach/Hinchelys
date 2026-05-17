# Hinchely's Website — Developer Handoff

## What this file is and how to maintain it

This file stores non-obvious context for future AI sessions: decisions, fragile areas, constraints, and roadmap notes that would be expensive to rediscover from the code alone.

Add only:
- non-obvious architectural decisions
- user constraints that override defaults
- fragile bugs, gotchas, or workflow traps
- roadmap items that matter across sessions

Do not add:
- obvious facts from the codebase
- progress logs
- generic explanations

Last updated: 2026-05-17

---

## Project snapshot

- Purpose: Personal brand site for Julie and the client (two founders from Sønderjylland). Not a company site — a platform that collects everything they do.
- Tone: Authentic and direct — entrepreneurs, not a consultancy.
- Stack: Not chosen yet. Multi-page content site → leaning toward Vite + React or static HTML/CSS. Avoid over-engineering.
- Entry points: Not created yet.
- Brand identity: File pending (ZIP from client, not yet in repo).

## Site structure (confirmed by client)

1. **Forside** — their story / shared narrative
2. **Virksomheder** — three companies: DSF, Bistro Neuf, Det Sidste Bureau
3. **Advisory / Bestyrelse** — board positions
4. **Foredrag** — speaking engagements + booking
5. **Medie / Presse** — media coverage + debate
6. **Content hub** — LinkedIn posts / articles
7. **Kontakt** — email + signup form

## Hard-won context

- Personal brand, not corporate. Two founders together on one site.
- Three distinct companies, each needs its own section/card.
- Content hub likely needs a simple CMS or at least easy manual updates — confirm with client.
- Tone: Sønderjylland roots, direct, authentic — avoid polished corporate language.

## Roadmap

- [ ] Receive and review brand identity (fonts, colors, logo, imagery).
- [ ] Decide stack: static HTML/CSS vs. Vite/React (depends on content hub complexity).
- [ ] Build forside with story section.
- [ ] Build virksomheder section (DSF, Bistro Neuf, Det Sidste Bureau).
- [ ] Build advisory/bestyrelse section.
- [ ] Build foredrag section with booking CTA.
- [ ] Build medie/presse section.
- [ ] Build content hub (LinkedIn posts — static or CMS-backed).
- [ ] Build kontakt page with email signup.
- [ ] Responsive layout, mobile pass, accessibility basics.
- [ ] Deploy and connect domain.
