import type React from "react"
import Link from "next/link"
import { SectionWrapper, SectionTitle } from "@/components/ui/section-wrapper"
import { GlassCard } from "@/components/ui/glass-card"
import { services } from "@/data/services"
import { ArrowRightIcon, ShieldIcon, NetworkIcon, UsersIcon, SearchIcon, AlertIcon, ClipboardIcon } from "@/components/ui/icons"

const iconMap: Record<string, React.ReactNode> = {
  network: <NetworkIcon className="w-6 h-6" />,
  shield: <ShieldIcon className="w-6 h-6" />,
  users: <UsersIcon className="w-6 h-6" />,
  search: <SearchIcon className="w-6 h-6" />,
  alert: <AlertIcon className="w-6 h-6" />,
  clipboard: <ClipboardIcon className="w-6 h-6" />,
}

export function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <SectionTitle title="Explore Our Services" subtitle="Explore What We Offer" />
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service) => (
          <GlassCard key={service.id} className="group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              {iconMap[service.icon]}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
            <ul className="space-y-2 mb-6">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href={`/services/${service.id}`}
              className="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              Learn more
              <ArrowRightIcon className="ml-1 w-3 h-3" />
            </Link>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  )
}
