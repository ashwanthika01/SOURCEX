"use client";

import { motion, useInView, type Variants } from "framer-motion";
import {
  Check,
  ArrowRight,
  Shield,
  Globe,
  Zap,
  Users,
  Award,
  Truck,
  ChevronRight,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useRef, useState } from "react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const categories = [
  { num: "01", name: "Passive Components",               image: "/passive.jpg",    desc: "Resistors, capacitors, inductors — precision-graded from leading global manufacturers." },
  { num: "02", name: "Semiconductors",                   image: "/semi.jpg",       desc: "ICs, MOSFETs, microcontrollers, FPGAs — authenticated active components." },
  { num: "03", name: "Interconnects & Electromechanical",image: "/intercon.jpeg",  desc: "Connectors, cables, switches, relays for high-reliability applications." },
  { num: "04", name: "Circuit Protection",               image: "/circuit.jpg",    desc: "TVS diodes, fuses, varistors — protecting your designs against surges." },
  { num: "05", name: "Mechanical Components",            image: "/mechanical.jpg", desc: "Heat sinks, standoffs, enclosures — for complete product builds." },
  { num: "06", name: "Board Material",                   image: "/pcb.png",        desc: "PCB substrates, laminates, solder paste — manufacturing-ready materials." },
];

const services = [
  {
    num: "01",
    title: "End-to-End BOM Fulfillment",
    description:
      "We manage the complete Bill of Materials procurement cycle — from supplier identification and qualification through to on-time delivery. One partner, full accountability.",
    icon: Globe,
    highlights: [
      { label: "Cost Efficiency & Financial Control", sub: "Volume-based pricing with full transparency" },
      { label: "Volume-Based Discounts",              sub: "Tiered pricing that scales with your orders" },
      { label: "Operational Simplicity",              sub: "Single point of contact for all components" },
      { label: "Faster Quoting & Lead Times",         sub: "Quotes within 48 hours, delivery on schedule" },
      { label: "Quality & Reliability",               sub: "Only verified, authenticated components ship" },
      { label: "Full Traceability",                   sub: "Batch codes and date codes tracked end-to-end" },
    ],
  },
  {
    num: "02",
    title: "Resilient BOM Sourcing",
    description:
      "Supply chain disruptions are inevitable. Our multi-source strategy and global supplier network ensure your production never stops — regardless of market conditions.",
    icon: Shield,
    highlights: [
      { label: "Global Supplier Network",         sub: "500+ vetted suppliers across 30+ countries" },
      { label: "Second Source Validation",        sub: "Qualified alternates for every critical line" },
      { label: "Obsolescence Management",         sub: "Last-time-buy alerts and EOL planning" },
      { label: "Buffer Stock Strategies",         sub: "Strategic inventory holding for critical parts" },
      { label: "Supplier Performance Monitoring", sub: "Continuous quality and delivery tracking" },
      { label: "Emergency Sourcing",              sub: "Rapid response within 24–72 hours" },
    ],
  },
  {
    num: "03",
    title: "Quality & Traceability",
    description:
      "Every component we ship is authenticated, tested, and traceable. We enforce zero-tolerance counterfeit prevention with rigorous inspection at every stage.",
    icon: Award,
    highlights: [
      { label: "Authenticity Verification",  sub: "Multi-step authentication before any shipment" },
      { label: "Global Certifications",      sub: "ISO, RoHS, REACH compliant suppliers" },
      { label: "Batch & Date Code Tracking", sub: "Full lot genealogy for every line item" },
      { label: "Counterfeit Prevention",     sub: "IDEA-STD-1010 inspection standards applied" },
    ],
  },
  {
    num: "04",
    title: "Multi-Source Risk Mitigation",
    description:
      "Strategic multi-sourcing and alternative component strategies to protect your production from any disruption — geopolitical, logistical, or market-driven.",
    icon: Zap,
    highlights: [
      { label: "Alternative Part Identification", sub: "Drop-in replacements validated to spec" },
      { label: "Cross-Reference Analysis",        sub: "Comprehensive BOM cross-referencing" },
      { label: "Risk Scoring",                    sub: "Per-line-item supply risk assessment" },
      { label: "Dual-Source Agreements",          sub: "Guaranteed secondary supply contracts" },
    ],
  },
  {
    num: "05",
    title: "Logistics & Delivery",
    description:
      "Optimised logistics ensuring timely, cost-effective delivery — whether you need consolidated shipments or express delivery for urgent production requirements.",
    icon: Truck,
    highlights: [
      { label: "Consolidated Shipments",      sub: "Bundle entire BOMs into single deliveries" },
      { label: "Express & Economy Options",   sub: "Flexible tiers to match your timeline" },
      { label: "Real-Time Tracking",          sub: "Live shipment visibility from warehouse to door" },
      { label: "Flexible Delivery Schedules", sub: "JIT delivery aligned to your production calendar" },
    ],
  },
  {
    num: "06",
    title: "Strategic Partnership",
    description:
      "For growing businesses that need more than a supplier — a dedicated partner invested in your success with custom pricing and exclusive support structures.",
    icon: Users,
    highlights: [
      { label: "Dedicated Account Manager", sub: "One expert contact, always available" },
      { label: "Priority Support",          sub: "Front-of-queue access for urgent requests" },
      { label: "Custom Pricing Agreements", sub: "Negotiated rates aligned to your volume" },
      { label: "Technical Consultation",    sub: "Engineering support on component selection" },
    ],
  },
];

