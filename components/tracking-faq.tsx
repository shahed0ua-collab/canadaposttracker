import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I track my Canada Post package?",
    answer: "Enter your Canada Post tracking number in the search box at the top of this page and click 'Track Package'. Your tracking number can be found on your shipping receipt, order confirmation email, or the package label. The number is typically 13-16 characters long."
  },
  {
    question: "What is a Canada Post tracking number?",
    answer: "A Canada Post tracking number is a unique identifier assigned to trackable shipments. It typically contains 13-16 alphanumeric characters and allows you to monitor your package's journey from sender to delivery. Different services have different tracking number formats."
  },
  {
    question: "Why is my Canada Post tracking not updating?",
    answer: "Tracking information may take 24-48 hours to appear after a package is shipped. During high-volume periods or for rural deliveries, updates may be less frequent. International shipments may also experience delays in tracking updates as packages transfer between postal systems."
  },
  {
    question: "How long does Canada Post delivery take?",
    answer: "Delivery times vary by service: Xpresspost (1-2 business days), Priority (next business day), Expedited Parcel (2-5 business days), and Regular Parcel (4-9 business days). Actual delivery times may vary based on origin, destination, and current volume."
  },
  {
    question: "Can I track Canada Post packages from the USA?",
    answer: "Yes, you can track international packages shipped to Canada from the USA and other countries. Simply enter the tracking number provided by the sender. Once the package enters Canada, Canada Post tracking will show detailed updates."
  },
  {
    question: "What does 'Item processed' mean in Canada Post tracking?",
    answer: "'Item processed' means your package has been scanned and processed at a Canada Post facility. This is a normal part of the shipping journey and indicates the package is moving through the postal network toward its destination."
  },
  {
    question: "Is this the official Canada Post tracking website?",
    answer: "No, CA Post Tracker is an unofficial third-party tracking tool. We retrieve tracking information directly from Canada Post's public tracking system to provide you with convenient, easy-to-use tracking. For official services, please visit canadapost.ca."
  },
  {
    question: "Is this tracking service free?",
    answer: "Yes, CA Post Tracker is completely free to use. You can track unlimited Canada Post packages without any registration or fees. Our mobile apps for Android and iOS are also free to download and use."
  },
  {
    question: "What Canada Post services can I track?",
    answer: "You can track all trackable Canada Post services including Xpresspost, Priority, Regular Parcel, Expedited Parcel, Tracked Packet, Small Packet with tracking, International Parcel, and more. Some basic lettermail services do not include tracking."
  },
  {
    question: "How do I find my Canada Post tracking number?",
    answer: "Your tracking number can be found on: the shipping receipt from the post office, order confirmation email from online retailers, the shipping label on the package, or your Canada Post My Account if you're a registered shipper."
  }
]

export function TrackingFAQ() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about tracking your Canada Post packages.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional SEO Content */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Track Your Canada Post Shipment Today
          </h3>
          <p className="text-muted-foreground mb-6">
            Whether you&apos;re waiting for an important document, an online order, or a gift from a loved one, 
            CA Post Tracker makes it easy to stay informed about your Canada Post deliveries. 
            Our free tracking service works on any device - desktop, tablet, or mobile.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
            <span>Canada Post Tracking</span>
            <span>•</span>
            <span>Postes Canada Suivi</span>
            <span>•</span>
            <span>Package Tracker</span>
            <span>•</span>
            <span>Parcel Tracking</span>
            <span>•</span>
            <span>Delivery Status</span>
          </div>
        </div>
      </div>
    </section>
  )
}
