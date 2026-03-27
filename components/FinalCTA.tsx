"use client";

import { motion } from "framer-motion";
import { sectionFade } from "@/lib/animations";
import { DoodleStar, DoodleScribbleCircle } from "./Doodles";

export default function FinalCTA() {
  return (
    <section className="relative px-6 py-[100px] md:py-[160px] lg:px-12 overflow-hidden">
      {/* Minimal white doodles */}
      <div className="pointer-events-none">
        <DoodleScribbleCircle className="absolute top-[10%] right-[5%] w-48 md:w-72 opacity-10 hidden md:block" color="#FFFFFF" />
        <DoodleStar className="absolute bottom-[20%] left-[8%] w-16 opacity-20 hidden md:block" color="#FFFFFF" />
      </div>

      <motion.div variants={sectionFade} initial="hidden" whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 mx-auto max-w-[1400px]">

        <h2 className="font-display text-[36px] leading-[1.08] tracking-[-0.025em] text-white sm:text-[48px] md:text-[64px] lg:text-[76px] max-w-[800px]">
          This summer, let them make{" "}
          <span className="relative inline-block">
            something amazing
            <svg viewBox="0 0 120 14" fill="none" className="absolute -bottom-1 left-0 w-full h-4 md:h-5" preserveAspectRatio="none">
              <path d="M3 9 C15 4, 30 12, 50 7 S85 3, 117 8" stroke="#E05A3A" strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M5 11 C20 6, 40 13, 60 8 S95 5, 115 10" stroke="#F0C75E" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
            </svg>
          </span>.
        </h2>

        <p className="mt-7 text-[16px] leading-[1.85] text-white md:text-[18px] max-w-[500px]">
          Seven weeks. Art, science, cooking, nature, robots, entrepreneurship &mdash; and a proper exhibition at the end.
          Ages 5&ndash;8. HSR Layout, Bangalore. April&ndash;May 2026.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a href="/register"
            className="group inline-flex items-center gap-2.5 rounded-full bg-coral px-8 py-4 text-[14px] font-bold text-white shadow-[0_4px_20px_rgba(224,90,58,0.3)] transition-all duration-300 hover:bg-coral-dark hover:scale-[1.03]">
            Reserve a spot <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-white/80 hover:text-white transition-colors hover:underline underline-offset-4">
            <span>&#x1F4AC;</span> WhatsApp us
          </a>
        </div>
        <p className="mt-4 text-[13px] text-white/90">
          Questions? Call or WhatsApp: +91 98765 43210
        </p>
      </motion.div>
    </section>
  );
}
