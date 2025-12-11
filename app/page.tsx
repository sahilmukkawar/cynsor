import { Layout } from "@/components/layout/layout"
import { HeroSection } from "@/components/sections/hero"
import { ValuePropsSection } from "@/components/sections/value-props"
import { AboutPreviewSection } from "@/components/sections/about-preview"
import { ServicesSection } from "@/components/sections/services"
import { SolutionsSection } from "@/components/sections/solutions"
import { MetricsSection } from "@/components/sections/metrics"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { FAQSection } from "@/components/sections/faq"
import { CTASection } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <ValuePropsSection />
      <AboutPreviewSection />
      <ServicesSection />
      <SolutionsSection />
      <MetricsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </Layout>
  )
}
