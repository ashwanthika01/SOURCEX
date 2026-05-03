"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ShieldCheck,
  Lightbulb,
  ArrowRight,
  Package,
  Settings,
  Globe,
  Monitor,
  DollarSign,
  TrendingUp,
  Headphones,
  Share2,
  Truck,
  Users,
  ChevronRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

/* ─────────────────────────────────────────
   DESIGN SYSTEM — Tata Electronics palette
   Deep navy · steel charcoal · electric blue
───────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 48, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

/* ─── Animated counter ─── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(to / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(start);
    }, 20);
    return () => clearInterval(timer);
  }, [inView, to]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Core values ─── */
const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    accent: "#1479F5",
    points: [
      "Adopting modern technologies",
      "Creative problem solving",
      "Continuous improvement mindset",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    accent: "#1479F5",
    points: [
      "Consistent product quality",
      "Trusted global sourcing",
      "Secure and transparent processes",
    ],
  },
  {
    icon: Users,
    title: "Customer Focus",
    accent: "#1479F5",
    points: [
      "Understanding client needs",
      "Fast and responsive support",
      "Long-term partnerships",
    ],
  },
];

/* ─── Features ─── */
const features = [
  { icon: Package,    title: "Quality Products" },
  { icon: Settings,   title: "Design Development" },
  { icon: Globe,      title: "Infrastructure" },
  { icon: Monitor,    title: "Technical Support" },
  { icon: DollarSign, title: "Multi-currency Billing" },
  { icon: Lightbulb,  title: "Innovation" },
  { icon: TrendingUp, title: "Competitive Pricing" },
  { icon: Headphones, title: "Customer Service" },
  { icon: Share2,     title: "80+ Supplier Lines" },
  { icon: Truck,      title: "JIT Deliveries" },
];

/* ─── Stats ─── */
const stats = [
  { value: 10000, suffix: "+", label: "Components Delivered" },
  { value: 500,   suffix: "+", label: "Brands We Work With" },
  { value: 15,    suffix: "+", label: "Years in Business" },
  { value: 80,    suffix: "+", label: "Supplier Lines" },
];

