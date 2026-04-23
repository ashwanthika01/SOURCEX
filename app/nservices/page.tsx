"use client";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { Check, ArrowRight, Shield, Globe, Zap, Users, Award, Truck } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "End-to-End BOM Fulfillment",
    description: "We offer comprehensive procurement solutions, managing the complete Bill of Materials (BOM) to ensure seamless product manufacturing.",
    icon: Globe,
    color: "#1e40af",
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
    color: "#0369a1",
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
    color: "#1e3a8a",
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
    color: "#2563eb",
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
    color: "#0e7490",
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
    color: "#1d4ed8",
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

  // ✅ Navigate to footer form (works from any page)
  const goToFooter = () => {
    router.push("/#inquiry-form");
  };
  return (
    <>
    
      <main
  className="relative min-h-screen bg-fixed bg-cover bg-center bg-white/70 bg-blend-lighten"
  style={{
    backgroundImage: "url('/bg.jpeg')",
  }}
>
        
      
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-6">
              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="uppercase tracking-[3px] text-sm font-medium">Supply Chain Excellence</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Professional BOM Sourcing <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                You Can Rely On
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-xl text-blue-100">
              From resilient sourcing to complete BOM fulfillment — we eliminate supply chain risks so you can focus on innovation.
            </p>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive component categories backed by resilient sourcing strategies
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Passive Components", image: "/passive.jpg" },
              { name: "Semiconductors (Active Components)", image: "/semi.jpg" },
              { name: "Interconnects & Electromechanical", image: "/intercon.jpeg" },
              { name: "Circuit Protection", image: "/circuit.jpg" },
              { name: "Mechanical Components", image: "/mechanical.jpg" },
              { name: "Board Material", image: "/pcb.png" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white border border-gray-100 rounded-3xl overflow-hidden hover:border-blue-200 transition-all duration-300 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Services Section */}
        <div className="bg-slate-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-lg text-gray-600">
                End-to-End solutions designed for electronics manufacturers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:border-blue-300 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
                  >
                    <div className="h-56 bg-gradient-to-br from-blue-50 to-white flex items-center justify-center border-b border-gray-100">
                      <div className="p-8 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                        <Icon size={68} className="text-blue-600" strokeWidth={1.6} />
                      </div>
                    </div>

                    <div className="p-9 flex-1 flex flex-col">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                        {service.description}
                      </p>

                      <div className="space-y-3">
                        {service.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <Check className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-700 text-[15.2px]">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-blue-950 text-white py-20">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl font-semibold mb-6">
              Ready to Strengthen Your Supply Chain?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Let us handle your BOM sourcing end-to-end with reliability and cost efficiency.
            </p>

            <motion.a
              onClick={goToFooter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-4 px-14 py-7 bg-white text-blue-950 font-semibold text-lg rounded-2xl hover:bg-blue-50 transition-all shadow-xl"
            >
              Request a Custom BOM Quote
              <ArrowRight size={24} />
            </motion.a>
          </div>
        </div>
      </main>
    </>
  );
}