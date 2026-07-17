"use client"

import Link from "next/link"
import { Package, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-xl">
          <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center">
            <Package className="w-6 h-6 text-white" />
          </div>
          <span className="hidden sm:inline text-foreground">CA Post Tracker</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-foreground hover:text-red-600 transition-colors">
            Track Package
          </Link>
          <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-red-600 transition-colors">
            Shipping Services
          </Link>
          <Link href="/faq" className="text-sm font-medium text-muted-foreground hover:text-red-600 transition-colors">
            FAQ
          </Link>
          <Link href="/privacy-policy" className="text-sm font-medium text-muted-foreground hover:text-red-600 transition-colors">
            Privacy Policy
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              href="/" 
              className="text-sm font-medium text-foreground hover:text-red-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Track Package
            </Link>
            <Link 
              href="/services" 
              className="text-sm font-medium text-muted-foreground hover:text-red-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shipping Services
            </Link>
            <Link 
              href="/faq" 
              className="text-sm font-medium text-muted-foreground hover:text-red-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="/privacy-policy" 
              className="text-sm font-medium text-muted-foreground hover:text-red-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
