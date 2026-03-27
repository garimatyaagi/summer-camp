"use client";

import { motion } from "framer-motion";
import { fadeUpStagger, staggerContainer } from "@/lib/animations";
import { DoodleStar, DoodleCircle } from "./Doodles";

const lines = [
  { text: "Your kid doesn\u2019t need another screen, another tuition class, or another structured programme with a 47-slide curriculum deck.", large: false },
  { text: "They need space to get their hands dirty.", large: true },
  { text: "To build a robot out of cardboard. To fail at making a volcano and try again. To stand up in front of other kids and tell a story they invented.", large: false },
  { text: "That\u2019s what this camp is. Three and a half hours every morning, five days a week, for as many weeks as you\u2019d like. They show up. They make things. They come home buzzing.", large: false },
  { text: "No screens. No homework. No sitting still.", large: true },
  { text: "Every single day, they bring home something they made. Clay animals Monday. Volcanoes Tuesday. A cardboard robot by Friday. Your fridge door won\u2019t have enough magnets.", large: false },
];

export default function Why() {
  return (
    <section className="relative px-6 py-[80px] md:py-[120px] lg:px-12">
      {/* Doodle decorations — white on blue */}
      <div className="pointer-events-none">
        <DoodleStar className="absolute top-10 right-8 w-16 opacity-20 md:right-16" color="#FFFFFF" />
        <DoodleCircle className="absolute top-[40%] left-4 w-24 opacity-15 hidden md:block" color="#FFFFFF" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-[32px] leading-[1.1] tracking-[-0.02em] text-white md:text-[48px] lg:text-[56px] max-w-[700px]">
          Summer breaks are long.{" "}
          <span className="relative inline-block">
            This one could be different
            <svg viewBox="0 0 200 12" fill="none" className="absolute -bottom-1 left-0 w-full h-3" preserveAspectRatio="none">
              <path d="M3 8 C30 3, 60 11, 100 6 S160 3, 197 8" stroke="rgba(255,255,255,0.5)" strokeWidth="3" strokeLinecap="round" fill="none" />
            </svg>
          </span>.
        </motion.h2>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-0 md:grid-cols-[1fr_1fr] md:gap-20 lg:mt-16">
          <div />
          <div className="space-y-7">
            {lines.map((line, i) => (
              <motion.p key={i} variants={fadeUpStagger} custom={i}
                className={line.large
                  ? "text-white font-display text-[22px] leading-[1.35] md:text-[26px]"
                  : "text-[16px] leading-[1.85] text-white/75 md:text-[17px]"}>
                {line.text}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
