import { TrackingHero } from "@/components/tracking-hero"
import { TrackingFeatures } from "@/components/tracking-features"
import { TrackingFAQ } from "@/components/tracking-faq"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export const revalidate = 3600 // Revalidate every hour (1 hour = 3600 seconds)
export const dynamic = 'force-static' // Force static generation

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <TrackingHero />
        <TrackingFeatures />
        <TrackingFAQ />
      </main>
      <Footer />
      
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Canada Post Tracking",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "Web, Android, iOS",
            "description": "Track your Canada Post packages instantly. Free tracking tool for Xpresspost, Priority, Regular Parcel and more shipping services.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "CAD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "12500"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I track my Canada Post package?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Enter your Canada Post tracking number in the search box above. Your tracking number can be found on your shipping receipt, confirmation email, or the package itself."
                }
              },
              {
                "@type": "Question",
                "name": "What is a Canada Post tracking number?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A Canada Post tracking number is a unique 13-16 character code assigned to trackable shipments. It typically starts with letters and contains both letters and numbers."
                }
              },
              {
                "@type": "Question",
                "name": "How long does Canada Post tracking take to update?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Canada Post tracking information typically updates within 24-48 hours after shipping. Domestic packages usually show updates faster than international shipments."
                }
              }
            ]
          })
        }}
      />
    </div>
  )
}