/* ══════════════════════════════════════════
   PAGE
══════════════════════════════════════════ */
export default function AboutPage() {
  const router = useRouter();

  /* cursor glow */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 30 });
  const smoothY = useSpring(mouseY, { damping: 30 });

  useEffect(() => {
    const move = (e: MouseEvent) => { mouseX.set(e.clientX); mouseY.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <main
      style={{ fontFamily: "'Outfit', sans-serif" }}
      className="bg-[#050D1A] text-white overflow-hidden"
    >
      {/* ── Tata-style global font import ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Outfit:wght@300;400;500;600&display=swap');

        :root {
          --navy:   #050D1A;
          --steel:  #0A1828;
          --panel:  #0F2235;
          --blue:   #1479F5;
          --blue:   #1479F5;
          --white:  #EEF2F7;
          --muted:  rgba(238,242,247,0.55);
          --border: rgba(0,196,180,0.15);
        }

        .display { font-family: 'Rajdhani', sans-serif; }
        .blue-line::after {
          content: '';
          display: block;
          width: 52px;
          height: 3px;
          background: var(--blue);
          margin-top: 14px;
        }
        .blue-line-center::after {
          content: '';
          display: block;
          width: 52px;
          height: 3px;
          background: var(--blue);
          margin: 14px auto 0;
        }
        .grid-texture {
          background-image:
            linear-gradient(rgba(0,196,180,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,196,180,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
        }
        .clip-diagonal-rev {
          clip-path: polygon(0 6%, 100% 0, 100% 100%, 0 100%);
        }
        .card-border {
          border: 1px solid var(--border);
          background: linear-gradient(135deg, rgba(15,34,53,0.9) 0%, rgba(10,24,40,0.6) 100%);
          backdrop-filter: blur(12px);
        }
        .feature-card:hover .feat-icon { color: var(--blue); }
        .tag {
          font-family: 'Rajdhani', sans-serif;
          font-size: 11px;
          letter-spacing: 3px;
          font-weight: 600;
          color: var(--blue);
          text-transform: uppercase;
        }
      `}</style>

      {/* ── cursor glow ── */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-[480px] h-[480px] rounded-full blur-[140px] z-0"
        style={{
          x: smoothX, y: smoothY,
          translateX: "-50%", translateY: "-50%",
          background: "radial-gradient(circle, rgba(0,196,180,0.07) 0%, transparent 70%)",
        }}
      />

      {/* ══ HERO ══ */}
      <section
        className="relative clip-diagonal grid-texture pb-36 pt-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #050D1A 0%, #081628 60%, #0A1E35 100%)" }}
      >
        {/* Geometric accent lines */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10"
          style={{
            background: "conic-gradient(from 200deg at 80% 20%, transparent 0deg, #1479F5 10deg, transparent 30deg)",
          }}
        />
        <div className="absolute bottom-0 left-0 w-px h-3/4 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent" />
        <div className="absolute top-20 left-[12%] w-24 h-px bg-blue-400/20" />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12"
        >
          <motion.p variants={fadeUp} className="tag mb-6">About SourceX</motion.p>

          <motion.h1
            variants={fadeUp}
            className="display text-5xl md:text-7xl font-bold leading-[1.05] mb-6 max-w-3xl"
            style={{ color: "#EEF2F7" }}
          >
            Future Ready<br />
            <span style={{ color: "#1479F5" }}>Tech Sourcing</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="w-14 h-[3px] mb-8" style={{ background: "#1479F5" }} />

          <motion.p variants={fadeUp} className="text-base md:text-lg max-w-xl leading-relaxed mb-10" style={{ color: "rgba(238,242,247,0.6)" }}>
            We combine innovation, sourcing expertise, and reliability to help
            businesses scale faster — from prototype to global production.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <button
              onClick={() => router.push("/#inquiry-form")}
              className="display flex items-center gap-2 px-7 py-3 font-semibold text-sm tracking-widest uppercase transition-all duration-300"
              style={{
                background: "#1479F5",
                color: "#050D1A",
                clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#1479F5")}
              onMouseLeave={e => (e.currentTarget.style.background = "#1479F5")}
            >
              Get Started <ArrowRight size={16} />
            </button>
            <button
              onClick={() => router.push("/nproducts")}
              className="display flex items-center gap-2 px-7 py-3 font-semibold text-sm tracking-widest uppercase border transition-all duration-300 hover:border-blue-400"
              style={{ borderColor: "rgba(0,196,180,0.35)", color: "#EEF2F7" }}
            >
              Our Products <ChevronRight size={16} />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ══ STATS BAR ══ */}
      <section className="relative z-10 -mt-1" style={{ background: "#0A1828", borderTop: "1px solid rgba(0,196,180,0.15)", borderBottom: "1px solid rgba(0,196,180,0.15)" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="display text-4xl md:text-5xl font-bold" style={{ color: "#1479F5" }}>
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm uppercase tracking-widest" style={{ color: "rgba(238,242,247,0.5)", fontFamily: "'Rajdhani', sans-serif", fontSize: "11px", letterSpacing: "2px" }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ WHAT WE OFFER ══ */}
      <section className="py-24 px-6 lg:px-12" style={{ background: "#050D1A" }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-0 overflow-hidden"
          style={{ border: "1px solid rgba(0,196,180,0.12)" }}>

          {/* Image panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative min-h-[380px] overflow-hidden"
          >
            <img src="/about.webp" alt="SourceX Operations" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 60%, #050D1A)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #050D1A 0%, transparent 40%)" }} />
            {/* Corner accent */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2" style={{ borderColor: "#1479F5" }} />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2" style={{ borderColor: "#1479F5" }} />
          </motion.div>

          {/* Content panel */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-10 md:p-14 flex flex-col justify-center"
            style={{ background: "#0A1828" }}
          >
            <motion.p variants={fadeUp} className="tag mb-4">What We Offer</motion.p>
            <motion.h2 variants={fadeUp} className="display text-3xl md:text-4xl font-bold mb-3 blue-line" style={{ color: "#EEF2F7" }}>
              End-to-End Sourcing<br />Excellence
            </motion.h2>

            <ul className="mt-8 space-y-5">
              {[
                "Dedicated support for low to high-volume production",
                "Industry-certified manufacturing environments",
                "Secure and scalable device programming",
                "End-to-end sourcing & integration",
                "Global delivery with seamless logistics",
              ].map((item, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-start gap-4">
                  <span className="mt-2 flex-shrink-0 w-[6px] h-[6px] rounded-none rotate-45" style={{ background: "#1479F5" }} />
                  <span style={{ color: "rgba(238,242,247,0.7)" }}>{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              variants={fadeUp}
              onClick={() => router.push("/ncontact")}
              className="display mt-10 w-fit flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-widest transition-all duration-300"
              style={{
                background: "transparent",
                color: "#1479F5",
                border: "1px solid rgba(0,196,180,0.4)",
                clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#1479F5";
                e.currentTarget.style.color = "#050D1A";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#1479F5";
              }}
            >
              Start a Project <ArrowRight size={15} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ══ CORE VALUES ══ */}
      <section className="py-24 px-6 lg:px-12 grid-texture" style={{ background: "#0A1828" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="tag mb-4">Our Foundation</p>
            <h2 className="display text-4xl md:text-5xl font-bold blue-line-center" style={{ color: "#EEF2F7" }}>
              Built on Core Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {coreValues.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.7 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="card-border p-8 relative overflow-hidden group transition-all duration-300"
                >
                  {/* top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: item.accent, opacity: 0.6 }} />
                  {/* corner mark */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t border-r opacity-30 group-hover:opacity-100 transition-all duration-300" style={{ borderColor: item.accent }} />

                  <div className="w-12 h-12 flex items-center justify-center mb-6" style={{ background: `${item.accent}18`, border: `1px solid ${item.accent}30` }}>
                    <Icon size={22} style={{ color: item.accent }} />
                  </div>

                  <h3 className="display text-2xl font-bold mb-5" style={{ color: "#EEF2F7" }}>{item.title}</h3>

                  <ul className="space-y-3">
                    {item.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm" style={{ color: "rgba(238,242,247,0.6)" }}>
                        <ChevronRight size={14} className="mt-0.5 flex-shrink-0" style={{ color: item.accent }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ CAPABILITIES ══ */}
      <section className="py-24 px-6 lg:px-12" style={{ background: "#050D1A" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="tag mb-4">Capabilities</p>
            <h2 className="display text-4xl md:text-5xl font-bold blue-line" style={{ color: "#EEF2F7" }}>
              Delivering Solutions
            </h2>
            <p className="mt-8 max-w-xl" style={{ color: "rgba(238,242,247,0.55)" }}>
              Powerful capabilities that drive innovation, efficiency, and scalability across every stage of your supply chain.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {features.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -4, borderColor: "rgba(0,196,180,0.4)" }}
                  className="feature-card group p-6 text-center transition-all duration-300 cursor-default"
                  style={{
                    background: "#0A1828",
                    border: "1px solid rgba(0,196,180,0.1)",
                  }}
                >
                  <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center" style={{ background: "rgba(0,196,180,0.08)" }}>
                    <Icon size={18} className="feat-icon transition-colors duration-300" style={{ color: "rgba(238,242,247,0.5)" }} />
                  </div>
                  <p className="display text-sm font-semibold tracking-wide" style={{ color: "rgba(238,242,247,0.75)" }}>{item.title}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ══ INDUSTRIES ══ */}
      <section className="py-20 px-6 lg:px-12" style={{ background: "#0A1828", borderTop: "1px solid rgba(0,196,180,0.08)" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="tag mb-4">Industries We Serve</p>
            <h2 className="display text-4xl font-bold blue-line-center" style={{ color: "#EEF2F7" }}>
              Powering Innovation
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(0,196,180,0.1)" }}>
            {[
              { name: "Industrial Automation", desc: "Reliable components for robotics and smart factories." },
              { name: "Automotive & EV",        desc: "Solutions for EV systems and vehicle control." },
              { name: "Consumer Electronics",   desc: "Optimized components for smart devices." },
              { name: "IoT Systems",            desc: "Connected low-power embedded solutions." },
            ].map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ background: "#0F2235" }}
                className="p-8 transition-all duration-300"
                style={{ background: "#0A1828" }}
              >
                <p className="display text-3xl font-bold mb-3" style={{ color: "#1479F5" }}>0{i + 1}</p>
                <h3 className="display text-lg font-semibold mb-3" style={{ color: "#EEF2F7" }}>{ind.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(238,242,247,0.5)" }}>{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section
        className="relative py-28 px-6 lg:px-12 overflow-hidden clip-diagonal-rev"
        style={{ background: "linear-gradient(135deg, #081628 0%, #0A1E35 50%, #050D1A 100%)" }}
      >
        {/* Geometric bg */}
        <div className="absolute inset-0 grid-texture opacity-60" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(0,196,180,0.08) 0%, transparent 70%)" }} />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <p className="tag mb-6">Ready to Scale?</p>
          <h2 className="display text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: "#EEF2F7" }}>
            Let's Build<br /><span style={{ color: "#1479F5" }}>Together</span>
          </h2>
          <p className="mb-10 text-base leading-relaxed" style={{ color: "rgba(238,242,247,0.55)" }}>
            Share your BOM or project brief. Our team will respond with a competitive quote within 24–48 hours.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => router.push("/#contact-form")}
              className="display flex items-center gap-2 px-8 py-4 font-semibold text-sm uppercase tracking-widest transition-all duration-300"
              style={{
                background: "#1479F5",
                color: "#050D1A",
                clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 100%, 12px 100%)",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#1479F5")}
              onMouseLeave={e => (e.currentTarget.style.background = "#1479F5")}
            >
              Get a Quote <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}