export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 rounded-[40px] overflow-hidden"
    >
      {/* 🌈 Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100" />

      {/* Glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center space-y-10">
        
        {/* Heading */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            Ready to start your next build?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Send us your BOM or a quick project overview — our team will get
            back to you within 48 hours with clear next steps.
          </p>
        </div>

        {/* 💎 Glass Form */}
        <div className="bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl rounded-3xl p-8 text-left max-w-3xl mx-auto">
          <form className="space-y-4">
            
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500"
                placeholder="Your name"
                required
              />
              <input
                className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500"
                placeholder="Company (optional)"
              />
            </div>

            <input
              type="email"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500"
              placeholder="Work email"
              required
            />

            <textarea
              rows={4}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500"
              placeholder="Tell us about your project or paste a BOM link..."
            />

            <button
              type="submit"
              className="w-full rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-500 transition shadow-lg shadow-blue-200"
            >
              Send Inquiry
            </button>
          </form>
        </div>

        {/* 📞 Contact Info */}
        <div className="text-sm text-gray-500 space-y-1">
          <p className="font-medium text-gray-700">SourceX Technologies</p>
          <p>Global electronic component sourcing partner</p>
          <p className="text-xs text-gray-400">
            info@sourcex-tech.com · +91-00000-00000
          </p>
        </div>
      </div>
    </section>
  );
}