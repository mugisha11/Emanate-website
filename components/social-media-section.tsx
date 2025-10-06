export function SocialMediaSection() {
  return (
    <section className="py-16 lg:py-20 bg-zinc-900 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-8">
          <div className="inline-block bg-primary text-white px-6 py-3 mb-2">
            <span className="text-xl font-bold">@emanateresearch</span>
          </div>
          <p className="text-white/70 mt-2">
            Follow us on <span className="font-semibold">social media</span>
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-zinc-800 aspect-square flex items-center justify-center">
              <p className="text-zinc-600 text-sm">Social Media Post {i}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
