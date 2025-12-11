import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl p-6 bg-white border border-border shadow-sm transition-all duration-300",
        hover && "hover:shadow-md hover:border-primary/20",
        className,
      )}
    >
      {children}
    </div>
  )
}
