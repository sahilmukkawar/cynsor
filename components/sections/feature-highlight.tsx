import { SectionWrapper } from "@/components/ui/section-wrapper"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons"
import { BadgeCustom } from "@/components/ui/badge-custom"

const features = [
  "Unified view of all infrastructure",
  "AI-powered anomaly detection",
  "Custom widgets and layouts",
  "Real-time collaboration",
  "One-click incident creation",
]

export function FeatureHighlightSection() {
  return (
    <SectionWrapper>
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 via-white to-accent/5 border border-border p-8 md:p-12 lg:p-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <BadgeCustom variant="primary" className="mb-4">
              Featured
            </BadgeCustom>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
              Unified Risk Dashboard
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              One dashboard to rule them all. Get complete visibility across your infrastructure, applications, and
              security posture in a single, customizable interface.
            </p>
            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckIcon className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Button>
              Explore Features
              <ArrowRightIcon className="ml-2" />
            </Button>
          </div>

          {/* Right Content - Dashboard Mock */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-4 md:p-6 border border-border shadow-lg">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">C</span>
                  </div>
                  <span className="font-semibold text-foreground">Dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-muted-foreground">Live</span>
                </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="col-span-2 bg-muted rounded-lg p-4">
                  <div className="text-xs text-muted-foreground mb-2">Traffic Overview</div>
                  <div className="flex items-end justify-between h-16 gap-1">
                    {[30, 45, 60, 40, 55, 70, 50, 65].map((h, i) => (
                      <div key={i} className="flex-1 bg-primary/30 rounded-t" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-xs text-muted-foreground mb-2">Health</div>
                  <div className="text-2xl font-bold text-green-600">98%</div>
                  <div className="text-xs text-muted-foreground">Healthy</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-xs text-muted-foreground mb-2">Active Alerts</div>
                  <div className="flex items-center gap-2">
                    <div className="text-xl font-bold text-foreground">3</div>
                    <span className="text-xs text-yellow-600 font-medium">Warning</span>
                  </div>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-xs text-muted-foreground mb-2">Response Time</div>
                  <div className="flex items-center gap-2">
                    <div className="text-xl font-bold text-foreground">45ms</div>
                    <span className="text-xs text-green-600 font-medium">↓ 12%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Element */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 border border-border shadow-md">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">✓</div>
                <div>
                  <div className="text-xs font-medium text-foreground">Auto-remediation</div>
                  <div className="text-xs text-muted-foreground">Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
