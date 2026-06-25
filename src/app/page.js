import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trust from "../components/Trust";
import VSL from "../components/VSL";
import Coach from "../components/Coach";
import ImagineIf from "../components/ImagineIf";
import Testimonials from "../components/Testimonials";
import WhyThisWorks from "../components/WhyThisWorks";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import ExitIntentPopup from "../components/ExitIntentPopup";
import StickyMobileCTA from "../components/StickyMobileCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Trust />
        <VSL />
        <Coach />
        <ImagineIf />
        <Testimonials />
        <WhyThisWorks />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      
      {/* Floating Conversion Elements */}
      <ExitIntentPopup />
      <StickyMobileCTA />
    </>
  );
}
