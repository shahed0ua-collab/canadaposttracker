import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const revalidate = 86400 // Revalidate daily
export const dynamic = 'force-static' // Force static generation

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "FAQ - Canada Post Tracking Questions Answered",
  description:
    "Frequently asked questions about Canada Post tracking. Learn how to track packages, find tracking numbers, understand delivery statuses, and more.",
  keywords: [
    "Canada Post tracking FAQ",
    "how to track Canada Post package",
    "Canada Post tracking number",
    "Canada Post delivery status explained",
    "Canada Post package not updating",
    "Canada Post tracking help",
  ],
  alternates: { canonical: "https://canadaposttracking.app/faq" },
  openGraph: {
    title: "FAQ - Canada Post Tracking Questions Answered",
    description:
      "Get answers to the most common Canada Post tracking questions. Find out how to track packages, locate tracking numbers, and understand shipment statuses.",
    url: "https://canadaposttracking.app/faq",
  },
}

const faqCategories = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I track my Canada Post package?",
        a: "Enter your Canada Post tracking number in the search box on the home page and click 'Track Package'. Your tracking number is typically found on your shipping receipt, order confirmation email, or directly on the package label. Results appear instantly.",
      },
      {
        q: "What is a Canada Post tracking number?",
        a: "A Canada Post tracking number is a unique alphanumeric code assigned to trackable shipments. Domestic tracking numbers are usually 16 characters (e.g., 1234 5678 9012 3456). International tracking numbers follow the format AA 123 456 789 CA (13 characters). The number is printed on your shipping receipt and label.",
      },
      {
        q: "Where can I find my Canada Post tracking number?",
        a: "You can find your tracking number in several places: (1) On the shipping receipt given at the post office, (2) In the order confirmation or shipping notification email from an online retailer, (3) On the shipping label affixed to the package, (4) In your Canada Post My Account portal if you are a registered shipper, (5) In the merchant's order details page if purchased online.",
      },
      {
        q: "Is CA Post Tracker free to use?",
        a: "Yes, CA Post Tracker is completely free. You can track unlimited Canada Post packages with no registration, no fees, and no hidden charges. Our mobile app for Android and iOS is also free to download.",
      },
      {
        q: "Is this the official Canada Post website?",
        a: "No. CA Post Tracker is an independent, third-party tracking tool and is not affiliated with, endorsed by, or connected to Canada Post Corporation or Postes Canada. For official services, complaints, or claims, please visit canadapost-postescanada.ca directly.",
      },
    ],
  },
  {
    category: "Tracking Statuses Explained",
    questions: [
      {
        q: "What does 'Shipment information received by Canada Post' mean?",
        a: "This status means the sender has created a shipping label and the tracking number is registered, but Canada Post has not yet physically received the package. The package will begin moving through the network once the sender drops it off or it is picked up.",
      },
      {
        q: "What does 'Item processed' mean in Canada Post tracking?",
        a: "'Item processed' means your package has been scanned at a Canada Post processing facility. This is a routine step indicating the package is progressing through the postal network toward its destination.",
      },
      {
        q: "What does 'In transit to destination' mean?",
        a: "This means your package is actively moving through the Canada Post network toward its final destination. The package may be on a truck, aircraft, or at an intermediate sorting facility.",
      },
      {
        q: "What does 'Out for delivery' mean?",
        a: "'Out for delivery' means your package is on the mail carrier's vehicle and is expected to be delivered to your address today. You should receive your package later in the day.",
      },
      {
        q: "What does 'Delivery attempted' mean?",
        a: "A delivery was attempted but could not be completed — usually because no one was home to sign for the package or access to the delivery location was not possible. Canada Post will typically leave a delivery notice card with instructions on how to retrieve the package (usually at your local post office).",
      },
      {
        q: "What does 'Item held at post office' mean?",
        a: "Your package is available for pickup at a Canada Post retail location. This can happen after a failed delivery attempt or if the package is too large for your mailbox. The delivery notice card will indicate which post office is holding your item and how long it will be available.",
      },
    ],
  },
  {
    category: "Delivery & Timing",
    questions: [
      {
        q: "How long does Canada Post delivery take?",
        a: "Delivery times vary by service: Priority (next business day within Canada), Xpresspost (1–2 business days), Expedited Parcel (2–5 business days), Regular Parcel (4–9 business days), Tracked Packet USA (4–9 business days), and International Parcel (depends on destination — typically 4–20+ business days). Remote areas may experience longer delivery times.",
      },
      {
        q: "Why is my package taking longer than estimated?",
        a: "Delays can happen due to several factors: high volume periods (holidays, sales events), severe weather, address issues requiring manual processing, customs clearance for international shipments, or operational disruptions. If your package is significantly delayed, contact Canada Post customer service directly.",
      },
      {
        q: "Does Canada Post deliver on weekends?",
        a: "Canada Post delivers Priority mail on Saturdays. Regular mail and parcels are typically delivered Monday through Friday. Some Xpresspost shipments may also be delivered on Saturdays in major urban areas. Sunday delivery is not a standard service.",
      },
      {
        q: "Can I change the delivery address after shipping?",
        a: "Canada Post does not offer an address change service once a package is in transit. To redirect a package, the sender must request the change through their Canada Post account. As a recipient, you can sometimes arrange a hold at a post office using your delivery notice card.",
      },
    ],
  },
  {
    category: "Tracking Problems",
    questions: [
      {
        q: "Why is my Canada Post tracking not updating?",
        a: "Tracking updates can be delayed for several reasons: (1) The package was just shipped and hasn't been scanned yet — allow 24–48 hours, (2) The package is between scanning points on a long journey, (3) High volume at processing facilities causing scan delays, (4) International packages may have gaps in updates between postal systems, (5) Remote or rural delivery routes scan less frequently.",
      },
      {
        q: "My tracking says delivered but I haven't received my package. What should I do?",
        a: "First, check around your property — mailbox, front door, side door, porch, or with a neighbour. Check if a delivery notice card was left. Wait 24 hours, as sometimes packages are marked delivered prematurely. If still missing after 24 hours, contact the sender to file a claim and reach out to Canada Post customer service.",
      },
      {
        q: "My tracking number says 'not found'. What does it mean?",
        a: "A 'not found' result typically means: (1) The tracking number was entered incorrectly — double-check for typos, (2) The package was just shipped and the system hasn't registered it yet — try again in a few hours, (3) The service used does not include tracking (e.g., standard lettermail). Verify the tracking number with the sender.",
      },
      {
        q: "Can I track a package without a tracking number?",
        a: "Unfortunately, Canada Post requires a valid tracking number to provide package information. If you've lost your tracking number, contact the sender — they should have a record of it. If you purchased online, check your order confirmation email or account.",
      },
    ],
  },
  {
    category: "International Tracking",
    questions: [
      {
        q: "Can I track Canada Post packages coming from the USA?",
        a: "Yes. Packages shipped from the USA via USPS that are destined for Canada are handed off to Canada Post upon arrival. Once in Canada, Canada Post will show detailed tracking updates. Use the tracking number provided by USPS or the sender.",
      },
      {
        q: "How do I track a Canada Post package sent internationally?",
        a: "Enter the tracking number in the search box above. For international shipments, tracking visibility depends on agreements between Canada Post and the destination country's postal carrier. Once the package leaves Canada, updates are provided by the receiving country's postal service.",
      },
      {
        q: "What is a Canada Post international tracking number format?",
        a: "Canada Post international tracking numbers follow the Universal Postal Union format: two letters + nine digits + two-letter country code 'CA'. For example: RA 123 456 789 CA. The first two letters indicate the service type (R = Registered, E = Xpresspost, C = Parcel).",
      },
    ],
  },
]

