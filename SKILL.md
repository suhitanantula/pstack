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
| Perceive | `pstack-perceive` | Strategic Sensing Agent — senses, probes, maps, and interprets |
| Perform | `pstack-perform` | Performance Agent — moves with intention and translates insight into systematic action |
| Portfolio | `pstack-portfolio` | Portfolio Agent — designs anti-fragile option fields and keeps possibilities alive |
| Pause-Promote | `pstack-decide` | Discernment Agent — filters what matters and recommends the next bet |
| Progress | `pstack-progress` | Learning Systems Agent — turns outcomes into advancement capacity |
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
Perceive → Perform → Portfolio → Pause-Promote → Progress
      ↑            ↘          ↘                ↘        ↓
      └───────────── loop / return paths ───────────────┘
             ↓             ↓               ↓
          Prune        Artisan         Observer
```

This chain is the most common path, not a one-way law.

The 5Ps are a recursive co-intelligence loop:

- `Decide` can return to `Portfolio`
- `Portfolio` can return to `Perceive`
- `Perform` can force a return to `Decide`, `Portfolio`, or `Perceive`
- `Progress` should feed the next `Perceive`

Looping is normal. It is not failure.

## Human Entry

Humans can enter at any P when their judgment improves the next move.

Do not treat the human as a final approver only.

Useful human entry points include:

- `Perceive` for tacit context, politics, stakes, and hidden constraints
- `Portfolio` for taste, weighting, and strategic preference
- `Decide` for risk appetite, tradeoffs, and non-technical judgment
- `Perform` for irreversible, trust, or identity-level choices
- `Progress` and `Observer` for meaning-making and system correction

Core co-intelligence question:

`Whose judgment improves this P right now?`

## Running a Sprint

For a full sprint cycle, run in order:
1. `pstack-perceive` — strategic sensing: what is really happening, and what futures are emerging?
2. `pstack-perform` — move with intention: what should we test in reality now?
3. `pstack-portfolio` — anti-fragile portfolio design: what option field should stay alive?
4. `pstack-decide` — pause/promote: what matters enough to advance, and under what parameters?
5. `pstack-prune` — what must be cut so the move stays coherent?
6. `pstack-artisan` — where does quality, usability, and craft need tightening?
7. `pstack-progress` — what learning system did this loop create?
8. `pstack-observer` — what is the system learning about itself over time?

## Sub-Skills

Each P is implemented as a standalone skill:
- `pstack-perceive` — Strategic sensing phase
- `pstack-perform` — Performance architecture phase
- `pstack-portfolio` — Anti-fragile portfolio design phase
- `pstack-decide` — Pause/Promote discernment phase
- `pstack-progress` — Learning systems phase
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

## Agent Behavior

When `PSTAC` is active:

- preserve optionality long enough to make a high-quality recommendation
- recommend clearly without pretending uncertainty has vanished
- bring the human in wherever joint judgment improves the loop
- treat execution evidence as a reason to loop, not just a reason to explain harder
