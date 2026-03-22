"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden pt-20 lg:pt-28 pb-0 grid lg:grid-cols-2 gap-16 items-center">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-200/30 blur-3xl rounded-full" />

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <span className="text-sm font-medium text-blue-600">
          About SourceX
        </span>

        <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight">
          One-stop solution for{" "}
          <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
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

        {/* KEY POINTS */}
        <div className="grid grid-cols-2 gap-6 pt-4 text-sm">
          <div>
            <div className="text-lg font-semibold text-gray-900">
              Global Sourcing
            </div>
            <div className="text-gray-500">
              Verified & audited suppliers worldwide
            </div>
          </div>

          <div>
            <div className="text-lg font-semibold text-gray-900">
              Quality Assured
            </div>
            <div className="text-gray-500">
              100% genuine, tested components
            </div>
          </div>

          <div>
            <div className="text-lg font-semibold text-gray-900">
              Cost Efficient
            </div>
            <div className="text-gray-500">
              Optimized pricing & reduced logistics costs
            </div>
          </div>

          <div>
            <div className="text-lg font-semibold text-gray-900">
              Fast Fulfillment
            </div>
            <div className="text-gray-500">
              Faster quoting and global delivery
            </div>
          </div>
        </div>

        {/* FLOAT DOT */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="w-4 h-4 bg-blue-400 rounded-full"
        />
      </motion.div>

      {/* RIGHT VISUAL */}
      <div className="relative flex justify-center">
        {/* BACK CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute w-[340px] h-[240px] bg-white rounded-3xl shadow-xl border border-gray-200"
        />

        {/* MAIN CARD */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="relative z-10 w-[360px] h-[260px] bg-white rounded-3xl border border-gray-200 shadow-2xl flex items-center justify-center"
        >
          {/* GRAPH */}
          <div className="w-4/5 h-4/5 bg-gray-100 rounded-xl relative overflow-hidden">
            <motion.svg
              viewBox="0 0 200 100"
              className="w-full h-full"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path
                d="M0 80 Q 40 20, 80 60 T 200 30"
                stroke="#38bdf8"
                strokeWidth="3"
              />
            </motion.svg>
          </div>
        </motion.div>

        {/* FLOAT SHAPE (PERSON STYLE BLOCK) */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="absolute bottom-0 right-10 w-28 h-40 bg-blue-400 rounded-xl shadow-lg"
        />

        {/* FLOAT DOT */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute top-0 right-20 w-3 h-3 bg-blue-500 rounded-full"
        />
      </div>
    </section>
  );
}