"use client";

import { motion } from "framer-motion";
import { sectionFade } from "@/lib/animations";
import { DoodleStar } from "./Doodles";

export default function Pricing() {
  return (
    <section id="pricing" className="relative px-6 py-[80px] md:py-[120px] lg:px-12">
      <div className="pointer-events-none">
        <DoodleStar className="absolute top-16 right-12 w-14 opacity-20 hidden md:block" color="#FFFFFF" />
      </div>
      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:gap-16">
          <motion.div variants={sectionFade} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <h2 className="font-display text-[32px] leading-[1.1] tracking-[-0.02em] text-white md:text-[48px] lg:text-[56px]">
              One programme.{" "}
              <span className="relative inline-block">
                One price
                <svg viewBox="0 0 120 14" fill="none" className="absolute -bottom-1 left-0 w-full h-3" preserveAspectRatio="none">
                  <path d="M2 9 C20 4, 40 11, 60 7 S100 4, 118 8" stroke="rgba(255,255,255,0.5)" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                </svg>
              </span>.
            </h2>
            <p className="mt-5 max-w-[360px] text-[16px] leading-[1.85] text-white">
              Everything included. No add-ons, no tiers, no surprises.
            </p>
          </motion.div>

          <motion.div variants={sectionFade} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <div className="rounded-2xl bg-white p-7 md:p-9 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
              {/* Early bird badge */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-navy px-4 py-1.5">
                <span className="text-[14px]" role="img" aria-label="bird">&#x1F426;</span>
                <span className="text-[12px] font-bold tracking-[0.04em] uppercase text-cream">Early bird &mdash; first 25 families</span>
              </div>
              <div className="flex items-baseline gap-3">
                <p className="font-display text-[44px] leading-none text-[#2B5797] md:text-[52px]">&#8377;21,000</p>
                <p className="text-[16px] text-[#6B7D8F] line-through">&#8377;31,500</p>
              </div>
              <p className="mt-1 text-[13px] font-bold tracking-[0.04em] uppercase text-coral">full programme &middot; 7 weeks</p>
              <p className="mt-5 text-[15px] leading-[1.8] text-[#3A4D62]">
                That&apos;s &#8377;3,000/week. For 3.5 hours every morning, Mon&ndash;Fri, across 7 weeks.
              </p>
              <div className="my-6 h-px bg-[#E8EDF3]" />
              <p className="text-[13px] font-bold tracking-[0.04em] uppercase text-[#6B7D8F] mb-3">What&apos;s included</p>
              <ul className="space-y-2.5 text-[14px] text-[#3A4D62]">
                <li className="flex items-start gap-2"><span className="text-sage mt-0.5">&#10003;</span> All 7 weeks of the programme</li>
                <li className="flex items-start gap-2"><span className="text-sage mt-0.5">&#10003;</span> Every material, snack, and take-home</li>
                <li className="flex items-start gap-2"><span className="text-sage mt-0.5">&#10003;</span> Friday Showcase entry for parents every week</li>
                <li className="flex items-start gap-2"><span className="text-sage mt-0.5">&#10003;</span> The Week 7 Exhibition &mdash; gallery, catalog, framed artwork</li>
                <li className="flex items-start gap-2"><span className="text-sage mt-0.5">&#10003;</span> Certificate of completion</li>
              </ul>
              <div className="my-6 h-px bg-[#E8EDF3]" />
              <p className="text-[14px] text-[#3A4D62]">Sibling discount: 15% off child #2+</p>
              <a href="/register"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral py-4 text-[14px] font-bold text-white shadow-[0_4px_16px_rgba(224,90,58,0.25)] transition-all duration-300 hover:bg-coral-dark hover:scale-[1.01]">
                Reserve a spot <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>
            <p className="mt-4 text-center text-[13px] text-white/90">
              Extended Play add-on (12:30&ndash;2:30 PM): &#8377;8,000 for the full programme. Lunch included.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
