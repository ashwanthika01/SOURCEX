"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const offerings = [
  {
    title: "Active Components",
    brands: ["avago", "onsemi", "renesas", "texas", "national", "power", "taiwan", "nexperia", "nuvuton", "semihow", "semikron", "semtech", "silicon", "st", "toshiba", "samsung"]
  },
  {
    title: "More Active Components",
    brands: ["microsemi", "atmel", "dallas", "epson", "cypress", "actel", "allegro", "mitsubishi", "ams", "analog", "cirrus", "everlight", "fairchild", "fuji", "gigadevice", "intersil"]
  },
  {
    title: "Additional Active Components",
    brands: ["infineon", "utc", "sharp", "microchip", "vishay", "win", "htc", "ik", "ch","wxdh"]
  },
  {
    title: "Passive Components",
    brands: ["vishay", "yageo", "kemet", "tdk", "bourns", "epcos", "royalohm", "samwha","watts","hkr","diotec","cdil","hel","royalohm","jwco"]
  },
  {
    title: "Modules",
    brands: ["espressif", "raspberrypi", "arduino", "simcom", "aithinker", "kds", "yxc", "littelfuse","x2"]
  },
  {
    title: "Cables, Wires, and Accessories",
    brands: ["burndy", "commscope", "belden", "alphawire", "corning", "generalcable", "heyco", "lappgroup","hel","gardnerbender","lakecable","kalas","ideal","harbour"]
  }
];

// Group offerings into sets of 3 for desktop
const groupedOfferings: typeof offerings[] = [];
for (let i = 0; i < offerings.length; i += 3) {
  groupedOfferings.push(offerings.slice(i, i + 3));
}

export default function About() {
  // Desktop: group index (0 or 1), Mobile: individual card index (0–5)
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Desktop auto-slide: groups of 3
  useEffect(() => {
    if (isMobile) return;
    const interval = setInterval(() => {
      setCurrentGroupIndex((prev) => (prev + 1) % groupedOfferings.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile]);

  // Mobile auto-slide: one card at a time
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrentMobileIndex((prev) => (prev + 1) % offerings.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <>
      {/* ================= ABOUT HERO SECTION (Compact) ================= */}
      <section id="about" className="relative bg-white -mt-10 sm:-mt-14 md:-mt-20 pt-16 pb-16 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="inline-block text-blue-600 font-medium tracking-widest text-sm">
                ABOUT SOURCEX TECHNOLOGIES
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900">
                One-stop solution for{" "}
                <span className="text-blue-600">premium electronic components</span>
              </h1>

              <p className="text-gray-600 text-[17px]">
                We specialize in sourcing and delivering high-quality electronic components 
                from trusted global manufacturers with reliable supply chain and fast fulfillment.
              </p>

              <a 
                href="/nabout"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-medium transition-all group text-sm sm:text-base"
              >
                Learn More About Us
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/about-hero.jpg"
                alt="SourceX Technologies"
                width={650}
                height={420}
                className="w-full h-auto object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT OFFERINGS ================= */}
      <section
  id="product-offerings"
  className="bg-gray-50 -mt-10 sm:-mt-14 md:-mt-20 py-0 overflow-hidden"
>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-0">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Our Product Offerings</h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Premium brands across Active, Passive, Modules, and Accessories
            </p>
          </div>

          {/* ── MOBILE: 1 card at a time ── */}
          <div className="block md:hidden">
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMobileIndex}
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <motion.div
                    whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(59,130,246,0.15)" }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="bg-white rounded-2xl shadow-md p-4 border border-gray-100 cursor-default"
                  >
                    <h3 className="text-base font-bold text-blue-600 mb-1 text-center tracking-wide">
                      {offerings[currentMobileIndex].title}
                    </h3>
                    <div className="w-10 h-0.5 bg-blue-400 rounded-full mx-auto mb-4" />

                    <div className="grid grid-cols-2 gap-2">
                      {offerings[currentMobileIndex].brands.map((brand, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.08, backgroundColor: "#eff6ff", borderColor: "#93c5fd" }}
                          transition={{ duration: 0.18 }}
                          className="bg-gray-50 border border-gray-100 rounded-xl p-2 flex items-center justify-center h-14 hover:shadow-md transition-shadow"
                        >
                          <img
                            src={`/${brand}.jpg`}
                            alt={brand}
                            className="max-h-9 w-auto object-contain"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile dots — one per card (6 total) */}
            <div className="flex justify-center gap-2 mt-6 flex-wrap">
              {offerings.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentMobileIndex(idx)}
                  className={`h-3 rounded-full transition-all ${
                    idx === currentMobileIndex
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400 w-3"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ── DESKTOP: 3 cards at a time ── */}
          <div className="hidden md:block">
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentGroupIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="grid grid-cols-3 gap-4"
                >
                  {groupedOfferings[currentGroupIndex].map((offering, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(59,130,246,0.15)" }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="bg-white rounded-2xl shadow-md p-4 border border-gray-100 cursor-default"
                    >
                      <h3 className="text-base font-bold text-blue-600 mb-1 text-center tracking-wide">
                        {offering.title}
                      </h3>
                      <div className="w-10 h-0.5 bg-blue-400 rounded-full mx-auto mb-4" />

                      <div className="grid grid-cols-2 gap-2">
                        {offering.brands.map((brand, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.08, backgroundColor: "#eff6ff", borderColor: "#93c5fd" }}
                            transition={{ duration: 0.18 }}
                            className="bg-gray-50 border border-gray-100 rounded-xl p-2 flex items-center justify-center h-14 hover:shadow-md transition-shadow"
                          >
                            <img
                              src={`/${brand}.jpg`}
                              alt={brand}
                              className="max-h-9 w-auto object-contain"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Desktop dots — one per group (2 total) */}
            <div className="flex justify-center gap-3 mt-8">
              {groupedOfferings.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentGroupIndex(idx)}
                  className={`h-3 rounded-full transition-all ${
                    idx === currentGroupIndex
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400 w-3"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}