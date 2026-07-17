import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronRight, AlertTriangle } from "lucide-react"

export const revalidate = 86400 // Revalidate daily
export const dynamic = 'force-static' // Force static generation

export const metadata: Metadata = {
  title: "Disclaimer - CA Post Tracker",
  description:
    "Important disclaimer about CA Post Tracker. Learn about our relationship with Canada Post Corporation and the limitations of our third-party tracking service.",
  alternates: { canonical: "https://canadaposttracking.app/disclaimer" },
  openGraph: {
    title: "Disclaimer - CA Post Tracker",
    description:
      "Disclaimer for CA Post Tracker — an independent, unofficial Canada Post package tracking service.",
    url: "https://canadaposttracking.app/disclaimer",
  },
}

const sections = [
  {
    id: "no-affiliation",
    title: "No Affiliation with Canada Post",
    content: `CA Post Tracker is an independent, third-party web service and mobile application. We are not affiliated with, endorsed by, sponsored by, operated by, or in any way officially connected to Canada Post Corporation, Postes Canada, or the Government of Canada.

The name "Canada Post", "Postes Canada", and all related logos and trademarks are the property of Canada Post Corporation. Their appearance on this website is solely to describe the tracking service being referenced and does not imply any affiliation or official relationship.

For official Canada Post services, complaints, claims, and customer support, please visit the official website at canadapost-postescanada.ca.`,
  },
  {
    id: "tracking-accuracy",
    title: "Tracking Data Accuracy",
    content: `The package tracking information displayed on this website and in our mobile applications is retrieved from Canada Post's publicly accessible tracking system. We display this information as-is and do not alter, interpret, or guarantee its accuracy.

Tracking data is subject to delays, errors, or temporary unavailability due to Canada Post system outages, technical issues, or other circumstances entirely outside our control. We strongly recommend verifying critical delivery information directly with Canada Post or the sender before making decisions based on the tracking status shown here.

We accept no responsibility for actions taken or not taken based on tracking information displayed through our service.`,
  },
  {
    id: "no-liability",
    title: "Limitation of Liability",
    content: `To the maximum extent permitted by applicable law, CA Post Tracker, its owners, operators, employees, and partners shall not be liable for any loss or damage of any nature arising from:

- Reliance on inaccurate, delayed, or incomplete tracking information
- Loss of a package or failure of delivery by Canada Post
- Business losses, missed deadlines, or other consequential losses connected to tracking information
- Technical issues, downtime, or service interruptions affecting the availability of this website or our mobile apps
- Any third-party services linked to or accessible from this website

This service is provided purely as an informational convenience tool.`,
  },
  {
    id: "no-warranty",
    title: "No Warranty",
    content: `This Service is provided on an "as is" and "as available" basis without any warranties of any kind, whether express, implied, or statutory. We do not warrant that:

- The Service will be available at all times or will operate without interruptions or errors
- The tracking information displayed will be accurate, current, or complete
- The Service will meet your specific requirements or expectations
- Any errors or defects in the Service will be corrected

Your use of the Service is entirely at your own risk.`,
  },
  {
    id: "external-links",
    title: "External Links",
    content: `This website contains links to external websites, including the official Canada Post website, Google Play Store, Apple App Store, and other third-party resources. These links are provided for convenience and informational purposes only.

We do not control, endorse, or take responsibility for the content, privacy practices, or terms of service of any external websites. Accessing external links is done entirely at your own risk.`,
  },
  {
    id: "changes",
    title: "Changes to This Disclaimer",
    content: `We reserve the right to update or change this Disclaimer at any time without prior notice. Changes take effect immediately upon posting to this page. The "Last updated" date at the top of this page reflects the most recent revision.

We encourage you to review this Disclaimer periodically to stay informed about how we operate and your rights when using the Service.`,
  },
  {
    id: "governing",
    title: "Governing Law",
    content: `This Disclaimer shall be governed by and construed in accordance with the laws of the Province of Ontario, Canada. Any disputes arising from or in connection with this Disclaimer shall be subject to the exclusive jurisdiction of the courts of Ontario, Canada.`,
  },
]

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-red-600 text-white py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-red-200 text-sm font-medium uppercase tracking-wider mb-3">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Disclaimer
            </h1>
            <p className="text-red-100">Last updated: May 13, 2026</p>
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
              <li className="text-foreground font-medium">Disclaimer</li>
            </ol>
          </nav>
        </div>

        {/* Content */}
        <section className="py-8 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-10">

              {/* Sticky ToC */}
              <aside className="lg:w-56 shrink-0">
                <div className="lg:sticky lg:top-20">
                  <h2 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                    Contents
                  </h2>
                  <nav aria-label="Table of contents">
                    <ul className="space-y-2">
                      {sections.map((s) => (
                        <li key={s.id}>
                          <a
                            href={`#${s.id}`}
                            className="text-sm text-muted-foreground hover:text-red-600 transition-colors leading-snug block"
                          >
                            {s.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </aside>

              {/* Main */}
              <article className="flex-1 min-w-0 space-y-10">
                {/* Key notice */}
                <div className="flex gap-3 p-4 rounded-lg bg-amber-50 border border-amber-200">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-sm text-amber-800">
                    <strong>Third-Party Service Notice:</strong> CA Post Tracker is not operated by Canada Post Corporation. We are an independent tracking tool that retrieves publicly available information from Canada Post&apos;s system. For official support, please contact Canada Post directly.
                  </div>
                </div>

                {sections.map((section) => (
                  <div key={section.id} id={section.id}>
                    <h2 className="text-xl font-bold text-foreground mb-3">{section.title}</h2>
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                ))}

                <div className="pt-6 border-t border-border text-sm text-muted-foreground">
                  <p>
                    See also our{" "}
                    <Link href="/privacy-policy" className="text-red-600 hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/terms" className="text-red-600 hover:underline">
                      Terms of Service
                    </Link>.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
