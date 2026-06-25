"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, BookOpen, Newspaper } from "lucide-react";

export default function Trust() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="py-16 bg-white border-y border-luxury-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1: Amazon Bestseller Author */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col p-8 rounded-[20px] bg-[#FAF8F5] border border-luxury-gold/10 hover:border-luxury-gold/30 hover:-translate-y-1 transition-all duration-300 shadow-sm"
          >
            <div className="h-10 w-10 rounded-full bg-luxury-gold/10 flex items-center justify-center mb-6 text-luxury-gold">
              <Award size={20} />
            </div>
            <h3 className="font-serif text-xl text-luxury-black font-semibold mb-2">
              Amazon Bestselling Author
            </h3>
            <p className="font-sans text-xs uppercase tracking-widest text-luxury-gold font-medium mb-3">
              Elite Manifestation Guide
            </p>
            <p className="font-sans text-sm text-luxury-gray font-light leading-relaxed">
              Her publication reached #1 bestseller status in manifestation and personal transformational literature.
            </p>
          </motion.div>

          {/* Card 2: Book Showcase */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 p-8 rounded-[20px] bg-[#FAF8F5] border border-luxury-gold/10 hover:border-luxury-gold/30 hover:-translate-y-1 transition-all duration-300 shadow-sm col-span-1"
          >
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-full bg-luxury-gold/10 flex items-center justify-center mb-6 text-luxury-gold">
                  <BookOpen size={20} />
                </div>
                <h3 className="font-serif text-xl text-luxury-black font-semibold mb-2">
                  "There's Always a Choice to Flip the Story"
                </h3>
              </div>
              <p className="font-sans text-sm text-luxury-gray font-light leading-relaxed">
                Her best-selling book detailing how to change life narratives by shifting subconscious patterns.
              </p>
            </div>
            <div className="relative w-full sm:w-[90px] aspect-[2/3] rounded shadow-md border border-luxury-gold/20 overflow-hidden bg-white shrink-0 self-center">
              <Image
                src="/book_cover.png"
                alt="Book Cover"
                fill
                className="object-cover"
                sizes="90px"
              />
            </div>
          </motion.div>

          {/* Card 3: Media Features */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col p-8 rounded-[20px] bg-[#FAF8F5] border border-luxury-gold/10 hover:border-luxury-gold/30 hover:-translate-y-1 transition-all duration-300 shadow-sm"
          >
            <div className="h-10 w-10 rounded-full bg-luxury-gold/10 flex items-center justify-center mb-6 text-luxury-gold">
              <Newspaper size={20} />
            </div>
            <h3 className="font-serif text-xl text-luxury-black font-semibold mb-2">
              Featured in Major Media
            </h3>
            <p className="font-sans text-xs uppercase tracking-widest text-luxury-gold font-medium mb-4">
              Authority & Trust
            </p>
            {/* Grayscale media logos list */}
            <div className="grid grid-cols-2 gap-4 filter grayscale opacity-60">
              <div className="h-6 flex items-center justify-center text-xs font-serif font-black tracking-tighter text-luxury-black border border-black/10 rounded px-2">
                FORBES
              </div>
              <div className="h-6 flex items-center justify-center text-xs font-sans font-extrabold tracking-widest text-luxury-black border border-black/10 rounded px-2">
                YAHOO!
              </div>
              <div className="h-6 flex items-center justify-center text-xs font-sans font-bold tracking-tight text-luxury-black border border-black/10 rounded px-2">
                INSIDER
              </div>
              <div className="h-6 flex items-center justify-center text-xs font-serif italic font-bold text-luxury-black border border-black/10 rounded px-2">
                USA TODAY
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
