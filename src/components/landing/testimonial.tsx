"use client";

import { motion } from "framer-motion";

export function Testimonial() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 shadow-2xl hover:bg-white/10 transition-all duration-300"
        >
          <blockquote className="text-2xl italic leading-relaxed text-white text-center">
            &ldquo;Went from losing $40K/year in chargebacks to under $10K. This
            paid for itself in 2 months.&rdquo;
          </blockquote>
          <p className="text-lg text-gray-400 mt-6 text-center">
            — Trading Coach, $2M/year revenue
          </p>
        </motion.div>
      </div>
    </section>
  );
}
