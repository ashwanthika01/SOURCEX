"use client";

import { Search, X, Star, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Cpu, Zap, ShieldCheck, Activity, Layers, Plug } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ============================================================
// PRODUCTS DATA — copied exactly from your /nproducts page
// ============================================================
const products = [
  {
    title: "ARM Cortex M0+ Microcontroller",
    category: "ICs",
    type: "Critical",
    icon: Cpu,
    stock: "In Stock",
    rating: 4.9,
    description: "Main control unit for horn logic.",
    specs: ["32-bit ARM Cortex-M0+", "Clock Speed: Up to 48 MHz", "Flash: Up to 256KB", "Low Power Consumption", "Interfaces: UART / SPI / I2C", "Operating Voltage: 1.8V – 3.6V"],
    image: "/components/mcu.png",
  },
  {
    title: "N-Channel MOSFET",
    category: "Power",
    type: "Power",
    icon: Zap,
    stock: "In Stock",
    rating: 4.8,
    description: "High-current switching device.",
    specs: ["N-Channel Enhancement Mode", "Vds: 30V – 100V", "Current: Up to 60A", "Low Rds(on)", "Fast Switching", "Package: TO-220 / SMD"],
    image: "/components/mosfet.jpg",
  },
  {
    title: "Voltage Regulator IC",
    category: "Power",
    type: "Critical",
    icon: Activity,
    stock: "In Stock",
    rating: 4.7,
    description: "Stable voltage supply.",
    specs: ["Type: Linear / LDO", "Input: 6V – 20V", "Output: 5V / Adjustable", "Current: Up to 1A", "Thermal Protection", "Low Noise Output"],
    image: "/components/regulator.webp",
  },
  {
    title: "TVS Diode",
    category: "Protection",
    type: "Protection",
    icon: ShieldCheck,
    stock: "In Stock",
    rating: 4.6,
    description: "Spike Protection",
    specs: ["Working Voltage: 5V – 48V", "Peak Power: up to 600W", "Clamping Voltage: < 77V", "Response Time: < 1ps", "ESD Protection: IEC compliant", "Package: SMB / DO-214"],
    image: "/components/tvs-diode.jpg",
  },
  {
    title: "Zener Diode",
    category: "Protection",
    type: "Protection",
    icon: ShieldCheck,
    stock: "Available",
    rating: 4.5,
    description: "Voltage regulation.",
    specs: ["Zener Voltage: 3.3V – 75V", "Power Rating: 500mW – 5W", "Tolerance: ±2% to ±5%", "Low leakage current", "Package: DO-41 / SMD"],
    image: "/components/zener.jpg",
  },
  {
    title: "Rectifier Diode",
    category: "Protection",
    type: "Power",
    icon: Zap,
    stock: "Available",
    rating: 4.4,
    description: "AC to DC conversion.",
    specs: ["Reverse Voltage: 50V – 1000V", "Forward Current: 1A – 10A", "Forward Drop: ~0.7V", "Surge Current: up to 200A", "Package: DO-41"],
    image: "/components/rectifier-diode.webp",
  },
  {
    title: "PNP Transistor",
    category: "ICs",
    type: "Active",
    icon: Zap,
    stock: "In Stock",
    rating: 4.4,
    description: "Signal switching/amplification.",
    specs: ["Type: PNP BJT", "Voltage: 40V", "Current: 600mA", "Gain: 100 – 300", "Package: TO-92", "Operating Temp: -55°C to +150°C"],
    image: "/components/pnp-transistor.avif",
  },
  {
    title: "Electrolytic Capacitor",
    category: "Passive",
    type: "Passive",
    icon: Layers,
    stock: "In Stock",
    rating: 4.3,
    description: "Filtering and smoothing.",
    specs: ["Capacitance: 10µF – 1000µF", "Voltage: 6.3V – 50V", "Polarized", "High ripple handling", "Lifetime: 2000+ hrs", "Package: Radial / SMD"],
    image: "/components/electrolytic-capacitor.jpg",
  },
  {
    title: "Precision Resistor",
    category: "Passive",
    type: "Passive",
    icon: Layers,
    stock: "In Stock",
    rating: 4.3,
    description: "Voltage division.",
    specs: ["Resistance: 1Ω – 10MΩ", "Tolerance: ±0.1%", "Low noise", "High stability", "Package: 0603 / 0805"],
    image: "/components/precision-resistor.jpg",
  },
  {
    title: "DC-DC Buck Converter IC",
    category: "ICs",
    type: "Critical",
    icon: Cpu,
    stock: "In Stock",
    rating: 4.9,
    description: "Efficient voltage step-down.",
    specs: ["Input: 4.5V – 40V", "Output: 0.8V – 35V", "Current: up to 3A", "Efficiency: up to 95%", "Protection: Thermal & Overcurrent", "Package: SOIC / QFN"],
    image: "/components/buck-converter.png",
  },
  {
    title: "Power Inductor",
    category: "Power",
    type: "Power",
    icon: Zap,
    stock: "Limited",
    rating: 4.7,
    description: "Energy storage element.",
    specs: ["Inductance: 1µH – 1000µH", "Current: up to 10A", "Low DCR", "Shielded design", "Package: SMD"],
    image: "/components/power-inductor.webp",
  },
  {
    title: "Schottky Diode",
    category: "Power",
    type: "Power",
    icon: Zap,
    stock: "In Stock",
    rating: 4.6,
    description: "Low-loss switching diode.",
    specs: ["Voltage: 20V – 100V", "Current: 1A – 10A", "Low forward drop (0.2V)", "Ultra-fast switching", "Package: SMA / SMB"],
    image: "/components/schottky-diode.webp",
  },
  {
    title: "USB Output Port",
    category: "Connectors",
    type: "Critical",
    icon: Plug,
    stock: "In Stock",
    rating: 4.5,
    description: "Power delivery interface.",
    specs: ["Type: USB-A / USB-C", "Voltage: 5V – 20V", "Current: up to 5A", "PD Support", "Durability: 10,000 cycles"],
    image: "/components/usb-port.avif",
  },
  {
    title: "PTC Resettable Fuse",
    category: "Protection",
    type: "Protection",
    icon: ShieldCheck,
    stock: "Available",
    rating: 4.6,
    description: "Overcurrent protection.",
    specs: ["Hold Current: 0.1A – 5A", "Trip Current: 0.2A – 10A", "Auto reset", "Short circuit protection", "Package: SMD"],
    image: "/components/ptc-fuse.jpg",
  },
  {
    title: "Ceramic Capacitor",
    category: "Passive",
    type: "Passive",
    icon: Layers,
    stock: "In Stock",
    rating: 4.4,
    description: "Noise filtering.",
    specs: ["Capacitance: 1pF – 100µF", "Voltage: up to 100V", "Low ESR", "High-frequency performance", "Package: 0402 / 0603"],
    image: "/components/ceramic-capacitor.webp",
  },
  {
    title: "Feedback Resistor",
    category: "Passive",
    type: "Passive",
    icon: Layers,
    stock: "In Stock",
    rating: 4.4,
    description: "Voltage feedback control.",
    specs: ["Resistance: 10Ω – 10MΩ", "Tolerance: ±0.1%", "Low drift", "High stability", "Package: 0603 / 0805"],
    image: "/components/feedback-resistor.jpg",
  },
  {
    title: "General Protection Diode",
    category: "Protection",
    type: "Protection",
    icon: ShieldCheck,
    stock: "Available",
    rating: 4.3,
    description: "Reverse polarity protection.",
    specs: ["Voltage: 50V – 1000V", "Current: up to 3A", "Fast recovery", "Low leakage", "Package: DO-41 / SMD"],
    image: "/components/general-protection.webp",
  },
];

