<!-- AI-CONFIG:START -->
> Shared AI context: read `~/.claude/AI_CONFIG_INDEX.md` first, then this project file. Universal rules and skills live in `~/.claude/`; project-specific context stays here.
<!-- AI-CONFIG:END -->

# Hinchely's Website — Project Rules

## Stack
- Vite + React, React Router v6
- Inline styles only — no CSS framework, no Tailwind, no CSS modules. Hard rule.
- Design tokens live in `src/design-system/` — use them for all colors, spacing, typography.

## Dev commands
- `npm run dev` — start dev server at localhost:5173
- `npm run build` — production build
- `npm run preview` — preview production build

## Verification
After any UI change: run `npm run dev` and verify the change looks correct at localhost:5173 before marking complete.

## Hard project rules
- No Tailwind, no CSS framework, no styled-components, no CSS modules.
- All styling via inline styles + design tokens from `src/design-system/`.
- This is a personal brand site for two founders — tone is authentic and direct, not corporate.
- Do not replace Formspree placeholder IDs (`REPLACE_WITH_FORMSPREE_ID`) — client will provide real IDs.
- Logo files are in `public/assets/` — do not move or rename them.
- Design system reference in `Hinchelys Design System/` — read-only reference, do not delete.

## What to avoid
- Adding CSS classes, Tailwind utilities, or external style libraries.
- Corporate or polished marketing language in copy.
