"use client";

import { motion } from "framer-motion";

export function ProblemCards() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-10 text-center"
        >
          You Already Know The Problem
        </motion.h2>

        {/* Three punches */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          <p>
            A student completes your entire course, then disputes the charge. You have no proof they logged in.
          </p>
          <p>
            Your processor flags your account. A few more disputes and they cut you off entirely.
          </p>
          <p>
            You lose the sale, the fees, and the hours scrambling to build a case you were never set up to win.
          </p>
        </motion.div>

        {/* Bridge */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl font-semibold text-white mt-10 text-center"
        >
          The real question is what are you doing about it.
        </motion.p>
      </div>
    </section>
  );
}
