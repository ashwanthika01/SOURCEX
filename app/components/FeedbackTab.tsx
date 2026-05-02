"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Star, CheckCircle } from "lucide-react";

type Rating = 1 | 2 | 3 | 4 | 5;

export default function FeedbackTab() {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState<Rating | 0>(0);
  const [hoverRating, setHoverRating] = useState<Rating | 0>(0);
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Lock body scroll when panel is open on mobile
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating)         { setError("Please select a rating.");    return; }
    if (!category)       { setError("Please select a category.");  return; }
    if (!message.trim()) { setError("Please write your feedback."); return; }
    setError("");
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("_subject", `[SourceX Feedback] ${category} — ${rating}★`);
      formData.append("rating",   `${rating} / 5`);
      formData.append("category", category);
      formData.append("message",  message);
      formData.append("email",    email || "Not provided");

      const res = await fetch("https://formspree.io/f/mojrvrbk", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data?.errors?.[0]?.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setRating(0);
      setHoverRating(0);
      setCategory("");
      setMessage("");
      setEmail("");
      setError("");
    }, 300);
  };

  const categories = [
    "Website Experience",
    "Product Quality",
    "Sourcing & Delivery",
    "Customer Support",
    "Pricing",
    "Other",
  ];

  const ratingLabels: Record<Rating, string> = {
    1: "Poor",
    2: "Fair",
    3: "Good",
    4: "Very Good",
    5: "Excellent",
  };

  const activeRating = (hoverRating || rating) as Rating;

  return (
    <>
      {/* ── FEEDBACK TAB BUTTON ── */}
      <div className="fixed right-0 top-3/4 -translate-y-1/2 z-50">
        <motion.button
          whileHover={{ x: -2 }}
          onClick={() => setOpen(true)}
          className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium
          px-3 py-4 rounded-l-md transition shadow-lg
          [writing-mode:vertical-rl] rotate-180 tracking-wide"
        >
          Give Feedback
        </motion.button>
      </div>

      {/* ── BACKDROP ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
        )}
      </AnimatePresence>

      {/* ── SLIDE-IN PANEL ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[400px] z-50
            bg-[#0c1220] border-l border-white/[0.08] shadow-2xl
            flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.08]">
              <div>
                <h2 className="text-white font-semibold text-base">Share your feedback</h2>
                <p className="text-white/40 text-xs mt-0.5">Help us improve SourceX</p>
              </div>
              <button
                onClick={handleClose}
                className="text-white/40 hover:text-white transition p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <AnimatePresence mode="wait">

                {/* ── SUCCESS STATE ── */}
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center h-full text-center py-16"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.1 }}
                    >
                      <CheckCircle className="w-16 h-16 text-blue-400 mx-auto mb-5" />
                    </motion.div>
                    <h3 className="text-white text-xl font-semibold mb-2">Thank you!</h3>
                    <p className="text-white/50 text-sm max-w-xs">
                      Your feedback has been sent to the SourceX team. We appreciate you taking the time.
                    </p>
                    <button
                      onClick={handleClose}
                      className="mt-8 px-6 py-2.5 bg-blue-600 hover:bg-blue-500
                      text-white text-sm rounded transition"
                    >
                      Close
                    </button>
                  </motion.div>

                ) : (

                  /* ── FORM ── */
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >

                    {/* Star Rating */}
                    <div>
                      <label className="text-[11px] text-white/40 uppercase tracking-widest block mb-3">
                        Overall Rating *
                      </label>
                      <div className="flex items-center gap-2">
                        {([1, 2, 3, 4, 5] as Rating[]).map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="transition-transform hover:scale-110 focus:outline-none"
                          >
                            <Star
                              className={`w-8 h-8 transition-colors ${
                                star <= activeRating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-white/20"
                              }`}
                            />
                          </button>
                        ))}
                        {activeRating > 0 && (
                          <span className="text-white/50 text-sm ml-1">
                            {ratingLabels[activeRating]}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Category */}
                    <div>
                      <label className="text-[11px] text-white/40 uppercase tracking-widest block mb-3">
                        Feedback Category *
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => setCategory(cat)}
                            className={`px-3 py-1.5 text-xs border transition ${
                              category === cat
                                ? "bg-blue-600 border-blue-600 text-white"
                                : "border-white/10 text-white/50 hover:border-white/30 hover:text-white/80"
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-[11px] text-white/40 uppercase tracking-widest block mb-2">
                        Your Feedback *
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        placeholder="Tell us what you think — what's working well, what could be better..."
                        className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08]
                        text-white text-sm placeholder:text-white/20
                        focus:border-blue-500/60 focus:bg-white/[0.06] focus:outline-none
                        transition-all resize-none"
                      />
                      <div className="flex justify-end mt-1">
                        <span className={`text-xs ${message.length > 500 ? "text-red-400" : "text-white/20"}`}>
                          {message.length}/500
                        </span>
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-[11px] text-white/40 uppercase tracking-widest block mb-2">
                        Email{" "}
                        <span className="normal-case text-white/25">(For follow-up)</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08]
                        text-white text-sm placeholder:text-white/20
                        focus:border-blue-500/60 focus:bg-white/[0.06] focus:outline-none transition-all"
                      />
                    </div>

                    {/* Error */}
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs"
                      >
                        {error}
                      </motion.p>
                    )}

                    {/* Submit */}
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-50
                      text-white font-semibold text-sm flex items-center justify-center gap-2.5
                      transition-colors"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10"
                              stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Feedback
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-white/20 text-[11px]">
                      Feedback is sent directly to the SourceX team.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}