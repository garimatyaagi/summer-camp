"use client";

import { motion } from "framer-motion";
import { fadeUpStagger, staggerContainer } from "@/lib/animations";
import { DoodleStar } from "./Doodles";

const pillars = [
  { emoji: "\uD83C\uDFAF", title: "One real skill every week", desc: "Not a random activity buffet. Each week goes deep into one discipline \u2014 art, science, cooking, nature, engineering, business." },
  { emoji: "\uD83D\uDCC1", title: "A portfolio they build", desc: "Every week adds a real piece of work. By Week 7 they have paintings, journals, robots, recipes \u2014 all documented." },
  { emoji: "\uD83C\uDFA8", title: "A proper exhibition", desc: "Week 7 ends with a gallery opening. Fairy lights, printed labels, a catalog. They present their work to parents." },
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
          Not just a summer camp.{" "}
          <span className="relative inline-block">
            A maker studio
            <svg viewBox="0 0 200 12" fill="none" className="absolute -bottom-1 left-0 w-full h-3" preserveAspectRatio="none">
              <path d="M3 8 C30 3, 60 11, 100 6 S160 3, 197 8" stroke="rgba(255,255,255,0.5)" strokeWidth="3" strokeLinecap="round" fill="none" />
            </svg>
          </span>.
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 text-[17px] leading-[1.8] text-white max-w-[520px]">
          Most camps keep kids busy. We teach them something they can point to and say: I made that.
        </motion.p>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div key={i} variants={fadeUpStagger} custom={i}
              className="bg-white rounded-2xl p-6 md:p-7 shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
              <span className="text-[28px] block mb-3">{p.emoji}</span>
              <h3 className="text-[17px] font-bold text-[#2B5797] leading-[1.3]">{p.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.7] text-[#3A4D62]">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
