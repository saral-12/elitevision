"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
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
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-luxury-gold origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-luxury ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-b border-luxury-gold/10 shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <Sparkles className="h-5 w-5 text-luxury-gold group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-serif text-lg md:text-xl tracking-widest text-luxury-black font-semibold">
              ELITE VISION EMPIRE
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {["About", "Testimonials", "FAQ"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-sans tracking-widest uppercase text-luxury-gray hover:text-luxury-gold transition-colors duration-300 relative py-1 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("vsl")}
              className="px-6 py-3 bg-luxury-black hover:bg-luxury-gold text-white font-sans text-xs tracking-widest uppercase rounded-full border border-luxury-black hover:border-luxury-gold transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
            >
              Watch Free Training
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-luxury-black focus:outline-none p-1"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-b border-luxury-gold/10 overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {["About", "Testimonials", "FAQ"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-left text-base font-sans tracking-widest uppercase text-luxury-gray hover:text-luxury-gold transition-colors duration-300 py-1"
                  >
                    {item}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection("vsl")}
                  className="w-full text-center py-3 bg-luxury-black hover:bg-luxury-gold text-white font-sans text-sm tracking-widest uppercase rounded-full transition-all duration-300 shadow-md"
                >
                  Watch Free Training
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
