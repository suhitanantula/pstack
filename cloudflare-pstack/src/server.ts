import { Think, Session } from "@cloudflare/think";
import { callable, routeAgentRequest } from "agents";
import { createWorkersAI } from "workers-ai-provider";
import { generateText, tool, type ToolSet } from "ai";
import { z } from "zod";

type PstackPhase =
  | "Perceive"
  | "Perform"
  | "Portfolio"
  | "Pause-Promote"
  | "Progress";

type PstackConfig = {
  activePhase: PstackPhase;
  lastLoopReason?: string;
  humanAttentionNeeded?: boolean;
  updatedAt?: string;
};

const DEFAULT_PHASE: PstackPhase = "Perceive";

const PHASE_ORDER: PstackPhase[] = [
  "Perceive",
  "Perform",
  "Portfolio",
  "Pause-Promote",
  "Progress"
];

const PHASE_GUIDES: Record<
  PstackPhase,
  {
    meaning: string;
    human: string;
    ai: string;
    question: string;
  }
> = {
  Perceive: {
    meaning:
      "Strategic sensing. This is not generic research. Sense what is happening now, what may be emerging, and what must be preserved.",
    human:
      "Tacit context, politics, stakes, values, what actually matters, what futures are acceptable.",
    ai: "Broad scanning, contradiction finding, weak-signal detection, pattern synthesis.",
    question: "What are we not seeing yet, and whose judgment helps us see it?"
  },
  Perform: {
    meaning:
      "Performance architecture. Move with intention. Translate strategic intent into systematic action and test reality early.",
    human:
      "Strategic boundaries, values, trust calls, irreversible decisions, the meaning of good enough.",
    ai: "Execution speed, tactical synthesis, implementation, testing, systematic follow-through.",
    question:
      "What should we test in reality now, and where must human judgment stay active during execution?"
  },
  Portfolio: {
    meaning:
      "Anti-fragile portfolio design. Keep a disciplined option field alive rather than collapsing too early to one path.",
    human:
      "Taste, weighting, strategic fit, risk appetite, contextual preference.",
    ai: "Generate, contrast, prototype, and compare options rapidly.",
    question:
      "Which options deserve more attention now, and which should remain alive for future loops?"
  },
  "Pause-Promote": {
    meaning:
      "Filtering architecture and discernment. Choose what matters by building better filters, not just faster choices.",
    human:
      "Judgment, ethics, cultural coherence, timing, risk appetite, final responsibility.",
    ai: "Screen options at scale, expose parameters, surface tradeoffs, keep the portfolio legible.",
    question:
      "Given this portfolio, what is the best next bet now, and what should stay alive in reserve?"
  },
  Progress: {
    meaning:
      "Learning-system design. Build improvement capacity so the next loop gets smarter through use.",
    human:
      "Meaning-making, redefining success, deciding what should change because of the evidence.",
    ai: "Evidence synthesis, deviation analysis, pattern tracking, structured feedback.",
    question:
      "What do these outcomes mean for the next loop, not just for this sprint's scorecard?"
  }
};

const ARTIFACTS = [
  "perceive-output",
  "perform-notes",
  "portfolio",
  "decision-log",
  "progress-log",
  "observer-notes",
  "human-handshakes"
] as const;

type ArtifactKey = (typeof ARTIFACTS)[number];

const ARTIFACT_CONTEXT_MAP: Partial<Record<ArtifactKey, string>> = {
  "perceive-output": "perceive",
  "perform-notes": "perform",
  portfolio: "portfolio",
  "decision-log": "decision",
  "progress-log": "progress",
  "observer-notes": "observer",
  "human-handshakes": "handshakes"
};

const DOCTRINE = `You are PSTACK on Cloudflare: a recursive co-intelligence runtime.

The 5Ps are:
- Perceive = strategic sensing
- Perform = move with intention; performance architecture
- Portfolio = anti-fragile portfolio design
- Pause-Promote = choose what matters; filtering architecture and discernment
- Progress = build learning systems

Core stance:
- PSTACK is a loop, not a ladder.
- Humans can enter at any P when their judgment improves the next move.
- Decide does not mean premature collapse to one surviving option.
- Keep the portfolio alive long enough to make a better recommendation.
- Reality gets a vote during Perform.
- Progress should feed the next Perceive.

Expected behavior:
- name the current phase when useful
- use tools to persist artifacts and handshakes
- recommend clearly without pretending uncertainty has vanished
- explicitly loop back when evidence weakens the current bet`;

const PORTFOLIO_SUBPROMPT = `You are a PSTACK portfolio scout.

Your job is to explore one option inside an anti-fragile portfolio.
Do not make the final decision.

Output shape:
1. What the option is
2. What it is trying to prove
3. Why it might work
4. Why it might fail
5. What would make it worth keeping alive
6. What would make it easy to kill`;

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
}

