import Link from "next/link"

export function InspirationSection() {
  const articles = [
    {
      title: "Evidence-Based Policy Making: Equipping Leaders with Research Skills",
      description:
        "Empowering policymakers and community leaders with the tools to make informed decisions based on solid evidence.",
    },
    {
      title: "Women & Girls' Involvement: Creating Pathways to Leadership",
      description:
        "Supporting women and girls to take active roles in decision-making processes that affect their lives and communities.",
    },
    {
      title: "Climate Change & Population: Understanding the Connections",
      description:
        "Exploring the critical links between population dynamics and climate change for sustainable solutions.",
    },
  ]

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold bg-accent text-white px-6 py-2">INSPIRATION</h2>
          <p className="text-foreground/70">
            Get inspired by daring <span className="font-semibold">social innovators.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Link
              key={index}
              href="#"
              className="group block bg-primary text-white p-6 lg:p-8 hover:opacity-90 transition-opacity"
            >
              <div className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 mb-4">ARTICLE</div>
              <h3 className="text-lg font-bold mb-3 group-hover:underline">{article.title}</h3>
              <p className="text-sm text-white/90">{article.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
