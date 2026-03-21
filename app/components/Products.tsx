const categories = [
  {
    name: "Passive components",
    items: ["Resistors", "Capacitors", "Inductors", "Filters"],
  },
  {
    name: "Active components",
    items: ["MCUs & MPUs", "Power ICs", "Analog ICs", "Memory"],
  },
  {
    name: "Interconnect & mechanical",
    items: ["Connectors", "Cables & harnesses", "Enclosures", "Heatsinks"],
  },
];

export default function Products() {
  return (
    <section id="products" className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold">Product focus</h2>
          <p className="text-sm text-slate-300">
            Carefully selected components from audited manufacturers and
            distributors.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="rounded-3xl border border-slate-800 bg-slate-900/40 p-5"
          >
            <h3 className="text-sm font-semibold mb-2 text-emerald-300">
              {cat.name}
            </h3>
            <ul className="space-y-1 text-xs text-slate-300">
              {cat.items.map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald-400" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
