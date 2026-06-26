"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const steps = [
  { id: 1, label: "Register", path: "/" },
  { id: 2, label: "Welcome", path: "/welcome" },
  { id: 3, label: "Payment", path: "/payment" },
  { id: 4, label: "Complete", path: "/thank-you" },
];

export default function ProgressIndicator() {
  const pathname = usePathname();

  // Determine current step index based on the path
  const currentStepIndex = steps.findIndex((step) => step.path === pathname);
  const currentStep = currentStepIndex !== -1 ? steps[currentStepIndex].id : 1;

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-6 md:py-8">
      <div className="relative flex items-center justify-between">
        {/* Background Line */}
        <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-gray-200 -translate-y-1/2 z-0" />

        {/* Progress Line */}
        <motion.div
          className="absolute left-0 top-1/2 h-[2px] bg-gold -translate-y-1/2 z-0 origin-left"
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: (currentStep - 1) / (steps.length - 1),
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ right: 0 }}
        />

        {/* Steps */}
        {steps.map((step) => {
          const isCompleted = currentStep > step.id;
          const isActive = currentStep === step.id;

          return (
            <div key={step.id} className="relative z-10 flex flex-col items-center">
              <motion.div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors duration-300 font-sans-luxury text-sm font-semibold
                  ${isCompleted ? "bg-gold border-gold text-white" : ""}
                  ${isActive ? "bg-luxury-black border-gold text-gold gold-border-glow" : ""}
                  ${!isCompleted && !isActive ? "bg-white border-gray-300 text-gray-400" : ""}
                `}
                animate={isActive ? { scale: [1, 1.08, 1] } : { scale: 1 }}
                transition={{
                  repeat: isActive ? Infinity : 0,
                  repeatType: "reverse",
                  duration: 2,
                }}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5 text-white" strokeWidth={3} />
                ) : (
                  <span>{step.id}</span>
                )}
              </motion.div>
              <span
                className={`mt-2 font-sans-luxury text-xs font-medium tracking-wide uppercase transition-colors duration-300
                  ${isActive ? "text-gold font-semibold" : ""}
                  ${isCompleted ? "text-luxury-black" : "text-gray-400"}
                `}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
