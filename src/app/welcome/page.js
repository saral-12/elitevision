"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  UserCheck,
  PlayCircle,
  Calendar,
  CreditCard,
  FileText,
  Clock,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { funnelConfig } from "@/config/funnelConfig";

// Mapping steps to matching premium icons
const stepIcons = [
  UserCheck,
  PlayCircle,
  Calendar,
  CreditCard,
  FileText,
  Clock,
  Sparkles
];

// Animation containers
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Welcome() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/payment");
  };

  return (
    <div className="relative min-h-[calc(100vh-80px)] py-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-luxury-gradient flex flex-col justify-between">
      
      {/* Decorative background vectors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[30%] right-[-5%] w-[400px] h-[400px] rounded-full bg-gold/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-gold/5 blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-5xl mx-auto w-full z-10 flex-grow flex flex-col justify-center">
        
        {/* Intro Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <span className="text-xs uppercase tracking-widest text-gold font-sans-luxury font-semibold mb-2 block">
            Welcome to the Empire
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-luxury-black mb-3">
            Welcome to Elite Vision Empire
          </h1>
          <p className="text-gray-500 font-sans-luxury text-sm font-light">
            Watch this short introduction before moving forward.
          </p>
        </motion.div>

        {/* YouTube Video Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-3xl mx-auto w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gold/15 bg-luxury-black mb-16 gold-border-glow"
        >
          <iframe
            src={funnelConfig.video.embedUrl}
            title={funnelConfig.video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          ></iframe>
        </motion.div>

        {/* Roadmap Section */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-serif-luxury text-2xl font-bold text-luxury-black text-center mb-8 uppercase tracking-widest"
          >
            How To Get Started
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {funnelConfig.steps.map((stepItem, index) => {
              const IconComponent = stepIcons[index] || Sparkles;
              return (
                <motion.div
                  key={stepItem.step}
                  variants={itemVariants}
                  whileHover={{ y: -5, borderColor: "rgba(212, 175, 55, 0.4)" }}
                  className="glass-card rounded-xl p-6 border border-gold/15 transition-all duration-300 shadow-md flex flex-col items-center text-center relative group"
                >
                  {/* Step Badge */}
                  <span className="absolute -top-3 left-6 bg-luxury-black text-gold text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full border border-gold/30">
                    STEP {stepItem.step}
                  </span>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-[#111111]/5 flex items-center justify-center mb-4 group-hover:bg-luxury-black group-hover:text-gold transition-colors duration-300 text-luxury-black mt-2">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-serif-luxury text-sm font-semibold text-luxury-black mb-2 tracking-wide">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-sans-luxury font-light leading-relaxed">
                    {stepItem.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mt-6"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleNext}
            className="flex items-center gap-2 py-4 px-10 rounded-full text-white font-sans-luxury font-medium text-sm tracking-wider uppercase shimmer-btn border border-transparent cursor-pointer shadow-lg"
          >
            <span>Book Your Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
}
