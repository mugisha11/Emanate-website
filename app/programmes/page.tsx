import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProgrammesSection } from "@/components/programmes-section"
import { NewsletterSection } from "@/components/newsletter-section"

export default function ProgrammesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Page Hero */}
      <section className="bg-primary text-white py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Programmes</h1>
            <p className="text-xl lg:text-2xl text-white/90 text-balance">
              Comprehensive initiatives addressing critical issues in population and family development
            </p>
          </div>
        </div>
      </section>

      <ProgrammesSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
