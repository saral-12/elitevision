"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, HeartPulse, RefreshCw, Star, ArrowDown } from "lucide-react";

export default function WhyThisWorks() {
  const steps = [
    {
      num: "01",
      icon: <Search className="h-6 w-6 text-luxury-gold" />,
      title: "Identify Subconscious Patterns",
      description: "We trace the repeating loops and subconscious programs (e.g., self-sabotage, money blocks, fear of visibility) that control 95% of your life decisions without your active awareness."
    },
    {
      num: "02",
      icon: <HeartPulse className="h-6 w-6 text-luxury-gold" />,
      title: "Heal Emotional Blocks",
      description: "We discharge emotional memories, survival instincts, and limiting ancestral stories stored at a somatic level, restoring safety and ease to your nervous system."
    },
    {
      num: "03",
      icon: <RefreshCw className="h-6 w-6 text-luxury-gold" />,
      title: "Manifest from Alignment",
      description: "We align your conscious desires with your core self-concept. When your heart and brain work in unison, the things you want flow to you naturally."
    },
    {
      num: "04",
      icon: <Star className="h-6 w-6 text-luxury-gold" />,
      title: "Create Lasting Transformation",
      description: "Lock in your new state. Shift your daily choices, confidence, and boundaries, cementing a permanent identity transformation that reflects your highest timeline."
    }
  ];

  return (
    <section className="py-24 bg-luxury-black text-white relative overflow-hidden">
      {/* Golden glow decorations */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-luxury-gold/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-sans tracking-widest uppercase text-luxury-gold font-medium mb-3 block"
          >
            The Framework
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-5xl text-white font-semibold tracking-tight"
          >
            Why This Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-sm text-white/60 font-light mt-4 max-w-xl mx-auto"
          >
            Traditional manifestation teaches you what to want. Our system rewires the nervous system to let you receive it.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical line for desktop and mobile */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-luxury-gold/15 -translate-x-1/2 z-0" />

          <div className="flex flex-col gap-16 relative z-10">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline point */}
                  <div className="absolute left-8 md:left-1/2 h-8 w-8 rounded-full bg-luxury-black border border-luxury-gold flex items-center justify-center -translate-x-1/2 z-20">
                    <span className="text-[10px] font-sans font-bold text-luxury-gold">{step.num}</span>
                  </div>

                  {/* Content side */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12">
                    <div
                      className={`p-8 rounded-[24px] bg-white/5 border border-white/10 hover:border-luxury-gold/30 hover:bg-white/10 transition-all duration-300 shadow-md ${
                        isEven ? "md:text-right flex flex-col md:items-end" : "md:text-left flex flex-col md:items-start"
                      }`}
                    >
                      <div className="h-12 w-12 rounded-full bg-luxury-gold/15 flex items-center justify-center mb-6 text-luxury-gold">
                        {step.icon}
                      </div>
                      <span className="text-[10px] font-sans tracking-widest uppercase text-luxury-gold font-medium mb-2 block">
                        Step {step.num}
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl text-white font-semibold mb-4">
                        {step.title}
                      </h3>
                      <p className="font-sans text-sm text-white/70 font-light leading-relaxed max-w-md">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty side for layout spacing */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Small Arrow indicator */}
        <div className="flex justify-center mt-20">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
            onClick={() => {
              const element = document.getElementById("faq");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <span className="text-[10px] font-sans uppercase tracking-widest text-luxury-gold font-medium">FAQ Section</span>
            <ArrowDown size={14} className="text-luxury-gold" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
