"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, MessageSquare, Star, CheckCircle2, Play } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      type: "whatsapp",
      sender: "Priya M.",
      date: "Yesterday",
      messages: [
        "Oh my god Stuti!!! You won't believe it.",
        "The client who ghosted me for 3 weeks just reached back out. They signed the contract for $10k this morning! 😭✨",
        "It happened literally 2 days after we healed that subconscious block about receiving support. I am so grateful!"
      ],
      colSpan: "md:col-span-1"
    },
    {
      type: "story",
      name: "Sophia L.",
      role: "Corporate Executive",
      stars: 5,
      title: "From burnt out to deeply aligned",
      quote: "Before booking a call, I had tried every affirmation and meditation channel on YouTube. I was successful on paper but felt empty and anxious inside. Stuti helped me see the exact pattern where I was linking my self-worth to overworking. My entire life shifted within months. I manifested a dream position with fewer hours and higher pay, and my chronic anxiety is gone.",
      colSpan: "md:col-span-2"
    },
    {
      type: "video_quote",
      name: "Marcus K.",
      role: "Founder, Zenith Media",
      quote: "Stuti's re-wiring framework is unlike anything else. It's grounded in real cognitive shifts.",
      duration: "1:24 Min",
      colSpan: "md:col-span-1"
    },
    {
      type: "screenshot",
      name: "Ananya R.",
      role: "Creative Director",
      text: "I was extremely skeptical about 'subconscious manifestation'. But Stuti's background in neurologics convinced me to watch the training. The insights on childhood conditioning clicked instantly. During our 1:1 call, she pinpointed a block I didn't even know existed. I'm now manifest-aligned and closed my biggest project yet.",
      colSpan: "md:col-span-1"
    },
    {
      type: "whatsapp",
      sender: "Devansh S.",
      date: "3 days ago",
      messages: [
        "Hey Stuti, just wanted to share a win. My relationship with my father has completely healed.",
        "We had a deep conversation today for the first time in years. No tension, just mutual love.",
        "The father-wound clearing we did worked wonders. Thank you so much."
      ],
      colSpan: "md:col-span-1"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-luxury-beige rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-16">
          <span className="text-xs font-sans tracking-widest uppercase text-luxury-gold font-medium mb-3 block">
            Real Breakthroughs
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-luxury-black font-semibold tracking-tight">
            Client Transformations
          </h2>
          <p className="font-sans text-sm text-luxury-gray font-light mt-4 max-w-xl mx-auto">
            Read the raw, honest feedback from clients who did the inner work.
          </p>
        </div>

        {/* Premium Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {testimonials.map((item, index) => {
            if (item.type === "whatsapp") {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`p-6 rounded-[24px] bg-[#F7F9FA] border border-luxury-gold/15 shadow-sm flex flex-col gap-4 ${item.colSpan}`}
                >
                  {/* WhatsApp Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-black/5">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-luxury-gold/20 flex items-center justify-center font-sans font-bold text-xs text-luxury-black">
                        {item.sender[0]}
                      </div>
                      <div>
                        <p className="text-xs font-sans font-semibold text-luxury-black flex items-center gap-1">
                          {item.sender} <CheckCircle2 size={12} className="text-green-500 fill-current" />
                        </p>
                        <p className="text-[9px] font-sans text-luxury-gray">Verified Client Chat</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-sans text-luxury-gray uppercase tracking-wider">{item.date}</span>
                  </div>

                  {/* Messages list */}
                  <div className="flex flex-col gap-2.5">
                    {item.messages.map((msg, i) => (
                      <div
                        key={i}
                        className={`max-w-[85%] rounded-[16px] px-4 py-2.5 text-xs font-sans leading-relaxed ${
                          i === item.messages.length - 1
                            ? "bg-white text-luxury-black self-start rounded-bl-sm border border-black/5 shadow-xs"
                            : "bg-white text-luxury-black self-start border border-black/5 shadow-xs"
                        }`}
                      >
                        {msg}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            }

            if (item.type === "story") {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`p-8 md:p-10 rounded-[24px] bg-[#FAF8F5] border border-luxury-gold/20 shadow-sm flex flex-col justify-between gap-6 ${item.colSpan}`}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-1 text-luxury-gold">
                      {[...Array(item.stars)].map((_, i) => (
                        <Star key={i} size={16} className="fill-current" />
                      ))}
                    </div>
                    <h4 className="font-serif text-xl font-semibold text-luxury-black leading-snug">
                      "{item.title}"
                    </h4>
                    <p className="font-sans text-sm text-luxury-gray leading-relaxed font-light">
                      {item.quote}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-luxury-gold/10">
                    <div className="h-10 w-10 rounded-full bg-luxury-gold flex items-center justify-center text-white">
                      <Quote size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-sans font-bold text-luxury-black uppercase tracking-wider">{item.name}</p>
                      <p className="text-[10px] font-sans text-luxury-gray uppercase tracking-widest">{item.role}</p>
                    </div>
                  </div>
                </motion.div>
              );
            }

            if (item.type === "video_quote") {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`p-6 rounded-[24px] bg-luxury-black text-white border border-luxury-gold/30 shadow-md flex flex-col gap-6 justify-between ${item.colSpan}`}
                >
                  <div className="flex flex-col gap-4">
                    <span className="text-[9px] font-sans tracking-widest uppercase text-luxury-gold font-semibold">
                      Video Testimonial
                    </span>
                    <p className="font-serif text-base italic leading-relaxed text-white/90">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div>
                      <p className="text-xs font-sans font-bold text-white uppercase tracking-wider">{item.name}</p>
                      <p className="text-[9px] font-sans text-white/60 uppercase tracking-widest">{item.role}</p>
                    </div>
                    
                    {/* Play Video Circle */}
                    <div className="h-10 w-10 rounded-full bg-white/10 text-luxury-gold flex items-center justify-center hover:bg-luxury-gold hover:text-white transition-colors duration-300 cursor-pointer">
                      <Play size={14} className="fill-current ml-0.5" />
                    </div>
                  </div>
                </motion.div>
              );
            }

            if (item.type === "screenshot") {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`p-6 rounded-[24px] bg-white border border-luxury-gold/15 shadow-sm flex flex-col justify-between gap-6 ${item.colSpan}`}
                >
                  <p className="font-sans text-sm text-luxury-gray leading-relaxed font-light">
                    {item.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-luxury-beige flex items-center justify-center font-sans font-extrabold text-xs text-luxury-gold">
                      {item.name[0]}
                    </div>
                    <div>
                      <p className="text-xs font-sans font-bold text-luxury-black uppercase tracking-wider">{item.name}</p>
                      <p className="text-[9px] font-sans text-luxury-gray uppercase tracking-widest">{item.role}</p>
                    </div>
                  </div>
                </motion.div>
              );
            }

            return null;
          })}

        </div>
      </div>
    </section>
  );
}
