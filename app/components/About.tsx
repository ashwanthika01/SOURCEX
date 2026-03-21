export default function About() {
  return (
    <section id="about" className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">About SourceX</h2>
        <p className="text-sm text-slate-300">
          SourceX Technologies is a sourcing partner for hardware teams building
          demanding products – from industrial controllers to IoT devices.
        </p>
        <p className="text-sm text-slate-300">
          We combine supply‑chain expertise with engineering insight to match
          every component to your electrical, mechanical and compliance
          requirements.
        </p>
      </div>
      <div className="space-y-3 text-xs text-slate-300">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-4">
          <div className="text-slate-400 mb-1">Mission</div>
          <p>
            Make component sourcing predictable, transparent and scalable for
            fast‑moving product teams.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-4">
          <div className="text-slate-400 mb-1">Vision</div>
          <p>
            A world where supply‑chain constraints never block engineering
            progress.
          </p>
        </div>
      </div>
    </section>
  );
}
