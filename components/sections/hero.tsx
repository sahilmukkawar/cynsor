import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@/components/ui/icons"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-white to-primary/5" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - updated with Cynsor.io messaging */}
          <div className="text-center lg:text-left">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up text-balance text-foreground"
              style={{ animationDelay: "0.1s" }}
            >
              Cyber Security Services <span className="gradient-text">Managed and Powered by AI</span>
            </h1>

            <p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up text-pretty"
              style={{ animationDelay: "0.2s" }}
            >
              Comprehensive enterprise-grade security for startups and SMBs, fully overseen by DoD-trained and seasoned
              professionals.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Book An Appointment
                  <ArrowRightIcon className="ml-2" />
                </Button>
              </Link>
            </div>

            <div
              className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                DoD-trained experts
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                AI-powered protection
              </span>
            </div>
          </div>

          {/* Right Content - Security Dashboard Mock */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-white rounded-2xl p-6 border border-border shadow-lg animate-float">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">Security Dashboard</span>
                </div>

                {/* Mock Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-xs text-muted-foreground">Monitoring</div>
                  </div>
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-accent">48h</div>
                    <div className="text-xs text-muted-foreground">Response</div>
                  </div>
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-green-600">0</div>
                    <div className="text-xs text-muted-foreground">Breaches</div>
                  </div>
                </div>

                {/* Mock Chart */}
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-end justify-between h-24 gap-1">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-primary/30 rounded-t transition-all hover:bg-primary/60"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>Threats Blocked</span>
                    <span>This Week</span>
                  </div>
                </div>
              </div>

              {/* Floating Alert Card */}
              <div
                className="absolute -top-4 -right-4 bg-white rounded-xl p-4 border border-border shadow-md animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">All Systems Secure</div>
                    <div className="text-xs text-muted-foreground">AI monitoring active</div>
                  </div>
                </div>
              </div>

              {/* Floating Security Card */}
              <div
                className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 border border-border shadow-md animate-float"
                style={{ animationDelay: "2s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent text-lg">🛡️</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Threat Blocked</div>
                    <div className="text-xs text-muted-foreground">Automated response</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
