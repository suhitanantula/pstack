# Changelog

## v1.1.0

- **Cross-agent support**: pstack now installs as a Claude Code plugin (via `.claude-plugin/`) and a Codex CLI plugin (via `plugins/pstack/.codex-plugin/`). Same skill content, per-agent manifests. See `docs/CROSS-AGENT-INSTALL.md`.
- Added `README.md` with install table and 5Ps overview.
- Skill markdown duplicated into `plugins/pstack/skills/` for Codex plugin discovery. Top-level `skills/` remains canonical source.

## v1.0.0

- Initial release — 5Ps AI Exponential Framework (Perceive, Portfolio, Prune, Decide, Perform, Artisan, Progress, Observer) as Claude Code skill stack.
