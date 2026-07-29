# Course Guide — pstack for Rotman Business Design

Faculty and TA notes for integrating pstack into a Rotman business design course.

---

## What pstack Is (in this context)

pstack is an AI co-intelligence framework built on the 5Ps of Loop Design from the Helix model. It gives student teams a structured way to work with AI as a genuine thinking partner — not just a writing assistant — across a business design project.

The 5Ps give teams a shared vocabulary and rhythm:

| P | Tagline | What it develops in students |
|---|---------|------------------------------|
| Perceive | Never Forget the People | Empathy, context-sensitivity, reframing |
| Perform | Move with Intention | Bias to action, prototype thinking |
| Portfolio | Designing for Anti-Fragility | Option thinking, intellectual humility |
| Pause/Promote | Choose What Matters | Decision-making, values clarity |
| Progress | Build Learning Systems | Reflective practice, learning transfer |
| Observer | Meta-awareness across loops | Self-awareness as a designer, systems thinking |

---

## How to Map pstack to a Course Arc

### Short course or module (4–6 weeks)

| Week | Focus | pstack entry point |
|------|-------|-------------------|
| 1 | Brief + context | `/pstack-perceive` |
| 2 | First prototypes | `/pstack-perform` |
| 3 | Options review | `/pstack-portfolio` + `/pstack-decide` |
| 4 | Refined prototype | `/pstack-perform` (second loop) |
| 5–6 | Debrief + learning | `/pstack-progress` + `/pstack-observer` |

### Full semester

Treat each project phase as a loop. Teams run the full 5Ps sequence once per phase. Progress from one phase feeds the Perceive of the next.

Teams use Observer at mid-semester and end of semester to reflect on their practice development, not just their project outputs.

---

## Observer for the Course

Observer is the meta-level tool. It operates at two levels in a course context:

### Student level
Each student (or team) runs Observer at mid-semester and end of semester:
- Which Ps do I use confidently? Which do I resist?
- What am I learning about myself as a designer?
- What's my ACP level for each P? (see below)

### Instructor level
At end of semester, you as the instructor can run Observer across the cohort:
- Which Ps did teams consistently skip?
- Where did teams struggle most (and why)?
- What does this year's cohort teach us about how the framework should evolve?

This is the methodology improvement loop — the framework learns from being used.

---

## ACP Practice Maturity

ACP (Adaptive Co-intelligence Practice) levels give students a way to track their development with each P across the semester.

| Level | Name | Signal |
|-------|------|--------|
| 1 | Scaffolding | Can use this P when prompted |
| 2 | Routine | Invokes it naturally at the right moment |
| 3 | Memory | Notices patterns in their own use across loops |
| 4 | Growth | Application has visibly improved |
| 5 | Emergence | This P produces unexpected insights |

Students track levels in `~/.pstack/memory/acp-levels.md`. Use Observer to aggregate and reflect on these.

Suggested check-ins: at the end of the first major loop (week 3–4), at mid-semester, and at end of semester.

---

## Facilitation Notes by P

### Perceive
- The most important P to teach well — students are most prone to skipping it
- Push them to name the hidden people (who's affected but not visible in the brief)
- The question "what is the problem behind the problem?" is the core practice
- Don't let them move to Perform until they've genuinely sat with the people

### Perform
- Students often prototype too polished or too complex
- Keep asking: "What is the smallest thing that would tell you whether this works?"
- In business design, the prototype doesn't have to be software — scenarios, service blueprints, and concept sketches count
- Enforce: test with a real person before evaluating the prototype in the team

### Portfolio
- Teach it as always-active, not a one-time gate
- The most common failure: collapsing to one option before Pause/Promote has done its work
- Use the 70/20/10 model (safe / adaptive / exploratory) as a conversation starter
- The "not pursuing" list is as important as the options list

### Pause/Promote
- Teach both filters explicitly: analytical AND resonance
- The most common failure: making the call on evidence alone, without naming what the team actually cares about
- Push them to state what they're *not* doing — this surfaces more learning than the decision itself
- "A choice is a bet, not a commitment" — help them stay honest about uncertainty while still choosing

### Progress
- Students often treat this as a formality — resist that
- Three layers matter: design learning, process learning, AI + human learning
- The sprint log entry is critical — without it, Observer has no material
- Connect Progress explicitly to the next Perceive: "What does what we learned change about how we'd start the next loop?"

### Observer
- Run at milestones, not inside every loop
- Dual-track: individual practice development AND what the loops are teaching about the challenge
- The EEE Layer question (Ethical, Emotional, Emergent) belongs here — Observer is where the team asks the harder questions about what they're designing and why

---

## Common Anti-Patterns (and what to do)

| Anti-pattern | What it looks like | Response |
|--------------|--------------------|---------|
| Skipping Perceive | Team moves straight to ideas | Send them back. "Who are the people?" |
| Portfolio theater | Listing options without making a move | "Which of these could you show someone tomorrow?" |
| Premature collapse | One option, too early | "What are you not pursuing, and why?" |
| Progress as formality | Thin, vague reflections | "What would you do differently? Be specific." |
| Silent autonomy | AI makes choices the human doesn't notice | "Where did AI lead and where did you follow? Was that right?" |
| Observer skipped | No cross-loop reflection | Schedule Observer explicitly. It won't happen on its own. |

---

## The Co-Intelligence Frame

Throughout the course, reinforce this frame:

The 5Ps are not a process for using AI. They are a rhythm for thinking *with* AI — where human and machine intelligence each play their natural role.

At every P, the question is: **Whose judgment improves this loop right now?**

Sometimes AI. Sometimes human. Sometimes both together. The skill being developed is knowing which, and why.

---

## Technical Setup

Students install pstack into Claude Code:

```bash
git clone https://github.com/suhitanantula/pstack.git ~/.claude/skills/pstack
bash ~/.claude/skills/pstack/setup
```

After setup, skills are available via `/pstack`, `/pstack-perceive`, etc.

To update to the latest course materials: `/pstack-upgrade`

Memory files live in `~/.pstack/memory/` — these persist across sessions and are what Observer reads.
