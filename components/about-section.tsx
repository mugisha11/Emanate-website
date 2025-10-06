export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">About EMANATE</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-foreground/80 leading-relaxed">
            <p className="text-xl text-center text-balance">
              EMANATE (Evidences Matter) is a research and advocacy institute dedicated to harnessing evidence for
              sustainable solutions to population and family challenges.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-muted/50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Our Foundation</h3>
                <p>
                  Founded in 2013 and legally registered under No 051/2014, EMANATE has established itself as a trusted
                  voice in evidence-based advocacy and decision making for population and family issues.
                </p>
              </div>

              <div className="bg-muted/50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Our Evolution</h3>
                <p>
                  Since 2021, we have expanded our reach and impact, working with communities, policymakers, and
                  organizations to create meaningful change through rigorous research and inclusive advocacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
