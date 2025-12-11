import type React from "react"
import { cn } from "@/lib/utils"
import { CheckIcon, XIcon } from "@/components/ui/icons"

type OfferingItem = {
  name: string
  consulting?: boolean
  implementation?: boolean
  maintenance?: boolean
}

type OfferingCategory = {
  category: string
  items: OfferingItem[]
}

export function OfferingsTable({ data, className }: { data: OfferingCategory[]; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-border bg-white", className)}>
      <div className="grid grid-cols-4 bg-muted text-sm font-medium text-muted-foreground">
        <div className="p-3">Category</div>
        <div className="p-3">Consulting</div>
        <div className="p-3">Implementation</div>
        <div className="p-3">Maintenance & Improvements</div>
      </div>
      {data.map((group, gi) => (
        <div key={`${group.category}-${gi}`} className="border-t border-border">
          <div className="p-3 bg-muted/40 text-sm font-semibold text-foreground">{group.category}</div>
          {group.items.map((item, ii) => (
            <div key={`${group.category}-${item.name}-${ii}`} className="grid grid-cols-4 border-t border-border">
              <div className="p-3 text-sm text-foreground">{item.name}</div>
              <div className="p-3 text-center">
                {item.consulting ? (
                  <CheckIcon className="inline w-4 h-4 text-primary" />
                ) : (
                  <XIcon className="inline w-4 h-4 text-muted-foreground" />
                )}
              </div>
              <div className="p-3 text-center">
                {item.implementation ? (
                  <CheckIcon className="inline w-4 h-4 text-primary" />
                ) : (
                  <XIcon className="inline w-4 h-4 text-muted-foreground" />
                )}
              </div>
              <div className="p-3 text-center">
                {item.maintenance ? (
                  <CheckIcon className="inline w-4 h-4 text-primary" />
                ) : (
                  <XIcon className="inline w-4 h-4 text-muted-foreground" />
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
