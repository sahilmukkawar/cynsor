import { SectionWrapper } from "@/components/ui/section-wrapper"

const logos = ["TechCorp", "GlobalBank", "CloudNine", "SecureNet", "DataFlow", "CyberShield"]

export function LogosSection() {
  return (
    <SectionWrapper className="py-12 md:py-16 border-y border-border bg-muted">
      <div className="text-center mb-8">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Trusted by security teams worldwide
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
        {logos.map((logo) => (
          <div
            key={logo}
            className="text-xl md:text-2xl font-bold text-muted-foreground/40 hover:text-muted-foreground transition-colors"
          >
            {logo}
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
