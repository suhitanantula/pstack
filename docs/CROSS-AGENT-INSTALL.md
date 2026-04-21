# Cross-Agent Install

pstack v1.1.0+

---

## Why

**1. Codex blind-reviews still benefit from 5Ps context.**
When Codex runs a second-opinion review on code that came out of a Perform phase, it should know that "ship it / fix it / ship it again" is intentional — not sloppiness. Without pstack loaded, Codex has no frame for the methodology and will flag scope decisions as technical debt. Loading pstack gives the reviewer the same context the builder had.

**2. The methodology should not be tied to one model vendor.**
pstack is a thinking framework, not a Claude plugin. Binding it to `~/.claude/skills/` alone makes it a Claude feature. The moment you switch models for a task — cost, capability, policy — you lose the Pod structure. The framework travels with the work, not with the model.

**3. Users who pair Claude + Codex shouldn't swap playbooks mid-task.**
A typical pairing: Claude Code for orchestration and build (Perform), Codex for code review and refactor (Artisan). If pstack only lives in Claude Code, the Codex pass has no shared vocabulary. The handoff breaks. Both agents need to speak the same P-language for the Pod to function.

---

## How it works

The core insight from the [caveman pattern](https://github.com/JuliusBrussee/caveman): skill content is just markdown. The same SKILL.md files that Claude Code reads can be placed — or linked — anywhere another agent looks for context. What differs per agent is only:

1. **How the agent discovers the files** — Claude Code reads `~/.claude/skills/<name>/SKILL.md`; Codex reads files placed in `~/.codex/prompts/` or resolved via a Codex plugin; other agents have their own conventions.
2. **How the user invokes the skill** — slash command, dollar-sign command, system prompt injection, or config-file reference.
3. **Any frontmatter dialect** — some agents parse YAML frontmatter; others ignore it; others require a different schema.

The approach: one canonical copy of the skill content (the repo), plus per-agent manifests that map that content into each agent's discovery path. This repo follows [caveman](https://github.com/JuliusBrussee/caveman)'s dual-manifest pattern:

- Top-level `skills/` dir + `.claude-plugin/plugin.json` — for Claude Code
- `plugins/pstack/skills/` dir + `plugins/pstack/.codex-plugin/plugin.json` — for Codex CLI

Skills are duplicated (not symlinked) between the two paths because Codex plugin install resolves paths relative to the plugin subdirectory. Keep them in sync when editing — or automate via a sync script in a future iteration.

---

## What's shared vs per-agent

| Component | Shared (source of truth) | Per-agent |
|---|---|---|
| Skill markdown content | Top-level `skills/` (canonical) | `plugins/pstack/skills/` (Codex copy) |
| Update check binary | `bin/pstack-update-check` | — |
| Invocation syntax | — | Claude Code: `/pstack`, `/pstack-perceive` · Codex: `$pstack`, `$pstack-perceive` |
| Frontmatter dialect | Standard YAML (`name`, `description`) | Agents requiring different schema get a transform at install time |
| Discovery path | — | Claude Code: `~/.claude/skills/` · Codex: resolved via plugin install |
| Plugin manifest | — | Claude Code: `.claude-plugin/plugin.json` · Codex: `plugins/pstack/.codex-plugin/plugin.json` |

---

## Future agents

The same pattern extends to any agent that accepts injected context files:

- **Gemini CLI** — `~/.gemini/` context directory
- **Cursor** — `.cursor/rules/` or system prompt injection
- **Windsurf** — `.windsurf/rules/`
- **Cline** — `.clinerules/`
- **Copilot** — `.github/copilot-instructions.md` or workspace instructions

Each addition requires only: (a) confirm the agent's discovery path, (b) write a one-step install that links or copies the skill files there, (c) document the invocation syntax. The skill content does not change.
