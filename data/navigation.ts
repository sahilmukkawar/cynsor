import type { NavItem } from "@/types"

export const navigationItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
]

export const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Partners", href: "#" },
  ],
  products: [
    { label: "Managed Network Security", href: "/services" },
    { label: "Virtual CISO Services", href: "/services" },
    { label: "Vulnerability Management", href: "/services" },
    { label: "Penetration Testing", href: "/services" },
  ],
  resources: [
    { label: "Blog", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Support", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Security", href: "#" },
  ],
}
