"use client";

import { Typography, Card, CardBody } from "@material-tailwind/react";

const TESTIMONIALS = [
  {
    quote:
      "We were spending 20+ hours a week on student support. Scale Vault AI's chatbot cut that to 3 hours. Our students get instant answers and we get our time back.",
    name: "Sarah M.",
    business: "Trading Academy Founder",
  },
  {
    quote:
      "The AI sales agent books qualified calls while I sleep. We've closed $50K in new students in the first month without any extra work on our end.",
    name: "Mike R.",
    business: "Finance Coach",
  },
  {
    quote:
      "I was skeptical about AI, but the results speak for themselves. Our student engagement is up 40% and I'm finally able to focus on creating content instead of answering DMs.",
    name: "Lisa K.",
    business: "Business Mentor",
  },
];

function Testimonials() {
  return (
    <div className="bg-[#FAFAFA] py-20">
      <div className="container mx-auto px-8">
        <Typography
          variant="h2"
          className="text-[#1A1A1A] text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Kind words from customers
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TESTIMONIALS.map((testimonial, idx) => (
            <Card key={idx} className="bg-white shadow-sm border border-gray-100">
              <CardBody className="p-6">
                <Typography className="text-gray-600 text-base mb-6 leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </Typography>
                <div>
                  <Typography className="text-[#1A1A1A] font-semibold">
                    {testimonial.name}
                  </Typography>
                  <Typography className="text-gray-500 text-sm">
                    {testimonial.business}
                  </Typography>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

