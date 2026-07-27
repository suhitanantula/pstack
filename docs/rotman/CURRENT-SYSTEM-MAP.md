# Current PStack System Map

**Inspected:** 2026-07-27
**Upstream version:** 1.1.1
**Purpose:** distinguish working infrastructure from the course-product layer still to be designed

## What PStack is today

PStack is primarily an installable set of specialist agent skills. The command-line tool supports setup, versioning, update checks and diagnostics; the cognitive work lives in the skill definitions.

### Core five

| Step | Canonical skill | Current job | Main output |
|---|---|---|---|
| Perceive | `pstack-perceive` | Strategic sensing and problem reframing | Perceive output |
| Perform | `pstack-perform` | Intentional execution and reality testing | Build or performance output |
| Portfolio | `pstack-portfolio` | Live option-field design and prototyping | Portfolio of working options |
| Pause | `pstack-decide` | Filtering, recommendation and explicit kill list | Decision log |
| Progress | `pstack-progress` | Evidence, lessons and next-loop learning | Progress report and sprint memory |

### Cross-cutting practices

| Practice | Existing role | Course reading |
|---|---|---|
| Prune | Scope discipline | Prevents live challenges becoming unteachable transformation programmes |
| Artisan | Quality and usability | Ensures participant artefacts become genuinely usable |
| Observer | Meta-awareness and pattern detection | Supports personal practice development and carefully governed cohort learning |

### Practice maturity

ACP tracks development through:

1. Scaffolding
2. Routine
3. Memory
4. Growth
5. Emergence

This is potentially a powerful course assessment model because it evaluates how a participant practises each P, not whether an AI produced a polished answer. It requires a student-safe evidence and privacy model before use.

## How it currently works

### Native skill runtime

1. Install the repository.
2. Invoke the relevant P as a specialist skill.
3. The skill asks phase-specific questions and creates a structured output.
4. Outputs hand off to later Ps through files and shared context.
5. Progress appends learning into agent-neutral memory.
6. Observer reads patterns across runs.

The current native experience assumes a participant who is comfortable invoking agent skills and managing files.

### Codex distribution

Codex uses a plugin package under `plugins/pstack/`. Canonical skills are duplicated into the plugin directory and synchronised with `bin/sync-codex-skills`.

Current defect discovered during this mapping:

- canonical `pstack-perceive/SKILL.md` contains a newer prior-knowledge scan;
- the Codex plugin copy does not;
- other inspected skill copies are synchronised.

Course implication: distribution packages should be generated and release-checked. Manual duplication is too fragile for a credentialled participant experience.

### Claude distribution

The setup script creates symlinks from the canonical repository into the Claude skill directory. This follows the GStack-style pattern in which the repository itself is the installation.

### Cloudflare runtime

The existing prototype already provides:

- explicit phase state;
- the five-step order;
- persistent artefacts;
- loop-back to an earlier P;
- portfolio-option exploration;
- recorded human handshakes;
- session context for each P;
- a browser interface.

This is the strongest starting point for a managed participant path, but it remains a dogfood prototype rather than a course product.

## Artefacts already present

The repository contains templates for:

- Strategic Brief
- Execution Plan
- Execution Evidence Pack

The Cloudflare runtime additionally uses:

- Perceive output
- Perform notes
- Portfolio
- Decision log
- Progress log
- Observer notes
- Human handshakes

The course should reconcile these into one participant-friendly artefact model.

## How it stacks up against the course ambition

| Capability | Current state | Course readiness |
|---|---|---|
| Five distinct strategic practices | Strong | Ready to adapt |
| Recursive co-intelligence doctrine | Strong | Ready to teach |
| Human judgement | Explicit throughout | Ready, needs facilitation |
| Installable native stack | Working | Needs non-technical onboarding |
| Managed browser runtime | Prototype exists | Needs product and privacy work |
| Shared artefacts | Partly implemented | Needs one coherent contract |
| Practice maturity | ACP exists | Needs learner-safe assessment design |
| Instructor view | Not designed | Missing |
| Cohort learning | Observer pattern exists | Needs consent and aggregation rules |
| University governance | Not designed | Missing |
| Accessibility | Not evidenced | Missing |
| Post-course entitlement | Not designed | Missing |

## Existing Helix implementations

Helix Company OS documents three complementary forms:

- **PStack:** portable canonical skill reference.
- **Open Claw / Clawd:** filesystem-based multi-agent operating system with agent identities, shared insights and meta-ACP.
- **NanoClaw:** container-isolated client agent swarm.

For this course edition, PStack should remain the canonical method. Open Claw offers useful learning about agent identity and shared observation; NanoClaw offers useful learning about isolation. Neither should be copied wholesale into the first participant experience.

## Material risks

1. **Method drift:** canonical skills and distribution copies can diverge.
2. **Over-technical packaging:** installation can dominate the learning experience.
3. **Black-box simplification:** a managed chat interface can erase the distinct Ps.
4. **Assessment contamination:** fluent AI output can be mistaken for participant capability.
5. **Privacy leakage:** organisational challenges may contain sensitive strategy or stakeholder material.
6. **Rigid sequencing:** teaching the rhythm as a stage-gate would contradict the method.
7. **Brand implication:** exploratory Rotman work must not be presented as an endorsed partnership.

## The unseen thing

The PStack course opportunity is not “give every participant five agents.”

It is:

> Give every participant a strategic practice that becomes more capable through repeated human-agent work—and make that development visible without taking ownership of their judgement or their data.
