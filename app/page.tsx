import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { IntroText } from "@/components/intro-text"
import { InspirationSection } from "@/components/inspiration-section"
import { SpotlightSection } from "@/components/spotlight-section"
import { SocialMediaSection } from "@/components/social-media-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <IntroText />
      <InspirationSection />
      <SpotlightSection />
      <SocialMediaSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
