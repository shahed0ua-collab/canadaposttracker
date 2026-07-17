import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export const revalidate = 86400 // Revalidate daily
export const dynamic = 'force-static' // Force static generation

export const metadata: Metadata = {
  title: "Privacy Policy - CA Post Tracker",
  description: "Privacy Policy for CA Post Tracker mobile app and website. Learn how we handle your data and protect your privacy when tracking Canada Post packages.",
  keywords: [
    "CA Post Tracker privacy policy",
    "Canada Post tracking privacy",
    "package tracking privacy",
    "data protection",
    "user privacy"
  ],
  openGraph: {
    title: "Privacy Policy - CA Post Tracker",
    description: "Privacy Policy for CA Post Tracker. Learn how we protect your privacy.",
    type: "website",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Privacy Policy for CA Post Tracker
            </h1>
            <p className="text-muted-foreground mb-8">Last Updated: May 13, 2026</p>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6 md:p-8 prose prose-gray max-w-none">
                <div className="space-y-8">
                  {/* Developer Info */}
                  <div className="bg-muted/50 p-4 rounded-lg text-sm">
                    <p className="mb-1"><strong>Developer:</strong> Shahed Uddin Ahmed</p>
                    <p className="mb-1"><strong>Contact:</strong> shahed0ua@gmail.com</p>
                    <p className="mb-0"><strong>App Package:</strong> com.itsz.canadaposttracker</p>
                  </div>

                  {/* Introduction */}
                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">Introduction</h2>
                    <p className="text-muted-foreground">
                      CA Post Tracker (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. 
                      This Privacy Policy explains how our app handles information when you use our Canada Post 
                      tracking services. This app is an unofficial third-party application and is not affiliated 
                      with Canada Post Corporation.
                    </p>
                  </section>

                  {/* App Access */}
                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">App Access</h2>
                    <p className="text-muted-foreground">
                      No account or registration is required to use this app. All features are available 
                      immediately upon download and acceptance of the disclaimer.
                    </p>
                  </section>

                  {/* Information We Do NOT Collect */}
                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">Information We Do NOT Collect</h2>
                    <p className="text-muted-foreground mb-4">
                      CA Post Tracker does not collect, store, or transmit any personal information.
                    </p>
                    <p className="text-muted-foreground mb-3">Specifically, we do NOT:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Collect your name, email, phone number, or address</li>
                      <li>Create user accounts or profiles</li>
                      <li>Track your location</li>
                      <li>Access your contacts, photos, or files</li>
                      <li>Use analytics or tracking cookies</li>
                      <li>Share data with third parties</li>
                    </ul>
                  </section>

                  {/* Information Stored Locally */}
                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">Information Stored Locally</h2>
                    <p className="text-muted-foreground mb-4">
                      The app only stores the following information locally on your device using AsyncStorage:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                      <li><strong>Consent Status</strong> - Whether you have accepted the app disclaimer</li>
                      <li><strong>Tracking History</strong> - Recently tracked tracking numbers (maximum 20 items)
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                          <li>Tracking number (PIN)</li>
                          <li>Last known status</li>
                          <li>Product name (if available)</li>
                          <li>Date tracked</li>
                        </ul>
                      </li>
                    </ul>
                    <p className="text-muted-foreground font-medium">
                      This information never leaves your device and is not transmitted to any server.
                    </p>
                  </section>

                  {/* How We Use Tracking Numbers */}
                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">How We Use Tracking Numbers</h2>
                    <p className="text-muted-foreground mb-3">When you enter a tracking number:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>It is sent directly to Canada Post&apos;s official tracking API (canadapost-postescanada.ca)</li>
                      <li>No intermediate servers are involved</li>
                      <li>We do not log or store these requests</li>
                      <li>Tracking history is saved only on your device (optional)</li>
                    </ul>
                  </section>

                  {/* Third-Party Services */}
                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">Third-Party Services</h2>
                    <p className="text-muted-foreground mb-3">We use the following third-party service:</p>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="font-semibold text-foreground mb-2">Canada Post Tracking API</p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                        <li><strong>Purpose:</strong> To retrieve package tracking information</li>
                        <li><strong>Data Shared:</strong> Only the tracking number you enter</li>
                        <li><strong>Privacy Policy:</strong> Subject to Canada Post&apos;s privacy policies at canadapost.ca</li>
                      </ul>
                    </div>
                  </section>

                  {/* Data Retention and Deletion */}
                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">Data Retention and Deletion</h2>
                    
                    <h3 className="text-lg font-medium text-foreground mb-2">Retention Period:</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                      <li>Consent status: Retained indefinitely until app uninstall</li>
                      <li>Tracking history: Maximum 20 most recent items, older entries automatically removed</li>
                    </ul>

                    <h3 className="text-lg font-medium text-foreground mb-2">How to Delete Your Data:</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li><strong>Clear History:</strong> Use the &quot;Clear All&quot; button in the History screen to remove all tracking history</li>
                      <li><strong>Complete Removal:</strong> Uninstall the app to delete all locally stored data</li>
                      <li><strong>No server data:</strong> We do not retain any data on servers</li>
                    </ul>
                  </section>

                  {/* Data Security */}
                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">Data Security</h2>
                    <p className="text-muted-foreground mb-3">Since all data is stored locally on your device:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Data security depends on your device&apos;s security settings (device lock, encryption)</li>
                      <li>We use AsyncStorage for local persistence, which follows platform security standards</li>
                      <li>Uninstalling the app will delete all stored data</li>
                      <li>No cloud backups, server databases, or network transmission of user data</li>
                    </ul>
                  </section>

                  {/* Children's Privacy */}
                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">Children&apos;s Privacy</h2>
                    <p className="text-muted-foreground">
                      Our app does not knowingly collect any information from children under 13. 
                      The app is intended for general audiences.
                    </p>
                  </section>

                  {/* Changes to This Policy */}
                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">Changes to This Policy</h2>
                    <p className="text-muted-foreground">
                      We may update this Privacy Policy from time to time. Changes will be posted within 
                      the app and the updated date will be modified.
                    </p>
                  </section>

                  {/* Your Rights */}
                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">Your Rights</h2>
                    <p className="text-muted-foreground mb-3">You have the right to:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Clear your tracking history (via the History screen)</li>
                      <li>Reset app data by uninstalling the app</li>
                      <li>Use the app anonymously without creating accounts</li>
                    </ul>
                  </section>

                  {/* Contact Us */}
                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">Contact Us</h2>
                    <p className="text-muted-foreground">
                      If you have any questions about this Privacy Policy or our data practices, 
                      please contact us through the app store listing or email us at{" "}
                      <a href="mailto:shahed0ua@gmail.com" className="text-red-600 hover:underline">
                        shahed0ua@gmail.com
                      </a>.
                    </p>
                  </section>

                  {/* Compliance */}
                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">Compliance</h2>
                    <p className="text-muted-foreground mb-3">This app complies with:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Google Play Developer Policy</li>
                      <li>Apple App Store Review Guidelines</li>
                      <li>Canada Post Terms of Use (for API usage)</li>
                    </ul>
                  </section>

                  {/* Note */}
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <p className="text-amber-800 text-sm font-medium">
                      Note: This is an unofficial app and is not affiliated with Canada Post Corporation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
