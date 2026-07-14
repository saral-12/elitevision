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

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-16"
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
            className="max-w-2xl mx-auto flex flex-col space-y-6 relative"
          >
            {/* Connecting line for sequence */}
            <div className="absolute left-[20px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-gold/10 via-gold/40 to-gold/10 -translate-x-[0.5px] pointer-events-none hidden sm:block"></div>

            {funnelConfig.steps.map((stepItem, index) => {
              const IconComponent = stepIcons[index] || Sparkles;
              return (
                <motion.div
                  key={stepItem.step}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 rounded-xl border border-gold/10 bg-white/40 backdrop-blur-sm hover:border-gold/30 hover:bg-white/60 transition-all duration-300 group shadow-sm z-10"
                >
                  {/* Sequence Bullet/Icon */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-luxury-black text-gold flex items-center justify-center border border-gold/30 shadow-md group-hover:scale-105 transition-transform duration-300">
                    <IconComponent className="w-4 h-4" />
                  </div>

                  <div className="flex-grow pt-1">
                    <h3 className="font-serif-luxury text-sm font-semibold text-luxury-black mb-1 flex items-center gap-2 tracking-wide group-hover:text-gold transition-colors duration-300">
                      <span className="text-[10px] tracking-widest text-gold font-sans-luxury uppercase font-bold mr-1">
                        Step {stepItem.step}:
                      </span>
                      {stepItem.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-sans-luxury font-light leading-relaxed">
                      {stepItem.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
