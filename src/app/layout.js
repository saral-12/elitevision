import { Playfair_Display, Poppins } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  title: "Elite Vision Empire | Premium Mindset & Manifestation Coaching by Nidhi Jain",
  description: "Transform your mindset, heal inner patterns, and manifest your dream life with Elite Vision Empire by Coach Nidhi Jain. Reserve your strategy session today.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Elite Vision Empire | Premium Coaching by Nidhi Jain",
    description: "Transform your mindset, heal inner patterns, and manifest your dream life. Book your strategy call.",
    type: "website",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-poppins bg-[#F8F6F2] text-[#111111] min-h-screen flex flex-col antialiased">
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="lazyOnload"
        />
        <Header />
        <main className="flex-grow flex flex-col justify-between">
          {children}
        </main>
        <footer className="w-full bg-[#0F0E0C] border-t border-gold/10 py-6 text-center text-xs text-gray-500 font-sans-luxury relative z-10">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1.5">
              <span className="text-gold font-serif-luxury font-semibold tracking-widest text-[10px] uppercase">
                Elite Vision Empire
              </span>
            </div>
            <p className="text-[10px] tracking-wider text-gray-500">
              © {new Date().getFullYear()} Elite Vision Empire. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