const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

const countryData = [
  { name: "India",         code: "IN", currency: "INR", languages: ["EN", "HI"] },
  { name: "United States", code: "US", currency: "USD", languages: ["EN"] },
  { name: "Germany",       code: "DE", currency: "EUR", languages: ["DE"] },
  { name: "China",         code: "CN", currency: "CNY", languages: ["ZH"] },
  { name: "Japan",         code: "JP", currency: "JPY", languages: ["JA"] },
  { name: "South Korea",   code: "KR", currency: "KRW", languages: ["KO"] },
  { name: "United Kingdom",code: "GB", currency: "GBP", languages: ["EN"] },
  { name: "France",        code: "FR", currency: "EUR", languages: ["FR"] },
  { name: "Italy",         code: "IT", currency: "EUR", languages: ["IT"] },
  { name: "Spain",         code: "ES", currency: "EUR", languages: ["ES"] },
  { name: "Netherlands",   code: "NL", currency: "EUR", languages: ["NL", "EN"] },
  { name: "Switzerland",   code: "CH", currency: "CHF", languages: ["DE", "FR", "IT"] },
  { name: "Canada",        code: "CA", currency: "CAD", languages: ["EN", "FR"] },
  { name: "Australia",     code: "AU", currency: "AUD", languages: ["EN"] },
  { name: "Singapore",     code: "SG", currency: "SGD", languages: ["EN", "ZH"] },
  { name: "Malaysia",      code: "MY", currency: "MYR", languages: ["MS", "EN"] },
  { name: "UAE",           code: "AE", currency: "AED", languages: ["AR", "EN"] },
  { name: "Saudi Arabia",  code: "SA", currency: "SAR", languages: ["AR"] },
  { name: "South Africa",  code: "ZA", currency: "ZAR", languages: ["EN"] },
  { name: "Brazil",        code: "BR", currency: "BRL", languages: ["PT"] },
  { name: "Mexico",        code: "MX", currency: "MXN", languages: ["ES"] },
  { name: "Turkey",        code: "TR", currency: "TRY", languages: ["TR"] },
  { name: "Thailand",      code: "TH", currency: "THB", languages: ["TH"] },
  { name: "Vietnam",       code: "VN", currency: "VND", languages: ["VI"] },
  { name: "Indonesia",     code: "ID", currency: "IDR", languages: ["ID"] },
  { name: "Philippines",   code: "PH", currency: "PHP", languages: ["EN"] },
  { name: "Pakistan",      code: "PK", currency: "PKR", languages: ["UR", "EN"] },
  { name: "Bangladesh",    code: "BD", currency: "BDT", languages: ["BN"] },
];

