"use client";

import { motion } from "framer-motion";
import { AlertTriangle, XCircle, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "The Problem",
    text: "Student completes 60% of your $5K course, then files chargeback claiming 'never used it.' You lose $5,000.",
    color: "text-red-500",
  },
  {
    icon: XCircle,
    title: "Kajabi Can't Save You",
    text: "Generic platforms don't track what you need to win disputes. No proof = You lose.",
    color: "text-red-500",
  },
  {
    icon: TrendingDown,
    title: "The Real Cost",
    text: "10 chargebacks/year = $30K-$50K gone. To students who got everything.",
    color: "text-red-400",
  },
];

export function ProblemCards() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Icon
                  className={`w-16 h-16 ${problem.color} mb-6 stroke-[1.5] group-hover:scale-110 transition-transform duration-300`}
                />
                <h3 className="text-2xl font-bold text-white mb-4">
                  {problem.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{problem.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
