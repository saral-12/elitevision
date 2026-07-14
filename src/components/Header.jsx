"use client";

import Link from "next/link";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import ProgressIndicator from "./ProgressIndicator";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0F0E0C]/80 backdrop-blur-md border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-4 md:py-3 gap-4">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-gold/40 transition-transform duration-500 group-hover:rotate-12 bg-luxury-black flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Elite Vision Empire Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-sm font-bold tracking-widest text-luxury-black uppercase group-hover:text-gold transition-colors duration-300">
                Elite Vision Empire
              </span>
              <span className="text-[9px] uppercase tracking-wider text-gray-500 font-sans-luxury">
                Premium Coaching
              </span>
            </div>
          </Link>
          
          {/* Progress Indicator */}
          <div className="w-full md:w-auto md:min-w-[400px]">
            <ProgressIndicator />
          </div>
        </div>
      </div>
    </header>
  );
}
