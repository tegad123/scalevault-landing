"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const rows = [
  {
    feature: "Platform ownership",
    them: "You rent it. They own everything.",
    us: "You own the code, data, and platform.",
    emphasis: false,
  },
  {
    feature: "Chargeback protection",
    them: "No dispute-ready tracking.",
    us: "Every login, lesson, and quiz tracked automatically.",
    emphasis: false,
  },
  {
    feature: "Evidence generation",
    them: "You scramble to screenshot emails.",
    us: "One-click bank-ready evidence package.",
    emphasis: false,
  },
  {
    feature: "Branding",
    them: "Same templates as everyone else.",
    us: "Fully custom to your brand.",
    emphasis: false,
  },
  {
    feature: "Monthly cost",
    them: "$97\u2013$399/month forever, you own nothing.",
    us: "One-time build, you keep it forever.",
    emphasis: true,
  },
  {
    feature: "If they shut down",
    them: "You lose everything.",
    us: "Nothing changes. It\u2019s yours.",
    emphasis: true,
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
                <th className="text-left text-sm font-medium text-red-400/80 pb-4 px-4">
                  Kajabi / Teachable / Skool
                </th>
                <th className="text-left text-sm font-medium text-[#F59E0B] pb-4 pl-4 border-x border-t border-[#F59E0B]/20 rounded-t-xl bg-[#F59E0B]/5">
                  ScaleVault AI
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => {
                const isOdd = index % 2 === 1;
                const isLast = index === rows.length - 1;

                return (
                  <tr
                    key={row.feature}
                  >
                    <td
                      className={`py-4 pr-4 text-sm font-medium whitespace-nowrap ${
                        row.emphasis ? "text-white font-bold" : "text-white"
                      } ${isOdd ? "bg-white/[0.02]" : ""} ${
                        row.emphasis ? "bg-white/[0.04]" : ""
                      }`}
                    >
                      {row.feature}
                    </td>
                    <td
                      className={`py-4 px-4 text-sm ${
                        row.emphasis
                          ? "text-red-300/90 font-medium bg-red-500/[0.08]"
                          : "text-gray-400 bg-red-500/[0.03]"
                      } ${isOdd && !row.emphasis ? "bg-red-500/[0.05]" : ""}`}
                    >
                      <span className="flex items-start gap-2">
                        <X className={`w-4 h-4 flex-shrink-0 mt-0.5 ${row.emphasis ? "text-red-400" : "text-red-500/50"}`} />
                        {row.them}
                      </span>
                    </td>
                    <td
                      className={`py-4 pl-4 pr-4 text-sm text-white font-medium border-x ${
                        isLast ? "border-b rounded-b-xl" : ""
                      } border-[#F59E0B]/20 ${
                        row.emphasis
                          ? "bg-[#F59E0B]/10"
                          : isOdd
                          ? "bg-[#F59E0B]/[0.07]"
                          : "bg-[#F59E0B]/[0.03]"
                      }`}
                    >
                      <span className="flex items-start gap-2">
                        <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${row.emphasis ? "text-[#F59E0B]" : "text-[#F59E0B]/70"}`} />
                        {row.us}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
