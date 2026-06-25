"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Volume2, ShieldCheck, Sparkles, AlertCircle } from "lucide-react";

export default function VSL() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="vsl" className="py-24 bg-white relative overflow-hidden">
      {/* Background soft glow blobs */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-luxury-beige/40 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-1.5 mb-3 text-luxury-gold"
          >
            <Sparkles size={16} />
            <span className="text-xs font-sans tracking-widest uppercase font-medium">Exclusive Presentation</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-luxury-black font-semibold tracking-tight"
          >
            Watch the Free Training
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-sm text-luxury-gray font-light mt-4 max-w-xl mx-auto"
          >
            Do not refresh this page. The presentation below contains the exact framework Coach Stuti Jain uses to help clients unlock breakthroughs.
          </motion.p>
        </div>

        {/* 16:9 Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video w-full rounded-[24px] overflow-hidden bg-luxury-black shadow-2xl border border-luxury-gold/20"
        >
          <AnimatePresence mode="wait">
            {!isPlaying ? (
              // Video Thumbnail/Cover
              <motion.div
                key="thumbnail"
                className="absolute inset-0 z-20 flex flex-col items-center justify-center cursor-pointer group"
                onClick={() => setIsPlaying(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Background ambient image overlay representing subconscious / vision */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#111]/90 via-[#2A2315]/80 to-[#111]/95 mix-blend-multiply" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-luxury-gold)_0%,transparent_70%)] opacity-20 group-hover:opacity-30 transition-opacity duration-700" />
                
                {/* Masterclass details */}
                <div className="z-10 text-center px-4 flex flex-col items-center max-w-lg">
                  <span className="text-[10px] font-sans tracking-widest uppercase text-luxury-gold font-medium border border-luxury-gold/30 rounded-full px-3 py-1 bg-luxury-gold/10 mb-4 animate-pulse">
                    LIVE STREAMING DEMO
                  </span>
                  <h3 className="font-serif text-xl md:text-3xl text-white font-medium leading-snug mb-6">
                    How to Reprogram the Subconscious to Shift Relationships, Abundance & Personal Power
                  </h3>
                  
                  {/* Play Button */}
                  <motion.div
                    className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-white text-luxury-black flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-luxury-gold group-hover:text-white transition-all duration-300 relative"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="h-6 w-6 fill-current ml-1" />
                    <span className="absolute -inset-2 rounded-full border border-white/20 group-hover:border-luxury-gold/50 animate-ping opacity-75" />
                  </motion.div>

                  <span className="font-sans text-[10px] uppercase tracking-widest text-white/60 mt-8 flex items-center gap-2">
                    <Volume2 size={12} /> Click To Play Masterclass (42 mins)
                  </span>
                </div>
              </motion.div>
            ) : (
              // Simulated Playing Video
              <motion.div
                key="player"
                className="absolute inset-0 z-15 bg-[#0a0a0a] flex flex-col justify-between p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Simulated Header */}
                <div className="flex items-center justify-between text-white/80 text-[10px] font-sans tracking-widest uppercase">
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" /> PLAYING PRESENTATION
                  </span>
                  <span>TIME REMAINING: 42:15</span>
                </div>

                {/* Simulated Content Screen */}
                <div className="flex-1 flex flex-col items-center justify-center text-center max-w-xl mx-auto py-8">
                  <div className="w-16 h-16 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold mb-6 animate-spin">
                    <Sparkles size={24} className="animate-pulse" />
                  </div>
                  <h4 className="font-serif text-xl md:text-2xl text-white font-medium mb-3 italic">
                    "Your subconscious mind is the projector. Your reality is the screen."
                  </h4>
                  <p className="font-sans text-xs text-white/60 max-w-md">
                    Coach Stuti is breaking down the subconscious re-wiring cycle. Please listen with your undivided attention.
                  </p>
                </div>

                {/* Simulated Player Controls */}
                <div className="flex flex-col gap-3">
                  {/* Progress bar */}
                  <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-luxury-gold"
                      initial={{ width: "0%" }}
                      animate={{ width: "8%" }}
                      transition={{ duration: 15, ease: "linear" }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-white/60 text-[10px] font-sans">
                    <span>03:12</span>
                    <span>45:27</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Key Takeaways Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="p-8 rounded-[20px] bg-white border border-luxury-gold/10 shadow-sm flex flex-col gap-3 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
            <div className="h-10 w-10 rounded-full bg-luxury-beige flex items-center justify-center text-luxury-gold font-serif font-bold text-sm">
              I
            </div>
            <h4 className="font-serif text-lg text-luxury-black font-semibold">
              Discover why manifestation isn't working
            </h4>
            <p className="font-sans text-sm text-luxury-gray font-light leading-relaxed">
              Affirmations and journaling aren't enough if your subconscious holds conflicting beliefs. Learn the mechanics of alignment.
            </p>
          </div>

          <div className="p-8 rounded-[20px] bg-white border border-luxury-gold/10 shadow-sm flex flex-col gap-3 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
            <div className="h-10 w-10 rounded-full bg-luxury-beige flex items-center justify-center text-luxury-gold font-serif font-bold text-sm">
              II
            </div>
            <h4 className="font-serif text-lg text-luxury-black font-semibold">
              Heal subconscious blocks
            </h4>
            <p className="font-sans text-sm text-luxury-gray font-light leading-relaxed">
              Deconstruct the childhood narratives, ancestral programming, and emotional blocks trapped inside your nervous system.
            </p>
          </div>

          <div className="p-8 rounded-[20px] bg-white border border-luxury-gold/10 shadow-sm flex flex-col gap-3 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
            <div className="h-10 w-10 rounded-full bg-luxury-beige flex items-center justify-center text-luxury-gold font-serif font-bold text-sm">
              III
            </div>
            <h4 className="font-serif text-lg text-luxury-black font-semibold">
              Create lasting transformation
            </h4>
            <p className="font-sans text-sm text-luxury-gray font-light leading-relaxed">
              Transition from forcing outcomes to natural magnetising. Rewire the neurological loops that create sustainable life shifts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
