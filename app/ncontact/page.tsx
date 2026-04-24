"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function NContactPage() {
  const scrollToForm = () => {
    const el = document.getElementById("inquiry-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-300";

  const cardClass =
    "group rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-sm p-6 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.10),transparent_25%)]" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <p className="inline-block text-[11px] md:text-xs font-semibold tracking-[0.28em] text-blue-200 border border-white/10 bg-white/5 rounded-full px-4 py-2">
            GET IN TOUCH
          </p>

          <h1 className="mt-6 text-3xl md:text-5xl font-bold leading-tight">
            Let’s Start a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
              Conversation
            </span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-slate-300 leading-relaxed">
            For business inquiries, support, partnerships, or custom solutions,
            our team is here to help you move forward with confidence.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={scrollToForm}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2 transition-all"
            >
              Send Inquiry <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/nproducts"
              className="border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-xl text-sm font-semibold transition-all"
            >
              View Products
            </Link>
          </div>
        </motion.div>
      </section>

      {/* MAIN SECTION */}
      <section className="px-6 md:px-10 lg:px-16 py-16 bg-gradient-to-b from-slate-50 to-blue-50/40">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8">
          {/* LEFT SIDE */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Contact Information
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Reach us through any of the following channels.
              </p>
            </div>

            {/* Email */}
            <div className={cardClass}>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Email Us
                  </h3>
                  <a
                    href="mailto:sourcex25@gmail.com"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-1 block"
                  >
                    sourcex25@gmail.com
                  </a>
                  <p className="text-xs text-slate-500 mt-2">
                    We usually reply within 2–4 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className={cardClass}>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Call Us
                  </h3>
                  <a
                    href="tel:+919894577770"
                    className="text-emerald-600 hover:text-emerald-700 text-sm font-medium mt-1 block"
                  >
                    +91 98945 77770
                  </a>
                  <p className="text-xs text-slate-500 mt-2">
                    Monday to Saturday, 9 AM – 6 PM.
                  </p>
                </div>
              </div>
            </div>

            {/* Location + Google Maps Combined */}
            <div className={cardClass}>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-amber-600" />
                </div>

                <div className="w-full">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Our Location
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mt-2">
                    Plot No. 6, Ground Floor, Kamaraj Nagar, SIPCOT 1,
                    <br />
                    Zuzuvadi Post, Hosur – 635126, Tamil Nadu
                  </p>

                  <div className="mt-4 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <iframe
                      src= "https://www.google.com/maps?q=Sipcot%20Phase%201,%20QRF2%2BJMQ,%20Hosur,%20Tamil%20Nadu%20635126&output=embed"
                      width="100%"
                      height="220"
                      loading="lazy"
                      className="w-full"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className={cardClass}>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Working Hours
                  </h3>
                  <p className="text-sm text-slate-600 mt-2">
                    Monday – Saturday:{" "}
                    <span className="font-medium text-slate-900">
                      9:00 AM – 6:00 PM
                    </span>
                  </p>
                  <p className="text-xs text-slate-500 mt-1">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="lg:col-span-7">
            <div
              id="inquiry-form"
              className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                    Send Your Inquiry
                  </h2>
                  <p className="text-sm text-slate-500">
                    We’ll get back to you within 24 hours.
                  </p>
                </div>
              </div>

              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="Full Name *"
                    required
                  />
                  <input
                    type="email"
                    className={inputClass}
                    placeholder="Email Address *"
                    required
                  />
                </div>

                <input
                  type="text"
                  className={inputClass}
                  placeholder="Subject / Requirement"
                />

                <textarea
                  className={`${inputClass} resize-none min-h-[140px]`}
                  placeholder="Tell us more about your project, requirements, or how we can help you..."
                  rows={5}
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>

                <p className="text-center text-xs text-slate-500">
                  Your information is secure and used only for communication
                  purposes.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_28%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.10),transparent_28%)]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Ready to Build Something{" "}
            <span className="text-blue-300">Great</span> Together?
          </h2>

          <p className="mt-4 text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
            Let’s discuss your requirements and craft the right solution for
            your business.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={scrollToForm}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold text-sm inline-flex items-center gap-2 transition"
            >
              Send Inquiry <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/nproducts"
              className="border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-xl font-semibold text-sm transition"
            >
              Browse Our Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}