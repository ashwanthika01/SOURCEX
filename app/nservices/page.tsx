"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Shield, Globe, Zap, Users, Award, Truck } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const services = [
  {
    title: "End-to-End BOM Fulfillment",
    description: "We offer comprehensive procurement solutions, managing the complete Bill of Materials (BOM) to ensure seamless product manufacturing.",
    icon: Globe,
    highlights: [
      "Cost Efficiency and Financial Control",
      "Volume-Based Discounts",
      "Operational Simplicity",
      "Faster Quoting and Lead Times",
      "Quality and Reliability",
      "Full Traceability",
    ],
  },
  {
    title: "Resilient BOM Sourcing",
    description: "We deliver resilient BOM sourcing solutions designed to mitigate supply chain risks and ensure production continuity.",
    icon: Shield,
    highlights: [
      "Passive Components",
      "Semiconductors (Active Components)",
      "Interconnects & Electromechanical",
      "Circuit Protection",
      "Mechanical Components",
      "Board Material",
    ],
  },
  {
    title: "Multi-Source Risk Mitigation",
    description: "Strategic multi-sourcing and alternative component strategies to protect your production from disruptions.",
    icon: Zap,
    highlights: [
      "Global Supplier Network",
      "Second Source Validation",
      "Obsolescence Management",
      "Buffer Stock Strategies",
      "Supplier Performance Monitoring",
      "Emergency Sourcing & Rapid Replacement",
    ],
  },
  {
    title: "Quality & Traceability",
    description: "Rigorous testing, authentication, and full supply chain traceability for every component.",
    icon: Award,
    highlights: [
      "Authenticity Verification",
      "Global Certifications",
      "Batch & Date Code Tracking",
      "Counterfeit Prevention",
    ],
  },
  {
    title: "Logistics & Delivery",
    description: "Optimized logistics ensuring timely and cost-effective delivery worldwide.",
    icon: Truck,
    highlights: [
      "Consolidated Shipments",
      "Express & Economy Options",
      "Real-time Tracking",
      "Flexible Delivery Schedules",
    ],
  },
  {
    title: "Strategic Partnership",
    description: "Long-term collaboration with dedicated support and exclusive benefits for growing businesses.",
    icon: Users,
    highlights: [
      "Dedicated Account Manager",
      "Priority Support",
      "Custom Pricing Agreements",
      "Technical Consultation",
    ],
  },
];

export default function ServicesPage() {
  const router = useRouter();

  const goToForm = () => {
    // Redirect to homepage (or page where footer exists) and scroll
    router.push("/#inquiry-form");
  };

  return (
    <>
      <main
        className="relative min-h-screen bg-fixed bg-cover bg-center bg-white/70 bg-blend-lighten"
        style={{ backgroundImage: "url('/bg.jpeg')" }}
      >
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional BOM Sourcing <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                You Can Rely On
              </span>
            </h1>
            <p className="text-xl text-blue-100">
              From resilient sourcing to complete BOM fulfillment.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Icon size={50} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                {service.highlights.map((h, i) => (
                  <div key={i} className="flex gap-2 text-sm">
                    <Check size={16} className="text-green-500" />
                    {h}
                  </div>
                ))}
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="bg-blue-950 text-white py-20 text-center">
          <h2 className="text-4xl mb-6">Ready to Strengthen Your Supply Chain?</h2>

          <motion.button
            onClick={goToForm}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-5 bg-white text-blue-950 rounded-2xl font-semibold flex items-center gap-3 mx-auto"
          >
            Request a Custom BOM Quote
            <ArrowRight />
          </motion.button>
        </div>
      </main>
    </>
  );
}
