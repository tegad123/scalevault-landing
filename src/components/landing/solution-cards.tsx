"use client";

import { motion } from "framer-motion";
import { Building2, Shield, TrendingUp } from "lucide-react";

const solutions = [
  {
    icon: Building2,
    title: "Custom Platform",
    text: "Fully branded course site. You own it. Not renting Kajabi. Student dashboard + instructor admin.",
    color: "text-[#F59E0B]",
  },
  {
    icon: Shield,
    title: "Chargeback Shield",
    text: "Auto-tracks every login, lesson, assignment. One-click dispute evidence generator.",
    color: "text-[#F59E0B]",
  },
  {
    icon: TrendingUp,
    title: "75%+ Win Rate",
    text: "vs. 45% industry average. Save $9K-$20K/year on disputes alone.",
    color: "text-green-500",
  },
];

export function SolutionCards() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl hover:bg-white/10 hover:border-[#F59E0B]/50 hover:shadow-[#F59E0B]/20 hover:shadow-2xl transition-all duration-300"
              >
                <Icon
                  className={`w-16 h-16 ${solution.color} mb-6 stroke-[1.5] group-hover:scale-110 transition-transform duration-300`}
                />
                <h3 className="text-2xl font-bold text-white mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{solution.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
