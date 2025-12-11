import { SectionWrapper, SectionTitle } from "@/components/ui/section-wrapper"
import { GlassCard } from "@/components/ui/glass-card"
import { BadgeCustom } from "@/components/ui/badge-custom"
import { useCases } from "@/data/use-cases"
import { CheckIcon } from "@/components/ui/icons"

export function SolutionsSection() {
  return (
    <SectionWrapper id="solutions" muted>
      <SectionTitle title="Who We Serve" subtitle="Tailored cybersecurity solutions for businesses of every size" />
      <div className="grid md:grid-cols-2 gap-6">
        {useCases.map((useCase) => (
          <GlassCard key={useCase.id} className="relative">
            {useCase.badge && (
              <BadgeCustom variant="accent" className="absolute -top-3 right-4">
                {useCase.badge}
              </BadgeCustom>
            )}
            <h3 className="text-xl font-semibold mb-2 text-foreground">{useCase.title}</h3>
            <p className="text-sm text-muted-foreground mb-6">{useCase.description}</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">Challenges</h4>
                <ul className="space-y-2">
                  {useCase.problems.map((problem) => (
                    <li key={problem} className="flex items-start gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2" />
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                  How Cynsor Helps
                </h4>
                <ul className="space-y-2">
                  {useCase.solutions.map((solution) => (
                    <li key={solution} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckIcon className="w-4 h-4 text-primary mt-0.5" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  )
}
