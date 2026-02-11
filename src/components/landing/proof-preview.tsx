"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Eye } from "lucide-react";

const proofItems = [
  {
    src: "/features/instructor-dashboard.png",
    alt: "Instructor dashboard showing student logins and activity",
    label: "Logins & Activity Timeline",
  },
  {
    src: "/features/student-tracking.png",
    alt: "Student tracking with lesson completions and timestamps",
    label: "Completion & Timestamps",
  },
  {
    src: "/features/dispute-evidence.png",
    alt: "Sample bank-ready evidence PDF for chargeback disputes",
    label: "Sample Evidence PDF",
  },
];

export function ProofPreview() {
  return (
    <section id="proof-preview" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] text-sm font-medium mb-4">
            <Eye className="w-4 h-4" />
            Proof Preview
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            What Your Evidence Looks Like
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every login, lesson, and timestamp is tracked automatically — here&apos;s what banks see when you dispute.
          </p>
        </motion.div>

        {/* Proof Image Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {proofItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-[#F59E0B]/30 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Blur overlay for sensitive data */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="px-5 py-4 flex items-center gap-3">
                <Shield className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                <span className="text-sm font-medium text-white">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
