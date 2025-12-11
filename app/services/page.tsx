import type React from "react"
import { Layout } from "@/components/layout/layout"
import { SectionWrapper, SectionTitle } from "@/components/ui/section-wrapper"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { BadgeCustom } from "@/components/ui/badge-custom"
import { services } from "@/data/services"
import { ArrowRightIcon, CheckIcon, ShieldIcon, NetworkIcon, UsersIcon, SearchIcon } from "@/components/ui/icons"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | Cynsor.io",
  description: "Explore our comprehensive AI-powered cybersecurity services for startups and SMBs.",
}

const iconMap: Record<string, React.ReactNode> = {
  network: <NetworkIcon className="w-8 h-8" />,
  shield: <ShieldIcon className="w-8 h-8" />,
  users: <UsersIcon className="w-8 h-8" />,
  search: <SearchIcon className="w-8 h-8" />,
}

const serviceDetails: Record<string, { benefits: string[]; integrations: string[] }> = {
  "managed-network-security": {
    benefits: ["24/7 expert monitoring", "Affordable pricing", "Complete peace of mind"],
    integrations: ["Firewall", "IDS/IPS", "SIEM", "VPN", "EDR"],
  },
  "virtual-ciso": {
    benefits: ["Strategic planning", "Weekly guidance", "Dedicated team"],
    integrations: ["Risk Assessment", "Policy Development", "Compliance", "Training"],
  },
  "vulnerability-management": {
    benefits: ["AI-powered scanning", "48-hour remediation", "Continuous monitoring"],
    integrations: ["Web Apps", "Networks", "Cloud", "APIs", "Containers"],
  },
  "penetration-testing": {
    benefits: ["Real-world attack simulation", "Detailed reports", "Actionable fixes"],
    integrations: ["Web Apps", "Mobile Apps", "APIs", "Networks", "Social Engineering"],
  },
}

const miniFaq = [
  {
    question: "How quickly can you start?",
    answer: "Most clients are onboarded within 48 hours. We can begin protecting your business almost immediately.",
  },
  {
    question: "Do you offer custom solutions?",
    answer: "Yes, we tailor our services to meet your specific needs, industry requirements, and budget.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve startups, SMBs, healthcare, financial services, and more with industry-specific compliance support.",
  },
]

export default function ServicesPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-white to-primary/5" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <BadgeCustom variant="primary" className="mb-6">
              AI-Powered Security
            </BadgeCustom>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
              Explore Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive enterprise-grade security for startups and SMBs, fully overseen by DoD-trained and seasoned professionals. Seamless integration into your existing processes and technology without disrupting operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg">
                  Book An Appointment
                  <ArrowRightIcon className="ml-2" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Get a Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <SectionWrapper>
        <div className="space-y-16">
          {services.map((service, index) => {
            const details = serviceDetails[service.id]
            return (
              <div
                key={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    {iconMap[service.icon]}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight mb-4 text-foreground">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>

                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                            <CheckIcon className="w-4 h-4 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                        Benefits
                      </h4>
                      <ul className="space-y-2">
                        {details?.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-2 text-sm text-foreground">
                            <CheckIcon className="w-4 h-4 text-accent" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                      Coverage
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {details?.integrations.map((integration) => (
                        <BadgeCustom key={integration} variant="outline">
                          {integration}
                        </BadgeCustom>
                      ))}
                    </div>
                  </div>

                  <Link href={`/services/${service.id}`}>
                    <Button>
                      Learn More
                      <ArrowRightIcon className="ml-2" />
                    </Button>
                  </Link>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-white rounded-2xl p-6 md:p-8 border border-border shadow-sm">
                    <div className="bg-muted rounded-lg p-6 mb-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-foreground">{service.title}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          <span className="text-xs text-muted-foreground">Active</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="bg-white rounded-lg p-3 text-center border border-border">
                            <div className="text-lg font-bold text-primary">
                              {i === 1 ? "24/7" : i === 2 ? "48h" : "100%"}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {i === 1 ? "Monitoring" : i === 2 ? "Response" : "Coverage"}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-end justify-between h-20 gap-1">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-primary/20 rounded-t hover:bg-primary/40 transition-colors"
                          style={{ height: `${30 + Math.random() * 60}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </SectionWrapper>

      {/* Mini FAQ */}
      <SectionWrapper muted>
        <SectionTitle title="Common Questions" subtitle="Quick answers about our services" />
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {miniFaq.map((item) => (
            <GlassCard key={item.question}>
              <h3 className="font-semibold mb-2 text-foreground">{item.question}</h3>
              <p className="text-sm text-muted-foreground">{item.answer}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/5 via-white to-accent/5 border border-primary/20 p-8 md:p-12 lg:p-16 text-center">
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
              Ready to get started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a free security assessment and see how Cynsor can protect your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg">
                  Book An Appointment
                  <ArrowRightIcon className="ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  )
}
