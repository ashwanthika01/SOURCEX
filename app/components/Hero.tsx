export default function Hero() {
  return (
    <section id="top" className="grid gap-10 lg:grid-cols-[3fr,2fr] items-center">
      <div className="space-y-6">
        <span className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
          Electronic Component Sourcing · BOM Fulfillment
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
          Reliable components for{" "}
          <span className="text-emerald-400">global production lines.</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-xl">
          SourceX Technologies helps hardware teams source, qualify and deliver
          electronic components on time – from prototypes to mass production.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="rounded-full bg-emerald-500 px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-950 hover:bg-emerald-400 transition-colors"
          >
            Start a project
          </a>
          <a
            href="#services"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-200 hover:border-emerald-400 hover:text-emerald-300 transition-colors"
          >
            View services
          </a>
        </div>

        <div className="flex flex-wrap gap-6 text-xs text-slate-400">
          <div>
            <div className="font-semibold text-slate-100">48h</div>
            <div>Average quote time</div>
          </div>
          <div>
            <div className="font-semibold text-slate-100">+20</div>
            <div>Global supplier networks</div>
          </div>
          <div>
            <div className="font-semibold text-slate-100">0%</div>
            <div>Counterfeit tolerance</div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-8 rounded-3xl bg-emerald-500/10 blur-3xl" />
        <div className="relative rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-6 space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>BOM Fulfillment Overview</span>
            <span>Live</span>
          </div>
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-3">
              <div className="text-slate-400">On‑time delivery</div>
              <div className="mt-1 text-lg font-semibold text-emerald-400">
                97%
              </div>
            </div>
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-3">
              <div className="text-slate-400">Cost savings</div>
              <div className="mt-1 text-lg font-semibold text-emerald-400">
                18%
              </div>
            </div>
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-3">
              <div className="text-slate-400">Projects</div>
              <div className="mt-1 text-lg font-semibold text-emerald-400">
                120+
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-400">
            We coordinate sourcing, verification and logistics so your team can
            focus on design and manufacturing.
          </p>
        </div>
      </div>
    </section>
  );
}
