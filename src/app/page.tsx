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

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero with video */}
        <Hero videoUrl={process.env.NEXT_PUBLIC_LANDING_VIDEO_URL} />

        {/* The problem we solve */}
        <ProblemCards />

        {/* How we solve it - Instantly.ai style alternating sections */}
        <SolutionCards />

        {/* Stats & metrics */}
        <Stats />

        {/* Testimonials */}
        <Testimonial />

        {/* FAQ */}
        <PricingCard />

        {/* Final CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
