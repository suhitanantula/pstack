# PSTAC + Codex Integration Notes

## Purpose

This note captures what `PSTAC` implies for a Codex-native implementation after reading:

- `The Helix Moment` 5Ps / co-intelligence chapters
- the local NanoClaw 5Ps implementation
- the existing `pstack` portable-skill implementation

The question is not:

`Can Codex run PSTAC at all?`

It clearly can.

The question is:

`How do we bring the stronger NanoClaw-style 5Ps approach deeper into Codex and pstack without losing portability?`

## What NanoClaw Adds

The NanoClaw 5Ps implementation demonstrates several qualities that the current `pstack` surface only partially expresses:

1. **Standing surface, not one-shot invocation**
   The 5Ps agent exists as an ongoing strategic intelligence presence rather than a single command.

2. **Persistent group context**
   The system keeps working memory, conversation continuity, and per-group instructions alive across sessions.

3. **Role-oriented swarm behavior**
   The framework is embodied as multiple cooperating roles rather than one context pretending to be all Ps at once.

4. **Async interaction**
   Work can continue, send updates, pause, resume, and respond as new signals arrive.

5. **Operational co-intelligence**
   Human participation is built into the runtime surface, not treated as a late-stage exception.

These are not cosmetic features. They move `PSTAC` from a good methodology into an operating pattern.

## What Codex Already Has

Codex already has primitives that can support a deeper PSTAC implementation:

- native subagents
- explicit role specialization
- local file artifacts
- plans and verification loops
- short progress updates during execution
- strong repo inspection and code execution abilities

What Codex lacks relative to NanoClaw is not intelligence. It is mainly:

- persistent conversational runtime by default
- built-in multi-party messaging surface
- first-class per-P memory/state conventions

So the right move is not to clone NanoClaw exactly.
It is to import the useful operating ideas into Codex-native surfaces.

## Recommended Deep Integration

### 1. Treat PSTAC as a standing doctrine, not only a skill menu

Current `pstack` works as composable skill invocations.

Deeper integration means Codex should carry these defaults whenever `PSTAC` is active:

- assume loops are normal
- preserve portfolios longer
- ask `whose judgment improves this P right now?`
- bring the human in at any P when required
- treat `Progress` and `Observer` as first-class, not optional afterthoughts

This is doctrinal, not infrastructural, and should live in the skill bodies as well as the docs.

### 2. Add per-P handshake templates

For each P, Codex should have a concrete human/AI handshake pattern.

Example:

- `Perceive`
  - AI: gather signals, contradictions, weak patterns
  - Human: supply tacit context, politics, stakes, what matters
- `Portfolio`
  - AI: build and compare live options
  - Human: weight taste, preference, strategic fit
- `Decide`
  - AI: recommend the next bet and expose the parameters
  - Human: adjust for risk appetite and irreversible consequences
- `Perform`
  - AI: execute at speed inside boundaries
  - Human: step in when values, identity, or trust are on the line
- `Progress`
  - AI: summarize outcomes and patterns
  - Human: interpret what "better" means

This is one of the easiest high-value additions to `pstack`.

### 3. Formalize phase artifacts as persistent memory surfaces

Codex does not need NanoClaw's Telegram runtime to become more PSTAC-native.
It needs stronger artifact discipline.

Recommended file surfaces:

- `perceive-output.md`
- `portfolio.md`
- `decide-log.md`
- `perform-notes.md`
- `progress-log.md`
- `observer-notes.md`

These can live under a repo-local folder or `.omx/`/project-specific strategy folder.

The point is not bureaucratic documentation.
The point is to let future loops start from accumulated intelligence rather than fresh amnesia.

### 4. Use subagents as live portfolio machinery

NanoClaw shows the value of multiple cooperating roles.

For Codex, the clearest analogue is:

- spawn parallel subagents to build or analyze distinct portfolio options
- keep the main agent as the co-intelligence conductor
- synthesize the options into a visible portfolio
- recommend the next bet without erasing the alternatives

This is where Codex can become more NanoClaw-like without needing a bot runtime.

### 5. Keep the human visible throughout execution

The integration should resist the temptation to treat the human only as:

- approver
- blocker remover
- final reviewer

The better behavior is:

- invite human meaning into `Perceive`
- invite preference into `Portfolio`
- invite judgment into `Decide`
- invite values and trust into `Perform`
- invite interpretation into `Progress`

That is the co-intelligence move.

### 6. Add Observer and Progress as default closure for non-trivial work

The current failure mode in many agent systems is:

- explore
- plan
- execute
- stop

NanoClaw and the Helix material point toward a better close:

- what changed in the map?
- what did reality invalidate?
- what portfolio should exist next time?
- what did the human-machine relationship teach us?

Codex can already do this. It just needs to normalize the behavior.

### 7. Keep portability by separating doctrine from runtime

NanoClaw is a runtime.
`pstack` should remain the portable reference.

So the split should be:

- `pstack` defines the doctrine, artifacts, handshake logic, and prompts
- host environments such as Codex, Claude Code, NanoClaw, or OMX provide the runtime shape

That preserves portability while still letting each environment go deep.

## What Should Change in pstack Next

Concrete next steps for the repo:

1. Update the actual skill bodies to match the new doctrine.
   The docs now say loop, co-intelligence, and human-anywhere.
   The skill prompts should say it too.

2. Add per-P handshake templates.
   One compact section per skill is enough.

3. Add a small artifact pack.
   Not just generic templates, but PSTAC-native file stubs for:
   - perceive output
   - portfolio
   - decide log
   - progress log
   - observer notes

4. Add a Codex-specific integration note or examples.
   Show:
   - when to use subagents for portfolio work
   - when to surface the human
   - how to loop back after failed execution

5. Add one worked example that runs the loop twice.
   This is important because many people will still read the framework linearly unless they see a real recursive example.

## What Should Change in Codex Behavior

When `PSTAC` is active, Codex should default to:

- holding multiple viable options in view longer
- explicitly naming the current P
- explicitly naming when a loop is happening
- surfacing human entry points rather than hiding them
- preserving learning artifacts across the task
- using subagents to widen portfolio exploration, not just to parallelize implementation

That would make Codex behave much more like a true co-intelligence partner.

## Bottom Line

Yes, the NanoClaw 5Ps approach can be brought much deeper into Codex and `pstack`.

But the right way is not to copy the runtime literally.

The right way is to import the important operating properties:

- standing doctrinal presence
- persistent memory surfaces
- role-oriented option exploration
- explicit human handshakes at every P
- progress/observer closure
- recursive loops as the normal mode

If those are implemented well, Codex + `pstack` can express the core value of the NanoClaw 5Ps approach while staying portable across repositories and host environments.
