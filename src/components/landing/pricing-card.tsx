"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar } from "lucide-react";

const BOOKING_URL = "/book-a-free-call";

const faqs = [
  {
    question: "Who is this for?",
    answer:
      "Course creators selling $2K+ programs who want to own their platform and stop losing chargebacks.",
  },
  {
    question: "What do you build?",
    answer:
      "A custom course platform you own \u2014 with built-in tracking that logs every login, lesson view, and quiz attempt. When a dispute hits, you export a one-click evidence package. 89% win rate.",
  },
  {
    question: "How much does it cost?",
    answer:
      "We build a quote for you based on your needs. We\u2019ll cover exact scope and investment on the call.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most platforms launch in 1\u20132 weeks. We handle design, development, migration, QA, and handoff.",
  },
  {
    question: "Do I need to be technical?",
    answer:
      "No. You give us your content and branding. We build, test, and hand you the keys.",
  },
  {
    question: "How is this different from Kajabi or Skool?",
    answer:
      "You own it. No rent, no TOS changes, no platform risk. And none of them track activity in a way that wins chargebacks \u2014 ours does by default.",
  },
  {
    question: "Is this call a sales pitch?",
    answer:
      "It\u2019s a 30-minute strategy call. We\u2019ll assess your setup, estimate your chargeback exposure, and tell you if we\u2019re a fit.",
  },
  {
    question: "What if I\u2019m not sure I have a chargeback problem?",
    answer:
      "If you sell above $2K, you do. Each chargeback costs 3.75x the transaction in fees and processor risk. One call and we can estimate your real exposure.",
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
