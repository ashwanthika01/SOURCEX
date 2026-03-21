"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

          {/* LOGO */}
          <div
            className={`text-lg font-semibold tracking-tight transition  ${
              active ? "text-black" : "text-white"
            }`}
          >
            SourceX
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition ${
                  active
                    ? "text-black hover:text-blue-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* CTA */}
            <a
              href="#contact"
              className={`ml-4 rounded-full px-5 py-2 text-xs font-medium transition ${
                active
                  ? "bg-blue-600 text-white hover:bg-blue-500 shadow-md"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              Book a call
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1"
          >
            <span
              className={`w-5 h-0.5 transition ${
                active ? "bg-black" : "bg-white"
              }`}
            />
            <span
              className={`w-5 h-0.5 transition ${
                active ? "bg-black" : "bg-white"
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
              className="text-black hover:text-blue-600 transition"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-blue-600 px-4 py-2 text-xs text-white text-center"
          >
            Book a call
          </a>
        </div>
      </motion.div>
    </>
  );
}