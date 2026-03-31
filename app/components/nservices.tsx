"use client";

import { motion } from "framer-motion";

export default function NServices() {
  return (
    <section className="min-h-screen px-6 py-24 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-black"
        >
          Our Services ✅
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-700 text-lg"
        >
          We provide high-quality tech solutions to grow your business.
        </motion.p>

        {/* Services Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          
          {[
            {
              title: "Web Development",
              desc: "Modern, fast, and scalable web apps using Next.js.",
            },
            {
              title: "App Development",
              desc: "Cross-platform mobile apps with great UI/UX.",
            },
            {
              title: "AI Solutions",
              desc: "Smart automation and AI-powered systems.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 p-6 rounded-2xl shadow-md"
            >
              <h3 className="text-xl font-semibold text-black">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-700">{service.desc}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}