import { Layout } from "@/components/layout/layout"
import { SectionWrapper, SectionTitle } from "@/components/ui/section-wrapper"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Cynsor.io",
  description:
    "Learn about Cynsor.io - AI-powered cybersecurity services for startups and SMBs, backed by DoD-trained professionals.",
}

const timeline = [
  {
    year: "2019",
    title: "Founded",
    description: "Cynsor was founded with a vision to make enterprise security accessible to all.",
  },
  {
    year: "2020",
    title: "First Product Launch",
    description: "Released our flagship monitoring platform to early adopters.",
  },
  { year: "2021", title: "Series A Funding", description: "Raised $25M to expand our platform and grow the team." },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Opened offices in London, Singapore, and expanded to 30+ countries.",
  },
  {
    year: "2023",
    title: "AI Integration",
    description: "Launched AI-powered threat detection and automated remediation.",
  },
  {
    year: "2024",
    title: "Enterprise Growth",
    description: "Reached 500+ enterprise customers and processed 200M+ daily events.",
  },
]

const values = [
  {
    title: "Security First",
    description:
      "We believe every business deserves enterprise-grade protection. Security isn't a luxury - it's a necessity for growth.",
  },
  {
    title: "AI-Powered",
    description:
      "We leverage cutting-edge AI to automate threat detection and response, reducing human error and increasing efficiency.",
  },
  {
    title: "Expert-Backed",
    description:
      "Our team of DoD-trained professionals brings military-grade security expertise to every client engagement.",
  },
  {
    title: "Client Success",
    description:
      "Your success is our mission. We measure ourselves by the security outcomes we deliver for your organization.",
  },
]

const teamMembers = [
  {
    name: "Security Expert",
    role: "DoD-Trained Professional",
    bio: "Former military cybersecurity specialist with 15+ years protecting critical infrastructure.",
  },
  {
    name: "AI Specialist",
    role: "Chief Technology Officer",
    bio: "Leading our AI-powered threat detection systems and automation platform.",
  },
  {
    name: "Client Success Lead",
    role: "Head of Operations",
    bio: "Ensuring seamless integration and maximum security value for all our clients.",
  },
]

const highlights = [
  "Based in Pune, India with global reach",
  "DoD-trained and seasoned security professionals",
  "AI-powered threat detection and response",
  "Enterprise-grade security for startups and SMBs",
  "48-hour vulnerability remediation",
  "24/7 expert monitoring and support",
]

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-white to-primary/5" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
              Why <span className="gradient-text">Cynsor?</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Complete advisory support — Cynsor is a cyber security company based in Pune, India. Our methods and services are backed by experts to seamlessly integrate security into your existing business processes and technology, ensuring effective defense without disrupting operations.
            </p>
            <p className="mt-4 text-lg text-primary font-semibold">Enroll Now: <a href="mailto:contact@cynsor.com" className="underline">contact@cynsor.com</a></p>
          </div>
        </div>
      </section>

      {/* Story */}
      <SectionWrapper muted>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">Mission, Vision &amp; Goal</h2>
            <div className="space-y-4 text-muted-foreground">
              <h3 className="text-lg font-semibold">Mission</h3>
              <p>To excel in software development, embody industry-leading professionalism, and drive progress through relentless innovation and boundary-pushing solutions.</p>

              <h3 className="text-lg font-semibold">Vision</h3>
              <p>To be the unrivaled leader in Cyber Security development, inspiring the future of AI powered cyber security with groundbreaking advancements and transformative applications.</p>

              <h3 className="text-lg font-semibold">Goal</h3>
              <p>Empowering our customers to confidently pursue their dreams in a protected digital world, nurtured by our relentless security innovations.</p>
            </div>
          </div>
          <div className="relative space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
              <h4 className="font-semibold mb-4 text-foreground">What Sets Us Apart</h4>
              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckIcon className="w-3 h-3 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
              <h4 className="font-semibold mb-3 text-foreground">Our Security Model</h4>
              <p className="text-sm text-muted-foreground mb-2">We take a proactive approach to cybersecurity inspired by NIST 800-137 continuous monitoring. We use AI and Machine Learning to detect and neutralize threats, perform real-time risk assessments, and apply targeted security controls. Weekly on-demand status reports keep you informed.</p>
              <div className="flex gap-3 mt-3">
                <div className="bg-white/5 rounded-md p-2 text-sm font-medium">Real-time Threat Detection</div>
                <div className="bg-white/5 rounded-md p-2 text-sm font-medium">Automated Threat Response</div>
              </div>
            </div>
          </div> 
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper>
        <SectionTitle title="Our Values" subtitle="The principles that guide everything we do" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <GlassCard key={value.title}>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Methodology & Culture */}
      <SectionWrapper>
        <SectionTitle title="Our Methodology" subtitle="Pushing the frontiers of security with innovation" />
        <div className="grid md:grid-cols-2 gap-6">
          <GlassCard>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Our Approach</h3>
            <p className="text-sm text-muted-foreground mb-3">Our team of passionate security experts doesn’t settle for the ordinary. They build cutting-edge analytical models and machine learning algorithms that power revolutionary processes. We continuously experiment and refine for speed, transparency, and effectiveness.</p>
            <p className="text-sm text-muted-foreground">By combining advanced technology with rigorous testing and optimization, we deliver transformative security solutions at every stage of the journey.</p>
          </GlassCard>
          <GlassCard>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Work Culture & Team</h3>
            <p className="text-sm text-muted-foreground mb-3">We cultivate a thriving work environment where growth is encouraged, collaboration reigns, and everyone feels valued. This investment in our people leads to better client outcomes and exceptional services that consistently exceed expectations.</p>
            <h4 className="font-semibold mb-2 text-foreground">Seasoned Experts</h4>
            <p className="text-sm text-muted-foreground">We attract and develop top talent—hiring for technical expertise, critical thinking, and communication skills to give you a competitive advantage.</p>
          </GlassCard>
        </div>
      </SectionWrapper>

      {/* Team */}
      {/* <SectionWrapper muted>
        <SectionTitle title="Our Team" subtitle="Security experts dedicated to protecting your business" />
        <div className="grid md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <GlassCard key={member.name} className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary text-2xl font-bold">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
              <div className="text-sm text-primary mb-3">{member.role}</div>
              <p className="text-sm text-muted-foreground">{member.bio}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper> */}

      {/* CTA */}
      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">Ready to Get Secure?</h2>
          <p className="text-lg text-muted-foreground mb-4">Get a free security assessment and see how Cynsor can protect your business from cyber threats.</p>
          <p className="text-lg text-muted-foreground mb-4">Simplify your security with our fully managed solution — Start your free trial today.</p>
          <p className="text-sm text-muted-foreground mb-6 font-semibold">Enroll Now: <a href="mailto:contact@cynsor.com" className="underline text-primary">contact@cynsor.com</a></p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg">
                Book An Appointment
                <ArrowRightIcon className="ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  )
}
