"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, FileSpreadsheet, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";
import { funnelConfig } from "@/config/funnelConfig";

export default function ThankYou() {
  const [paymentDetails, setPaymentDetails] = useState(null);

  useEffect(() => {
    // 1. Retrieve payment confirmation from localStorage
    const savedPayment = localStorage.getItem("eve_payment");
    if (savedPayment) {
      try {
        setPaymentDetails(JSON.parse(savedPayment));
      } catch (e) {
        console.error("Error loading payment data", e);
      }
    }

    // 2. Fire high-end gold-themed confetti shower
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#D4AF37", "#FFFFFF", "#AA7C11"]
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#D4AF37", "#FFFFFF", "#AA7C11"]
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    
    frame();
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-80px)] py-16 px-4 sm:px-6 lg:px-8 bg-luxury-gradient overflow-hidden flex items-center justify-center">
      
      {/* Animated gold particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-4 h-4 rounded-full bg-gold/20 blur-[1px] animate-float" />
        <div className="absolute top-[80%] left-[20%] w-3 h-3 rounded-full bg-gold/30 blur-[2px] animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[40%] right-[15%] w-5 h-5 rounded-full bg-gold/15 blur-[3px] animate-float-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-[20%] right-[30%] w-4 h-4 rounded-full bg-gold/25 blur-[1px] animate-float-slow" style={{ animationDelay: "3s" }} />
      </div>

      <div className="max-w-2xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card rounded-3xl border border-gold/30 p-8 md:p-12 shadow-2xl relative text-center overflow-hidden"
        >
          {/* Subtle gold ray overlay */}
          <div className="absolute -top-[50%] left-[25%] w-[300px] h-[300px] rounded-full bg-gold/5 blur-[50px]" />

          {/* Large checkmark animation */}
          <div className="relative flex justify-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              className="w-20 h-20 rounded-full bg-gold flex items-center justify-center shadow-lg shadow-gold/25 relative z-10"
            >
              <motion.div
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Check className="w-10 h-10 text-white" strokeWidth={3} />
              </motion.div>
            </motion.div>
            
            {/* Pulsing ring behind checkmark */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute w-20 h-20 rounded-full border border-gold/40 z-0"
            />
          </div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-serif-luxury text-3xl md:text-4xl font-extrabold text-luxury-black mb-3"
          >
            Payment Successful!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-500 font-sans-luxury text-sm font-light max-w-md mx-auto mb-8 leading-relaxed"
          >
            Thank you for registering with {funnelConfig.brand.name}. Your strategy session request has been received successfully.
          </motion.p>

          <hr className="border-gold/10 w-24 mx-auto mb-8" />

          {/* Next Steps CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="font-serif-luxury text-md font-semibold text-luxury-black uppercase tracking-wider">
                Final Step Required
              </h2>
              <p className="text-xs text-gray-400 font-sans-luxury font-light leading-relaxed max-w-sm mx-auto">
                Please complete the final application form so our team can understand your goals.
              </p>
            </div>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={funnelConfig.form.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-4 px-8 rounded-lg text-white font-sans-luxury font-medium text-xs tracking-wider uppercase bg-luxury-black border border-gold/25 hover:bg-gold hover:text-luxury-black hover:border-transparent transition-all duration-300 shadow-lg cursor-pointer"
            >
              <FileSpreadsheet className="w-4 h-4 text-gold group-hover:text-luxury-black" />
              <span>Fill Application Form</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <p className="text-[11px] text-gray-400 font-sans-luxury font-light max-w-xs mx-auto leading-relaxed">
              Once your form is submitted, our team will review your application and contact you within 48 hours.
            </p>
          </motion.div>

          {/* Footer Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 pt-8 border-t border-gold/10 text-xs text-gray-500 font-sans-luxury font-light flex flex-col gap-1"
          >
            <div className="flex items-center justify-center gap-1.5 text-gold font-semibold uppercase tracking-widest text-[9px] mb-1">
              <Sparkles className="w-3 h-3" />
              <span>{funnelConfig.brand.name}</span>
            </div>
            <p>Thank you for trusting Elite Vision Empire.</p>
            <p className="font-medium text-luxury-black">See you soon!</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
