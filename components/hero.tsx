export function Hero() {
  return (
    <section
      id="home"
      className="relative h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900"
    >
      {/* Decorative background images (positioned absolutely) */}
      <img
        src="/diverse-group-of-young-professionals-collaborating.jpg"
        alt="Group collaborating"
        aria-hidden="true"
        className="pointer-events-none select-none absolute -left-14 top-6 w-[480px] opacity-70 blur-[1px] transform -rotate-6 md:w-[420px] lg:w-[520px] sm:block"
      />

      <img
        src="/community-workshop-training.jpg"
        alt="Community workshop"
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-0 bottom-4 w-[440px] opacity-65 blur-[0.5px] transform rotate-4 lg:w-[500px] md:block"
      />

      <img
        src="/world-map-location-pins.png"
        alt="World map with location pins"
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-x-0 top-0 mx-auto w-[640px] opacity-20 mix-blend-multiply"
      />

      {/* Overlay content */}
      <div className="relative z-10 max-w-4xl text-center px-6">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-green-500 via-blue-500 to-teal-400 bg-clip-text text-transparent dark:from-green-400 dark:via-blue-400 dark:to-teal-300">
          Empowering community-led climate action
        </h1>
        <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          We work with local leaders to design, implement and scale solutions that build resilience and drive equitable transitions.
        </p>
      </div>
    </section>
  )
}
