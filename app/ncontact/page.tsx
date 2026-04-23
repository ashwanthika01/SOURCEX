"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Send,
} from "lucide-react";
import Link from "next/link";

export default function NContactPage() {

  // ✅ SCROLL TO FOOTER FORM
  const scrollToForm = () => {
    const formElement = document.getElementById("inquiry-form");

    if (formElement) {
      const offset = 80;
      const elementPosition = formElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      // fallback if footer is not in current page yet
      window.location.href = "/#inquiry-form";
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-white text-white">

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_30%),radial-gradient(circle_at_left,rgba(14,165,233,0.18),transparent_25%)]" />

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-blue-300 mb-6"
          >
            Contact SourceX
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
          >
            Let’s Connect & Build <br />
            <span className="text-blue-400">Something Great Together</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-slate-300 leading-relaxed"
          >
            Have a question, product requirement, or business inquiry? Reach
            out to SourceX and our team will get back to you with the right
            solution.
          </motion.p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="px-6 md:px-12 lg:px-20 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-400 font-semibold mb-3 uppercase tracking-wider text-sm">
              Get in Touch
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
              We’re Here to Help You
            </h2>

            <p className="mt-6 text-slate-300 leading-relaxed text-lg">
              Whether you need support, product consultation, sourcing
              assistance, or partnership opportunities, our team is ready to
              assist you.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <Mail className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-slate-300 text-sm mt-1">
                    sourcex25@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <Phone className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Phone</h3>
                  <p className="text-slate-300 text-sm mt-1">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <MapPin className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Location</h3>
                  <p className="text-slate-300 text-sm mt-1">
                    Plot No. 6, Ground floor ,Kamaraj Nagar ,Sipcot 1, Zuzuvadi post
                    Hosur -635126, Tamil Nadu

                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <Clock className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Working Hours
                  </h3>
                  <p className="text-slate-300 text-sm mt-1">
                    Monday – Saturday, 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 shadow-2xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-5">
              <input className="input" placeholder="Full Name" />
              <input className="input" placeholder="Email Address" />
              <input className="input" placeholder="Subject" />
              <textarea className="input" rows={5} placeholder="Message" />

              <button className="w-full bg-blue-600 py-3 rounded-xl">
                Send Message <Send />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-slate-950 text-white">
        <motion.div className="max-w-5xl mx-auto text-center rounded-3xl border border-white/10 bg-white/5 p-10">
          
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Start Your Next Project?
          </h2>

          <p className="mt-5 text-slate-300 text-lg">
            Let SourceX support your business
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

            {/* ✅ UPDATED BUTTON */}
            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-white font-medium hover:bg-blue-700 transition"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/nproducts"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5"
            >
              Explore Products
            </Link>

          </div>
        </motion.div>
      </section>
    </main>
  );
}
