"use client";

import React from "react";
import {
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

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
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="bg-white py-20 px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Typography
            variant="h2"
            className="text-[#1A1A1A] text-3xl md:text-4xl font-bold mb-4"
          >
            FAQs
          </Typography>
          <Typography className="text-gray-500 max-w-xl mx-auto">
            Answers to questions you might have about Scale Vault AI
          </Typography>
        </div>

        <div className="mx-auto max-w-2xl">
          {FAQS.map(({ question, answer }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
              className="border-b border-gray-200"
            >
              <AccordionHeader className="text-left text-[#1A1A1A] text-base font-medium border-0 py-5">
                {question}
              </AccordionHeader>
              <AccordionBody className="pb-5">
                <Typography className="font-normal text-gray-500">
                  {answer}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
