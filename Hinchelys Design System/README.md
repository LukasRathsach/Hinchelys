# Hinchelys Design System

A design system for **HINCHELYS** — the personal brand platform of **Tobias and Julie Silverstein Hinchely**. The platform unifies three companies (DSF, Bistro Neuf, Det Sidste Bureau), advisory & board work, speaking, press, and a content hub.

This repo is optimised for use **inside Claude Code in VS Code**: every token is in plain CSS variables, components are unstyled JSX with inline styles (no Tailwind / no UI library), and `SKILL.md` makes it pluggable as an Agent Skill.

---

## Sources

| Source | What it is |
|---|---|
| `assets/brandbook.pdf` | Original 12-page brandbook — colors, typography, photography, do's/don'ts |
| `assets/logomark_*.svg`, `assets/logotype_*.svg` | Final master logos, vector |
| [`LukasRathsach/Hinchely`](https://github.com/LukasRathsach/Hinchely) | Developer-handoff repo (currently empty of code — only `CLAUDE.md`, `AI_HANDOFF.md`) |
| LinkedIn — Tobias Hinchely | Behind login; **paste 2–3 posts into a follow-up chat** so I can lock the written tone |

Explore the GitHub repo if you want to align the design system with the eventual production codebase.

---

## Brand snapshot

- **Tagline**: *Boring marketing? It never works.*
- **Hero line (brandbook example)**: *The best marketing doesn't feel like marketing.*
- **Archetype**: The Creator — contemporary, playful, sophisticated, bold
- **Audience (was)**: Small-to-medium businesses, scale-ups, webshops
- **Audience (now / for this platform)**: Press, partners, clients, speaking-bureau bookers, prospective advisory clients, the curious public
- **Origin**: Iværksættere fra Sønderjylland — direct, hands-on, not a consulting firm

The platform sits on top of:

- **DSF** — wine company (domain: `dsfwine.dk`)
- **Bistro Neuf** — restaurant
- **Det Sidste Bureau** — agency / "the last bureau"

---

## Index — what's in this repo

```
/
├── README.md                  ← you are here
├── SKILL.md                   ← Agent Skill manifest (drop into ~/.claude/skills/)
├── colors_and_type.css        ← all tokens; import this in any page
│
├── assets/
│   ├── logomark_black.svg     ← H-in-spiral mark, dark on light
│   ├── logomark_white.svg     ← H-in-spiral mark, light on dark
│   ├── logotype_black.svg     ← full HINCHELYS wordmark + star, dark
│   ├── logotype_white.svg     ← full HINCHELYS wordmark + star, light
│   └── brandbook.pdf          ← original 12-page brandbook (ground truth)
│
├── web/                       ← the website design system
│   ├── patterns.md            ← section-by-section design specs
│   └── components/
│       ├── README.md
│       ├── tokens.js          ← JS mirror of the CSS variables
│       ├── Button.jsx         primary · ghost · link
│       ├── Eyebrow.jsx        small tracked uppercase label
│       ├── Logo.jsx           wrapper around the four SVGs
│       ├── Nav.jsx            sticky top nav with blur
│       ├── Hero.jsx           page-opening unit
│       ├── SectionHeader.jsx  eyebrow + heading + kicker
│       ├── CompanyCard.jsx    hover-inverting card
│       ├── StatStrip.jsx      row of serif numbers
│       ├── QuoteBand.jsx      full-bleed dark quote
│       ├── EmailSignup.jsx    single-row capture
│       ├── PostCard.jsx       content-hub list row
│       ├── PressItem.jsx      wordmark press credit
│       └── Footer.jsx         editorial 4-column footer
│
├── preview/                   ← visual specimens (rendered in the Design System tab)
│   ├── colors-palette.html
│   ├── colors-pairings.html
│   ├── typography-display.html
│   ├── typography-scale.html
│   ├── typography-tracking.html
│   ├── logos.html
│   ├── buttons.html
│   ├── eyebrows.html
│   ├── nav.html
│   ├── hero.html
│   ├── company-cards.html
│   ├── stat-strip.html
│   ├── quote-band.html
│   ├── post-card.html
│   ├── press-items.html
│   ├── email-signup.html
│   ├── footer.html
│   ├── spacing-scale.html
│   ├── radii-shadows.html
│   └── voice-patterns.html
│
├── fonts/                     ← empty — using Google Fonts substitutes (see Typography)
├── ui_kits/                   ← deliberately empty — see "What is NOT in this repo"
└── slides/                    ← deliberately empty — no slide template was provided
```

### What is NOT in this repo

This is a **design system**, not a built website. By design, it does not contain:

- A clickable, sammensat hjemmeside-prototype (per user instruction).
- Layout for deep blog post pages.
- Identity systems for sub-brands (DSF, Bistro Neuf, Det Sidste Bureau).
- A slide template (none was provided — say the word and I'll add one).

---

## Content fundamentals

### Voice — what the brandbook says, in summary

> Playful, intriguing, fun, rebellious, inclusive. Spacious, confident, contemporary.

### Voice — adapted for the personal platform

This is **not** the HINCHELYS-consultancy voice. It's Tobias & Julie talking. Per user brief: *"autentisk og direkte – vi er iværksættere fra Sønderjylland, ikke et konsulenthus."*

| Rule | Do | Don't |
|---|---|---|
| **Person** | "Vi" / "os" when speaking as the couple; "jeg" when it's clearly one of them. | Never the corporate "we." |
| **Address** | "Du" / "dig" — informal, direct. | Don't switch to "De" / "I" mid-page. |
| **Language** | Dansk primært. English fallbacks on press/international booking pages. | Avoid bilingual mixing within one paragraph. |
| **Casing** | Brand wordmarks (`HINCHELYS`, `DSF`, `BISTRO NEUF`) in all-caps. Body in sentence case. Buttons + eyebrow labels in ALL CAPS with wide tracking. | Headlines in all-caps — keep those in sentence case, serif italic for emphasis. |
| **Punctuation** | Short sentences. Em-dashes used liberally for asides — like this. | No semicolons unless absolutely necessary. |
| **Pronouns** | Always specify *which* company: "i DSF", "på Bistro Neuf". | Don't say "vi gør" without context — readers need to know which business. |
| **Numbers** | Concrete. *"42 dage, 11 byer, 1 bog."* | "Several years of experience..." |
| **Emoji** | **Never** in copy. The brand uses graphic symbols (★ star, the logomark) where social media would use emoji. | No 🎯 🚀 ✅ — feels like a competitor. |
| **Calls to action** | Short, imperative, tracked-wide: `BOOK FOREDRAG`, `SKRIV TIL OS`, `LÆS MERE`. | No "Click here" / "Learn more about how we can help you grow." |

### Tone examples

**Hero line (large serif italic):**
> *Vi er iværksættere fra Sønderjylland.*
> *Ikke et konsulenthus.*

**Section opener:**
> Tre virksomheder. En adresse. Samme nysgerrighed.

**CTA pair:**
> `BOOK FOREDRAG →` `SE VORES VIRKSOMHEDER`

**Press kit blurb (short, factual):**
> Tobias og Julie Silverstein Hinchely driver Den Sidste Flaske (DSF), Bistro Neuf og Det Sidste Bureau fra Sønderjylland. 250.000+ kunder, tre lande, snart 50 ansatte. De holder foredrag om iværksætteri og sidder i bestyrelser.

### Tone — LinkedIn vs. website

Tobias's LinkedIn voice is **direct, personal, often political and combative.** Short paragraphs. Repetition for cadence. Em-dashes and line breaks doing the work of pacing. Names dropped for credit ("Tak til Sine Vestergaard"). Uses ✔️ and ❌ as bullet markers — a deliberate, functional use of emoji, not decorative.

**Patterns observed in real posts:**

- **Opens with a stake, not a setup**: *"Staten var ingen steder, da jeg lå søvnløs og ikke vidste om jeg kunne betale løn."*
- **One-line paragraphs for impact** — three or four in a row when the point is heavy.
- **Concrete numbers, always**: *13.000–20.000 kr., 60–70 timer, 250.000 kunder, 0,5 %, 850.000 job, 128.000 kr.*
- **The "dreng fra Aabenraa" refrain** — the origin-story line. Use it like a brand asset.
- **Names the opponent**: regulators, ministers, the system. Specific, not vague.
- **Closes with a turn** — either resignation, defiance, or a callback to the opening image.
- **Checkmark / cross emoji** for argument structure (✔️ Skabe arbejdspladser ❌ Færre virksomheder). Used sparingly in editorial LinkedIn voice.

| Surface | Emoji policy | Tone setting |
|---|---|---|
| LinkedIn / content hub posts | ✔️ ❌ ★ → allowed as functional bullets | Personal, polemic, raw |
| Website hero & nav | None. Ever. | Composed, editorial |
| Website body copy | None. The em-dash carries the rhythm. | Direct but measured |
| Foredrag booking page | None. Real numbers + outcomes. | Confident, no boasting |
| Press / about | None. Third-person, factual. | Editorial |

### Real specimens — voice fingerprints

> *"En dreng fra Aabenraa der ikke vidste bedre. Jeg arbejdede 60-70 timer om ugen."*
> Sentence shape: place-of-origin + self-effacing claim + a number. Useful template for the "om mig" section.

> *"Det er som at tvinge en landmand til at sælge et stykke af sin mark, for at betale skat af den jord, han lever af at dyrke."*
> Analogies are agricultural and physical. Avoid tech metaphors.

> *"Dygtige hænder er ikke plan B. De er fundamentet."*
> Short declarative pair — perfect headline shape for callout blocks.

### Vocabulary

- **Use**: knokle, kæmpe, bygge, knude i maven, fundament, dreng/pige fra [bynavn], dansk erhvervsliv, fairness, gennemsigtighed
- **Avoid**: passion, journey, vision, ecosystem, synergy, world-class, "vi tror på"
- **Brand-specific terms**: DSF (Den Sidste Flaske), Bistro Neuf, Det Sidste Bureau — always written exactly like that, with the company-name caps.

---

## Visual foundations

### Color

| Token | Hex | Role | Notes |
|---|---|---|---|
| `--jet-black` | `#111111` | Primary text + ink | Used at full strength almost everywhere |
| `--alabaster` | `#F3F3F3` | Default page background | Warmer than pure white — the brand's neutral |
| `--concrete` | `#B6B6B6` | Alt neutral | Dividers, captions, disabled states |
| `--aureolin` | `#F1EB2F` | Accent | Used sparingly: CTA backgrounds, highlight blocks, never as page bg for large surfaces (it shouts) |
| `--pure-white` | `#FFFFFF` | Elevation | Cards on alabaster |

**Rules of thumb:**
- 80% black + 15% alabaster + 5% yellow.
- Yellow is *punctuation,* not body language.
- Never tint yellow. Never gradient it.

### Typography

| Role | Brandbook spec | Used here | Why |
|---|---|---|---|
| Display / headings | Apple Garamond Light | **EB Garamond Light** | Apple Garamond is proprietary; EB Garamond is the closest open Garamond. Italic available for the brand's signature emphasis. |
| Body | Resist Sans Light | **Hanken Grotesk Light** | Resist Sans (Pangram Pangram) is proprietary; Hanken Grotesk has the same humanist-grotesk feel at Light weight. |
| Mono | — | system mono | For data/code blocks only. |

> ⚠️ **Substitution flag**: replace these with the licensed files when available. Drop `.woff2` files into `fonts/` and update the `@font-face` declarations at the top of `colors_and_type.css`. Layout was tuned with the substitutes' metrics, so a swap may need minor spacing adjustments.

**Tracking is the soul of this system:**
- Body: ~`-0.01em` (the brandbook says "tracking -10")
- Headings: `0`
- CTAs / eyebrows: `0.18em` (brandbook says "100 or more")
- Display posters / accent words: up to `0.32em`

### Layout

- **Spacious.** Generous outer padding — the brandbook's worked example has hero text occupying ~40% of the canvas with the rest empty.
- Logo and section eyebrows hug the **corners** of the layout (brandbook explicit rule).
- Max content width 1440px; max readable text column 720px.
- Strong vertical rhythm via large gaps (`--s-7` 48px, `--s-9` 96px, `--s-11` 192px between sections).
- No carousels, no marquees, no scroll-jacking.

### Backgrounds

- Pages default to `--alabaster`.
- Section inversions: full-bleed `--jet-black` for press / about / quote sections.
- A `--aureolin` block is allowed as a single emphatic section — e.g. for the booking CTA, never decorative.
- **No gradients. No textures. No patterns.** The brand reads as confident *because* of the empty space.

### Photography

Per brandbook: **flash photography, conceptual storytelling.** Direct, contrasty, no Instagram filters, no warm/cool grading. Subjects often look directly at camera. Real shots only — no stock.

For the platform: portraits of Tobias + Julie shot with on-camera flash, plus environmental shots from DSF, Bistro Neuf, Det Sidste Bureau locations.

### Animation & interaction

- **Easing**: `cubic-bezier(0.2, 0.7, 0.2, 1)` — confident out-curve.
- **Duration**: 140ms (hover), 220ms (transitions), 420ms (page-section reveals).
- **No bouncing.** No spring physics. The brand is composed.
- **Hover state**: text and icons drop to ~55% opacity. Buttons invert (bg ↔ fg).
- **Press state**: scale 0.98, no color change.
- Section entrances: short fade + 8px translate. That's it.

### Borders, radii, shadows

- **Corner radius**: effectively `0`. Buttons may use 2–4px; pills only for tag chips.
- **Borders**: 1px hairline in `--jet-black` or `--border-soft` (#E2E2E2).
- **Shadows**: none in marketing surfaces. `--shadow-menu` only on floating UI (nav dropdowns, tooltips).
- Cards = a hairline border on white over alabaster. No drop-shadow lift.

### Transparency & blur

- Sticky nav: white at 92% with `backdrop-filter: blur(12px)`.
- Otherwise solid surfaces. No frosted-glass card panels.

---

## Iconography

The brandbook does **not** ship an icon system. Decisions for the platform:

- **Default set**: [Lucide](https://lucide.dev) — outline icons, 1.5px stroke, matches the "clean lines and minimalist aesthetics" the brandbook calls for. Load via CDN: `https://unpkg.com/lucide@latest`.
- **The star ★**: the brandbook logotype has a star upper-right. This star is part of the brand vocabulary — use the asterisk-style `★` (Unicode U+2605) sparingly as a "callout" decoration in editorial layouts, or the SVG from the logotype if precision matters.
- **No emoji** — anywhere. The brandbook is silent on emoji; the brand voice rules out playful pictograms.
- **No Unicode flags / arrows in body copy.** Use `→` only inside button labels.
- **Logo lockups**: `logomark_*.svg` is the H-in-spiral. `logotype_*.svg` is the full HINCHELYS wordmark + star. Always one of these four files — never re-traced, re-coloured, or rotated.

> ⚠️ **Flag**: Lucide is a CDN substitution. If you'd like a custom icon set drawn in the brand's contemporary-serif style, that's a separate scope — say the word.

---

## UI Kits

| Kit | Path | Status |
|---|---|---|
| Marketing website | `ui_kits/hinchelys-web/` | Clickable prototype: homepage, virksomheder, foredrag, content hub, kontakt |

Each kit ships with an `index.html` you can open directly, plus React JSX components using **inline styles** (project preference per `LukasRathsach/Hinchely/CLAUDE.md`).

---

## Caveats

1. **Fonts substituted** (EB Garamond + Hanken Grotesk in place of Apple Garamond + Resist Sans). Drop the licensed files in `fonts/` to upgrade.
2. **No real photography yet** — placeholders sit where flash-portraits will go.
3. **LinkedIn voice samples** not yet captured — paste a few posts and I'll tighten the content-fundamentals section.
4. **No brand assets for the three sub-companies** (DSF, Bistro Neuf, Det Sidste Bureau) — their logos/colors are not in the brandbook. Add them and I'll extend the system.
5. **Icons substituted** (Lucide CDN). Easy to swap.
