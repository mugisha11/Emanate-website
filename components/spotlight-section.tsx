export function SpotlightSection() {
  const spotlights = [
    {
      name: "Dr. Sarah Mukasa",
      role: "Research Director",
      description: "Leading groundbreaking research on family planning and reproductive health in East Africa.",
      image: "/professional-woman-researcher.png",
    },
    {
      name: "James Nkurunziza",
      role: "Policy Advocate",
      description: "Bridging the gap between research and policy implementation for sustainable population solutions.",
      image: "/professional-businessman.png",
    },
    {
      name: "Grace Uwimana",
      role: "Community Engagement Lead",
      description: "Empowering communities through evidence-based programs and grassroots mobilization.",
      image: "/woman-community-leader.jpg",
    },
  ]

  return (
    <section className="py-16 lg:py-20 bg-zinc-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-8">
          <div className="inline-block bg-primary text-white px-6 py-3 mb-2">
            <span className="text-xl font-bold">#EMANATE</span>
            <span className="ml-2 font-semibold">SPOTLIGHT</span>
          </div>
          <p className="text-foreground/70 mt-2">
            Some of the daring researchers and advocates{" "}
            <span className="font-semibold">transforming their communities</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {spotlights.map((person, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={person.image || "/placeholder.svg"}
                  alt={person.name}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-primary text-white p-6">
                  <h3 className="text-xl font-bold mb-1">{person.name}</h3>
                  <p className="text-sm text-white/90">{person.role}</p>
                </div>
              </div>
              <div className="bg-white p-6 border border-zinc-200">
                <p className="text-sm text-foreground/70">{person.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
