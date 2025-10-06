import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Building } from "lucide-react"

export default function FindEmanatePage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Page Hero */}
      <section className="bg-primary text-white py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Find EMANATE</h1>
            <p className="text-xl lg:text-2xl text-white/90 text-balance">
              Visit us or get in touch to learn more about our work
            </p>
          </div>
        </div>
      </section>

      {/* Location Information */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Contact Cards */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>

                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Office Location</h3>
                        <p className="text-sm text-muted-foreground">
                          Kigali, Rwanda
                          <br />
                          (Detailed address available upon request)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Email</h3>
                        <a href="mailto:info@emanate.org" className="text-sm text-primary hover:underline">
                          info@emanate.org
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                        <p className="text-sm text-muted-foreground">Available upon request</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Office Hours</h3>
                        <p className="text-sm text-muted-foreground">
                          Monday - Friday: 8:00 AM - 5:00 PM
                          <br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Registration</h3>
                        <p className="text-sm text-muted-foreground">
                          Registered: No 051/2014
                          <br />
                          Founded: 2013
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map Placeholder */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Our Location</h2>
                <div className="bg-muted rounded-lg overflow-hidden border-2 h-[600px] flex items-center justify-center">
                  <img
                    src="/rwanda-map-kigali.jpg"
                    alt="Map of Kigali, Rwanda"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Located in Kigali, the capital city of Rwanda
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </main>
  )
}
