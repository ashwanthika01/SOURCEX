"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ArrowRight, X, ChevronDown } from "lucide-react";

const categories = [
  "All",
  "ICs & Microcontrollers",
  "Power Management",
  "Protection Devices",
  "Passive Components",
  "Connectors & Interconnects",
];

const products = [
  {
    title: "ARM Cortex M0+ Microcontroller",
    category: "ICs & Microcontrollers",
    stock: "In Stock",
    rating: 4.9,
    description: "High-performance 32-bit MCU for embedded applications",
    image: "/components/mcu.png",
  },
  {
    title: "N-Channel MOSFET",
    category: "Power Management",
    stock: "In Stock",
    rating: 4.8,
    description: "Low RDS(on) for efficient power switching",
    image: "/components/mosfet.jpg",
  },
  {
    title: "LDO Voltage Regulator",
    category: "Power Management",
    stock: "In Stock",
    rating: 4.7,
    description: "Ultra-low dropout, high PSRR regulator",
    image: "/components/regulator.webp",
  },
  {
    title: "TVS Diode Array",
    category: "Protection Devices",
    stock: "In Stock",
    rating: 4.6,
    description: "ESD and surge protection solution",
    image: "/components/tvs-diode.jpg",
  },
  {
    title: "Electrolytic Capacitor",
    category: "Passive Components",
    stock: "In Stock",
    rating: 4.5,
    description: "High capacitance for power filtering and smoothing",
    image: "/components/electrolytic-capacitor.jpg",
  },
  {
    title: "Precision Resistor",
    category: "Passive Components",
    stock: "In Stock",
    rating: 4.4,
    description: "High-accuracy resistance for critical circuits",
    image: "/components/precision-resistor.jpg",
  },
];


export default function CategorySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false); // For mobile dropdown

  // ================== FORMSPREE CONFIGURATION ==================
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mojraoqw"; 
  // ============================================================
 const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = 300; // approx width
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };
  const filteredProducts = 
    activeCategory === "All" 
      ? products 
      : products.filter((p) => p.category === activeCategory);

  const openQuoteModal = (product: any) => {
    setSelectedProduct(product);
    setQuantity(1);
    setNotes("");
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedProduct(null);
  };

  const handleSubmitQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct) return;

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("product_name", selectedProduct.title);
    formData.append("category", selectedProduct.category);
    formData.append("quantity", quantity.toString());
    formData.append("notes", notes || "No additional notes");
    formData.append("_subject", `New Quote Request - ${selectedProduct.title}`);
    formData.append("_next", window.location.href);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        alert("✅ Quote request submitted successfully!\n\nWe will contact you within 24 hours.");
        closeQuoteModal();
      } else {
        alert("❌ Failed to submit request. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting quote:", error);
      alert("❌ Something went wrong. Please check your internet and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-blue-600 font-medium text-sm tracking-widest">CATEGORIES</span>
            <h2 className="text-4xl font-semibold text-gray-900 mt-2">
              Featured Electronic Components
            </h2>
            <p className="text-gray-600 mt-3 max-w-md">
              High-quality components sourced from trusted manufacturers worldwide
            </p>
          </div>

          <a 
            href="/nproducts" 
            className="mt-6 md:mt-0 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group"
          >
            View Complete Catalog 
            <ArrowRight className="group-hover:translate-x-1 transition" />
          </a>
        </div>

        {/* Category Selection - Desktop Tabs + Mobile Dropdown */}
        <div className="mb-12">
          {/* Desktop: Horizontal Tabs */}
          <div className="hidden md:flex flex-wrap gap-2 border-b border-gray-100 pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all whitespace-nowrap
                  ${activeCategory === cat 
                    ? "bg-blue-600 text-white shadow-sm" 
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile: Dropdown Toggle */}
          <div className="md:hidden relative">
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="w-full flex items-center justify-between bg-gray-100 hover:bg-gray-200 border border-gray-200 px-5 py-4 rounded-2xl text-left font-medium"
            >
              <span>{activeCategory}</span>
              <ChevronDown className={`transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
            </button>

            {isCategoryOpen && (
              <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-2xl shadow-lg z-40 py-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setIsCategoryOpen(false);
                    }}
                    className={`w-full text-left px-5 py-3 hover:bg-gray-50 transition ${
                      activeCategory === cat ? "text-blue-600 font-medium" : "text-gray-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Products - Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="relative">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0"
          >
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="min-w-[280px] md:min-w-0 group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-xl hover:border-gray-300 transition-all duration-300 snap-start"
              >
                {/* Image Container */}
                <div className="h-52 bg-gray-50 relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  <div className="absolute top-4 right-4">
                    <span className="bg-emerald-100 text-emerald-700 text-xs font-medium px-3 py-1 rounded-full">
                      {product.stock}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 line-clamp-2 leading-tight min-h-[44px]">
                    {product.title}
                  </h3>
                  
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-1 text-amber-500 text-sm">
                      ★ <span className="text-gray-600 font-medium">{product.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">MOQ: 1 pc</span>
                  </div>

                  <button 
                    onClick={() => openQuoteModal(product)}
                    className="mt-5 w-full bg-gray-900 hover:bg-black text-white py-3.5 rounded-xl text-sm font-medium transition-all active:scale-[0.985]"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

{/* DOT INDICATORS (mobile only) */}
<div className="md:hidden flex justify-center gap-2 mt-2">
  {filteredProducts.map((_, i) => (
    <div
      key={i}
      className={`h-1.5 w-1.5 rounded-full transition-all ${
        i === activeIndex ? "bg-gray-800 w-3" : "bg-gray-300"
      }`}
    />
  ))}
</div>
        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <a
            href="/nproducts"
            className="border border-gray-300 hover:border-gray-400 px-8 py-3.5 rounded-2xl text-sm font-medium flex items-center gap-2 transition"
          >
            Browse All Components
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* ====================== REQUEST QUOTE MODAL ====================== */}
      {isQuoteModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl">
            <form onSubmit={handleSubmitQuote}>
              <div className="flex items-center justify-between p-6 border-b">
                <h3 className="text-xl font-semibold text-gray-900">Request a Quote</h3>
                <button 
                  type="button"
                  onClick={closeQuoteModal}
                  className="text-gray-400 hover:text-gray-600 transition"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 border-b flex gap-5">
                <div className="w-24 h-24 bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image 
                    src={selectedProduct.image} 
                    alt={selectedProduct.title}
                    width={96} 
                    height={96}
                    className="object-contain p-2"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg leading-tight text-gray-900">
                    {selectedProduct.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">
                    {selectedProduct.description}
                  </p>
                  <p className="text-xs text-emerald-600 mt-3 font-medium">
                    {selectedProduct.stock}
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity Required
                  </label>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full border border-gray-300 rounded-2xl px-5 py-3.5 text-lg focus:outline-none focus:border-blue-600"
                    min="1"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Requirements / Notes (Optional)
                  </label>
                  <textarea 
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={4}
                    placeholder="Target price, delivery timeline, special specifications, etc."
                    className="w-full border border-gray-300 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-blue-600 resize-y"
                  />
                </div>
              </div>

              <div className="p-6 border-t bg-gray-50 flex gap-3">
                <button 
                  type="button"
                  onClick={closeQuoteModal}
                  className="flex-1 py-4 border border-gray-300 rounded-2xl font-medium text-gray-700 hover:bg-gray-100 transition"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-2xl font-semibold transition"
                >
                  {isSubmitting ? "Sending Request..." : "Submit Quote Request"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}