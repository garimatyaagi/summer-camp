"use client";

import { motion } from "framer-motion";
import { fadeUpStagger, staggerContainer } from "@/lib/animations";
import { DoodleCircle } from "./Doodles";

const steps = [
  { number: "01", title: "Enrol for the full programme", description: "7 weeks. April 14 \u2013 May 30. One fee, everything included. That\u2019s it.", color: "#E05A3A" },
  { number: "02", title: "Drop off at 9, pick up at 12:30", description: "Bangalore. Gated campus. We handle everything in between. You get your morning back.", color: "#9BB8D7" },
  { number: "03", title: "Week 7: the exhibition", description: "They present everything they\u2019ve made across 7 weeks to a room full of parents. Gallery lights, printed labels, real pride.", color: "#3A8C6E" },
];

export default function HowItWorks() {
  return (
    <section className="relative px-6 py-[80px] md:py-[120px] lg:px-12">
      <div className="pointer-events-none">
        <DoodleCircle className="absolute top-12 right-10 w-20 opacity-15 hidden md:block" color="#FFFFFF" />
      </div>
      <div className="mx-auto max-w-[1400px]">
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12 font-display text-[28px] leading-[1.1] tracking-[-0.02em] text-[#2B5797] md:text-[42px] lg:text-[48px]">
          Three steps. That&rsquo;s it.
        </motion.h2>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 md:grid-cols-3 md:gap-6">
          {steps.map((step, i) => (
            <motion.div key={step.number} variants={fadeUpStagger} custom={i}
              className="relative bg-white rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.06)] p-7 md:p-8">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[15px] font-bold text-white"
                style={{ backgroundColor: step.color }}>
                {step.number}
              </span>
              <h3 className="mt-4 text-[18px] font-bold leading-[1.35] text-[#2B5797]">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.8] text-[#3A4D62]">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
