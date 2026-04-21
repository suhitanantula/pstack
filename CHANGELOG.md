# Changelog

## v1.1.0

- **Codex CLI support**: pstack now installs as a Codex plugin via `plugins/pstack/.codex-plugin/plugin.json`. Skill markdown duplicated into `plugins/pstack/skills/` for Codex plugin discovery.
- **Claude Code install unchanged**: still installs via `git clone ... ~/.claude/skills/pstack && bash setup` (the gstack pattern). No plugin wrapper — the repo clone IS the install.
- Added `README.md` with install table and 5Ps overview.
- Added `docs/CROSS-AGENT-INSTALL.md` — rationale for cross-agent support and pattern for extending to other AI CLIs.

## v1.0.0

- Initial release — 5Ps AI Exponential Framework (Perceive, Portfolio, Prune, Decide, Perform, Artisan, Progress, Observer) as Claude Code skill stack.
