"use client";

import { motion } from "framer-motion";
import { sectionFade } from "@/lib/animations";
import { DoodleStar } from "./Doodles";
import { PaintPalette, RobotFriend, TrophyCup, LeafBranch } from "./Illustrations";

export default function FinalCTA() {
  return (
    <section className="relative px-6 py-[48px] md:py-[72px] lg:px-12 overflow-hidden">
      {/* Thematic illustrations */}
      <div className="pointer-events-none">
        <PaintPalette className="absolute top-[10%] right-[5%] w-24 md:w-32 opacity-15 hidden md:block" />
        <RobotFriend className="absolute bottom-[15%] right-[10%] w-20 md:w-24 opacity-12 hidden lg:block" />
        <LeafBranch className="absolute top-[30%] left-[3%] w-20 opacity-10 hidden md:block" />
        <TrophyCup className="absolute bottom-[25%] left-[8%] w-16 opacity-15 hidden md:block" />
        <DoodleStar className="absolute top-[60%] right-[20%] w-10 opacity-20 hidden md:block" color="#F0C75E" />
      </div>

      <motion.div variants={sectionFade} initial="hidden" whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 mx-auto max-w-[1400px]">

        <h2 className="font-display text-[32px] leading-[1.08] tracking-[-0.025em] text-[#2B5797] sm:text-[44px] md:text-[56px] lg:text-[68px] max-w-[800px]">
          This summer, let them make{" "}
          <span className="relative inline-block">
            something amazing
            <svg viewBox="0 0 120 14" fill="none" className="absolute -bottom-1 left-0 w-full h-4 md:h-5" preserveAspectRatio="none">
              <path d="M3 9 C15 4, 30 12, 50 7 S85 3, 117 8" stroke="#E05A3A" strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M5 11 C20 6, 40 13, 60 8 S95 5, 115 10" stroke="#F0C75E" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
            </svg>
          </span>.
        </h2>

        <p className="mt-7 text-[17px] leading-[1.85] text-[#1E2D3D] md:text-[19px] max-w-[520px]">
          Seven weeks. They paint, build, cook, sell, and present &mdash; not by following instructions, but by figuring it out themselves. Ages 5&ndash;8. Bangalore. April&ndash;May 2026.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a href="/register"
            className="group inline-flex items-center gap-2.5 rounded-full bg-coral px-8 py-4 text-[14px] font-bold text-white shadow-[0_4px_20px_rgba(224,90,58,0.3)] transition-all duration-300 hover:bg-coral-dark hover:scale-[1.03]">
            Register interest <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </a>
          <a href="https://wa.me/917678676150" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#2B5797] hover:text-[#E05A3A] transition-colors hover:underline underline-offset-4">
            <span>&#x1F4AC;</span> WhatsApp us
          </a>
        </div>
        <p className="mt-4 text-[13px] text-[#6B7D8F]">
          Questions? Call or WhatsApp: +91 76786 76150
        </p>
      </motion.div>
    </section>
  );
}
