import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface BadgeCustomProps {
  children: ReactNode
  variant?: "default" | "primary" | "accent" | "outline"
  className?: string
}

export function BadgeCustom({ children, variant = "default", className }: BadgeCustomProps) {
  const variants = {
    default: "bg-secondary text-secondary-foreground",
    primary: "bg-primary/10 text-primary border border-primary/20",
    accent: "bg-accent/10 text-accent border border-accent/20",
    outline: "border border-border text-muted-foreground bg-white",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
