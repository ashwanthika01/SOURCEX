"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Check } from "lucide-react";

/* CountUp Component */
function CountUp({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1800;
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

  return <span ref={ref}>{count}</span>;
}

export default function About() {
  return (
    <>
      {/* ================= HERO + ABOUT SECTION ================= */}
      <section id="about" className="relative overflow-hidden pt-20 lg:pt-28 pb-20 bg-white">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-sky-200/40 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/40 blur-3xl rounded-full" />

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <span className="text-sm font-medium tracking-widest text-sky-600 uppercase">About SourceX Technologies</span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
                One-stop solution for{" "}
                <span className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
                  premium electronic components
                </span>
              </h1>

              <div className="space-y-6 text-gray-600 max-w-xl">
                <p className="leading-relaxed">
                  We specialize in sourcing and distributing high-quality electronic components, 
                  connecting businesses with trusted global suppliers through a streamlined and reliable supply chain.
                </p>
                <p className="leading-relaxed">
                  With end-to-end BOM fulfillment, we simplify procurement, reduce costs, and ensure 
                  consistent quality — enabling faster production and stronger operational efficiency.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <div className="text-lg font-semibold text-gray-900">Global Sourcing</div>
                  <div className="text-gray-500 text-sm">Verified & audited suppliers worldwide</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-gray-900">Quality Assured</div>
                  <div className="text-gray-500 text-sm">100% genuine, tested components</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-gray-900">Cost Efficient</div>
                  <div className="text-gray-500 text-sm">Optimized pricing & reduced logistics</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-gray-900">Fast Fulfillment</div>
                  <div className="text-gray-500 text-sm">Faster quoting and global delivery</div>
                </div>
              </div>
            </motion.div>

            {/* Right Visual */}
            <div className="relative flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-[360px] h-[280px] bg-white rounded-3xl border border-gray-200 shadow-2xl flex items-center justify-center overflow-hidden"
              >
                <div className="w-4/5 h-4/5 bg-gray-100 rounded-2xl relative overflow-hidden flex items-center justify-center">
                  <motion.svg
                    viewBox="0 0 200 100"
                    className="w-full h-full"
                    fill="none"
                  >
                    <path 
                      d="M0 80 Q 40 20, 80 60 T 200 30" 
                      stroke="#0ea5e9" 
                      strokeWidth="4" 
                      strokeLinecap="round"
                    />
                  </motion.svg>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 3.5 }}
                className="absolute -top-6 -right-6 w-28 h-40 bg-sky-500/90 rounded-2xl shadow-xl"
              />
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute bottom-8 left-12 w-5 h-5 bg-cyan-400 rounded-full shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY US + STATS SECTION ================= */}
      <section className="w-full bg-[#f8fafc] py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Illustration */}
            <div className="relative h-[420px] md:h-[520px] flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="absolute left-8 bottom-10 w-44 h-80 bg-blue-300 rounded-3xl shadow-xl"
              />
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute right-8 bottom-6 w-44 h-96 bg-sky-400 rounded-3xl shadow-2xl"
              />

              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute top-16 left-1/3 w-6 h-6 bg-blue-600 rounded-full"
              />
            </div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
                End-to-end BOM sourcing with{" "}
                <span className="text-blue-600">quality, efficiency & trust</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                We connect you with verified global suppliers and deliver consistent quality, 
                faster lead times, and cost-effective solutions for your hardware projects.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                {[
                  "Certified global suppliers",
                  "100% authentic components",
                  "Faster lead times & quoting",
                  "Reduced logistics costs",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-blue-100 text-blue-600 rounded-full">
                      <Check size={18} />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex gap-12 pt-8">
                <div>
                  <div className="text-4xl font-semibold text-gray-900">
                    <CountUp target={20} />+
                  </div>
                  <div className="text-sm text-gray-500">Quality checks per batch</div>
                </div>
                <div>
                  <div className="text-4xl font-semibold text-gray-900">
                    <CountUp target={150} />+
                  </div>
                  <div className="text-sm text-gray-500">Verified global partners</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT OFFERINGS SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-semibold text-gray-900">Our Product Offerings</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Premium brands across Active, Passive, Modules, and Accessories
            </p>
          </motion.div>

          {/* Horizontal Scroll Container with All Brand Grids */}
          <div className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide">
            
            {/* Active Components - Box 1 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ y: { repeat: Infinity, duration: 4.2, ease: "easeInOut" } }}
              whileHover={{ scale: 1.02, y: -15 }}
              className="min-w-[380px] bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 snap-center group"
            >
              <h4 className="text-2xl font-bold text-center text-sky-700 mb-8">Active Components</h4>
              <div className="grid grid-cols-4 gap-6">
                {[
                  { name: "Avago", file: "avago.jpg" },
                  { name: "Onsemi", file: "onsemi.jpg" },
                  { name: "Renesas", file: "renesas.jpg" },
                  { name: "Texas", file: "texas.jpg" },
                  { name: "National", file: "national.jpg" },
                  { name: "power", file: "power.jpg" },
                  { name: "taiwan", file: "taiwan.jpg" },
                  { name: "nexperia", file: "nexperia.jpg" },
                  { name: "nuvuton", file: "nuvuton.jpg" },
                  { name: "semihow", file: "semihow.jpg" },
                  { name: "semikron", file: "semikron.jpg" },
                  { name: "semtech", file: "semtech.jpg" },
                  { name: "silicon", file: "silicon.jpg" },
                  { name: "st", file: "st.jpg" },
                  { name: "toshiba", file: "toshiba.jpg" },
                  { name: "samsung", file: "samsung.jpg" },
                ].map((brand) => (
                  <motion.div
                    key={brand.name}
                    whileHover={{ scale: 1.12, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="h-14 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={`/${brand.file}`}
                      alt={brand.name}
                      className="h-10 w-auto max-w-full object-contain"
                    />
                  </motion.div>
                ))}
              </div>
              
            </motion.div>

            {/* More Active Components - Box 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ y: { repeat: Infinity, duration: 4.0, ease: "easeInOut" } }}
              whileHover={{ scale: 1.02, y: -15 }}
              className="min-w-[380px] bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 snap-center group"
            >
              <h4 className="text-2xl font-bold text-center text-sky-700 mb-8">More Active Components</h4>
              <div className="grid grid-cols-4 gap-6">
                {[
                  { name: "Microsemi", file: "microsemi.jpg" },
                  { name: "Atmel", file: "atmel.jpg" },
                  { name: "Dallas", file: "dallas.jpg" },
                  { name: "Epson", file: "epson.jpg" },
                  { name: "Cypress", file: "cypress.jpg" },
                  { name: "Actel", file: "actel.jpg" },
                  { name: "Allegro", file: "allegro.jpg" },
                  { name: "Mitsubishi", file: "mitsubishi.jpg" },
                  { name: "AMS", file: "ams.jpg" },
                  { name: "Analog", file: "analog.jpg" },
                  { name: "Cirrus", file: "cirrus.jpg" },
                  { name: "Everlight", file: "everlight.jpg" },
                  { name: "Fairchild", file: "fairchild.jpg" },
                  { name: "Fuji Electric", file: "fuji.jpg" },
                  { name: "GigaDevice", file: "gigadevice.jpg" },
                  { name: "Intersil", file: "intersil.jpg" },
                ].map((brand) => (
                  <motion.div
                    key={brand.name}
                    whileHover={{ scale: 1.12, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="h-14 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={`/${brand.file}`}
                      alt={brand.name}
                      className="h-10 w-auto max-w-full object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Additional Active Components - Box 3 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ y: { repeat: Infinity, duration: 4.1, ease: "easeInOut" } }}
              whileHover={{ scale: 1.02, y: -15 }}
              className="min-w-[380px] bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 snap-center group"
            >
              <h4 className="text-2xl font-bold text-center text-sky-700 mb-8">Additional Active Components</h4>
              <div className="grid grid-cols-4 gap-6">
                {[
                  { name: "htc", file: "htc.jpg" },
                  { name: "ik", file: "ik.jpg" },
                  { name: "inter", file: "inter.jpg" },
                  { name: "ch", file: "ch.jpg" },
                  { name: "Infineon", file: "infineon.jpg" },
                  { name: "UTC", file: "utc.jpg" },
                  { name: "Sharp", file: "sharp.jpg" },
                  { name: "JHD", file: "jhd.jpg" },
                  { name: "microchip", file: "microchip.jpg" },
                  { name: "vishay", file: "vishay.jpg" },
                  { name: "win", file: "win.jpg" },
                  { name: "wxdh", file: "wxdh.jpg" },
                ].map((brand) => (
                  <motion.div
                    key={brand.name}
                    whileHover={{ scale: 1.12, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="h-14 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={`/${brand.file}`}
                      alt={brand.name}
                      className="h-10 w-auto max-w-full object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Passive Components */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ y: { repeat: Infinity, duration: 3.8, ease: "easeInOut" } }}
              whileHover={{ scale: 1.02, y: -15 }}
              className="min-w-[380px] bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 snap-center group"
            >
              <h4 className="text-2xl font-bold text-center text-sky-700 mb-8">Passive Components</h4>
              <div className="grid grid-cols-4 gap-6">
                {[
                  { name: "Bourns", file: "bourns.jpg" },
                  { name: "Kemet", file: "kemet.jpg" },
                  { name: "Yageo", file: "yageo.jpg" },
                  { name: "TDK", file: "tdk.jpg" },
                  { name: "EPCOS", file: "epcos.jpg" },
                  { name: "Watts", file: "watts.jpg" },
                  { name: "HKR", file: "hkr.jpg" },
                  { name: "SAMWHA", file: "samwha.jpg" },
                  { name: "Diotec", file: "diotec.jpg" },
                  { name: "CDIL", file: "cdil.jpg" },
                  { name: "HEL", file: "hel.jpg" },
                  { name: "Royalohm", file: "royalohm.jpg" },
                  { name: "Vishay", file: "vishay.jpg" },
                  { name: "Jwco", file: "jwco.jpg" },
                ].map((brand) => (
                  <motion.div
                    key={brand.name}
                    whileHover={{ scale: 1.12, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="h-14 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={`/${brand.file}`}
                      alt={brand.name}
                      className="h-10 w-auto max-w-full object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Modules */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" } }}
              whileHover={{ scale: 1.02, y: -15 }}
              className="min-w-[380px] bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 snap-center group"
            >
              <h4 className="text-2xl font-bold text-center text-sky-700 mb-8">Modules</h4>
              <div className="grid grid-cols-4 gap-6">
                {[
                  { name: "KDS", file: "kds.jpg" },
                  { name: "YXC", file: "yxc.jpg" },
                  { name: "Littelfuse", file: "littelfuse.jpg" },
                  { name: "X2", file: "x2.jpg" },
                  { name: "ESPRESSIF", file: "espressif.jpg" },
                  { name: "RaspberryPi", file: "raspberrypi.jpg" },
                  { name: "Ai-Thinker", file: "aithinker.jpg" },
                  { name: "SIMCom", file: "simcom.jpg" },
                  { name: "Arduino", file: "arduino.jpg" },
                ].map((brand) => (
                  <motion.div
                    key={brand.name}
                    whileHover={{ scale: 1.12, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="h-14 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={`/${brand.file}`}
                      alt={brand.name}
                      className="h-10 w-auto max-w-full object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Cables & Accessories */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ y: { repeat: Infinity, duration: 3.9, ease: "easeInOut" } }}
              whileHover={{ scale: 1.02, y: -15 }}
              className="min-w-[380px] bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 snap-center group"
            >
              <h4 className="text-2xl font-bold text-center text-sky-700 mb-8">Cable Wires, Power Cords & Accessories</h4>
              <div className="grid grid-cols-4 gap-6">
                {[
                  { name: "Burndy", file: "burndy.jpg" },
                  { name: "CommScope", file: "commscope.jpg" },
                  { name: "Belden", file: "belden.jpg" },
                  { name: "AlphaWire", file: "alphawire.jpg" },
                  { name: "Corning", file: "corning.jpg" },
                  { name: "General Cable", file: "generalcable.jpg" },
                  { name: "Lapp Group", file: "lappgroup.jpg" },
                  { name: "Heyco", file: "heyco.jpg" },
                  { name: "HellermanTyton", file: "hellermantyton.jpg" },
                  { name: "Gardner Bender", file: "gardnerbender.jpg" },
                  { name: "Lake Cable", file: "lakecable.jpg" },
                  { name: "Kalas", file: "kalas.jpg" },
                  { name: "Ideal", file: "ideal.jpg" },
                  { name: "Harbour", file: "harbour.jpg" },
                ].map((brand) => (
                  <motion.div
                    key={brand.name}
                    whileHover={{ scale: 1.12, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="h-14 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={`/${brand.file}`}
                      alt={brand.name}
                      className="h-10 w-auto max-w-full object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}