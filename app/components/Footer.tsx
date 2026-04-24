"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CTAFooter() {
  return (
    <section
      className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] 
      min-h-screen flex flex-col justify-between
      bg-gradient-to-br from-[#7dd3fc] via-[#60a5fa] to-[#3b82f6]
      px-6 md:px-12 lg:px-20 py-20 lg:py-28 overflow-hidden"
    >
      {/* Soft overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      {/* Subtle light glows */}
      <div
        className="absolute inset-0 opacity-30 
        bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.6),transparent_50%),
                   radial-gradient(circle_at_75%_70%,rgba(255,255,255,0.5),transparent_50%)]"
      />

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center text-center text-white">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          id="inquiry-form"
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
            Ready to Bring Your Hardware Project to Life?
          </h2>

          <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto">
            Share your BOM, schematic, or project brief. Our sourcing experts will 
            review it and respond with a competitive quote within <span className="font-semibold text-white">24–48 hours</span>.
          </p>
        </motion.div>

        {/* Enhanced Glass Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-14 w-full max-w-3xl 
          bg-white/10 backdrop-blur-2xl border border-white/30 
          rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/30"
        >
          <form 
          action="https://formspree.io/f/mwvaadde"
          method="POST"
          className="space-y-6 text-left">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-blue-100 mb-1.5">
                  Full Name *
                </label>
                <input
                  name = "name"
                  type="text"
                  required
                  className="w-full px-5 py-3.5 bg-white/90 border border-white/40 rounded-2xl 
                  focus:border-white focus:ring-2 focus:ring-white/50 text-gray-900 
                  placeholder:text-gray-500 text-base outline-none"
                  placeholder="Abcd xyz"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-100 mb-1.5">
                  Company
                </label>
                <input
                  name = "company"
                  type="text"
                  className="w-full px-5 py-3.5 bg-white/90 border border-white/40 rounded-2xl 
                  focus:border-white focus:ring-2 focus:ring-white/50 text-gray-900 
                  placeholder:text-gray-500 text-base outline-none"
                  placeholder="Abcd Electronics"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-blue-100 mb-1.5">
                  Work Email *
                </label>
                <input
                  name = "email"
                  type="email"
                  required
                  className="w-full px-5 py-3.5 bg-white/90 border border-white/40 rounded-2xl 
                  focus:border-white focus:ring-2 focus:ring-white/50 text-gray-900 
                  placeholder:text-gray-500 text-base outline-none"
                  placeholder="abcd@gmail.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-100 mb-1.5">
                  Phone (optional)
                </label>
                <input
                  name = "phone"
                  type="tel"
                  className="w-full px-5 py-3.5 bg-white/90 border border-white/40 rounded-2xl 
                  focus:border-white focus:ring-2 focus:ring-white/50 text-gray-900 
                  placeholder:text-gray-500 text-base outline-none"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-100 mb-1.5">
                Tell us about your project *
              </label>
              <textarea
                name = "project"
                rows={5}
                required
                className="w-full px-5 py-3.5 bg-white/90 border border-white/40 rounded-2xl 
                focus:border-white focus:ring-2 focus:ring-white/50 text-gray-900 
                placeholder:text-gray-500 text-base outline-none resize-y min-h-[120px]"
                placeholder="We need 5000 units of a custom PCB assembly with specific components from Texas Instruments and Murata. Target cost and timeline..."
              />
            </div>

            <div className="flex justify-center pt-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-10 py-4 bg-white text-[#2563eb] font-semibold text-lg rounded-2xl 
                hover:bg-blue-50 transition-all shadow-lg flex items-center gap-3 group"
              >
                Get Your Quote Within 48 Hours
                <span className="group-hover:translate-x-1 transition">→</span>
              </motion.button>
            </div>

            <p className="text-center text-blue-200 text-xs mt-4">
              Your information is secure. We respect your inbox.
            </p>
          </form>
  </motion.div>
</div>

{/* ================= FOOTER ================= */}
 <footer className="w-full mt-24 border-t border-white/50 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 text-white">
        
        {/* LEFT: BRAND */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <Image
              src="/Logo.png"
              alt="SourceX Technologies"
              width={100}
              height={100}
              className="object-contain"
              priority
            />
            <h3 className="text-xl font-semibold tracking-tight text-white/90">
              SourceX Technologies
            </h3>
          </div>

          <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-md">
            Your trusted global partner for electronic component sourcing, PCB assembly,
            and supply chain solutions. Helping hardware startups and manufacturers scale faster.
          </p>
        </div>

        {/* CENTER: LINKS */}
        <div className="md:col-span-3">
          <h4 className="text-white/80 font-medium mb-4">Company</h4>

          <div className="flex flex-col gap-2 text-sm text-white/80 relative z-10">
            <a href="/nabout" className="hover:text-white transition">About Us</a>
            <a href="/nservices" className="hover:text-white transition">Our Services</a>
            <a href="/nproducts" className="hover:text-white transition">Products</a>
            <a href="/contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>

        {/* RIGHT: CONTACT */}
        <div className="md:col-span-4 md:text-right">
          <h4 className="text-white/80 font-medium mb-4">Get in Touch</h4>

          <a
            href="mailto:sourcex25@gmail.com"
            className="block text-white/80 hover:text-white transition text-sm"
          >
            sourcex25@gmail.com
          </a>

          <p className="text-white/80 text-sm mt-2">
            Hosur, Tamil Nadu, India
          </p>

          <div className="mt-8 text-xs text-white/80">
            © {new Date().getFullYear()} SourceX Technologies Private Limited<br />
            All Rights Reserved • Privacy Policy • Terms of Service
          </div>
        </div>
      </div>
    </footer>
  </section>
  );
}