export function Hero() {
  return (
    <section
      id="home"
      className="relative h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900"
    >
      {/* Video background (place hero-loop.webm and hero-loop.mp4 in /public) */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        // poster="/hero-poster.svg"
      >
        {/* primary source (mp4 provided) */}
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay to ensure text contrast */}
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

      {/* Overlay content */}
      <div className="relative z-10 max-w-4xl text-center px-6">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight text-white">
          Empowering community-led climate action
        </h1>
        <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto text-gray-100/90">
          We work with local leaders to design, implement and scale solutions that build resilience and drive
          equitable transitions.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <a
            href="/find-emanate"
            className="inline-flex items-center justify-center rounded-md bg-[#0a58ca] text-white px-5 py-3 text-sm font-medium shadow hover:bg-[#084fb0] transition"
          >
            Find EMANATE
          </a>

          <a
            href="/about"
            className="inline-flex items-center justify-center rounded-md border border-[#6b21a8] text-[#6b21a8] px-5 py-3 text-sm font-medium hover:bg-[#6b21a80f] transition"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  )
}
