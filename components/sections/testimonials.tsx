import { SectionWrapper, SectionTitle } from "@/components/ui/section-wrapper"
import { GlassCard } from "@/components/ui/glass-card"
import { testimonials } from "@/data/testimonials"

export function TestimonialsSection() {
  return (
    <SectionWrapper>
      <SectionTitle title="What our customers say" subtitle="Don't just take our word for it" />
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <GlassCard key={testimonial.id}>
            <div className="mb-4">
              <svg className="w-8 h-8 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-muted-foreground mb-6 italic">&quot;{testimonial.quote}&quot;</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                {testimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <div className="font-medium text-sm text-foreground">{testimonial.name}</div>
                <div className="text-xs text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  )
}
