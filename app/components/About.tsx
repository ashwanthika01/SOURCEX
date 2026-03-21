export default function About() {
  return (
    <section
      id="about"
      className="relative grid lg:grid-cols-2 gap-16 items-center"
    >
      {/* LEFT CONTENT */}
      <div className="space-y-6">
        <span className="text-sm font-medium text-blue-600">
          About SourceX
        </span>

        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight">
          Your trusted partner for{" "}
          <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
            electronic component sourcing
          </span>
        </h2>

        <p className="text-gray-600 text-base max-w-xl">
          SourceX Technologies supports hardware teams building demanding
          products — from industrial systems to next-generation IoT devices.
        </p>

        <p className="text-gray-600 text-base max-w-xl">
          We combine deep supply-chain expertise with engineering insight to
          ensure every component meets your electrical, mechanical, and
          compliance requirements.
        </p>

        {/* TRUST POINTS */}
        <div className="grid grid-cols-2 gap-6 pt-4 text-sm">
          <div>
            <div className="text-xl font-semibold text-gray-900">20+</div>
            <div className="text-gray-500">Global suppliers</div>
          </div>
          <div>
            <div className="text-xl font-semibold text-gray-900">120+</div>
            <div className="text-gray-500">Projects supported</div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE CARDS */}
      <div className="relative">
        {/* glow effect */}
        <div className="absolute -inset-10 bg-blue-200/30 blur-3xl rounded-full" />

        <div className="relative space-y-6">
          
          {/* Mission Card */}
          <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-lg p-6 hover:shadow-xl transition">
            <div className="text-sm text-blue-600 font-medium mb-2">
              Mission
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Make component sourcing predictable, transparent, and scalable
              for fast-moving product teams.
            </p>
          </div>

          {/* Vision Card */}
          <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-lg p-6 hover:shadow-xl transition">
            <div className="text-sm text-blue-600 font-medium mb-2">
              Vision
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              A world where supply-chain constraints never slow down
              innovation and engineering progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}