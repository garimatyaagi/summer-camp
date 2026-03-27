"use client";

import { motion } from "framer-motion";
import { sectionFade } from "@/lib/animations";
import { DoodleStar, DoodleSun, DoodleHeart, DoodleCircle, DoodleSpiral, DoodlePaintBlob, DoodleZigzag, ColorfulDivider } from "./Doodles";

export default function FinalCTA() {
  return (
    <section className="relative px-6 py-[100px] md:py-[160px] lg:px-12 overflow-hidden">
      {/* Heavy doodle decorations */}
      <div className="pointer-events-none">
        <DoodleSun className="absolute top-8 right-[8%] w-20 md:w-28 opacity-60" />
        <DoodleStar className="absolute top-[15%] right-[25%] w-10 opacity-50" color="#E94560" />
        <DoodleStar className="absolute top-[60%] right-[5%] w-8 opacity-40" color="#2D6A4F" />
        <DoodleHeart className="absolute bottom-[20%] right-[15%] w-12 opacity-45" />
        <DoodleCircle className="absolute top-[40%] right-[10%] w-14 opacity-30 hidden md:block" color="#F4A940" />
        <DoodlePaintBlob className="absolute bottom-[10%] right-[30%] w-20 opacity-20 hidden lg:block" color="#4A90D9" />
        <DoodleSpiral className="absolute bottom-[30%] left-[3%] w-12 opacity-25 hidden md:block" />
        <DoodleZigzag className="absolute top-[70%] left-[8%] w-16 opacity-25 hidden lg:block" color="#F4A940" />
        <DoodleStar className="absolute bottom-[15%] left-[12%] w-6 opacity-35 hidden md:block" color="#4A90D9" />
      </div>

      <motion.div variants={sectionFade} initial="hidden" whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 mx-auto max-w-[1400px]">
        <ColorfulDivider className="mb-10" />

        <h2 className="font-display text-[36px] leading-[1.08] tracking-[-0.025em] text-navy sm:text-[48px] md:text-[64px] lg:text-[76px] max-w-[800px]">
          This summer, let them{" "}
          <span className="relative inline-block">
            make
            <svg viewBox="0 0 120 14" fill="none" className="absolute -bottom-1 left-0 w-full h-4 md:h-5" preserveAspectRatio="none">
              <path d="M3 9 C15 4, 30 12, 50 7 S85 3, 117 8" stroke="#E94560" strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M5 11 C20 6, 40 13, 60 8 S95 5, 115 10" stroke="#F4A940" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
            </svg>
          </span>{" "}
          something.
        </h2>

        <p className="mt-7 text-[16px] leading-[1.85] text-text-secondary md:text-[18px] max-w-[460px]">
          Camp runs April 14 &ndash; May 30, 2026. HSR Layout, Bangalore. Ages 5&ndash;8.
          Early bird pricing for the first 25 families.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a href="/register"
            className="group inline-flex items-center gap-2.5 rounded-full bg-coral px-8 py-4 text-[14px] font-bold text-white shadow-[0_4px_20px_rgba(233,69,96,0.3)] transition-all duration-300 hover:bg-coral-dark hover:scale-[1.03]">
            Reserve a spot <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-coral hover:underline underline-offset-4">
            <span>&#x1F4AC;</span> WhatsApp us
          </a>
        </div>
        <p className="mt-4 text-[13px] text-muted">
          Questions? Call or WhatsApp: +91 98765 43210
        </p>
      </motion.div>
    </section>
  );
}
