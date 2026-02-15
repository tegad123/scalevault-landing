"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle } from "lucide-react";

const BOOKING_URL = "/book-a-free-call";

interface HeroProps {
  videoUrl?: string;
}

function getVideoEmbed(url: string) {
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const videoId = url.includes("youtu.be")
      ? url.split("youtu.be/")[1]?.split("?")[0]
      : url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  if (url.includes("loom.com")) {
    const loomId = url.split("/share/")[1]?.split("?")[0];
    return `https://www.loom.com/embed/${loomId}`;
  }
  if (url.includes("vimeo.com")) {
    const vimeoId = url.split("vimeo.com/")[1]?.split("?")[0];
    return `https://player.vimeo.com/video/${vimeoId}`;
  }
  return url;
}

export function Hero({ videoUrl }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Video - respects prefers-reduced-motion */}
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/80" aria-hidden="true" />

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
          You&apos;re One Chargeback Away From{" "}
          <span className="text-[#F59E0B]">Losing Your Payment Processor</span>
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

        {/* Video Section */}
        {videoUrl && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="aspect-video rounded-2xl shadow-2xl overflow-hidden border border-white/10 bg-white/5">
              <iframe
                src={getVideoEmbed(videoUrl)}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Scale Vault AI - How We Protect Your Revenue"
              />
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Watch: How we help course creators protect their revenue
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