const stats = [
  { value: "10,000", suffix: "+", label: "Components Delivered" },
  { value: "500",    suffix: "+", label: "Brands We Work With" },
  { value: "15",     suffix: "+", label: "Years in Business" },
  { value: "48",     suffix: "hr", label: "Quote Turnaround" },
];

const process = [
  { step: "01", title: "Submit BOM",        desc: "Upload your Bill of Materials or project brief securely." },
  { step: "02", title: "Quote & Review",    desc: "We return a competitive, itemised quote within 48 hours." },
  { step: "03", title: "Source & Verify",   desc: "Components sourced, authenticated, and inspection-cleared." },
  { step: "04", title: "Pack & Ship",       desc: "Consolidated, tracked shipment dispatched on schedule." },
  { step: "05", title: "Deliver & Support", desc: "On-time delivery with full after-care and traceability docs." },
];

const whyPoints = [
  "Hosur, Tamil Nadu — India's electronics hub",
  "Direct relationships with 500+ verified brands",
  "Zero-counterfeit policy, always",
  "Transparent pricing, no hidden charges",
];

const whyStats = [
  { val: "10,000+", label: "Components Delivered" },
  { val: "500+",    label: "Verified Brands" },
  { val: "15+",     label: "Years Experience" },
  { val: "48hr",    label: "Quote Turnaround" },
];

