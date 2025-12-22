"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckIcon, ArrowRightIcon } from "@/components/ui/icons"

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

interface SimpleContactFormData {
  name: string
  email: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<SimpleContactFormData>({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const handleChange = (field: keyof SimpleContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl p-8 md:p-12 text-center border border-border shadow-sm">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckIcon className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-foreground">Message Sent!</h3>
        <p className="text-muted-foreground mb-6">
          Thanks for reaching out, {formData.name.split(" ")[0]}! Our security experts will get back to you within 24 hours via email.
        </p>
        <Button
          onClick={() => {
            setIsSuccess(false)
            setFormData({ name: "", email: "", message: "" })
          }}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-12 border border-border shadow-sm">
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground">
            Full Name *
          </Label>
          <Input
            id="name"
            placeholder="John Smith"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground">
            Email Address *
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john@company.com"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
        </div>


        <div className="space-y-2">
          <Label htmlFor="message" className="text-foreground">
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="Tell us about your security needs..."
            rows={4}
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
          />
        </div>

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <ArrowRightIcon className="ml-2" />
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          By submitting this form, you agree to our Privacy Policy and Terms of Service.
        </p>
      </div>
    </form>
  )
}
