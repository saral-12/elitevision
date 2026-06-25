"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function Footer() {
  const links = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Contact Us", href: "#" }
  ];

  return (
    <footer className="bg-luxury-black text-white/50 border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center gap-10">
        
        {/* Brand Signoff */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-white">
            <Sparkles className="h-4 w-4 text-luxury-gold" />
            <span className="font-serif text-base tracking-widest uppercase font-semibold">
              ELITE VISION EMPIRE
            </span>
          </div>
          <p className="font-sans text-xs text-white/40 tracking-wider text-center max-w-sm font-light">
            Reprogramming self-concept to create unshakeable reality shifts. Led by Coach Stuti Jain.
          </p>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-wrap justify-center gap-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-xs font-sans tracking-wider uppercase hover:text-luxury-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Separator */}
        <div className="w-full max-w-lg h-[1px] bg-white/5" />

        {/* Copyright */}
        <p className="font-sans text-[10px] tracking-widest uppercase text-white/30 text-center font-light">
          © {new Date().getFullYear()} ELITE VISION EMPIRE. ALL RIGHTS RESERVED.
        </p>

      </div>
    </footer>
  );
}
