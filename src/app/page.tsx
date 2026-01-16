// components
import { Navbar, Footer } from "@/components";

// landing sections
import { Hero } from "@/components/landing/hero";
import { ProblemCards } from "@/components/landing/problem-cards";
import { SolutionCards } from "@/components/landing/solution-cards";
import { WinRateStat } from "@/components/landing/win-rate-stat";
import { Testimonial } from "@/components/landing/testimonial";
import { PricingCard } from "@/components/landing/pricing-card";
import { FinalCTA } from "@/components/landing/final-cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero videoUrl={process.env.NEXT_PUBLIC_LANDING_VIDEO_URL} />
        <ProblemCards />
        <SolutionCards />
        <WinRateStat />
        <Testimonial />
        <PricingCard />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
