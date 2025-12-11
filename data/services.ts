import type { Service } from "@/types"

export const services: Service[] = [
  {
    id: "managed-network-security",
    title: "Managed Network Security Services",
    description:
      "Comprehensive enterprise-grade protection with 24/7 monitoring, prevention, detection, and incident response. Seamlessly integrates with your existing processes and technology with minimal disruption.",
    features: ["24/7 monitoring", "Unified SIEM/EDR visibility", "Proactive incident response"],
    icon: "network",
  },
  {
    id: "virtual-ciso",
    title: "Virtual CISO Services",
    description:
      "Executive-level security leadership without the full-time cost. Strategy, policies, compliance roadmap, and ongoing guidance delivered by seasoned professionals.",
    features: ["Strategic planning", "Policy & compliance", "Dedicated leadership"],
    icon: "users",
  },
  {
    id: "vulnerability-management",
    title: "Vulnerability Management Services",
    description:
      "Continuous, AI-assisted scanning across apps, cloud, APIs, and containers with risk-based prioritisation and guided remediation. See measurable risk reduction within 48 hours.",
    features: ["AI-assisted scanning", "Risk-based prioritisation", "48-hour risk reduction"],
    icon: "search",
  },
  {
    id: "aspm",
    title: "ASPM – Application Security Posture Management",
    description:
      "Unifies application security signals across the SDLC and runtime. Aggregates SAST/DAST/SCA/IaC, CI/CD, cloud tools, and runtime telemetry into a single view for prioritised triage and reporting.",
    features: [
      "Aggregate SAST/DAST/SCA/IaC and pipeline data",
      "Prioritised risk scoring & triage",
      "Continuous posture monitoring and reporting",
    ],
    icon: "shield",
  },
  {
    id: "penetration-testing",
    title: "Penetration Testing Services",
    description:
      "Real-world attack simulation across web, mobile, APIs, and networks to reveal exploitable weaknesses. Includes detailed reporting and actionable remediation guidance.",
    features: ["Manual & automated testing", "Detailed reporting", "Actionable remediation"],
    icon: "shield",
  },
]
