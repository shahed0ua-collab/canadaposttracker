import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronRight } from "lucide-react"

export const revalidate = 86400 // Revalidate daily
export const dynamic = 'force-static' // Force static generation

export const metadata: Metadata = {
  title: "Terms of Service - CA Post Tracker",
  description:
    "Read the Terms of Service for CA Post Tracker. Understand the conditions for using our free Canada Post package tracking service.",
  alternates: { canonical: "https://canadaposttracking.app/terms" },
  openGraph: {
    title: "Terms of Service - CA Post Tracker",
    description: "Terms and conditions governing use of the CA Post Tracker Canada Post tracking service.",
    url: "https://canadaposttracking.app/terms",
  },
}

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: `By accessing or using CA Post Tracker ("the Service", "we", "us", or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not use the Service.

These Terms apply to all visitors, users, and others who access or use the Service. We reserve the right to modify these Terms at any time. Continued use of the Service after changes constitutes acceptance of the updated Terms. We will update the "Last updated" date at the top of this page when changes are made.`,
  },
  {
    id: "description",
    title: "2. Description of Service",
    content: `CA Post Tracker provides a free, unofficial package tracking tool that retrieves publicly available shipping status information from Canada Post's tracking system. The Service is provided for informational purposes only.

We are not affiliated with, endorsed by, sponsored by, or in any way officially connected to Canada Post Corporation, Postes Canada, or any of their subsidiaries or affiliates. The official Canada Post website is available at canadapost-postescanada.ca.`,
  },
  {
    id: "use",
    title: "3. Acceptable Use",
    content: `You agree to use the Service only for lawful purposes and in a manner that does not infringe the rights of others. You must not:

- Use automated scripts, bots, scrapers, or crawlers to access the Service in bulk without written permission
- Attempt to gain unauthorized access to any part of the Service or its infrastructure
- Use the Service in any way that could damage, disable, overburden, or impair it
- Transmit any malicious code, viruses, or harmful data through the Service
- Use the Service for any commercial purpose without prior written consent
- Misrepresent your identity or affiliation when using the Service
- Use the Service in violation of any applicable local, national, or international law

We reserve the right to terminate or restrict access for any user who violates these conditions.`,
  },
  {
    id: "intellectual-property",
    title: "4. Intellectual Property",
    content: `All content on the Service — including text, graphics, logos, design, software, and code — is the property of CA Post Tracker or its content suppliers and is protected by applicable intellectual property laws.

You are granted a limited, non-exclusive, non-transferable license to access and use the Service for personal, non-commercial purposes. You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content from the Service without express written permission.

"Canada Post" and "Postes Canada" are registered trademarks of Canada Post Corporation. Their use on this Service is purely descriptive and does not imply any affiliation or endorsement.`,
  },
  {
    id: "tracking-data",
    title: "5. Tracking Data & Accuracy",
    content: `The tracking information displayed through the Service is retrieved from Canada Post's public tracking system. We do not store, modify, or augment the raw tracking data returned from Canada Post.

We make no warranties that the tracking information is accurate, complete, up-to-date, or error-free. Tracking data may be delayed, incomplete, or temporarily unavailable due to issues with Canada Post's systems, network outages, or other circumstances beyond our control.

You should always cross-reference critical shipping information directly with Canada Post or the sender for important decisions.`,
  },
  {
    id: "disclaimers",
    title: "6. Disclaimers & Limitation of Liability",
    content: `THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.

TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, CA POST TRACKER SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF, OR INABILITY TO USE, THE SERVICE. THIS INCLUDES, WITHOUT LIMITATION, LOSS OF REVENUE, LOSS OF DATA, OR BUSINESS INTERRUPTION.

Our total liability to you for any claim arising out of or relating to the Service shall not exceed the greater of the amount you paid us in the twelve months prior to the claim or CAD $10.`,
  },
  {
    id: "third-party",
    title: "7. Third-Party Links & Services",
    content: `The Service may contain links to third-party websites, including the official Canada Post website, app stores (Google Play, Apple App Store), and advertising partners. These links are provided for convenience only.

We have no control over, and assume no responsibility for, the content, privacy policies, or practices of third-party websites. Visiting third-party sites is at your own risk and subject to their own terms and policies.`,
  },
  {
    id: "privacy",
    title: "8. Privacy",
    content: `Your use of the Service is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection and use of your data.

We do not sell your personal information. The tracking numbers you enter are used solely to retrieve package status information and are not retained after your session ends.`,
  },
  {
    id: "termination",
    title: "9. Termination",
    content: `We reserve the right to suspend or terminate your access to the Service at any time, with or without notice, for any reason, including but not limited to violation of these Terms.

Upon termination, your right to use the Service will immediately cease. Provisions of these Terms that by their nature should survive termination will survive, including intellectual property provisions, disclaimers, and limitations of liability.`,
  },
  {
    id: "governing-law",
    title: "10. Governing Law",
    content: `These Terms shall be governed by and construed in accordance with the laws of the Province of Ontario, Canada, without regard to its conflict of law provisions.

Any dispute arising from or relating to these Terms or the Service shall be subject to the exclusive jurisdiction of the courts located in Ontario, Canada. If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.`,
  },
  {
    id: "contact",
    title: "11. Contact",
    content: `If you have any questions about these Terms of Service, please contact us through the contact information provided on this website. We will respond to inquiries as promptly as reasonably possible.`,
  },
]

export default function TermsPage() {
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
              Terms of Service
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
              <li className="text-foreground font-medium">Terms of Service</li>
            </ol>
          </nav>
        </div>

        {/* Content */}
        <section className="py-8 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-10">

              {/* Sticky Table of Contents */}
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

              {/* Main Content */}
              <article className="flex-1 min-w-0 space-y-10">
                <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-sm text-amber-800">
                  <strong>Important notice:</strong> CA Post Tracker is an independent, third-party service and is not affiliated with Canada Post Corporation. These Terms govern your use of the CA Post Tracker website and mobile applications only.
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
                    By using CA Post Tracker, you acknowledge that you have read, understood, and agree to these Terms of Service. See also our{" "}
                    <Link href="/privacy-policy" className="text-red-600 hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/disclaimer" className="text-red-600 hover:underline">
                      Disclaimer
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
