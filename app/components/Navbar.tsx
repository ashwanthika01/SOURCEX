"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "/nservices" },
  { label: "Products", href: "/nproducts" },
  { label: "About", href: "/nabout" },
  { label: "Contact", href: "/ncontact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

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
      {/* NAVBAR WRAPPER */}
      <motion.div
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
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-14 h-9 flex items-center justify-center">
              <Image
                src="/Logo.png"
                alt="SourceX Technologies"
                fill
                sizes="56px"
                className="object-contain scale-130 translate-y-[2px]"
                priority
              />
            </div>

            <div
              className={`text-xl font-semibold tracking-tight leading-none transition-colors ${
                active ? "text-gray-900" : "text-white"
              }`}
            >
              SourceX
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition ${
                  active
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href="/nquote"
              className={`ml-4 rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                active
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                  : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
              }`}
            >
              Get a Quote
            </Link>
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
      </motion.div>

      {/* MOBILE MENU */}
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
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-800 hover:text-blue-600 py-1 transition"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/nquote"
            className="mt-4 rounded-full bg-blue-600 px-6 py-3 text-white text-center font-medium"
            onClick={() => setOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      </motion.div>
    </>
  );
}
