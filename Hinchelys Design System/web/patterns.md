# HINCHELYS — Web Patterns

Section-by-section design specs for the platform website. Each section lists **the rules**, not the markup. Pair this with `colors_and_type.css` and `web/components/*.jsx` to produce code.

> **Use this file as direct context for Claude Code in VS Code.** When building a section, open this file, find the section header, and the surrounding rules are exact and exhaustive.

---

## Global rules

- **Page background**: `--alabaster` (`#F3F3F3`).
- **Max content width**: 1440px, centered.
- **Side gutter**: `clamp(1.25rem, 4vw, 3rem)` (token `--gutter`).
- **Section vertical padding**: `clamp(96px, 12vw, 192px)` top and bottom for tentpole sections; `64px` for utility sections.
- **Grid**: 12-column, 24px gutter, optional. Most layouts are 1- or 2-column with generous white space — don't force a 12-col grid.
- **Inline styles** (per project preference in `LukasRathsach/Hinchely/CLAUDE.md`). No CSS framework. Tokens come from `colors_and_type.css` custom properties.
- **No animation on scroll for content blocks.** Hero animation is the only allowed entrance animation. The site reads as composed, not eager.

---

## 1. Nav

**Anatomy**: logo (left) · primary links (right) · sticky behaviour.

- **Height**: 72px desktop, 60px mobile.
- **Logo**: `logotype_black.svg` at 28px tall. Click → `/`.
- **Links**: `OM OS · VIRKSOMHEDER · FOREDRAG · MEDIE · KONTAKT` in Hanken Grotesk Medium, 13px, `tracking 0.18em`, uppercase, color `--jet-black`.
- **Gap between links**: 40px desktop, collapsed into menu on <900px.
- **Active link**: 1px underline `currentColor`, offset 6px.
- **Hover**: opacity 0.55, 140ms.
- **Sticky**: position `fixed` after 80px scroll. Background `rgba(243,243,243,0.92)` + `backdrop-filter: blur(12px)`. 1px hairline bottom in `--border-soft`.
- **Mobile menu**: full-screen takeover, `--jet-black` background, `--alabaster` text, links rendered at `clamp(2rem, 8vw, 3rem)` in EB Garamond Light italic for headings, Hanken Grotesk for sub-links.

**Never**: dropdowns on hover, mega-menus, search bar in nav, language switcher in nav.

---

## 2. Hero

The hero is the single most opinionated section. It does most of the brand work.

**Anatomy**: tiny eyebrow · oversized serif headline (often with italic emphasis) · short supporting paragraph · two CTAs · one full-bleed flash portrait.

- **Layout**: 60/40 split desktop. Text left 7 cols, image right 5 cols. Vertical-stacked mobile.
- **Eyebrow**: `IVÆRKSÆTTERI · FORFATTER · FOREDRAG` — 12px Hanken Grotesk Medium, `tracking 0.18em`, uppercase.
- **Headline**: `var(--fs-display)` (64–152px fluid), EB Garamond Light, line-height 0.95, tracking 0. Use `<em>` for italic emphasis on the heart of the line. Maximum 2 lines.
- **Headline content patterns**:
  - *"Vi er iværksættere fra Sønderjylland. **Ikke et konsulenthus.**"*
  - *"Tre virksomheder. En adresse. Samme **nysgerrighed.**"*
  - *"Bygget af **dygtige hænder.**"*
- **Supporting paragraph**: 18px Hanken Grotesk Light, max-width 480px, color `--fg-muted`.
- **CTAs**: one solid (jet on alabaster), one ghost (hairline). See `Button.jsx`. Gap 16px.
- **Image**: full-height of text column. Flash portrait (Tobias & Julie). Object-fit: cover. No frame, no shadow, no border. Hard rectangular edge.
- **Padding**: 192px top, 128px bottom on desktop.
- **Entrance animation** (only here): 600ms fade + 12px translate-up, stagger 80ms between eyebrow → headline → paragraph → buttons.

---

## 3. Section header (intro block)

Used to introduce sections like *Virksomheder*, *Foredrag*, *Medie*.

- **Eyebrow** (number + label): `01 · VIRKSOMHEDER` — 13px Hanken Grotesk Medium, tracking 0.18em.
- **Heading**: `var(--fs-h2)` (32–56px), EB Garamond Light, max 12 words.
- **Optional kicker paragraph**: 17px, max-width 560px, `--fg-muted`.
- **Spacing**: 64px below header before content starts.
- **Alignment**: left. Never centered. (Brand is editorial, not poster.)

---

## 4. Virksomheder grid

Three cards: **Den Sidste Flaske · Bistro Neuf · Det Sidste Bureau**.

- **Layout**: 3-column desktop, 1-column mobile. Equal heights.
- **Card structure**:
  - Top: small uppercase tag with company role (`VIN · 250.000+ KUNDER` / `RESTAURANT · SØNDERBORG` / `BUREAU · STRATEGI`).
  - Middle: serif company name at 36px italic.
  - Bottom: one-sentence description, max 24 words.
  - Outbound link: `BESØG SITE →` CTA at the bottom edge.
