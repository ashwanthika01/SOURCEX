export default function Hero() {
  return (
    <section id="top" className="relative h-screen w-full overflow-hidden flex items-center">

      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        
        <div className="max-w-2xl space-y-6">
          
          {/* ✅ Tag (fixed) */}
          <span className="inline-flex items-center rounded-full bg-white/15 backdrop-blur px-5 py-1.5 text-[13px] font-medium text-white/95">
            Electronic Component Sourcing · BOM Fulfillment
          </span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]">
            Reliable components for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">
              global production lines
            </span>
          </h1>

          {/* ✅ Description (brighter) */}
          <p className="text-white/90 text-base sm:text-lg max-w-xl">
            SourceX Technologies helps hardware teams source and deliver
            electronic components — from prototype to production.
          </p>

          {/* CTA */}
          <div className="flex gap-6 pt-2 items-center">
            
            <a
              href="#inquiry-form"
              className="rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white hover:bg-blue-400 transition shadow-lg shadow-blue-500/30"
            >
              Start a project
            </a>

            {/* ✅ View services (fixed) */}
            <a
              href="#services"
              className="text-white text-sm font-medium hover:text-blue-300 transition"
            >
              View services →
            </a>

          </div>

        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
  <a href="#next" className="group">
    <div className="animate-bounce">
      <svg
        className="w-12 h-12 text-white/90 group-hover:text-white transition"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </a>
</div>
    </section>
  );
}