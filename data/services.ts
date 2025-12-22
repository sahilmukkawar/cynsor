import type { Service } from "@/types"

export const services: Service[] = [
  {
    id: "managed-security",
    title: "Managed Security Services",
    description:
      "Our managed services offer effective tools, expert guidance, and tailored processes on a budget. We use human intelligence to enhance alerts, going beyond technology.",
    features: ["Expert-guided alerting", "Tailored security processes", "Cost-effective managed solution"],
    icon: "shield",
  },
  {
    id: "virtual-ciso",
    title: "Virtual CISO Services",
    description:
      "Craft a tailored cyber plan with our vCISO experts, identifying strengths, vulnerabilities, and risks, while providing ongoing support for success.",
    features: ["Tailored cybersecurity plan", "Ongoing executive guidance", "Compliance & risk oversight"],
    icon: "users",
  },
  {
    id: "vulnerability-management",
    title: "Vulnerability Management Services",
    description:
      "Maximize security ROI with our streamlined vulnerability analysis, customizing threat prioritization for effective simplicity.",
    features: ["Risk-based prioritisation", "Streamlined analysis", "Guided remediation"],
    icon: "search",
  },
  {
    id: "penetration-testing",
    title: "Penetration Testing Services",
    description:
      "Automate agility for instant penetration testing ROI with rapid threat surface discovery and remediation.",
    features: ["Rapid surface discovery", "Automated & manual testing", "Actionable remediation"],
    icon: "network",
  },
  {
    id: "social-engineering",
    title: "Social Engineering Services",
    description:
      "Simulated attacks train employees to resist social engineering, guarding against the majority of human error–based cyber threats.",
    features: ["Phishing & simulated attacks", "Employee training & assessment", "Threat-awareness improvement"],
    icon: "alert",
  },
  {
    id: "risk-assessment",
    title: "Risk Assessment Services",
    description:
      "Holistic risk assessments for CMMC, ISO 27001, NIST, and PCI compliance with our expert guidance.",
    features: ["Compliance mapping (CMMC, NIST, ISO, PCI)", "Holistic risk analysis", "Remediation roadmaps"],
    icon: "clipboard",
  },
]
