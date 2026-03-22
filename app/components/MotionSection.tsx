"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Check } from "lucide-react";

/* COUNT UP */
function CountUp({ target }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1500;
    const step = target / (duration / 16);

    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [inView, target]);

  return <span ref={ref}>{count}+</span>;
}

export default function MotionSection() {
  return (
    <section className="w-full min-h-screen bg-[#f8fafc] flex items-center px-6 md:px-16 py-12">
      
      <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-[1400px] mx-auto">
        
        {/* LEFT ILLUSTRATION AREA */}
        <div className="relative flex justify-center items-center h-[400px] md:h-[500px]">
          
          {/* MAIN FIGURE BLOCKS (simulate illustration) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute left-10 bottom-0 w-40 h-72 bg-blue-300 rounded-2xl"
          />

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute right-10 bottom-0 w-40 h-80 bg-sky-400 rounded-2xl"
          />

          {/* FLOAT ELEMENTS */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute top-10 left-1/3 w-4 h-4 bg-blue-500 rounded-full"
          />

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute bottom-20 left-1/2 w-3 h-3 bg-sky-400 rounded-full"
          />

          {/* UI LINES */}
          <div className="absolute top-20 left-20 space-y-2">
            <div className="w-24 h-2 bg-gray-300 rounded" />
            <div className="w-16 h-2 bg-blue-400 rounded" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6">
          
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
            End-to-end BOM sourcing with{" "}
            <span className="text-blue-600">
              quality, efficiency & trust
            </span>
          </h2>

          <p className="text-gray-500 leading-relaxed">
            We specialize in sourcing and distributing high-quality electronic
            components, connecting businesses with verified global suppliers.
            Our end-to-end BOM fulfillment ensures seamless procurement,
            reduced costs, and consistent quality across every stage.
          </p>

          {/* CHECK GRID */}
          <div className="grid grid-cols-2 gap-6 pt-4">
            
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                <Check size={16} />
              </div>
              <span className="text-gray-700 text-sm">
                Certified global suppliers
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                <Check size={16} />
              </div>
              <span className="text-gray-700 text-sm">
                100% authentic components
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                <Check size={16} />
              </div>
              <span className="text-gray-700 text-sm">
                Faster lead times & quoting
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                <Check size={16} />
              </div>
              <span className="text-gray-700 text-sm">
                Reduced logistics costs
              </span>
            </div>
          </div>

          {/* STATS (MATCH SCREENSHOT FEEL) */}
          <div className="flex gap-10 pt-6">
            <div>
              <div className="text-2xl font-semibold text-gray-900">
                <CountUp target={20} />
              </div>
              <div className="text-sm text-gray-500">
                Quality checks per batch
              </div>
            </div>

            <div>
              <div className="text-2xl font-semibold text-gray-900">
                <CountUp target={150} />
              </div>
              <div className="text-sm text-gray-500">
                Verified global partners
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}