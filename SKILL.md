---
name: pstack
description: The 5Ps AI Exponential Framework — skill stack for multi-agent orchestration. Use when running a Pod, starting a sprint, or applying the 5Ps (Perceive, Portfolio, Pause-Promote, Perform, Progress) with Prune, Artisan, and Observer. Each sub-skill implements one P.
---

## Preamble (run first)

```bash
_UPD=$(~/.claude/skills/pstack/bin/pstack-update-check 2>/dev/null || true)
[ -n "$_UPD" ] && echo "$_UPD" || true
```

If output shows `UPGRADE_AVAILABLE <old> <new>`: tell the user "pstack v{new} is available (you have v{old}). Run `/pstack-upgrade` to update."
If output shows `JUST_UPGRADED <from> <to>`: tell user "Running pstack v{to} (just updated!)".

# pstack — 5Ps AI Exponential Framework

The pstack is a set of composable skills that implement the 5Ps AI Exponential Framework. Each skill corresponds to one P — one agent role in the Pod.

## The Full Pod (8 Roles)

| P | Skill | Role |
|---|-------|------|
| Perceive | `pstack-perceive` | Research Agent — senses, probes, scrapes, monitors |
| Portfolio | `pstack-portfolio` | Options Agent — generates scenarios, builds fast prototypes |
| Pause-Promote | `pstack-decide` | Strategy Agent — decides, prioritises, kills options |
| Perform | `pstack-perform` | Build Agent — codes, integrates, ships |
| Progress | `pstack-progress` | Learn Agent — tracks, measures, feeds back |
| Prune | `pstack-prune` | Scope discipline — decides what not to build |
| Artisan | `pstack-artisan` | Design Agent — polishes, ensures quality |
| Observer | `pstack-observer` | Meta Agent — watches patterns, improves the system |

## Practice Tracking (ACP)

Each P develops through use. Track your practice maturity:

| Level | Name | Signal |
|-------|------|--------|
| 1 | Scaffolding | You can run the skill with prompting |
| 2 | Routine | You invoke it naturally at the right moment |
| 3 | Memory | You notice patterns across sprints |
| 4 | Growth | Your application of the P has visibly improved |
| 5 | Emergence | The P produces insights you didn't expect |

**Your current levels** are tracked in `~/.pstack/memory/acp-levels.md` (agent-neutral path — works across Claude Code, Codex, and any other CLI).
Update after each sprint via `/pstack-progress`.

The Observer (`/pstack-observer`) monitors ACP levels and flags:
- Ps you're skipping (common: Prune, Progress)
- Ps stuck at Level 1 (you use them but don't grow)
- Ps ready to level up (pattern detected across 3+ sprints)

## How to Use

Load the relevant sub-skill for the phase you're in. Each skill is standalone but designed to chain:

```
Perceive → Portfolio → Decide → Perform → Progress
                              ↑
                           Prune
              ↓                    ↓
           Artisan             Observer
```

## Running a Sprint

For a full sprint cycle, run in order:
1. `pstack-perceive` — what is the problem? What can the model do?
2. `pstack-portfolio` — build 3 prototypes fast
3. `pstack-decide` — kill options, advance one
4. `pstack-prune` — is scope correct? Cut before building
5. `pstack-perform` — ship the thing
6. `pstack-artisan` — polish and quality check
7. `pstack-progress` — what did we learn?
8. `pstack-observer` — what needs to change in the Pod itself?

## Sub-Skills

Each P is implemented as a standalone skill:
- `pstack-perceive` — Research/Perception phase
- `pstack-portfolio` — Options/Prototyping phase
- `pstack-decide` — Decision phase
- `pstack-perform` — Build/Ship phase
- `pstack-progress` — Learning phase
- `pstack-prune` — Scope reduction discipline
- `pstack-artisan` — Quality/design layer
- `pstack-observer` — Meta-awareness and system improvement

## Key Principle

**Prototype before you present. If you can't prototype it, it's not ready.**

The Portfolio skill is where the shift happens. Traditional methodology presents options as documents. The pstack Portfolio builds options as working prototypes — even rough ones. The decision is made on what works, not what was described.

## Portability

The pstack works with any agent that can:
- Use file system and web tools (read, write, exec, web_fetch)
- Run sub-agents for parallel work
- Access memory and context files

All 8 skills are self-contained. Load the one you need.
