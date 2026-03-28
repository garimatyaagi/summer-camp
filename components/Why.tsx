"use client";

import { motion } from "framer-motion";
import { fadeUpStagger, staggerContainer } from "@/lib/animations";

export default function Why() {
  return (
    <section className="relative px-6 py-[80px] md:py-[120px] lg:px-12 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* The hook */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-[720px]"
        >
          <h2 className="font-display text-[30px] leading-[1.15] tracking-[-0.02em] text-[#2B5797] md:text-[44px] lg:text-[52px]">
            We don&apos;t give kids instructions.{" "}
            <span className="relative inline-block">
              We give them problems to solve
              <svg viewBox="0 0 200 12" fill="none" className="absolute -bottom-1 left-0 w-full h-3" preserveAspectRatio="none">
                <path d="M3 8 C30 3, 60 11, 100 6 S160 3, 197 8" stroke="#E05A3A" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </span>.
          </h2>
        </motion.div>

        {/* Two columns */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid md:grid-cols-2 gap-8 md:gap-12"
        >
          {/* Left: the philosophy */}
          <motion.div variants={fadeUpStagger} custom={0}>
            <p className="text-[17px] md:text-[19px] leading-[1.75] text-[#1E2D3D]">
              Most camps tell kids what to do. Follow step 1, step 2, step 3. Here&apos;s your finished craft. Go home.
            </p>
            <p className="mt-5 text-[17px] md:text-[19px] leading-[1.75] text-[#1E2D3D]">
              We do it differently. The instructor doesn&apos;t say &ldquo;do this.&rdquo; They say &ldquo;how would you do this?&rdquo;
            </p>
            <p className="mt-5 text-[17px] md:text-[19px] leading-[1.75] text-[#1E2D3D]">
              Your child fails, tries again, and figures it out themselves. That&apos;s not something they forget after summer.
            </p>
          </motion.div>

          {/* Right: concrete examples */}
          <motion.div variants={fadeUpStagger} custom={1}
            className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-6 md:p-7">
            <p className="text-[12px] font-bold tracking-[0.08em] uppercase text-[#E05A3A] mb-5">
              What this looks like in practice
            </p>
            <div className="space-y-4">
              {[
                { week: "Art", normal: "\"Paint this landscape\"", ours: "\"Here's a canvas and 6 colours. Make something that makes you feel proud.\"" },
                { week: "Science", normal: "\"Follow these steps\"", ours: "\"How would you make this erupt higher? Try 3 things.\"" },
                { week: "Cooking", normal: "\"Here's a recipe\"", ours: "\"Here are 10 ingredients. Design a dish. Test it. Improve it.\"" },
                { week: "Robots", normal: "\"Build this from a kit\"", ours: "\"Your robot needs to carry a ball across the table. Figure out how.\"" },
              ].map((item) => (
                <div key={item.week} className="pb-4 border-b border-[#E8EDF3] last:border-0 last:pb-0">
                  <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#6B7D8F]">{item.week} week</span>
                  <p className="mt-1 text-[14px] text-[#6B7D8F] line-through">{item.normal}</p>
                  <p className="mt-0.5 text-[15px] font-medium text-[#2B5797]">{item.ours}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* The outcome — what they walk out with */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-6 md:p-8"
        >
          <p className="text-[12px] font-bold tracking-[0.08em] uppercase text-[#E05A3A] mb-5">
            After 7 weeks, they walk out with
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { emoji: "\uD83C\uDFA8", text: "A painting they framed" },
              { emoji: "\uD83E\uDDEA", text: "A science journal" },
              { emoji: "\uD83C\uDF73", text: "A recipe book" },
              { emoji: "\uD83E\uDD16", text: "A robot they built" },
              { emoji: "\uD83C\uDF3F", text: "A nature journal" },
              { emoji: "\uD83D\uDCB0", text: "Earnings from their business" },
              { emoji: "\uD83C\uDFC6", text: "An exhibition they presented" },
              { emoji: "\uD83D\uDCAA", text: "The confidence to figure things out" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="text-[20px] flex-shrink-0 mt-0.5">{item.emoji}</span>
                <span className="text-[15px] md:text-[16px] text-[#2B5797] font-medium leading-[1.4]">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
