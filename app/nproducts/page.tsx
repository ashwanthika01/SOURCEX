"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  CircuitBoard,
  Factory,
  ShieldCheck,
  Settings,
  Truck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const products = [
  {
    title: "Electronic Components",
    description: "Premium semiconductors, connectors, ICs, relays, and precision passive components engineered for demanding industrial environments.",
    icon: Cpu,
  },
  {
    title: "PCB Fabrication & Assembly",
    description: "High-reliability PCB manufacturing and turnkey assembly with stringent quality control and full traceability.",
    icon: CircuitBoard,
  },
  {
    title: "Industrial Automation",
    description: "Advanced control systems, sensors, PLCs, and smart automation solutions for maximum efficiency and uptime.",
    icon: Factory,
  },
  {
    title: "Safety & Protection Systems",
    description: "Industrial-grade safety equipment, surge protection, and environmental monitoring for secure operations.",
    icon: ShieldCheck,
  },
  {
    title: "Custom Engineering Solutions",
    description: "Bespoke product development, value engineering, and specialized sourcing tailored to your requirements.",
    icon: Settings,
  },
  {
    title: "Supply Chain & Logistics",
    description: "End-to-end procurement, strategic inventory management, and reliable global logistics support.",
    icon: Truck,
  },
];

export default function ProductsPage() {
  const router = useRouter();

  const goToForm = () => {
    router.push("/#inquiry-form");
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative bg-[#0A1428] text-white py-32 md:py-44 min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-semibold mb-6">
            Precision Components.<br />
            <span className="text-blue-300">Engineered for Excellence</span>
          </h1>

          <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-12">
            Delivering high-performance electronic and engineering solutions with reliability.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="#products"
              className="bg-white text-[#0A1428] px-10 py-5 rounded-2xl font-semibold"
            >
              Explore Portfolio
            </Link>

            {/* ✅ UPDATED BUTTON */}
            <motion.button
              onClick={goToForm}
              whileHover={{ scale: 1.05 }}
              className="border-2 border-white px-10 py-5 rounded-2xl font-semibold"
            >
              Request Consultation
            </motion.button>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div key={index} className="p-8 border rounded-2xl shadow">
                <Icon size={40} className="mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 text-center">
        <h2 className="text-4xl font-semibold mb-6">
          Ready to Source Smarter?
        </h2>

        <p className="text-lg text-gray-600 mb-10">
          Connect with our experts and get your custom BOM quote.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          
          {/* ✅ MAIN FIXED BUTTON */}
          <motion.button
            onClick={goToForm}
            whileHover={{ scale: 1.05 }}
            className="bg-[#0A1428] text-white px-12 py-5 rounded-2xl font-semibold flex items-center gap-3"
          >
            Request a Custom Quote
            <ArrowRight />
          </motion.button>

          <Link
            href="tel:+919876543210"
            className="border-2 border-[#0A1428] px-12 py-5 rounded-2xl font-semibold"
          >
            Schedule a Call
          </Link>
        </div>
      </section>
    </div>
  );
}
