export default function CTA() {
  return (
    <section
      id="contact"
      className="grid gap-8 lg:grid-cols-[3fr,2fr] items-start"
    >
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Ready to start your next build?
        </h2>
        <p className="text-sm text-slate-300">
          Send us your BOM or a short project description. We will get back
          within 48 hours with next steps.
        </p>
        <form className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              className="rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs outline-none focus:border-emerald-400"
              placeholder="Name"
              required
            />
            <input
              className="rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs outline-none focus:border-emerald-400"
              placeholder="Company"
            />
          </div>
          <input
            type="email"
            className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs outline-none focus:border-emerald-400"
            placeholder="Work email"
            required
          />
          <textarea
            className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs outline-none focus:border-emerald-400"
            rows={4}
            placeholder="Tell us about your project or paste a BOM link."
          />
          <button
            type="submit"
            className="rounded-full bg-emerald-500 px-5 py-2.5 text-xs font-medium text-slate-950 hover:bg-emerald-400 transition-colors"
          >
            Send inquiry
          </button>
        </form>
      </div>

      <div className="space-y-2 text-sm text-slate-300">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-4">
          <div className="text-slate-400 text-xs mb-1">Contact</div>
          <p>SourceX Technologies</p>
          <p>Global electronic component sourcing partner.</p>
          <p className="mt-2 text-xs text-slate-400">
            info@sourcex-tech.com · +91‑00000‑00000
          </p>
        </div>
      </div>
    </section>
  );
}
