import { Target, Compass } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function VisionMissionSection() {
  return (
    <section id="vision" className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Vision & Mission</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Vision Card */}
          <Card className="border-2 border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
                To become a centre of reference for population and family holistic evidence-based advocacy and decision
                making.
              </p>
            </CardContent>
          </Card>

          {/* Mission Card */}
          <Card className="border-2 border-secondary/20 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Compass className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
                EMANATE harnesses evidence for sustainable solutions to population and family problems.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
