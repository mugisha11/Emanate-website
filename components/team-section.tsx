import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const teamMembers = [
  {
    name: "Dr. Emmanuel Nshimiyimana",
    role: "Executive Director",
    expertise: "Population Research & Policy",
    initials: "EN",
  },
  {
    name: "Dr. Marie Uwimana",
    role: "Research Director",
    expertise: "Gender & Family Studies",
    initials: "MU",
  },
  {
    name: "Jean Paul Habimana",
    role: "Advocacy Coordinator",
    expertise: "Community Engagement",
    initials: "JH",
  },
  {
    name: "Grace Mukamana",
    role: "Programme Manager",
    expertise: "Women's Empowerment",
    initials: "GM",
  },
  {
    name: "David Mugisha",
    role: "Data Analyst",
    expertise: "Statistical Analysis",
    initials: "DM",
  },
  {
    name: "Sarah Ingabire",
    role: "Communications Officer",
    expertise: "Knowledge Dissemination",
    initials: "SI",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Our Team</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated professionals driving evidence-based change
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary">
                  <AvatarFallback className="text-white text-xl font-semibold">{member.initials}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg text-foreground mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-primary mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.expertise}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
