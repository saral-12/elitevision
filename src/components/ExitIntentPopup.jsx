"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Send, Check } from "lucide-react";

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      // Trigger if cursor goes above the viewport top edge
      if (e.clientY < 20) {
        const hasSeenPopup = sessionStorage.getItem("exit_intent_seen");
        if (!hasSeenPopup) {
          setIsOpen(true);
          sessionStorage.setItem("exit_intent_seen", "true");
        }
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm">
          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg rounded-[24px] glass-card p-8 md:p-10 border border-luxury-gold/30 text-center shadow-2xl bg-white"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-luxury-gray hover:text-luxury-black p-1 rounded-full hover:bg-luxury-beige transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {!isSubmitted ? (
              <>
                {/* Badge */}
                <div className="flex items-center justify-center gap-1.5 mb-6 text-luxury-gold">
                  <Sparkles size={16} />
                  <span className="text-[10px] font-sans tracking-widest uppercase font-semibold">Special Gift</span>
                </div>

                {/* Heading */}
                <h3 className="font-serif text-2xl md:text-3xl text-luxury-black font-semibold leading-tight mb-4">
                  Wait! Before You Go...
                </h3>

                {/* Subheading */}
                <p className="font-sans text-sm text-luxury-gray font-light mb-8 max-w-sm mx-auto leading-relaxed">
                  Download Stuti's exclusive <span className="text-luxury-gold font-medium">Subconscious Rewiring Workbook</span> (valued at $29) for free today.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="email"
                    required
                    placeholder="Enter your private email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-4 rounded-full border border-luxury-gold/20 focus:border-luxury-gold bg-luxury-beige/30 text-sm font-sans tracking-wide focus:outline-none transition-colors placeholder:text-luxury-gray/50"
                  />
                  <button
                    type="submit"
                    className="w-full py-4 bg-luxury-black hover:bg-luxury-gold text-white font-sans text-xs tracking-widest uppercase rounded-full shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
                  >
                    <Send size={12} /> Send Me My Free Gift
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-6 flex flex-col items-center gap-4"
              >
                <div className="h-12 w-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                  <Check size={24} />
                </div>
                <h3 className="font-serif text-2xl text-luxury-black font-semibold">
                  Workbook Sent Successfully
                </h3>
                <p className="font-sans text-sm text-luxury-gray font-light max-w-xs leading-relaxed">
                  Check your inbox in the next 5 minutes. The subconscious reprogramming template is on its way.
                </p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-4 px-6 py-2.5 border border-luxury-gold/20 hover:border-luxury-gold/50 rounded-full text-xs font-sans tracking-widest uppercase text-luxury-gray hover:text-luxury-black transition-colors"
                >
                  Close Window
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
