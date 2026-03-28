"use client";

import { motion } from "framer-motion";
import { fadeUpStagger, staggerContainer } from "@/lib/animations";

const outcomes = [
  { emoji: "\uD83C\uDFA8", title: "A painting they framed", sub: "Not a follow-along. Their vision, their canvas." },
  { emoji: "\uD83E\uDDEA", title: "A science journal they wrote", sub: "Hypothesise, test, record. Real scientific method." },
  { emoji: "\uD83C\uDF73", title: "A restaurant they ran", sub: "Menu, pricing, service. Parents are the customers." },
  { emoji: "\uD83C\uDF3F", title: "A nature journal they drew", sub: "Observe, sketch, document. Like a real naturalist." },
  { emoji: "\uD83E\uDD16", title: "A robot they built from scratch", sub: "Blueprint first, then build, test, and fix." },
  { emoji: "\uD83D\uDCB0", title: "A business they ran", sub: "Make products, price them, sell to parents. Real money." },
  { emoji: "\uD83C\uDFC6", title: "An exhibition they presented", sub: "Gallery lights, printed labels, a room full of parents." },
];

export default function Why() {
  return (
    <section className="relative px-6 py-[80px] md:py-[120px] lg:px-12 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1200px]">

        {/* BLOCK 1: What they walk out with — THE HERO OF THIS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="font-display text-[30px] leading-[1.1] tracking-[-0.02em] text-[#2B5797] md:text-[44px] lg:text-[56px] max-w-[700px]">
            After 7 weeks, they walk out{" "}
            <span className="relative inline-block">
              with all of this
              <svg viewBox="0 0 200 12" fill="none" className="absolute -bottom-1 left-0 w-full h-3 md:h-4" preserveAspectRatio="none">
                <path d="M3 8 C30 3, 60 11, 100 6 S160 3, 197 8" stroke="#E05A3A" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </span>.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {outcomes.map((item, i) => (
            <motion.div key={i} variants={fadeUpStagger} custom={i}
              className="bg-white rounded-2xl p-5 md:p-6 shadow-[0_2px_16px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-300">
              <span className="text-[28px] block mb-3">{item.emoji}</span>
              <h3 className="text-[17px] md:text-[18px] font-bold text-[#2B5797] leading-[1.3]">{item.title}</h3>
              <p className="mt-1.5 text-[14px] md:text-[15px] text-[#3A4D62] leading-[1.6]">{item.sub}</p>
            </motion.div>
          ))}

          {/* The confidence card — spans full width on mobile, fits grid on desktop */}
          <motion.div variants={fadeUpStagger} custom={7}
            className="bg-[#2B5797] rounded-2xl p-5 md:p-6 shadow-[0_2px_16px_rgba(43,87,151,0.2)] sm:col-span-2 lg:col-span-1">
            <span className="text-[28px] block mb-3">💪</span>
            <h3 className="text-[17px] md:text-[18px] font-bold text-white leading-[1.3]">The confidence to figure things out</h3>
            <p className="mt-1.5 text-[14px] md:text-[15px] text-white/80 leading-[1.6]">Not just crafts. The ability to face a problem, try, fail, and try again.</p>
          </motion.div>
        </motion.div>

        {/* BLOCK 2: HOW — the method, explained simply */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-20 md:mt-28"
        >
          <h2 className="font-display text-[28px] leading-[1.1] tracking-[-0.02em] text-[#2B5797] md:text-[40px] lg:text-[48px] max-w-[650px]">
            How? We don&apos;t give instructions.{" "}
            <span className="relative inline-block">
              We give them problems
              <svg viewBox="0 0 200 12" fill="none" className="absolute -bottom-1 left-0 w-full h-3" preserveAspectRatio="none">
                <path d="M3 8 C30 3, 60 11, 100 6 S160 3, 197 8" stroke="#F0C75E" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </span>.
          </h2>
          <p className="mt-5 text-[17px] md:text-[19px] leading-[1.75] text-[#1E2D3D] max-w-[560px]">
            The instructor doesn&apos;t say &ldquo;do this.&rdquo; They say &ldquo;how would you do this?&rdquo; Your child figures it out — and that&apos;s what they remember.
          </p>
        </motion.div>

        {/* Comparison — now compact, horizontal on desktop */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { week: "Art", old: "\"Paint this landscape\"", ours: "\"Make something that makes you feel proud.\"", color: "#E05A3A" },
            { week: "Science", old: "\"Follow these steps\"", ours: "\"How would you make this erupt higher?\"", color: "#2B5797" },
            { week: "Cooking", old: "\"Here's a recipe\"", ours: "\"10 ingredients. Design a dish. Test it.\"", color: "#F0C75E" },
            { week: "Robots", old: "\"Build this from a kit\"", ours: "\"Your robot needs to carry a ball. Figure out how.\"", color: "#3A8C6E" },
          ].map((item, i) => (
            <motion.div key={item.week} variants={fadeUpStagger} custom={i}
              className="bg-white rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
              <span className="text-[11px] font-bold tracking-[0.1em] uppercase" style={{ color: item.color }}>{item.week}</span>
              <p className="mt-2 text-[13px] text-[#8A95A5] line-through leading-[1.5]">{item.old}</p>
              <p className="mt-1 text-[15px] font-semibold text-[#2B5797] leading-[1.45]">{item.ours}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
