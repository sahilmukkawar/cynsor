import type { Metadata } from "next"
import Link from "next/link"
import { Layout } from "@/components/layout/layout"
import { SectionWrapper, SectionTitle } from "@/components/ui/section-wrapper"
import { GlassCard } from "@/components/ui/glass-card"
import { OfferingsTable } from "@/components/ui/offerings-table"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@/components/ui/icons"

export const metadata: Metadata = {
  title: "ASPM Offering & Tools | Cynsor.io",
  description: "Application Security Posture Management (ASPM) consulting, implementation and managed operations.",
}

const offerings = [
  {
    category: "ASPM – Application Security Posture Management",
    items: [
      { name: "ASPM Consulting (assessment, roadmap)", consulting: true },
      { name: "ASPM Implementation (tool integration & CI/CD)", consulting: true, implementation: true },
      { name: "ASPM Operations (continuous monitoring & triage)", consulting: true, implementation: true, maintenance: true },
      { name: "Automated risk scoring & triage workflows", consulting: true, implementation: true, maintenance: true },
      { name: "Runtime correlation (WAAP, RASP, cloud)", consulting: true, implementation: true, maintenance: true },
    ],
  },
]

const tools = [
  "ArmorCode",
  "Enso Security",
  "JFrog Advanced Security",
  "Snyk AppRisk",
  "AppOmni",
  "Apiiro",
  "BishopFox Cosmos",
]

const scanners = {
  sast: ["Checkmarx", "SonarQube", "Fortify"],
  dast: ["Burp Suite", "OWASP ZAP", "AppScan"],
  sca: ["Snyk", "Whitesource", "BlackDuck"],
  iac: ["Checkov", "Prisma Cloud"],
  container: ["Twistlock", "Trivy"],
  cloud: ["Wiz", "Lacework"],
}

const benefits = [
  "Identify high-risk vulnerabilities earlier",
  "Prioritise based on real exploitability",
  "Reduce false positives and triage effort",
  "Track posture across microservices, APIs and cloud-native environments",
  "Support compliance: PCI-DSS, ISO 27001, SOC 2, GDPR",
]

export default function ASPMPage() {
  return (
    <Layout>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-white to-primary/5" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">ASPM — Application Security Posture Management</h1>
            <p className="text-xl text-muted-foreground">
              Application Security Posture Management (ASPM) helps organisations collect, prioritise and act on application security signals across the SDLC and runtime environments.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <GlassCard>
            <h2 className="text-2xl font-bold mb-4 text-foreground">What is ASPM?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                ASPM integrates data from SAST, DAST, SCA, IaC scanners, CI/CD pipelines, cloud & infrastructure tools, issue trackers and runtime security to provide a single view of application security posture.
              </p>
              <p>
                It enables organisations to identify high-risk vulnerabilities earlier, prioritise by exploitability, reduce false positives and demonstrate continuous improvements for compliance.
              </p>
            </div>
          </GlassCard>
          <GlassCard>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Why offer ASPM?</h2>
            <ul className="space-y-2">
              {benefits.map((b) => (
                <li key={b} className="text-sm text-foreground">{b}</li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </SectionWrapper>

      <SectionWrapper muted>
        <SectionTitle title="Posture Snapshot" subtitle="Sample risk scoring trend" />
        <div className="mx-auto max-w-3xl">
          <GlassCard>
            <div className="bg-muted rounded-lg p-6">
              <div className="flex items-end justify-between h-24 gap-1">
                {[70, 68, 65, 60, 56, 52, 48, 45, 42, 40].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-primary/30 rounded-t transition-all hover:bg-primary/60"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>Risk Score</span>
                <span>Last 10 Sprints</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle title="ASPM Service Offering Details" subtitle="Consulting • Implementation • Operations" />
        <OfferingsTable data={offerings} />
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle title="Tools We Support" subtitle="Industry ASPM platforms & compatible scanners" />
        <div className="grid md:grid-cols-2 gap-6">
          <GlassCard>
            <h3 className="font-bold mb-2">ASPM Platforms</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              {tools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard>
            <h3 className="font-bold mb-2">Compatible Scanners & Tools</h3>
            <div className="text-sm text-muted-foreground space-y-2">
              <div>
                <strong>SAST:</strong> {scanners.sast.join(", ")}
              </div>
              <div>
                <strong>DAST:</strong> {scanners.dast.join(", ")}
              </div>
              <div>
                <strong>SCA:</strong> {scanners.sca.join(", ")}
              </div>
              <div>
                <strong>IaC:</strong> {scanners.iac.join(", ")}
              </div>
              <div>
                <strong>Container:</strong> {scanners.container.join(", ")}
              </div>
              <div>
                <strong>Cloud:</strong> {scanners.cloud.join(", ")}
              </div>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">Ready to add ASPM to your security program?</h2>
          <p className="text-lg text-muted-foreground mb-8">We provide assessment, implementation, and managed ASPM operations tailored to your environment.</p>
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
