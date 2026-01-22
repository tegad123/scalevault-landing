"use client";

import { motion } from "framer-motion";

// Placeholder logos - replace with actual client/partner logos
const logos = [
  { name: "Company 1", placeholder: true },
  { name: "Company 2", placeholder: true },
  { name: "Company 3", placeholder: true },
  { name: "Company 4", placeholder: true },
  { name: "Company 5", placeholder: true },
];

export function TrustedBy() {
  return (
    <section className="py-16 px-4 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-gray-500 uppercase tracking-wider mb-8"
        >
          Trusted by High-Ticket Course Creators
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              {/* Placeholder logo box - replace with actual <img> tags */}
              <div className="w-28 h-10 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
                <span className="text-gray-500 text-xs font-medium">Logo {index + 1}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
