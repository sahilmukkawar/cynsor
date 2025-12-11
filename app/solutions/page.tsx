import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Layout } from "@/components/layout/layout"
import { SectionWrapper, SectionTitle } from "@/components/ui/section-wrapper"
import { GlassCard } from "@/components/ui/glass-card"
import { BadgeCustom } from "@/components/ui/badge-custom"
import { Button } from "@/components/ui/button"
import { NetworkIcon, ShieldIcon, UsersIcon, SearchIcon, TargetIcon, ArrowRightIcon } from "@/components/ui/icons"

export const metadata: Metadata = {
  title: "Solutions | Cynsor.io",
  description:
    "Experience top-notch solutions that redefine cybersecurity, ensuring robust protection and peace of mind with our services.",
}

const solutions: Array<{ id: string; title: string; description: string; icon: React.ReactNode }> = [
  {
    id: "managed-security-services",
    title: "Managed Security Services",
    description:
      "Our managed services offer effective tools, expert guidance, and tailored processes on a budget. We use human intelligence to enhance alerts, going beyond technology.",
    icon: <NetworkIcon className="w-8 h-8" />,
  },
  {
    id: "virtual-ciso-services",
    title: "Virtual CISO Services",
    description:
      "Craft a tailored cyber plan with our vCISO experts, identifying strengths, vulnerabilities, and risks, while providing ongoing support for success.",
    icon: <ShieldIcon className="w-8 h-8" />,
  },
  {
    id: "vulnerability-management-services",
    title: "Vulnerability Management Services",
    description:
      "Maximize security ROI with our streamlined vulnerability analysis, customizing threat prioritization for effective simplicity.",
    icon: <SearchIcon className="w-8 h-8" />,
  },
  {
    id: "penetration-testing-services",
    title: "Penetration Testing Services",
    description:
      "Automate agility for instant penetration testing ROI with rapid threat surface discovery and remediation.",
    icon: <TargetIcon className="w-8 h-8" />,
  },
  {
    id: "social-engineering-services",
    title: "Social Engineering Services",
    description:
      "Simulated attacks train employees to resist social engineering, guarding against 98% of human error-based cyber threats.",
    icon: <UsersIcon className="w-8 h-8" />,
  },
  {
    id: "risk-assessment-services",
    title: "Risk Assessment Services",
    description:
      "Believe in holistic risk assessment for CMMC, ISO 27001, NIST, and PCI compliance with our expert guidance.",
    icon: <TargetIcon className="w-8 h-8" />,
  },
]

export default function SolutionsPage() {
  return (
    <Layout>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-white to-primary/5" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <BadgeCustom variant="primary" className="mb-6">
              Our Services
            </BadgeCustom>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
              Solutions
            </h1>
            <p className="text-xl text-muted-foreground">
              Experience top-notch solutions that redefine cybersecurity, ensuring robust protection and peace of mind with our services.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <SectionTitle title="Our Services" subtitle="Explore the solutions we offer" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <GlassCard key={s.id} className="group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {s.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.description}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">Ready to get started?</h2>
          <p className="text-lg text-muted-foreground mb-8">Get a free security assessment and see how Cynsor can protect your business.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg">
                Book An Appointment
                <ArrowRightIcon className="ml-2" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg">View Our Services</Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  )
}

