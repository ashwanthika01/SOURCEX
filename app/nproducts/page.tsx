"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  CircuitBoard,
  Factory,
  ShieldCheck,
  Settings,
  Truck,
  Search,
  ArrowRight,
  Star,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const products = [
  {
    title: "Electronic Components",
    category: "Components",
    description: "ICs, semiconductors, connectors.",
    stock: "In Stock",
    rating: 4.8,
    icon: Cpu,
  },
  {
    title: "PCB Fabrication",
    category: "Manufacturing",
    description: "PCB design and assembly.",
    stock: "Limited",
    rating: 4.6,
    icon: CircuitBoard,
  },
  {
    title: "Industrial Automation",
    category: "Automation",
    description: "PLCs, sensors, control systems.",
    stock: "In Stock",
    rating: 4.7,
    icon: Factory,
  },
  {
    title: "Safety Systems",
    category: "Security",
    description: "Monitoring and protection systems.",
    stock: "Low Stock",
    rating: 4.5,
    icon: ShieldCheck,
  },
  {
    title: "Custom Engineering",
    category: "Engineering",
    description: "Tailored solutions for clients.",
    stock: "On Demand",
    rating: 4.9,
    icon: Settings,
  },
  {
    title: "Logistics",
    category: "Supply",
    description: "Procurement and delivery systems.",
    stock: "Available",
    rating: 4.4,
    icon: Truck,
  },
];

export default function ProductsPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const goToForm = () => {
    router.push("/#inquiry-form");
  };

  const categories = ["All", ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter((p) => {
    return (
      (selectedCategory === "All" || p.category === selectedCategory) &&
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#0b1220] to-black text-white">

      {/* HERO */}
      <section className="py-20 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl" />
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4 relative z-10">
          Product Catalog
        </h1>
        <p className="text-gray-300 relative z-10">
          Explore high-performance engineering products with real-time availability
        </p>
      </section>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* SIDEBAR */}
        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
          <h3 className="font-semibold mb-4 text-lg">Categories</h3>

          <div className="flex flex-col gap-2">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setSelectedCategory(cat)}
                className={`text-left px-3 py-2 rounded-lg transition ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    : "hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="md:col-span-3">

          {/* SEARCH */}
          <div className="flex items-center bg-white/10 backdrop-blur-xl rounded-xl px-4 py-3 border border-white/10 mb-6">
            <Search className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search components, ICs, sensors..."
              className="w-full bg-transparent outline-none text-white placeholder-gray-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => {
              const Icon = product.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-xl hover:border-blue-400/40 transition cursor-pointer group"
                >
                  {/* TOP */}
                  <div className="flex justify-between items-center mb-4">
                    <Icon size={35} className="text-blue-400" />

                    <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                      {product.stock}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition">
                    {product.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-sm text-gray-300 mb-3">
                    {product.description}
                  </p>

                  {/* RATING */}
                  <div className="flex items-center gap-1 text-yellow-400 mb-3">
                    <Star size={14} fill="currentColor" />
                    <span className="text-sm">{product.rating}</span>
                  </div>

                  {/* CATEGORY */}
                  <span className="text-xs text-purple-300 bg-purple-500/20 px-2 py-1 rounded">
                    {product.category}
                  </span>

                  {/* ACTION */}
                  <div className="flex items-center gap-2 mt-4 text-blue-400">
                    View Details <ArrowRight size={16} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Need Custom Components?
        </h2>

        <motion.button
          onClick={goToForm}
          whileHover={{ scale: 1.08 }}
          className="bg-gradient-to-r from-blue-500 to-purple-500 px-10 py-4 rounded-xl font-semibold shadow-lg"
        >
          Request Quote
        </motion.button>
      </section>
    </div>
  );
}
