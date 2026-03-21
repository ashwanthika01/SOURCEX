"use client";

import { motion } from "framer-motion";
import { JSX } from "react";

export default function Hero(): JSX.Element {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600 blur-3xl opacity-30 rounded-full"></div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold leading-tight"
      >
        End-to-End BOM Fulfillment
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-gray-400 max-w-xl"
      >
        Premium electronic components sourcing with speed, reliability,
        and global supplier access.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex gap-4"
      >
        <button className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition">
          Get Quote
        </button>

        <button className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-gray-800 transition">
          Contact Us
        </button>
      </motion.div>
    </section>
  );
}