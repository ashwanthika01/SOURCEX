"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden pt-20 lg:pt-28 pb-16">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-sky-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-200/30 blur-3xl rounded-full" />

      <div className="container mx-auto px-6">
        {/* HERO GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-sm font-medium text-sky-600">About SourceX</span>

            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight">
              One-stop solution for{" "}
              <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                premium electronic components
              </span>
            </h2>

            <p className="text-gray-500 max-w-xl leading-relaxed">
              We specialize in sourcing and distributing high-quality electronic
              components, connecting businesses with trusted global suppliers
              through a streamlined and reliable supply chain.
            </p>

            <p className="text-gray-500 max-w-xl leading-relaxed">
              With end-to-end BOM fulfillment, we simplify procurement, reduce
              costs, and ensure consistent quality — enabling faster production and
              stronger operational efficiency.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 text-sm">
              <div>
                <div className="text-lg font-semibold text-gray-900">Global Sourcing</div>
                <div className="text-gray-500">Verified & audited suppliers worldwide</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900">Quality Assured</div>
                <div className="text-gray-500">100% genuine, tested components</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900">Cost Efficient</div>
                <div className="text-gray-500">Optimized pricing & reduced logistics costs</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900">Fast Fulfillment</div>
                <div className="text-gray-500">Faster quoting and global delivery</div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="w-4 h-4 bg-sky-400 rounded-full"
            />
          </motion.div>

          {/* RIGHT VISUAL */}
          <div className="relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute w-[340px] h-[240px] bg-white rounded-3xl shadow-xl border border-gray-200"
            />

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative z-10 w-[360px] h-[260px] bg-white rounded-3xl border border-gray-200 shadow-2xl flex items-center justify-center overflow-hidden"
            >
              <div className="w-4/5 h-4/5 bg-gray-100 rounded-xl relative overflow-hidden">
                <motion.svg
                  viewBox="0 0 200 100"
                  className="w-full h-full"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path d="M0 80 Q 40 20, 80 60 T 200 30" stroke="#0ea5e9" strokeWidth="3" />
                </motion.svg>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute bottom-0 right-10 w-28 h-40 bg-sky-500 rounded-xl shadow-lg"
            />

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute top-0 right-20 w-3 h-3 bg-cyan-400 rounded-full"
            />
          </div>
        </div>

        {/* PRODUCT OFFERINGS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">
            Product Offerings
          </h3>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We deliver resilient BOM sourcing solutions with premium brands
          </p>
        </motion.div>

        <div className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide">
          {/* ====================== ACTIVE COMPONENTS – REAL IMAGES ====================== */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ y: { repeat: Infinity, duration: 4.2, ease: "easeInOut" } }}
            whileHover={{ scale: 1.02, y: -15 }}
            className="min-w-[380px] bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 snap-center group"
          >
            <h4 className="text-2xl font-bold text-center text-sky-700 mb-8">Active Components</h4>
            <div className="grid grid-cols-4 gap-6">
              {[
                { name: "Avago", file: "avago.jpg" },
                { name: "Onsemi", file: "onsemi.jpg" },
                { name: "Renesas", file: "renesas.jpg" },
                { name: "Texas", file: "texas.jpg" },
                { name: "National", file: "national.jpg" },
                { name: "power", file: "power.jpg" },
                { name: "taiwan", file: "taiwan.jpg" },
              ].map((brand) => (
                <motion.div
                  key={brand.name}
                  whileHover={{ scale: 1.12, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="h-14 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={`/${brand.file}`}
                    alt={brand.name}
                    className="h-10 w-auto max-w-full object-contain"
                  />
                </motion.div>
              ))}
            </div>
            <p className="text-center text-xs text-gray-500 mt-8">+ 30 more brands</p>
          </motion.div>

          {/* BOX 2, 3, 4 (unchanged – ready for you to add images later) */}
          {/* BOX 2: PASSIVE COMPONENTS */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ y: { repeat: Infinity, duration: 3.8, ease: "easeInOut" } }}
            whileHover={{ scale: 1.02, y: -15 }}
            className="min-w-[380px] bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 snap-center group"
          >
            <h4 className="text-2xl font-bold text-center text-sky-700 mb-8">Passive Components</h4>
            <div className="grid grid-cols-4 gap-6">
              {["Bourns", "Kemet", "Yageo", "TDK", "EPCOS", "Watts", "HKR", "SAMWHA", "Diotec", "CDIL", "HEL", "Royalohm", "Vishay", "Jwco"].map((brand, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.12, y: -4 }}
                  className="h-14 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center text-[10px] font-medium text-gray-700 hover:shadow-md"
                >
                  {brand}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* BOX 3: MODULES */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" } }}
            whileHover={{ scale: 1.02, y: -15 }}
            className="min-w-[380px] bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 snap-center group"
          >
            <h4 className="text-2xl font-bold text-center text-sky-700 mb-8">Modules</h4>
            <div className="grid grid-cols-4 gap-6">
              {["ESPRESSIF", "Raspberry Pi", "Arduino", "Littelfuse", "Ai-Thinker", "SIMCom", "KDS", "YXC", "X M&E"].map((brand, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.12, y: -4 }}
                  className="h-14 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center text-[10px] font-medium text-gray-700 hover:shadow-md"
                >
                  {brand}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* BOX 4: CABLE WIRES, POWER CORDS & ACCESSORIES */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ y: { repeat: Infinity, duration: 3.9, ease: "easeInOut" } }}
            whileHover={{ scale: 1.02, y: -15 }}
            className="min-w-[380px] bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 snap-center group"
          >
            <h4 className="text-2xl font-bold text-center text-sky-700 mb-8">Cable Wires, Power Cords & Accessories</h4>
            <div className="grid grid-cols-4 gap-6">
              {["Burndy", "CommScope", "Belden", "AlphaWire", "Corning", "General Cable", "Lapp Group", "Heyco", "HellermannTyton", "Gardner Bender", "Lake Cable", "Kalas", "Ideal", "Harbour"].map((brand, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.12, y: -4 }}
                  className="h-14 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center text-[10px] font-medium text-gray-700 hover:shadow-md"
                >
                  {brand}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}