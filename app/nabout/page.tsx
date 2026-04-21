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

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-28 overflow-hidden">

        {/* FLOWING BACKGROUND */}
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#f8fafc_0%,#eef2ff_30%,#e0f2fe_60%,#f8fafc_100%)] 
                        bg-[length:300%_300%] animate-[flow_25s_ease_infinite]" />

        <div className="absolute inset-0 bg-[radial-gradient(#3b82f615_1px,transparent_1px)] bg-[length:50px_50px]" />

        {/* subtle glow */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] 
                        bg-blue-500/10 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="show">

            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-blue-200 bg-white/70 backdrop-blur-md mb-8 shadow-sm">
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" />
              <span className="uppercase text-sm tracking-[3px] font-medium text-blue-600">
                About SourceX
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
              Empowering Businesses Through
              <br />
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

      {/* ================= OVERVIEW ================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="text-blue-600 font-semibold tracking-widest text-sm mb-4">
              WHO WE ARE
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Your Reliable Partner in Products & Solutions
            </h2>

            <div className="space-y-6 text-lg text-zinc-700">
              <p>
                At SourceX, we bridge the gap between business requirements and
                high-performance technology solutions.
              </p>
              <p>
                Our commitment to reliability, innovation, and customer success
                makes us the preferred choice across industries.
              </p>
            </div>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Building2, title: "Strong Foundation", desc: "Built on trust and expertise." },
              { icon: Target, title: "Goal Driven", desc: "Focused on measurable results." },
              { icon: Eye, title: "Future Ready", desc: "Adapting to modern demands." },
              { icon: Users, title: "Client First", desc: "Long-term partnerships matter." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-white/80 backdrop-blur-lg border border-zinc-200 rounded-3xl p-8 hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-zinc-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="py-24 bg-[#0A1428] text-white relative overflow-hidden">

        <div className="absolute inset-0 bg-[linear-gradient(120deg,#0A1428_0%,#1e3a8a_50%,#0A1428_100%)] 
                        bg-[length:250%_250%] animate-[flow_30s_linear_infinite]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-10">

          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To provide dependable high-quality products and intelligent sourcing solutions.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              text: "To become the most trusted industry leader recognized for excellence.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-12"
              >
                <Icon className="w-14 h-14 text-blue-300 mb-6" />
                <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                <p className="text-zinc-300">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="text-center mb-16">
            <h2 className="text-4xl font-bold">Core Values</h2>
            <p className="text-zinc-600 mt-4">What drives everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white border rounded-3xl p-10 hover:shadow-2xl transition"
                >
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-zinc-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Let’s Build Together</h2>
        <p className="mb-10 text-lg">Partner with SourceX for smarter sourcing</p>

        <Link
          href="/inquiry-form"
          className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold"
        >
          Get a Quote <ArrowRight />
        </Link>
      </section>
    </main>
  );
}