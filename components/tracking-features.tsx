import { Truck, Bell, Shield, Smartphone, Globe, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Truck,
    title: "Track All Canada Post Services",
    description: "Track Xpresspost, Priority, Regular Parcel, Expedited Parcel, and international shipments all in one place."
  },
  {
    icon: Zap,
    title: "Real-Time Updates",
    description: "Get instant tracking updates directly from Canada Post. Know exactly where your package is at any moment."
  },
  {
    icon: Bell,
    title: "Delivery Notifications",
    description: "Receive alerts when your package status changes, out for delivery, or successfully delivered."
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your tracking data is never stored on our servers. We only query Canada Post directly for your results."
  },
  {
    icon: Smartphone,
    title: "Mobile App Available",
    description: "Download our free mobile app for Android and iOS to track your Canada Post packages on the go."
  },
  {
    icon: Globe,
    title: "International Tracking",
    description: "Track international shipments from and to Canada. Support for all Canada Post international services."
  }
]

export function TrackingFeatures() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Track with CA Post Tracker?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The easiest way to track your Canada Post packages with powerful features designed for your convenience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature) => (
            <Card key={feature.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Canada Post Tracking Made Simple
          </h3>
          <div className="prose prose-gray max-w-none text-muted-foreground space-y-4">
            <p>
              <strong className="text-foreground">CA Post Tracker</strong> provides the fastest and easiest way to track your Canada Post packages. 
              Whether you&apos;re tracking a Xpresspost shipment, Priority mail, Regular Parcel, or Expedited Parcel, 
              our free tracking tool gives you real-time updates on your delivery status.
            </p>
            <p>
              Simply enter your <strong className="text-foreground">Canada Post tracking number</strong> in the search box above to get instant 
              updates on your shipment. Your tracking number can be found on your shipping receipt, order confirmation 
              email, or directly on the package label. Canada Post tracking numbers are typically 13-16 characters long 
              and contain both letters and numbers.
            </p>
            <p>
              Our tracker supports all <strong className="text-foreground">Canada Post shipping services</strong> including domestic and 
              international shipments. Track packages shipped within Canada or international parcels coming from 
              or going to destinations worldwide. Get accurate estimated delivery dates and detailed shipment 
              progress information.
            </p>
          </div>
        </div>

        {/* Supported Services */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Supported Canada Post Services
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Xpresspost",
              "Priority",
              "Regular Parcel",
              "Expedited Parcel",
              "Tracked Packet",
              "Small Packet",
              "International Parcel",
              "USA Tracking",
              "Lettermail",
              "Flat Rate Box"
            ].map((service) => (
              <span 
                key={service}
                className="px-4 py-2 rounded-full bg-card border text-sm font-medium text-foreground"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
