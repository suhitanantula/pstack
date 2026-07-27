# Packaging Architecture

## Design decision

Create a course profile around canonical PStack rather than a permanent method fork.

The Rotman working fork is where the profile can be designed safely. General method improvements should be proposed upstream; course-specific configuration stays here.

## Three boundaries

### 1. Canonical method

Owned upstream:

- definitions of the five Ps;
- Prune, Artisan and Observer;
- co-intelligence doctrine;
- generic artefact contracts;
- ACP model;
- cross-agent portability;
- distribution tests.

### 2. AI Native Business Design profile

Owned in this fork:

- participant language and journey;
- Strategic Learning Brief;
- course artefact set;
- facilitation prompts;
- learning outcomes and assessment;
- native and managed activation profiles;
- post-course continuation model.

### 3. Institutional configuration

Should be deploy-time configuration, not hard-coded method content:

- university branding;
- instructor and participant roles;
- consent and data-retention settings;
- approved models and providers;
- accessibility requirements;
- cohort dates and credential rules;
- support and escalation contacts.

## Recommended repository shape

```text
profiles/
  ai-native-business-design/
    profile.yaml
    intake/
    skills/
    artifacts/
    facilitation/
    assessment/
    privacy/
    participant/

runtimes/
  native/
  managed/

packages/
  generated/

docs/
  rotman/
```

This is a proposed shape, not yet implemented.

## One source, generated distributions

The current repository duplicates canonical skills into the Codex plugin. Perceive has already drifted between the two copies.

The course edition should adopt:

1. one canonical method source;
2. generated runtime packages;
3. an automated drift check;
4. versioned course profiles;
5. a compatibility statement between method, profile and runtime versions.

Participant installations should never depend on maintainers remembering to copy changed prompts manually.

## Delivery portfolio

### Option A — Native PStack

Participants install the skills into a supported agent environment.

**Strengths**

- closest to the real agent-native practice;
- portable after the course;
- inspectable and adaptable;
- lower hosted-runtime burden.

**Weaknesses**

- technical onboarding;
- inconsistent participant environments;
- harder university support and data governance.

### Option B — Managed browser PStack

Extend the existing Cloudflare runtime into a course-safe product.

**Strengths**

- accessible onboarding;
- consistent experience;
- clearer support, version and facilitation model;
- easier guided artefacts.

**Weaknesses**

- hosting and privacy responsibility;
- risk of becoming a generic chatbot;
- participant continuity may depend on Helix access.

### Option C — Dual path

Use the managed runtime as the default and offer native installation as an advanced or post-course path.

**Recommendation:** promote Option C for the first design conversation.

It preserves accessibility without confusing the course edition with a closed application. Both paths must share the same five-step method and participant-owned artefact model.

## Packaging the five steps

Each step should ship as a structured practice:

```text
step/
  purpose
  entry_conditions
  participant_questions
  agent_contribution
  human_judgement_points
  input_contract
  output_artifact
  completion_signal
  loop_back_conditions
  learning_evidence
```

This makes the Ps teachable and testable without reducing them to prompts.

## Privacy defaults

- Participant challenge material is private by default.
- Instructor access is explicit and visible.
- Cohort pattern learning is opt-in and de-identified.
- Raw organisational content is not reused for product learning by default.
- Human handshakes and consequential decisions remain attributable to the participant.
- Retention and deletion rules are stated before intake.

## Assessment stance

Assess:

- quality of framing;
- evidence use;
- option quality and contrast;
- judgement transparency;
- learning and adaptation;
- ability to reuse the rhythm independently.

Do not assess:

- verbosity;
- polish alone;
- how much content the agent generated;
- conformity to an agent recommendation.

## Initial release boundary

The first course release should include:

- one intake;
- one participant workspace;
- five step definitions;
- five durable artefacts;
- explicit human handshakes;
- one facilitator guide;
- one practice-development rubric;
- one managed prototype;
- one native continuation path.

It should not include:

- autonomous grading;
- automatic admission decisions;
- cross-participant raw-data aggregation;
- a large institutional dashboard;
- a permanent fork of the core method.
