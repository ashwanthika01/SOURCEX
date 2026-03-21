export default function MotionSection() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-gradient-to-r from-emerald-500/10 via-sky-500/5 to-slate-900/60 p-6 flex flex-col md:flex-row items-center gap-6">
      <div className="flex-1 space-y-3">
        <h2 className="text-lg font-semibold">
          Quality and authenticity at the core.
        </h2>
        <p className="text-sm text-slate-200">
          Each supplier goes through a rigorous onboarding process including
          audits, sample testing and continuous performance tracking.
        </p>
      </div>
      <div className="flex gap-4 text-xs text-slate-200">
        <div className="rounded-2xl bg-slate-950/50 border border-emerald-500/40 px-4 py-3">
          <div className="text-slate-400">Tests per batch</div>
          <div className="text-lg font-semibold">20+</div>
        </div>
        <div className="rounded-2xl bg-slate-950/50 border border-emerald-500/40 px-4 py-3">
          <div className="text-slate-400">Verified partners</div>
          <div className="text-lg font-semibold">150+</div>
        </div>
      </div>
    </section>
  );
}
