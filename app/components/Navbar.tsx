"use client";

import { useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-30 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-emerald-500 flex items-center justify-center text-xs font-semibold">
            SX
          </div>
          <span className="text-sm font-semibold tracking-tight">
            SourceX Technologies
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-emerald-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-emerald-500/60 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-300 hover:bg-emerald-500/20 transition-colors"
          >
            Book a call
          </a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-700 p-2 text-slate-200"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-slate-200" />
            <span className="block h-0.5 w-5 bg-slate-200" />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-slate-300 hover:text-emerald-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full border border-emerald-500/60 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-300 text-center"
            >
              Book a call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
