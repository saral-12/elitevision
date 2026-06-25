"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past 500px (hero height)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToVSL = () => {
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
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-30 p-4 bg-white/90 backdrop-blur-md border-t border-luxury-gold/20 shadow-lg md:hidden flex justify-center items-center"
        >
          <button
            onClick={handleScrollToVSL}
            className="w-full py-4 text-xs font-sans tracking-widest uppercase text-white rounded-full shadow-md shimmer-button font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <Play size={12} className="fill-current" /> Watch Free Training
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
