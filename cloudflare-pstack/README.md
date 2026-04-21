# PSTACK on Cloudflare

First Cloudflare-native runtime prototype for `PSTACK`.

## What This Is

This app takes the `pstack` framework and turns it into a live Cloudflare agent runtime.

Instead of a generic chat assistant, it exposes a PSTACK-shaped co-intelligence surface:

- `Perceive` — strategic sensing
- `Perform` — move with intention / performance architecture
- `Portfolio` — anti-fragile portfolio design
- `Pause-Promote` — filtering architecture / discernment
- `Progress` — learning systems

It persists phase state and artifacts in Durable Object SQLite-backed storage via `Think`, and exposes server tools to:

- set the active phase
- loop back to an earlier phase
- save/read artifacts
- explore portfolio options
- record human handshakes

## Why It Exists

The purpose of this prototype is dogfooding.

We want to learn whether `PSTACK` can move from:

- a portable skill stack

to:

- a real co-intelligence runtime

without losing the doctrine.

## Current Deployment

Live URL:

- https://pstack-cloudflare.suhit.workers.dev

Health endpoint:

- https://pstack-cloudflare.suhit.workers.dev/health

## Stack

- Cloudflare Agents SDK
- `@cloudflare/think`
- Workers AI
- Durable Object SQLite storage
- React + Vite frontend

## Project Structure

```text
src/
  server.ts    # PSTACK agent runtime
  app.tsx      # browser UI
  client.tsx   # React entry point
  styles.css   # UI styles
```

## Local Development

```bash
npm install
npm run types
npm run check
npm run dev
```

## Deploy

```bash
npm run deploy
```

## Current Limits

This is a first runtime, not the final architecture.

What it does well already:

- phase-aware runtime behavior
- persistent artifact storage
- explicit co-intelligence framing
- deployed Worker + health endpoint

What still needs work:

- richer phase-specific UI
- better portfolio visualization
- stronger sub-agent/runtime patterns
- explicit human-in-the-loop approval UX
- Fuse and client-facing specializations built on top

## Next Move

Use what this implementation taught us to evaluate:

1. `Fuse on Cloudflare`
2. `Ethnobot` runtime/control-layer options
3. Helix Lab consulting patterns for agent architecture
