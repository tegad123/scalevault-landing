"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Shield } from "lucide-react";

const stats = [
  {
    icon: Zap,
    value: "60s",
    label: "Bank-Ready Evidence",
    description: "Generate a full proof packet in seconds",
  },
  {
    icon: TrendingUp,
    value: "89%",
    label: "Win Rate",
    description: "With proper evidence submission",
  },
  {
    icon: Shield,
    value: "100%",
    label: "You Own Everything",
    description: "Code, data, and platform — all yours",
  },
];

export function Stats() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Built to Protect Your Revenue
          </h2>
          <p className="text-gray-400 text-lg">
            A platform you own, with evidence that holds up
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:bg-white/10 hover:border-[#F59E0B]/30 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-[#F59E0B]" />
                </div>

                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: index * 0.1 + 0.2,
                  }}
                  className="text-4xl md:text-5xl font-bold text-white mb-2"
                >
                  {stat.value}
                </motion.div>

                <h3 className="text-white font-semibold mb-1">{stat.label}</h3>
                <p className="text-gray-500 text-sm">{stat.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
