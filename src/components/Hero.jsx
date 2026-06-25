"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Play, Check } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const scrollToVSL = () => {
    const element = document.getElementById("vsl");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F6F1EA] to-[#FFF]">
      {/* Soft floating background light blobs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-luxury-gold/10 rounded-full blur-3xl animate-pulse-slow -z-10" />
      <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-3xl animate-pulse-slow -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Content */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Badge */}
          <motion.div
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-luxury-gold/20 shadow-sm mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <Sparkles className="h-4 w-4 text-luxury-gold" />
            <span className="text-xs font-sans tracking-widest uppercase text-luxury-gray font-medium">
              Free Manifestation Masterclass
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-luxury-black tracking-tight leading-[1.1] mb-6">
            Manifest the Life You <span className="italic text-luxury-gold font-normal">Truly Desire</span> by Healing the Patterns That Are Secretly Holding You Back
          </h1>

          {/* Subheading */}
          <p className="font-sans text-base md:text-lg text-luxury-gray leading-relaxed mb-8 max-w-2xl font-light">
            If you've tried affirmations, journaling, visualization or multiple manifestation techniques but still feel stuck, this free training will show you why—and what actually creates lasting change.
          </p>

          {/* CTA & Trust checklist */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <button
              onClick={scrollToVSL}
              className="w-full sm:w-auto px-8 py-5 text-sm font-sans tracking-widest uppercase text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-102 active:scale-98 transition-all duration-300 shimmer-button font-semibold"
            >
              Watch Free Training
            </button>
          </div>

          {/* Trust points */}
          <div className="flex flex-wrap items-center gap-6 mt-6 text-xs font-sans text-luxury-gray uppercase tracking-widest">
            <div className="flex items-center gap-1.5">
              <Check className="h-4.5 w-4.5 text-luxury-gold" />
              <span>Free Training</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="h-4.5 w-4.5 text-luxury-gold" />
              <span>No Credit Card</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="h-4.5 w-4.5 text-luxury-gold" />
              <span>Instant Access</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Portrait */}
        <motion.div
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Portrait Container */}
          <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[24px] overflow-hidden border border-luxury-gold/20 shadow-2xl bg-white group">
            {/* Floating Gold Glow Elements */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
            
            <Image
              src="/stuti_jain_hero.png"
              alt="Stuti Jain Manifestation Coach"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-w-768px) 100vw, 420px"
            />
            
            {/* Text Overlay on Portrait */}
            <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
              <p className="font-serif text-xl tracking-wide">Stuti Jain</p>
              <p className="font-sans text-[10px] uppercase tracking-widest text-luxury-gold font-medium mt-1">
                Founder, Elite Vision Empire
              </p>
            </div>
          </div>

          {/* Decorative frame elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-luxury-gold/30 rounded-tl-[24px] -z-10" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-luxury-gold/30 rounded-br-[24px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
