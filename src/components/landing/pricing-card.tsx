"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar } from "lucide-react";

const BOOKING_URL = "https://scalevault.ai/book-a-free-call";

const faqs = [
  {
    question: "Do I need to change platforms?",
    answer:
      "No. We build a custom platform that integrates with your existing setup \u2014 your payment processor, email provider, and course content all stay where they are. We add the tracking and evidence layer on top so you get chargeback protection without disrupting anything.",
  },
  {
    question: "Is this for low-ticket courses?",
    answer:
      "This solution is designed for creators selling programs at $2,000 and above. At that price point, even a handful of chargebacks per year can cost you $30K\u2013$50K in lost revenue. If you sell lower-ticket offers, the ROI may not justify the investment.",
  },
  {
    question: "What will I see on the call?",
    answer:
      "We\u2019ll walk you through a real bank-ready evidence packet so you can see exactly what gets submitted when a dispute hits. Then we\u2019ll review your current setup, identify gaps, and outline a 3-step chargeback defense plan tailored to your business.",
  },
  {
    question: "How fast can you implement this?",
    answer:
      "It depends on the complexity of your course and how many modules you have. On the call we\u2019ll outline the full process \u2014 from design to launch \u2014 and give you a realistic timeline. Most clients are fully live and protected within a few weeks.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-white group-hover:text-[#F59E0B] transition-colors pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-[#F59E0B] transition-colors" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-400 leading-relaxed whitespace-pre-line">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PricingCard() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Common questions before booking a call.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl px-6 md:px-8"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </motion.div>

        {/* CTA after FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-[#F59E0B]/25"
          >
            <Calendar className="w-5 h-5" />
            Book Free 30-Min Call
          </a>
          <p className="mt-3 text-sm text-gray-500">
            Free consultation &bull; No commitment required
          </p>
        </motion.div>
      </div>
    </section>
  );
}