export default function FAQPage() {
  const allQuestions = faqCategories.flatMap((c) => c.questions)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-red-600 text-white py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-red-200 text-sm font-medium uppercase tracking-wider mb-3">
              Help Center
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Frequently Asked Questions
            </h1>
            <p className="text-red-100 text-lg max-w-2xl mx-auto text-pretty">
              Everything you need to know about tracking your Canada Post packages.
              Can&apos;t find an answer? Visit the official Canada Post website.
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
              <li className="text-foreground font-medium">FAQ</li>
            </ol>
          </nav>
        </div>

        {/* FAQ Content */}
        <section className="py-10 pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Category navigation */}
            <div className="flex flex-wrap gap-2 mb-10">
              {faqCategories.map((cat) => (
                <a
                  key={cat.category}
                  href={`#${cat.category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="px-4 py-1.5 rounded-full border border-border text-sm font-medium text-foreground hover:border-red-600 hover:text-red-600 transition-colors"
                >
                  {cat.category}
                </a>
              ))}
            </div>

            <div className="space-y-12">
              {faqCategories.map((cat) => (
                <div
                  key={cat.category}
                  id={cat.category.toLowerCase().replace(/\s+/g, "-")}
                >
                  <h2 className="text-xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                    {cat.category}
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {cat.questions.map((faq, i) => (
                      <AccordionItem key={i} value={`${cat.category}-${i}`}>
                        <AccordionTrigger className="text-left text-foreground text-base">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            {/* SEO footer */}
            <div className="mt-16 p-6 bg-muted/50 rounded-lg border border-border text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Still need help?
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                For official support, claims, or complaints, contact Canada Post directly.
              </p>
              <a
                href="https://www.canadapost-postescanada.ca/cpc/en/support/contact-us.page"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-red-600 hover:underline"
              >
                Contact Canada Post Customer Service
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: allQuestions.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            }),
          }}
        />
      </main>
      <Footer />
    </div>
  )
}
