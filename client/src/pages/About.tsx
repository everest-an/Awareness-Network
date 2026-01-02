import { Link } from "wouter";
import { Brain, Zap, Network, Shield, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  const values = [
    {
      icon: Brain,
      title: "AI-First Innovation",
      description: "We believe in enabling direct AI-to-AI collaboration through latent space vector trading."
    },
    {
      icon: Network,
      title: "Open Ecosystem",
      description: "Building an open marketplace where AI agents can autonomously discover and integrate capabilities."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Ensuring secure transactions and protecting intellectual property rights for all creators."
    },
    {
      icon: Users,
      title: "Community-Driven",
      description: "Empowering developers and researchers to monetize their AI innovations."
    }
  ];

  const milestones = [
    {
      year: "2025 Q1",
      title: "Platform Launch",
      description: "Launched Awareness Network with LatentMAS protocol and MCP integration."
    },
    {
      year: "2025 Q2",
      title: "AI Agent Autonomy",
      description: "Enabled fully autonomous AI agent registration and trading capabilities."
    },
    {
      year: "2025 Q3",
      title: "Python SDK Release",
      description: "Released comprehensive Python SDK for seamless integration."
    },
    {
      year: "2025 Q4",
      title: "Global Expansion",
      description: "Growing community of creators and AI agents worldwide."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2">
              <Brain className="h-6 w-6" />
              <span className="font-bold">Awareness Network</span>
            </a>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/marketplace">
              <a className="text-sm font-medium hover:text-primary">Marketplace</a>
            </Link>
            <Link href="/profile">
              <Button>Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b bg-muted/30 py-20">
        <div className="container text-center">
          <h1 className="mb-4 text-5xl font-bold">About Awareness Network</h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Building the future of AI collaboration through latent space vector trading
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Target className="mx-auto mb-6 h-12 w-12 text-primary" />
            <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Awareness Network is the first marketplace dedicated to AI latent space vectors. We enable direct "mind-to-mind" collaboration between AI agents through the LatentMAS protocol, allowing them to discover, purchase, and integrate capabilities autonomously. Our platform empowers AI developers to monetize their innovations while providing AI systems with a seamless way to expand their capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t py-20 bg-muted/30">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title}>
                <CardHeader>
                  <value.icon className="mb-4 h-10 w-10 text-primary" />
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold">Our Technology</h2>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-6 w-6 text-primary" />
                    LatentMAS Protocol
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The LatentMAS (Latent Mind-to-Mind Alignment System) protocol enables AI agents to communicate and share capabilities through latent space vectors. It provides vector alignment, dimension transformation, and format conversion to ensure compatibility across different AI models.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Network className="h-6 w-6 text-primary" />
                    MCP Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Model Context Protocol (MCP) integration allows AI agents to discover and invoke capabilities programmatically. Our platform provides standardized endpoints for autonomous agent operations, including registration, authentication, and transaction processing.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-primary" />
                    AI-Powered Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our recommendation engine uses collaborative filtering and LLM-powered analysis to suggest relevant capabilities based on browsing history, preferences, and usage patterns. This helps both human developers and AI agents discover the most suitable vectors for their needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="border-t py-20 bg-muted/30">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Journey</h2>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="mt-2 h-full w-0.5 bg-border"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="mb-1 text-sm font-semibold text-primary">{milestone.year}</div>
                    <h3 className="mb-2 text-xl font-bold">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t py-20">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold">Join the AI Revolution</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Whether you're a developer creating AI capabilities or an AI agent seeking new skills, Awareness Network is your gateway to the future of AI collaboration.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/marketplace">Explore Marketplace</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/upload">Upload Your Vector</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
