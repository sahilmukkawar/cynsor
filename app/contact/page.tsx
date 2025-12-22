import { Layout } from "@/components/layout/layout"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { GlassCard } from "@/components/ui/glass-card"
import { ContactForm } from "@/components/contact-form"
import { MailIcon, MapPinIcon, LinkedInIcon, TwitterIcon } from "@/components/ui/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Cynsor.io",
  description:
    "Get in touch with Cynsor.io for a free security consultation. We're here to help protect your business.",
}

const contactInfo = [
  {
    icon: <MailIcon className="w-6 h-6" />,
    title: "Email Us",
    details: "contact@cynsor.com",
    subtext: "We typically respond within 24 hours",
  },
  {
    icon: <MapPinIcon className="w-6 h-6" />,
    title: "Headquarters",
    details: "Pune, India",
    subtext: "Serving clients globally",
  },
]

export default function ContactPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-white to-primary/5" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
              Ready to revolutionize your security?
            </h1>
            <p className="text-xl text-muted-foreground">
              Get a free quote and see how we can help protect your business from cyber threats.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Send us a message</h2>
            <ContactForm />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-foreground">Need Assistance?</h2>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <GlassCard key={info.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                      {info.title === 'Email Us' ? (
                        <a href={`mailto:${info.details}`} className="text-primary hover:underline">{info.details}</a>
                      ) : (
                        <p className="text-foreground">{info.details}</p>
                      )}
                      <p className="text-sm text-muted-foreground">{info.subtext}</p>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Follow Us</h3>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label="Twitter"
                >
                  <TwitterIcon />
                </a>
              </div>
            </div>

            {/* Google Map CTA */}
            <GlassCard className="bg-primary/5 border-primary/20">
              <h3 className="font-semibold mb-2 text-foreground">View on Google Map</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Visit our office in Pune, India or schedule a virtual consultation.
              </p>
              <a href="#" className="text-sm font-medium text-primary hover:underline">
                Get Directions →
              </a>
            </GlassCard>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ Strip */}
      <SectionWrapper muted>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Looking for answers?</h2>
          <p className="text-muted-foreground mb-6">Check out our FAQ section for quick answers to common questions.</p>
          <a href="/#faq" className="text-primary font-medium hover:underline">
            View FAQs →
          </a>
        </div>
      </SectionWrapper>
    </Layout>
  )
}
