"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const BOOKING_URL = "/book-a-free-call";

export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-black/95 to-black border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#F59E0B]/10 to-transparent border border-[#F59E0B]/20 rounded-3xl p-8 md:p-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Ready to Protect Your Revenue?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto"
          >
            Book a free 30-minute strategy call. We&apos;ll analyze your current
            chargeback situation and show you exactly how we can help.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(245, 158, 11, 0.3)",
                  "0 0 40px rgba(245, 158, 11, 0.5)",
                  "0 0 20px rgba(245, 158, 11, 0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold px-10 py-5 text-xl rounded-lg transition-colors duration-300"
            >
              <Calendar className="w-6 h-6" />
              Book Free Strategy Call
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-base md:text-lg text-gray-300/85 italic"
          >
            Every dispute you lose without us is a dispute you could have won.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
