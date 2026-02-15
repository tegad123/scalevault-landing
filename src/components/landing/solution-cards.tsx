"use client";

import { motion } from "framer-motion";
import { Shield, Building2, Zap, FileCheck, CheckCircle } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Building2,
    title: "You Own Your Platform",
    subtitle: "Stop renting Kajabi forever",
    description:
      "A fully custom platform that YOU own. Your code, your data — a real business asset.",
    highlights: [
      "Custom branded design",
      "You own everything",
      "Student + admin portals",
    ],
    imagePosition: "right" as const,
    image: "/features/instructor-dashboard.png",
    imageAlt: "Instructor dashboard with analytics",
  },
  {
    icon: Zap,
    title: "Built for High-Ticket Creators",
    subtitle: "Trading coaches, business mentors, course creators",
    description:
      "Designed for $2K-$10K+ courses where chargebacks cost thousands per dispute.",
    highlights: [
      "Full content migration",
      "Zero downtime launch",
      "Ongoing support",
    ],
    imagePosition: "left" as const,
    image: "/features/student-tracking.png",
    imageAlt: "Student activity tracking dashboard",
  },
  {
    icon: Shield,
    title: "Automatic Chargeback Protection",
    subtitle: "Win 89% of disputes with one click",
    description:
      "Every student action is tracked automatically. Generate bank-ready evidence in 60 seconds.",
    highlights: [
      "Auto-tracks all activity",
      "One-click evidence generator",
      "89% win rate",
    ],
    imagePosition: "right" as const,
    image: "/features/dispute-evidence.png",
    imageAlt: "One-click dispute evidence generator",
  },
];

function FeatureBlock({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const Icon = feature.icon;
  const isImageLeft = feature.imagePosition === "left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex flex-col ${
        isImageLeft ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-12 lg:gap-20`}
    >
      {/* Content Side */}
      <div className="flex-1 max-w-xl">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 mb-6">
          <Icon className="w-7 h-7 text-[#F59E0B]" />
        </div>

        <h3 className="text-3xl md:text-5xl font-bold text-white mb-3">
          {feature.title}
        </h3>
        <p className="text-[#F59E0B] font-semibold text-lg md:text-xl mb-4">{feature.subtitle}</p>
        <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-8">
          {feature.description}
        </p>

        <ul className="space-y-4">
          {feature.highlights.map((highlight, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="flex items-center gap-3 text-gray-300 text-lg"
            >
              <CheckCircle className="w-6 h-6 text-[#F59E0B] flex-shrink-0" />
              <span>{highlight}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Image/Visual Side */}
      <div className="flex-1 w-full max-w-lg">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 overflow-hidden shadow-2xl"
        >
          {feature.image ? (
            <Image
              src={feature.image}
              alt={feature.imageAlt}
              width={600}
              height={450}
              className="w-full h-auto object-cover"
            />
          ) : (
            <div className="aspect-[4/3] flex items-center justify-center text-center p-8">
              <div>
                <Icon className="w-20 h-20 text-[#F59E0B]/30 mx-auto mb-4" />
                <p className="text-gray-500 text-sm">Feature illustration</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export function SolutionCards() {
  return (
    <section id="how-it-works" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How We Protect Your Revenue
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to stop losing money to chargebacks and own your
            course platform
          </p>
        </motion.div>

        {/* Alternating Feature Blocks */}
        <div className="space-y-24 lg:space-y-32">
          {features.map((feature, index) => (
            <FeatureBlock key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* See It In Action - Demo Video */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-24 lg:mt-32"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              See It In Action
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Watch how ScaleVault protects your revenue and gives you complete control
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 overflow-hidden shadow-2xl">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="absolute top-0 left-0 w-full h-full object-contain bg-black"
                  title="ScaleVault AI - See It In Action"
                  suppressHydrationWarning
                >
                  <source src="/scalevault-demo.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
