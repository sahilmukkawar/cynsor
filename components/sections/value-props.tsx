import type React from "react"
import { SectionWrapper, SectionTitle } from "@/components/ui/section-wrapper"
import { GlassCard } from "@/components/ui/glass-card"
import { valueProps } from "@/data/value-props"
import { ZapIcon, BrainIcon, TargetIcon } from "@/components/ui/icons"

const iconMap: Record<string, React.ReactNode> = {
  zap: <ZapIcon className="w-8 h-8" />,
  brain: <BrainIcon className="w-8 h-8" />,
  target: <TargetIcon className="w-8 h-8" />,
}

export function ValuePropsSection() {
  return (
    <SectionWrapper id="features">
      <SectionTitle
        title="Why should you choose Cynsor?"
        subtitle="We believe in getting your business secure so no cyber threats come in the way of your success."
      />
      <div className="grid md:grid-cols-3 gap-6">
        {valueProps.map((prop, index) => (
          <GlassCard key={prop.id} className="text-center group">
            <div
              className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {iconMap[prop.icon]}
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">{prop.title}</h3>
            <p className="text-sm text-muted-foreground">{prop.description}</p>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  )
}
