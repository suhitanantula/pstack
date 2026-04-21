# pstack + OMX Operating Model

## Thesis

`pstack` and `OMX` are not competing systems.

They operate at different layers:

- `pstack` is the strategic layer. It decides what problem is real, what options exist, what gets killed, what bet is being made, and what was learned.
- `OMX` is the execution layer. It decides how work is routed, which agents run, how state is tracked, how verification is enforced, and when execution is complete.

The clean mental model is:

`pstack` answers `why`, `what`, and `what not`.

`OMX` answers `how`, `who`, `in what order`, and `how do we prove it worked`.

That makes `pstack` the parent operating framework and `OMX` an execution substrate that can sit beneath it.

## Authority Boundary

The boundary must stay explicit or the two systems will fight each other.

### `pstack` owns

- Problem framing
- Capability sensing
- Option generation
- Decision logging
- Scope cuts
- Success criteria at the bet level
- Learning and cross-sprint pattern analysis

### `OMX` owns

- Mode selection for execution (`solo`, `ralplan`, `ralph`, `team`)
- Agent routing and staffing
- Task decomposition and sequencing
- Runtime state and continuation
- Verification loops
- Completion discipline

### Shared but not co-owned

- `pstack` may suggest staffing shape, but it does not own worker orchestration.
- `OMX` may surface strategic blockers, but it does not own product or portfolio decisions.

If both layers try to own routing, prioritisation, and phase changes, the result is process contention.

## Layer Contract

The interface between the two systems is a small set of explicit artifacts.

### Artifact 1: Strategic Brief

Produced by `pstack`, consumed by `OMX`.

Minimum contents:

- Problem statement
- Actual problem behind the brief
- Chosen bet
- Key assumption
- Kill list
- Scope box
- Definition of done
- Review point
- Constraints

Suggested shape:

```md
# Strategic Brief

## Problem
## Actual Problem
## Chosen Bet
## Key Assumption
## Kill List
## Scope Box
## Definition of Done
## Constraints
## Review Point
```

This is the minimum contract that lets execution start without dragging strategy arguments into the build loop.

### Artifact 2: Execution Plan

Produced by `OMX` after receiving the Strategic Brief.

Minimum contents:

- Recommended execution mode
- Staffing / agent allocation
- Ordered work steps
- Verification plan
- Escalation conditions

This artifact translates strategic intent into executable work without rewriting the strategy.

### Artifact 3: Execution Evidence Pack

Produced by `OMX`, consumed by `pstack Progress` and `pstack Observer`.

Minimum contents:

- What shipped
- What changed
- Verification evidence
- Known gaps
- Scope pressure encountered
- Unexpected findings
- Suggested strategic revisions

This is what lets `Progress` and `Observer` learn from actual delivery instead of post-hoc opinion.

## Control Transfer Rules

Control should move between layers only at specific moments, but these transfers are loopable rather than one-way.

### `pstack -> OMX`

Transfer occurs when:

- `Perceive` has reframed the problem enough to act
- `Portfolio` has generated viable paths or prototypes
- `Decide` has chosen a path
- `Prune` has cut scope to a shippable unit

At this point, strategy is "good enough for execution" and `OMX` takes over for the next loop through reality.

### `OMX -> pstack`

Transfer returns upward when:

- A blocker invalidates the original bet
- New evidence collapses the chosen assumption
- Scope pressure forces a non-local product decision
- Execution completes and learning needs to be captured

`OMX` should not make these strategy changes internally. It should surface them back to `Decide`, `Prune`, `Progress`, `Observer`, or all the way to `Perceive` if the original framing is breaking.

## Loop Semantics

The `pstack -> OMX` relationship is not a one-way handoff.

It is a repeated exchange:

- `pstack` frames and recommends
- `OMX` executes and verifies
- execution evidence re-enters `pstack`
- the next move is chosen from a better map

Common loop paths:

- `Decide -> Portfolio`
- `Portfolio -> Perceive`
- `Perform/OMX execution -> Decide`
- `Progress -> Perceive`

This matters because the point is not to reach "final certainty" before execution.
The point is to improve the quality of the next bet quickly.

## Human Entry Points

The human may enter at any P, not just at final approval.

Useful entry points include:

- `Perceive` when tacit context or political reality is missing
- `Portfolio` when taste or weighting matters
- `Decide` when risk appetite or business judgment matters
- `Perform` when execution touches irreversible, trust, or identity-level choices
- `Progress` and `Observer` when outcomes need interpretation, not just reporting

