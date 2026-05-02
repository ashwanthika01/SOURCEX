"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "/nservices" },
  { label: "Products", href: "/nproducts" },
  { label: "About", href: "/nabout" },
  { label: "Contact", href: "/ncontact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");

    if (formElement) {
      const offset = 80;
      const elementPosition = formElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      window.location.href = "/#contact-form";
    }
  };

  return (
    <>
      {/* 🌍 GLOBAL FLOATING NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? "bg-black/80 backdrop-blur-md border-b border-white/10"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-12 h-8">
                <Image
                  src="/Logo.png"
                  alt="SourceX"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">
                SourceX Technologies
              </span>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-white transition"
                >
                  {link.label}
                </Link>
              ))}

              {/* CTA */}
              <button
                onClick={scrollToForm}
                className="ml-4 px-5 py-2 rounded-md bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium transition"
              >
                Get a Quote
              </button>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col gap-1.5"
            >
              <span className="w-6 h-0.5 bg-white" />
              <span className="w-6 h-0.5 bg-white" />
            </button>
          </div>
        </div>
      </div>

      {/* 📱 MOBILE MENU */}
      {open && (
        <div className="fixed top-[64px] left-0 w-full bg-black/95 border-b border-white/10 px-6 py-4 flex flex-col gap-4 text-sm text-white/80 z-40">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-white"
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={() => {
              setOpen(false);
              scrollToForm();
            }}
            className="mt-2 px-5 py-2 rounded-md bg-blue-500 text-white"
          >
            Get a Quote
          </button>
        </div>
      )}
    </>
  );
}