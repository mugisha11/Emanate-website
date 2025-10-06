import { Users, TrendingUp, BookOpen, MessageSquare, BarChart, Lightbulb } from "lucide-react"

const objectives = [
  {
    icon: Users,
    title: "Community Engagement",
    description: "Engage communities in evidence-based advocacy for sustainable population and family solutions",
  },
  {
    icon: TrendingUp,
    title: "Policy Influence",
    description: "Influence policy development through rigorous research and data-driven recommendations",
  },
  {
    icon: BookOpen,
    title: "Knowledge Generation",
    description: "Generate and disseminate evidence on population and family dynamics",
  },
  {
    icon: MessageSquare,
    title: "Stakeholder Dialogue",
    description: "Facilitate dialogue between policymakers, researchers, and community members",
  },
  {
    icon: BarChart,
    title: "Capacity Building",
    description: "Build capacity for evidence-based decision making at all levels",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Solutions",
    description: "Develop innovative, sustainable solutions to population and family challenges",
  },
]

export function ObjectivesSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Key Objectives</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our strategic objectives guide our work in creating evidence-based solutions for sustainable development
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {objectives.map((objective, index) => {
            const Icon = objective.icon
            return (
              <div
                key={index}
                className="group p-6 lg:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{objective.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{objective.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
