import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: 'Canada Post Tracking - Track Your Parcel & Package Delivery Status',
    template: '%s | Canada Post Tracking'
  },
  description: 'Track your Canada Post packages instantly. Free Canada Post tracking tool to check parcel delivery status, shipping updates, and estimated delivery dates. Track Xpresspost, Priority, Regular Parcel & more.',
  keywords: [
    'Canada Post tracking',
    'Canada Post track package',
    'Canada Post parcel tracking',
    'track my Canada Post package',
    'Canada Post delivery status',
    'Canada Post shipping tracking',
    'Postes Canada tracking',
    'Canada Post tracking number',
    'track Canada Post shipment',
    'Canada Post Xpresspost tracking',
    'Canada Post Priority tracking',
    'Canada Post Regular Parcel tracking',
    'Canada Post Expedited Parcel tracking',
    'Canada Post delivery updates',
    'Canada Post package status',
    'track parcel Canada',
    'Canada shipping tracking',
    'Canadian mail tracking',
    'Canada Post courier tracking',
    'Canada Post order tracking',
    'where is my Canada Post package',
    'Canada Post estimated delivery',
    'Canada Post tracking app',
    'CA Post tracker',
    'Canada Post tracker online',
    'track package Canada Post free'
  ],
  authors: [{ name: 'CA Post Tracker' }],
  creator: 'CA Post Tracker',
  publisher: 'CA Post Tracker',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://canadaposttracking.app',
    siteName: 'Canada Post Tracking',
    title: 'Canada Post Tracking - Track Your Parcel & Package Delivery Status',
    description: 'Track your Canada Post packages instantly. Free tracking tool for Xpresspost, Priority, Regular Parcel & more. Get real-time delivery updates.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Canada Post Tracking - Track Your Packages',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Canada Post Tracking - Track Your Parcel & Package Delivery',
    description: 'Track your Canada Post packages instantly. Free tracking tool for all Canada Post shipments.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://canadaposttracking.app',
    languages: {
      'en-CA': 'https://canadaposttracking.app',
      'fr-CA': 'https://canadaposttracking.app/fr',
    },
  },
  category: 'Shipping & Logistics',
  appLinks: {
    android: [
      {
        package: 'com.itsz.canadaposttracker',
        app_name: 'Canada Post Tracker',
        app_store_id: 'com.itsz.canadaposttracker',
        url: 'https://play.google.com/store/apps/details?id=com.itsz.canadaposttracker'
      }
    ]
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#dc2626' },
    { media: '(prefers-color-scheme: dark)', color: '#991b1b' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="msvalidate.01" content="6692EBB2C3A2DDC3C128EC1C1713D11F" />
        {/* App Schema for Mobile App */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Canada Post Tracker",
              "description": "Free Canada Post package tracking app with real-time updates, push notifications, and GPS tracking.",
              "applicationCategory": "UtilitiesApplication",
              "operatingSystem": "Android",
              "url": "https://canadaposttracking.app",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "CAD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "5000"
              },
              "downloadUrl": "https://play.google.com/store/apps/details?id=com.itsz.canadaposttracker"
            })
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CA Post Tracker",
              "url": "https://canadaposttracking.app",
              "logo": "https://canadaposttracking.app/og-image.jpg",
              "description": "Free Canada Post tracking tool and mobile app",
              "sameAs": [
                "https://play.google.com/store/apps/details?id=com.itsz.canadaposttracker"
              ],
              "contact": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "url": "https://canadaposttracking.app/faq"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
