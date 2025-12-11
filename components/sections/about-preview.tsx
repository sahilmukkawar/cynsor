import Link from "next/link"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons"

const highlights = [
  "Based in Pune, India with global reach",
  "DoD-trained and seasoned security professionals",
  "AI-powered threat detection and response",
  "Seamless integration with your existing processes",
]

export function AboutPreviewSection() {
  return (
    <SectionWrapper muted>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
            Why <span className="gradient-text">Cynsor?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Cynsor is a cyber security company based in Pune, India. Our methods and services are backed by experts to
            seamlessly integrate security into your existing business processes and technology, ensuring effective
            defense without disrupting any of your operations.
          </p>
          <p className="text-muted-foreground mb-8">
            Our Comprehensive Cyber Security Services are available for every scale of businesses, be it a startup or an
            MNC. Through our services we empower you to focus on what you do best, knowing that your digital walls are
            built to withstand even the most sophisticated threats.
          </p>
          <Link href="/about">
            <Button variant="outline">
              Read More
              <ArrowRightIcon className="ml-2" />
            </Button>
          </Link>
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          {/* Highlights */}
          <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
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

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
            <h4 className="font-semibold mb-2 text-foreground">Need Assistance?</h4>
            <p className="text-2xl font-bold text-primary mb-2">+(888) 695-9859</p>
            <p className="text-sm text-muted-foreground">Our security experts are ready to help.</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
