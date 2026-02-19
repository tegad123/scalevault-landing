"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle } from "lucide-react";

const BOOKING_URL = "/book-a-free-call";

export function Hero() {
  const videoRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-black">
      {/* Content layer */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] text-sm font-medium">
            <CheckCircle className="w-4 h-4" />
            89% Chargeback Win Rate — vs. 40% Industry Average
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white"
        >
          High-Ticket Creators Lose Thousands to Chargebacks{" "}
          <span className="text-[#F59E0B]">They Could Have Won.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed"
        >
          We build course platforms you own — with built-in chargeback protection that wins disputes automatically.
        </motion.p>

        {/* Confidence line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-base md:text-lg text-gray-300/85 italic mt-4 max-w-2xl mx-auto"
        >
          Every dispute you lose without us is a dispute you could have won.
        </motion.p>

        {/* Inline YouTube Video */}
        <motion.div
          ref={videoRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mt-8 max-w-3xl mx-auto"
        >
          <div className="aspect-video rounded-2xl shadow-2xl overflow-hidden border border-white/10 bg-white/5">
            {isVisible && (
              <iframe
                src="https://www.youtube.com/embed/oDf_3afaMBM?autoplay=1&mute=1&playsinline=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                style={{ border: 0 }}
                title="ScaleVault - How We Protect Your Revenue"
              />
            )}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-[#F59E0B]/25"
          >
            <Calendar className="w-5 h-5" />
            Book a Free 30-Min Call
          </a>
        </motion.div>

      </div>
    </section>
  );
}
