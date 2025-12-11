export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
}

export interface UseCase {
  id: string
  title: string
  description: string
  problems: string[]
  solutions: string[]
  badge?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  quote: string
  avatar?: string
}

export interface PricingPlan {
  id: string
  name: string
  description: string
  price: string
  period: string
  features: string[]
  highlighted?: boolean
  cta: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  avatar?: string
}

export interface Metric {
  id: string
  value: string
  label: string
}

export interface ContactFormData {
  name: string
  email: string
  company: string
  role: string
  message: string
}

export interface ValueProp {
  id: string
  title: string
  description: string
  icon: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  slug: string
}
