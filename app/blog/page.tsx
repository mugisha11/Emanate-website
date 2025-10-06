import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "The Role of Evidence in Shaping Population Policies",
      excerpt:
        "Exploring how rigorous research and data analysis can inform more effective and equitable population policies in Rwanda and beyond.",
      date: "March 15, 2024",
      author: "Dr. Sarah Mukamana",
      category: "RESEARCH",
      image: "/research-data-analysis.jpg",
    },
    {
      title: "Engaging Men in Gender Equality: Lessons from the Field",
      excerpt:
        "Insights from our Men Engage programme on transforming masculinity norms and promoting shared responsibility in families.",
      date: "March 10, 2024",
      author: "Jean-Paul Niyonzima",
      category: "PROGRAMMES",
      image: "/men-community-discussion.jpg",
    },
    {
      title: "Climate Change and Family Planning: An Interconnected Challenge",
      excerpt:
        "Understanding the complex relationships between environmental stress, migration patterns, and reproductive health decisions.",
      date: "March 5, 2024",
      author: "Dr. Grace Uwimana",
      category: "RESEARCH",
      image: "/climate-change-community.jpg",
    },
    {
      title: "Building Critical Thinking Skills in Communities",
      excerpt:
        "How our capacity building programmes are empowering individuals to engage with evidence and make informed decisions.",
      date: "February 28, 2024",
      author: "Emmanuel Habimana",
      category: "CAPACITY BUILDING",
      image: "/community-workshop-training.jpg",
    },
    {
      title: "Women's Leadership in Population Advocacy",
      excerpt: "Celebrating the achievements of women leaders in our programmes and their impact on policy change.",
      date: "February 20, 2024",
      author: "Dr. Sarah Mukamana",
      category: "ADVOCACY",
      image: "/women-leadership-meeting.jpg",
    },
    {
      title: "Measuring Impact: Our M&E Framework",
      excerpt:
        "A deep dive into how we track progress and ensure accountability in all our programmes and interventions.",
      date: "February 15, 2024",
      author: "Patrick Mugisha",
      category: "RESEARCH",
      image: "/data-monitoring-evaluation.jpg",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Page Hero */}
      <section className="bg-primary text-white py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-xl lg:text-2xl text-white/90 text-balance">
              Latest research findings, programme updates, and thought leadership on population and family issues
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-all hover:shadow-lg overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded">{post.category}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto text-primary font-medium group">
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2 bg-transparent">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </main>
  )
}
