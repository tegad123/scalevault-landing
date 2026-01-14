"use client";

import React from "react";

const FAQS = [
  {
    question: "What is Scale Vault AI?",
    answer:
      "We create custom AI automation systems for online education businesses. Our solutions handle student support, sales conversations, and course delivery so you can focus on teaching and growing revenue.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Every business is different, so we create custom solutions based on your specific needs. Pricing is discussed during your free strategy call. We're not an agency with set retainers - we build what you actually need.",
  },
  {
    question: "Who is this for?",
    answer:
      "Course creators, coaches, and membership site owners in high-value niches like finance, trading, real estate, and personal development. If you're doing $10K+/month and spending too much time on repetitive tasks, we can help.",
  },
  {
    question: "What makes you different?",
    answer:
      "We only work with online education businesses. We're not generalists. We understand student lifecycles, course delivery, and high-ticket sales because that's all we focus on.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState<number | null>(null);
  const handleOpen = (value: number) => setOpen(open === value ? null : value);

  return (
    <section className="bg-white py-20 px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#1A1A1A] text-3xl md:text-4xl font-bold mb-4">
            FAQs
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Answers to questions you might have about Scale Vault AI
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          {FAQS.map(({ question, answer }, key) => (
            <div key={key} className="border-b border-gray-200">
              <button
                onClick={() => handleOpen(key)}
                className="w-full text-left text-[#1A1A1A] text-base font-medium py-5 flex justify-between items-center"
              >
                {question}
                <svg
                  className={`w-5 h-5 transition-transform ${
                    open === key ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {open === key && (
                <div className="pb-5">
                  <p className="font-normal text-gray-500">{answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
