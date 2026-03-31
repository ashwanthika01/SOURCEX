"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { Check, Truck, Shield, TrendingUp, Layers, ArrowRight } from "lucide-react";

const servicesData = [
  {
    id: 1,
    title: "End-to-End BOM Fulfillment",
    description: "Complete procurement management for your entire Bill of Materials from sourcing to final delivery.",
    points: ["Volume-Based Discounts", "Faster Quoting & Lead Times", "Full Traceability"],
    icon: TrendingUp,
    color: "#1e40af",
    learnMore: "Explore Full BOM Process",
  },
  {
    id: 2,
    title: "Resilient Supply Solutions",
    description: "Risk-mitigated sourcing with multi-source strategies to ensure uninterrupted production.",
    points: ["Passive & Active Components", "Semiconductors & ICs", "Circuit Protection"],
    icon: Layers,
    color: "#0369a1",
    learnMore: "See Risk Strategies",
  },
  {
    id: 3,
    title: "Quality Assurance",
    description: "Rigorous multi-stage testing and verification for every single component.",
    points: ["Global Certifications", "Authenticity Guaranteed", "Traceable Inventory"],
    icon: Shield,
    color: "#1e3a8a",
    learnMore: "Inside Our QA Process",
  },
  {
    id: 4,
    title: "Strategic Partnership",
    description: "Long-term collaboration with exclusive benefits and dedicated support.",
    points: ["Exclusive 10% Discount", "Rapid Fulfillment", "Dedicated Support"],
    icon: Truck,
    color: "#2563eb",
    learnMore: "Start Partnering",
  },
];