The co-intelligence question is:

`Whose judgment improves this loop right now?`

Sometimes that is the agent alone.
Sometimes it is the human.
Sometimes it is the pair together.

## Phase Mapping

The practical mapping is straightforward.

| `pstack` phase | Primary output | `OMX` role |
| --- | --- | --- |
| `Perceive` | reframed problem, new signals | wait / consume context |
| `Portfolio` | options, rough prototypes | optional prototype execution support |
| `Decide` | recommended next bet, parameters, kill list | wait for recommendation and review |
| `Prune` | reduced scope, ship boundary | prepare execution path |
| `Perform` | build intent | execute via `solo`, `ralph`, or `team` |
| `Artisan` | polish criteria | run refinement and QA loops |
| `Progress` | outcome and lessons | provide evidence pack |
| `Observer` | systemic recommendations | provide cross-run runtime evidence |

Important detail: `Perform` is where the frameworks touch most directly, but `Perform` still does not replace `OMX`. It sets execution intent; `OMX` performs the execution mechanics. If execution weakens the current recommendation, the loop should return upward instead of pretending the chosen path is still correct.

## Recommended Operating Sequence

For a normal sprint or task:

1. `pstack Perceive`
2. `pstack Portfolio`
3. `pstack Decide`
4. `pstack Prune`
5. hand off Strategic Brief to `OMX`
6. `OMX` selects the execution lane and runs delivery
7. `OMX` emits an Execution Evidence Pack
8. `pstack Progress`
9. `pstack Observer`

This keeps strategic thought and execution discipline separate without creating a gap between them, but the sequence should be treated as the most common loop, not the only legal path.

## Decision Rules

### When `pstack` should stay active

- The problem is still being reframed
- Options are still open
- Scope is still too large
- The team is arguing about what to build
- New evidence changes the bet
- Human judgment would materially improve the current recommendation

### When `OMX` should take over

- A next bet has been recommended clearly enough
- The kill list is explicit
- The scope box is small enough to ship
- Verification expectations are clear

### When execution must stop and escalate upward

- The current path no longer proves the original bet
- The requested work exceeds the scope box
- Multiple valid directions reopen
- A blocker requires changing the success criteria
- Human judgment is needed before the next loop can responsibly continue

## Failure Modes

### 1. `pstack` stays in control too long

Symptom:
endless sensing, option generation, and discussion without shipping.

Correction:
force `Decide` and `Prune`; require a Strategic Brief before more ideation, but preserve enough of the portfolio to revisit if reality changes.

### 2. `OMX` takes over too early

Symptom:
excellent execution on a badly framed problem.

Correction:
send work back to `Perceive`, `Portfolio`, or `Decide` instead of improving the wrong build.

### 3. `OMX` starts making strategic decisions

Symptom:
agent routing turns into product strategy by accident.

Correction:
limit `OMX` to execution choices and escalate bet changes upward.

### 4. `pstack` starts dictating execution topology

Symptom:
the strategic layer tries to micromanage teams, tools, and runtime loops.

Correction:
let `pstack` express constraints and desired speed/quality, then let `OMX` choose the lane.

## Practical Repository Contract

If this layering is operationalised in a repo, keep the contract small.

Recommended files:

- `docs/strategy/strategic-brief.md`
- `.omx/plans/execution-plan-*.md`
- `.omx/state/...` and verification logs
- `docs/strategy/execution-evidence-*.md` or equivalent summary artifact

Starter templates live in:

- `docs/templates/strategic-brief-template.md`
- `docs/templates/execution-plan-template.md`
- `docs/templates/execution-evidence-pack-template.md`

Avoid building a giant meta-framework before the handoffs are working in plain markdown.

## What This Model Enables

With this split:

- `pstack` can sit above `OMX`, Codex native subagents, or other execution engines
- `OMX` can remain focused on throughput and verification without pretending to be the strategic brain
- `Observer` can improve the system over time because it receives actual execution evidence
- the same strategic language can survive tool changes underneath

That is the real value of the stack: strategy remains stable while execution tooling can change.

## Bottom Line

Treat `pstack` as the governing thinking model.

Treat `OMX` as the execution substrate.

The systems compose well if the handoff is explicit:

- `pstack` decides the bet
- `OMX` executes the bet
- `pstack` learns from the result

Without that boundary, they overlap.
With it, they reinforce each other.
