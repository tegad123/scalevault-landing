"use client";

import { motion } from "framer-motion";

const rows = [
  {
    feature: "Platform ownership",
    them: "You rent it. They own everything.",
    us: "You own the code, data, and platform.",
  },
  {
    feature: "Chargeback protection",
    them: "No dispute-ready tracking.",
    us: "Every login, lesson, and quiz tracked automatically.",
  },
  {
    feature: "Evidence generation",
    them: "You scramble to screenshot emails.",
    us: "One-click bank-ready evidence package.",
  },
  {
    feature: "Branding",
    them: "Same templates as everyone else.",
    us: "Fully custom to your brand.",
  },
  {
    feature: "Monthly cost",
    them: "$97\u2013$399/month forever, you own nothing.",
    us: "One-time build, you keep it forever.",
  },
  {
    feature: "If they shut down",
    them: "You lose everything.",
    us: "Nothing changes. It\u2019s yours.",
  },
];

export function Comparison() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
        >
          Stop Renting. Start Owning.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left text-sm font-medium text-gray-500 pb-4 pr-4" />
                <th className="text-left text-sm font-medium text-gray-500 pb-4 px-4">
                  Kajabi / Teachable / Skool
                </th>
                <th className="text-left text-sm font-medium text-[#F59E0B] pb-4 pl-4">
                  ScaleVault AI
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.feature}
                  className={
                    index < rows.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }
                >
                  <td className="py-4 pr-4 text-sm font-medium text-white whitespace-nowrap">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-400">
                    {row.them}
                  </td>
                  <td className="py-4 pl-4 text-sm text-white font-medium">
                    {row.us}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
