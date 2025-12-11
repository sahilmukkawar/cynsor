import type { UseCase } from "@/types"

export const useCases: UseCase[] = [
  {
    id: "startups",
    title: "Startups",
    description: "Enterprise-grade security that grows with your business without breaking the bank.",
    problems: ["Limited security budget", "No dedicated security team", "Rapid scaling challenges"],
    solutions: ["Affordable managed security", "Virtual CISO guidance", "Scalable protection"],
    badge: "Popular",
  },
  {
    id: "smbs",
    title: "Small & Medium Businesses",
    description: "Complete security coverage for growing businesses with complex needs.",
    problems: ["Increasing cyber threats", "Compliance requirements", "Limited IT resources"],
    solutions: ["24/7 threat monitoring", "Compliance automation", "Expert support on demand"],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "HIPAA-compliant security for healthcare providers and medical organizations.",
    problems: ["Patient data protection", "Regulatory compliance", "Medical device security"],
    solutions: ["HIPAA compliance support", "Data encryption", "Audit-ready reporting"],
  },
  {
    id: "financial",
    title: "Financial Services",
    description: "Robust security for banks, fintech, and financial institutions.",
    problems: ["Fraud prevention", "Regulatory requirements", "Customer data protection"],
    solutions: ["Real-time fraud detection", "PCI-DSS compliance", "Secure transaction monitoring"],
  },
]
