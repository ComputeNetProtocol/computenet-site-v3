"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Cpu, Shield, Box, Zap, Network, Lock, 
  CheckCircle2, ArrowRight, Code, Globe, 
  FileCheck, Binary, Workflow, Eye
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatIsComputeNet() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">What is ComputeNet?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            ComputeNet is an experimental open protocol designed to transform compute into a verifiable, 
            decentralized, utility-backed network resource. Where Bitcoin introduced decentralized monetary 
            consensus and Ethereum introduced decentralized execution, ComputeNet explores a third primitive: 
            <span className="text-foreground font-medium"> decentralized verification of useful compute.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Cpu,
              title: "Useful Computation",
              description: "Computational work should produce reusable value, not just difficulty competition.",
            },
            {
              icon: Shield,
              title: "Verifiable Execution",
              description: "Independent validators can reproduce and verify computation results.",
            },
            {
              icon: Network,
              title: "Decentralized Consensus",
              description: "Trust emerges from distributed validation, not centralized authority.",
            },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel rounded-xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function WhyUsefulCompute() {
  const problems = [
    "Centralized cloud dependency",
    "Opaque compute pricing",
    "Unverifiable execution",
    "Fragmented idle compute",
    "Weak trust guarantees",
    "Poor interoperability",
  ]

  return (
    <section className="py-24 relative bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Useful Compute Matters</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Modern compute markets suffer from structural problems. At the same time, 
              existing proof-of-work systems consume energy while producing computational 
              outputs with little reusable utility. ComputeNet explores an alternative: 
              computational work should produce reusable value.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {problems.map((problem, index) => (
                <motion.div
                  key={problem}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-2 text-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-destructive/70" />
                  <span className="text-muted-foreground">{problem}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold">The Core Thesis</h3>
            </div>
            <blockquote className="text-xl font-medium leading-relaxed border-l-2 border-primary pl-4">
              Useful computation can become a native protocol primitive.
            </blockquote>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              Instead of hashing purely for difficulty competition, nodes compete by executing 
              deterministic workloads, generating verifiable outputs, producing cryptographic 
              execution receipts, and participating in decentralized validation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function ProofOfUsefulCompute() {
  const properties = [
    { label: "Determinism", description: "Inputs produce reproducible outputs" },
    { label: "Verifiability", description: "Independent validators verify execution" },
    { label: "Replay Resistance", description: "Receipts resist duplication" },
    { label: "Fraud Detection", description: "Dishonest validators identifiable" },
    { label: "Cost Efficiency", description: "Verification cheaper than generation" },
    { label: "Utility Production", description: "Network generates reusable value" },
  ]

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-sm mb-6">
            <Binary className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Protocol Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Proof of Useful Compute (PoUC)</h2>
          <p className="text-muted-foreground leading-relaxed">
            In PoUC, computational work must produce reusable outputs that are independently 
            verifiable. Validators must be able to reproduce execution, and receipts must be 
            consensus-verifiable. This is the conceptual foundation of ComputeNet.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {properties.map((prop, index) => (
            <motion.div
              key={prop.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-panel rounded-xl p-5 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">{prop.label}</h4>
                  <p className="text-sm text-muted-foreground">{prop.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function VerificationPipeline() {
  const steps = [
    { icon: FileCheck, label: "Job Manifest", description: "Deterministic execution blueprint" },
    { icon: Cpu, label: "Deterministic Execution", description: "Reproducible workload processing" },
    { icon: Binary, label: "Execution Hashing", description: "Immutable output fingerprint" },
    { icon: Box, label: "Receipt Construction", description: "Portable evidence artifact" },
    { icon: Shield, label: "Validator Re-execution", description: "Independent verification" },
    { icon: CheckCircle2, label: "Consensus Attestation", description: "Distributed agreement" },
  ]

  return (
    <section className="py-24 relative bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Verification Pipeline</h2>
          <p className="text-muted-foreground leading-relaxed">
            The protocol approaches verification through a layered pipeline combining deterministic 
            execution, reproducible workloads, execution hashing, portable compute receipts, validator 
            re-execution, and consensus attestations.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border" />
          
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="glass-panel rounded-xl p-4 text-center hover:border-primary/30 transition-colors h-full">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-medium text-sm mb-1">{step.label}</h4>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center text-xs font-mono text-muted-foreground">
                      {index + 1}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ValidatorConsensus() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="glass-panel rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3 text-sm font-mono">
                <span className="text-muted-foreground">consensus_round:</span>
                <span className="text-primary">active</span>
              </div>
              <div className="space-y-3">
                {[
                  { validator: "alpha", vote: "accept", weight: 0.34 },
                  { validator: "beta", vote: "accept", weight: 0.33 },
                  { validator: "gamma", vote: "accept", weight: 0.33 },
                ].map((v) => (
                  <div key={v.validator} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="font-mono text-sm">validator-{v.validator}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-primary">{v.vote}</span>
                      <span className="text-muted-foreground font-mono">{v.weight}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Consensus Ratio</span>
                <span className="text-lg font-semibold text-primary font-mono">1.00</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Validator Consensus</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Validators serve as the trust infrastructure of ComputeNet. They verify receipts, 
              cast attestations, aggregate acceptance ratios, and finalize valid execution bundles. 
              No single validator is treated as authoritative — trust emerges from independent reproducibility.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Receipt validation",
                "Consensus participation",
                "Peer propagation",
                "Fraud detection",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="gap-2">
              <Link href="/validators">
                Learn about validators
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function OpenProtocolPhilosophy() {
  const principles = [
    { title: "No Premine", description: "No founder allocation or hidden supply" },
    { title: "No ICO", description: "No public fundraising through token sales" },
    { title: "No Central Custody", description: "Protocol operates without custodial control" },
    { title: "Open Participation", description: "Validator participation through open rules" },
    { title: "Utility-First", description: "Prioritize useful compute over speculation" },
    { title: "Research-First", description: "Experimentation over marketing" },
  ]

  return (
    <section className="py-24 relative bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-sm mb-6">
            <Lock className="w-4 h-4 text-primary" />
            <span>Fair Launch Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Open Protocol Principles</h2>
          <p className="text-muted-foreground leading-relaxed">
            ComputeNet intends to follow a Bitcoin-style fair-launch philosophy where network 
            participation emerges organically through open-source infrastructure and validator 
            participation. The protocol prioritizes openness over exclusivity, utility over 
            speculation, and infrastructure over hype.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-panel rounded-xl p-5 hover:border-primary/30 transition-colors"
            >
              <h4 className="font-semibold mb-2">{principle.title}</h4>
              <p className="text-sm text-muted-foreground">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ResearchPreview() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-2xl p-8 md:p-12 border-primary/20"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-sm mb-6">
                <Eye className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium">Research Preview</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Current Development Status</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                ComputeNet is currently operating in Research Preview / Private Testnet mode. 
                The current network is non-economic, non-custodial, non-commercial, and experimental. 
                There is currently no public token, no mining, no public rewards, and no economic issuance.
              </p>
              <div className="space-y-3">
                {[
                  "Protocol experimentation",
                  "Validator architecture testing",
                  "Compute receipt verification",
                  "Consensus validation",
                  "Distributed systems research",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm">
                    <Workflow className="w-4 h-4 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="glass-panel rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Live Validator Services</span>
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="font-mono text-sm">Active</span>
                </div>
              </div>
              <div className="glass-panel rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Compute Receipt Generation</span>
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="font-mono text-sm">Operational</span>
                </div>
              </div>
              <div className="glass-panel rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Public Observer Mode</span>
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="font-mono text-sm">Enabled</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function LongTermVision() {
  const useCases = [
    "AI inference verification",
    "Distributed scientific workloads",
    "Rendering networks",
    "Simulation markets",
    "Decentralized benchmarking",
    "Verifiable agent execution",
    "Cryptographic proof marketplaces",
  ]

  return (
    <section className="py-24 relative bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-sm mb-6">
              <Globe className="w-4 h-4 text-primary" />
              <span>Future Directions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Long-Term Vision</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The long-term objective of ComputeNet is a decentralized protocol for verifiable useful compute. 
              The protocol exists to explore whether useful compute can remain decentralized and whether 
              verification can remain cheaper than execution.
            </p>
            <div className="flex flex-wrap gap-2">
              {useCases.map((useCase) => (
                <span
                  key={useCase}
                  className="px-3 py-1.5 rounded-full glass-panel text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                >
                  {useCase}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-xl p-6"
          >
            <h3 className="font-semibold mb-6">Open Research Questions</h3>
            <div className="space-y-4">
              {[
                "How should useful compute be measured?",
                "How should fraud be penalized?",
                "How can deterministic execution scale?",
                "What workloads qualify as useful?",
                "Can useful compute remain decentralized?",
                "Can verification remain cheaper than execution?",
              ].map((question, index) => (
                <motion.div
                  key={question}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 text-sm"
                >
                  <span className="text-primary font-mono shrink-0">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-muted-foreground">{question}</span>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground italic">
              ComputeNet does not claim to have fully solved these questions. The protocol exists to explore them experimentally.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function CTASection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Explore the Protocol</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            ComputeNet is open-source and research-first. Read the whitepaper, explore the architecture, 
            and follow the protocol&apos;s development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              <Link href="/whitepaper">
                <FileCheck className="w-4 h-4" />
                Read Whitepaper
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="/architecture">
                <Workflow className="w-4 h-4" />
                View Architecture
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="/explorer">
                <Eye className="w-4 h-4" />
                Open Explorer
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="gap-2">
              <Link href="https://github.com/ComputeNetProtocol/-computenet" target="_blank" rel="noopener noreferrer">
                <Code className="w-4 h-4" />
                GitHub
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
