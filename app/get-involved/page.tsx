import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HandHeart, Users, Briefcase, GraduationCap, DollarSign, Share2 } from "lucide-react"

export default function GetInvolvedPage() {
  const opportunities = [
    {
      icon: HandHeart,
      title: "Volunteer",
      description:
        "Join our team of volunteers and contribute your skills to support our research and community programmes.",
      action: "Learn More",
    },
    {
      icon: Users,
      title: "Partner With Us",
      description: "Collaborate with EMANATE on research projects, advocacy campaigns, or community interventions.",
      action: "Explore Partnerships",
    },
    {
      icon: Briefcase,
      title: "Career Opportunities",
      description: "Join our professional team and build a career in evidence-based research and advocacy.",
      action: "View Openings",
    },
    {
      icon: GraduationCap,
      title: "Internships",
      description:
        "Gain hands-on experience in research, advocacy, and programme implementation through our internship programme.",
      action: "Apply Now",
    },
    {
      icon: DollarSign,
      title: "Support Our Work",
      description: "Make a financial contribution to support our research and community programmes.",
      action: "Donate",
    },
    {
      icon: Share2,
      title: "Spread the Word",
      description: "Help amplify our message by sharing our research findings and advocacy campaigns on social media.",
      action: "Follow Us",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Page Hero */}
      <section className="bg-primary text-white py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Get Involved</h1>
            <p className="text-xl lg:text-2xl text-white/90 text-balance">
              Join us in creating evidence-based solutions for population and family challenges
            </p>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Ways to Get Involved</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              There are many ways you can contribute to our mission and make a difference
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20">
            {opportunities.map((opportunity, index) => {
              const Icon = opportunity.icon
              return (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardContent className="p-6 lg:p-8">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{opportunity.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{opportunity.description}</p>
                    <Button variant="link" className="p-0 h-auto text-primary font-medium">
                      {opportunity.action} →
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <ContactSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
