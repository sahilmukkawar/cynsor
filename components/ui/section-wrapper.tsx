import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
  muted?: boolean
}

export function SectionWrapper({ children, className, id, muted }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24 px-4 md:px-6 lg:px-8", muted && "bg-muted", className)}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  )
}

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionTitle({ title, subtitle, centered = true, className }: SectionTitleProps) {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">{subtitle}</p>
      )}
    </div>
  )
}
