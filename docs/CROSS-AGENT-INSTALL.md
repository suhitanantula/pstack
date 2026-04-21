# Cross-Agent Install

pstack v1.1.0+

---

## Why

**1. Codex blind-reviews still benefit from 5Ps context.**
When Codex runs a second-opinion review on code that came out of a Perform phase, it should know that "ship it / fix it / ship it again" is intentional — not sloppiness. Without pstack loaded, Codex has no frame for the methodology and will flag scope decisions as technical debt. Loading pstack gives the reviewer the same context the builder had.

**2. The methodology should not be tied to one model vendor.**
pstack is a thinking framework, not a Claude feature. Binding it to `~/.claude/skills/` alone makes it Claude-only. The moment you switch models for a task — cost, capability, policy — you lose the Pod structure. The framework should travel with the work, not with the model.

**3. Users who pair Claude + Codex shouldn't swap playbooks mid-task.**
A typical pairing: Claude Code for orchestration and build (Perform), Codex for code review and refactor (Artisan). If pstack only lives in Claude Code, the Codex pass has no shared vocabulary. The handoff breaks. Both agents need to speak the same P-language for the Pod to function.

---

## How it works — per-agent native install

Different agents have different native install mechanisms. pstack uses each agent's native path rather than forcing one format across all.

### Claude Code — clone + symlink (no plugin wrapper)

Claude Code discovers skills at `~/.claude/skills/*/SKILL.md` by convention. The install is:

```bash
git clone https://github.com/suhitanantula/pstack.git ~/.claude/skills/pstack
bash ~/.claude/skills/pstack/setup
```

The `setup` script symlinks each phase directory (`pstack-perceive/`, `pstack-portfolio/`, etc.) from the repo into `~/.claude/skills/`, matching Claude Code's one-dir-per-skill convention. This matches the pattern used by [gstack](https://github.com/garrytan/gstack) — no plugin manifest required. The repo clone IS the install.

### Codex CLI — plugin

Codex plugins are resolved from `plugins/<plugin-name>/.codex-plugin/plugin.json`. pstack's Codex plugin lives at `plugins/pstack/` in the repo:

```
plugins/pstack/
├── .codex-plugin/plugin.json    # manifest
└── skills/                      # skill copies (duplicated from repo root)
    ├── pstack/SKILL.md
    ├── pstack-perceive/SKILL.md
    └── ...
```

Install via Codex UI: open Codex in any repo → `/plugins` → search "pstack" → install.

Skills are duplicated (not symlinked) into `plugins/pstack/skills/` because Codex plugin install resolves paths relative to the plugin subdirectory, and shipping symlinks through a plugin package is fragile. Keep the duplicates in sync when editing the canonical source (top-level `pstack/` and `pstack-*/` dirs) — or automate via a sync script in a future iteration.

---

## What's shared vs per-agent

| Component | Shared (source of truth) | Per-agent |
|---|---|---|
| Skill markdown content | Top-level `SKILL.md` + `pstack-*/SKILL.md` dirs (canonical) | `plugins/pstack/skills/` (Codex copy) |
| Update check binary | `bin/pstack-update-check` | — |
| Invocation syntax | — | Claude Code: `/pstack`, `/pstack-perceive` · Codex: `$pstack`, `$pstack-perceive` |
| Frontmatter dialect | Standard YAML (`name`, `description`) | Both agents tolerate extra fields; no transform needed for v1.1.0 |
| Install mechanism | — | Claude Code: git clone + setup script · Codex: plugin install |
| Discovery path | — | Claude Code: `~/.claude/skills/` · Codex: resolved by plugin runtime |

---

## Future agents

The same pattern extends to any agent that accepts injected context files. Use the agent's native install path, not a forced one:

- **Gemini CLI** — `~/.gemini/` context directory (clone + symlink, like Claude Code)
- **Cursor** — `.cursor/rules/` or system prompt injection
- **Windsurf** — `.windsurf/rules/`
- **Cline** — `.clinerules/`
- **Copilot** — `.github/copilot-instructions.md` or workspace instructions

Each addition requires only: (a) confirm the agent's discovery path, (b) add a one-step install command to the README (or extend the `setup` script), (c) document the invocation syntax. The skill content does not change.
