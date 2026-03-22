"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  CircuitBoard,
  Cable,
  HelpCircle,
} from "lucide-react";

//////////////////////////////////////////////////////////
// DATA
//////////////////////////////////////////////////////////
const categories = [
  {
    title: "Passive components",
    description:
      "High-quality resistors, capacitors and inductors for stable and reliable circuit performance.",
    icon: CircuitBoard,
  },
  {
    title: "Active components",
    description:
      "MCUs, power ICs and analog solutions designed for performance-critical applications.",
    icon: Cpu,
  },
  {
    title: "Interconnect & mechanical",
    description:
      "Connectors, cables, enclosures and thermal solutions for complete system integration.",
    icon: Cable,
  },
  {
    title: "Not sure what you need?",
    description:
      "We help you identify the right components based on your requirements and use case.",
    icon: HelpCircle,
  },
];

//////////////////////////////////////////////////////////
// MAIN
//////////////////////////////////////////////////////////
export default function Products() {
  return (
    <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-screen bg-gradient-to-br from-[#7dd3fc] via-[#60a5fa] to-[#3b82f6] py-28 px-10 md:px-20 flex flex-col justify-between overflow-hidden">
      
      {/* TOP TEXT */}
      <div className="max-w-[1400px] w-full mx-auto">
        <p className="text-white/80 text-sm mb-6 tracking-wide">
          Our product expertise
        </p>

        <h2 className="text-white text-[52px] md:text-[80px] font-bold leading-[1.05] max-w-5xl">
          Find the right <br /> components for your build
        </h2>
      </div>

      {/* CARDS */}
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-20">
        {categories.map((cat, index) => {
          const Icon = cat.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[22px] px-8 py-10 shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* ICON */}
              <div className="flex justify-center mb-8">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 rounded-2xl bg-blue-100 flex items-center justify-center shadow-inner"
                >
                  <Icon
                    size={36}
                    strokeWidth={1.8}
                    className="text-blue-600"
                  />
                </motion.div>
              </div>

              {/* TITLE */}
              <h3 className="text-[18px] font-semibold text-gray-800 text-center mb-3">
                {cat.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[14px] text-gray-500 text-center leading-relaxed">
                {cat.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}