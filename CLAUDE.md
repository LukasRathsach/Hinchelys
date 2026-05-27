<!-- AI-CONFIG:START -->
> Shared AI context: read `~/.claude/AI_CONFIG_INDEX.md` first, then this project file. Universal rules and skills live in `~/.claude/`; project-specific context stays here.
<!-- AI-CONFIG:END -->

# About Lukas Rathsach

This file is maintained by the AI across sessions. Update it when new things are learned about how Lukas works, what he values, or what to avoid.

---

## Who he is

Solo developer. Builds his own tools — currently a Solana paper trading dashboard + Chrome extension (Posture). Uses both Claude Code and Codex. Comfortable in the terminal and VS Code. Communicates in Danish; code and file names are in English. Only uses one MacBook.

## How he works

- Prefers direct, short responses. No filler, no trailing summaries.
- Doesn't need things explained step by step — give conclusions, not narration.
- Makes decisions quickly. If something doesn't have value, remove it — don't ask, just do it.
- Trusts the AI to make judgment calls. Redirects if something is wrong.
- Wants to understand *why*, not just *what* — explain the reasoning when it's non-obvious.

## Workflow preferences

- **No auto-push to project repos.** Always local first, push only when explicitly asked. Exception: `~/.claude` (ai-config) is pushed automatically by `/end-chat`.
- Skills should be applied proactively — don't wait to be asked.
- Expects AI assistants to look for shared ai-config and skill context in `~/.claude/` when a project references it, even if the current tool does not auto-load every Claude skill.
- If a skill has no real value or duplicates another, remove it immediately without asking.
- All universal skills live in `~/.claude/skills/` — not in project folders.
- Prefers clean separation: user-level config in `~/.claude/`, project-specific rules in the project.
- Run `/end-chat` at the end of every session.

## Technical preferences

- Inline styles in React (no CSS framework, no Tailwind) — *this project preference, not universal*
- Clean, minimal code. No unnecessary abstractions, no premature generalization.
- No comments unless the *why* is genuinely non-obvious to a future reader.
- Test locally before committing. Commit messages follow conventional commits style.

## What to avoid

- Long preambles before doing the actual work.
- Asking clarifying questions when a reasonable judgment call can be made.
- Re-explaining what was just done.
- Adding features or handling edge cases that weren't asked for.

---

## Hard rules (always)

- **No `git push` without being explicitly asked** — every session. Authorization from a previous session does not carry over.
- No emojis in code or responses unless explicitly asked.
- No trailing summaries after completing work — the user can see the diff.
- Default to writing no comments in code. Only add one when the *why* is non-obvious.
- Do not create planning or analysis documents unless asked.

## Skills

Apply relevant skills proactively — don't wait to be asked. Skills live in `~/.claude/skills/`.

Project-specific skills may also live in `<project>/.claude/skills/`. Use those only for that project. If an assistant does not automatically index Claude skills (for example Codex in some sessions), it should still inspect `~/.claude/skills/*/SKILL.md` and relevant project skill files manually when the project or user points to this ai-config.

## Context files

- `AI_CONFIG_INDEX.md` is the map for shared ai-config, skill locations, and known project roots.
- Read `ME.md` first for user preferences.
- Read the active project's `AGENTS.md` or `CLAUDE.md` before work.
- If the project points to `AI_HANDOFF.md`, read it before changing code.
- Keep universal rules in `~/.claude/`; keep project-specific rules in the project.
- Do not duplicate full architecture or roadmap context into global files.

| Skill | Invoke when |
|---|---|
| `ui-ux-pro-max` | Any visual change: component, layout, color, spacing, interaction |
| `react-best-practices` | Touching any React component — waterfalls, re-renders, bundle size |
| `supabase-postgres-best-practices` | Any Supabase query, schema, RLS policy, or upsert |
| `senior-security` | Auth flows, token storage, message passing, user-facing input |
| `code-reviewer` | Final pass before marking a non-trivial task complete |
| `senior-architect` | Structural change: new file, new data flow, cross-context refactor |
| `senior-backend` | API auth, RPC functions, data persistence layers |
| `javascript-mastery` | Non-trivial vanilla JS — closures, prototype patching, async, event listeners |
| `webapp-testing` | Verifying a UI feature end-to-end after implementation |
| `skill-creator` | Creating or improving a skill |

## Response style

- Short and direct. One sentence per update while working.
- Use markdown links for file references: `[file.ts](src/file.ts)`
- Match response length to task complexity.

---

## Project-specific rules

<!-- Add project-specific rules here -->
