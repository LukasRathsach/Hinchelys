---
name: hinchelys-design
description: Use this skill to generate well-branded interfaces and assets for HINCHELYS — the personal brand platform of Tobias and Julie Silverstein Hinchely — either for production or throwaway prototypes/mocks/decks. Contains the brand's tokens (color, typography, spacing, motion), the four logo files, content/voice rules, and reference React components for the marketing website.
user-invocable: true
---

# HINCHELYS — Design Skill

Read `README.md` first for context. Then explore the other files as needed.

## Entrypoints (in order of usefulness)

1. **`README.md`** — what the brand is, who it's for, voice rules with real specimens, visual foundations, iconography.
2. **`colors_and_type.css`** — every token as a CSS custom property. Import this once at the root of any HTML page or React app and the rest of the system "just works."
3. **`web/patterns.md`** — section-by-section design specs for the marketing website (Nav, Hero, CompanyCards, QuoteBand, Footer, etc.). Each section has exact rules — sizes, colors, padding, hover behaviour.
4. **`web/components/*.jsx`** — atomic reference components with inline styles (no Tailwind, no CSS framework). Copy and adapt.
5. **`assets/`** — the four master logo SVGs (logomark / logotype × black / white) plus the brandbook PDF for ground truth.
6. **`preview/*.html`** — visual specimens that render the tokens and components.

## How to use this skill

### If creating visual artifacts (slides, mocks, throwaway prototypes)

- Copy the assets you need into your output folder (`assets/logomark_black.svg`, etc).
- Import `colors_and_type.css` once.
- Use the components from `web/components/` directly, or write fresh HTML using the tokens.
- Follow the rules in `web/patterns.md` — they're precise and exhaustive.
- Output static HTML files for the user to view.

### If working on production code (the actual website)

- Read `README.md` and `web/patterns.md` first; they define the design contract.
- Copy `colors_and_type.css` into the codebase (e.g. `src/styles/tokens.css`) and import it at the root.
- Adapt `web/components/*.jsx` to the target framework's conventions. Inline styles are the project preference (see `LukasRathsach/Hinchely/CLAUDE.md`).
- Copy `assets/*.svg` into the codebase's public/static folder.
- Keep `patterns.md` in sync if you make visual decisions that go beyond it.

### If the user invokes this skill without further guidance

Ask what they want to build:

- A slide / poster / one-off mock?
- A new section for the website?
- A specific page (foredrag, content hub, kontakt, about)?
- A press kit / printable asset?

Then ask 2–3 clarifying questions and proceed as an expert designer who produces either HTML artifacts or production code, depending on the need.

## Non-negotiable rules

1. **No emoji** in copy on the website. Functional bullets (`✔️ ❌`) are allowed only in re-published LinkedIn-style content. The `★` from the brand's logotype is allowed sparingly as a brand decorator.
2. **No gradients, no textures, no patterns** on backgrounds. Confidence comes from whitespace.
3. **No drop shadows** on marketing surfaces. Shadows only on floating UI (menus, tooltips).
4. **Headlines never all-caps** — keep them sentence case, in EB Garamond Light, with italic emphasis on the heart of the line. CTAs and eyebrow labels are the only uppercase elements.
5. **Real photography only** — flash, direct-to-camera, no stock. If photos aren't available, leave a hard-edged rectangular placeholder.
6. **Tone**: direct, autentisk, sønderjysk. Never "konsulent-speak." Numbers are concrete; analogies are physical / agrarian.
7. **Logos**: only the four files in `assets/`. Never re-traced, re-coloured, rotated, or framed.

## Substitutions that need a flag

- **Fonts**: EB Garamond is used as substitute for Apple Garamond Light. Hanken Grotesk is used as substitute for Resist Sans Light. If the production codebase has the licensed files, drop them in `fonts/` and update `colors_and_type.css`.
- **Icons**: Lucide via CDN as the default icon set; the brandbook does not ship icons.

## What this design system intentionally does NOT contain

- A CMS schema.
- Identities for the sub-companies (DSF, Bistro Neuf, Det Sidste Bureau) — those are linked-out properties with their own branding.
- A dark mode. The brand has one mode.
- A clickable end-to-end prototype. This is a system, not a finished site.
