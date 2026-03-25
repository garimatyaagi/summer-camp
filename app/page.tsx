import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Why from "@/components/Why";
import Activities from "@/components/Activities";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import DaySchedule from "@/components/DaySchedule";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Why />
        <Activities />
        <HowItWorks />
        <Pricing />
        <DaySchedule />
        <Gallery />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
