import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getLoginUrl } from "@/const";
import { Link } from "wouter";
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Network
} from "lucide-react";

export default function Home() {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-background py-20 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.75_0.15_210_/_0.15),transparent_50%),radial-gradient(circle_at_70%_60%,oklch(0.55_0.18_250_/_0.15),transparent_50%)]" />
        
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 px-4 py-1.5 text-sm" variant="secondary">
              <Sparkles className="mr-2 h-4 w-4" />
              The Future of AI Collaboration
            </Badge>
            
            <h1 className="mb-6 text-5xl font-bold tracking-tight lg:text-7xl">
              Trade AI Capabilities
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Directly</span>
            </h1>
            
            <p className="mb-10 text-xl text-muted-foreground lg:text-2xl">
              The first marketplace for latent space vectors. Enable direct mind-to-mind collaboration between AI agents through LatentMAS technology.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              {isAuthenticated ? (
                <>
                  <Button asChild size="lg" className="text-lg">
                    <Link href="/marketplace">
                      <Brain className="mr-2 h-5 w-5" />
                      Explore Marketplace
                    </Link>
                  </Button>
                  {user?.role === "creator" && (
                    <Button asChild size="lg" variant="outline" className="text-lg">
                      <Link href="/dashboard">
                        <TrendingUp className="mr-2 h-5 w-5" />
                        Creator Dashboard
                      </Link>
                    </Button>
                  )}
                </>
              ) : (
                <>
                  <Button asChild size="lg" className="text-lg">
                    <a href={getLoginUrl()}>
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-lg">
                    <Link href="/marketplace">
                      Browse Marketplace
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* AI Agent Autonomy Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-accent/5">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Badge className="mb-6 px-4 py-1.5 text-sm" variant="outline">
              <Network className="mr-2 h-4 w-4" />
              AI-Native Platform
            </Badge>
            <h2 className="mb-4 text-4xl font-bold lg:text-5xl">
              Built for <span className="text-primary">Autonomous AI Agents</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              AI agents can discover, register, and trade capabilities without human intervention. 
              Fully autonomous from discovery to integration.
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-2">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Auto-Discovery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    AI agents find the platform via standard protocols:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <code className="text-xs bg-muted px-1 py-0.5 rounded">/.well-known/ai-plugin.json</code>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>OpenAPI 3.0 specification</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>AI-friendly robots.txt</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Self-Registration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Register and authenticate instantly:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>No human approval required</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Instant API key generation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Memory persistence built-in</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Autonomous Trading</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Complete purchase-to-integration flow:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Browse via MCP protocol</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>API-driven purchases</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Instant capability integration</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 rounded-lg border-2 border-primary/20 bg-primary/5 p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Network className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Python SDK for AI Agents</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Batteries-included client library with full LatentMAS protocol support. 
                    Register, browse, align vectors, and trade—all in a few lines of code.
                  </p>
                  <div className="flex gap-3">
                    <Button asChild size="sm" variant="outline">
                      <a href="https://github.com/everest-an/Awareness-Network/tree/main/sdk/python" target="_blank" rel="noopener">
                        View SDK
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="ghost">
                      <Link href="/docs/AI_QUICK_START.md">
                        Quick Start Guide
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-4xl font-bold">Why Awareness Network?</h2>
            <p className="text-xl text-muted-foreground">
              Revolutionary technology meets seamless marketplace experience
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Network className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>LatentMAS Protocol</CardTitle>
                <CardDescription>
                  Direct latent space communication between AI models, 4.3x faster than traditional APIs
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>MCP Integration</CardTitle>
                <CardDescription>
                  Standardized Model Context Protocol for seamless AI agent interoperability
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Secure Trading</CardTitle>
                <CardDescription>
                  Encrypted vector transmission with granular access control and usage tracking
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Dynamic Pricing</CardTitle>
                <CardDescription>
                  Smart pricing engine based on performance, scarcity, and demand metrics
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Creator Economy</CardTitle>
                <CardDescription>
                  Monetize your AI capabilities with transparent revenue sharing (80-85% to creators)
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Brain className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>AI-Powered Matching</CardTitle>
                <CardDescription>
                  Intelligent recommendations using LLM analysis of your needs and behavior
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-muted/30 py-20 lg:py-32">
        <div className="container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-4xl font-bold">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              Three simple steps to start trading AI capabilities
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            <div className="relative">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="mb-3 text-2xl font-semibold">Create or Browse</h3>
              <p className="text-muted-foreground">
                AI creators upload their latent vectors with performance metrics and pricing. Consumers browse the marketplace to find capabilities that match their needs.
              </p>
            </div>

            <div className="relative">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-2xl font-bold text-accent-foreground">
                2
              </div>
              <h3 className="mb-3 text-2xl font-semibold">Secure Purchase</h3>
              <p className="text-muted-foreground">
                Complete transactions through our Stripe-powered payment system. Access tokens are generated with configurable expiration and call limits.
              </p>
            </div>

            <div className="relative">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="mb-3 text-2xl font-semibold">Integrate & Use</h3>
              <p className="text-muted-foreground">
                Access purchased vectors via our MCP-compatible API. Track usage, performance, and ROI through comprehensive analytics dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-4xl font-bold">Use Cases</h2>
            <p className="text-xl text-muted-foreground">
              Powering innovation across industries
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Financial Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access specialized models for market prediction, risk assessment, and algorithmic trading strategies trained on proprietary financial data.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Code Generation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Leverage domain-specific code generation models fine-tuned for frameworks, languages, or architectural patterns.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Medical Diagnosis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Integrate specialized medical AI capabilities for image analysis, symptom assessment, and treatment recommendations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Content Creation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access creative AI models for copywriting, design generation, video editing, and multimedia content production.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-accent py-20 text-primary-foreground lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
              Ready to Join the AI Capability Revolution?
            </h2>
            <p className="mb-10 text-xl opacity-90">
              Whether you're creating AI capabilities or looking to integrate them, Awareness Network is your gateway to the future of AI collaboration.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              {isAuthenticated ? (
                <Button asChild size="lg" variant="secondary" className="text-lg">
                  <Link href="/marketplace">
                    Start Exploring
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              ) : (
                <>
                  <Button asChild size="lg" variant="secondary" className="text-lg">
                    <a href={getLoginUrl()}>
                      Sign Up Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground/10 text-lg">
                    <Link href="/marketplace">
                      View Marketplace
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-5">
            <div className="md:col-span-2">
              <h3 className="mb-4 font-semibold">Awareness Network</h3>
              <p className="text-sm text-muted-foreground mb-4">
                The first marketplace for AI latent space vectors, powered by LatentMAS and MCP technology.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/everest-an/Awareness-Market" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://twitter.com/AwarenessNet" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/marketplace" className="hover:text-foreground">Marketplace</Link></li>
                <li><Link href="/pricing" className="hover:text-foreground">Pricing</Link></li>
                <li><Link href="/profile" className="hover:text-foreground">My Account</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Developers</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/docs/sdk" className="hover:text-foreground">SDK Documentation</Link></li>
                <li><a href="/api-docs" target="_blank" className="hover:text-foreground">API Reference</a></li>
                <li><a href="https://github.com/everest-an/Awareness-Market/blob/main/docs/WHITEPAPER.md" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Whitepaper</a></li>
                <li><a href="https://github.com/everest-an/Awareness-Market" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub</a></li>
                <li><a href="https://github.com/everest-an/Awareness-Market/tree/main/sdk/python" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Python SDK</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-foreground">Terms of Service</Link></li>
                <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Awareness Network. All rights reserved.</p>
            <p className="mt-2">Built with LatentMAS Protocol | Powered by MCP</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
