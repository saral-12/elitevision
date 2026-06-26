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
      </body>
    </html>
  );
}
