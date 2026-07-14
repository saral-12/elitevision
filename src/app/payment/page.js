"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle,
  Mail,
  Phone,
  Globe,
  Lock,
  Sparkles,
  AlertCircle
} from "lucide-react";
import { funnelConfig } from "@/config/funnelConfig";

export default function Payment() {
  const router = useRouter();
  const [demoOrder, setDemoOrder] = useState(null);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      phone: "",
      countryCode: "+91",
      amount: "₹999",
    }
  });

  // Load registered user details from localStorage to prefill
  useEffect(() => {
    const savedReg = localStorage.getItem("eve_registration");
    if (savedReg) {
      try {
        const parsed = JSON.parse(savedReg);
        if (parsed.email) setValue("email", parsed.email);
        if (parsed.phone) setValue("phone", parsed.phone);
      } catch (e) {
        console.error("Error parsing registration cache", e);
      }
    }
  }, [setValue]);

  const triggerPayment = async (formData) => {
    setIsProcessing(true);
    setErrorMsg("");
    try {
      // 1. Create order on server
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: funnelConfig.pricing.fee,
          currency: funnelConfig.pricing.currency
        })
      });

      if (!response.ok) {
        throw new Error("Failed to create order. Please try again.");
      }

      const orderData = await response.json();

      // 2. If it is in demoMode, open the custom mockup modal
      if (orderData.demoMode) {
        setDemoOrder(orderData);
        setShowDemoModal(true);
        setIsProcessing(false);
        return;
      }

      // 3. Otherwise, use Razorpay checkout SDK
      if (typeof window === "undefined" || !window.Razorpay) {
        throw new Error("Razorpay SDK failed to load. Please refresh or try in Demo Mode.");
      }

      const options = {
        key: orderData.key,
        amount: orderData.amount,
        currency: orderData.currency,
        name: funnelConfig.brand.name,
        description: funnelConfig.pricing.type,
        order_id: orderData.id,
        prefill: {
          email: formData.email,
          contact: `${formData.countryCode}${formData.phone}`
        },
        theme: {
          color: "#111111"
        },
        handler: function (response) {
          // Payment Successful! Store payment response
          localStorage.setItem("eve_payment", JSON.stringify({
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id,
            signature: response.razorpay_signature,
            method: "razorpay"
          }));
          router.push("/thank-you");
        },
        modal: {
          ondismiss: function () {
            setIsProcessing(false);
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", function (resp) {
        setErrorMsg(`Payment failed: ${resp.error.description}`);
        setIsProcessing(false);
      });
      rzp.open();

    } catch (err) {
      console.error(err);
      setErrorMsg(err.message || "An unexpected error occurred.");
      setIsProcessing(false);
    }
  };

  const handleDemoSuccess = () => {
    setShowDemoModal(false);
    setIsProcessing(true);
    // Simulate API delay for processing payment
    setTimeout(() => {
      localStorage.setItem("eve_payment", JSON.stringify({
        paymentId: "pay_mock_" + Math.random().toString(36).substring(2, 9),
        orderId: demoOrder.id,
        method: "demo_simulator"
      }));
      router.push("/thank-you");
    }, 1500);
  };

  return (
    <div className="relative min-h-[calc(100vh-80px)] py-12 px-4 sm:px-6 lg:px-8 bg-luxury-gradient overflow-hidden flex items-center">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gold/5 blur-[100px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gold/5 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Details & Benefits */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-8"
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-gold font-sans-luxury font-semibold mb-2 block">
              Step 3 of 4
            </span>
            <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-luxury-black mb-4">
              Strategic Audit — Book Your Call Now
            </h1>
            <p className="text-gray-600 font-sans-luxury text-sm leading-relaxed font-light">
              We are excited to discover if we're the right fit to help you transform your life and build the future you truly deserve. Pay a <strong className="text-luxury-black font-semibold">₹199 application fee</strong> to reserve your strategy session.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="bg-white/50 border border-gold/10 rounded-2xl p-6 md:p-8 space-y-6">
            <h2 className="font-serif-luxury text-lg font-semibold text-luxury-black tracking-wide">
              What's Included In Your Session
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {funnelConfig.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-sm font-sans-luxury text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guidelines */}
          <div className="space-y-3 text-xs text-gray-500 font-sans-luxury font-light leading-relaxed">
            <p>• After payment, you will be redirected to complete your application form.</p>
            <p>• Our team will carefully review your submission and contact you within 48 hours.</p>
            <p>• The application fee is non-refundable and secures your session booking with Coach Nidhi Jain.</p>
          </div>

          {/* Contact Details */}
          <div className="border-t border-gold/10 pt-6 flex flex-wrap gap-6 text-xs text-gray-500 font-sans-luxury">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold" />
              <span>Email: <a href={`mailto:${funnelConfig.contact.email}`} className="hover:text-gold underline">{funnelConfig.contact.email}</a></span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold" />
              <span>Phone: {funnelConfig.contact.phone}</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Payment Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5"
        >
          <div className="glass-card rounded-2xl border border-gold/25 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold" />
            
            {/* Form Header */}
            <div className="p-6 border-b border-gold/10 bg-white/40 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-sans-luxury font-semibold block mb-0.5">
                  Application Fee
                </span>
                <span className="font-serif-luxury text-2xl font-black text-luxury-black">
                  {funnelConfig.pricing.formattedFee}
                </span>
              </div>
              <span className="text-[10px] bg-gold/10 border border-gold/30 text-gold px-2.5 py-1 rounded-full font-sans-luxury font-semibold uppercase tracking-wider">
                Non-Refundable
              </span>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="mx-6 mt-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-xs font-sans-luxury flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Form Body */}
            <form onSubmit={handleSubmit(triggerPayment)} className="p-6 md:p-8 space-y-5">
              {/* Email Address */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5 font-sans-luxury">
                  Email Address <span className="text-gold">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input
                    type="email"
                    placeholder="name@domain.com"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-lg border bg-white/60 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300 font-sans-luxury text-sm
                      ${errors.email ? "border-red-400 focus:ring-red-400" : "border-gold/15 focus:border-gold"}
                    `}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Please enter a valid email",
                      },
                    })}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500 font-sans-luxury">{errors.email.message}</p>
                )}
              </div>

              {/* Phone Number with Country Code */}
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-4">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5 font-sans-luxury">
                    Code
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                      <Globe className="w-3.5 h-3.5" />
                    </span>
                    <input
                      type="text"
                      className="w-full pl-8 pr-2 py-2.5 rounded-lg border border-gold/15 bg-white/60 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold text-sm font-sans-luxury"
                      {...register("countryCode")}
                    />
                  </div>
                </div>
                
                <div className="col-span-8">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5 font-sans-luxury">
                    Phone Number <span className="text-gold">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
                      <Phone className="w-4 h-4" />
                    </span>
                    <input
                      type="tel"
                      placeholder="9876543210"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-lg border bg-white/60 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300 font-sans-luxury text-sm
                        ${errors.phone ? "border-red-400 focus:ring-red-400" : "border-gold/15 focus:border-gold"}
                      `}
                      {...register("phone", {
                        required: "Phone is required",
                        pattern: {
                          value: /^[0-9\s-]{10,15}$/,
                          message: "Valid phone required",
                        },
                      })}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500 font-sans-luxury">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Amount (Readonly) */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5 font-sans-luxury">
                  Total Amount
                </label>
                <input
                  type="text"
                  readOnly
                  className="w-full px-4 py-2.5 rounded-lg border border-gold/10 bg-[#111111]/5 text-gray-600 font-sans-luxury text-sm font-semibold select-none outline-none cursor-not-allowed"
                  {...register("amount")}
                />
              </div>

              {/* Pay Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isProcessing}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg text-white font-sans-luxury font-medium text-sm tracking-wider uppercase shimmer-btn border border-transparent cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed mt-6 shadow-md"
              >
                {isProcessing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/35 border-t-white rounded-full animate-spin" />
                    <span>Processing Payment...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4 text-gold" />
                    <span>Pay {funnelConfig.pricing.formattedFee}</span>
                  </>
                )}
              </motion.button>
            </form>

            {/* Trust Footer */}
            <div className="p-4 bg-[#111111]/5 border-t border-gold/10 flex flex-col items-center gap-2">
              <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-sans-luxury font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Secure Payments via Razorpay</span>
              </div>
              <div className="w-32 h-6 bg-transparent relative opacity-70 hover:opacity-100 transition-opacity">
                {/* Razorpay Trust Badge Placeholder */}
                <div className="absolute inset-0 border border-gray-300 rounded flex items-center justify-center bg-white px-2 py-0.5 text-[9px] font-sans font-bold text-gray-500 tracking-wider">
                  RAZORPAY SECURE
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Demo Modal (Payment Simulator) */}
      <AnimatePresence>
        {showDemoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-white rounded-2xl max-w-md w-full border border-gold/30 shadow-2xl p-6 overflow-hidden relative text-center"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold" />
              
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 text-gold">
                <Sparkles className="w-6 h-6" />
              </div>

              <h3 className="font-serif-luxury text-lg font-bold text-luxury-black mb-1">
                Payment Simulator
              </h3>
              <p className="text-xs text-gray-500 font-sans-luxury font-semibold uppercase tracking-wider mb-4 text-gold">
                Sandbox Demo Mode
              </p>
              
              <div className="bg-[#F8F6F2] border border-gold/15 rounded-xl p-4 mb-6 text-left space-y-2 text-xs font-sans-luxury">
                <div className="flex justify-between">
                  <span className="text-gray-400">Order ID:</span>
                  <span className="font-mono text-gray-700">{demoOrder?.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Application:</span>
                  <span className="font-medium text-gray-700">{funnelConfig.brand.name}</span>
                </div>
                <div className="flex justify-between border-t border-gold/10 pt-2 mt-2">
                  <span className="font-medium text-gray-700">Amount to Pay:</span>
                  <span className="font-bold text-luxury-black">{funnelConfig.pricing.formattedFee}</span>
                </div>
              </div>

              <p className="text-xs text-gray-500 mb-6 font-light leading-relaxed">
                To test the complete workflow, click **Authorize Success**. This simulates a successful payment response and routes you to the final registration step.
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setShowDemoModal(false);
                    setIsProcessing(false);
                  }}
                  className="flex-1 py-3 px-4 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 font-sans-luxury font-medium text-xs tracking-wider uppercase cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDemoSuccess}
                  className="flex-1 py-3 px-4 bg-luxury-black border border-transparent rounded-lg text-white hover:bg-gold transition-colors font-sans-luxury font-medium text-xs tracking-wider uppercase cursor-pointer shadow-md"
                >
                  Authorize Success
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
