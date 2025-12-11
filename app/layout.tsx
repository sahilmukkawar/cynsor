import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Cynsor.io | AI-Powered Cyber Security Services for Startups & SMBs",
  description:
    "Comprehensive enterprise-grade security for startups and SMBs, fully overseen by DoD-trained and seasoned professionals. Managed and powered by AI.",
  keywords: [
    "cybersecurity",
    "AI security",
    "managed security",
    "CISO",
    "vulnerability management",
    "penetration testing",
  ],
    generator: 'v0.app'
}

export const viewport = {
  themeColor: "#ffffff",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
