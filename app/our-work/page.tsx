import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OurWorkSection } from "@/components/our-work-section"
import { ObjectivesSection } from "@/components/objectives-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Target, Users, BookOpen, Lightbulb, TrendingUp, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function OurWorkPage() {
  const workAreas = [
    {
      icon: Target,
      title: "Research & Analysis",
      description:
        "Conducting rigorous research on population dynamics, family structures, and social development to inform evidence-based policies and interventions.",
      color: "primary",
    },
    {
      icon: Users,
      title: "Community Engagement",
      description:
        "Working directly with communities to understand their needs, build capacity, and co-create solutions that are culturally appropriate and sustainable.",
      color: "secondary",
    },
    {
      icon: BookOpen,
      title: "Policy Advocacy",
      description:
        "Translating research findings into actionable policy recommendations and advocating for evidence-based decision making at all levels of governance.",
      color: "primary",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Solutions",
      description:
        "Developing innovative approaches to address complex population and family challenges through creative problem-solving and cross-sector collaboration.",
      color: "secondary",
    },
    {
      icon: TrendingUp,
      title: "Monitoring & Evaluation",
      description:
        "Implementing robust M&E frameworks to track progress, measure impact, and ensure accountability in all our programmes and interventions.",
      color: "primary",
    },
    {
      icon: Globe,
      title: "Knowledge Sharing",
      description:
        "Disseminating research findings and best practices through publications, conferences, and digital platforms to contribute to the global knowledge base.",
      color: "secondary",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Page Hero */}
      <section className="bg-primary text-white py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Work</h1>
            <p className="text-xl lg:text-2xl text-white/90 text-balance">
              Creating evidence-based solutions through research, advocacy, and community engagement
            </p>
          </div>
        </div>
      </section>

      {/* Work Areas Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">What We Do</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our work spans multiple areas, all united by a commitment to evidence-based approaches
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {workAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardContent className="p-6 lg:p-8">
                    <div className={`w-14 h-14 bg-${area.color}/10 rounded-full flex items-center justify-center mb-4`}>
                      <Icon className={`w-7 h-7 text-${area.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{area.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <ObjectivesSection />
      <OurWorkSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
