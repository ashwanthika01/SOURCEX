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
    description: "High-quality semiconductors, ICs, connectors, relays, and precision components for industrial and commercial applications.",
    icon: Cpu,
  },
  {
    title: "PCB & Assembly Solutions",
    description: "Reliable PCB fabrication and assembly services with high precision, quality assurance, and scalable production support.",
    icon: CircuitBoard,
  },
  {
    title: "Industrial Automation Products",
    description: "Automation hardware and smart control systems designed to improve efficiency, productivity, and operational reliability.",
    icon: Factory,
  },
  {
    title: "Safety & Protection Systems",
    description: "Advanced safety equipment and protective solutions for secure industrial and manufacturing environments.",
    icon: ShieldCheck,
  },
  {
    title: "Custom Engineering Solutions",
    description: "Tailored product engineering and sourcing solutions designed to meet specific business and technical requirements.",
    icon: Settings,
  },
  {
    title: "Supply & Logistics Support",
    description: "End-to-end procurement, inventory coordination, and reliable logistics support for uninterrupted operations.",
    icon: Truck,
  },
];

const whyChooseUs = [
  "Reliable sourcing and verified product quality",
  "Scalable solutions for startups and enterprises",
  "Technical consultation and engineering support",
  "Fast procurement and dependable delivery",
];

const highlights = [
  "High-performance industrial and electronic product range",
  "Custom sourcing based on business requirements",
  "Cost-efficient and quality-assured procurement process",
  "Dedicated support for product inquiries and partnerships",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white text-black overflow-hidden">
      {/* HERO SECTION */}
      <section className="bg-white py-24 md:py-32 border-b border-zinc-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f610_1px,transparent_1px)] bg-[length:40px_40px]" />

        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-blue-100 bg-blue-50 mb-8">
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" />
              <span className="uppercase text-sm tracking-[3px] text-blue-600 font-medium">
                SourceX — Engineering Excellence
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 text-black">
              Powering Industries with<br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                Reliable Technology
              </span>
            </h1>

            <p className="max-w-3xl mx-auto text-xl text-zinc-700 mb-10 leading-relaxed">
              Discover our comprehensive range of high-performance electronic, automation,
              and engineering products engineered for innovation, efficiency, and long-term reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="#products"
                  className="group inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-blue-500/20"
                >
                  Explore Our Products
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="#quote"
                  className="inline-flex items-center justify-center gap-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
                >
                  Request a Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-black mb-4">
              Our Product Portfolio
            </h2>
            <p className="text-zinc-700 text-lg max-w-2xl mx-auto">
              High-quality solutions across electronics, industrial automation, safety systems,
              and complete supply chain support.
            </p>
          </motion.div>

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
                  whileHover={{ y: -12, transition: { duration: 0.4 } }}
                  className="group bg-white border border-zinc-200 rounded-3xl p-10 hover:border-blue-600 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
                >
                  <div className="w-20 h-20 flex items-center justify-center bg-blue-50 rounded-2xl mb-8 group-hover:bg-blue-100 transition-all duration-300">
                    <Icon className="w-11 h-11 text-blue-600 transition-transform group-hover:scale-110 duration-300" />
                  </div>

                  <h3 className="text-2xl font-semibold mb-5 text-black">
                    {product.title}
                  </h3>

                  <p className="text-zinc-700 flex-1 leading-relaxed">
                    {product.description}
                  </p>

                  <Link
                    href="#"
                    className="mt-10 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US + HIGHLIGHTS */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-blue-600 font-medium tracking-widest text-sm mb-3">WHY PARTNER WITH US</div>
              <h2 className="text-4xl font-semibold tracking-tight text-black mb-10">
                Trusted Product Partner for Scalable Growth
              </h2>

              <div className="space-y-8">
                {whyChooseUs.map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-5"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-1 font-bold text-lg">
                      ✓
                    </div>
                    <p className="text-lg text-black leading-relaxed">{point}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white border border-zinc-100 rounded-3xl p-12 shadow-sm"
            >
              <h3 className="text-2xl font-semibold mb-8 text-black">Product Highlights</h3>
              <ul className="space-y-6">
                {highlights.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 text-black"
                  >
                    <span className="text-blue-600 text-2xl leading-none mt-0.5">•</span>
                    <span className="text-[17px] leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section id="quote" className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] bg-[length:30px_30px]" />

        <div className="max-w-4xl mx-auto text-center px-6 relative">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-white"
          >
            Looking for the Right Product Solution?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto"
          >
            Connect with our expert team to discuss your specific requirements and find the perfect products for your business.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="#"
                className="bg-white hover:bg-zinc-100 text-blue-600 font-semibold px-12 py-5 rounded-2xl text-lg transition-all flex items-center justify-center gap-3 group shadow-xl"
              >
                Get a Custom Quote
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="#"
                className="border-2 border-white hover:bg-white hover:text-blue-600 px-12 py-5 rounded-2xl text-lg font-medium transition-all"
              >
                Speak with Our Team
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}