/* ─────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */
function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="block w-8 h-px bg-blue-500" />
      <span className="text-[11px] font-medium tracking-[2.5px] uppercase text-blue-400">
        {children}
      </span>
    </div>
  );
}

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function ServicesPage() {
  const router = useRouter();
  const [activeService, setActiveService] = useState(0);

  const goToFooter = () => router.push("/#contact-form");

  return (
    <main className="bg-slate-950 text-white overflow-x-hidden">

      {/* ── HERO ─────────────────────────────── */}
      <section className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,179,237,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(99,179,237,.8) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Radial glow */}
        <div
          className="absolute -top-60 -right-60 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(59,130,246,.1) 0%,transparent 70%)" }}
        />
        {/* Left accent */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px]"
          style={{ background: "linear-gradient(to bottom,transparent,#3b82f6 30%,#3b82f6 70%,transparent)" }}
        />

        <div className="relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTag>Supply Chain Excellence</SectionTag>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] mb-7 tracking-tight"
          >
            Professional BOM Sourcing{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              You Can Rely On
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl leading-relaxed mb-12 max-w-2xl text-blue-100/70 font-light"
          >
            From resilient sourcing to complete BOM fulfillment — we eliminate
            supply chain risks so you can focus on building great products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-6"
          >
            <button
              onClick={goToFooter}
              className="flex items-center gap-3 px-9 py-4 font-semibold text-sm tracking-wider uppercase bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200 hover:-translate-y-0.5 rounded-sm"
            >
              Request a BOM Quote
              <ArrowRight size={16} />
            </button>
            <a
              href="#services"
              className="flex items-center gap-2 text-sm tracking-wider uppercase text-slate-400 hover:text-white transition-colors duration-200"
            >
              Explore Services
              <ChevronRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────── */}
      <div className="border-t border-b border-blue-900/40 bg-slate-900">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <AnimatedSection key={i}>
              <motion.div
                custom={i}
                variants={fadeUp}
                className="flex flex-col justify-center px-10 py-10 border-r border-blue-900/40 last:border-r-0"
              >
                <div className="text-5xl font-bold leading-none mb-2 tracking-tight">
                  <span className="text-white">{s.value}</span>
                  <span className="text-blue-400">{s.suffix}</span>
                </div>
                <span className="text-xs tracking-widest uppercase text-slate-500">
                  {s.label}
                </span>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* ── WHAT WE OFFER (CATEGORIES) ───────── */}
      <section className="px-6 md:px-16 lg:px-24 py-28 bg-slate-900">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <motion.div variants={fadeUp} custom={0}>
                <SectionTag>What We Source</SectionTag>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-4xl md:text-5xl font-bold leading-tight tracking-tight"
              >
                Comprehensive Component{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Categories
                </span>
              </motion.h2>
            </div>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-base leading-relaxed max-w-sm text-slate-400 font-light"
            >
              Backed by resilient global sourcing strategies and authenticated
              supplier networks across 30+ countries.
            </motion.p>
          </div>
        </AnimatedSection>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "1px", background: "rgba(59,130,246,0.12)" }}
        >
          {categories.map((cat, i) => (
            <AnimatedSection key={i}>
              <motion.div
                variants={fadeUp}
                custom={i}
                className="group relative overflow-hidden cursor-default bg-slate-900"
              >
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top,rgba(15,23,42,0.95) 0%,rgba(15,23,42,0.25) 100%)" }}
                  />
                </div>

                <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="p-8">
                  <span className="text-xs tracking-[2px] mb-3 block text-blue-400">
                    {cat.num}
                  </span>
                  <h3 className="text-xl font-semibold mb-3 leading-snug text-white">
                    {cat.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400 font-light">
                    {cat.desc}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── CORE SERVICES — MOBILE GRID + DESKTOP TABS ───────── */}
      <section id="services" className="px-6 md:px-16 lg:px-24 py-28 bg-slate-950">
        <AnimatedSection>
          <div className="mb-16">
            <motion.div variants={fadeUp} custom={0}>
              <SectionTag>Core Services</SectionTag>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-5xl font-bold leading-tight tracking-tight"
            >
              End-to-End Solutions for{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Electronics Manufacturers
              </span>
            </motion.h2>
          </div>
        </AnimatedSection>

        {/* Mobile Grid View */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="bg-slate-900 border border-blue-900/30 rounded-2xl p-8 hover:border-blue-500/50 transition-all group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-950 rounded-xl border border-blue-800">
                    <Icon size={28} className="text-blue-400" />
                  </div>
                  <div>
                    <span className="text-xs tracking-widest text-blue-400">{svc.num}</span>
                    <h3 className="text-xl font-semibold leading-tight mt-1">{svc.title}</h3>
                  </div>
                </div>

                <p className="text-slate-400 text-[15px] leading-relaxed mb-6">
                  {svc.description}
                </p>

                <ul className="space-y-3 text-sm">
                  {svc.highlights.slice(0, 4).map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-400">
                      <div className="w-1 h-1 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      <span>{h.label}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop Tab Layout (Unchanged) */}
        <div className="hidden lg:flex flex-col lg:flex-row" style={{ border: "1px solid rgba(59,130,246,0.15)" }}>
          {/* LEFT — tab nav */}
          <div
            className="lg:w-80 flex-shrink-0"
            style={{ borderRight: "1px solid rgba(59,130,246,0.15)" }}
          >
            {services.map((svc, i) => (
              <button
                key={i}
                onClick={() => setActiveService(i)}
                className="w-full text-left px-8 py-6 transition-all duration-200"
                style={{
                  borderLeft: `2px solid ${activeService === i ? "#3b82f6" : "transparent"}`,
                  background: activeService === i ? "rgba(59,130,246,0.07)" : "transparent",
                  borderBottom: "1px solid rgba(59,130,246,0.1)",
                }}
              >
                <span
                  className="block text-xs tracking-[2px] mb-1.5"
                  style={{ color: activeService === i ? "#60a5fa" : "#334155" }}
                >
                  {svc.num}
                </span>
                <span
                  className="block text-sm font-medium leading-snug transition-colors duration-200"
                  style={{ color: activeService === i ? "#f1f5f9" : "#64748b" }}
                >
                  {svc.title}
                </span>
              </button>
            ))}
          </div>

          {/* RIGHT — panel */}
          <div className="flex-1 min-h-[480px]">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div key={i} className={activeService === i ? "block h-full" : "hidden"}>
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="p-10 lg:p-14 h-full flex flex-col"
                  >
                    <div
                      className="pb-8 mb-8"
                      style={{ borderBottom: "1px solid rgba(59,130,246,0.15)" }}
                    >
                      <div className="flex items-start gap-5 mb-6">
                        <div
                          className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-blue-950"
                          style={{ border: "1px solid rgba(59,130,246,0.3)" }}
                        >
                          <Icon size={24} strokeWidth={1.4} className="text-blue-400" />
                        </div>
                        <div>
                          <span className="block text-xs tracking-[2px] uppercase mb-2 text-blue-400">
                            Service {svc.num} / {String(services.length).padStart(2, "0")}
                          </span>
                          <h3 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-white">
                            {svc.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-base leading-relaxed max-w-xl text-slate-400 font-light">
                        {svc.description}
                      </p>
                    </div>

                    <div
                      className="grid grid-cols-1 sm:grid-cols-2 gap-px flex-1"
                      style={{ background: "rgba(59,130,246,0.1)" }}
                    >
                      {svc.highlights.map((h, j) => (
                        <div
                          key={j}
                          className="flex items-start gap-4 px-6 py-5 bg-slate-950"
                        >
                          <div className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-blue-500" />
                          <div>
                            <p className="text-sm font-medium mb-0.5 text-white">
                              {h.label}
                            </p>
                            <p className="text-xs leading-relaxed text-slate-500">
                              {h.sub}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <button
                        onClick={goToFooter}
                        className="flex items-center gap-3 text-sm tracking-widest uppercase text-blue-400 hover:text-blue-300 transition-colors duration-200 group/cta font-medium"
                      >
                        <span className="pb-1 border-b border-blue-800 group-hover/cta:border-blue-400 transition-colors duration-200">
                          Request a Quote
                        </span>
                        <ArrowRight
                          size={15}
                          className="transition-transform duration-200 group-hover/cta:translate-x-1"
                        />
                      </button>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────── */}
      <section className="px-6 md:px-16 lg:px-24 py-28 bg-slate-900">
        <AnimatedSection>
          <div className="mb-16">
            <motion.div variants={fadeUp} custom={0}>
              <SectionTag>How It Works</SectionTag>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-5xl font-bold leading-tight tracking-tight"
            >
              From Brief to Delivery —{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                5 Steps
              </span>
            </motion.h2>
          </div>
        </AnimatedSection>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px"
          style={{ background: "rgba(59,130,246,0.12)" }}
        >
          {process.map((p, i) => (
            <AnimatedSection key={i}>
              <motion.div
                variants={fadeUp}
                custom={i}
                className="relative px-8 py-10 group bg-slate-900"
              >
                <div className="text-7xl font-bold leading-none mb-6 select-none text-blue-950">
                  {p.step}
                </div>

                <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <h4 className="text-base font-semibold mb-3 text-white">{p.title}</h4>
                <p className="text-sm leading-relaxed text-slate-400 font-light">{p.desc}</p>

                {i < process.length - 1 && (
                  <div
                    className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10"
                    style={{
                      width: 0, height: 0,
                      borderTop: "7px solid transparent",
                      borderBottom: "7px solid transparent",
                      borderLeft: "9px solid rgba(59,130,246,0.35)",
                    }}
                  />
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── WHY SOURCEX ──────────────────────── */}
      <section className="px-6 md:px-16 lg:px-24 py-28 bg-slate-950">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div variants={fadeUp} custom={0}>
                <SectionTag>Why SourceX</SectionTag>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-4xl md:text-5xl font-bold leading-tight mb-8 tracking-tight"
              >
                One Partner for Your{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Entire Supply Chain
                </span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-base leading-relaxed mb-10 text-slate-400 font-light"
              >
                We specialise in sourcing and delivering high-quality electronic
                components from trusted global manufacturers. From a single resistor
                to a complete BOM, SourceX handles it with the same precision and
                care — backed by 15+ years of deep industry relationships.
              </motion.p>

              {whyPoints.map((point, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i + 3}
                  className="flex items-center gap-4 mb-4"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-blue-950 border border-blue-600">
                    <Check size={11} className="text-blue-400" />
                  </div>
                  <span className="text-sm text-slate-300">{point}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              custom={1}
              className="grid grid-cols-2 gap-px"
              style={{ background: "rgba(59,130,246,0.12)" }}
            >
              {whyStats.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-center px-10 py-12 bg-slate-950"
                >
                  <span className="text-4xl font-bold mb-2 tracking-tight text-blue-400">
                    {item.val}
                  </span>
                  <span className="text-xs tracking-widest uppercase text-slate-500">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── CTA BAND ─────────────────────────── */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800">
        <div className="px-6 md:px-16 lg:px-24 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <p className="text-xs tracking-[2.5px] uppercase mb-3 text-blue-200/70">
              Get Started Today
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-white tracking-tight">
              Ready to Strengthen Your Supply Chain?
            </h2>
            <p className="text-base text-blue-100/70 font-light">
              Let us handle your BOM sourcing end-to-end — with reliability,
              speed, and cost efficiency you can count on.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={goToFooter}
            className="flex-shrink-0 flex items-center gap-4 px-12 py-5 font-semibold text-sm tracking-widest uppercase bg-white text-blue-700 hover:bg-blue-50 transition-all duration-200 rounded-sm shadow-xl"
          >
            Request a Custom BOM Quote
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </section>

    </main>
  );
}