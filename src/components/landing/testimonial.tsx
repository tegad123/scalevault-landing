"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "We used to lose 8-10 chargebacks a month on our $5K course. Students would complete 70% of the content, then dispute claiming they 'never used it.' ScaleVault AI tracks everything - every login, every lesson, every quiz. Now we win 80% of our disputes. It's like having a legal team built into our platform.",
    name: "Marcus T.",
    company: "Online Course Creator",
  },
  {
    quote:
      "Our team was spending 10+ hours a month fighting chargebacks manually - screenshotting login records, compiling evidence, writing responses. ScaleVault AI generates a complete evidence package in one click. We went from a 40% win rate to over 75%. This paid for itself in the first month.",
    name: "Sarah K.",
    company: "High-Ticket Coach",
  },
  {
    quote:
      "I was paying Kajabi $299/month and STILL losing disputes because they don't track what banks need to see. ScaleVault gave me my own branded platform AND chargeback protection. I've saved over $20K in the last 6 months just from disputes I would have lost.",
    name: "David R.",
    company: "Digital Course Business",
  },
];

export function Testimonial() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Kind Words From Customers
        </motion.h2>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col"
            >
              {/* Quote */}
              <blockquote className="text-gray-300 leading-relaxed flex-grow">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Divider */}
              <div className="w-full h-px bg-white/10 my-6" />

              {/* Attribution */}
              <div>
                <p className="text-white font-bold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
