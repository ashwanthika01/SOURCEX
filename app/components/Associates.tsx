"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "Aggregator",
    logos: ["/logos/tbo.png"],
  },
  {
    title: "Insurance",
    logos: [
      "/logos/icici.png",
      "/logos/bajaj.png",
      "/logos/acko.png",
      "/logos/hdfc.png",
      "/logos/niva.png",
      "/logos/care.png",
      "/logos/tune.png",
    ],
  },
  {
    title: "Payment Gateway",
    logos: [
      "/logos/razorpay.png",
      "/logos/paytm.png",
      "/logos/instamojo.png",
      "/logos/payu.png",
    ],
  },
];

export default function Associates() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            Our Major Associates
          </h2>
          <p className="text-gray-500 mt-2">
            Trusted partners powering our ecosystem
          </p>
        </div>

        {/* Slider */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="min-w-[300px] bg-white rounded-2xl shadow-md border border-gray-200 p-6"
            >
              <h3 className="text-xl font-semibold text-center mb-6">
                {section.title}
              </h3>

              <div className="grid grid-cols-2 gap-4 place-items-center">
                {section.logos.map((logo, i) => (
                  <motion.img
                    key={i}
                    src={logo}
                    alt="logo"
                    whileHover={{ scale: 1.1 }}
                    className="h-12 object-contain"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