function nowIso() {
  return new Date().toISOString();
}

function artifactPath(key: ArtifactKey) {
  return `artifacts/${key}.md`;
}

function renderPhaseBlock(config: PstackConfig) {
  const guide = PHASE_GUIDES[config.activePhase];
  return `# Current Phase

Phase: ${config.activePhase}
Updated: ${config.updatedAt ?? nowIso()}
Last loop reason: ${config.lastLoopReason ?? "none recorded"}
Human attention needed: ${config.humanAttentionNeeded ? "yes" : "no"}

## Meaning
${guide.meaning}

## Human Contribution
${guide.human}

## AI Contribution
${guide.ai}

## Question
${guide.question}`;
}

export class PstackAgent extends Think<Env, PstackConfig> {
  maxSteps = 8;

  getModel() {
    return createWorkersAI({ binding: this.env.AI })(
      "@cf/moonshotai/kimi-k2.6",
      {
        sessionAffinity: this.sessionAffinity
      }
    );
  }

  getSystemPrompt() {
    return DOCTRINE;
  }

  configureSession(session: Session) {
    return session
      .withContext("doctrine", {
        provider: { get: async () => DOCTRINE }
      })
      .withContext("phase", {
        description: "Current PSTACK phase, rationale, and human/AI handshake",
        maxTokens: 1000
      })
      .withContext("perceive", {
        description:
          "Strategic sensing output, emerging signals, and what matters",
        maxTokens: 1800
      })
      .withContext("perform", {
        description: "Performance notes, live tests, and execution evidence",
        maxTokens: 1600
      })
      .withContext("portfolio", {
        description:
          "Current live option field and which possibilities remain alive",
        maxTokens: 2200
      })
      .withContext("decision", {
        description:
          "Current Pause-Promote recommendation, parameters, keep-alive options, and kill list",
        maxTokens: 1800
      })
      .withContext("progress", {
        description: "Learning-system notes from previous loops",
        maxTokens: 2000
      })
      .withContext("observer", {
        description: "Meta-patterns and system-level learning",
        maxTokens: 1800
      })
      .withContext("handshakes", {
        description:
          "Human entry points, unresolved judgment calls, and co-intelligence notes",
        maxTokens: 1600
      })
      .withCachedPrompt();
  }

  beforeTurn(ctx: { system: string }) {
    const config = this.getConfig() ?? {
      activePhase: DEFAULT_PHASE,
      updatedAt: nowIso()
    };
    return {
      system: `${ctx.system}

${renderPhaseBlock(config)}

Current recommended order from the book:
Perceive -> Perform -> Portfolio -> Pause-Promote -> Progress

Use tools when you need to:
- set or loop the phase
- save artifacts
- explore portfolio options
- record human handshakes

Do not behave like a generic assistant. Behave like a PSTACK runtime.`
    };
  }

  @callable()
  async addServer(name: string, url: string) {
    return await this.addMcpServer(name, url);
  }

  @callable()
  async removeServer(serverId: string) {
    await this.removeMcpServer(serverId);
  }

  @callable()
  async getPstackState() {
    const config = this.getConfig() ?? {
      activePhase: DEFAULT_PHASE,
      updatedAt: nowIso()
    };
    const artifactNames = await this.listArtifactNames();
    return {
      config,
      artifactNames,
      phaseGuide: PHASE_GUIDES[config.activePhase]
    };
  }

