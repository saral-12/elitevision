"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Sparkles } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "Who is this training for?",
      answer: "This training is designed for high-achieving entrepreneurs, creatives, executives, and individuals who are doing all the conscious work (planning, strategy, affirmations) but still feel an invisible ceiling holding back their money flow, relationships, or career fulfillment. If you are tired of force-manifesting and ready for deep, structural shifts, this is for you."
    },
    {
      question: "Will this work if I've already tried manifestation before?",
      answer: "Absolutely. Most manifestation courses teach you to override your thoughts with affirmations, journaling, or vision boards. However, if your subconscious mind feels 'unsafe' with your new goal (e.g. fear of judgment, fear of failure, ancestral money wounds), it will actively sabotage you. This training focuses on the root cause—somatic safety and subconscious conditioning."
    },
    {
      question: "Is this completely free?",
      answer: "Yes, the masterclass is 100% free with no credit card details required. It is an educational training that gives you our exact subconscious framework. At the end, you'll have an option to book a complimentary 1:1 Clarity Call with Coach Stuti or our head advisors, but there is no obligation whatsoever."
    },
    {
      question: "How do I book a call after watching the training?",
      answer: "Directly below the video presentation and at the bottom of this page, you'll find a booking button. Clicking it opens our scheduling calendar where you can choose a time that suits your timezone, fill out a short alignment questionnaire, and secure your session."
    },
    {
      question: "What happens during the clarity call?",
      answer: "On this private 45-minute call, we will look directly at your current situation, diagnose your top two subconscious self-sabotage patterns, and build a tailored path to dissolve them. If you are a fit for our advanced Elite Vision Empire coaching containers, we will walk you through what that looks like."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-1.5 mb-3 text-luxury-gold">
            <Sparkles size={16} />
            <span className="text-xs font-sans tracking-widest uppercase font-medium">Clarity</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-luxury-black font-semibold tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="rounded-[20px] border border-luxury-gold/10 bg-white shadow-xs overflow-hidden transition-all duration-300 hover:border-luxury-gold/30"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 md:px-8 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-serif text-base md:text-lg text-luxury-black font-semibold tracking-wide pr-6">
                    {faq.question}
                  </span>
                  <div className="h-8 w-8 rounded-full bg-luxury-beige flex items-center justify-center text-luxury-gold shrink-0 transition-transform duration-300">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 border-t border-luxury-gold/5 pt-4">
                        <p className="font-sans text-sm text-luxury-gray leading-relaxed font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
