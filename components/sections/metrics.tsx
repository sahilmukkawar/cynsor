"use client"

import { useEffect, useRef, useState } from "react"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { metrics } from "@/data/metrics"

export function MetricsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <SectionWrapper muted>
      <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {metrics.map((metric, index) => (
          <div
            key={metric.id}
            className={`text-center transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">{metric.value}</div>
            <div className="text-sm md:text-base text-muted-foreground">{metric.label}</div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
