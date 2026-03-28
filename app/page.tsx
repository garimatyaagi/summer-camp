import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Why from "@/components/Why";
import Activities from "@/components/Activities";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import DaySchedule from "@/components/DaySchedule";

import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Why />
        <Activities />
        <HowItWorks />
        <Pricing />
        <DaySchedule />

        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
