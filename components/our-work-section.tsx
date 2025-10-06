import { Card, CardContent } from "@/components/ui/card"
import { Search, BarChart3, Megaphone, Share2, CheckCircle2 } from "lucide-react"

const workAreas = [
  {
    icon: Search,
    title: "Research",
    description:
      "Conducting rigorous, evidence-based research on population and family dynamics to inform policy and practice",
  },
  {
    icon: BarChart3,
    title: "Analysis",
    description: "Analyzing complex data to uncover insights and trends that drive sustainable solutions",
  },
  {
    icon: Megaphone,
    title: "Advocacy",
    description: "Advocating for evidence-based policies and practices that benefit communities and families",
  },
  {
    icon: Share2,
    title: "Knowledge Sharing",
    description: "Disseminating research findings and best practices to stakeholders and decision-makers",
  },
  {
    icon: CheckCircle2,
    title: "Evidence-Based Decision Making",
    description: "Supporting organizations and governments in making informed, data-driven decisions",
  },
]

const outcomes = [
  "Policy briefs informing national family planning strategies",
  "Community dialogue programs reaching 10,000+ participants",
  "Research publications in peer-reviewed journals",
]

export function OurWorkSection() {
  return (
    <section id="work" className="py-20 lg:py-32 bg-gradient-to-br from-secondary/5 via-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Our Work</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine research excellence with practical advocacy to create lasting impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {workAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <Card key={index} className="border-2 hover:border-secondary/50 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{area.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Impact Outcomes */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border-2 border-primary/20">
            <CardContent className="p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Tangible Impact</h3>
              <div className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80 leading-relaxed">{outcome}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
