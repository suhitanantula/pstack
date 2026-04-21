# PSTACK + Fuse Options

Date: 2026-04-22

## Purpose

This note captures what the new Cloudflare-native `PSTACK` runtime implies for Fuse.

Fuse already had an important design decision in the local notes:

**All Fuse tools must be agent-operable.**

That makes Fuse a strong candidate for a Cloudflare-native agent runtime.

## Fuse Starting Point

From the existing local notes, Fuse is:

- a managed AI automation partner for SMEs
- outcomes-first, system language, not jargon
- agent-operable by principle
- already leaning toward Cloudflare for Pages, DNS, and email routing

Planned categories of work already include:

- website
- nurture/email
- CRM/pipeline
- bookings
- analytics
- research
- lead generation
- inbox / reply workflows

That means the strategic question is not:

`Should Fuse use AI automation?`

That is already settled.

The question is:

`What kind of agent runtime should Fuse become?`

## Option Set

### Option A — Control-Plane Fuse

Keep Fuse as mostly a SaaS/tool stack, but add Cloudflare around it:

- Cloudflare Pages
- DNS / domain control
- AI Gateway
- WAF / Bot Management
- Email Routing

What this gives:

- low-risk operational improvement
- better edge/security posture
- cleaner deployment and domain setup

What it does not give:

- durable account-specific agents
- real co-intelligence runtime
- deeper automation advantage

### Option B — Agent-Operated GTM Machine

Use Cloudflare to power Fuse's own growth and delivery engine:

- one persistent agent per operator or campaign
- browser-based research and prospecting
- inbound/outbound email handling
- nurture sequence orchestration
- pipeline/tool integration
- scheduled market scans and weekly reports

What this gives:

- a real working internal system
- dogfood proof for Fuse's own promise
- strong automation leverage without needing to become a full client runtime yet

What this does not fully give:

- client-account durable agents as the product itself

### Option C — Full Client Runtime

Fuse becomes a managed Cloudflare-native agent platform for SME clients:

- one persistent agent or agent cluster per client/account
- inbox agent
- ops agent
- research agent
- browser task agent
- sandboxed task execution
- Cloudflare-native memory/state/runtime coordination

What this gives:

- maximum differentiation
- strongest productized moat
- real "system, not service" expression

What it costs:

- more architecture work
- more support and safety complexity
- more need for explicit human handshakes and client boundaries

## Recommended Path

**Do not jump straight to Option C.**

Recommended order:

1. **Option B first** — Agent-Operated GTM Machine
2. **Option A where useful** — control-plane improvements in support of B
3. **Option C after learning** — client runtime once the internal system proves the shape

## Why Option B First

The new `PSTACK on Cloudflare` runtime already proved that:

- Cloudflare can host a co-intelligence runtime for this ecosystem
- persistent state + artifacts + explicit phase behavior are viable
- we can move beyond generic chat and into durable operating surfaces

Fuse should use that lesson internally first.

Why:

- fastest route to real learning
- lowest risk path to product shape
- gives immediate operational value
- produces evidence for the client-runtime move later

## What Fuse on Cloudflare Could Use

### Strong fits now

- **Pages / Workers** — web surface and app runtime
- **Agents SDK / Think** — persistent account or campaign agents
- **AI Gateway** — model routing, logging, control plane
- **Email Service / Email Routing** — inbox and outbound workflows
- **Browser tooling** — prospecting, research, website tasks
- **Sandboxes** — bounded code execution and automations
- **WAF / Bot Management** — public-edge safety

### Probably later

- Durable multi-agent account memory patterns
- heavier workflow orchestration
- deeper client-facing self-service agent surfaces

## Concrete Fuse Runtime Shapes

### 1. Research + Prospect Agent

Per target market / campaign:

- scans firms and people
- drafts lead briefs
- updates CRM
- writes first-pass outreach
- records what requires human approval

### 2. Inbox + Reply Agent

Per shared Fuse inbox:

- triages inbound replies
- drafts responses
- flags sensitive/meaning-heavy messages
- updates CRM state
- schedules follow-ups

### 3. Content + Nurture Agent

- drafts LinkedIn posts and nurture emails
- tracks which themes perform
- loops performance back into messaging
- keeps a live portfolio of content angles

### 4. Client Delivery Agent

For active clients:

- monitors agreed KPIs or automation flows
- drafts reports
- suggests next improvements
- escalates human attention where trust or brand is involved

## Human Handshakes for Fuse

The most important design choice is not the tooling.
It is the handshakes.

Humans should remain active in Fuse when:

- messaging affects brand or trust
- outreach crosses ethical or reputational lines
- a client automation may create unintended consequences
- the system is making tradeoffs about what "success" means

This is where the new `PSTACK` runtime matters:

Fuse should not just automate.
It should automate with explicit co-intelligence.

## Bottom Line

The best immediate move is:

**Turn Fuse into an internal Cloudflare-native agent-operated GTM and delivery machine first.**

That gives:

- real dogfood
- operational leverage
- cleaner product learning
- a safer path toward a future client runtime

The `PSTACK on Cloudflare` implementation should be treated as the first proof that this direction is real.
