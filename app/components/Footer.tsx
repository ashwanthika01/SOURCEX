"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, Send } from "lucide-react";

export default function CTAFooter() {
  return (
    <div className="w-full">

      {/* ================= CTA SECTION ================= */}
      <section id="contact-form"
      className="relative bg-[#0c1220] overflow-hidden">

        {/* Subtle noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: "128px 128px",
          }}
        />

        {/* Dim blue glow */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-blue-700/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 md:px-12 pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-24 md:pb-28">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-24"
            >
              <p className="text-blue-400 text-sm font-medium mb-4 tracking-wide">
                — Get a Quote
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] text-white">
                Let's source the right<br />
                components for<br />
                <span className="text-blue-400">your project.</span>
              </h2>

              <p className="mt-6 text-gray-400 text-[15px] leading-relaxed max-w-sm">
                Drop us your BOM, schematic, or a quick brief. We'll get back with
                a competitive quote in{" "}
                <span className="text-gray-200">24–48 hours</span>, no fluff.
              </p>

              {/* Stats */}
              <div className="mt-10 sm:mt-14 space-y-5">
                {[
                  { num: "10,000+", label: "Components delivered" },
                  { num: "500+",    label: "Brands we work with" },
                  { num: "15+",     label: "Years in the business" },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-baseline gap-4"
                  >
                    <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums">{s.num}</span>
                    <span className="text-gray-500 text-sm">{s.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT — form */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <form
                action="https://formspree.io/f/mwvaadde"
                method="POST"
                className="space-y-5"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-[11px] text-gray-500 uppercase tracking-widest">Full Name *</label>
                    <input
                      name="name" type="text" required
                      placeholder="Abcd Xyz"
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08]
                      text-white text-sm placeholder:text-gray-600
                      focus:border-blue-500/60 focus:bg-white/[0.06] focus:outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] text-gray-500 uppercase tracking-widest">Company</label>
                    <input
                      name="company" type="text"
                      placeholder="Abcd Electronics"
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08]
                      text-white text-sm placeholder:text-gray-600
                      focus:border-blue-500/60 focus:bg-white/[0.06] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-[11px] text-gray-500 uppercase tracking-widest">Work Email *</label>
                    <input
                      name="email" type="email" required
                      placeholder="abcd@gmail.com"
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08]
                      text-white text-sm placeholder:text-gray-600
                      focus:border-blue-500/60 focus:bg-white/[0.06] focus:outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] text-gray-500 uppercase tracking-widest">Phone</label>
                    <input
                      name="phone" type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08]
                      text-white text-sm placeholder:text-gray-600
                      focus:border-blue-500/60 focus:bg-white/[0.06] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] text-gray-500 uppercase tracking-widest">
                    Tell us about your project *
                  </label>
                  <textarea
                    name="project" rows={5} required
                    placeholder="E.g. We need 5000 units of a custom PCB assembly with Texas Instruments and Murata parts. Target cost is ₹X, timeline is 6 weeks..."
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08]
                    text-white text-sm placeholder:text-gray-600
                    focus:border-blue-500/60 focus:bg-white/[0.06] focus:outline-none transition-all
                    resize-y min-h-[120px]"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  type="submit"
                  className="w-full py-3.5 sm:py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm
                  flex items-center justify-center gap-2.5 transition-colors"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span>Get Your Quote Within 48 Hours</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </motion.button>

                <p className="text-center text-gray-600 text-[11px]">
                  We don't spam. Your details stay with us.
                </p>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#080d18]">

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Main footer grid */}
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 py-10 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 md:gap-12">

            {/* Brand block */}
            <div className="sm:col-span-2 md:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/Logo.png"
                  alt="SourceX Technologies"
                  width={60}
                  height={60}
                  className="object-contain"
                  priority
                />
                <span className="text-white font-semibold text-base">SourceX Technologies</span>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Trusted partner for electronic component sourcing, PCB assembly,
                and supply chain solutions across India.
              </p>

              <div className="mt-6 space-y-2.5">
                <a
                  href="mailto:sourcex25@gmail.com"
                  className="flex items-center gap-2.5 text-gray-500 hover:text-gray-300 text-sm transition-colors group"
                >
                  <Mail className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition-colors shrink-0" />
                  sourcex25@gmail.com
                </a>
                <div className="flex items-center gap-2.5 text-gray-500 text-sm">
                  <MapPin className="w-4 h-4 text-gray-600 shrink-0" />
                  Hosur, Tamil Nadu, India
                </div>
              </div>
            </div>

            {/* Spacer — desktop only */}
            <div className="hidden md:block md:col-span-1" />

            {/* Company links */}
            <div className="md:col-span-2">
              <p className="text-gray-300 text-xs font-semibold tracking-[0.18em] uppercase mb-5">
                Company
              </p>
              <ul className="space-y-3">
                {[
                  { label: "About Us", href: "/nabout" },
                  { label: "Services", href: "/nservices" },
                  { label: "Products", href: "/nproducts" },
                  { label: "Contact",  href: "/ncontact" },
                ].map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories — links to /nproducts */}
            <div className="md:col-span-2">
              <p className="text-gray-300 text-xs font-semibold tracking-[0.18em] uppercase mb-5">
                Categories
              </p>
              <ul className="space-y-3">
                {[
                  "Active Components",
                  "Passive Components",
                  "Modules",
                  "Cables & Wires",
                  "Accessories",
                ].map((c) => (
                  <li key={c}>
                    <a
                      href="/nproducts"
                      className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                    >
                      {c}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Top Brands — links to product offerings section */}
            <div className="md:col-span-3">
              <p className="text-gray-300 text-xs font-semibold tracking-[0.18em] uppercase mb-5">
                Top Brands
              </p>
              <ul className="space-y-3">
                {[
                  "Texas Instruments",
                  "STMicroelectronics",
                  "Infineon",
                  "Vishay",
                  "Yageo",
                  "Espressif",
                ].map((b) => (
                  <li key={b}>
                    <a
                      href="/#product-offerings"
                      className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                    >
                      {b}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-px bg-white/[0.05]" />
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} SourceX Technologies Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

      </footer>

    </div>
  );
}