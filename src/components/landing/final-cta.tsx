"use client";

import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-black/95 to-black border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Stop Losing Revenue to Friendly Fraud
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-400 mt-4"
        >
          We only take 3-5 builds per quarter. Get started today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <motion.a
            href="/login"
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
            className="inline-block bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold px-10 py-5 text-xl rounded-lg transition-colors duration-300"
          >
            Get started
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sm text-gray-500 mt-4"
        >
          Create your account and let&apos;s build your platform.
        </motion.p>
      </div>
    </section>
  );
}
