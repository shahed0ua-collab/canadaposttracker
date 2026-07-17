'use client'

import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface AppStoreBadgeProps {
  className?: string
}

export function AppStoreBadge({ className = '' }: AppStoreBadgeProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <Link
        href="https://play.google.com/store/apps/details?id=com.itsz.canadaposttracker"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-black hover:bg-gray-900 text-white rounded-lg transition-colors font-medium text-sm"
        aria-label="Download Canada Post Tracker on Google Play Store"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 13.5h8v8.5H3z M12 2 L4 12h8V2z M13 13.5h8v8.5h-8z M11 2h8L11 12z" />
        </svg>
        <div className="text-left">
          <div className="text-xs opacity-75">Get it on</div>
          <div className="text-sm font-semibold">Google Play</div>
        </div>
        <ExternalLink className="w-4 h-4 ml-1 opacity-75" />
      </Link>

      <Link
        href="https://play.google.com/store/apps/details?id=com.itsz.canadaposttracker"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-br from-gray-800 to-black hover:from-gray-900 hover:to-gray-950 text-white rounded-lg transition-colors font-medium text-sm border border-gray-700"
        aria-label="Download Canada Post Tracker mobile app"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2z" />
        </svg>
        <div className="text-left">
          <div className="text-xs opacity-75">Download the</div>
          <div className="text-sm font-semibold">Mobile App</div>
        </div>
        <ExternalLink className="w-4 h-4 ml-1 opacity-75" />
      </Link>
    </div>
  )
}
