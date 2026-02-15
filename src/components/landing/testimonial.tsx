"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "I told ScaleVault AI I needed a platform I actually owned — not another Skool page that looks like everyone else's. They built it, handed me the keys, and I have full control over my branding, my data, and how my students experience the program. That's how it should be when you're charging premium prices.",
    name: "Norman Wang",
    company: "CEO @ Lead Oracle",
    image: "/testimonials/norman-wang.jpg",
    highlight: "AI Strategy Consulting",
  },
  {
    quote:
      "I was running my course with zero tracking — if a student disputed, I had nothing to show the bank. ScaleVault AI built me a platform that logs every login, every lesson, every quiz automatically. I haven't had to fight a dispute yet, but I know when it happens, I'm covered. That peace of mind alone was worth it.",
    name: "Dae .E",
    company: "@Daetradez",
    image: "/testimonials/daetradez.png",
    highlight: "Day Trading Education",
  },
  {
    quote:
      "Running high-ticket coaching, I knew it was a matter of time before disputes started hitting. I didn't want to wait until I lost one to figure it out. ScaleVault AI set me up with a platform that tracks everything my students do — I finally feel like I have a real business infrastructure, not just a course on someone else's platform.",
    name: "Jaese",
    company: "Founder @ Growth Acquisitions Inc",
    image: "/testimonials/jaese.jpg",
    highlight: "Amazon FBA Coaching",
  },
];

export function Testimonial() {
  return (
    <section id="testimonials" className="py-20 px-4">
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
