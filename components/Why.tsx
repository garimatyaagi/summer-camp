"use client";

import { motion } from "framer-motion";
import { fadeUpStagger, staggerContainer } from "@/lib/animations";
import { DoodleStar } from "./Doodles";

const outcomes = [
  "\uD83C\uDFA8 A framed painting they made from scratch",
  "\uD83E\uDDEA A science journal with experiments they ran",
  "\uD83C\uDF73 A recipe book from a restaurant they ran",
  "\uD83C\uDF3F A nature journal of Bangalore\u2019s flora and fauna",
  "\uD83E\uDD16 A robot they designed, built, and named",
  "\uD83D\uDCB0 Earnings from a real business they started",
  "\uD83C\uDFC6 An exhibition where they present it all to you",
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
          className="font-display text-[32px] leading-[1.1] tracking-[-0.02em] text-white md:text-[48px] lg:text-[56px] max-w-[800px]">
          After 7 weeks, your child walks out with{" "}
          <span className="relative inline-block">
            all of this
            <svg viewBox="0 0 200 12" fill="none" className="absolute -bottom-1 left-0 w-full h-3" preserveAspectRatio="none">
              <path d="M3 8 C30 3, 60 11, 100 6 S160 3, 197 8" stroke="rgba(255,255,255,0.5)" strokeWidth="3" strokeLinecap="round" fill="none" />
            </svg>
          </span>:
        </motion.h2>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-6 md:p-8 max-w-[640px]">
          <div className="space-y-4">
            {outcomes.map((item, i) => (
              <motion.div key={i} variants={fadeUpStagger} custom={i}
                className="flex items-start gap-3 text-[16px] md:text-[17px] leading-[1.5] text-[#2B5797] font-medium">
                <span className="text-[20px] flex-shrink-0">{item.slice(0, 2)}</span>
                <span>{item.slice(3)}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 pt-5 border-t border-[#E8EDF3]">
            <p className="text-[14px] text-[#3A4D62] leading-[1.7]">
              Not random crafts. Real work they&apos;re proud of. And the confidence
              to stand up in front of a room and present it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
