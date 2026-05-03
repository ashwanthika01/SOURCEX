"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Clock, Mail, MapPin, Phone, Send, ShieldCheck, CheckCircle, ExternalLink,
} from "lucide-react";
import Link from "next/link";

/* ─────────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────────── */
function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [sent,    setSent]    = useState(false);
  const [error,   setError]   = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const form = e.currentTarget;
    try {
      const fd = new FormData(form);
      const res = await fetch("https://formspree.io/f/mvzddjee", {
        method: "POST", body: fd, headers: { Accept: "application/json" },
      });
      if (res.ok) { setSent(true); form.reset(); }
      else setError("Something went wrong. Please try again.");
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = `w-full bg-white border border-gray-200 px-4 py-3 text-sm font-semibold
    text-gray-900 placeholder:text-gray-400 placeholder:font-normal
    focus:border-blue-500 focus:outline-none focus:ring-0 transition-colors`;

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-20 text-center"
      >
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.1 }}>
          <CheckCircle className="w-16 h-16 text-blue-600 mx-auto mb-5" />
        </motion.div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-500 text-base font-medium max-w-sm">
          Thank you for reaching out. Our team will get back to you within{" "}
          <span className="font-bold text-gray-800">24 hours</span>.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-8 px-7 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-colors"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Full Name *</label>
          <input name="name" type="text" required placeholder="John Smith" className={inputClass} />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email *</label>
          <input name="email" type="email" required placeholder="you@company.com" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Phone</label>
          <input name="phone" type="tel" placeholder="+91 98765 43210" className={inputClass} />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Company</label>
          <input name="company" type="text" placeholder="Abcd Electronics" className={inputClass} />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Subject</label>
        <input name="subject" type="text" placeholder="BOM Quote / Partnership / Support" className={inputClass} />
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Message *</label>
        <textarea
          name="message" required rows={5}
          placeholder="Tell us about your project, BOM, timeline, or sourcing requirement..."
          className={`${inputClass} resize-none min-h-[130px]`}
        />
      </div>

      {error && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm font-semibold">
          {error}
        </motion.p>
      )}

      <motion.button
        whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
        type="submit" disabled={loading}
        className="w-full flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500
        disabled:opacity-50 text-white text-sm font-bold py-4 transition-colors"
      >
        {loading ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </motion.button>

      <p className="flex items-center justify-center gap-2 text-center text-xs text-gray-400 font-semibold">
        <ShieldCheck className="w-4 h-4 text-emerald-500" />
        Your information is used only for communication purposes.
      </p>
    </form>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f6f8] text-gray-900">

      {/* ══════════════ HERO ══════════════ */}
      <section className="relative bg-[#060d1f] min-h-[60vh] flex flex-col justify-end overflow-hidden">
        {/* Grid texture */}
        <div className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.7) 1px,transparent 1px),
                              linear-gradient(90deg,rgba(255,255,255,0.7) 1px,transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
        {/* Glows */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-400/8 rounded-full blur-[100px] pointer-events-none" />
        {/* Faded BG word */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[16vw] font-black text-white/[0.025] tracking-tighter leading-none">CONTACT</span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pb-16 pt-40 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-7 h-[2px] bg-blue-500" />
            <span className="text-blue-400 text-sm font-bold tracking-[0.25em] uppercase">Get In Touch</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-[5rem] font-bold text-white leading-[1.05] tracking-tight"
          >
            Let&apos;s Start a<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
              Conversation.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-gray-300 text-lg font-medium max-w-lg leading-relaxed"
          >
            For business inquiries, partnerships, or custom sourcing requests — our team is ready to help.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {[
              { v: "24 hrs",   l: "Response Time" },
              { v: "Mon–Sat",  l: "Working Days"  },
              { v: "Hosur, TN", l: "Location"     },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/[0.06] border border-white/10 px-4 py-2">
                <span className="text-white font-extrabold text-sm">{s.v}</span>
                <span className="text-gray-400 text-xs font-semibold">{s.l}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════ MAIN CONTENT ══════════════ */}
      <section className="max-w-6xl mx-auto px-4 md:px-12 py-16">
        <div className="grid lg:grid-cols-12 gap-10">

          {/* ── LEFT: Contact Info + Google Map ── */}
          <div className="lg:col-span-5 space-y-4">

            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-[2px] bg-blue-600" />
                <span className="text-blue-600 text-xs font-bold tracking-[0.2em] uppercase">Contact Information</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Reach the SourceX Team</h2>
              <p className="text-gray-500 text-sm font-medium mt-1">Use the channel that works best for you.</p>
            </div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 }} viewport={{ once: true }}
              className="group bg-white border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all overflow-hidden"
            >
              <div className="h-[2px] bg-blue-600 w-0 group-hover:w-full transition-all duration-300" />
              <div className="flex items-start gap-4 p-5">
                <div className="w-10 h-10 shrink-0 bg-blue-50 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Email Us</h3>
                  <a href="mailto:sourcex25@gmail.com"
                    className="mt-1 block text-sm font-bold text-blue-600 hover:text-blue-500 transition-colors">
                    sourcex25@gmail.com
                  </a>
                  <p className="mt-1 text-xs font-medium text-gray-400">Best for BOMs, quote requests, and support.</p>
                </div>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }} viewport={{ once: true }}
              className="group bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all overflow-hidden"
            >
              <div className="h-[2px] bg-emerald-500 w-0 group-hover:w-full transition-all duration-300" />
              <div className="flex items-start gap-4 p-5">
                <div className="w-10 h-10 shrink-0 bg-emerald-50 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Call Us</h3>
                  <a href="tel:+919894550032"
                    className="mt-1 block text-sm font-bold text-emerald-600 hover:text-emerald-500 transition-colors">
                    +91 98945 50032
                  </a>
                  <p className="mt-1 text-xs font-medium text-gray-400">Monday to Saturday, 9:00 AM – 6:00 PM.</p>
                </div>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }} viewport={{ once: true }}
              className="group bg-white border border-gray-100 hover:border-amber-200 hover:shadow-md transition-all overflow-hidden"
            >
              <div className="h-[2px] bg-amber-500 w-0 group-hover:w-full transition-all duration-300" />
              <div className="flex items-start gap-4 p-5">
                <div className="w-10 h-10 shrink-0 bg-amber-50 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Working Hours</h3>
                  <p className="mt-1 text-sm font-bold text-gray-800">Monday – Saturday</p>
                  <p className="text-sm font-semibold text-gray-700">9:00 AM – 6:00 PM</p>
                  <p className="mt-1 text-xs font-medium text-gray-400">Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            {/* Location + Google Map */}
            <motion.div
              initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }} viewport={{ once: true }}
              className="group bg-white border border-gray-100 hover:border-violet-200 hover:shadow-md transition-all overflow-hidden"
            >
              <div className="h-[2px] bg-violet-500 w-0 group-hover:w-full transition-all duration-300" />
              <div className="flex items-start gap-4 p-5">
                <div className="w-10 h-10 shrink-0 bg-violet-50 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-violet-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-sm">Our Location</h3>
                  <p className="mt-1 text-sm font-semibold text-gray-600 leading-relaxed">
                    Plot No. 6, Ground Floor, Kamaraj Nagar,<br />
                    SIPCOT 1, Zuzuvadi Post,<br />
                    Hosur – 635126, Tamil Nadu
                  </p>
                  
                  <a
                    href="https://maps.google.com/?q=Kamaraj+Nagar+SIPCOT+Hosur+Tamil+Nadu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-violet-600 hover:text-violet-500 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Google Maps embed */}
              <div className="mx-0 border-t border-gray-100">
                <iframe
                  title="SourceX Technologies Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.0!2d77.8253!3d12.7409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6f0000000001%3A0x0!2sKamaraj+Nagar%2C+SIPCOT%2C+Hosur%2C+Tamil+Nadu+635126!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="240"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

          </div>

          {/* ── RIGHT: Form ── */}
          <div className="lg:col-span-7" id="inquiry-form">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 shadow-sm"
            >
              {/* Form header */}
              <div className="px-8 py-6 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-6 h-[2px] bg-blue-600" />
                  <span className="text-blue-600 text-xs font-bold tracking-[0.2em] uppercase">Inquiry Form</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mt-1">Send Your Inquiry</h2>
                <p className="text-gray-500 text-sm font-medium mt-1">We&apos;ll get back to you within 24 hours.</p>
              </div>

              <div className="px-8 py-8">
                <ContactForm />
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ══════════════ CTA STRIP ══════════════ */}
      <section className="bg-[#060d1f] py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white">Ready to Build Something Great?</h2>
            <p className="text-gray-300 mt-2 text-base font-semibold">
              Share your requirements and we&apos;ll find the right sourcing path.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <motion.a
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              href="#inquiry-form"
              className="flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500
              text-white font-bold px-7 py-4 text-sm transition-colors whitespace-nowrap"
            >
              Send Inquiry <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/nservices"
                className="flex items-center gap-2.5 border border-white/20 hover:border-white/40
                text-white/70 hover:text-white font-bold px-7 py-4 text-sm transition-colors whitespace-nowrap"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}
