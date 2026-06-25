"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, ShieldAlert, Clock, Sparkles } from "lucide-react";

export default function FinalCTA() {
  // Countdown Timer: Starts at 15m 00s
  const [timeLeft, setTimeLeft] = useState(900); // 15 mins in seconds

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

  const handleBookCall = () => {
    // Open a mock booking link or show booking alert
    alert("Redirecting to Coach Stuti's private scheduling calendar...");
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

          {/* Glowing Call Button */}
          <button
            onClick={handleBookCall}
            className="w-full sm:w-auto px-10 py-6 text-sm font-sans tracking-widest uppercase text-white rounded-full shadow-2xl hover:shadow-[0_10px_35px_rgba(200,169,106,0.4)] hover:scale-103 active:scale-98 transition-all duration-300 shimmer-button font-bold text-center flex items-center justify-center gap-3"
          >
            <Calendar size={16} /> Book Your Free 1:1 Clarity Call
          </button>

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
