// components
import { Navbar, Footer } from "@/components";

// landing sections
import { Hero } from "@/components/landing/hero";
import { ProblemCards } from "@/components/landing/problem-cards";
import { SolutionCards } from "@/components/landing/solution-cards";
import { Stats } from "@/components/landing/stats";
import { Testimonial } from "@/components/landing/testimonial";
import { PricingCard } from "@/components/landing/pricing-card";
import { FinalCTA } from "@/components/landing/final-cta";

import { Comparison } from "@/components/landing/comparison";
import { MobileStickyCTA } from "@/components/mobile-sticky-cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-16 lg:pb-0">
        {/* Hero with video */}
        <Hero />

        {/* The problem we solve */}
        <ProblemCards />

        {/* How we solve it - Instantly.ai style alternating sections */}
        <SolutionCards />

        {/* Stats & metrics */}
        <Stats />

        {/* Comparison: why not competitors */}
        <Comparison />

        {/* Testimonials */}
        <Testimonial />

        {/* FAQ */}
        <PricingCard />

        {/* Final CTA */}
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
