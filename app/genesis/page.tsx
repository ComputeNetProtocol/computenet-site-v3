"use client";

import { motion } from "framer-motion";
import {
  Users,
  Shield,
  Globe,
  ArrowRight,
  CheckCircle2,
  Circle,
  Cpu,
  HardDrive,
  Network,
  Server,
  Terminal,
  Eye,
  FileText,
  GitBranch,
  Lock,
  Scale,
  Rocket,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Protocol Experimentation",
    status: "completed",
    description: "Core protocol research, proof-of-concept implementations, and internal testing.",
    items: [
      { text: "Protocol specification drafts", done: true },
      { text: "Whitepaper published", done: true },
      { text: "Initial validator architecture", done: true },
      { text: "Compute receipt proof-of-concept", done: true },
    ],
  },
  {
    phase: "Phase 2",
    title: "Open Public Testnet",
    status: "active",
    description: "Public testnet with live validators, public telemetry, and documentation.",
    items: [
      { text: "Three bootstrap validators online", done: true },
      { text: "Live telemetry explorer", done: true },
      { text: "Public validator docs", done: true },
      { text: "One-line validator installer", done: true },
      { text: "Public GitHub repos", done: true },
    ],
  },
  {
    phase: "Phase 3",
    title: "External Validator Onboarding",
    status: "next",
    description: "Independent validators and witness nodes invited to join the network.",
    items: [
      { text: "Independent validators invited", done: false },
      { text: "Witness nodes invited", done: false },
      { text: "Installer testing", done: false },
      { text: "Public telemetry validation", done: false },
      { text: "Onboarding feedback loop", done: false },
    ],
  },
  {
    phase: "Phase 4",
    title: "Protocol Hardening",
    status: "planned",
    description: "Comprehensive testing of verification mechanisms and protocol resilience.",
    items: [
      { text: "Deterministic workload demos", done: false },
      { text: "Replay verification demonstrations", done: false },
      { text: "Explorer-backed receipt verification", done: false },
      { text: "Fraud/challenge simulations", done: false },
      { text: "Docker validator launch", done: false },
    ],
  },
  {
    phase: "Phase 5",
    title: "Genesis Candidate Review",
    status: "planned",
    description: "Final preparation phase including security audits and genesis constants.",
    items: [
      { text: "Security review", done: false },
      { text: "Economic review", done: false },
      { text: "Final genesis constants", done: false },
      { text: "Reproducible source release", done: false },
      { text: "Fair-launch announcement", done: false },
    ],
  },
  {
    phase: "Phase 6",
    title: "Mainnet Candidate",
    status: "future",
    description: "Final readiness assessment and mainnet genesis block preparation.",
    items: [
      { text: "Genesis block preparation", done: false },
      { text: "Validator set finalization", done: false },
      { text: "Mainnet deployment", done: false },
      { text: "Decentralized governance activation", done: false },
    ],
  },
];

const beforeMainnetChecklist = [
  "External validator participation",
  "Public stress testing",
  "Replay verification demos",
  "Telemetry API docs",
  "Docker validator deployment",
  "Fraud/challenge simulations",
  "Security review",
  "Economic review",
  "Final reproducible release",
];

const fairLaunchCommitments = [
  { title: "No Premine", description: "No tokens created before genesis" },
  { title: "No ICO", description: "No token sale or investment offering" },
  { title: "No Founder Allocation", description: "No special founder token allocation" },
  { title: "Open Source Before Genesis", description: "All code public before mainnet" },
  { title: "Public Participation", description: "Anyone can participate from genesis" },
  { title: "Equal Terms", description: "Founders participate like any ordinary validator" },
];

const genesisRequirements = [
  {
    title: "Hardware Expectations",
    icon: Server,
    items: [
      "Modern multi-core CPU",
      "Adequate RAM for workload execution",
      "Fast storage (SSD recommended)",
      "Reliable network connectivity",
    ],
    note: "Current testnet runs on lightweight hardware. Final specs TBD.",
  },
  {
    title: "Technical Requirements",
    icon: Cpu,
    items: [
      "Linux server environment",
      "Static IP address or reliable DNS",
      "24/7 operation capability",
      "Monitoring infrastructure",
    ],
    note: "See /docs/validators/requirements for current testnet specs.",
  },
  {
    title: "Participation Requirements",
    icon: Network,
    items: [
      "Testnet participation recommended",
      "Familiarity with validator operations",
      "Commitment to network security",
      "Community engagement",
    ],
    note: "Join the public testnet now to prepare for genesis.",
  },
];

