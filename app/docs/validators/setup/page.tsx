"use client";

import { DocsLayout } from "@/components/docs-layout";
import { Check, Copy, ExternalLink, Github, FileText, Activity, Server } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 p-2 rounded-md bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
      aria-label="Copy to clipboard"
    >
      {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
    </button>
  );
}

function CodeBlock({ children, copyText }: { children: string; copyText?: string }) {
  return (
    <div className="relative bg-background/50 rounded-lg p-4 font-mono text-sm">
      <CopyButton text={copyText || children} />
      <pre className="text-muted-foreground overflow-x-auto pr-12">{children}</pre>
    </div>
  );
}

export default function ValidatorSetupPage() {
  return (
    <DocsLayout
      title="Validator Setup"
      description="Run a ComputeNet validator on the Open Public Testnet."
      href="/docs/validators/setup"
      status="stable"
      section="Validators"
      sectionHref="/docs/validators"
    >
      <section className="space-y-6">
        {/* Status Card */}
        <div className="glass-panel rounded-xl p-6 border-primary/30 bg-primary/5">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 animate-pulse" />
            <div>
              <p className="text-foreground font-medium">Open Public Testnet v0.11</p>
              <p className="text-muted-foreground text-sm mt-1">
                ComputeNet is currently in Open Public Testnet v0.11. Mainnet has not launched. 
                TEST-COMPUTE is non-economic and used only for research testing.
              </p>
            </div>
          </div>
        </div>

        {/* One-line Install */}
        <div className="glass-panel rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-xl font-semibold text-foreground">One-Line Install</h2>
            <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-primary/20 text-primary border border-primary/30 uppercase tracking-wider">
              Public Testnet
            </span>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            Install and run a ComputeNet validator with a single command:
          </p>
          <div className="relative bg-background rounded-lg p-4 font-mono text-sm border border-primary/30">
            <CopyButton text="curl -fsSL https://raw.githubusercontent.com/ComputeNetProtocol/computenet-validator/main/installer/install-validator.sh | bash" />
            <pre className="text-primary overflow-x-auto pr-12 whitespace-pre-wrap break-all">curl -fsSL https://raw.githubusercontent.com/ComputeNetProtocol/computenet-validator/main/installer/install-validator.sh | bash</pre>
          </div>
        </div>

        {/* Quick Commands */}
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Quick Commands</h2>
          <div className="grid gap-3">
            <div className="flex items-center justify-between bg-background/50 rounded-lg p-3">
              <code className="text-sm text-muted-foreground">computenet status</code>
              <span className="text-xs text-muted-foreground/70">Check node status</span>
            </div>
            <div className="flex items-center justify-between bg-background/50 rounded-lg p-3">
              <code className="text-sm text-muted-foreground">computenet peers</code>
              <span className="text-xs text-muted-foreground/70">List connected peers</span>
            </div>
            <div className="flex items-center justify-between bg-background/50 rounded-lg p-3">
              <code className="text-sm text-muted-foreground">computenet validator-id</code>
              <span className="text-xs text-muted-foreground/70">Show validator identity</span>
            </div>
          </div>
        </div>

        {/* Current Network State */}
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Current Network State</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-muted-foreground">Open Public Testnet v0.11</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-muted-foreground">Research preview</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-muted-foreground">Non-economic</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-muted-foreground">TEST-COMPUTE only</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
              <span className="text-muted-foreground">Mainnet not launched</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
              <span className="text-muted-foreground">External validator onboarding in v0.12</span>
            </div>
          </div>
        </div>

        {/* Bootstrap Peers */}
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Bootstrap Peers</h2>
          <p className="text-muted-foreground text-sm mb-4">
            The installer connects to these bootstrap nodes automatically:
          </p>
          <div className="space-y-2">
            <div className="bg-background/50 rounded-lg p-3 font-mono text-sm">
              <span className="text-muted-foreground">178.62.15.134:8787</span>
            </div>
            <div className="bg-background/50 rounded-lg p-3 font-mono text-sm">
              <span className="text-muted-foreground">138.68.134.235:8787</span>
            </div>
            <div className="bg-background/50 rounded-lg p-3 font-mono text-sm">
              <span className="text-muted-foreground">46.101.39.92:8787</span>
            </div>
          </div>
        </div>

        {/* Validator Responsibilities */}
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Validator Responsibilities</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-3 bg-background/50 rounded-lg p-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Activity className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Replay verification</span>
            </div>
            <div className="flex items-center gap-3 bg-background/50 rounded-lg p-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Compute receipt validation</span>
            </div>
            <div className="flex items-center gap-3 bg-background/50 rounded-lg p-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Attestation signing</span>
            </div>
            <div className="flex items-center gap-3 bg-background/50 rounded-lg p-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Server className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Proof propagation</span>
            </div>
            <div className="flex items-center gap-3 bg-background/50 rounded-lg p-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Activity className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Telemetry participation</span>
            </div>
            <div className="flex items-center gap-3 bg-background/50 rounded-lg p-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Server className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Witness coordination</span>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div className="glass-panel rounded-xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Useful Links</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <a
              href="https://github.com/ComputeNetProtocol/computenet-validator"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-background/50 hover:bg-background/80 rounded-lg p-4 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Github className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Validator GitHub Repo</p>
                <p className="text-xs text-muted-foreground truncate">github.com/ComputeNetProtocol/computenet-validator</p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </a>
            <a
              href="https://github.com/ComputeNetProtocol/computenet-docs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-background/50 hover:bg-background/80 rounded-lg p-4 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">ComputeNet Docs</p>
                <p className="text-xs text-muted-foreground truncate">github.com/ComputeNetProtocol/computenet-docs</p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </a>
            <Link
              href="/whitepaper"
              className="flex items-center gap-3 bg-background/50 hover:bg-background/80 rounded-lg p-4 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Whitepaper</p>
                <p className="text-xs text-muted-foreground truncate">ComputeNet Protocol Specification</p>
              </div>
            </Link>
            <Link
              href="/explorer"
              className="flex items-center gap-3 bg-background/50 hover:bg-background/80 rounded-lg p-4 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Activity className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Explorer</p>
                <p className="text-xs text-muted-foreground truncate">Live network telemetry</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Warning Note */}
        <div className="glass-panel rounded-xl p-6 border-yellow-500/30 bg-yellow-500/5">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2" />
            <div>
              <p className="text-yellow-400 font-medium">Research Testnet Only</p>
              <p className="text-muted-foreground text-sm mt-1">
                This installer is for the public research testnet only. It does not mine real COMPUTE, 
                does not create economic rewards, and does not connect to mainnet.
              </p>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="pt-4 border-t border-border/30">
          <p className="text-xs text-muted-foreground/60">Last updated: May 2026</p>
        </div>
      </section>
    </DocsLayout>
  );
}
