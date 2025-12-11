import type { Metadata } from "next"
import Link from "next/link"
import { Layout } from "@/components/layout/layout"
import { SectionWrapper, SectionTitle } from "@/components/ui/section-wrapper"
import { GlassCard } from "@/components/ui/glass-card"
import { OfferingsTable } from "@/components/ui/offerings-table"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@/components/ui/icons"

export const metadata: Metadata = {
  title: "Managed Network Security Services | Cynsor.io",
  description:
    "Comprehensive managed network security with 24/7 monitoring, prevention, detection, and incident response.",
}

export default function ManagedNetworkSecurityPage() {
  const benefits = [
    "Unified visibility across SIEM, EDR and network sensors",
    "24/7 monitoring by seasoned professionals",
    "Rapid incident response and containment",
    "Minimal disruption to business operations",
  ]

  const challenges = [
    "Tool sprawl and fragmented visibility",
    "Evolving threats across perimeter and cloud",
    "Limited in-house security staff",
    "Slow, manual incident processes",
  ]

  const offerings = [
    {
      category: "Network Security Operations",
      items: [
        { name: "24/7 Monitoring & Alerting", consulting: true, implementation: true, maintenance: true },
        { name: "Incident Response & Containment", consulting: true, implementation: true, maintenance: true },
        { name: "Runbooks & Automation", consulting: true, implementation: true, maintenance: true },
      ],
    },
    {
      category: "Threat Monitoring & Response",
      items: [
        { name: "SIEM Integration", consulting: true, implementation: true, maintenance: true },
        { name: "EDR Management", consulting: true, implementation: true, maintenance: true },
        { name: "Threat Intelligence & Hunting", consulting: true, implementation: true },
      ],
    },
    {
      category: "Perimeter & Identity",
      items: [
        { name: "Firewall & IDS/IPS Tuning", consulting: true, implementation: true, maintenance: true },
        { name: "Secure VPN Access", consulting: true, implementation: true, maintenance: true },
        { name: "Zero Trust Foundations", consulting: true, implementation: true },
      ],
    },
  ]
  return (
    <Layout>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-white to-primary/5" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">Managed Network Security Services</h1>
            <p className="text-xl text-muted-foreground">
              Let us handle everything with our complete security package. It's affordable, saves you time, and protects your business with experts on watch.
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
                Comprehensive enterprise-grade protection across your networks and endpoints. We unify SIEM/EDR signals,
                continuously monitor, and respond rapidly to incidents while minimising disruption.
              </p>
              <p>
                Our operations integrate with your existing technology and processes for seamless deployment and
                measurable improvements from day one.
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
        <SectionTitle title="Security Snapshot" subtitle="Sample live-style metrics" />
        <div className="mx-auto max-w-3xl">
          <GlassCard>
            <div className="bg-muted rounded-lg p-6">
              <div className="flex items-end justify-between h-24 gap-1">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-primary/30 rounded-t transition-all hover:bg-primary/60"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>Threats Blocked</span>
                <span>This Week</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle title="Common Challenges" subtitle="Addressed by managed network security" />
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">Get protected now</h2>
          <p className="text-lg text-muted-foreground mb-8">Speak with our team to tailor managed security to your environment.</p>
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