export default function NServices() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#f8fbff] py-24 overflow-hidden relative">
      {/* Background Orbs & Floating Particles */}
      <motion.div className="absolute inset-0 pointer-events-none">
        {/* Main Large Orbs */}
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, 20, 0], scale: [1, 1.22, 1] }}
          transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-20 w-[520px] h-[520px] bg-blue-200/25 blur-[140px] rounded-full"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1.08, 0.95, 1.08] }}
          transition={{ duration: 45, repeat: Infinity, delay: 18 }}
          className="absolute bottom-40 right-24 w-[460px] h-[460px] bg-sky-200/20 blur-[130px] rounded-full"
        />

        {/* Small Floating Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-300 rounded-full opacity-40"
            animate={{
              x: [0, (i + 1) * 30, 0],
              y: [0, (i + 1) * 20, 0],
              scale: [0.6, 1, 0.6],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 18 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i / 2,
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-blue-100 rounded-full mb-6"
          >
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping" />
            <span className="uppercase tracking-[3px] text-sm font-semibold text-blue-700">Our Expertise</span>
          </motion.div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-4 text-gray-950">
            Services That{" "}
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent font-bold drop-shadow-sm">
              Move
            </span>{" "}
            Your Business Forward
          </h1>
        </div>

        {/* Bento Grid with Enhanced Animations */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[320px]">
          <ServiceCard service={servicesData[0]} expandedId={expandedId} setExpandedId={setExpandedId} className="md:col-span-5 md:row-span-2" delay={0} />
          <ServiceCard service={servicesData[1]} expandedId={expandedId} setExpandedId={setExpandedId} className="md:col-span-7" delay={0.08} />
          <ServiceCard service={servicesData[2]} expandedId={expandedId} setExpandedId={setExpandedId} className="md:col-span-7 md:row-span-2" delay={0.16} />
          <ServiceCard service={servicesData[3]} expandedId={expandedId} setExpandedId={setExpandedId} className="md:col-span-5" delay={0.24} />
        </div>
      </div>

      {/* Final CTA */}
      <div className="mt-28 text-center relative z-10">
        <motion.a
          href="/inquiry-form"
          whileHover={{ scale: 1.06, y: -4 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-4 px-16 py-7 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xl rounded-3xl shadow-2xl transition-all"
        >
          Get Your Custom Quote Now
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </main>
  );
}

// Enhanced Service Card
function ServiceCard({ service, expandedId, setExpandedId, className, delay }: any) {
  const Icon = service.icon;
  const isExpanded = expandedId === service.id;

  return (
    <motion.div
      initial={{ opacity: 0, y: 90, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay, ease: "easeOut" }}
      whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.4, ease: "easeOut" } }}
      className={className}
    >
      <motion.div
        animate={{ boxShadow: ["0 10px 30px -15px rgba(37, 99, 235, 0.15)", "0 25px 50px -15px rgba(37, 99, 235, 0.25)", "0 10px 30px -15px rgba(37, 99, 235, 0.15)"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => setExpandedId(isExpanded ? null : service.id)}
        className="group relative h-full bg-white rounded-3xl border border-blue-100/70 overflow-hidden cursor-pointer hover:border-blue-300 transition-all duration-500 flex flex-col"
      >
        {/* Moving Light Beam */}
        <motion.div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-blue-500 via-50% to-transparent" animate={{ x: ["-180%", "280%"] }} transition={{ duration: 4.8, repeat: Infinity, ease: "linear" }} />

        {/* Icon Section */}
        <div className="flex-1 flex items-center justify-center p-12 relative overflow-hidden">
          <InteractiveFloatingIcon Icon={Icon} color={service.color} />
        </div>

        {/* Content */}
        <div className="px-10 pb-9">
          <h3 className="text-3xl font-semibold text-gray-900 mb-5 tracking-tight text-center">{service.title}</h3>
          <p className="text-gray-600 text-center leading-relaxed mb-9 text-[17px]">{service.description}</p>

          <div className="space-y-5">
            {service.points.map((point: string, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: delay + 0.25 + i * 0.1 }} className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0"><Check size={15} className="text-blue-600" /></div>
                <span className="text-gray-700">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto px-10 py-7 border-t border-blue-100 bg-blue-50/70 flex items-center justify-between text-sm font-medium">
          <span className="text-blue-700 group-hover:text-blue-800 transition-colors">{service.learnMore}</span>
          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ type: "spring", stiffness: 450, damping: 25 }}>
            <ArrowRight className="text-blue-600" size={26} />
          </motion.div>
        </div>

        {/* Expanded Section */}
        {isExpanded && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} transition={{ duration: 0.45, ease: "easeInOut" }} className="px-10 pb-12 bg-blue-50 border-t border-blue-100 text-gray-600 text-[15.5px] leading-relaxed overflow-hidden">
            <motion.div animate={{ x: [-30, 0, -30] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
              This service removes supply chain uncertainty and empowers your engineering team to innovate faster with complete confidence.
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

// Interactive Floating Icon with Orbits
function InteractiveFloatingIcon({ Icon, color }: { Icon: any; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 140, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 140, damping: 28 });
  const rotateX = useTransform(springY, [-60, 60], [20, -20]);
  const rotateY = useTransform(springX, [-60, 60], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.65);
    mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.65);
  };

  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.18 }}
      animate={{ y: [0, -16, 0], rotate: [-2, 2, -2] }}
      transition={{ y: { duration: 3.8, repeat: Infinity }, rotate: { duration: 8, repeat: Infinity } }}
      className="relative"
    >
      <div className="p-12 bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-inner border border-blue-100 relative">
        <Icon size={96} style={{ color }} strokeWidth={1.35} />
      </div>

      {/* Multiple Orbiting Glows */}
      {[0, 1, 2].map((i) => (
        <motion.div key={i} animate={{ rotate: i % 2 === 0 ? 360 : -360 }} transition={{ duration: 18 + i * 8, repeat: Infinity, ease: "linear" }} className={`absolute inset-${i * 4} border border-blue-${200 + i * 50}/40 rounded-[${46 - i * 8}px]`} />
      ))}
    </motion.div>
  );
}
