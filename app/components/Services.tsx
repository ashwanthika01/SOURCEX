"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  TrendingUp,
  Lightbulb,
  HeartHandshake,
  Check,
} from "lucide-react";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

//////////////////////////////////////////////////////////
// DATA
//////////////////////////////////////////////////////////
const services = [
  {
    title: ["End-to-end", "BOM fulfillment"],
    description:
      "Upload your BOM and receive a complete sourcing plan including pricing, lead times and alternatives.",
    points: [
      "Full sourcing plan",
      "Alternate components",
      "Reliable delivery",
    ],
    type: "arrow",
  },
  {
    title: ["Cost-optimized", "sourcing"],
    description:
      "We negotiate with a global supplier network to secure best-in-class pricing without compromising quality.",
    points: ["Best pricing", "Global suppliers", "Quality assurance"],
    type: "bulb",
  },
  {
    title: ["Supply-chain", "resilience"],
    description:
      "Risk analysis, second-source strategies and lifecycle monitoring to keep your lines running.",
    points: ["Risk analysis", "Backup sourcing", "Lifecycle tracking"],
    type: "heart",
  },
];


// SCROLL ANIMATION 

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.96,
  },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 1,
      ease: "easeInOut" as const,
    },
  }),
};

//////////////////////////////////////////////////////////
// MAIN
//////////////////////////////////////////////////////////
export default function Services() {
  return (
    <section
     id = "next"
     className="relative min-h-screen bg-[#f7f9fc] flex items-center px-8 py-24 overflow-hidden">
      
      {/* 🌟 BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 opacity-20 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-yellow-200 opacity-20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-3 gap-24 relative z-10">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}

//////////////////////////////////////////////////////////
// CARD (MAGNETIC + SPOTLIGHT)
//////////////////////////////////////////////////////////
function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 15 });

  const rotateX = useTransform(springY, [-100, 100], [10, -10]);
  const rotateY = useTransform(springX, [-100, 100], [-10, 10]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  function reset() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      custom={index}
      variants={itemVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY }}
      className="relative text-center group"
    >
      {/* ✨ SPOTLIGHT */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background:
            "radial-gradient(circle at center, rgba(59,130,246,0.15), transparent 70%)",
        }}
      />

      {/* ICON */}
      <div className="flex justify-center mb-10">
        {service.type === "arrow" && <ArrowIcon />}
        {service.type === "bulb" && <BulbIcon />}
        {service.type === "heart" && <HeartIcon />}
      </div>

      {/* TITLE */}
      <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
        {service.title[0]} <br /> {service.title[1]}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-500 text-base leading-relaxed mb-10 px-6">
        {service.description}
      </p>

      {/* BULLETS */}
      <div className="space-y-5 text-left inline-block">
        {service.points.map((point: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, i: Key | null | undefined) => (
          <div key={i} className="flex items-center gap-4">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
              <Check size={14} className="text-blue-500" />
            </div>
            <span className="text-lg font-medium text-gray-800">
              {point}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

//////////////////////////////////////////////////////////
// 📈 ARROW (PARALLAX FLOAT)
//////////////////////////////////////////////////////////
function ArrowIcon() {
  return (
    <motion.div
      animate={{ y: [0, -25, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="relative"
    >
      <TrendingUp size={100} className="text-black" />

      <motion.div
        className="absolute inset-0 bg-blue-200 blur-2xl rounded-full"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.div>
  );
}

//////////////////////////////////////////////////////////
// 💡 BULB (ON/OFF)
//////////////////////////////////////////////////////////
function BulbIcon() {
  return (
    <div className="relative">
      <motion.div
        className="absolute inset-0 blur-2xl rounded-full"
        animate={{
          opacity: [0, 0.4, 0.9, 0.4, 0],
          backgroundColor: [
            "#bfdbfe",
            "#fde68a",
            "#fde68a",
            "#93c5fd",
            "#bfdbfe",
          ],
          scale: [0.8, 1.4, 1.6, 1.4, 0.8],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <motion.div
        animate={{
          color: ["#111827", "#111827", "#facc15", "#facc15", "#111827"],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Lightbulb size={100} className="text-black" />
      </motion.div>
    </div>
  );
}

//////////////////////////////////////////////////////////
// ❤️ HEART (PULSE)
//////////////////////////////////////////////////////////
function HeartIcon() {
  return (
    <motion.div
      animate={{ scale: [1, 1.18, 1] }}
      transition={{ duration: 1.2, repeat: Infinity }}
      className="relative"
    >
      <HeartHandshake size={100} className="text-black" />

      <motion.div
        className="absolute inset-0 rounded-full border-2 border-blue-300"
        animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      />
    </motion.div>
  );
}