  getTools(): ToolSet {
    return {
      set_active_phase: tool({
        description:
          "Set the active PSTACK phase and persist why it is active right now.",
        inputSchema: z.object({
          phase: z.enum(PHASE_ORDER),
          reason: z.string().min(1),
          humanAttentionNeeded: z.boolean().default(false)
        }),
        execute: async ({ phase, reason, humanAttentionNeeded }) => {
          const config: PstackConfig = {
            activePhase: phase,
            lastLoopReason: reason,
            humanAttentionNeeded,
            updatedAt: nowIso()
          };
          this.configure(config);
          await this.session.replaceContextBlock(
            "phase",
            renderPhaseBlock(config)
          );
          return {
            ok: true,
            activePhase: phase,
            reason,
            humanAttentionNeeded
          };
        }
      }),

      loop_back: tool({
        description:
          "Loop back to an earlier PSTACK phase because execution or evidence weakened the current bet.",
        inputSchema: z.object({
          targetPhase: z.enum(PHASE_ORDER),
          reason: z.string().min(1)
        }),
        execute: async ({ targetPhase, reason }) => {
          const current = this.getConfig() ?? {
            activePhase: DEFAULT_PHASE,
            updatedAt: nowIso()
          };
          const config: PstackConfig = {
            ...current,
            activePhase: targetPhase,
            lastLoopReason: reason,
            updatedAt: nowIso()
          };
          this.configure(config);
          await this.session.replaceContextBlock(
            "phase",
            renderPhaseBlock(config)
          );
          return {
            ok: true,
            message: `Looped back to ${targetPhase}`,
            reason
          };
        }
      }),

      save_artifact: tool({
        description:
          "Persist a PSTACK artifact to the workspace and relevant context block.",
        inputSchema: z.object({
          artifact: z.enum(ARTIFACTS),
          title: z.string().min(1),
          content: z.string().min(1),
          append: z.boolean().default(true)
        }),
        execute: async ({ artifact, title, content, append }) => {
          await this.ensureArtifactsDir();
          const path = artifactPath(artifact);
          const block = `## ${title}\n\n${content}\n\n`;
          const exists = await this.workspace.exists(path);
          if (append && exists) {
            await this.workspace.appendFile(path, `\n${block}`);
          } else {
            await this.workspace.writeFile(path, `# ${title}\n\n${content}\n`);
          }

          const contextLabel = ARTIFACT_CONTEXT_MAP[artifact];
          if (contextLabel) {
            if (append) {
              await this.session.appendContextBlock(contextLabel, `\n${block}`);
            } else {
              await this.session.replaceContextBlock(
                contextLabel,
                `# ${title}\n\n${content}\n`
              );
            }
          }

          return { ok: true, path, artifact };
        }
      }),

      read_artifact: tool({
        description: "Read a saved PSTACK artifact from the workspace.",
        inputSchema: z.object({
          artifact: z.enum(ARTIFACTS)
        }),
        execute: async ({ artifact }) => {
          const path = artifactPath(artifact);
          const exists = await this.workspace.exists(path);
          if (!exists) {
            return { ok: false, message: `No artifact found at ${path}` };
          }
          const content = await this.workspace.readFile(path);
          return { ok: true, path, content };
        }
      }),

      explore_portfolio_option: tool({
        description:
          "Explore one portfolio option in depth and save the result as a portfolio artifact.",
        inputSchema: z.object({
          name: z.string().min(1),
          brief: z.string().min(1)
        }),
        execute: async ({ name, brief }) => {
          const { text } = await generateText({
            model: this.getModel(),
            system: PORTFOLIO_SUBPROMPT,
            prompt: `Option name: ${name}\n\nBrief:\n${brief}`
          });

          await this.ensureArtifactsDir();
          const filename = `artifacts/portfolio-${slugify(name)}.md`;
          await this.workspace.writeFile(
            filename,
            `# Portfolio Option: ${name}\n\n${text}\n`
          );
          await this.session.appendContextBlock(
            "portfolio",
            `\n## ${name}\n\n${text}\n`
          );

          return {
            ok: true,
            name,
            path: filename,
            analysis: text
          };
        }
      }),

      record_human_handshake: tool({
        description:
          "Record where human judgment is needed in the current loop and what question should be surfaced.",
        inputSchema: z.object({
          phase: z.enum(PHASE_ORDER),
          why: z.string().min(1),
          question: z.string().min(1)
        }),
        execute: async ({ phase, why, question }) => {
          const entry = `- ${nowIso()} | ${phase} | Why: ${why}\n  Question: ${question}\n`;
          await this.ensureArtifactsDir();
          const path = artifactPath("human-handshakes");
          const exists = await this.workspace.exists(path);
          if (exists) {
            await this.workspace.appendFile(path, `\n${entry}`);
          } else {
            await this.workspace.writeFile(
              path,
              `# Human Handshakes\n\n${entry}`
            );
          }
          await this.session.appendContextBlock(
            "handshakes",
            `\n## ${phase}\n\nWhy: ${why}\n\nQuestion: ${question}\n`
          );
          return { ok: true, phase, why, question };
        }
      })
    };
  }

  private async ensureArtifactsDir() {
    await this.workspace.mkdir("artifacts", { recursive: true });
  }

  private async listArtifactNames() {
    try {
      const files = await this.workspace.glob("artifacts/*");
      return files.map((file) => file.name);
    } catch {
      return [];
    }
  }
}

export default {
  async fetch(request: Request, env: Env) {
    const url = new URL(request.url);
    if (url.pathname === "/health") {
      return Response.json({
        ok: true,
        service: "pstack-cloudflare",
        agent: "PstackAgent",
        phases: PHASE_ORDER,
        version: 1
      });
    }

    return (
      (await routeAgentRequest(request, env)) ||
      new Response("Not found", { status: 404 })
    );
  }
} satisfies ExportedHandler<Env>;
