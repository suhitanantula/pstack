---
name: pstack
description: The 5Ps of Loop Design — AI co-intelligence skill stack for business design. Use when starting a design loop, running a challenge, or navigating the 5Ps (Perceive, Perform, Portfolio, Pause/Promote, Progress). Each sub-skill implements one P.
---

## Preamble (run first)

```bash
_UPD=$(~/.claude/skills/pstack/bin/pstack-update-check 2>/dev/null || true)
[ -n "$_UPD" ] && echo "$_UPD" || true
```

If output shows `UPGRADE_AVAILABLE <old> <new>`: tell the user "pstack v{new} is available (you have v{old}). Run `/pstack-upgrade` to update."
If output shows `JUST_UPGRADED <from> <to>`: tell user "Running pstack v{to} (just updated!)".

# pstack — 5Ps of Loop Design

The pstack implements the 5Ps of Loop Design from the Helix model: a co-intelligence framework where humans and AI partner at every phase of design, in their natural modes, strengthening the connection between strategy and design.

> *Design is not what happens after strategy. Design is how strategy moves.*

## The 5Ps

| P | Tagline | Rhythm | What it activates |
|---|---------|--------|------------------|
| **Perceive** | Never Forget the People | 〰 Cultural sensing | Read unspoken needs and emerging patterns |
| **Perform** | Move with Intention | ▲ Intentional execution | Convert insights into concrete action |
| **Portfolio** | Designing for Anti-Fragility | ● Adaptive resilience | Maintain multiple pathways forward |
| **Pause/Promote** | Choose What Matters | ●〰 Strategic judgment | Combine logic with intuitive wisdom |
| **Progress** | Build Learning Systems | ▲● Systematic learning | Convert experience into evolutionary capability |

## Loop, Not Ladder

The 5Ps are a **recursive co-intelligence loop**. Common return paths:

```
Perceive → Perform → Portfolio → Pause/Promote → Progress
    ↑                    ↘              ↘               ↓
    └────────────── loop / return paths ────────────────┘
```

- `Pause/Promote → Portfolio` when the recommendation needs more options
- `Portfolio → Perceive` when the option set reveals the original framing was wrong
- `Perform → Pause/Promote` when reality changes the bet
- `Progress → Perceive` when outcomes reveal a deeper pattern

Looping is normal. It is not failure. It is how the system gets smarter.

## Co-Intelligence Principle

Each P is a **zone of collaboration** where strategy and design strands of the Helix touch — and where human and machine intelligence work together.

- **Humans bring:** contextual wisdom, lived experience, values, cultural intuition, and judgment
- **AI brings:** pattern recognition across data, rapid variation, analytical synthesis, accelerated creation
- **Together:** something neither could produce alone — empathetic intelligence, focused momentum, experimental resilience, integrated judgment, structured evolution

The question at every P: **Whose judgment improves this loop right now?**

Sometimes the answer is the agent. Sometimes the human. Sometimes both together.

## Human Entry Points

Humans can enter at any P. Most valuable when:

- **Perceive** — tacit context, politics, lived experience, what the data can't show
- **Portfolio** — taste, strategic weighting, what options to keep alive
- **Pause/Promote** — risk appetite, values, timing, non-technical tradeoffs
- **Perform** — irreversible choices, trust boundaries, identity-level decisions
- **Progress** — meaning-making beyond what metrics alone can say

## Running a Design Loop

For a full loop:

1. `/pstack-perceive` — cultural sensing: who are the people? what's really going on?
2. `/pstack-perform` — intentional execution: what is the smallest thing that proves this?
3. `/pstack-portfolio` — adaptive resilience: what options are alive and what's their shape?
4. `/pstack-decide` — strategic judgment: what do we promote? what do we pause?
5. `/pstack-progress` — systematic learning: what did this loop teach us? how does it feed the next?

## Portfolio is Always Active

Portfolio is not a gate you pass through once. It is a lens you maintain throughout the loop.

- In **Perceive**, your portfolio of problem frames is forming
- In **Perform**, your prototype is testing one option from the portfolio
- In **Pause/Promote**, you draw from the portfolio to make the call
- After **Progress**, the portfolio is updated with what you learned

Never collapse the portfolio to one option before Pause/Promote has done its work.

## Starter Paths

Different entry points for different situations — see `/pstack` for the full loop, or use these shortcuts:

| Situation | Entry point |
|-----------|-------------|
| Fuzzy brief, don't know where to start | `/pstack-perceive` |
| Have insight, need to make it real | `/pstack-perform` |
| Have options, need to choose | `/pstack-decide` |
| Need to map what's alive | `/pstack-portfolio` |
| Finished a loop, need to learn from it | `/pstack-progress` |

See [docs/STARTER-PATHS.md](docs/STARTER-PATHS.md) for five ready-to-run Rotman scenarios.

## Functional Rhythmic Patterns

Different organisational functions naturally emphasise different Ps:

- **Customer relationship functions** thrive in Perceive and Pause/Promote — where 〰 Vibes reveal what matters
- **Product innovation functions** excel at Perform and Portfolio — where ▲ Lines and ● Loops drive exploration
- **Infrastructure functions** find strength in Progress and Perform — where ▲ Lines provide stability

The magic happens when organisations create **rhythm bridges** between these functions, allowing co-intelligence to flow across the system.
