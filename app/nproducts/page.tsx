"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Cpu, Zap, ShieldCheck, Activity, Layers, Search, ArrowRight, Star, Plug, Filter, X, ChevronRight, Send, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const products = [
  { title: "ARM Cortex M0+ Microcontroller", category: "ICs", type: "Critical", icon: Cpu, stock: "In Stock", rating: 4.9, description: "Main control unit for horn logic.", specs: ["32-bit ARM Cortex-M0+", "Clock Speed: Up to 48 MHz", "Flash: Up to 256KB", "Low Power Consumption", "Interfaces: UART / SPI / I2C", "Operating Voltage: 1.8V – 3.6V"], image: "/components/mcu.png" },
  { title: "N-Channel MOSFET", category: "Power", type: "Power", icon: Zap, stock: "In Stock", rating: 4.8, description: "High-current switching device.", specs: ["N-Channel Enhancement Mode", "Vds: 30V – 100V", "Current: Up to 60A", "Low Rds(on)", "Fast Switching", "Package: TO-220 / SMD"], image: "/components/mosfet.jpg" },
  { title: "Voltage Regulator IC", category: "Power", type: "Critical", icon: Activity, stock: "In Stock", rating: 4.7, description: "Stable voltage supply.", specs: ["Type: Linear / LDO", "Input: 6V – 20V", "Output: 5V / Adjustable", "Current: Up to 1A", "Thermal Protection", "Low Noise Output"], image: "/components/regulator.webp" },
  { title: "TVS Diode", category: "Protection", type: "Protection", icon: ShieldCheck, stock: "In Stock", rating: 4.6, description: "Spike Protection", specs: ["Working Voltage: 5V – 48V", "Peak Power: up to 600W", "Clamping Voltage: < 77V", "Response Time: < 1ps", "ESD Protection: IEC compliant", "Package: SMB / DO-214"], image: "/components/tvs-diode.jpg" },
  { title: "Zener Diode", category: "Protection", type: "Protection", icon: ShieldCheck, stock: "Available", rating: 4.5, description: "Voltage regulation.", specs: ["Zener Voltage: 3.3V – 75V", "Power Rating: 500mW – 5W", "Tolerance: ±2% to ±5%", "Low leakage current", "Package: DO-41 / SMD"], image: "/components/zener.jpg" },
  { title: "Rectifier Diode", category: "Protection", type: "Power", icon: Zap, stock: "Available", rating: 4.4, description: "AC to DC conversion.", specs: ["Reverse Voltage: 50V – 1000V", "Forward Current: 1A – 10A", "Forward Drop: ~0.7V", "Surge Current: up to 200A", "Package: DO-41"], image: "/components/rectifier-diode.webp" },
  { title: "PNP Transistor", category: "ICs", type: "Active", icon: Zap, stock: "In Stock", rating: 4.4, description: "Signal switching/amplification.", specs: ["Type: PNP BJT", "Voltage: 40V", "Current: 600mA", "Gain: 100 – 300", "Package: TO-92", "Operating Temp: -55°C to +150°C"], image: "/components/pnp-transistor.avif" },
  { title: "Electrolytic Capacitor", category: "Passive", type: "Passive", icon: Layers, stock: "In Stock", rating: 4.3, description: "Filtering and smoothing.", specs: ["Capacitance: 10µF – 1000µF", "Voltage: 6.3V – 50V", "Polarized", "High ripple handling", "Lifetime: 2000+ hrs", "Package: Radial / SMD"], image: "/components/electrolytic-capacitor.jpg" },
  { title: "Precision Resistor", category: "Passive", type: "Passive", icon: Layers, stock: "In Stock", rating: 4.3, description: "Voltage division.", specs: ["Resistance: 1Ω – 10MΩ", "Tolerance: ±0.1%", "Low noise", "High stability", "Package: 0603 / 0805"], image: "/components/precision-resistor.jpg" },
  { title: "DC-DC Buck Converter IC", category: "ICs", type: "Critical", icon: Cpu, stock: "In Stock", rating: 4.9, description: "Efficient voltage step-down.", specs: ["Input: 4.5V – 40V", "Output: 0.8V – 35V", "Current: up to 3A", "Efficiency: up to 95%", "Protection: Thermal & Overcurrent", "Package: SOIC / QFN"], image: "/components/buck-converter.png" },
  { title: "Power Inductor", category: "Power", type: "Power", icon: Zap, stock: "Limited", rating: 4.7, description: "Energy storage element.", specs: ["Inductance: 1µH – 1000µH", "Current: up to 10A", "Low DCR", "Shielded design", "Package: SMD"], image: "/components/power-inductor.webp" },
  { title: "Schottky Diode", category: "Power", type: "Power", icon: Zap, stock: "In Stock", rating: 4.6, description: "Low-loss switching diode.", specs: ["Voltage: 20V – 100V", "Current: 1A – 10A", "Low forward drop (0.2V)", "Ultra-fast switching", "Package: SMA / SMB"], image: "/components/schottky-diode.webp" },
  { title: "USB Output Port", category: "Connectors", type: "Critical", icon: Plug, stock: "In Stock", rating: 4.5, description: "Power delivery interface.", specs: ["Type: USB-A / USB-C", "Voltage: 5V – 20V", "Current: up to 5A", "PD Support", "Durability: 10,000 cycles"], image: "/components/usb-port.avif" },
  { title: "PTC Resettable Fuse", category: "Protection", type: "Protection", icon: ShieldCheck, stock: "Available", rating: 4.6, description: "Overcurrent protection.", specs: ["Hold Current: 0.1A – 5A", "Trip Current: 0.2A – 10A", "Auto reset", "Short circuit protection", "Package: SMD"], image: "/components/ptc-fuse.jpg" },
  { title: "Ceramic Capacitor", category: "Passive", type: "Passive", icon: Layers, stock: "In Stock", rating: 4.4, description: "Noise filtering.", specs: ["Capacitance: 1pF – 100µF", "Voltage: up to 100V", "Low ESR", "High-frequency performance", "Package: 0402 / 0603"], image: "/components/ceramic-capacitor.webp" },
  { title: "Feedback Resistor", category: "Passive", type: "Passive", icon: Layers, stock: "In Stock", rating: 4.4, description: "Voltage feedback control.", specs: ["Resistance: 10Ω – 10MΩ", "Tolerance: ±0.1%", "Low drift", "High stability", "Package: 0603 / 0805"], image: "/components/feedback-resistor.jpg" },
  { title: "General Protection Diode", category: "Protection", type: "Protection", icon: ShieldCheck, stock: "Available", rating: 4.3, description: "Reverse polarity protection.", specs: ["Voltage: 50V – 1000V", "Current: up to 3A", "Fast recovery", "Low leakage", "Package: DO-41 / SMD"], image: "/components/general-protection.webp" },
];

