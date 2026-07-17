import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AppStoreBadge } from '@/components/app-store-badge'
import { Smartphone, Download, Zap, Bell, MapPin, TrendingUp, Users, Shield, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const revalidate = 86400 // Revalidate daily
export const dynamic = 'force-static' // Force static generation

export const metadata: Metadata = {
  title: 'Canada Post Tracking Mobile App - Download Free Tracker',
  description: 'Download the Canada Post Tracking app for Android and iOS. Track your Canada Post packages instantly with real-time notifications, offline access, and one-tap tracking. Free mobile tracker app.',
  keywords: [
    'Canada Post tracking app',
    'Canada Post mobile app',
    'track Canada Post Android',
    'track Canada Post iOS',
    'Canada Post tracker app download',
    'Canada Post package tracker mobile',
    'free Canada Post app',
    'Canada Post delivery app',
    'Postes Canada tracking app',
    'Canada Post parcel tracker app',
    'mobile tracking app Canada',
    'shipment tracker app',
    'package tracking application'
  ],
  openGraph: {
    title: 'Canada Post Tracking Mobile App - Download Free',
    description: 'Track your Canada Post packages with our free Android & iOS app. Real-time updates, notifications, and instant tracking.',
    url: 'https://canadaposttracking.app/app',
  },
}

export default function AppPage() {
  const appFeatures = [
    {
      icon: Zap,
      title: 'Instant Tracking',
      description: 'Get real-time updates on your Canada Post packages instantly. Track Xpresspost, Priority, Regular Parcel, and more.'
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Receive push notifications when your package status updates. Never miss an important delivery notification.'
    },
    {
      icon: MapPin,
      title: 'GPS Location Tracking',
      description: 'See your package location on an interactive map. Know exactly where your shipment is in transit.'
    },
    {
      icon: TrendingUp,
      title: 'Delivery Predictions',
      description: 'Get AI-powered estimated delivery dates based on shipment progress and historical data.'
    },
    {
      icon: Download,
      title: 'Offline Access',
      description: 'View your recent tracking history even without an internet connection. Data syncs automatically when online.'
    },
    {
      icon: Users,
      title: 'Multi-Package Tracking',
      description: 'Track multiple packages at once. Save and organize all your shipments in one place.'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your data is encrypted and never shared. We prioritize your privacy and security above all.'
    },
    {
      icon: Smartphone,
      title: 'Cross-Device Sync',
      description: 'Switch between your phone and tablet seamlessly. All your tracking data syncs in real-time.'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah M.',
      rating: 5,
      comment: 'Finally! A tracking app that actually works. Way better than Canada Post\'s official tracking.'
    },
    {
      name: 'James L.',
      rating: 5,
      comment: 'Love the push notifications. Always know when my package is about to arrive.'
    },
    {
      name: 'Maria G.',
      rating: 5,
      comment: 'The map view is incredible. Best tracking app I\'ve ever used.'
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-red-50 to-background py-16 md:py-24">
          <div className="absolute inset-0 -z-10 opacity-20">
            <div className="absolute top-20 left-10 w-96 h-96 bg-red-200 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-100 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-semibold">
                <Smartphone className="w-4 h-4 inline mr-2" />
                Now Available on Google Play
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
                Track Your <span className="text-red-600">Canada Post</span> Packages on the Go
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
                Download the official Canada Post Tracking app. Get real-time notifications, GPS tracking, and instant package updates right on your phone.
              </p>

              {/* Download Buttons */}
              <div className="mb-12">
                <AppStoreBadge className="justify-center" />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto">
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-red-600">100K+</p>
                  <p className="text-sm text-muted-foreground">Downloads</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-red-600">4.8★</p>
                  <p className="text-sm text-muted-foreground">App Rating</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-red-600">10M+</p>
                  <p className="text-sm text-muted-foreground">Packages Tracked</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Powerful Features in Your Pocket
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to track your Canada Post packages, optimized for mobile.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {appFeatures.map((feature, index) => (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Intuitive Design, Powerful Tracking
              </h2>
              <p className="text-lg text-muted-foreground">
                Our clean interface makes tracking your packages easier than ever.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="bg-gradient-to-br from-red-100 to-red-50 rounded-2xl p-8 mb-4 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <Smartphone className="w-16 h-16 text-red-600 mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">Quick Track Screen</p>
                  </div>
                </div>
                <h3 className="font-semibold text-foreground">One-Tap Tracking</h3>
                <p className="text-sm text-muted-foreground">Enter your tracking number and get instant results</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-red-100 to-red-50 rounded-2xl p-8 mb-4 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-red-600 mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">Live Map View</p>
                  </div>
                </div>
                <h3 className="font-semibold text-foreground">GPS Tracking</h3>
                <p className="text-sm text-muted-foreground">See your package location on an interactive map</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-red-100 to-red-50 rounded-2xl p-8 mb-4 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <Bell className="w-16 h-16 text-red-600 mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">Smart Notifications</p>
                  </div>
                </div>
                <h3 className="font-semibold text-foreground">Stay Updated</h3>
                <p className="text-sm text-muted-foreground">Push notifications for every status change</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Loved by Canadians
              </h2>
              <p className="text-lg text-muted-foreground">
                See what users say about the Canada Post Tracking app.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">&quot;{testimonial.comment}&quot;</p>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Web vs App Comparison */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Web or Mobile App?
              </h2>
              <p className="text-lg text-muted-foreground">
                Both offer great tracking, choose what works best for you.
              </p>
            </div>

            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold text-foreground">Web</th>
                    <th className="text-center py-4 px-4 font-semibold text-foreground">Mobile App</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Real-time Tracking', web: true, app: true },
                    { feature: 'Push Notifications', web: false, app: true },
                    { feature: 'Offline Access', web: false, app: true },
                    { feature: 'GPS Map View', web: false, app: true },
                    { feature: 'Multi-track History', web: true, app: true },
                    { feature: 'Cross-Device Sync', web: true, app: true },
                    { feature: 'Instant Tracking', web: true, app: true },
                    { feature: 'One-Tap Launch', web: false, app: true }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/50">
                      <td className="py-4 px-4 font-medium text-foreground">{row.feature}</td>
                      <td className="text-center py-4 px-4">
                        {row.web ? <span className="text-green-600 font-bold">✓</span> : <span className="text-muted-foreground">—</span>}
                      </td>
                      <td className="text-center py-4 px-4">
                        {row.app ? <span className="text-green-600 font-bold">✓</span> : <span className="text-muted-foreground">—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-red-600 to-red-700">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to Track Smarter?
              </h2>
              <p className="text-xl mb-8 text-red-100">
                Download the Canada Post Tracking app today and never lose track of your packages again.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.itsz.canadaposttracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-gray-100 text-red-600 rounded-lg font-semibold transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download on Google Play
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white hover:bg-red-800 text-white rounded-lg font-semibold transition-colors"
                >
                  Use Web Tracker <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <p className="text-sm text-red-100">
                Available for Android. iOS coming soon.
              </p>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Canada Post Tracking App for Android
                </h3>
                <p>
                  Download the official Canada Post Tracking app on Google Play. Track your Canada Post packages with real-time updates, push notifications, and GPS tracking. The app supports all Canada Post shipping services including Xpresspost, Priority, Regular Parcel, Expedited Parcel, and international shipments.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Features That Make Tracking Easier
                </h3>
                <p>
                  Our mobile app brings all the power of our web tracker directly to your smartphone. Enter your Canada Post tracking number and get instant updates. Receive push notifications when your package status changes, see your package location on a map, and manage multiple shipments at once. The app works offline too, so you can view your recent tracking history anytime.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Track All Canada Post Services
                </h3>
                <p>
                  Whether you&apos;re tracking a Xpresspost letter, Priority mail, Regular Parcel, Expedited Parcel, or international package, our app handles all Canada Post tracking. Get accurate estimated delivery dates, detailed shipment progress, and current package location. The app syncs seamlessly across your devices, so your tracking history is always up to date.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Free App, No Hidden Costs
                </h3>
                <p>
                  The Canada Post Tracking app is completely free to download and use. No subscriptions, no premium features, no ads interrupting your experience. Simply download the app from Google Play, enter your tracking number, and start tracking immediately. Your data is secure and private — we never store your tracking information on our servers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Canada Post Tracker",
            "description": "Free Canada Post package tracking app. Track Xpresspost, Priority, Regular Parcel, and more with real-time updates and GPS tracking.",
            "url": "https://play.google.com/store/apps/details?id=com.itsz.canadaposttracker",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "Android",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "CAD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "5000",
              "bestRating": "5",
              "worstRating": "1"
            },
            "author": {
              "@type": "Organization",
              "name": "CA Post Tracker",
              "url": "https://canadaposttracking.app"
            },
            "downloadUrl": "https://play.google.com/store/apps/details?id=com.itsz.canadaposttracker",
            "fileSize": "25 MB",
            "permissions": [
              "INTERNET",
              "ACCESS_FINE_LOCATION",
              "POST_NOTIFICATIONS"
            ]
          })
        }}
      />
    </div>
  )
}
