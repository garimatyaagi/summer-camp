"use client";

import { motion } from "framer-motion";
import { sectionFade } from "@/lib/animations";
import { ColorfulDivider, DoodleStar, DoodleHeart } from "./Doodles";

export default function Pricing() {
  return (
    <section id="pricing" className="relative px-6 py-[80px] md:py-[120px] lg:px-12 bg-[#FFF9EE]">
      <div className="pointer-events-none">
        <DoodleStar className="absolute top-16 right-12 w-10 opacity-40 hidden md:block" color="#F4A940" />
        <DoodleHeart className="absolute bottom-20 left-10 w-8 opacity-30 hidden md:block" />
      </div>
      <div className="relative z-10 mx-auto max-w-[1400px]">
        <ColorfulDivider className="mb-10" />

        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:gap-16">
          <motion.div variants={sectionFade} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <h2 className="font-display text-[32px] leading-[1.1] tracking-[-0.02em] text-navy md:text-[48px] lg:text-[56px]">
              Simple{" "}
              <span className="relative inline-block">
                pricing
                <svg viewBox="0 0 120 14" fill="none" className="absolute -bottom-1 left-0 w-full h-3" preserveAspectRatio="none">
                  <path d="M2 9 C20 4, 40 11, 60 7 S100 4, 118 8" stroke="#2D6A4F" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                </svg>
              </span>.
            </h2>
            <p className="mt-5 max-w-[360px] text-[16px] leading-[1.85] text-text-secondary">
              No hidden fees. No confusing tiers. One price that includes everything.
            </p>
          </motion.div>

          <motion.div variants={sectionFade} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <div className="rounded-2xl border-2 border-coral/15 bg-white p-7 md:p-9 shadow-[0_4px_24px_rgba(233,69,96,0.06)]">
              <p className="font-display text-[44px] leading-none text-navy md:text-[52px]">&#8377;4,500</p>
              <p className="mt-1 text-[13px] font-bold tracking-[0.04em] uppercase text-coral">per week</p>
              <p className="mt-5 text-[15px] leading-[1.8] text-text-secondary">
                5 days &times; 3.5 hours of curated camp. Snacks, materials, and take-home kit included.
              </p>
              <div className="my-6 h-px bg-border" />
              <div className="space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-[15px] font-medium text-navy">4-week bundle</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[17px] font-bold text-navy">&#8377;15,000</span>
                    <span className="rounded-full bg-sage/10 px-2 py-0.5 text-[11px] font-bold text-sage">SAVE &#8377;3K</span>
                  </div>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-[15px] font-medium text-navy">Full season (7 weeks)</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[17px] font-bold text-navy">&#8377;24,500</span>
                    <span className="rounded-full bg-sage/10 px-2 py-0.5 text-[11px] font-bold text-sage">SAVE &#8377;7K</span>
                  </div>
                </div>
              </div>
              <div className="my-6 h-px bg-border" />
              <p className="text-[14px] text-text-secondary">Sibling discount: 15% off child #2+</p>
              <a href="https://forms.google.com/REPLACE_ME" target="_blank" rel="noopener noreferrer"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral py-4 text-[14px] font-bold text-white shadow-[0_4px_16px_rgba(233,69,96,0.25)] transition-all duration-300 hover:bg-coral-dark hover:scale-[1.01]">
                Reserve a spot <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>
            <p className="mt-4 text-center text-[13px] text-muted">
              Extended Play (12:30&ndash;2:30 PM): &#8377;1,500/week
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
