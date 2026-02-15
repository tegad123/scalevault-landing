"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    text: "A student completes your entire course, then disputes the charge. You have no proof they logged in.",
    border: "border-red-900/60",
  },
  {
    number: "02",
    text: "Your processor flags your account. A few more disputes and they cut you off entirely.",
    border: "border-red-600/70",
  },
  {
    number: "03",
    text: "You lose the sale, the fees, and the hours scrambling to build a case you were never set up to win.",
    border: "border-red-500",
  },
];

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
          className="text-4xl md:text-5xl font-bold text-white mb-14 text-center"
        >
          You Already Know The Problem
        </motion.h2>

        {/* Numbered steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -60, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.25,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className={`relative flex items-start gap-6 pl-6 border-l-2 ${step.border} py-4`}
            >
              <span className="text-6xl md:text-7xl font-bold text-white/[0.08] leading-none select-none shrink-0">
                {step.number}
              </span>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed pt-2">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bridge */}
        <motion.p
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="text-xl md:text-2xl font-bold text-[#F59E0B] mt-16 text-center"
        >
          The real question is what are you doing about it.
        </motion.p>
      </div>
    </section>
  );
}
