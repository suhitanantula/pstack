# Changelog

## v2.0.0 — Rotman Course Edition

Major revision. Refocused on the 5Ps of Loop Design as described in Chapter 15 of the book. Designed for Rotman School business design courses.

**Changed:**
- All SKILL files rewritten in Chapter 15 language (Vibes/Lines/Loops, Helix model, EEE Layer, Loop Design vocabulary)
- Root SKILL.md and README.md updated to Rotman course edition framing
- Observer reframed as meta-level reflector (not a per-loop agent): individual practice development + course/methodology improvement loop
- pstack-upgrade simplified for student use
- docs/PSTACK-COINTELLIGENCE.md updated to Chapter 15 co-intelligence framing

**Removed:**
- `pstack-prune` — scope discipline folded into Portfolio skill
- `pstack-artisan` — quality layer not part of core 5Ps
- `cloudflare-pstack` — infrastructure, not course material
- `plugins/` — Codex CLI integration
- `docs/PSTACK-CLOUDFLARE-PORTFOLIO.md`, `docs/PSTACK-CODEX-INTEGRATION.md`, `docs/PSTACK-FUSE-OPTIONS.md`, `docs/PSTACK-OMX-OPERATING-MODEL.md`

**Added:**
- `docs/STARTER-PATHS.md` — 5 ready-to-run entry points for Rotman teams
- `docs/COURSE-GUIDE.md` — faculty and TA guide including Observer at course level, ACP maturity tracking, and facilitation notes per P

## v1.1.1

- **Agent-neutral memory paths**: replaced hardcoded `~/.claude/pstack-memory/` with `~/.pstack/memory/` in `SKILL.md`, `pstack-observer/SKILL.md`, and `pstack-progress/SKILL.md`. Works correctly across Claude Code, Codex CLI, and any future agent. Existing Claude users can migrate memory with `mv ~/.claude/pstack-memory ~/.pstack/memory`.

## v1.1.0

- **Codex CLI support**: pstack now installs as a Codex plugin via `plugins/pstack/.codex-plugin/plugin.json`. Skill markdown duplicated into `plugins/pstack/skills/` for Codex plugin discovery.
- **Claude Code install unchanged**: still installs via `git clone ... ~/.claude/skills/pstack && bash setup` (the gstack pattern). No plugin wrapper — the repo clone IS the install.
- Added `README.md` with install table and 5Ps overview.
- Added `docs/CROSS-AGENT-INSTALL.md` — rationale for cross-agent support and pattern for extending to other AI CLIs.

## v1.0.0

- Initial release — 5Ps AI Exponential Framework (Perceive, Portfolio, Prune, Decide, Perform, Artisan, Progress, Observer) as Claude Code skill stack.
