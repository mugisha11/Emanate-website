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

        {/* Sample image grid using assets from /public */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: '/women-leadership-meeting.jpg', alt: 'Women leadership meeting' },
            { src: '/community-workshop-training.jpg', alt: 'Community workshop and training' },
            { src: '/diverse-group-of-young-professionals-collaborating.jpg', alt: 'Young professionals collaborating' },
            { src: '/research-data-analysis.jpg', alt: 'Research and data analysis' },
          ].map((img) => (
            <a
              key={img.src}
              href="#"
              className="block rounded-lg overflow-hidden shadow-lg ring-1 ring-white/6 hover:shadow-2xl transition"
              aria-label={img.alt}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 md:h-56 lg:h-64 object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
