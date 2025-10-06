import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"
import { VisionMissionSection } from "@/components/vision-mission-section"
import { TeamSection } from "@/components/team-section"
import { NewsletterSection } from "@/components/newsletter-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Page Hero */}
      <section className="bg-primary text-white py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">About EMANATE</h1>
            <p className="text-xl lg:text-2xl text-white/90 text-balance">
              Harnessing evidence for sustainable solutions to population and family challenges
            </p>
          </div>
        </div>
      </section>

      <AboutSection />
      <VisionMissionSection />
      <TeamSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
