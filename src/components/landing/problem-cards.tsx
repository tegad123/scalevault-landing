"use client";

import { motion } from "framer-motion";
import { AlertTriangle, XCircle, TrendingDown, Ban } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Chargebacks Create Payout Holds & Processing Risk",
    text: "A student completes 80% of your $5,000 course, then files a dispute claiming they never received it. Without proper tracking, the bank sides with them — and your processor flags your account.",
    color: "text-red-500",
  },
  {
    icon: XCircle,
    title: "Generic Platforms Don\u2019t Provide Dispute-Ready Evidence",
    text: "Most course platforms don\u2019t track the granular activity you need to win disputes. Without timestamped proof of logins, lesson completions, or engagement, you\u2019re left without a defense.",
    color: "text-red-500",
  },
  {
    icon: TrendingDown,
    title: "A Few Disputes Per Year Can Cost You $30K+",
    text: "Just 6\u201310 chargebacks per year on high-ticket courses means $30K\u2013$50K in lost revenue — from students who consumed your entire program and still filed a dispute.",
    color: "text-red-400",
  },
];

export function ProblemCards() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
            <Ban className="w-4 h-4" />
            The Problem
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Hidden Cost of Chargebacks
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            If you sell courses for $2,000+, chargebacks are a real revenue risk
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl hover:bg-red-500/5 hover:border-red-500/20 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-red-500/10 border border-red-500/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className={`w-7 h-7 ${problem.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {problem.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{problem.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
