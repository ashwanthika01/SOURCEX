"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  CircuitBoard,
  Cable,
  Globe,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    title: "Industrial Automation",
    description:
      "Reliable components for robotics and smart factories.",
    icon: CircuitBoard,
  },
  {
    title: "Automotive & EV",
    description:
      "Solutions for EV systems and vehicle control.",
    icon: Cpu,
  },
  {
    title: "Consumer Electronics",
    description:
      "Optimized components for smart devices.",
    icon: Cable,
  },
  {
    title: "IoT Systems",
    description:
      "Connected low-power embedded solutions.",
    icon: Globe,
  },
];

export default function IndustrySection() {
  return (
    <section className="bg-[#0a0f1c] text-white py-14 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-14 md:mb-20">

          {/* LEFT TEXT */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-400 text-xs sm:text-sm font-medium tracking-widest mb-3 block">
                INDUSTRIES WE SERVE
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Powering Innovation Across{" "}
                <span className="text-blue-400">Industries</span>
              </h2>

              <p className="text-sm sm:text-base text-white/70 mt-4 sm:mt-6 max-w-md mx-auto lg:mx-0">
                High-performance components tailored for modern engineering
                and scalable production systems.
              </p>
            </motion.div>
          </div>

          {/* GRID */}
          <div className="lg:col-span-7">

            {/* ✅ KEY CHANGE HERE */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">

              {industries.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                    className="group bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 hover:border-blue-500/40 hover:bg-white/10 transition"
                  >
                    {/* ICON */}
                    <div className="mb-3 sm:mb-4">
                      <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                      </div>
                    </div>

                    {/* TITLE */}
                    <h3 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2 group-hover:text-blue-400 transition">
                      {item.title}
                    </h3>

                    {/* DESC */}
                    <p className="text-xs sm:text-sm text-white/60 leading-snug">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 sm:pt-10 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left"
        >
          <div>
            <p className="text-white/80 text-sm sm:text-base">
              Need help selecting the right components?
            </p>
            <p className="text-white/60 text-xs sm:text-sm mt-1">
              Our experts are ready to support your project.
            </p>
          </div>

          <a
            href="/#contact-form"
            className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-5 sm:px-7 py-3 rounded-xl text-sm font-medium transition"
          >
            Get Expert Advice
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}