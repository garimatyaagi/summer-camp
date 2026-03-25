"use client";

import { motion } from "framer-motion";
import { fadeUpStagger, staggerContainer } from "@/lib/animations";
import { ColorfulDivider, DoodleArrow } from "./Doodles";

const steps = [
  { number: "01", title: "Pick your weeks", description: "Enrol for 1 week, 4 weeks, or the full 7-week season. Start any Monday.", color: "#E94560", bg: "#FFF0F3" },
  { number: "02", title: "Drop off at 9, pick up at 12:30", description: "HSR Layout. Gated campus. We handle everything in between. You get your morning back.", color: "#4A90D9", bg: "#EEF4FF" },
  { number: "03", title: "They come home with something they made", description: "Every single day. Clay, paint, robots, recipe books. Fridge-door worthy, every time.", color: "#2D6A4F", bg: "#EDF7F0" },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-[80px] md:py-[120px] lg:px-12 bg-[#FFF9EE]">
      <div className="mx-auto max-w-[1400px]">
        <ColorfulDivider className="mb-10" />

        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12 font-display text-[32px] leading-[1.1] tracking-[-0.02em] text-navy md:text-[48px] lg:text-[56px]">
          Three steps. That&rsquo;s it.
        </motion.h2>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 md:grid-cols-3 md:gap-6">
          {steps.map((step, i) => (
            <motion.div key={step.number} variants={fadeUpStagger} custom={i}
              className="relative rounded-2xl p-7 md:p-8 border-2"
              style={{ backgroundColor: step.bg, borderColor: step.color + "20" }}>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[15px] font-bold text-white"
                style={{ backgroundColor: step.color }}>
                {step.number}
              </span>
              <h3 className="mt-4 text-[18px] font-bold leading-[1.35] text-navy">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.8] text-text-secondary">{step.description}</p>
              {i < 2 && (
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:block">
                  <DoodleArrow className="w-8" color={step.color} />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
