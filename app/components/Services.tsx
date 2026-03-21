const services = [
  {
    title: "End‑to‑end BOM fulfillment",
    description:
      "Upload your BOM and receive a complete sourcing plan including pricing, lead times and alternatives.",
  },
  {
    title: "Cost‑optimized sourcing",
    description:
      "We negotiate with a global supplier network to secure best‑in‑class pricing without compromising quality.",
  },
  {
    title: "Supply‑chain resilience",
    description:
      "Risk analysis, second‑source strategies and lifecycle monitoring to keep your lines running.",
  },
];

export default function Services() {
  return (
    <section id="services" className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold">Services</h2>
          <p className="text-sm text-slate-300">
            From prototypes to series production, SourceX supports the entire
            lifecycle of your electronics projects.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-3xl border border-slate-800 bg-slate-900/40 p-5 hover:border-emerald-400/60 hover:bg-slate-900/80 transition-colors"
          >
            <h3 className="text-sm font-semibold mb-2 group-hover:text-emerald-300">
              {service.title}
            </h3>
            <p className="text-xs text-slate-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
