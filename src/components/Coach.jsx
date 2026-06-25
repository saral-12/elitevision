"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, ShieldCheck, Heart } from "lucide-react";

export default function Coach() {
  const stats = [
    { value: "8+", label: "Years Experience" },
    { value: "1,500+", label: "Clients Helped" },
    { value: "10,000+", label: "Lives Transformed" }
  ];

  return (
    <section id="about" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      {/* Background glow shapes */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Professional Portrait */}
          <motion.div
            className="lg:col-span-5 relative flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Elegant double-border frame */}
            <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-[24px] overflow-hidden border border-luxury-gold/20 shadow-2xl bg-white group">
              <Image
                src="/stuti_jain_hero.png"
                alt="Coach Stuti Jain"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-w-768px) 100vw, 360px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
              
              {/* Internal overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex gap-2 items-center text-white/95">
                <Heart size={16} className="text-luxury-gold fill-current" />
                <span className="text-[10px] font-sans tracking-widest uppercase font-semibold">
                  Healing Subconscious Patterns
                </span>
              </div>
            </div>

            {/* Glowing circular element in background */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-luxury-gold/20 rounded-full blur-2xl -z-10 animate-pulse-slow" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-luxury-gold/20 rounded-full blur-2xl -z-10 animate-pulse-slow" />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-xs font-sans tracking-widest uppercase text-luxury-gold font-medium mb-3 block">
              Meet Your Coach
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-luxury-black font-semibold tracking-tight mb-6">
              Stuti Jain
            </h2>
            
            <div className="flex flex-col gap-4 text-luxury-gray font-light font-sans text-base leading-relaxed max-w-xl">
              <p className="font-semibold text-luxury-black text-lg font-serif italic">
                Author of "There's Always a Choice to Flip the Story" & Founder of Elite Vision Empire.
              </p>
              <p>
                Stuti is dedicated to helping people heal deep-rooted subconscious patterns to transform their relationships, money, health, confidence, and life through profound inner work and manifestation.
              </p>
              <p>
                Having spent nearly a decade studying neurological conditioning, energy alignment, and subconscious behavior, she bridges the gap between scientific re-programming and spiritual resonance.
              </p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 mt-10 w-full max-w-xl">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-5 rounded-[20px] bg-white border border-luxury-gold/10 shadow-sm flex flex-col justify-center items-center text-center hover:border-luxury-gold/30 transition-colors duration-300"
                  whileHover={{ y: -3 }}
                >
                  <span className="font-serif text-xl md:text-3xl text-luxury-black font-semibold tracking-tight">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-widest text-luxury-gray mt-2 font-medium">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
