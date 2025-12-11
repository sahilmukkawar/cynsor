import Link from "next/link"
import { Layout } from "@/components/layout/layout"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@/components/ui/icons"

export default function NotFound() {
  return (
    <Layout>
      <SectionWrapper>
        <div className="max-w-xl mx-auto text-center py-16">
          <div className="text-6xl font-bold text-primary mb-4">404</div>
          <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">This page could not be found</h1>
          <p className="text-muted-foreground mb-8">
            The page you’re looking for doesn’t exist or may have moved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <Button size="lg">
                Go Home
                <ArrowRightIcon className="ml-2" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg">
                View Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  )
}

