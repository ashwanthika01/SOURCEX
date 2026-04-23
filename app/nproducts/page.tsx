"use client";

import { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Cpu,
  Zap,
  ShieldCheck,
  Activity,
  Layers,
  Search,
  ArrowRight,
  Star,
  Plug,
  Filter,
} from "lucide-react";
import { useRouter } from "next/navigation";

const products = [
  { title: "ARM Cortex M0+ Microcontroller", category: "ICs", type: "Critical", icon: Cpu, stock: "In Stock", rating: 4.9, description: "Main control unit for horn logic." },
  { title: "N-Channel MOSFET", category: "Power", type: "Power", icon: Zap, stock: "In Stock", rating: 4.8, description: "High-current switching device." },
  { title: "Voltage Regulator IC", category: "Power", type: "Critical", icon: Activity, stock: "In Stock", rating: 4.7, description: "Stable voltage supply." },
  { title: "TVS Diode", category: "Protection", type: "Protection", icon: ShieldCheck, stock: "In Stock", rating: 4.6, description: "Spike protection." },
  { title: "Zener Diode", category: "Protection", type: "Protection", icon: ShieldCheck, stock: "Available", rating: 4.5, description: "Voltage regulation." },
  { title: "Rectifier Diode", category: "Protection", type: "Protection", icon: ShieldCheck, stock: "Available", rating: 4.4, description: "AC to DC conversion." },
  { title: "PNP Transistor", category: "ICs", type: "Active", icon: Cpu, stock: "In Stock", rating: 4.4, description: "Signal switching/amplification." },
  { title: "Electrolytic Capacitor", category: "Passive", type: "Passive", icon: Layers, stock: "In Stock", rating: 4.3, description: "Filtering and smoothing." },
  { title: "Precision Resistor", category: "Passive", type: "Passive", icon: Layers, stock: "In Stock", rating: 4.3, description: "Voltage division." },
  { title: "DC-DC Buck Converter IC", category: "ICs", type: "Critical", icon: Cpu, stock: "In Stock", rating: 4.9, description: "Efficient voltage step-down." },
  { title: "Power Inductor", category: "Power", type: "Power", icon: Zap, stock: "Limited", rating: 4.7, description: "Energy storage element." },
  { title: "Schottky Diode", category: "Power", type: "Power", icon: Zap, stock: "In Stock", rating: 4.6, description: "Low-loss switching diode." },
  { title: "USB Output Port", category: "Connectors", type: "Critical", icon: Plug, stock: "In Stock", rating: 4.5, description: "Power delivery interface." },
  { title: "PTC Resettable Fuse", category: "Protection", type: "Protection", icon: ShieldCheck, stock: "Available", rating: 4.6, description: "Overcurrent protection." },
  { title: "Ceramic Capacitor", category: "Passive", type: "Passive", icon: Layers, stock: "In Stock", rating: 4.4, description: "Noise filtering." },
  { title: "Feedback Resistor", category: "Passive", type: "Passive", icon: Layers, stock: "In Stock", rating: 4.4, description: "Voltage feedback control." },
  { title: "General Protection Diode", category: "Protection", type: "Protection", icon: ShieldCheck, stock: "Available", rating: 4.3, description: "Reverse polarity protection." },
];

export default function ProductsPage() {
  const router = useRouter();
  const ref = useRef(null);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.2]);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === "All" ||
        p.category === selectedCategory) &&
      p.title.toLowerCase().includes(search.toLowerCase())
  );

  const goToForm = () => router.push("/#inquiry-form");

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Critical":
        return "bg-blue-100 text-blue-600";
      case "Power":
        return "bg-cyan-100 text-cyan-600";
      case "Protection":
        return "bg-emerald-100 text-emerald-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 text-gray-900 overflow-hidden"
    >
      {/* HERO */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative py-28 text-center overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500"
      >
        {/* FLOATING ORBS */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            SourceX Components
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-xl max-w-3xl mx-auto"
          >
            Precision-engineered electronic components for automotive,
            embedded systems, and industrial-grade solutions.
          </motion.p>
        </div>
      </motion.section>

      {/* MOBILE FILTER */}
      <div className="md:hidden px-6 mt-8">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow border"
        >
          <Filter size={16} />
          Filter Categories
        </button>

        {showFilters && (
          <div className="mt-3 bg-white p-4 rounded-xl shadow border">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelectedCategory(cat);
                  setShowFilters(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-lg mb-2 transition ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* MAIN */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-8">
        {/* SIDEBAR */}
        <div className="hidden md:block sticky top-24 h-fit bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/60">
          <h3 className="mb-4 font-semibold text-lg">Categories</h3>

          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setSelectedCategory(cat)}
              className={`block w-full text-left px-3 py-2 rounded-lg mb-2 transition ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PRODUCTS */}
        <div className="md:col-span-3">
          {/* SEARCH */}
          <div className="flex items-center bg-white/80 backdrop-blur-xl px-4 py-4 rounded-2xl shadow border mb-10">
            <Search className="text-gray-400 mr-2" />
            <input
              placeholder="Search premium components..."
              className="w-full outline-none bg-transparent"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, i) => {
              const Icon = product.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-lg border border-white/70 hover:shadow-2xl transition-all"
                >
                  <div className="flex justify-between mb-4">
                    <Icon className="text-blue-500" size={28} />
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${getTypeColor(
                        product.type
                      )}`}
                    >
                      {product.type}
                    </span>
                  </div>

                  <h3 className="font-semibold text-lg mb-2">
                    {product.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4">
                    {product.description}
                  </p>

                  <div className="flex justify-between text-sm mb-3">
                    <span className="text-gray-500">
                      {product.category}
                    </span>

                    <span className="flex items-center text-yellow-500">
                      <Star size={14} fill="currentColor" />
                      {product.rating}
                    </span>
                  </div>

                  <div className="text-green-600 text-xs mb-4">
                    {product.stock}
                  </div>

                  <div className="text-blue-600 flex items-center gap-2 text-sm font-medium">
                    View Specs <ArrowRight size={14} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6"
        >
          Need Bulk Components?
        </motion.h2>

        <motion.button
          onClick={goToForm}
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-2xl font-semibold shadow-xl"
        >
          Request Quote
        </motion.button>
      </section>
    </div>
  );
}