const categoryMeta: Record<string, { color: string; bg: string; dot: string }> = {
  ICs:        { color: "text-blue-600",    bg: "bg-blue-50",    dot: "bg-blue-500" },
  Power:      { color: "text-amber-600",   bg: "bg-amber-50",   dot: "bg-amber-500" },
  Protection: { color: "text-emerald-600", bg: "bg-emerald-50", dot: "bg-emerald-500" },
  Passive:    { color: "text-violet-600",  bg: "bg-violet-50",  dot: "bg-violet-500" },
  Connectors: { color: "text-rose-600",    bg: "bg-rose-50",    dot: "bg-rose-500" },
  Active:     { color: "text-cyan-600",    bg: "bg-cyan-50",    dot: "bg-cyan-500" },
};

function getStockStyle(stock: string) {
  if (stock === "In Stock") return "text-emerald-600";
  if (stock === "Limited")  return "text-amber-500";
  return "text-gray-400";
}

type Product = typeof products[0];

/* ─────────────────────────────────────────────────────────
   QUOTE FORM
───────────────────────────────────────────────────────── */
function QuoteForm({ product, onClose }: { product: Product; onClose: () => void }) {
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [qty,     setQty]     = useState("");
  const [note,    setNote]    = useState("");
  const [loading, setLoading] = useState(false);
  const [sent,    setSent]    = useState(false);
  const [error,   setError]   = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim())  { setError("Please enter your name.");   return; }
    if (!email.trim()) { setError("Please enter your email.");  return; }
    if (!qty.trim())   { setError("Please enter a quantity.");  return; }
    setError("");
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("_subject", `[SourceX Quote Request] ${product.title}`);
      fd.append("product",  product.title);
      fd.append("category", product.category);
      fd.append("name",     name);
      fd.append("email",    email);
      fd.append("quantity", qty);
      fd.append("note",     note || "—");
      const res = await fetch("https://formspree.io/f/mojraoqw", { method: "POST", body: fd, headers: { Accept: "application/json" } });
      if (res.ok) setSent(true);
      else        setError("Something went wrong. Please try again.");
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 px-6 text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.1 }}>
          <CheckCircle className="w-14 h-14 text-blue-600 mx-auto mb-4" />
        </motion.div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Quote Request Sent!</h3>
        <p className="text-gray-600 text-base font-medium max-w-xs">
          We've received your request for{" "}
          <span className="font-bold text-gray-900">{product.title}</span>.
          Our team will get back to you within 48 hours.
        </p>
        <button onClick={onClose}
          className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-colors">
          Done
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5">
      {/* Header label */}
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-bold">
          Request a Quote
        </p>
        {/* Product badge */}
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-2.5 mb-5">
          {(() => {
            const meta = categoryMeta[product.category] ?? { color: "text-gray-600", bg: "bg-gray-100" };
            return <span className={`text-xs font-bold px-1.5 py-0.5 ${meta.bg} ${meta.color}`}>{product.category}</span>;
          })()}
          <span className="text-sm text-gray-800 font-bold truncate">{product.title}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <label className="text-xs text-gray-600 uppercase tracking-widest font-bold block">Full Name *</label>
          <input
            value={name} onChange={(e) => setName(e.target.value)}
            placeholder="John Smith"
            className="w-full px-3 py-3 border border-gray-200 text-sm font-semibold text-gray-900
            placeholder:text-gray-400 placeholder:font-normal focus:border-blue-500 focus:outline-none transition-colors"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs text-gray-600 uppercase tracking-widest font-bold block">Quantity *</label>
          <input
            value={qty} onChange={(e) => setQty(e.target.value)}
            placeholder="e.g. 500 units"
            className="w-full px-3 py-3 border border-gray-200 text-sm font-semibold text-gray-900
            placeholder:text-gray-400 placeholder:font-normal focus:border-blue-500 focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs text-gray-600 uppercase tracking-widest font-bold block">Work Email *</label>
        <input
          type="email" value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="w-full px-3 py-3 border border-gray-200 text-sm font-semibold text-gray-900
          placeholder:text-gray-400 placeholder:font-normal focus:border-blue-500 focus:outline-none transition-colors"
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-xs text-gray-600 uppercase tracking-widest font-bold block">Additional Notes</label>
        <textarea
          value={note} onChange={(e) => setNote(e.target.value)}
          rows={3}
          placeholder="Target price, delivery timeline, certifications needed..."
          className="w-full px-3 py-3 border border-gray-200 text-sm font-semibold text-gray-900
          placeholder:text-gray-400 placeholder:font-normal focus:border-blue-500 focus:outline-none transition-colors resize-none"
        />
      </div>

      {error && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm font-semibold">
          {error}
        </motion.p>
      )}

      <motion.button
        whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
        type="submit" disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500
        disabled:opacity-50 text-white text-sm font-bold py-4 transition-colors"
      >
        {loading ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Quote Request
          </>
        )}
      </motion.button>

      <p className="text-center text-gray-500 text-xs font-semibold">
        We'll respond within 48 hours. No spam, ever.
      </p>
    </form>
  );
}

