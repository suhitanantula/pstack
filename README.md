# pstack

The 5Ps AI Exponential Framework as a portable skill stack — Perceive, Perform, Portfolio, Pause-Promote, Progress, with Prune, Artisan, and Observer as cross-cutting roles. Load the skill for the phase you're in.

Works across Claude Code and Codex CLI. Future agents pluggable via [docs/CROSS-AGENT-INSTALL.md](docs/CROSS-AGENT-INSTALL.md).

## Install

| Agent | Install | Activation |
|---|---|---|
| Claude Code | `git clone https://github.com/suhitanantula/pstack.git ~/.claude/skills/pstack && bash ~/.claude/skills/pstack/setup` | `/pstack`, `/pstack-perceive`, etc. |
| Codex CLI | Clone repo → `/plugins` → Search "pstack" → Install | `$pstack`, `$pstack-perceive`, etc. |

After install, skills are available immediately in any session. Run `/pstack` (or `$pstack`) for the framework overview, or jump to a phase skill.

## The 5Ps

1. **Perceive** — strategic sensing
2. **Perform** — move with intention; performance architecture
3. **Portfolio** — anti-fragile portfolio design
4. **Pause-Promote** — choose what matters; filtering architecture and discernment
5. **Progress** — build learning systems
6. **Prune** — scope discipline across the loop
7. **Artisan** — quality and design layer
8. **Observer** — meta-awareness across runs

Invoke each P as a skill. Skip phases only when genuinely trivial. Never skip Perceive on new work.

## Update

- Claude Code: `/pstack-upgrade` (auto-detects git remote and pulls)
- Codex CLI: reinstall the plugin when a new version is announced

## Rationale

See [docs/CROSS-AGENT-INSTALL.md](docs/CROSS-AGENT-INSTALL.md) for why pstack is cross-agent and how the pattern extends to other AI CLIs.

See [docs/PSTACK-OMX-OPERATING-MODEL.md](docs/PSTACK-OMX-OPERATING-MODEL.md) for the recommended split between `pstack` as the strategic layer and `OMX` as the execution layer.

See [docs/PSTACK-COINTELLIGENCE.md](docs/PSTACK-COINTELLIGENCE.md) for the loop semantics, human entry points, and agent guidance that make `PSTAC` a co-intelligence system rather than a linear workflow.

See [docs/PSTACK-CODEX-INTEGRATION.md](docs/PSTACK-CODEX-INTEGRATION.md) for notes on bringing the stronger NanoClaw-style 5Ps approach deeper into Codex and `pstack`.

Artifact templates for the `Strategic Brief`, `Execution Plan`, and `Execution Evidence Pack` live under [docs/templates](docs/templates).

## License

MIT
