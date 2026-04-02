"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Target,
  Eye,
  Users,
  ShieldCheck,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    title: "Innovation",
    description: "We embrace modern technology and forward-thinking solutions to meet evolving industry needs.",
    icon: Lightbulb,
  },
  {
    title: "Trust & Quality",
    description: "We prioritize product reliability, transparency, and quality in every solution we deliver.",
    icon: ShieldCheck,
  },
  {
    title: "Customer Focus",
    description: "We build long-term partnerships by understanding client needs and delivering tailored support.",
    icon: Users,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-blue-50 via-white to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f615_1px,transparent_1px)] bg-[length:50px_50px]" />

        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-blue-200 bg-blue-50 mb-8">
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" />
              <span className="uppercase text-sm tracking-[3px] font-medium text-blue-600">
                About SourceX
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-black mb-8">
              Empowering Businesses Through<br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Technology & Smart Sourcing
              </span>
            </h1>

            <p className="max-w-3xl mx-auto text-xl text-zinc-700 leading-relaxed">
              SourceX is a trusted partner delivering high-quality electronic components, 
              automation solutions, and reliable sourcing support that help businesses grow with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-blue-600 font-semibold tracking-widest text-sm mb-4">WHO WE ARE</div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight mb-8">
                Your Reliable Partner in Products & Solutions
              </h2>
              <div className="space-y-6 text-lg text-zinc-700">
                <p>
                  At SourceX, we bridge the gap between business requirements and 
                  high-performance technology solutions. We specialize in sourcing, 
                  product support, and engineering services that enable organizations 
                  to operate more efficiently and scale with confidence.
                </p>
                <p>
                  Our commitment to reliability, innovation, and customer success 
                  makes us the preferred choice for industries seeking quality 
                  electronic components, automation systems, and custom solutions.
                </p>
              </div>
            </motion.div>

            {/* Right Visual Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                { icon: Building2, title: "Strong Foundation", desc: "Built on trust, professionalism, and deep technical expertise." },
                { icon: Target, title: "Goal Driven", desc: "Focused on delivering measurable business value and sustainable growth." },
                { icon: Eye, title: "Future Ready", desc: "Adapting to modern industry demands with scalable, innovative solutions." },
                { icon: Users, title: "Client First", desc: "We prioritize long-term partnerships and customer success above all." },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white border border-zinc-200 rounded-3xl p-8 hover:border-blue-500 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-3">{item.title}</h3>
                    <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION - Updated with Black Text */}
      <section className="bg-zinc-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-zinc-200 rounded-3xl p-12 text-black"
            >
              <Target className="w-14 h-14 text-blue-600 mb-8" />
              <h2 className="text-4xl font-bold mb-6 text-black">Our Mission</h2>
              <p className="text-zinc-700 text-lg leading-relaxed">
                To provide dependable high-quality products, intelligent sourcing solutions, 
                and innovative technology support that empower businesses to achieve 
                operational excellence and sustainable growth.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-zinc-200 rounded-3xl p-12 text-black"
            >
              <Eye className="w-14 h-14 text-blue-600 mb-8" />
              <h2 className="text-4xl font-bold mb-6 text-black">Our Vision</h2>
              <p className="text-zinc-700 text-lg leading-relaxed">
                To become the most trusted industry leader recognized for excellence in 
                quality, innovation, and customer-centric solutions across electronics, 
                automation, and supply chain support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-blue-600 font-medium tracking-widest mb-3">OUR FOUNDATION</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
              Core Values
            </h2>
            <p className="mt-4 text-xl text-zinc-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every solution we deliver.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group bg-white border border-zinc-200 rounded-3xl p-10 hover:border-blue-600 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:bg-blue-100 transition-colors">
                    <Icon className="w-9 h-9 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-black mb-4">{value.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
              Let’s Build Something Valuable Together
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Whether you need reliable sourcing, quality products, or technical collaboration — 
              SourceX is ready to support your business goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/inquiry-form"
                className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 hover:bg-zinc-100 font-semibold px-12 py-5 rounded-2xl text-lg transition-all shadow-xl"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 border-2 border-white hover:bg-white hover:text-blue-600 font-semibold px-12 py-5 rounded-2xl text-lg transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}