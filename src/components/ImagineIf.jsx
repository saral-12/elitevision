"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, CircleDollarSign, Compass } from "lucide-react";

export default function ImagineIf() {
  const cards = [
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "You no longer self-sabotage",
      description: "Break free from the invisible limits you sub-consciously set for yourself. Stop procrastinating and step into your full capability."
    },
    {
      icon: <CircleDollarSign className="h-5 w-5" />,
      title: "Money flows with ease",
      description: "Release ancestral scarcity cycles. Shift your nervous system to safely receive, expand, and retain wealth without constant struggle."
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Relationships become healthier",
      description: "Heal core abandonment or anxious attachment loops. Attract loving, secure partners who reflect your true worth."
    },
    {
      icon: <Compass className="h-5 w-5" />,
      title: "You finally feel aligned and fulfilled",
      description: "Wake up every day with deep peace, high self-worth, and clarity on your purpose, knowing you are co-creating your reality."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-24 bg-luxury-beige relative overflow-hidden">
      {/* Abstract luxury shapes */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-16">
          <span className="text-xs font-sans tracking-widest uppercase text-luxury-gold font-medium mb-3 block">
            A Vision of Your Future
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-luxury-black font-semibold tracking-tight">
            Imagine If...
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="p-8 md:p-10 rounded-[24px] bg-white border border-luxury-gold/10 hover:border-luxury-gold/30 shadow-sm flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-lg group"
              whileHover={{ y: -5 }}
            >
              <div className="h-12 w-12 rounded-full bg-luxury-beige text-luxury-gold flex items-center justify-center transition-all duration-300 group-hover:bg-luxury-gold group-hover:text-white">
                {card.icon}
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-luxury-black font-semibold mt-2">
                {card.title}
              </h3>
              <p className="font-sans text-sm text-luxury-gray font-light leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
