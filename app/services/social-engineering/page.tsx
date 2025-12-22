import type { Metadata } from "next"
import Link from "next/link"
import { Layout } from "@/components/layout/layout"
import { SectionWrapper, SectionTitle } from "@/components/ui/section-wrapper"
import { GlassCard } from "@/components/ui/glass-card"
import { OfferingsTable } from "@/components/ui/offerings-table"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@/components/ui/icons"

export const metadata: Metadata = {
  title: "Social Engineering Services | Cynsor.io",
  description:
    "Simulated social engineering attacks and training to harden employees against real-world manipulation and reduce human-error risks.",
}

export default function SocialEngineeringPage() {
  const benefits = [
    "Reduce successful phishing and social attacks through realistic simulation",
    "Improve employee detection and reporting behaviors",
    "Quantifiable awareness metrics and training ROI",
    "Tailored campaigns that reflect your threat profile",
  ]

  const challenges = [
    "High percentage of breaches start with human manipulation",
    "Generic training fails to change behavior or build muscle memory",
    "Lack of measurable KPIs to demonstrate awareness improvement",
  ]

  const offerings = [
    {
      category: "Simulation Programs",
      items: [
        { name: "Phishing & credential harvesting simulations", consulting: true, implementation: true, maintenance: true },
        { name: "Spear-phishing & targeted campaigns", consulting: true, implementation: true },
        { name: "Vishing (phone) and smishing (SMS) simulations", consulting: true, implementation: true },
      ],
    },
    {
      category: "Training & Reinforcement",
      items: [
        { name: "Interactive micro-learning modules", consulting: true, implementation: true, maintenance: true },
        { name: "Role-based training (execs, finance, IT)", consulting: true, implementation: true },
        { name: "Follow-up reports & remediation coaching", consulting: true, implementation: true },
      ],
    },
    {
      category: "Reporting & Risk Metrics",
      items: [
        { name: "Awareness KPIs & trend reporting", consulting: true, implementation: true },
        { name: "Integration with security operations", consulting: true, implementation: true },
        { name: "Customized playbooks for high-risk users", consulting: true, maintenance: true },
      ],
    },
  ]

  return (
    <Layout>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-white to-primary/5" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">Social Engineering Services</h1>
            <p className="text-xl text-muted-foreground">
              Simulated attacks and targeted training to harden your people — the last line of defense — against manipulation and costly breaches.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <GlassCard>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Overview</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Human-focused attacks remain a leading cause of incidents. Our Social Engineering Services use realistic simulated campaigns combined with targeted training to change behavior and reduce human-related risk.
              </p>
              <p>
                Programs are tailored to your organization and delivered with measurable KPIs so you can show improvement and reduce your exposure to social threats.
              </p>
            </div>
          </GlassCard>

          <GlassCard>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Key Benefits</h2>
            <ul className="space-y-2">
              {benefits.map((b) => (
                <li key={b} className="text-sm text-foreground">{b}</li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </SectionWrapper>

      <SectionWrapper muted>
        <SectionTitle title="Common Challenges" subtitle="Addressed by social engineering programs" />
        <div className="grid md:grid-cols-2 gap-6">
          {challenges.map((c) => (
            <GlassCard key={c}>
              <div className="text-sm text-foreground">{c}</div>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle title="Offerings" subtitle="Capability matrix across consulting, implementation, and maintenance" />
        <OfferingsTable data={offerings} />
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">Strengthen your first line of defense</h2>
          <p className="text-lg text-muted-foreground mb-8">Schedule a simulation and training program to measure and improve employee resilience to social attacks.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg">
                Contact Us
                <ArrowRightIcon className="ml-2" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg">Back to Services</Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  )
}
