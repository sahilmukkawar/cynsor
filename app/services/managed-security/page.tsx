import type { Metadata } from "next"
import Link from "next/link"
import { Layout } from "@/components/layout/layout"
import { SectionWrapper, SectionTitle } from "@/components/ui/section-wrapper"
import { GlassCard } from "@/components/ui/glass-card"
import { OfferingsTable } from "@/components/ui/offerings-table"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@/components/ui/icons"

export const metadata: Metadata = {
  title: "Managed Security Services | Cynsor.io",
  description:
    "Cost-effective managed security with expert-led alerting, continuous monitoring, and tailored processes to reduce risk and operational overhead.",
}

export default function ManagedSecurityPage() {
  const benefits = [
    "Cost-effective security with predictable pricing",
    "Human-enhanced alerts to reduce false positives",
    "Tailored playbooks and rapid incident handling",
    "Reduced operational burden for internal teams",
  ]

  const challenges = [
    "Alert fatigue and noisy tooling",
    "Lack of tailored processes for small teams",
    "Budget constraints limiting full-time hiring",
    "Difficulty maintaining 24/7 coverage",
  ]

  const offerings = [
    {
      category: "Managed Operations",
      items: [
        { name: "24/7 Monitoring & Triage", consulting: true, implementation: true, maintenance: true },
        { name: "Alert enrichment & human validation", consulting: true, implementation: true },
        { name: "Incident playbooks & runbooks", consulting: true, implementation: true, maintenance: true },
      ],
    },
    {
      category: "Threat Detection & Response",
      items: [
        { name: "AI-assisted threat detection", consulting: true, implementation: true },
        { name: "Automated containment & response actions", consulting: true, implementation: true },
        { name: "Threat hunting & intelligence feeds", consulting: true, implementation: true },
      ],
    },
    {
      category: "Integration & Enablement",
      items: [
        { name: "SIEM/EDR/Cloud integration", consulting: true, implementation: true, maintenance: true },
        { name: "Process handoff & knowledge transfer", consulting: true, implementation: true },
        { name: "Reporting & executive dashboards", consulting: true, maintenance: true },
      ],
    },
  ]

  return (
    <Layout>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-white to-primary/5" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">Managed Security Services</h1>
            <p className="text-xl text-muted-foreground">
              Simplify your security with a managed solution that pairs technology with expert human validation and tailored processes to keep your business secure on budget.
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
                Our Managed Security Services combine the best tools, human expertise, and documented processes to deliver reliable security operations at a predictable cost. We focus on reducing noise and acting on the alerts that matter most.
              </p>
              <p>
                Whether you need full SOC-as-a-service or targeted operational support, our teams tailor the engagement to your environment and maturity level for measurable risk reduction.
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
        <SectionTitle title="Common Challenges" subtitle="Addressed by managed security" />
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">Get managed security</h2>
          <p className="text-lg text-muted-foreground mb-8">Talk to our team about a managed program that fits your budget and operational needs.</p>
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
