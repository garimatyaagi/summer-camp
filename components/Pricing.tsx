"use client";

import { motion } from "framer-motion";
import { sectionFade } from "@/lib/animations";

export default function Pricing() {
  return (
    <section id="pricing" className="relative px-6 py-[60px] md:py-[100px] lg:px-12">
      <div className="relative z-10 mx-auto max-w-[640px]">
        <motion.div variants={sectionFade} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <h2 className="font-display text-[28px] leading-[1.1] tracking-[-0.02em] text-[#2B5797] md:text-[42px] lg:text-[48px] text-center">
            One programme. One price.
          </h2>
          <p className="mt-3 text-center text-[16px] md:text-[17px] text-[#3A4D62]">
            Everything included. No add-ons, no surprises.
          </p>
        </motion.div>

        <motion.div variants={sectionFade} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          className="mt-8">
          <div className="rounded-2xl bg-white p-7 md:p-9 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#2B5797] px-4 py-1.5">
              <span className="text-[14px]">🐦</span>
              <span className="text-[12px] font-bold tracking-[0.04em] uppercase text-white">Early bird &mdash; first 25 families</span>
            </div>
            <div className="flex items-baseline gap-3">
              <p className="font-display text-[44px] leading-none text-[#2B5797] md:text-[52px]">&#8377;21,000</p>
              <p className="text-[16px] text-[#6B7D8F] line-through">&#8377;31,500</p>
            </div>
            <p className="mt-1 text-[13px] font-bold tracking-[0.04em] uppercase text-[#E05A3A]">full programme &middot; 7 weeks</p>
            <p className="mt-5 text-[16px] md:text-[17px] leading-[1.8] text-[#1E2D3D]">
              That&apos;s &#8377;3,000/week for 3.5 hours every morning, Mon&ndash;Fri, across 7 weeks.
            </p>
            <div className="my-5 h-px bg-[#E8EDF3]" />
            <ul className="space-y-2 text-[15px] md:text-[16px] text-[#1E2D3D]">
              <li className="flex items-start gap-2"><span className="text-[#3A8C6E] mt-0.5">&#10003;</span> All 7 weeks of the programme</li>
              <li className="flex items-start gap-2"><span className="text-[#3A8C6E] mt-0.5">&#10003;</span> Every material, snack, and take-home</li>
              <li className="flex items-start gap-2"><span className="text-[#3A8C6E] mt-0.5">&#10003;</span> Friday Showcase for parents every week</li>
              <li className="flex items-start gap-2"><span className="text-[#3A8C6E] mt-0.5">&#10003;</span> The Week 7 Exhibition</li>
              <li className="flex items-start gap-2"><span className="text-[#3A8C6E] mt-0.5">&#10003;</span> Certificate of completion</li>
            </ul>
            <div className="my-5 h-px bg-[#E8EDF3]" />
            <a href="/register"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#E05A3A] py-4 text-[14px] font-bold text-white shadow-[0_4px_16px_rgba(224,90,58,0.25)] transition-all duration-300 hover:bg-[#C94B2E] hover:scale-[1.01]">
              Register interest <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
