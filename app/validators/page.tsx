"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ChevronRight, Shield, Activity, CheckCircle2, Globe,
  Radio, AlertTriangle, Server, Clock, Zap, Network, Wifi,
  Copy, Terminal, ArrowRight, Eye, WifiOff, RefreshCw, Box
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTelemetry } from "@/hooks/use-telemetry"
import { formatNumber, formatLatency, formatLastPoll, VALIDATOR_ENDPOINTS } from "@/lib/telemetry"

const validatorRoles = [
  {
    title: "Receipt Validation",
    description: "Validators receive and verify compute receipts from the network.",
    icon: CheckCircle2,
  },
  {
    title: "Consensus Participation",
    description: "Cast weighted attestations and participate in consensus rounds.",
    icon: Network,
  },
  {
    title: "Peer Propagation",
    description: "Maintain peer connections and propagate validated receipts.",
    icon: Radio,
  },
  {
    title: "Uptime Reporting",
    description: "Report telemetry and maintain high availability.",
    icon: Activity,
  },
  {
    title: "Fraud Detection",
    description: "Identify and report dishonest or malformed execution.",
    icon: AlertTriangle,
  },
]

export default function ValidatorsPage() {
  const { validators, onlineCount, isLoading, lastUpdate, refresh } = useTelemetry()

  return (
      <main className="pt-16">
        {/* Header */}
        <section className="border-b border-border/50 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <span>Validators</span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-3xl sm:text-4xl font-bold">Validator Network</h1>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm text-primary font-medium">Research Testnet</span>
                </div>
              </div>
              <p className="text-muted-foreground max-w-2xl leading-relaxed">
                Validators serve as the trust infrastructure of ComputeNet — verifying receipts, 
                participating in consensus, and making useful compute observable and attestable.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Validator Roles */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl font-bold mb-4">Validator Responsibilities</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Each validator in the network performs critical functions to maintain 
                decentralized verification of useful compute.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {validatorRoles.map((role, index) => {
                const Icon = role.icon
                return (
                  <motion.div
                    key={role.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="glass-panel rounded-xl p-5 text-center hover:border-primary/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-medium text-sm mb-2">{role.title}</h3>
                    <p className="text-xs text-muted-foreground">{role.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Active Validators - LIVE DATA */}
        <section className="py-16 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-2">Active Validators</h2>
                <p className="text-muted-foreground">
                  Live testnet status - {onlineCount}/{validators.length} online
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground">
                  {lastUpdate > 0 ? `Updated: ${new Date(lastUpdate).toLocaleTimeString()}` : ''}
                </span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-2"
                  onClick={refresh}
                  disabled={isLoading}
                >
                  <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                  Refresh
                </Button>
                <Button asChild variant="outline" className="gap-2">
                  <Link href="/explorer">
                    <Eye className="w-4 h-4" />
                    View in Explorer
                  </Link>
                </Button>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-6">
              {validators.map((validator, index) => (
                <motion.div
                  key={validator.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-panel rounded-xl overflow-hidden"
                >
                  <div className="p-4 border-b border-border/50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        validator.online ? "bg-primary" : "bg-destructive"
                      }`} />
                      <span className="font-mono font-medium">{validator.name}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                        validator.online ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"
                      }`}>
                        {validator.online ? "online" : "offline"}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">{validator.region}</span>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-xs text-muted-foreground block mb-1">Truth Records</span>
                        <span className="font-mono text-lg">
                          {validator.status?.truth_records !== undefined 
                            ? validator.status.truth_records
                            : "N/A"}
                        </span>
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground block mb-1">Peers</span>
                        <span className="font-mono text-lg">
                          {validator.status?.peers !== undefined 
                            ? validator.status.peers
                            : "N/A"}
                        </span>
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground block mb-1">Queue</span>
                        <span className="font-mono">
                          {validator.status?.propagation_queue !== undefined 
                            ? validator.status.propagation_queue
                            : "N/A"}
                        </span>
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground block mb-1">Latency</span>
                        <span className="font-mono text-primary">
                          {formatLatency(validator.latencyMs)}
                        </span>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border/50 flex flex-col gap-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Radio className="w-3 h-3" />
                        <span className="font-mono truncate">{validator.url}/status</span>
                      </div>
                      {validator.lastSuccessfulPoll && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>Last poll: {formatLastPoll(validator.lastSuccessfulPoll)}</span>
                        </div>
                      )}
                      {validator.error && !validator.online && (
                        <div className="flex items-center gap-1 text-destructive">
                          <AlertTriangle className="w-3 h-3" />
                          <span>{validator.error}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Telemetry Disclaimer */}
            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground/50">
                Telemetry reflects live ComputeNet research/testnet activity.
              </p>
            </div>
          </div>
        </section>

        {/* Attestation Model */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6">Attestation Model</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Validators independently verify compute receipts and cast weighted attestations. 
                  No single validator is treated as authoritative — trust emerges from independent 
                  reproducibility across the network.
                </p>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Receipt received", desc: "Validator receives compute receipt" },
                    { step: "2", title: "Re-execution", desc: "Workload is independently re-executed" },
                    { step: "3", title: "Hash comparison", desc: "Execution hashes are compared" },
                    { step: "4", title: "Attestation cast", desc: "Weighted vote is submitted" },
                    { step: "5", title: "Consensus check", desc: "Acceptance ratio is calculated" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-primary font-mono text-sm">{item.step}</span>
                      </div>
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-panel rounded-xl p-6"
              >
                <div className="font-mono text-sm space-y-4">
                  <div className="text-muted-foreground">// Live network status</div>
                  <div className="p-4 rounded-lg bg-secondary/50 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">validators_online:</span>
                      <span className="text-primary">{onlineCount}/{validators.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">total_truth_records:</span>
                      <span>{validators.reduce((sum, v) => sum + (v.status?.truth_records || 0), 0)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">total_peers:</span>
                      <span>{validators.reduce((sum, v) => sum + (v.status?.peers || 0), 0)}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {validators.map((v) => (
                      <div key={v.id} className="flex items-center justify-between p-2 rounded bg-secondary/30">
                        <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${v.online ? 'bg-primary' : 'bg-destructive'}`} />
                          <span className="text-muted-foreground">{v.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          {v.latencyMs && (
                            <span className="text-muted-foreground/70">{v.latencyMs}ms</span>
                          )}
                          <span className={v.online ? "text-primary" : "text-destructive"}>
                            {v.online ? "online" : "offline"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border/50 flex justify-between">
                    <span className="text-muted-foreground">network_status:</span>
                    <span className="text-primary text-lg font-semibold">
                      {onlineCount > 0 ? "operational" : "offline"}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Node Endpoints */}
        <section className="py-16 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl font-bold mb-4">Node Endpoints</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Live testnet validator endpoints for network connectivity.
              </p>
            </motion.div>

            <div className="glass-panel rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary/30">
                    <tr className="text-xs text-muted-foreground">
                      <th className="text-left p-4 font-medium">Endpoint</th>
                      <th className="text-left p-4 font-medium">Region</th>
                      <th className="text-left p-4 font-medium">Status</th>
                      <th className="text-left p-4 font-medium">Latency</th>
                      <th className="text-left p-4 font-medium">Last Poll</th>
                      <th className="text-right p-4 font-medium"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    {VALIDATOR_ENDPOINTS.map((endpoint) => {
                      const validator = validators.find(v => v.id === endpoint.id)
                      return (
                        <tr key={endpoint.id} className="hover:bg-secondary/30 transition-colors">
                          <td className="p-4">
                            <span className="font-mono text-sm">{endpoint.url}/status</span>
                          </td>
                          <td className="p-4">
                            <span className="text-sm text-muted-foreground">{endpoint.region}</span>
                          </td>
                          <td className="p-4">
                            <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs ${
                              validator?.online 
                                ? "bg-primary/10 text-primary" 
                                : "bg-destructive/10 text-destructive"
                            }`}>
                              {validator?.online ? (
                                <CheckCircle2 className="w-3 h-3" />
                              ) : (
                                <WifiOff className="w-3 h-3" />
                              )}
                              {validator?.online ? "Online" : "Offline"}
                            </span>
                          </td>
                          <td className="p-4">
                            <span className="font-mono text-sm text-primary">
                              {formatLatency(validator?.latencyMs ?? null)}
                            </span>
                          </td>
                          <td className="p-4">
                            <span className="text-sm text-muted-foreground">
                              {formatLastPoll(validator?.lastSuccessfulPoll ?? null)}
                            </span>
                          </td>
                          <td className="p-4 text-right">
                            <button 
                              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                              onClick={() => navigator.clipboard.writeText(`${endpoint.url}/status`)}
                              title="Copy endpoint"
                            >
                              <Copy className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Validator Setup - PUBLIC TESTNET */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl p-8 md:p-12 border-primary/20"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm mb-4">
                    <Globe className="w-4 h-4" />
                    <span>Public Testnet</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Run a Validator</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Join the ComputeNet Open Public Testnet and participate in decentralized 
                    useful compute verification.
                  </p>

                  {/* Status Notes */}
                  <div className="glass-panel rounded-xl p-4 mb-6 bg-secondary/30">
                    <div className="text-xs font-medium text-muted-foreground mb-3">Network Status</div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span>Open Public Testnet v0.11</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-chart-4" />
                        <span>v0.12 Onboarding Active</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-muted" />
                        <span>TEST-COMPUTE Only</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-muted" />
                        <span>Non-Economic</span>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-border/50 text-xs text-muted-foreground">
                      Research preview — Mainnet not launched
                    </div>
                  </div>

                  {/* Bootstrap Peers */}
                  <div className="mb-6">
                    <div className="text-xs font-medium text-muted-foreground mb-2">Bootstrap Peers</div>
                    <div className="space-y-1.5 font-mono text-xs">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Radio className="w-3 h-3 text-primary" />
                        <span>178.62.15.134:8787</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Radio className="w-3 h-3 text-primary" />
                        <span>138.68.134.235:8787</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Radio className="w-3 h-3 text-primary" />
                        <span>46.101.39.92:8787</span>
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    <Button asChild size="sm" className="gap-2">
                      <Link href="/docs/validators/setup">
                        <Shield className="w-4 h-4" />
                        Validator Docs
                      </Link>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="gap-2">
                      <Link href="/docs/validators/requirements">
                        <Server className="w-4 h-4" />
                        Hardware Requirements
                      </Link>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="gap-2">
                      <a href="https://github.com/ComputeNetProtocol/computenet-validator" target="_blank" rel="noopener noreferrer">
                        <Terminal className="w-4 h-4" />
                        GitHub Repo
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="gap-2">
                      <Link href="/explorer">
                        <Eye className="w-4 h-4" />
                        Explorer
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Installer Panel */}
                <div className="space-y-4">
                  {/* One-Line Install */}
                  <div className="glass-panel rounded-xl p-6 bg-secondary/30">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Terminal className="w-5 h-5 text-primary" />
                        <span className="font-mono text-sm">One-Line Install</span>
                      </div>
                      <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-primary/20 text-primary border border-primary/30 uppercase tracking-wider">
                        Public Testnet
                      </span>
                    </div>
                    <div className="relative">
                      <pre className="font-mono text-xs bg-background/50 rounded-lg p-4 overflow-x-auto text-primary">
                        curl -fsSL https://raw.githubusercontent.com/ComputeNetProtocol/computenet-validator/main/installer/install-validator.sh | bash
                      </pre>
                      <button
                        className="absolute top-2 right-2 p-2 rounded-lg bg-background/80 hover:bg-background text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => navigator.clipboard.writeText('curl -fsSL https://raw.githubusercontent.com/ComputeNetProtocol/computenet-validator/main/installer/install-validator.sh | bash')}
                        title="Copy command"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Quick Commands */}
                  <div className="glass-panel rounded-xl p-6 bg-secondary/30">
                    <div className="flex items-center gap-3 mb-4">
                      <Zap className="w-5 h-5 text-muted-foreground" />
                      <span className="font-mono text-sm text-muted-foreground">Quick Commands</span>
                    </div>
                    <div className="font-mono text-sm space-y-2">
                      <div className="flex items-center justify-between p-2 rounded bg-background/30">
                        <span className="text-muted-foreground">computenet status</span>
                        <span className="text-xs text-muted-foreground/50">Check node status</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-background/30">
                        <span className="text-muted-foreground">computenet peers</span>
                        <span className="text-xs text-muted-foreground/50">List connected peers</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-background/30">
                        <span className="text-muted-foreground">computenet validator-id</span>
                        <span className="text-xs text-muted-foreground/50">Show validator ID</span>
                      </div>
                    </div>
                  </div>

                  {/* Warning */}
                  <div className="p-4 rounded-lg border border-yellow-500/30 bg-yellow-500/5">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                      <p className="text-xs text-muted-foreground">
                        This installer is for the public research testnet only. It does not mine real COMPUTE, 
                        does not create economic rewards, and does not connect to mainnet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Documentation CTA */}
        <section className="py-16 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4">Learn More</h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Explore the technical documentation to understand the validator architecture, 
                consensus mechanism, and network topology.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="gap-2">
                  <Link href="/docs/validators">
                    <Shield className="w-4 h-4" />
                    Validator Docs
                  </Link>
                </Button>
                <Button asChild variant="outline" className="gap-2">
                  <Link href="/architecture">
                    <Globe className="w-4 h-4" />
                    Architecture
                  </Link>
                </Button>
                <Button asChild variant="outline" className="gap-2">
                  <Link href="/whitepaper">
                    <Box className="w-4 h-4" />
                    Whitepaper
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
  )
}
