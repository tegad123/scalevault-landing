"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar } from "lucide-react";

const BOOKING_URL = "/book-a-free-call";

const faqs = [
  {
    question: "Who is this for?",
    answer:
      "Course creators and coaches selling $2K\u2013$10K+ programs \u2014 especially in day trading, business coaching, and high-ticket education. If you\u2019re processing significant revenue and chargebacks are a real risk to your business, this is built for you.",
  },
  {
    question: "What do you build?",
    answer:
      "A fully custom course platform that you own \u2014 not rent. It includes student and admin portals, content delivery, and built-in chargeback protection that automatically tracks every login, lesson, and quiz your students complete. When a dispute hits, you generate bank-ready evidence in 60 seconds.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Projects start at $5,000 for the full platform build, plus optional monthly hosting and maintenance. You\u2019ll own everything \u2014 the code, the data, the platform. We\u2019ll cover exact pricing on the call based on your course structure and needs.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most platforms are built and launched within 2\u20133 weeks. We handle everything \u2014 design, development, content migration, and QA. You review, approve, and go live.",
  },
  {
    question: "Do I need to be technical?",
    answer:
      "No. You fill out an intake form, give us your course content, and we handle the rest. Your platform comes with a simple admin dashboard \u2014 if you can use Kajabi or Skool, you can use this.",
  },
  {
    question: "What if I haven\u2019t had a chargeback yet?",
    answer:
      "If you sell above $2K, you will. Every dispute costs you the sale, the fees, and your processor\u2019s trust. A few bad months and they cut you off. One call and we\u2019ll estimate your real exposure.",
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
    <section id="faq" className="py-20 px-4">
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