- **Card style**: 1px hairline border in `--jet-black`, no fill, no shadow, no radius. Padding 32px.
- **Hover**: card flips to inverted — bg `--jet-black`, text `--alabaster`, transition 220ms ease-out.
- **No icons / no logos inside the card**. The companies have their own brand identities; the platform doesn't dilute them by reproducing logos at small size.

---

## 5. Foredrag (talks) booking section

Two parts: pitch + booking form.

- **Two-column**: 60/40. Left = pitch (heading + bullets + 1 quote). Right = booking form in a `--pure-white` card with hairline border.
- **Pitch bullets**: 18px, no icons, indented with em-dash prefix (`— Iværksætteri uden filter`).
- **Quote**: pull-quote style. 28px EB Garamond Light Italic, indented 24px with a 2px left rule in `--jet-black`. Source label below in 12px tracked.
- **Booking form**: name · email · organisation · "Hvilket arrangement?" textarea · primary button `SEND FORESPØRGSEL`. Plus a single muted line: *"Vi vender tilbage inden for 48 timer."*

---

## 6. Medie / press wall

- **Layout**: 3 or 4 columns of press logos / media outlet names.
- **Format**: Each press item = the outlet name **set in EB Garamond Italic at 22px**, with a tiny date below in Hanken Grotesk 11px tracked. Linked.
- **No logo SVGs** (until provided). The wordmark-only treatment is the brand's tactic.
- **Hover**: opacity 0.55.
- **Below**: a single CTA `HENT PRESSEKIT →` linking to a downloadable ZIP (PDF bio, hi-res portraits, logos).

---

## 7. Content hub (LinkedIn re-publishing)

The hub looks like an editorial feed, not a social feed.

- **List layout**: stacked posts, full content width, 96px gap between items, hairline divider between.
- **Each post**:
  - Date (tracked, small): `12. MARTS 2026`.
  - Title (serif 36px): summary headline written for the website, not the LinkedIn first line. e.g. *"Den knude i maven der aldrig forsvinder."*
  - First 3–5 lines of body (17px sans).
  - `LÆS HELE INDLÆGGET →` CTA.
- **Click**: opens a full reading view at `/content/[slug]` with the LinkedIn post embedded or re-typeset.
- **Filter chips** at the top: `ALLE · IVÆRKSÆTTERI · POLITIK · LEDELSE · SØNDERJYLLAND`. Pill style, hairline border, active = filled jet.

---

## 8. Quote / pull-out block

Used between sections for emphasis. Full-bleed jet-black band.

- **Background**: `--jet-black`. Text `--alabaster`.
- **Padding**: 128px vertical.
- **Quote**: `clamp(2rem, 4vw, 3.5rem)` EB Garamond Light Italic, center-aligned, max-width 1000px.
- **Attribution**: 12px sans, tracked, uppercase, 32px below.
- **Optional asterisk decoration**: a single `★` 24px above the quote, in `--aureolin`.

---

## 9. Stats strip

When the numbers earn it (and they do — *250.000 kunder, 3 lande, snart 50 ansatte*).

- **Layout**: 4 equal columns, hairline dividers between.
- **Each stat**:
  - Large number: 72px EB Garamond Light, line-height 1.
  - Label below: 12px Hanken Grotesk Medium, tracked, uppercase, `--fg-muted`.
- **No icons.** Numbers do their own work.
- **Background**: alabaster (default) or aureolin for one emphatic instance per page.

---

## 10. Email signup (newsletter)

Lives in the footer and also as a standalone section.

- **Layout**: 50/50. Left = heading + supporting line. Right = email input + button on a single row.
- **Heading**: 32px serif, 1–2 sentences max. *"Få et brev. Når der er noget at sige."*
- **Field**: 56px tall, bottom-border-only style (no full border). Border `--jet-black`. Placeholder `--fg-subtle`. No background.
- **Button**: solid primary, full height of the field.
- **Below the row**: 11px tracked muted text, *"Ingen spam. Afmelding med ét klik."*

---

## 11. Footer

Editorial. Not a sitemap dump.

- **Structure** (4 columns desktop, stacked mobile):
  - Column 1: full logotype + tagline + Sønderborg address.
  - Column 2: site navigation.
  - Column 3: kontakt / sociale.
  - Column 4: email signup (compact).
- **Background**: `--jet-black`. Text `--alabaster`.
- **Padding**: 96px top, 48px bottom.
- **Bottom strip**: 12px tracked row with `© 2026 HINCHELYS · CVR XXXXXXXX · BUILT IN AABENRAA`. Centered or left-aligned.

---

## 12. Asterisk callout (brand-specific decorator)

The brandbook ships a star ★ in the logotype. Use it sparingly across the site as a brand punctuation mark.

- A `★` in `--aureolin` can prefix a label: `★ NYT FOREDRAG`.
- Never used on its own without text.
- Never animated or rotated.
- Never used more than once per viewport.

---

## What this design system does NOT contain

- A CMS schema.
- A blog post layout for `/content/[slug]` deep pages (only the index list).
- Sub-brand identities for DSF, Bistro Neuf, Det Sidste Bureau — those are linked-out and live on their own properties.
- A dark mode. The brand has one mode.
