"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  CircuitBoard,
  Factory,
  ShieldCheck,
  Settings,
  Truck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const products = [
  {
    title: "Electronic Components",
    description: "Premium semiconductors, connectors, ICs, relays, and precision passive components engineered for demanding industrial environments.",
    icon: Cpu,
  },
  {
    title: "PCB Fabrication & Assembly",
    description: "High-reliability PCB manufacturing and turnkey assembly with stringent quality control and full traceability.",
    icon: CircuitBoard,
  },
  {
    title: "Industrial Automation",
    description: "Advanced control systems, sensors, PLCs, and smart automation solutions for maximum efficiency and uptime.",
    icon: Factory,
  },
  {
    title: "Safety & Protection Systems",
    description: "Industrial-grade safety equipment, surge protection, and environmental monitoring for secure operations.",
    icon: ShieldCheck,
  },
  {
    title: "Custom Engineering Solutions",
    description: "Bespoke product development, value engineering, and specialized sourcing tailored to your requirements.",
    icon: Settings,
  },
  {
    title: "Supply Chain & Logistics",
    description: "End-to-end procurement, strategic inventory management, and reliable global logistics support.",
    icon: Truck,
  },
];

const whyChooseUs = [
  "Curated network of verified manufacturers and tier-1 suppliers",
  "Technical expertise and engineering consultation at every stage",
  "Scalable solutions for startups and large enterprises",
  "Consistent quality assurance with full documentation",
];

