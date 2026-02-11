"use client";

import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";

const BOOKING_URL = "/book-a-free-call";

export function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA only after scrolling past the hero (~100vh)
      setVisible(window.scrollY > window.innerHeight * 0.85);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-black/90 backdrop-blur-md border-t border-white/10 px-4 py-3 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold py-3.5 rounded-lg transition-colors duration-200 shadow-lg shadow-[#F59E0B]/20"
      >
        <Calendar className="w-5 h-5" />
        Book Free 30-Min Call
      </a>
    </div>
  );
}
