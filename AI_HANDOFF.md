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

Last updated: 2026-05-15

---

## Project snapshot

- Purpose: Simple public website for Hinchely.
- Stack: Not chosen yet; keep it simple unless there is a concrete reason not to.
- Entry points: Not created yet.

## Hard-won context

- User wants a simple website, not a complex app or over-engineered setup.

## Roadmap

- [ ] Decide the site structure: pages/sections, navigation, and primary call-to-action.
- [ ] Gather final content: headline, short copy, services/products, contact details, and any real images/assets.
- [ ] Choose the simplest fitting implementation: static HTML/CSS or a very small React/Vite site.
- [ ] Build the first complete version with responsive desktop/mobile layout.
- [ ] Test locally: visual pass, mobile sizing, links/forms, performance, and accessibility basics.
- [ ] Deploy and connect the domain.
