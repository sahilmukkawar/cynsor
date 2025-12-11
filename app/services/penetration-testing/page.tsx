import type { Metadata } from "next"
import Link from "next/link"
import { Layout } from "@/components/layout/layout"
import { SectionWrapper, SectionTitle } from "@/components/ui/section-wrapper"
import { GlassCard } from "@/components/ui/glass-card"
import { OfferingsTable } from "@/components/ui/offerings-table"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@/components/ui/icons"

export const metadata: Metadata = {
  title: "Penetration Testing Services | Cynsor.io",
  description:
    "Real-world attack simulation with detailed reports and actionable remediation steps.",
}

export default function PenetrationTestingPage() {
  const benefits = [
    "Real-world exploitation to reveal true risk",
    "Compliance readiness with evidence-based reports",
    "Actionable remediation guidance and retesting",
    "Broad coverage across web, mobile, APIs and networks",
  ]

  const challenges = [
    "Unknown attack surface and shadow assets",
    "Legacy flaws hidden in critical apps",
    "API authentication and authorisation gaps",
    "Mobile insecure storage and transport",
    "Misconfigured cloud and exposed services",
  ]

  const offerings = [
    {
      category: "Web Applications",
      items: [
        { name: "OWASP Top 10 & Business Logic", consulting: true, implementation: true },
        { name: "Authenticated Workflows & Privilege Escalation", consulting: true, implementation: true },
        { name: "Report & Retest", consulting: true, implementation: true, maintenance: true },
      ],
    },
    {
      category: "APIs",
      items: [
        { name: "Authentication & Authorisation", consulting: true, implementation: true },
        { name: "Injection & Data Exposure", consulting: true, implementation: true },
        { name: "Rate Limiting & Abuse", consulting: true, implementation: true },
      ],
    },
    {
      category: "Mobile",
      items: [
        { name: "Android/iOS Storage & Transport", consulting: true, implementation: true },
        { name: "Reverse Engineering & Tampering", consulting: true, implementation: true },
      ],
    },
    {
      category: "Networks & Social Engineering",
      items: [
        { name: "Internal/External Network PT", consulting: true, implementation: true },
        { name: "Phishing & Awareness Exercises", consulting: true, implementation: true },
      ],
    },
  ]
  return (
    <Layout>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-white to-primary/5" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">Penetration Testing Services</h1>
            <p className="text-xl text-muted-foreground">
              Simulated cyber attacks to reveal weaknesses, with detailed reports and actionable fixes.
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
                Real-world attack simulation across your applications, APIs, mobile and networks to uncover exploitable
                weaknesses. We provide evidence-backed findings and prioritised remediation.
              </p>
              <p>
                Engagements can align to compliance objectives and include retesting to verify fixes.
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
        <SectionTitle title="Testing Snapshot" subtitle="Sample coverage and findings" />
        <div className="mx-auto max-w-3xl">
          <GlassCard>
            <div className="bg-muted rounded-lg p-6">
              <div className="flex items-end justify-between h-24 gap-1">
                {[50, 60, 70, 65, 55, 45, 40, 35, 30, 25].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-primary/30 rounded-t transition-all hover:bg-primary/60"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>Findings Closed</span>
                <span>Engagement</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle title="Common Challenges" subtitle="Addressed by penetration testing" />
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">Schedule a test</h2>
          <p className="text-lg text-muted-foreground mb-8">Get a testing plan aligned to your environment and compliance needs.</p>
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
