"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, ShieldAlert, Clock, Sparkles } from "lucide-react";

export default function FinalCTA() {
  // Countdown Timer: Starts at 15m 00s
  const [timeLeft, setTimeLeft] = useState(900); // 15 mins in seconds
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      alert(`Thank you, ${formData.name}! Redirecting to Coach Stuti's private scheduling calendar...`);
    }, 1000);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#FFF] via-[#FAF8F5] to-[#F6F1EA] relative overflow-hidden border-t border-luxury-gold/10">
      {/* Glow elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-luxury-gold/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-luxury-gold/20 shadow-xs mb-8">
            <Sparkles className="h-4 w-4 text-luxury-gold" />
            <span className="text-[10px] font-sans tracking-widest uppercase text-luxury-black font-semibold">
              Begin Your Shift Today
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-luxury-black font-semibold tracking-tight leading-tight max-w-3xl mb-6">
            Ready to Break the Patterns That Are Keeping You Stuck?
          </h2>

          {/* Subheading */}
          <p className="font-sans text-base md:text-xl text-luxury-gray font-light max-w-2xl mb-10 leading-relaxed">
            Your transformation starts with one decision. Claim your complimentary session to map out your subconscious blocks.
          </p>

          {/* Countdown Timer Container */}
          <motion.div
            className="flex items-center gap-3 px-5 py-3 rounded-full bg-red-50 border border-red-100 text-red-700 text-xs font-sans uppercase tracking-widest font-semibold mb-8 shadow-xs"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Clock size={14} className="animate-pulse" />
            <span>Special Booking Window Closes in: <span className="font-mono font-bold text-sm ml-1">{formatTime(timeLeft)}</span></span>
          </motion.div>

          {/* Booking Form Card */}
          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md bg-white/70 backdrop-blur-md border border-luxury-gold/25 p-8 rounded-[24px] shadow-xl flex flex-col gap-5 text-left mb-8"
            >
              <h3 className="font-serif text-lg text-luxury-black font-semibold text-center mb-2">
                Book Your Clarity Call
              </h3>

              <div>
                <label className="block text-[10px] font-sans tracking-widest uppercase text-luxury-gray font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Sophia Loren"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3.5 rounded-full border border-luxury-gold/15 focus:border-luxury-gold bg-luxury-beige/20 text-sm font-sans tracking-wide focus:outline-none transition-colors placeholder:text-luxury-gray/30 text-luxury-black"
                />
              </div>

              <div>
                <label className="block text-[10px] font-sans tracking-widest uppercase text-luxury-gray font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. sophia@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3.5 rounded-full border border-luxury-gold/15 focus:border-luxury-gold bg-luxury-beige/20 text-sm font-sans tracking-wide focus:outline-none transition-colors placeholder:text-luxury-gray/30 text-luxury-black"
                />
              </div>

              <div>
                <label className="block text-[10px] font-sans tracking-widest uppercase text-luxury-gray font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="e.g. +1 (555) 019-2834"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3.5 rounded-full border border-luxury-gold/15 focus:border-luxury-gold bg-luxury-beige/20 text-sm font-sans tracking-wide focus:outline-none transition-colors placeholder:text-luxury-gray/30 text-luxury-black"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 px-8 py-5 text-xs font-sans tracking-widest uppercase text-white rounded-full shadow-2xl hover:shadow-[0_10px_30px_rgba(200,169,106,0.3)] hover:scale-102 active:scale-98 transition-all duration-300 shimmer-button font-bold text-center flex items-center justify-center gap-3 cursor-pointer"
              >
                <Calendar size={14} /> Book Your Free 1:1 Clarity Call
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-md bg-white border border-luxury-gold/20 p-8 rounded-[24px] shadow-lg flex flex-col items-center justify-center text-center py-12 mb-8 gap-4"
            >
              <div className="h-12 w-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center animate-bounce">
                <Calendar size={24} />
              </div>
              <h3 className="font-serif text-xl text-luxury-black font-semibold">
                Details Registered!
              </h3>
              <p className="font-sans text-xs text-luxury-gray leading-relaxed max-w-xs font-light">
                Connecting you to Coach Stuti's private VIP calendar. Please choose a slot that you are 100% committed to attending.
              </p>
            </motion.div>
          )}

          {/* Secondary CTAs & Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-10 text-[10px] font-sans text-luxury-gray uppercase tracking-widest">
            <div className="flex items-center gap-1.5">
              <ShieldAlert size={12} className="text-luxury-gold" />
              <span>100% Confidential Session</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldAlert size={12} className="text-luxury-gold" />
              <span>Valued at $250 - Free Today</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldAlert size={12} className="text-luxury-gold" />
              <span>Private Zoom Call</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