export default function GenesisPage() {
  return (
    <main className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_50%)]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
              Genesis Program
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Genesis Candidate{" "}
              <span className="text-emerald-400">Roadmap</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              ComputeNet is the first open protocol attempting to make verified useful compute 
              observable, attestable, and eventually mineable. This roadmap charts the path 
              from open public testnet to fair-launch mainnet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/validators"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors"
              >
                Run a Validator
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/explorer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border hover:border-emerald-500/50 text-foreground font-medium rounded-lg transition-colors"
              >
                <Eye className="w-4 h-4" />
                View Live Explorer
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-emerald-500/5 border border-emerald-500/20"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-medium text-emerald-400">Current Phase</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Open Public Testnet v0.11 → v0.12 External Validator Onboarding
                </h3>
                <p className="text-muted-foreground text-sm max-w-2xl">
                  ComputeNet is currently in Open Public Testnet. The network has live public validators, 
                  public telemetry, validator docs, a one-line installer, public GitHub repos, and a public 
                  whitepaper. Mainnet has not launched.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/docs/validators/setup"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-lg transition-colors"
                >
                  <Terminal className="w-4 h-4" />
                  Validator Setup
                </Link>
                <a
                  href="https://github.com/ComputeNetProtocol/computenet-validator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border hover:border-emerald-500/50 text-foreground text-sm font-medium rounded-lg transition-colors"
                >
                  <GitBranch className="w-4 h-4" />
                  GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Development Roadmap
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              The roadmap outlines major milestones on the path to mainnet. Specific 
              timelines will be announced as each phase approaches.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border/50" />

            <div className="space-y-8">
              {roadmapPhases.map((milestone, index) => (
                <motion.div
                  key={milestone.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-background z-10">
                    {milestone.status === "completed" ? (
                      <div className="w-full h-full rounded-full bg-emerald-500" />
                    ) : milestone.status === "active" ? (
                      <div className="w-full h-full rounded-full bg-emerald-500 animate-pulse" />
                    ) : milestone.status === "next" ? (
                      <div className="w-full h-full rounded-full bg-chart-4" />
                    ) : (
                      <div className="w-full h-full rounded-full bg-muted" />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={`p-6 rounded-xl bg-card/50 border transition-all duration-300 ${
                      milestone.status === "active"
                        ? "border-emerald-500/50"
                        : milestone.status === "next"
                        ? "border-chart-4/50"
                        : milestone.status === "completed"
                        ? "border-emerald-500/30"
                        : "border-border/50"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className="px-2 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-400 rounded">
                        {milestone.phase}
                      </span>
                      {milestone.status === "completed" && (
                        <span className="px-2 py-1 text-xs font-medium bg-emerald-500/20 text-emerald-400 rounded flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          Completed
                        </span>
                      )}
                      {milestone.status === "active" && (
                        <span className="px-2 py-1 text-xs font-medium bg-emerald-500/20 text-emerald-400 rounded">
                          Current
                        </span>
                      )}
                      {milestone.status === "next" && (
                        <span className="px-2 py-1 text-xs font-medium bg-chart-4/20 text-chart-4 rounded">
                          Active Next Step
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {milestone.description}
                    </p>
                    <ul className="space-y-2">
                      {milestone.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm"
                        >
                          {item.done ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                          ) : (
                            <Circle className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                          )}
                          <span
                            className={
                              item.done
                                ? "text-muted-foreground"
                                : "text-foreground"
                            }
                          >
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before Mainnet Checklist */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Before Mainnet Checklist
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              The following milestones must be completed before mainnet launch.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {beforeMainnetChecklist.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50"
              >
                <Circle className="w-4 h-4 text-muted-foreground shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fair Launch Commitments */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Fair Launch Commitments
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              ComputeNet is committed to a fair, transparent launch with no special allocations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fairLaunchCommitments.map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card/50 border border-border/50"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {commitment.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {commitment.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Genesis Validator Requirements Preview */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Genesis Validator Expectations
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              While final requirements will be published closer to genesis, the following 
              provides a preview of what genesis validators should expect.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {genesisRequirements.map((req, index) => (
              <motion.div
                key={req.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card/50 border border-border/50"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                  <req.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {req.title}
                </h3>
                <ul className="space-y-3 mb-4">
                  {req.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Circle className="w-3 h-3 mt-1.5 shrink-0 text-emerald-400/50" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground/70 italic">
                  {req.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="p-8 rounded-2xl bg-card/50 border border-border/50 text-center">
              <Rocket className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Join the Public Testnet
              </h2>
              <p className="text-muted-foreground mb-6">
                The public testnet is live. Run a validator node today and help prepare 
                ComputeNet for a fair, decentralized mainnet launch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/docs/validators/setup"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors"
                >
                  <Terminal className="w-4 h-4" />
                  Validator Setup Guide
                </Link>
                <Link
                  href="/validators"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border hover:border-emerald-500/50 text-foreground font-medium rounded-lg transition-colors"
                >
                  Validator Overview
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
