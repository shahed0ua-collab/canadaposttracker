import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Package, Search, ArrowRight, HelpCircle, Truck, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Page Not Found - CA Post Tracker",
  description: "The page you are looking for could not be found. Return to the CA Post Tracker home page to track your Canada Post packages.",
  robots: { index: false, follow: true },
}

const quickLinks = [
  {
    href: "/",
    icon: Search,
    label: "Track a Package",
    description: "Enter a tracking number to get real-time delivery updates.",
  },
  {
    href: "/services",
    icon: Truck,
    label: "Shipping Services",
    description: "View all Canada Post services and their delivery times.",
  },
  {
    href: "/faq",
    icon: HelpCircle,
    label: "FAQ",
    description: "Answers to common Canada Post tracking questions.",
  },
  {
    href: "/privacy-policy",
    icon: FileText,
    label: "Privacy Policy",
    description: "Learn how we handle your data and privacy.",
  },
]

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        {/* 404 Hero */}
        <section className="flex-1 flex items-center py-16 md:py-24">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl bg-red-100 flex items-center justify-center">
                  <Package className="w-12 h-12 text-red-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">?</span>
                </div>
              </div>
            </div>

            {/* Status code */}
            <p className="text-8xl md:text-9xl font-bold text-red-600/20 leading-none select-none mb-2">
              404
            </p>

            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-balance">
              Page Not Found
            </h1>
            <p className="text-muted-foreground mb-8 text-pretty">
              The page you&apos;re looking for doesn&apos;t exist or may have been moved.
              Let&apos;s get you back to tracking your Canada Post packages.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <Link href="/">
                  <Search className="w-4 h-4 mr-2" />
                  Track a Package
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/faq">
                  View FAQ
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Quick links */}
        <section className="py-12 bg-muted/40 border-t border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-center text-lg font-semibold text-foreground mb-8">
              You might be looking for
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex flex-col gap-2 p-4 rounded-lg bg-card border border-border hover:border-red-300 hover:shadow-sm transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors">
                    <link.icon className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm group-hover:text-red-600 transition-colors">
                      {link.label}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                      {link.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
