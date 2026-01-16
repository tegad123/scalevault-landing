"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is ScaleVault AI?",
    answer:
      "We build fully custom course platforms for high-ticket creators with built-in chargeback protection that you OWN. Every login, lesson, assignment, and message your students take is automatically tracked and timestamped—so when a chargeback hits, you generate ironclad dispute evidence in 60 seconds with one button click. This results in a 75%+ win rate (vs. 45% industry average), saving you $20K-$40K+ per year in lost revenue. You get a professional, branded platform WITHOUT renting Kajabi forever, and you have FREE, AUTOMATIC chargeback protection built in from day one.",
  },
  {
    question: "How much is it?",
    answer:
      "We're not a marketing agency or SaaS company, so we're not going to charge you RIDICULOUS MONTHLY SUBSCRIPTIONS that add up to tens of thousands over the years. Us on the other hand, we build you a custom platform once, you own it forever, and monthly support is only $297/mo for hosting, maintenance, and new features. Book a free call and we'll give you an exact quote based on what you need built.",
  },
  {
    question: "Why should you get ScaleVault AI?",
    answer:
      "The reason why our solution is so valuable to the high-ticket creators we've worked with is because they're winning 75%+ of chargeback disputes without ANY manual work. To get the same level of evidence on any other platform it would require you to manually request access logs from support, dig through emails, and compile everything yourself—costing you HOURS of work per dispute and often resulting in lost cases because the evidence is incomplete or late. All the dispute evidence you generate from us is going to be comprehensive and bank-ready since it's tracked automatically from day one: lesson completions, video watch percentages, assignment submissions, quiz scores, message history, login timestamps. Your win rate skyrockets to 75%+ compared to the 45% industry average on platforms like Kajabi or Teachable.",
  },
  {
    question: "What makes y'all different?",
    answer:
      "We've helped clients protect $100K+ in revenue from chargebacks, so we know the ins and outs of high-ticket course businesses and what evidence wins disputes. We are a custom platform company, not a SaaS rental service, so you don't have to worry about paying INSANE monthly fees to Kajabi forever ($2,400-$6,000/year) for a platform you'll never own.\n\nHere's what sets us apart:\n\n1. You OWN the platform. Not renting software—you own the code, the data, everything. If you ever want to sell your business, this is a valuable asset.\n\n2. 75%+ chargeback win rate. Industry average is 45%. Our clients win 3 out of 4 disputes because the evidence is automatic, comprehensive, and bank-ready.\n\n3. Built for high-ticket creators. We specialize in trading coaches, business mentors, and educators charging $2K-$10K+ per student.\n\n4. Fully custom, not a template. This is designed for YOUR brand, YOUR students, YOUR business. No cookie-cutter themes.\n\n5. Fast delivery. We handle everything: design, development, content migration, training. Zero downtime.",
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
            Answers to questions you might have about ScaleVault AI.
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
      </div>
    </section>
  );
}
