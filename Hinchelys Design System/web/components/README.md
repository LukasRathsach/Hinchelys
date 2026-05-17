# Web components

Atomic JSX components for the HINCHELYS web platform. **Inline styles only** (per project preference). Tokens come from CSS custom properties defined in `../../colors_and_type.css` — import that stylesheet once at the root of your app and these components inherit.

## Files

| File | Purpose | Section in patterns.md |
|---|---|---|
| `tokens.js` | JS-side mirror of the CSS variables | — |
| `Button.jsx` | Primary / ghost / link variants | global |
| `Eyebrow.jsx` | Small tracked uppercase label | global |
| `Logo.jsx` | Logomark + logotype, black/white | global |
| `Nav.jsx` | Sticky top nav with blur | §1 |
| `Hero.jsx` | Page-opening unit | §2 |
| `SectionHeader.jsx` | Eyebrow + heading + kicker | §3 |
| `CompanyCard.jsx` | Hover-inverting card for the three businesses | §4 |
| `StatStrip.jsx` | Row of large serif numbers | §9 |
| `QuoteBand.jsx` | Full-bleed dark quote band | §8 |
| `EmailSignup.jsx` | Single-row signup section | §10 |
| `Footer.jsx` | 4-column editorial footer | §11 |
| `PostCard.jsx` | Content-hub list row | §7 |
| `PressItem.jsx` | Wordmark press credit | §6 |

## Usage from Claude Code

1. Open `../patterns.md` and pick the section you're building.
2. Open the corresponding component file here for the API.
3. Open `../../colors_and_type.css` for any token you need.
4. Drop the JSX into your route. Inline styles, no compile step beyond the project's existing toolchain.

These components are **reference implementations**, not a published library. Adapt freely — but if you change visual rules, update `patterns.md` so future Claude sessions stay aligned.

## Not yet included

- Mobile menu overlay (described in `patterns.md §1`, not yet implemented).
- Press-kit download (`patterns.md §6`).
- Booking-form full implementation (`patterns.md §5`) — currently lives inside Foredrag page composition.
- Filter chips on content hub (`patterns.md §7`).