const highlights = [
  "Extensive range of high-performance industrial products",
  "Custom sourcing and value-added engineering services",
  "Competitive pricing with uncompromising quality",
  "Dedicated technical support and long-term partnership",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 overflow-hidden">
      {/* HERO SECTION - Smooth Flowing Background */}
     <section className="relative bg-[#0A1428] text-white py-32 md:py-44 overflow-hidden min-h-[90vh] flex items-center">
  
  {/* Primary Deep Gradient (Base) */}
  <div className="absolute inset-0 bg-[linear-gradient(120deg,#0A1428_0%,#0F1E3D_30%,#1A2E5C_55%,#0F1E3D_75%,#0A1428_100%)] 
                  bg-[length:250%_250%] animate-[flow_32s_ease_infinite]" />

  {/* Secondary Soft Flow Layer */}
  <div className="absolute inset-0 opacity-60 bg-[linear-gradient(60deg,#1E3A8A_0%,transparent_40%,#3B82F6_60%,transparent_100%)] 
                  bg-[length:300%_300%] animate-[flowReverse_40s_ease_infinite]" />

  {/* Metallic Sweep Effect (like logo shine) */}
  <div className="absolute inset-0">
    <div className="absolute -top-1/2 left-[-20%] w-[140%] h-[200%] 
                    bg-[linear-gradient(120deg,transparent_30%,rgba(168,181,209,0.08)_50%,transparent_70%)] 
                    animate-[shine_18s_linear_infinite]" />
  </div>

  {/* Subtle Grid Texture */}
  <div className="absolute inset-0 bg-[radial-gradient(#A8B5D115_1px,transparent_1px)] bg-[length:60px_60px]" />

  {/* Logo Glow (very subtle branding) */}
  <div className="absolute inset-0 flex items-center justify-center opacity-[0.04]">
    <img src="/SourceX.png" alt="logo" className="w-[600px] object-contain" />
  </div>

  {/* Soft Light Beams */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute left-[25%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#A8B5D1] to-transparent animate-[beam_28s_linear_infinite]" />
    <div className="absolute left-[70%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#A8B5D1] to-transparent animate-[beam_36s_linear_infinite_6s]" />
  </div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-10 text-sm tracking-[2px] font-medium"
      >
        SOURCE X • ESTABLISHED 2018
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        className="text-6xl md:text-7xl font-semibold tracking-tighter leading-none mb-8"
      >
        Precision Components.<br />
        <span className="bg-gradient-to-r from-[#A8B5D1] via-white to-[#A8B5D1] bg-clip-text text-transparent">
          Engineered for Excellence
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-3xl mx-auto mb-14"
      >
        Delivering high-performance electronic, automation, and engineering solutions with 
        uncompromising quality and reliability.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.9 }}
        className="flex flex-col sm:flex-row gap-5 justify-center"
      >
        <Link
          href="#products"
          className="group inline-flex items-center justify-center gap-3 bg-white text-[#0A1428] hover:bg-zinc-100 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-2xl"
        >
          Explore Portfolio
        </Link>

        <Link
          href="#quote"
          className="group inline-flex items-center justify-center gap-3 border-2 border-white/70 hover:border-white hover:bg-white/10 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300"
        >
          Request Consultation
        </Link>
      </motion.div>
    </div>
  </div>

  {/* Bottom fade */}
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
</section>

      {/* PRODUCTS GRID */}
      <section id="products" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="uppercase tracking-[3px] text-[#0A1428] text-sm font-medium mb-3">OUR EXPERTISE</div>
            <h2 className="text-5xl font-semibold tracking-tighter mb-4 text-[#0A1428]">
              Product Portfolio
            </h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
              Carefully curated solutions that drive innovation and reliability across industries
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group bg-white border border-zinc-200 hover:border-[#0A1428] rounded-3xl p-10 flex flex-col h-full transition-all duration-500 hover:shadow-2xl hover:shadow-[#0A1428]/10"
                >
                  <motion.div 
                    className="w-16 h-16 flex items-center justify-center bg-zinc-100 rounded-2xl mb-9 group-hover:bg-[#0A1428] transition-all duration-500"
                    whileHover={{ rotate: 8, scale: 1.1 }}
                  >
                    <Icon className="w-9 h-9 text-zinc-700 group-hover:text-white transition-colors duration-500" />
                  </motion.div>

                  <h3 className="text-2xl font-semibold tracking-tight mb-5 text-[#0A1428]">
                    {product.title}
                  </h3>

                  <p className="text-zinc-600 flex-1 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mt-10 pt-6 border-t border-zinc-100">
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 font-semibold text-sm text-[#0A1428] group-hover:gap-3 transition-all"
                    >
                      Discover Solution
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US + HIGHLIGHTS - Navy Section */}
      <section className="py-28 bg-[#0A1428] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <div className="text-[#A8B5D1] font-medium tracking-widest text-sm mb-4">PARTNERSHIP BEYOND SUPPLY</div>
              <h2 className="text-5xl font-semibold tracking-tighter leading-none mb-12">
                Why Industry Leaders Choose SourceX
              </h2>

              <div className="space-y-10">
                {whyChooseUs.map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.15 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 w-8 h-8 mt-1 rounded-full border border-[#A8B5D1]/30 flex items-center justify-center">
                      <div className="w-3 h-3 bg-[#A8B5D1] rounded-full" />
                    </div>
                    <p className="text-lg text-zinc-300 leading-relaxed">{point}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12"
            >
              <h3 className="text-3xl font-semibold mb-10">What Sets Us Apart</h3>
              <ul className="space-y-8">
                {highlights.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.15 }}
                    className="flex gap-5 text-zinc-300"
                  >
                    <span className="text-[#A8B5D1] text-2xl mt-0.5">↗</span>
                    <span className="text-[17px] leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section id="quote" className="py-28 bg-white border-t border-zinc-100">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-semibold tracking-tighter mb-6 text-[#0A1428]"
          >
            Ready to Source Smarter?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-600 max-w-2xl mx-auto mb-12"
          >
            Connect with our experts to discover the perfect components and solutions for your project.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="#"
                className="group inline-flex items-center justify-center gap-3 bg-[#0A1428] hover:bg-black text-white px-12 py-5 rounded-2xl font-semibold text-lg transition-all shadow-xl"
              >
                Request a Custom Quote
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-3 border-2 border-[#0A1428] hover:bg-[#0A1428] hover:text-white px-12 py-5 rounded-2xl font-semibold text-lg transition-all"
              >
                Schedule a Call
              </Link>
            </motion.div>
          </div>

          <p className="text-sm text-zinc-500 mt-12">
            Average response time: <span className="font-medium text-[#0A1428]">Under 4 hours</span>
          </p>
        </div>
      </section>
    </div>
  );
}