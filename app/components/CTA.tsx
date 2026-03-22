"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="contact"
      className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] 
        bg-gradient-to-br from-[#7dd3fc] via-[#60a5fa] to-[#3b82f6] 
        py-20 px-6 md:px-20 overflow-hidden"
    >
      {/* SUBTLE TEXTURE */}
      <div className="absolute inset-0 opacity-30 
        bg-[radial-gradient(circle_at_20%_30%,white,transparent_40%),radial-gradient(circle_at_80%_70%,white,transparent_40%)]" 
      />

      {/* CONTENT */}
      <div className="relative w-full max-w-5xl mx-auto text-center text-white">
        
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
        >
          Ready to start your next build?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-3 text-blue-100 max-w-2xl mx-auto"
        >
          Send us your BOM or a quick project overview — our team will get
          back to you within 48 hours with clear next steps.
        </motion.p>

        {/* FORM - tighter spacing */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-8 space-y-3 text-left"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              className="rounded-xl bg-white/20 backdrop-blur-md border border-white/30 px-4 py-3 text-sm text-white placeholder-blue-100 outline-none focus:border-white"
              placeholder="Your name"
              required
            />
            <input
              className="rounded-xl bg-white/20 backdrop-blur-md border border-white/30 px-4 py-3 text-sm text-white placeholder-blue-100 outline-none focus:border-white"
              placeholder="Company (optional)"
            />
          </div>

          <input
            type="email"
            className="w-full rounded-xl bg-white/20 backdrop-blur-md border border-white/30 px-4 py-3 text-sm text-white placeholder-blue-100 outline-none focus:border-white"
            placeholder="Work email"
            required
          />

          <textarea
            rows={4}
            className="w-full rounded-xl bg-white/20 backdrop-blur-md border border-white/30 px-4 py-3 text-sm text-white placeholder-blue-100 outline-none focus:border-white"
            placeholder="Tell us about your project or paste a BOM link..."
          />

          <button
            type="submit"
            className="w-full sm:w-auto rounded-full bg-white text-blue-600 px-8 py-3 text-sm font-medium hover:scale-105 transition shadow-lg"
          >
            Send Inquiry →
          </button>
        </motion.form>

        {/* ARROW */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute left-10 bottom-28 hidden md:block"
        >
          <svg width="160" height="100" viewBox="0 0 200 120" fill="none">
            <path
              d="M10 20 C 40 100, 140 100, 180 70"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M165 60 L185 70 L170 85"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        {/* CONTACT INFO - even tighter */}
        <div className="mt-6 text-sm text-blue-100">
          <p className="font-medium text-white">SourceX Technologies</p>
          <p className="text-xs text-blue-200">
            info@sourcex-tech.com
          </p>
        </div>
      </div>

      {/* GRADIENT EXTENSION */}
      <div className="absolute bottom-0 left-0 w-full h-28 
        bg-gradient-to-b from-transparent to-[#1e3a8a]" 
      />
    </section>
  );
}