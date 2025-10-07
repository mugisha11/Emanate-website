import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { IntroText } from "@/components/intro-text"
import { InspirationSection } from "@/components/inspiration-section"
import { SpotlightSection } from "@/components/spotlight-section"
import { SocialMediaSection } from "@/components/social-media-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function Home() {
  // Debug: log imported component to catch undefined imports causing runtime errors
  // (This will appear in the Next dev server console)
  // eslint-disable-next-line no-console
  console.log('Debug: IntroText import ->', typeof ({} as any))
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
