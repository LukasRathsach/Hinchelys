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
- Stack: **Vite + React** with React Router v6. Inline styles only (no CSS framework). Design system provides all tokens + components.
- Entry points: `index.html` → `src/main.jsx` → `src/App.jsx`. All 7 routes implemented.
- Brand identity: Design system extracted and implemented. Assets in `public/assets/`. Design system reference in `Hinchelys Design System/`.

## Site structure (confirmed by client)

1. **Forside** — their story / shared narrative
2. **Virksomheder** — three companies: DSF, Bistro Neuf, Det Sidste Bureau
3. **Advisory / Bestyrelse** — board positions
4. **Foredrag** — speaking engagements + booking
5. **Medie / Presse** — media coverage + debate
6. **Content hub** — LinkedIn posts / articles
7. **Kontakt** — email + signup form

## Hard-won context

- Personal brand, not corporate. Two founders (Tobias og Julie Silverstein Hinchely) together on one site.
- Three distinct companies, each needs its own section/card.
- Content hub is static HTML placeholder posts — no CMS yet. Add content manually in `src/pages/Content.jsx` POSTS array.
- Tone: Sønderjylland roots, direct, authentic — avoid polished corporate language.
- Stack is Vite + React with inline styles (no Tailwind, no CSS framework). This is a hard project preference.
- Design system reference lives in `Hinchelys Design System/` — do not delete. Components are copied into `src/components/`.
- Forms use Formspree — replace `REPLACE_WITH_FORMSPREE_ID` in EmailSignup.jsx, Footer.jsx, Foredrag.jsx, Kontakt.jsx.
- Logo files: `public/assets/logotype_black.svg`, `logotype_white.svg`, `logomark_black.svg`, `logomark_white.svg`.
- Nav is transparent on homepage hero, opaque (frosted) on all other pages and when scrolled.

## Roadmap

- [x] Receive and review brand identity (fonts, colors, logo, imagery).
- [x] Decide stack: Vite + React, inline styles, React Router v6.
- [x] Build forside with hero, stat strip, company cards, quote band, email signup.
- [x] Build virksomheder page (DSF, Bistro Neuf, Det Sidste Bureau).
- [x] Build om/advisory page with biography + bestyrelse placeholders.
- [x] Build foredrag page with booking form (Formspree placeholder).
- [x] Build medie/presse page with press items.
- [x] Build content hub with filter chips and PostCard list.
- [x] Build kontakt page with contact form (Formspree placeholder).
- [x] Basic responsive layout via auto-fit grids + mobile nav + CSS breakpoints.
- [ ] Replace Formspree placeholder IDs with real form endpoints.
- [ ] Add real photography (flash portraits of Tobias & Julie).
- [ ] Fill in real bestyrelsesposter on Om-siden.
- [ ] Fill in real presseomtale with actual links.
- [ ] Deploy and connect domain.
- [ ] Bestyrelse / Advisory as separate page (currently part of Om).
