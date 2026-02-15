"use client";

const TESTIMONIALS = [
  {
    quote:
      "I told ScaleVault AI I needed a platform I actually owned — not another Skool page that looks like everyone else's. They built it, handed me the keys, and I have full control over my branding, my data, and how my students experience the program. That's how it should be when you're charging premium prices.",
    name: "Norman Wang",
    business: "CEO @ Lead Oracle",
  },
  {
    quote:
      "I was running my course with zero tracking — if a student disputed, I had nothing to show the bank. ScaleVault AI built me a platform that logs every login, every lesson, every quiz automatically. I haven't had to fight a dispute yet, but I know when it happens, I'm covered. That peace of mind alone was worth it.",
    name: "Dae .E",
    business: "@Daetradez",
  },
  {
    quote:
      "Running high-ticket coaching, I knew it was a matter of time before disputes started hitting. I didn't want to wait until I lost one to figure it out. ScaleVault AI set me up with a platform that tracks everything my students do — I finally feel like I have a real business infrastructure, not just a course on someone else's platform.",
    name: "Jaese",
    business: "Founder @ Growth Acquisitions Inc",
  },
];

function Testimonials() {
  return (
    <div className="bg-[#FAFAFA] py-20">
      <div className="container mx-auto px-8">
        <h2 className="text-[#1A1A1A] text-3xl md:text-4xl font-bold text-center mb-16">
          Kind words from customers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div key={idx} className="bg-white shadow-sm border border-gray-100 rounded-lg p-6">
              <p className="text-gray-600 text-base mb-6 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>
              <div>
                <p className="text-[#1A1A1A] font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 text-sm">
                  {testimonial.business}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
