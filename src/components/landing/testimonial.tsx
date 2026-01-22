"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "ScaleVault built me a custom platform I actually own—no more being stuck on Skool's basic setup. When a client tried to dispute after completing my entire AI strategy program, I had full proof of their engagement. Won the case in days.",
    name: "Norman Wang",
    company: "CEO @ Lead Oracle",
    image: "/testimonials/norman-wang.jpg",
    highlight: "AI Strategy Consulting",
  },
  {
    quote:
      "Running high-ticket Amazon FBA coaching, chargebacks were killing my margins. Scale Vault's platform tracks every student interaction. I've saved thousands in disputes I would have lost before.",
    name: "Jaese",
    company: "Founder @ Growth Acquisitions Inc",
    image: "/testimonials/jaese.jpg",
    highlight: "Amazon FBA Coaching",
  },
  {
    quote:
      "In day trading education, you get students who complete everything, profit from your strategies, then dispute. ScaleVault tracks every lesson, trade log, and login. When the inevitable chargebacks hit, I have bulletproof evidence. Saved me $10K+ last quarter alone.",
    name: "Dae .E",
    company: "@Daetradez",
    image: "/testimonials/daetradez.png",
    highlight: "Day Trading Education",
  },
];

export function Testimonial() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-lg">
            High-ticket creators protecting their revenue with Scale Vault
          </p>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col"
            >
              {/* Industry Tag */}
              <span className="inline-block text-xs font-semibold text-[#F59E0B] bg-[#F59E0B]/10 px-3 py-1 rounded-full mb-4 w-fit">
                {testimonial.highlight}
              </span>

              {/* Quote */}
              <blockquote className="text-gray-300 leading-relaxed flex-grow text-lg">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Divider */}
              <div className="w-full h-px bg-white/10 my-6" />

              {/* Attribution with Profile Picture */}
              <div className="flex items-center gap-4">
                {/* Profile Picture */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F59E0B]/30 to-[#F59E0B]/10 border border-[#F59E0B]/20 overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Hide image on error, show placeholder
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <p className="text-white font-bold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
