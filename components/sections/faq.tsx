"use client"

import { useState } from "react"
import { SectionWrapper, SectionTitle } from "@/components/ui/section-wrapper"
import { faqItems } from "@/data/faq"
import { ChevronDownIcon } from "@/components/ui/icons"
import { cn } from "@/lib/utils"

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <SectionWrapper id="faq">
      <SectionTitle title="Frequently asked questions" subtitle="Everything you need to know about Cynsor" />
      <div className="max-w-3xl mx-auto space-y-4">
        {faqItems.map((item) => (
          <div key={item.id} className="bg-white rounded-xl overflow-hidden border border-border shadow-sm">
            <button
              className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
              onClick={() => toggle(item.id)}
              aria-expanded={openId === item.id}
            >
              <span className="font-medium pr-4 text-foreground">{item.question}</span>
              <ChevronDownIcon
                className={cn(
                  "w-5 h-5 text-muted-foreground transition-transform duration-200",
                  openId === item.id && "rotate-180",
                )}
              />
            </button>
            <div
              className={cn("overflow-hidden transition-all duration-300", openId === item.id ? "max-h-96" : "max-h-0")}
            >
              <div className="px-6 pb-6 text-muted-foreground">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
