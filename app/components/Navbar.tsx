"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const active = hovered || scrolled;

  return (
    <>
      {/* 🌟 NAVBAR WRAPPER */}
      <header
        className="fixed top-4 left-0 w-full z-50 flex justify-center px-4"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`relative w-full max-w-6xl px-6 py-3 flex items-center justify-between transition-all duration-500 rounded-full ${
            active
              ? "bg-white/90 backdrop-blur-xl shadow-lg border border-gray-200"
              : "bg-transparent border border-transparent"
          }`}
        >
          {/* ✨ Gradient Blur Edges */}
          {active && (
            <>
              <div className="absolute -left-20 top-0 h-full w-40 bg-gradient-to-r from-white to-transparent blur-2xl pointer-events-none" />
              <div className="absolute -right-20 top-0 h-full w-40 bg-gradient-to-l from-white to-transparent blur-2xl pointer-events-none" />
            </>
          )}

          {/* LOGO SECTION - Updated with Image */}
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 md:w-10 md:h-10 flex-shrink-0">
              <Image
                src="/SourceX.jpeg"         
                alt="SourceX Technologies"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div
              className={`text-xl font-semibold tracking-tight transition-colors ${
                active ? "text-gray-900" : "text-white"
              }`}
            >
              SourceX
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition ${
                  active
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* CTA Button */}
            <a
              href="#inquiry-form"          // Changed to point to your form
              className={`ml-4 rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                active
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                  : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
              }`}
            >
              Get a Quote
            </a>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5"
          >
            <span
              className={`w-6 h-0.5 transition-all ${
                active ? "bg-gray-900" : "bg-white"
              }`}
            />
            <span
              className={`w-6 h-0.5 transition-all ${
                active ? "bg-gray-900" : "bg-white"
              }`}
            />
          </button>
        </motion.nav>
      </header>

      {/* 📱 MOBILE MENU */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-20 left-0 w-full px-6 md:hidden z-40 ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-xl p-6 flex flex-col gap-4 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-800 hover:text-blue-600 py-1 transition"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#inquiry-form"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-blue-600 px-6 py-3 text-white text-center font-medium"
          >
            Get a Quote
          </a>
        </div>
      </motion.div>
    </>
  );
}