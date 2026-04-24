"use client";

import { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
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
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";

const products = [
  {
    title: "ARM Cortex M0+ Microcontroller",
    category: "ICs",
    type: "Critical",
    icon: Cpu,
    stock: "In Stock",
    rating: 4.9,
    description: "Main control unit for horn logic.",
    specs: [
  "32-bit ARM Cortex-M0+",
  "Clock Speed: Up to 48 MHz",
  "Flash: Up to 256KB",
  "Low Power Consumption",
  "Interfaces: UART / SPI / I2C",
  "Operating Voltage: 1.8V – 3.6V"
],
    image: "/components/mcu.png"
  },

  {
    title: "N-Channel MOSFET",
    category: "Power",
    type: "Power",
    icon: Zap,
    stock: "In Stock",
    rating: 4.8,
    description: "High-current switching device.",
    specs: [
  "N-Channel Enhancement Mode",
  "Vds: 30V – 100V",
  "Current: Up to 60A",
  "Low Rds(on)",
  "Fast Switching",
  "Package: TO-220 / SMD"
],
    image: "/components/mosfet.jpg"
  },

  {
    title: "Voltage Regulator IC",
    category: "Power",
    type: "Critical",
    icon: Activity,
    stock: "In Stock",
    rating: 4.7,
    description: "Stable voltage supply.",
    specs: [
  "Type: Linear / LDO",
  "Input: 6V – 20V",
  "Output: 5V / Adjustable",
  "Current: Up to 1A",
  "Thermal Protection",
  "Low Noise Output"
],
    image: "/components/regulator.webp"
  },

  {
    title: "TVS Diode",
    category: "Protection",
    type: "Protection",
    icon: ShieldCheck,
    stock: "In Stock",
    rating: 4.6,
    description: "Spike Protection",
    specs: [
      "Working Voltage: 5V – 48V",
      "Peak Power: up to 600W",
      "Clamping Voltage: < 77V",
      "Response Time: < 1ps",
      "ESD Protection: IEC compliant",
      "Package: SMB / DO-214"
    ],
    image: "/components/tvs-diode.jpg"
  },

  {
    title: "Zener Diode",
    category: "Protection",
    type: "Protection",
    icon: ShieldCheck,
    stock: "Available",
    rating: 4.5,
    description: "Voltage regulation.",
    specs: [
      "Zener Voltage: 3.3V – 75V",
      "Power Rating: 500mW – 5W",
      "Tolerance: ±2% to ±5%",
      "Low leakage current",
      "Package: DO-41 / SMD"
    ],
    image: "/components/zener.jpg"
  },

  {
    title: "Rectifier Diode",
    category: "Protection",
    type: "Power",
    icon: Zap,
    stock: "Available",
    rating: 4.4,
    description: "AC to DC conversion.",
    specs: [
      "Reverse Voltage: 50V – 1000V",
      "Forward Current: 1A – 10A",
      "Forward Drop: ~0.7V",
      "Surge Current: up to 200A",
      "Package: DO-41"
    ],
    image: "/components/rectifier-diode.webp"
  },

  {
    title: "PNP Transistor",
    category: "ICs",
    type: "Active",
    icon: Zap,
    stock: "In Stock",
    rating: 4.4,
    description: "Signal switching/amplification.",
    specs: [
      "Type: PNP BJT",
      "Voltage: 40V",
      "Current: 600mA",
      "Gain: 100 – 300",
      "Package: TO-92",
      "Operating Temp: -55°C to +150°C"
    ],
    image: "/components/pnp-transistor.avif"
  },

  {
    title: "Electrolytic Capacitor",
    category: "Passive",
    type: "Passive",
    icon: Layers,
    stock: "In Stock",
    rating: 4.3,
    description: "Filtering and smoothing.",
    specs: [
      "Capacitance: 10µF – 1000µF",
      "Voltage: 6.3V – 50V",
      "Polarized",
      "High ripple handling",
      "Lifetime: 2000+ hrs",
      "Package: Radial / SMD"
    ],
    image: "/components/electrolytic-capacitor.jpg"
  },

  {
    title: "Precision Resistor",
    category: "Passive",
    type: "Passive",
    icon: Layers,
    stock: "In Stock",
    rating: 4.3,
    description: "Voltage division.",
    specs: [
      "Resistance: 1Ω – 10MΩ",
      "Tolerance: ±0.1%",
      "Low noise",
      "High stability",
      "Package: 0603 / 0805"
    ],
    image: "/components/precision-resistor.jpg"
  },

  {
    title: "DC-DC Buck Converter IC",
    category: "ICs",
    type: "Critical",
    icon: Cpu,
    stock: "In Stock",
    rating: 4.9,
    description: "Efficient voltage step-down.",
    specs: [
      "Input: 4.5V – 40V",
      "Output: 0.8V – 35V",
      "Current: up to 3A",
      "Efficiency: up to 95%",
      "Protection: Thermal & Overcurrent",
      "Package: SOIC / QFN"
    ],
    image: "/components/buck-converter.png"
  },

  {
    title: "Power Inductor",
    category: "Power",
    type: "Power",
    icon: Zap,
    stock: "Limited",
    rating: 4.7,
    description: "Energy storage element.",
    specs: [
      "Inductance: 1µH – 1000µH",
      "Current: up to 10A",
      "Low DCR",
      "Shielded design",
      "Package: SMD"
    ],
    image: "/components/power-inductor.webp"
  },

  {
    title: "Schottky Diode",
    category: "Power",
    type: "Power",
    icon: Zap,
    stock: "In Stock",
    rating: 4.6,
    description: "Low-loss switching diode.",
    specs: [
      "Voltage: 20V – 100V",
      "Current: 1A – 10A",
      "Low forward drop (0.2V)",
      "Ultra-fast switching",
      "Package: SMA / SMB"
    ],
    image: "/components/schottky-diode.webp"
  },

  {
    title: "USB Output Port",
    category: "Connectors",
    type: "Critical",
    icon: Plug,
    stock: "In Stock",
    rating: 4.5,
    description: "Power delivery interface.",
    specs: [
      "Type: USB-A / USB-C",
      "Voltage: 5V – 20V",
      "Current: up to 5A",
      "PD Support",
      "Durability: 10,000 cycles"
    ],
    image: "/components/usb-port.avif"
  },

  {
    title: "PTC Resettable Fuse",
    category: "Protection",
    type: "Protection",
    icon: ShieldCheck,
    stock: "Available",
    rating: 4.6,
    description: "Overcurrent protection.",
    specs: [
      "Hold Current: 0.1A – 5A",
      "Trip Current: 0.2A – 10A",
      "Auto reset",
      "Short circuit protection",
      "Package: SMD"
    ],
    image: "/components/ptc-fuse.jpg"
  },

  {
    title: "Ceramic Capacitor",
    category: "Passive",
    type: "Passive",
    icon: Layers,
    stock: "In Stock",
    rating: 4.4,
    description: "Noise filtering.",
    specs: [
      "Capacitance: 1pF – 100µF",
      "Voltage: up to 100V",
      "Low ESR",
      "High-frequency performance",
      "Package: 0402 / 0603"
    ],
    image: "/components/ceramic-capacitor.webp"
  },

  {
    title: "Feedback Resistor",
    category: "Passive",
    type: "Passive",
    icon: Layers,
    stock: "In Stock",
    rating: 4.4,
    description: "Voltage feedback control.",
    specs: [
      "Resistance: 10Ω – 10MΩ",
      "Tolerance: ±0.1%",
      "Low drift",
      "High stability",
      "Package: 0603 / 0805"
    ],
    image: "/components/feedback-resistor.jpg"
  },

  {
    title: "General Protection Diode",
    category: "Protection",
    type: "Protection",
    icon: ShieldCheck,
    stock: "Available",
    rating: 4.3,
    description: "Reverse polarity protection.",
    specs: [
      "Voltage: 50V – 1000V",
      "Current: up to 3A",
      "Fast recovery",
      "Low leakage",
      "Package: DO-41 / SMD"
    ],
    image: "/components/general-protection.webp"
  }
];

export default function ProductsPage() {
  const router = useRouter();
  const ref = useRef(null);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  // 🔥 NEW STATE FOR MODAL
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.2]);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === "All" || p.category === selectedCategory) &&
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
        className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white py-24"
      >
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Our Products
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
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-lg border border-white/70 hover:shadow-2xl transition-all"
                >
                  <div className="flex justify-between mb-4">
                    <Icon className="text-blue-500" size={28} />
                    <span className={`text-xs px-3 py-1 rounded-full ${getTypeColor(product.type)}`}>
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

                  {/* 🔥 CLICK HANDLER */}
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="text-blue-600 flex items-center gap-2 text-sm font-medium"
                  >
                    View Specs <ArrowRight size={14} />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 🔥 MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative"
            >
              {/* CLOSE */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                <X />
              </button>

              <h2 className="text-2xl font-bold mb-4">
                {selectedProduct.title}
              </h2>

              {/* IMAGE */}
              <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="w-full h-40 object-contain rounded-xl mb-4 bg-gray-100"
              />

              {/* SPECS */}
              <ul className="space-y-2 text-sm text-gray-700">
                {selectedProduct.specs?.map((spec: string, i: number) => (
                  <li key={i}>• {spec}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white py-24 text-center">
        <motion.h2 className="text-4xl font-bold mb-6">
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