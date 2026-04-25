"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, type ReactNode } from "react";
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
} from "lucide-react";
import { useRouter } from "next/navigation";

/* ---------------- ANIMATIONS ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

/* ---------------- CORE VALUES ---------------- */
const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    points: [
      "Adopting modern technologies",
      "Creative problem solving",
      "Continuous improvement mindset",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    points: [
      "Consistent product quality",
      "Trusted global sourcing",
      "Secure and transparent processes",
    ],
  },
  {
    icon: Users,
    title: "Customer Focus",
    points: [
      "Understanding client needs",
      "Fast and responsive support",
      "Long-term partnerships",
    ],
  },
];

/* ---------------- 3D CARD ---------------- */
function TiltCard({ children }: { children: ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY }}
      whileHover={{ scale: 1.05 }}
      className="group relative p-8 rounded-3xl bg-white border shadow-xl transition overflow-hidden"
    >
      <div className="absolute inset-0 bg-[conic-gradient(at_top,_#0f172a,_#1e3a8a,_#1e293b,_#0f172a)] opacity-30 animate-[spin_40s_linear_infinite]" />
      {children}
    </motion.div>
  );
}

/* ---------------- FEATURES DATA ---------------- */
const features = [
  { icon: Package, title: "Quality Products" },
  { icon: Settings, title: "Design Development" },
  { icon: Globe, title: "Infrastructure" },
  { icon: Monitor, title: "Technical Support" },
  { icon: DollarSign, title: "Multi-currency Billing" },
  { icon: Lightbulb, title: "Innovation" },
  { icon: TrendingUp, title: "Competitive Pricing" },
  { icon: Headphones, title: "Customer Service" },
  { icon: Share2, title: "80+ Supplier Lines" },
  { icon: Truck, title: "JIT Deliveries" },
];

export default function AboutPage() {
  const router = useRouter();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 30 });
  const smoothY = useSpring(mouseY, { damping: 30 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const words = "Future Ready Tech Sourcing".split(" ");

  return (
    <main className="bg-white text-black overflow-hidden">

      {/* GLOW */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[conic-gradient(at_top,_#e0f2fe,_#eef2ff,_#f0f9ff,_#e0f2fe)] opacity-5 animate-[spin_30s_linear_infinite]" />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-5xl mx-auto px-6"
        >
          <motion.span className="px-6 py-2 border border-white/20 rounded-full bg-white/10 text-blue-200 text-sm">
            ABOUT SOURCEX
          </motion.span>

          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="mr-3 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <p className="mt-6 text-blue-200 max-w-xl mx-auto">
            We combine innovation, sourcing expertise, and reliability to help businesses scale faster.
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => router.push("/#inquiry-form")}
            className="mt-8 px-8 py-3 bg-white text-blue-600 rounded-xl"
          >
            Get Started <ArrowRight className="inline ml-2" />
          </motion.button>

          <div className="w-20 h-1 bg-blue-400 mx-auto mt-10 rounded-full"></div>
        </motion.div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[400px] lg:h-auto"
          >
            <img
              src="/about.webp"
              alt="tech"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            className="bg-black text-white p-10 md:p-14 flex flex-col justify-center"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-6">
              What We Offer
            </motion.h2>

            <ul className="space-y-4 text-zinc-300 text-lg">
              {[
                "Dedicated support for low to high-volume production",
                "Industry-certified manufacturing environments",
                "Secure and scalable device programming",
                "End-to-end sourcing & integration",
                "Global delivery with seamless logistics",
              ].map((item, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 bg-blue-500 rounded-full" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              onClick={() => router.push("/#inquiry-form")}
              className="mt-8 w-fit px-6 py-3 bg-white text-black rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-500 hover:text-white transition"
            >
              Start a Project <ArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* CORE VALUES */}
      {/* CORE VALUES */}
<section className="py-20 px-6 mt-10">
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
    {coreValues.map((item, i) => {
      const Icon = item.icon;
      return (
        <motion.div
          key={i}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="group relative p-8 rounded-3xl bg-white border shadow-md hover:shadow-xl transition-all"
        >
          {/* subtle hover glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/0 via-blue-200/40 to-indigo-100/0 opacity-0 group-hover:opacity-100 transition blur-xl rounded-3xl" />

          <Icon className="text-blue-600 mb-6 relative z-10" size={40} />

          <h3 className="text-2xl font-bold mb-4 relative z-10">
            {item.title}
          </h3>

          <ul className="text-zinc-500 space-y-2 text-left relative z-10">
            {item.points.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      );
    })}
  </div>
</section>

      {/* FEATURES */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Delivering Solutions</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Powerful capabilities that drive innovation, efficiency, and scalability.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-2xl border shadow-sm text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-blue-50 flex items-center justify-center rounded-xl">
                  <Icon className="text-blue-600" />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* CTA (UPDATED GRADIENT) */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">Let’s Build Together</h2>

        <motion.button
          whileHover={{ scale: 1.08 }}
          onClick={() => router.push("/#inquiry-form")}
          className="bg-white text-blue-600 px-8 py-3 rounded-xl"
        >
          Get a Quote <ArrowRight className="inline ml-2" />
        </motion.button>
      </section>
    </main>
  );
}