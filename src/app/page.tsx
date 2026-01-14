// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Clients from "./clients";
import Features from "./features";
import Testimonials from "./testimonials";
import Faq from "./faq";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Features />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}