/* ─────────────────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────────────────── */
export default function ProductsPage() {
  const router  = useRouter();
  const pageRef = useRef(null);

  const [search,           setSearch]           = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters,      setShowFilters]       = useState(false);
  const [selectedProduct,  setSelectedProduct]  = useState<Product | null>(null);
  const [hoveredCard,      setHoveredCard]       = useState<number | null>(null);
  const [showQuoteForm,    setShowQuoteForm]     = useState(false);

  const { scrollYProgress } = useScroll({ target: pageRef, offset: ["start start", "end start"] });
  const heroY       = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const categories       = ["All", ...Array.from(new Set(products.map((p) => p.category)))];
  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === "All" || p.category === selectedCategory) &&
      p.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleCloseModal = () => { setSelectedProduct(null); setShowQuoteForm(false); };

  return (
    <div ref={pageRef} className="min-h-screen bg-[#f5f6f8] text-gray-900">

      {/* ══════════════ HERO ══════════════ */}
      <motion.section style={{ y: heroY, opacity: heroOpacity }}
        className="relative bg-[#060d1f] min-h-[72vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 opacity-[0.045]"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.7) 1px,transparent 1px), linear-gradient(90deg,rgba(255,255,255,0.7) 1px,transparent 1px)`, backgroundSize: "64px 64px" }} />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-400/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[18vw] font-black text-white/[0.025] tracking-tighter leading-none">PRODUCTS</span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pb-16 pt-40 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8">
            <div className="w-7 h-[2px] bg-blue-500" />
            <span className="text-blue-400 text-sm font-bold tracking-[0.25em] uppercase">Component Catalogue</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-[5rem] font-bold text-white leading-[1.05] tracking-tight">
            Precision<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Electronic</span>{" "}
            Components.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-gray-300 text-lg font-medium max-w-lg leading-relaxed">
            Automotive, embedded systems, and industrial-grade components — sourced globally, delivered reliably.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-3">
            {[
              { v: `${products.length}`, l: "Products" },
              { v: `${categories.length - 1}`, l: "Categories" },
              { v: "48 hr", l: "Quote" },
              { v: "Global", l: "Sourcing" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/[0.06] border border-white/10 px-4 py-2">
                <span className="text-white font-extrabold text-sm">{s.v}</span>
                <span className="text-gray-400 text-xs font-semibold">{s.l}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ══════════════ CATEGORY TABS ══════════════ */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <div className="flex items-center gap-1 overflow-x-auto py-3" style={{ scrollbarWidth: "none" }}>
            {categories.map((cat) => {
              const meta   = cat !== "All" ? categoryMeta[cat] : null;
              const active = selectedCategory === cat;
              return (
                <button key={cat} onClick={() => setSelectedCategory(cat)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-bold whitespace-nowrap transition-all shrink-0 ${
                    active ? "bg-[#060d1f] text-white" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }`}>
                  {meta && <span className={`w-1.5 h-1.5 rounded-full ${active ? "bg-blue-400" : meta.dot}`} />}
                  {cat}
                  <span className={`text-xs ml-0.5 font-bold ${active ? "text-blue-300" : "text-gray-400"}`}>
                    {cat === "All" ? products.length : products.filter(p => p.category === cat).length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ══════════════ MAIN CONTENT ══════════════ */}
      <section className="max-w-6xl mx-auto px-4 md:px-12 py-12">

        {/* Search */}
        <div className="flex items-center gap-3 mb-10">
          <div className="flex-1 flex items-center gap-3 bg-white border border-gray-200 px-4 py-3 shadow-sm">
            <Search className="w-4 h-4 text-gray-400 shrink-0" />
            <input value={search} onChange={(e) => setSearch(e.target.value)}
              placeholder="Search components, part numbers..."
              className="flex-1 text-sm font-semibold text-gray-900 outline-none bg-transparent placeholder:text-gray-400 placeholder:font-normal" />
            {search && (
              <button onClick={() => setSearch("")}><X className="w-4 h-4 text-gray-400 hover:text-gray-700" /></button>
            )}
          </div>
          <button onClick={() => setShowFilters(true)}
            className="md:hidden flex items-center gap-2 bg-white border border-gray-200 px-4 py-3 text-sm font-bold text-gray-600 shadow-sm">
            <Filter className="w-4 h-4" />Filter
          </button>
        </div>

        {/* Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-semibold text-gray-500">
            Showing <span className="text-gray-900 font-bold">{filteredProducts.length}</span> components
            {selectedCategory !== "All" && <> in <span className="text-blue-600 font-bold">{selectedCategory}</span></>}
          </p>
          {(search || selectedCategory !== "All") && (
            <button onClick={() => { setSearch(""); setSelectedCategory("All"); }}
              className="text-xs font-bold text-gray-400 hover:text-gray-700 flex items-center gap-1 transition-colors">
              <X className="w-3 h-3" /> Clear
            </button>
          )}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${search}`}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200"
          >
            {filteredProducts.length === 0 ? (
              <div className="col-span-3 bg-white py-24 text-center text-gray-500 text-base font-semibold">
                No components found. Try a different search or category.
              </div>
            ) : (
              filteredProducts.map((product, i) => {
                const Icon    = product.icon;
                const meta    = categoryMeta[product.category] ?? { color: "text-gray-600", bg: "bg-gray-50", dot: "bg-gray-400" };
                const hovered = hoveredCard === i;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(i * 0.04, 0.4) }}
                    onMouseEnter={() => setHoveredCard(i)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => { setSelectedProduct(product); setShowQuoteForm(false); }}
                    className="relative bg-white cursor-pointer group overflow-hidden"
                  >
                    <motion.div
                      className="absolute top-0 left-0 right-0 h-[2px] bg-blue-600"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: hovered ? 1 : 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ transformOrigin: "left" }}
                    />
                    <div className={`relative h-44 ${meta.bg} flex items-center justify-center overflow-hidden`}>
                      <motion.img
                        src={product.image} alt={product.title}
                        className="h-32 w-auto object-contain"
                        animate={{ scale: hovered ? 1.06 : 1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`text-xs font-bold ${getStockStyle(product.stock)}`}>● {product.stock}</span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className={`text-xs font-bold px-2 py-0.5 ${meta.bg} ${meta.color} border border-current/20`}>
                          {product.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-base font-bold text-gray-900 leading-snug mb-1.5 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {product.title}
                      </h3>
                      <p className="text-sm font-medium text-gray-500 mb-4 line-clamp-1">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-amber-400">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span className="text-sm font-bold text-gray-700">{product.rating}</span>
                        </div>
                        <motion.div
                          className="flex items-center gap-1 text-blue-600 text-sm font-bold"
                          animate={{ x: hovered ? 2 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          View Specs <ChevronRight className="w-3.5 h-3.5" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ══════════════ PRODUCT MODAL ══════════════ */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center px-0 sm:px-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full sm:max-w-lg sm:rounded-none rounded-t-2xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col"
            >
              {/* Modal header tabs */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowQuoteForm(false)}
                    className={`text-sm font-bold px-3 py-1.5 transition-colors ${
                      !showQuoteForm ? "bg-[#060d1f] text-white" : "text-gray-400 hover:text-gray-700"
                    }`}
                  >
                    Specifications
                  </button>
                  <button
                    onClick={() => setShowQuoteForm(true)}
                    className={`text-sm font-bold px-3 py-1.5 transition-colors ${
                      showQuoteForm ? "bg-blue-600 text-white" : "text-gray-400 hover:text-gray-700"
                    }`}
                  >
                    Request Quote
                  </button>
                </div>
                <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-900 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="overflow-y-auto flex-1">
                <AnimatePresence mode="wait">

                  {!showQuoteForm && (
                    <motion.div key="specs" initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.2 }}>
                      {(() => {
                        const meta = categoryMeta[selectedProduct.category] ?? { bg: "bg-gray-50" };
                        return (
                          <div className={`${meta.bg} flex items-center justify-center py-10`}>
                            <img src={selectedProduct.image} alt={selectedProduct.title} className="h-40 w-auto object-contain" />
                          </div>
                        );
                      })()}

                      <div className="px-6 py-6">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h2 className="text-xl font-bold text-gray-900 leading-snug">{selectedProduct.title}</h2>
                          <div className="flex items-center gap-1 text-amber-400 shrink-0">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-base font-bold text-gray-800">{selectedProduct.rating}</span>
                          </div>
                        </div>
                        <span className={`text-sm font-bold ${getStockStyle(selectedProduct.stock)}`}>
                          ● {selectedProduct.stock}
                        </span>
                        <p className="text-sm font-medium text-gray-600 mt-4 mb-6">{selectedProduct.description}</p>

                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Specifications</p>
                        <div className="divide-y divide-gray-100">
                          {selectedProduct.specs.map((spec, i) => {
                            const parts = spec.includes(":") ? spec.split(/:(.+)/) : [null, spec];
                            const label = parts[0], value = parts[1];
                            return (
                              <div key={i} className="flex items-start justify-between py-3 gap-4">
                                {label ? (
                                  <>
                                    <span className="text-sm font-semibold text-gray-500 shrink-0">{label.trim()}</span>
                                    <span className="text-sm font-bold text-gray-900 text-right">{value?.trim()}</span>
                                  </>
                                ) : (
                                  <span className="text-sm font-semibold text-gray-700">• {spec}</span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {showQuoteForm && (
                    <motion.div key="quote" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 12 }} transition={{ duration: 0.2 }}>
                      <QuoteForm product={selectedProduct} onClose={handleCloseModal} />
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              {/* Footer CTA */}
              {!showQuoteForm && (
                <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 shrink-0">
                  <button
                    onClick={() => setShowQuoteForm(true)}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500
                    text-white text-sm font-bold py-3.5 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Request a Quote for This Component
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════ MOBILE FILTER SHEET ══════════════ */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-end"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setShowFilters(false)}
          >
            <motion.div
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full bg-white rounded-t-2xl p-6 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-base font-bold">Filter by Category</h3>
                <button onClick={() => setShowFilters(false)}><X className="w-5 h-5 text-gray-400" /></button>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => {
                  const meta   = cat !== "All" ? categoryMeta[cat] : null;
                  const active = selectedCategory === cat;
                  return (
                    <button key={cat} onClick={() => { setSelectedCategory(cat); setShowFilters(false); }}
                      className={`flex items-center gap-1.5 px-4 py-2 text-sm font-bold transition-all ${
                        active ? "bg-[#060d1f] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}>
                      {meta && <span className={`w-1.5 h-1.5 rounded-full ${active ? "bg-blue-400" : meta.dot}`} />}
                      {cat}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════ CTA STRIP ══════════════ */}
      <section className="bg-[#060d1f] py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white">Need Bulk Components?</h2>
            <p className="text-gray-300 mt-2 text-base font-semibold">Get a competitive quote within 48 hours.</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            onClick={() => router.push("/#inquiry-form")}
            className="shrink-0 flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500
            text-white font-bold px-8 py-4 text-sm transition-colors whitespace-nowrap"
          >
            Request a Quote <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </section>
    </div>
  );
}