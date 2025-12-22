import { Button } from "@/components/ui/button"
import { ArrowRightIcon, MailIcon } from "@/components/ui/icons"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/10 via-white to-accent/10 border border-primary/20 p-8 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground text-balance">
                Ready to revolutionize your security?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Get a free quote and see how we can help protect your business.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-lg mb-8">
                <MailIcon className="w-5 h-5 text-primary" />
                <a href="mailto:contact@cynsor.com" className="font-semibold text-foreground underline">contact@cynsor.com</a>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
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

            {/* Right Content - Quick Contact Preview */}
            <div className="bg-white rounded-2xl p-6 border border-border shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Need Assistance?</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                  disabled
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                  disabled
                />
                <Link href="/contact">
                  <Button className="w-full">Send Message</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
