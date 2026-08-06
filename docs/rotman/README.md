# PStack — AI Native Business Design Course Edition

**Status:** exploratory working fork
**Branch:** `rotman-course-edition`
**Upstream:** `suhitanantula/pstack`
**Institutional boundary:** this work does not imply Rotman approval, endorsement, credential commitment, or a final partnership

## The opportunity

PStack already exists as a portable co-intelligence method runtime. The course opportunity is not to invent five AI personas. It is to make the existing method learnable, usable and keepable by participants working on real strategic challenges.

The participant promise:

> Enter with a live challenge. Learn a five-step strategic rhythm with AI. Leave with a defensible intervention, a visible judgement trail and a working PStack you can keep using.

## The five-step experience

The participant-facing rhythm is:

1. **Perceive** — understand what is actually happening and what may be emerging.
2. **Perform** — make the smallest intentional move that lets reality answer back.
3. **Portfolio** — turn what was learned into a live field of possible paths.
4. **Pause** — decide what to promote, preserve or stop, and record why.
5. **Progress** — convert outcomes into learning and feed the next Perceive cycle.

This is a default rhythm, not a rigid stage-gate. Participants can loop backward or enter through the P where human judgement most improves the work.

## How the stack is structured

| Layer | Existing PStack asset | Course-edition responsibility |
|---|---|---|
| Method | Five canonical P skills | Teach one coherent participant rhythm |
| Craft | Prune and Artisan | Quietly improve scope and quality across the five steps |
| Learning | Progress, Observer and ACP | Make practice development visible without surveillance |
| Runtime | Claude/Codex skills and Cloudflare prototype | Offer an accessible native or managed experience |
| Memory | Agent-neutral sprint log and runtime artefacts | Create a private participant challenge workspace |
| Distribution | Setup script and Codex plugin | Provide safe onboarding, diagnostics and updates |
| Institution | Not yet present | Add facilitation, assessment, governance and credential boundaries |

## Current recommendation

Build a **dual-path course edition**:

- **Managed path:** a browser-based PStack for the broad participant cohort.
- **Native path:** installable PStack skills for participants who want a deeper agent-native practice.

Both paths should use the same method definitions, artefact contracts and learning outcomes. The browser experience must not become a simplified generic chatbot, and the native path must not require the course itself to become developer training.

## What this fork should contain

This fork is a packaging and learning-design layer around canonical PStack:

- course profile and participant language;
- intake and Strategic Learning Brief;
- participant workspace and artefact contracts;
- five-step facilitation;
- privacy and instructor-access rules;
- assessment and evidence of learning;
- managed and native distribution profiles;
- post-course continuation and version policy.

It should not casually fork the canonical method. Improvements to the five P skills that are generally valuable should return upstream.

## Course profile (implementation)

Packaged participant runtime lives at:

[`profiles/ai-native-business-design/`](../../profiles/ai-native-business-design/README.md)

- Method source + artefacts + starters  
- Installable skills (`packs/skills/`) + zips (`packs/dist/`)  
- Course facilitation + learn/pulse templates  
- Version: see `profiles/ai-native-business-design/VERSION`

## Working documents

- [`CURRENT-SYSTEM-MAP.md`](CURRENT-SYSTEM-MAP.md) — what exists, how it works and its present maturity.
- [`PARTICIPANT-RHYTHM.md`](PARTICIPANT-RHYTHM.md) — how a participant experiences the five steps.
- [`PACKAGING-ARCHITECTURE.md`](PACKAGING-ARCHITECTURE.md) — what belongs upstream, in the course profile and in institutional configuration.
- [`PROGRESS-2026-07-27.md`](PROGRESS-2026-07-27.md) — what the first mapping and packaging loop established.

## First prototype

The smallest complete test is one participant, one authentic challenge and one facilitated five-step loop:

1. Complete an intake that produces a Strategic Learning Brief.
2. Activate a private participant workspace.
3. Run Perceive through Progress with visible artefacts and human decision points.
4. Produce one defensible strategic intervention and next-loop brief.
5. Check after 30 days whether the participant continued using PStack.

Success is changed strategic practice, not impressive generated text.
