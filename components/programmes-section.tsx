"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Heart, Users2, Scale, Cloud, Brain, GraduationCap } from "lucide-react"

const programmes = [
  {
    icon: Heart,
    title: "Women & Girls' Involvement",
    summary: "Empowering women and girls through evidence-based advocacy and inclusive participation",
    description:
      "Our Women & Girls' Involvement programme focuses on creating pathways for meaningful participation in decision-making processes. We conduct research on barriers to women's empowerment, develop advocacy strategies for gender equality, and work with communities to challenge harmful norms. Through capacity building workshops and mentorship programs, we equip women and girls with the tools and knowledge to become agents of change in their communities.",
    color: "primary",
  },
  {
    icon: Users2,
    title: "Men Engage",
    summary: "Engaging men and boys as partners in achieving gender equality and family wellbeing",
    description:
      "The Men Engage programme recognizes that achieving gender equality requires the active participation of men and boys. We facilitate dialogues that challenge traditional masculinity norms, promote positive fatherhood, and encourage men to become advocates for women's rights. Our evidence-based interventions address issues such as gender-based violence prevention, shared parenting responsibilities, and men's reproductive health.",
    color: "secondary",
  },
  {
    icon: Scale,
    title: "Equality",
    summary: "Promoting social justice and equal opportunities for all community members",
    description:
      "Our Equality programme addresses systemic inequalities through research, advocacy, and community mobilization. We examine intersecting forms of discrimination based on gender, age, socioeconomic status, and other factors. By working with policymakers and civil society organizations, we advocate for inclusive policies and practices that ensure equal access to resources, services, and opportunities for all.",
    color: "primary",
  },
  {
    icon: Cloud,
    title: "Climate Change",
    summary: "Addressing the intersection of climate change with population and family dynamics",
    description:
      "The Climate Change programme explores how environmental challenges impact population dynamics, family structures, and community resilience. We conduct research on climate-induced migration, food security, and reproductive health in the context of environmental stress. Our work informs adaptation strategies that are gender-responsive and consider the unique vulnerabilities of different population groups.",
    color: "secondary",
  },
  {
    icon: Brain,
    title: "Critical Thinking",
    summary: "Building analytical skills for evidence-based decision making in communities",
    description:
      "Our Critical Thinking programme develops the capacity of individuals and organizations to analyze information, question assumptions, and make evidence-based decisions. Through training workshops and educational materials, we promote scientific literacy, data interpretation skills, and logical reasoning. This programme empowers communities to engage critically with research findings and participate meaningfully in policy discussions.",
    color: "primary",
  },
  {
    icon: GraduationCap,
    title: "Capacity Building",
    summary: "Strengthening organizational and individual capabilities for sustainable impact",
    description:
      "The Capacity Building programme provides training and technical support to organizations and individuals working on population and family issues. We offer workshops on research methodologies, data analysis, advocacy strategies, and project management. By strengthening the skills and knowledge of our partners, we create a multiplier effect that extends our impact and ensures the sustainability of evidence-based approaches.",
    color: "secondary",
  },
]

export function ProgrammesSection() {
  const [selectedProgramme, setSelectedProgramme] = useState<(typeof programmes)[0] | null>(null)

  return (
    <section id="programmes" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Our Programmes</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive initiatives addressing critical issues in population and family development
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {programmes.map((programme, index) => {
            const Icon = programme.icon
            return (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer group"
                onClick={() => setSelectedProgramme(programme)}
              >
                <CardContent className="p-6 lg:p-8">
                  <div
                    className={`w-14 h-14 bg-${programme.color}/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-${programme.color}/20 transition-colors`}
                  >
                    <Icon className={`w-7 h-7 text-${programme.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{programme.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{programme.summary}</p>
                  <Button variant="link" className="p-0 h-auto text-primary font-medium">
                    Read more →
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Programme Detail Modal */}
        <Dialog open={!!selectedProgramme} onOpenChange={() => setSelectedProgramme(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center gap-4 mb-4">
                {selectedProgramme && (
                  <>
                    <div
                      className={`w-14 h-14 bg-${selectedProgramme.color}/10 rounded-full flex items-center justify-center flex-shrink-0`}
                    >
                      <selectedProgramme.icon className={`w-7 h-7 text-${selectedProgramme.color}`} />
                    </div>
                    <DialogTitle className="text-2xl">{selectedProgramme.title}</DialogTitle>
                  </>
                )}
              </div>
              <DialogDescription className="text-base leading-relaxed text-foreground/80 pt-4">
                {selectedProgramme?.description}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
