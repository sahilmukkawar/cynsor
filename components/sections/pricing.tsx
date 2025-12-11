import { SectionWrapper, SectionTitle } from "@/components/ui/section-wrapper"
import { Button } from "@/components/ui/button"
import { pricingPlans } from "@/data/pricing"
import { CheckIcon } from "@/components/ui/icons"
import { cn } from "@/lib/utils"

export function PricingSection() {
  return (
    <SectionWrapper id="pricing" muted>
      <SectionTitle title="Simple, transparent pricing" subtitle="Start free, scale as you grow. No hidden fees." />
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={cn(
              "rounded-2xl p-6 md:p-8 transition-all duration-300 bg-white border",
              plan.highlighted
                ? "border-primary shadow-lg shadow-primary/10 scale-105 relative"
                : "border-border shadow-sm hover:shadow-md",
            )}
          >
            {plan.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            <h3 className="text-xl font-semibold mb-2 text-foreground">{plan.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>

            <div className="mb-6">
              <span className="text-4xl font-bold text-foreground">{plan.price}</span>
              <span className="text-muted-foreground">{plan.period}</span>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckIcon className="w-4 h-4 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button className="w-full" variant={plan.highlighted ? "default" : "outline"}>
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
