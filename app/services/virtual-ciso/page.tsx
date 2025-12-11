import type { Metadata } from "next"
import Link from "next/link"
import { Layout } from "@/components/layout/layout"
import { SectionWrapper, SectionTitle } from "@/components/ui/section-wrapper"
import { GlassCard } from "@/components/ui/glass-card"
import { OfferingsTable } from "@/components/ui/offerings-table"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@/components/ui/icons"

export const metadata: Metadata = {
  title: "Virtual CISO Services | Cynsor.io",
  description:
    "Virtual CISO services provide executive-level security leadership, tailored cyber strategy, and ongoing guidance.",
}

const offerings = [
  {
    category: "Governance",
    items: [
      { name: "Security Threat and Maturity Assessment", consulting: true },
      { name: "Strategy and Operating Model", consulting: true },
      { name: "Policies, Standards, and Procedural Frameworks", consulting: true },
      { name: "Security Risk Management and Reporting", consulting: true, implementation: true },
      { name: "Security of Mergers and Acquisitions", consulting: true, implementation: true },
      { name: "Security compliance/Regulatory readiness Audits", consulting: true, implementation: true },
      { name: "Third-party Risk Assessment", consulting: true },
      { name: "Security tools evaluations", consulting: true, implementation: true, maintenance: true },
    ],
  },
  {
    category: "Application Security",
    items: [
      { name: "Enterprise Application Security Program", consulting: true, implementation: true, maintenance: false },
      { name: "Secure Software Development Lifecycle", consulting: true, implementation: true, maintenance: false },
      { name: "Application Penetration Testing", consulting: true, implementation: true, maintenance: false },
      { name: "Application Protection", consulting: true, implementation: true, maintenance: false },
      { name: "Security By Design", consulting: true, implementation: true, maintenance: false },
      { name: "Data Privacy by Design", consulting: true, implementation: false, maintenance: false },
    ],
  },
  {
    category: "Data Protection",
    items: [
      { name: "GDPR Readiness Assessment and Roadmap", consulting: true, implementation: false, maintenance: false },
      { name: "Data Loss Prevention", consulting: true, implementation: false, maintenance: false },
      { name: "BCP, DR", consulting: true, implementation: false, maintenance: false },
    ],
  },
  {
    category: "Infra/System Security",
    items: [
      { name: "Cloud Security", consulting: true, implementation: true, maintenance: true },
      { name: "Vulnerability Management", consulting: true, implementation: true, maintenance: true },
      { name: "Penetration Testing", consulting: true, implementation: true, maintenance: false },
      { name: "Malware Protection", consulting: true, implementation: true, maintenance: false },
      { name: "Network Security (Cloud Infra)", consulting: true, implementation: true, maintenance: true },
    ],
  },
  {
    category: "Identity Protection",
    items: [
      { name: "IAM platform design and implementation", consulting: true, implementation: true, maintenance: false },
      { name: "Brand Protection", consulting: true, implementation: true, maintenance: false },
    ],
  },
  {
    category: "Threat Intelligence",
    items: [
      { name: "Threat Modelling", consulting: true, implementation: true },
      { name: "Threat Hunting", consulting: true, implementation: false, maintenance: false },
      { name: "Zero-day, Security News Briefings", consulting: true, implementation: false, maintenance: false },
    ],
  },
  {
    category: "Security Monitoring",
    items: [
      { name: "Tools deployments, Orchestrations and Automation", consulting: true, implementation: true, maintenance: true },
      { name: "SIEM Intelligence", consulting: true, implementation: true },
      { name: "SOC Design and Deployment", consulting: true, implementation: true },
      { name: "Incident Response", consulting: true, implementation: true },
    ],
  },
  {
    category: "Training and Awareness",
    items: [
      { name: "Security Workshops", consulting: true },
      { name: "Table-Top Exercise", consulting: true },
      { name: "Simulation Exercise", consulting: true },
    ],
  },
]

const benefits = [
  "Access to top-tier cybersecurity expertise",
  "Cost-effectiveness versus hiring a full-time CISO",
  "Maximise the ROI by prioritising highest-risk areas",
  "Flexibility and scalability tailored to changing needs",
]

const challenges = [
  "Expanding Threat Landscape",
  "Evolving Regulatory Compliance",
  "Uninformed Employees and Insider Threats",
  "Skills Shortage",
  "Cybersecurity Budget",
  "Average Response Time",
  "Internet of Things (IoT)",
  "Cloud Adoption and Shadow IT",
]

export default function VirtualCISOPage() {
  return (
    <Layout>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-white to-primary/5" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">Virtual CISO Services</h1>
            <p className="text-xl text-muted-foreground">
              Safeguarding your business data and customers' sensitive information demands unwavering attention and the expert guidance of an executive-level leader.
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
                A CISO formulates and enforces cybersecurity culture, policies, procedures, and security architecture. Many organisations cannot afford a full-time executive-level CISO. Virtual CISO (vCISO) services bridge this gap with tailored leadership and ongoing guidance.
              </p>
              <p>
                Cynsor’s vCISOs work closely with clients to understand unique needs and develop customised, comprehensive cybersecurity solutions that help stay ahead of the ever-evolving threat landscape.
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

      <SectionWrapper>
        <SectionTitle title="Noteworthy Cybersecurity Challenges" subtitle="Addressed by vCISO services" />
        <div className="grid md:grid-cols-2 gap-6">
          {challenges.map((c) => (
            <GlassCard key={c}>
              <div className="text-sm text-foreground">{c}</div>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper muted>
        <SectionTitle title="Program Snapshot" subtitle="Sample improvements across key domains" />
        <div className="mx-auto max-w-3xl">
          <GlassCard>
            <div className="bg-muted rounded-lg p-6">
              <div className="flex items-end justify-between h-24 gap-1">
                {[45, 50, 60, 70, 75, 80, 85].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-primary/30 rounded-t transition-all hover:bg-primary/60"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>Maturity</span>
                <span>Quarterly</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle title="Offerings" subtitle="Capability matrix across consulting, implementation, and maintenance" />
        <OfferingsTable data={offerings} />
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">Ready to engage a vCISO?</h2>
          <p className="text-lg text-muted-foreground mb-8">Get a free assessment and a tailored roadmap for your security program.</p>
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
