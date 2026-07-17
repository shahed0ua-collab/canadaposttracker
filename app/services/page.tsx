import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const revalidate = 86400 // Revalidate daily
export const dynamic = 'force-static' // Force static generation
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Clock, DollarSign, Globe, Package, Truck, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Canada Post Shipping Services - Track Xpresspost, Priority & More",
  description:
    "Learn about all Canada Post shipping services including Xpresspost, Priority, Regular Parcel, Expedited Parcel, and international options. Track any Canada Post service instantly.",
  keywords: [
    "Canada Post shipping services",
    "Xpresspost tracking",
    "Canada Post Priority tracking",
    "Canada Post Regular Parcel tracking",
    "Canada Post Expedited Parcel",
    "Canada Post international parcel tracking",
    "Canada Post Tracked Packet",
    "Canada Post service types",
  ],
  alternates: { canonical: "https://canadaposttracking.app/services" },
  openGraph: {
    title: "Canada Post Shipping Services - Track Xpresspost, Priority & More",
    description:
      "Complete guide to Canada Post shipping services and how to track each one. Xpresspost, Priority, Regular Parcel, Expedited Parcel, and more.",
    url: "https://canadaposttracking.app/services",
  },
}

const services = [
  {
    name: "Priority",
    badge: "Fastest",
    badgeVariant: "default" as const,
    icon: Zap,
    delivery: "Next business day",
    tracking: true,
    domestic: true,
    international: false,
    description:
      "Canada Post's fastest domestic service. Guaranteed next-business-day delivery to most Canadian addresses. Includes pickup option and real-time tracking.",
    trackingFormat: "ABC 123 456 789 CA",
    features: [
      "Next-business-day guaranteed delivery",
      "Real-time tracking",
      "Signature on delivery option",
      "Up to 30 kg",
      "Saturday delivery in select areas",
    ],
  },
  {
    name: "Xpresspost",
    badge: "Most Popular",
    badgeVariant: "secondary" as const,
    icon: Truck,
    delivery: "1–2 business days",
    tracking: true,
    domestic: true,
    international: true,
    description:
      "Fast, reliable service with guaranteed delivery in 1 to 2 business days within Canada. Also available for international shipping to the USA and select countries.",
    trackingFormat: "ABC 123 456 789 CA",
    features: [
      "1–2 business days delivery",
      "Real-time tracking",
      "Delivery confirmation",
      "Available domestically and to USA",
      "Up to 30 kg",
    ],
  },
  {
    name: "Expedited Parcel",
    badge: "Best Value",
    badgeVariant: "outline" as const,
    icon: Package,
    delivery: "2–5 business days",
    tracking: true,
    domestic: true,
    international: false,
    description:
      "The best balance of speed and value for businesses and individuals shipping within Canada. Includes tracking and delivery confirmation.",
    trackingFormat: "1234 5678 9012 3456",
    features: [
      "2–5 business days delivery",
      "Real-time tracking",
      "Delivery confirmation",
      "Business discount available",
      "Up to 30 kg",
    ],
  },
  {
    name: "Regular Parcel",
    badge: "Economy",
    badgeVariant: "outline" as const,
    icon: Package,
    delivery: "4–9 business days",
    tracking: true,
    domestic: true,
    international: false,
    description:
      "Economy domestic shipping for non-urgent parcels. Delivery times are longer but the cost is lower — ideal for non-time-sensitive shipments across Canada.",
    trackingFormat: "1234 5678 9012 3456",
    features: [
      "4–9 business days delivery",
      "Tracking included",
      "Cost-effective option",
      "Up to 30 kg",
      "Canada only",
    ],
  },
  {
    name: "Tracked Packet",
    badge: "Lightweight",
    badgeVariant: "outline" as const,
    icon: Package,
    delivery: "2–9 business days",
    tracking: true,
    domestic: false,
    international: true,
    description:
      "An affordable tracked option for lightweight international shipments to the USA and other countries. Perfect for small goods, documents, and e-commerce orders.",
    trackingFormat: "AA 123 456 789 CA",
    features: [
      "Tracking included",
      "Available to USA and international",
      "Up to 2 kg",
      "Affordable rates",
      "Delivery confirmation",
    ],
  },
  {
    name: "International Parcel",
    badge: "Worldwide",
    badgeVariant: "outline" as const,
    icon: Globe,
    delivery: "4–20+ business days",
    tracking: true,
    domestic: false,
    international: true,
    description:
      "Send packages to over 190 countries and territories worldwide through Canada Post's international network. Tracking may vary by destination country.",
    trackingFormat: "AA 123 456 789 CA",
    features: [
      "190+ destination countries",
      "Tracking to destination",
      "Surface and air options",
      "Up to 30 kg",
      "Customs forms included",
    ],
  },
  {
    name: "Small Packet",
    badge: "Budget",
    badgeVariant: "outline" as const,
    icon: Package,
    delivery: "Varies",
    tracking: false,
    domestic: false,
    international: true,
    description:
      "Low-cost option for sending small, lightweight items internationally. Basic tracking may not be available in all cases — check at time of shipping.",
    trackingFormat: "Varies by option",
    features: [
      "Most affordable international option",
      "USA and international",
      "Up to 2 kg",
      "Limited tracking",
      "Air and surface options",
    ],
  },
  {
    name: "Lettermail",
    badge: "Letters",
    badgeVariant: "outline" as const,
    icon: Package,
    delivery: "1–9 business days",
    tracking: false,
    domestic: true,
    international: true,
    description:
      "Standard mail delivery for letters, bills, cards, and flat documents. No tracking is available for Lettermail. Delivery times depend on destination within Canada.",
    trackingFormat: "No tracking",
    features: [
      "Letters and flat documents",
      "Most affordable domestic option",
      "No tracking",
      "Up to 500 g",
      "Domestic and international",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-red-600 text-white py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-red-200 text-sm font-medium uppercase tracking-wider mb-3">
              Service Guide
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Canada Post Shipping Services
            </h1>
            <p className="text-red-100 text-lg max-w-2xl mx-auto text-pretty">
              A complete guide to every Canada Post service — delivery times, tracking availability, and what to expect.
            </p>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-red-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-4 h-4" />
              </li>
              <li className="text-foreground font-medium">Shipping Services</li>
            </ol>
          </nav>
        </div>

        {/* Summary Table */}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">Quick Comparison</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/70 border-b border-border">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Service</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Delivery</span>
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Tracking</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Domestic</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">
                      <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> International</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((s, i) => (
                    <tr
                      key={s.name}
                      className={`border-b border-border last:border-0 ${i % 2 === 0 ? "" : "bg-muted/20"}`}
                    >
                      <td className="px-4 py-3 font-medium text-foreground">{s.name}</td>
                      <td className="px-4 py-3 text-muted-foreground">{s.delivery}</td>
                      <td className="px-4 py-3">
                        <span className={s.tracking ? "text-green-600 font-medium" : "text-muted-foreground"}>
                          {s.tracking ? "Yes" : "No"}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={s.domestic ? "text-green-600 font-medium" : "text-muted-foreground"}>
                          {s.domestic ? "Yes" : "No"}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={s.international ? "text-green-600 font-medium" : "text-muted-foreground"}>
                          {s.international ? "Yes" : "No"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Service Cards */}
        <section className="py-8 pb-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold text-foreground mb-8">Service Details</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <Card key={service.name} className="border border-border shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                          <service.icon className="w-5 h-5 text-red-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg leading-tight">{service.name}</CardTitle>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-0.5">
                            <Clock className="w-3.5 h-3.5" />
                            {service.delivery}
                          </div>
                        </div>
                      </div>
                      <Badge variant={service.badgeVariant} className="shrink-0 text-xs">
                        {service.badge}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-1.5">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-2 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-medium text-foreground">Tracking format: </span>
                        {service.trackingFormat}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-14 p-8 bg-red-600 rounded-xl text-white text-center">
              <h3 className="text-2xl font-bold mb-2">Ready to Track Your Package?</h3>
              <p className="text-red-100 mb-6">
                Enter your Canada Post tracking number to get real-time delivery updates for any service listed above.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-white text-red-600 font-semibold px-6 py-3 rounded-lg hover:bg-red-50 transition-colors"
              >
                <Package className="w-5 h-5" />
                Track a Package Now
              </Link>
            </div>

            {/* SEO Content */}
            <div className="mt-14 space-y-4 text-muted-foreground">
              <h3 className="text-xl font-bold text-foreground">
                How to Track Any Canada Post Service
              </h3>
              <p>
                All trackable Canada Post services — including Priority, Xpresspost, Expedited Parcel, Regular Parcel, and Tracked Packet — can be tracked using the tracking number printed on your shipping receipt or label. Enter the number in the search box on our home page to see instant delivery updates.
              </p>
              <p>
                Services such as Lettermail and basic Small Packet do not include tracking. If you require delivery confirmation, choose a service that explicitly includes tracking when shipping your item.
              </p>
            </div>
          </div>
        </section>

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Canada Post Shipping Services",
              itemListElement: services.map((s, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: s.name,
                description: s.description,
              })),
            }),
          }}
        />
      </main>
      <Footer />
    </div>
  )
}
