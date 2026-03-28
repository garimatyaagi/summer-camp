"use client";

import { motion } from "framer-motion";
import { fadeUpStagger, staggerContainer } from "@/lib/animations";
import { DoodleCircle } from "./Doodles";
import { HandsUp, ClockIcon, TrophyCup } from "./Illustrations";

const steps = [
  { number: "01", title: "They show up every morning", description: "Mon\u2013Fri, 9 AM \u2013 12:30 PM. Gated campus in Bangalore. Each week is a new challenge \u2014 art, science, cooking, nature, robots, business.", color: "#E05A3A" },
  { number: "02", title: "They figure things out", description: "No step-by-step instructions. Instructors guide with questions, not answers. Your child learns to think, try, fail, and try again.", color: "#9BB8D7" },
  { number: "03", title: "They show you what they made", description: "Every Friday is a showcase. And Week 7 is the real exhibition \u2014 gallery lights, printed labels, and your child presenting their work to a room full of parents.", color: "#3A8C6E" },
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
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[15px] font-bold text-white"
                  style={{ backgroundColor: step.color }}>
                  {step.number}
                </span>
                <span className="w-10 h-10 opacity-40">
                  {i === 0 && <HandsUp className="w-10 h-10" />}
                  {i === 1 && <ClockIcon className="w-10 h-10" />}
                  {i === 2 && <TrophyCup className="w-10 h-10" />}
                </span>
              </div>
              <h3 className="mt-4 text-[18px] font-bold leading-[1.35] text-[#2B5797]">{step.title}</h3>
              <p className="mt-3 text-[16px] md:text-[17px] leading-[1.8] text-[#1E2D3D]">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
