"use client";

import { motion } from "framer-motion";
import { fadeUpStagger, staggerContainer } from "@/lib/animations";
import { DoodleStar } from "./Doodles";

const contrasts = [
  {
    before: "Random activities every hour",
    after: "One skill per week, taught properly",
    detail: "Week 1 is art. All week. By Friday they understand colour, composition, and texture \u2014 not just \u201Cfun with paint.\u201D",
  },
  {
    before: "\u201CWhat did you do today?\u201D \u201CI don\u2019t know.\u201D",
    after: "They walk in the door holding something they made",
    detail: "A framed painting. A working robot. A recipe book. Something real, every single week.",
  },
  {
    before: "A certificate on the last day",
    after: "A proper exhibition for parents",
    detail: "Week 7: gallery opening with fairy lights, printed labels, and your child presenting their best work. That\u2019s the photo you\u2019ll share.",
  },
];

export default function Why() {
  return (
    <section className="relative px-6 py-[80px] md:py-[120px] lg:px-12">
      <div className="pointer-events-none">
        <DoodleStar className="absolute top-10 right-8 w-16 opacity-20 md:right-16" color="#FFFFFF" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-[32px] leading-[1.1] tracking-[-0.02em] text-white md:text-[48px] lg:text-[56px] max-w-[700px]">
          You&apos;ve tried summer camps before.{" "}
          <span className="relative inline-block">
            This one&apos;s different
            <svg viewBox="0 0 200 12" fill="none" className="absolute -bottom-1 left-0 w-full h-3" preserveAspectRatio="none">
              <path d="M3 8 C30 3, 60 11, 100 6 S160 3, 197 8" stroke="rgba(255,255,255,0.5)" strokeWidth="3" strokeLinecap="round" fill="none" />
            </svg>
          </span>.
        </motion.h2>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid gap-5 md:gap-6">
          {contrasts.map((c, i) => (
            <motion.div key={i} variants={fadeUpStagger} custom={i}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_2px_16px_rgba(0,0,0,0.06)] grid md:grid-cols-[1fr_auto_1.2fr] gap-5 md:gap-8 items-center">
              {/* Before */}
              <div>
                <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#E05A3A]/60">Most camps</span>
                <p className="mt-1.5 text-[16px] font-medium text-[#6B7D8F] leading-[1.4] line-through decoration-[#E05A3A]/30">{c.before}</p>
              </div>
              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <span className="text-[24px] text-[#2B5797]">&rarr;</span>
              </div>
              {/* After */}
              <div>
                <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#3A8C6E]">The Summer Club</span>
                <p className="mt-1.5 text-[17px] font-bold text-[#2B5797] leading-[1.35]">{c.after}</p>
                <p className="mt-2 text-[14px] leading-[1.7] text-[#3A4D62]">{c.detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
