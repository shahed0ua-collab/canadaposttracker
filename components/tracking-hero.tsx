"use client"

import { useState } from "react"
import { Search, Package, Truck, MapPin, Clock, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AppStoreBadge } from "./app-store-badge"

interface TrackingEvent {
  date: string
  time: string
  location: string
  description: string
  status: "delivered" | "in-transit" | "processing" | "alert"
}

interface TrackingResult {
  trackingNumber: string
  status: string
  statusType: "delivered" | "in-transit" | "processing" | "alert"
  estimatedDelivery: string
  origin: string
  destination: string
  service: string
  events: TrackingEvent[]
}

export function TrackingHero() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<TrackingResult | null>(null)
  const [error, setError] = useState("")

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!trackingNumber.trim()) {
      setError("Please enter a tracking number")
      return
    }

    setIsLoading(true)
    setError("")
    setResult(null)

    // Simulate API call - In production, this would call the actual Canada Post API
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Demo result for demonstration purposes
    if (trackingNumber.length >= 10) {
      setResult({
        trackingNumber: trackingNumber.toUpperCase(),
        status: "In Transit",
        statusType: "in-transit",
        estimatedDelivery: "May 15, 2026",
        origin: "Toronto, ON",
        destination: "Vancouver, BC",
        service: "Xpresspost",
        events: [
          {
            date: "May 13, 2026",
            time: "10:45 AM",
            location: "Calgary, AB",
            description: "Package arrived at facility",
            status: "in-transit"
          },
          {
            date: "May 12, 2026",
            time: "8:30 PM",
            location: "Winnipeg, MB",
            description: "Package departed facility",
            status: "in-transit"
          },
          {
            date: "May 12, 2026",
            time: "2:15 PM",
            location: "Winnipeg, MB",
            description: "Package arrived at facility",
            status: "in-transit"
          },
          {
            date: "May 11, 2026",
            time: "6:00 PM",
            location: "Toronto, ON",
            description: "Package shipped",
            status: "processing"
          },
          {
            date: "May 11, 2026",
            time: "4:30 PM",
            location: "Toronto, ON",
            description: "Shipping label created",
            status: "processing"
          }
        ]
      })
    } else {
      setError("Invalid tracking number format. Please check and try again.")
    }

    setIsLoading(false)
  }

  const getStatusIcon = (status: TrackingEvent["status"]) => {
    switch (status) {
      case "delivered":
        return <CheckCircle2 className="w-5 h-5 text-green-600" />
      case "in-transit":
        return <Truck className="w-5 h-5 text-blue-600" />
      case "processing":
        return <Package className="w-5 h-5 text-amber-600" />
      case "alert":
        return <AlertCircle className="w-5 h-5 text-red-600" />
    }
  }

  const getStatusBadge = (statusType: TrackingResult["statusType"]) => {
    switch (statusType) {
      case "delivered":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Delivered</Badge>
      case "in-transit":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">In Transit</Badge>
      case "processing":
        return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Processing</Badge>
      case "alert":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Action Required</Badge>
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-red-50 to-background py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-100 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-semibold">
            ✨ Now Available on Mobile
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Track Your <span className="text-red-600">Canada Post</span> Package
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty mb-8">
            Get real-time updates on your Canada Post shipment. Download our mobile app or use our web tracker to follow your Xpresspost, Priority, Regular Parcel, and more.
          </p>
          
          {/* App Download Section */}
          <div className="flex flex-col items-center justify-center gap-6 mb-12">
            <p className="text-sm font-medium text-muted-foreground">Download the official app for faster tracking</p>
            <AppStoreBadge className="justify-center" />
          </div>
        </div>

        {/* Search Form */}
        <Card className="max-w-2xl mx-auto shadow-lg border-0 bg-card">
          <CardContent className="p-6">
            <form onSubmit={handleTrack} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter tracking number (e.g., 1234567890123456)"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="pl-10 h-12 text-base"
                    aria-label="Canada Post tracking number"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="h-12 px-8 bg-red-600 hover:bg-red-700 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Tracking...
                    </>
                  ) : (
                    "Track Package"
                  )}
                </Button>
              </div>
              
              {error && (
                <p className="text-red-600 text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </p>
              )}

              <p className="text-xs text-muted-foreground text-center">
                Your tracking number can be found on your shipping receipt, confirmation email, or the package label.
              </p>
            </form>
          </CardContent>
        </Card>

        {/* Tracking Result */}
        {result && (
          <div className="max-w-3xl mx-auto mt-8 space-y-6">
            {/* Status Overview */}
            <Card className="shadow-lg border-0">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Tracking Number</p>
                    <CardTitle className="text-xl font-mono">{result.trackingNumber}</CardTitle>
                  </div>
                  {getStatusBadge(result.statusType)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="space-y-1">
                    <p className="text-muted-foreground flex items-center gap-1">
                      <Clock className="w-4 h-4" /> Est. Delivery
                    </p>
                    <p className="font-medium">{result.estimatedDelivery}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> From
                    </p>
                    <p className="font-medium">{result.origin}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> To
                    </p>
                    <p className="font-medium">{result.destination}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground flex items-center gap-1">
                      <Package className="w-4 h-4" /> Service
                    </p>
                    <p className="font-medium">{result.service}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tracking Timeline */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-lg">Shipment Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {result.events.map((event, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted">
                          {getStatusIcon(event.status)}
                        </div>
                        {index < result.events.length - 1 && (
                          <div className="w-0.5 h-full bg-border flex-1 mt-2" />
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <p className="font-medium text-foreground">{event.description}</p>
                        <p className="text-sm text-muted-foreground">{event.location}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {event.date} at {event.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Quick Stats */}
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-lg bg-card border">
            <p className="text-2xl md:text-3xl font-bold text-red-600">1M+</p>
            <p className="text-sm text-muted-foreground">Packages Tracked</p>
          </div>
          <div className="p-4 rounded-lg bg-card border">
            <p className="text-2xl md:text-3xl font-bold text-red-600">99.9%</p>
            <p className="text-sm text-muted-foreground">Uptime</p>
          </div>
          <div className="p-4 rounded-lg bg-card border">
            <p className="text-2xl md:text-3xl font-bold text-red-600">Real-time</p>
            <p className="text-sm text-muted-foreground">Updates</p>
          </div>
          <div className="p-4 rounded-lg bg-card border">
            <p className="text-2xl md:text-3xl font-bold text-red-600">100%</p>
            <p className="text-sm text-muted-foreground">Free to Use</p>
          </div>
        </div>
      </div>
    </section>
  )
}
