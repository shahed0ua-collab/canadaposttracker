import Link from "next/link"
import { Package } from "lucide-react"
import { AppStoreBadge } from "./app-store-badge"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        {/* App Download Section */}
        <div className="mb-12 pb-8 border-b border-border">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">Get the Mobile App</h3>
            <p className="text-sm text-muted-foreground mb-4">Track your Canada Post packages faster with our mobile app</p>
            <AppStoreBadge className="justify-center" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-semibold text-lg mb-4">
              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <span className="text-foreground">CA Post Tracker</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Free Canada Post package tracking tool. Track your Xpresspost, Priority, Regular Parcel and more.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Track Package
                </Link>
              </li>
              <li>
                <Link href="/app" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Mobile App
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Shipping Services
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-red-600 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.canadapost-postescanada.ca" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-red-600 transition-colors"
                >
                  Official Canada Post
                </a>
              </li>
            </ul>
          </div>

          {/* Tracking Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Tracking Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-muted-foreground">Xpresspost Tracking</span>
              </li>
              <li>
                <span className="text-muted-foreground">Priority Tracking</span>
              </li>
              <li>
                <span className="text-muted-foreground">Regular Parcel Tracking</span>
              </li>
              <li>
                <span className="text-muted-foreground">Expedited Parcel Tracking</span>
              </li>
              <li>
                <span className="text-muted-foreground">International Tracking</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} CA Post Tracker. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground text-center md:text-right max-w-lg">
              Disclaimer: This is an unofficial third-party tracking tool and is not affiliated with, endorsed by, 
              or connected to Canada Post Corporation. All trademarks belong to their respective owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