// ── Reusable small dropdown ──────────────────────────────────
function Dropdown({ options, value, onSelect }: { options: string[]; value: string; onSelect: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative text-xs">
      <button onClick={() => setOpen(!open)} className="flex items-center gap-1 text-white/70 hover:text-white transition">
        {value} ▼
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-[#0d1526] border border-white/10 rounded shadow-xl z-50 max-h-60 overflow-y-auto">
          {options.map((opt, i) => (
            <div key={i} onClick={() => { onSelect(opt); setOpen(false); }}
              className="px-3 py-2 hover:bg-white/10 cursor-pointer text-white/80 hover:text-white">
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Type badge colour ────────────────────────────────────────
function getTypeColor(type: string) {
  switch (type) {
    case "Critical": return "bg-blue-100 text-blue-600";
    case "Power":    return "bg-cyan-100 text-cyan-600";
    case "Protection": return "bg-emerald-100 text-emerald-600";
    default:         return "bg-gray-100 text-gray-600";
  }
}

// ── Stock colour ─────────────────────────────────────────────
function getStockColor(stock: string) {
  if (stock === "In Stock") return "text-green-400";
  if (stock === "Limited")  return "text-yellow-400";
  return "text-gray-400";
}

// ════════════════════════════════════════════════════════════
export default function Hero() {
  const [country,  setCountry]  = useState("India");
  const [currency, setCurrency] = useState("INR");
  const [language, setLanguage] = useState("EN");

  const [search,          setSearch]          = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categoryOpen,    setCategoryOpen]    = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const catRef = useRef<HTMLDivElement>(null);

  // close category dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (catRef.current && !catRef.current.contains(e.target as Node)) setCategoryOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleCountryChange = (name: string) => {
    const found = countryData.find((c) => c.name === name);
    if (found) { setCountry(name); setCurrency(found.currency); setLanguage(found.languages[0]); }
  };

  // live filtered results — only show when user has typed something
  const searchResults = search.trim().length > 0
    ? products.filter((p) => {
        const matchCat = selectedCategory === "All" || p.category === selectedCategory;
        const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
                            p.description.toLowerCase().includes(search.toLowerCase()) ||
                            p.category.toLowerCase().includes(search.toLowerCase());
        return matchCat && matchSearch;
      })
    : [];

  const showDropdown = search.trim().length > 0;

  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">

      {/* Background video */}
      <video autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40">
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* ── UTILITY BAR + SEARCH ── */}
      <div className="pt-12 relative z-20">

        {/* utility bar */}
        <div className="w-full border-b border-white/10">
          <div className="w-full px-4 sm:px-6 py-2 flex justify-end gap-4 sm:gap-6">
            <Dropdown options={countryData.map((c) => c.name)} value={country}   onSelect={handleCountryChange} />
            <Dropdown options={["EN","FR","DE","ZH","JA"]}      value={language}  onSelect={setLanguage} />
            <Dropdown options={["USD","INR","EUR","GBP","JPY","CNY"]} value={currency} onSelect={setCurrency} />
          </div>
        </div>

        {/* search bar */}
        <div className="w-full border-b border-white/10 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3">

            {/* ── CATEGORY DROPDOWN ── */}
            <div ref={catRef} className="relative shrink-0">
              <button
                onClick={() => setCategoryOpen(!categoryOpen)}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/10
                px-3 sm:px-4 py-2 text-sm text-white/80 hover:text-white transition whitespace-nowrap"
              >
                <span className="hidden sm:inline">{selectedCategory}</span>
                <span className="sm:hidden">Cat.</span>
                <span className="text-white/40 text-xs">▼</span>
              </button>

              <AnimatePresence>
                {categoryOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full mt-1 w-44 bg-[#0d1526] border border-white/10 shadow-2xl z-50"
                  >
                    {categories.map((cat, i) => (
                      <button
                        key={i}
                        onClick={() => { setSelectedCategory(cat); setCategoryOpen(false); }}
                        className={`w-full text-left px-4 py-2.5 text-sm transition
                          ${selectedCategory === cat
                            ? "bg-blue-600 text-white"
                            : "text-white/70 hover:bg-white/10 hover:text-white"
                          }`}
                      >
                        {cat}
                        <span className="float-right text-white/30 text-xs">
                          {cat === "All"
                            ? products.length
                            : products.filter((p) => p.category === cat).length}
                        </span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── SEARCH INPUT ── */}
            <div className="relative flex-1">
              <div className="flex items-center bg-white overflow-hidden">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search components, part numbers..."
                  className="flex-1 px-4 py-2 text-black text-sm outline-none placeholder:text-gray-400"
                />
                {search && (
                  <button onClick={() => setSearch("")} className="px-2 text-gray-400 hover:text-gray-600">
                    <X className="w-4 h-4" />
                  </button>
                )}
                <button className="px-3 sm:px-4 bg-blue-600 hover:bg-blue-500 h-full py-2 transition">
                  <Search className="text-white w-4 h-4" />
                </button>
              </div>

              {/* ── LIVE RESULTS DROPDOWN ── */}
              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 right-0 top-full mt-1 bg-[#0d1526] border border-white/10
                    shadow-2xl z-50 max-h-[70vh] overflow-y-auto"
                  >
                    {searchResults.length === 0 ? (
                      <div className="px-5 py-8 text-center text-white/40 text-sm">
                        No components found for "{search}"
                      </div>
                    ) : (
                      <>
                        <div className="px-4 py-2 border-b border-white/10 flex items-center justify-between">
                          <span className="text-white/40 text-xs">
                            {searchResults.length} result{searchResults.length !== 1 ? "s" : ""}
                            {selectedCategory !== "All" && <> in <span className="text-blue-400">{selectedCategory}</span></>}
                          </span>
                          <a href="/nproducts" className="text-blue-400 text-xs hover:text-blue-300 transition">
                            View all →
                          </a>
                        </div>

                        {searchResults.map((product, i) => {
                          const Icon = product.icon;
                          return (
                            <motion.button
                              key={i}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: i * 0.03 }}
                              onClick={() => { setSelectedProduct(product); setSearch(""); }}
                              className="w-full flex items-start gap-4 px-4 py-3 hover:bg-white/[0.06]
                              border-b border-white/[0.05] last:border-0 text-left transition group"
                            >
                              {/* product image */}
                              <div className="w-12 h-12 shrink-0 bg-white/5 flex items-center justify-center overflow-hidden">
                                <img
                                  src={product.image}
                                  alt={product.title}
                                  className="w-full h-full object-contain"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = "none";
                                  }}
                                />
                              </div>

                              {/* text */}
                              <div className="flex-1 min-w-0">
                                <p className="text-white text-sm font-medium truncate group-hover:text-blue-300 transition">
                                  {product.title}
                                </p>
                                <p className="text-white/50 text-xs mt-0.5 truncate">{product.description}</p>
                                <div className="flex items-center gap-3 mt-1.5">
                                  <span className={`text-xs px-2 py-0.5 ${getTypeColor(product.type)}`}>
                                    {product.type}
                                  </span>
                                  <span className="text-white/30 text-xs">{product.category}</span>
                                  <span className={`text-xs ${getStockColor(product.stock)}`}>{product.stock}</span>
                                  <span className="flex items-center gap-0.5 text-yellow-400 text-xs ml-auto">
                                    <Star className="w-3 h-3 fill-current" />{product.rating}
                                  </span>
                                </div>
                              </div>

                              <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-blue-400 transition shrink-0 mt-1" />
                            </motion.button>
                          );
                        })}
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN HERO CONTENT ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-14 sm:pt-16 pb-20
        grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <span className="inline-block bg-white/10 px-4 py-1 rounded-full text-sm text-white/80">
            Electronic Components · PCB · Manufacturing
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Delivering{" "}
            <span className="text-blue-400">intelligent sourcing solutions</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Access a global network of trusted suppliers. Source components,
            build PCBs, and scale production with speed and reliability.
          </p>
          <div className="flex items-center gap-4 pt-2 flex-wrap">
            <a href="/nproducts"
              className="bg-blue-500 hover:bg-blue-400 px-6 py-3 rounded-md text-sm font-medium transition">
              Explore Products
            </a>
            <a href="#contact-form" className="text-sm text-white/80 hover:text-white transition">
              Get a Quote →
            </a>
          </div>
        </div>
        <div className="hidden lg:block relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80" />
        </div>
      </div>

      {/* ── BOTTOM STRIP ── */}
      <div className="relative z-10 border-t border-white/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 sm:py-6
          grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-sm">
          {[
            { title: "Electronic Components", desc: "Wide range of certified components" },
            { title: "PCB Solutions",          desc: "From prototype to mass production" },
            { title: "Manufacturing",          desc: "Scalable and reliable systems" },
            { title: "Supply Chain",           desc: "Global sourcing & logistics" },
          ].map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <p className="text-white font-medium group-hover:text-blue-400 transition text-sm">{item.title}</p>
              <p className="text-white/60 text-xs mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* ── PRODUCT DETAIL MODAL ── */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-black transition">
                <X />
              </button>

              <div className={`inline-block text-xs px-2 py-0.5 rounded mb-3 ${getTypeColor(selectedProduct.type)}`}>
                {selectedProduct.type}
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{selectedProduct.title}</h2>

              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-36 sm:h-44 object-contain rounded-xl mb-5 bg-gray-50"
              />

              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-500 text-sm">{selectedProduct.category}</span>
                <span className="flex items-center gap-1 text-yellow-500 text-sm">
                  <Star className="w-4 h-4 fill-current" />{selectedProduct.rating}
                </span>
                <span className={`text-sm font-medium ${getStockColor(selectedProduct.stock)}`}>
                  {selectedProduct.stock}
                </span>
              </div>

              <ul className="space-y-2 text-sm text-gray-700">
                {selectedProduct.specs?.map((spec, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>{spec}
                  </li>
                ))}
              </ul>

              <a href="/nproducts"
                className="mt-6 w-full flex items-center justify-center gap-2 bg-blue-600
                hover:bg-blue-500 text-white py-3 rounded-xl text-sm font-medium transition">
                View on Products Page <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}