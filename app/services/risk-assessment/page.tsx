import type { Metadata } from "next"
import Link from "next/link"
import { Layout } from "@/components/layout/layout"
import { SectionWrapper, SectionTitle } from "@/components/ui/section-wrapper"
import { GlassCard } from "@/components/ui/glass-card"
import { OfferingsTable } from "@/components/ui/offerings-table"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@/components/ui/icons"

export const metadata: Metadata = {
  title: "Risk Assessment Services | Cynsor.io",
  description: "Holistic risk assessments for CMMC, ISO 27001, NIST, and PCI with practical remediation roadmaps.",
}

export default function RiskAssessmentPage() {
  const benefits = [
    "Compliance mapping for CMMC, ISO 27001, NIST, PCI",
    "Holistic risk analysis across people, process, and technology",
    "Actionable remediation roadmaps with prioritized fixes",
    "Clear evidence & deliverables for auditors and stakeholders",
  ]

  const challenges = [
    "Unclear compliance gaps across standards",
    "Fragmented asset inventories and undocumented risk",
    "Competing priorities with limited security budget",
    "Difficulty translating risk to business impact",
  ]

  const offerings = [
    {
      category: "Risk & Compliance Assessments",
      items: [
        { name: "CMMC, NIST, ISO 27001, PCI gap analysis", consulting: true, implementation: false, maintenance: true },
        { name: "Third-party & supply-chain risk review", consulting: true, implementation: true },
        { name: "Business impact & criticality modelling", consulting: true, implementation: true, maintenance: true },
      ],
    },
    {
      category: "Technical Assessments",
      items: [
        { name: "Network & cloud risk scanning", consulting: true, implementation: true },
        { name: "Vulnerability & configuration review", consulting: true, implementation: true, maintenance: true },
        { name: "Identity & access risk analysis", consulting: true, implementation: true },
      ],
    },
    {
      category: "Remediation & Roadmaps",
      items: [
        { name: "Prioritised remediation playbook", consulting: true, implementation: true, maintenance: true },
        { name: "Compliance evidence & auditor support", consulting: true },
        { name: "CISO advisory & governance handoff", consulting: true, maintenance: true },
      ],
    },
  ]

  return (
    <Layout>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-white to-primary/5" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">Risk Assessment Services</h1>
            <p className="text-xl text-muted-foreground">
              We perform pragmatic, standards-aligned risk assessments and produce prioritized remediation roadmaps that reduce risk and satisfy auditors.
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
                Our Risk Assessment Services combine technical testing, process reviews, and compliance mapping to give you a clear picture of organizational risk. We identify the gaps that matter most and produce prioritized, practical remediation plans so you can make measurable progress quickly.
              </p>
              <p>
                Whether you are preparing for CMMC, ISO 27001, PCI, or aligning to NIST frameworks, we provide evidence-focused assessments and ongoing advisory support to speed certification and reduce audit friction.
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
        <SectionTitle title="Common Challenges" subtitle="Addressed by risk assessments" />
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">Start your assessment</h2>
          <p className="text-lg text-muted-foreground mb-8">Talk to our team and get a tailored risk assessment plan that fits your compliance and business goals.</p>
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
