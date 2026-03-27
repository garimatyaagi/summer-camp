import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Why from "@/components/Why";
import Activities from "@/components/Activities";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import DaySchedule from "@/components/DaySchedule";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { DoodleWavyDivider } from "@/components/Doodles";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Why />
        <Activities />
        <div className="flex justify-center py-1 -my-4 relative z-10">
          <DoodleWavyDivider className="w-48 md:w-72 h-6 opacity-30" color="#3A8C6E" />
        </div>
        <HowItWorks />
        <Pricing />
        <DaySchedule />
        <div className="flex justify-center py-1 -my-4 relative z-10">
          <DoodleWavyDivider className="w-48 md:w-72 h-6 opacity-25" color="#9BB8D7" />
        </div>
        <Gallery />
        <FAQ />
        <div className="flex justify-center py-1 -my-4 relative z-10">
          <DoodleWavyDivider className="w-48 md:w-72 h-6 opacity-30" color="#E05A3A" />
        </div>
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
