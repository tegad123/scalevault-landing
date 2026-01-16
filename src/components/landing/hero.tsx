"use client";

import { motion } from "framer-motion";

interface HeroProps {
  videoUrl?: string;
}

function getVideoEmbed(url: string) {
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    // Extract YouTube video ID
    const videoId = url.includes("youtu.be")
      ? url.split("youtu.be/")[1]?.split("?")[0]
      : url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  if (url.includes("loom.com")) {
    // Convert loom share URL to embed
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
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Own Your Course Platform. Stop Losing $30K+/Year to Chargebacks.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto"
        >
          Custom course platforms for high-ticket creators. Built-in chargeback
          protection. 75%+ win rate.
        </motion.p>

        {videoUrl && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div className="aspect-video rounded-xl shadow-2xl overflow-hidden">
              <iframe
                src={getVideoEmbed(videoUrl)}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Scale Vault AI Video"
              />
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: videoUrl ? 0.6 : 0.4 }}
          className="mt-12"
        >
          <a
            href="/login"
            className="inline-block bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105"
          >
            Get started
          </a>
        </motion.div>
      </div>
    </section>
  );
}
