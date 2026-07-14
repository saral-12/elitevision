"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, User, Mail, Phone, ArrowRight } from "lucide-react";
import { funnelConfig } from "@/config/funnelConfig";

export default function Registration() {
  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
    }
  });

  const onSubmit = async (data) => {
    // Simulate API call and store registration info in localStorage
    await new Promise((resolve) => setTimeout(resolve, 1500));
    localStorage.setItem("eve_registration", JSON.stringify(data));
    router.push("/welcome");
  };

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-luxury-gradient">
      
      {/* Floating Gold Particles (Background) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-3 h-3 rounded-full bg-gold/30 blur-[1px] animate-float" />
        <div className="absolute top-[60%] left-[8%] w-5 h-5 rounded-full bg-gold/20 blur-[2px] animate-float-slow" />
        <div className="absolute top-[25%] right-[12%] w-4 h-4 rounded-full bg-gold/25 blur-[1px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-[20%] right-[20%] w-6 h-6 rounded-full bg-gold/15 blur-[3px] animate-float-slow" style={{ animationDelay: "4s" }} />
        <div className="absolute top-[80%] left-[50%] w-3 h-3 rounded-full bg-gold/40 blur-[1px] animate-float" style={{ animationDelay: "1s" }} />
        
        {/* Soft Gold Gradients */}
        <div className="absolute -top-[20%] left-[20%] w-[500px] h-[500px] rounded-full bg-gold/5 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      </div>

      <div className="w-full max-w-xl z-10 flex flex-col items-center">
        {/* Logo Monogram */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-20 h-20 rounded-full overflow-hidden bg-luxury-black border border-gold/35 flex items-center justify-center mb-6 shadow-xl gold-border-glow"
        >
          <Image
            src="/images/logo.png"
            alt="Elite Vision Empire Logo"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Headings */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <h1 className="font-serif-luxury text-4xl sm:text-5xl font-black tracking-tight text-luxury-black mb-4 uppercase gold-glow">
            {funnelConfig.brand.name}
          </h1>
          <p className="max-w-md mx-auto text-sm sm:text-base text-gray-600 font-sans-luxury tracking-wide leading-relaxed font-light">
            {funnelConfig.brand.tagline}
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="w-full glass-card rounded-2xl p-8 md:p-10 border border-gold/20 shadow-2xl relative"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          
          <h2 className="font-serif-luxury text-xl font-semibold text-luxury-black text-center mb-6 tracking-wider">
            Begin Your Transformation
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Full Name */}
            <div className="relative">
              <label htmlFor="fullName" className="block text-xs font-medium uppercase tracking-wider text-gray-500 mb-1.5 font-sans-luxury">
                Full Name <span className="text-gold">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
                  <User className="w-4 h-4" />
                </span>
                <input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border bg-white/60 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300 font-sans-luxury text-sm
                    ${errors.fullName ? "border-red-400 focus:ring-red-400" : "border-gold/15 focus:border-gold"}
                  `}
                  {...register("fullName", { required: "Full name is required" })}
                />
              </div>
              {errors.fullName && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-1 text-xs text-red-500 font-sans-luxury">
                  {errors.fullName.message}
                </motion.p>
              )}
            </div>

            {/* Email Address */}
            <div className="relative">
              <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wider text-gray-500 mb-1.5 font-sans-luxury">
                Email Address <span className="text-gold">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
                  <Mail className="w-4 h-4" />
                </span>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border bg-white/60 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300 font-sans-luxury text-sm
                    ${errors.email ? "border-red-400 focus:ring-red-400" : "border-gold/15 focus:border-gold"}
                  `}
                  {...register("email", {
                    required: "Email address is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-1 text-xs text-red-500 font-sans-luxury">
                  {errors.email.message}
                </motion.p>
              )}
            </div>

            {/* Phone Number */}
            <div className="relative">
              <label htmlFor="phone" className="block text-xs font-medium uppercase tracking-wider text-gray-500 mb-1.5 font-sans-luxury">
                Phone Number <span className="text-gold">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
                  <Phone className="w-4 h-4" />
                </span>
                <input
                  id="phone"
                  type="tel"
                  placeholder="9876543210"
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border bg-white/60 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300 font-sans-luxury text-sm
                    ${errors.phone ? "border-red-400 focus:ring-red-400" : "border-gold/15 focus:border-gold"}
                  `}
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9\s-]{10,15}$/,
                      message: "Please enter a valid phone number (at least 10 digits)",
                    },
                  })}
                />
              </div>
              {errors.phone && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-1 text-xs text-red-500 font-sans-luxury">
                  {errors.phone.message}
                </motion.p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-lg text-white font-sans-luxury font-medium text-sm tracking-wider uppercase shimmer-btn border border-transparent cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed mt-8"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/35 border-t-white rounded-full animate-spin" />
                  <span>Securing Spot...</span>
                </>
              ) : (
                <>
                  <span>Register Now</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
