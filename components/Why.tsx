"use client";

import { motion } from "framer-motion";
import { fadeUpStagger, staggerContainer } from "@/lib/animations";

export default function Why() {
  return (
    <section className="relative px-6 py-[80px] md:py-[120px] lg:px-12">
      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* The hook — what parents already know */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-[720px]"
        >
          <h2 className="font-display text-[28px] leading-[1.15] tracking-[-0.02em] text-[#2B5797] md:text-[42px] lg:text-[48px]">
            Most summer camps are a collection of random activities.
          </h2>
          <p className="mt-5 text-[16px] md:text-[17px] leading-[1.75] text-[#3A4D62]">
            A different craft every day. Nothing connects. Your child comes home
            and can&apos;t really tell you what they learned. By the next Monday,
            they&apos;ve forgotten it all.
          </p>
        </motion.div>

        {/* The pivot — what we do instead */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid md:grid-cols-2 gap-8 md:gap-12"
        >
          {/* Left: the difference */}
          <motion.div variants={fadeUpStagger} custom={0}>
            <h3 className="font-display text-[24px] md:text-[30px] leading-[1.15] text-[#2B5797]">
              This camp is one programme.
            </h3>
            <p className="mt-4 text-[16px] leading-[1.75] text-[#3A4D62]">
              7 weeks. 7 skills. Each week builds on the last. Art teaches them
              to see. Science teaches them to question. Cooking teaches them to
              measure. Building teaches them to plan. Selling teaches them to
              communicate.
            </p>
            <p className="mt-4 text-[16px] leading-[1.75] text-[#3A4D62]">
              By Week 7, they curate their best work and present it at a real
              exhibition — with printed labels, gallery lighting, and a room
              full of parents.
            </p>
          </motion.div>

          {/* Right: what they walk out with */}
          <motion.div variants={fadeUpStagger} custom={1}
            className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-6 md:p-7">
            <p className="text-[12px] font-bold tracking-[0.08em] uppercase text-[#E05A3A] mb-4">
              After 7 weeks, they walk out with
            </p>
            <div className="space-y-3.5">
              {[
                { emoji: "\uD83C\uDFA8", text: "A framed painting" },
                { emoji: "\uD83E\uDDEA", text: "A science journal" },
                { emoji: "\uD83C\uDF73", text: "A recipe book" },
                { emoji: "\uD83C\uDF3F", text: "A nature journal" },
                { emoji: "\uD83E\uDD16", text: "A robot they designed" },
                { emoji: "\uD83D\uDCB0", text: "Earnings from their business" },
                { emoji: "\uD83C\uDFC6", text: "An exhibition they presented" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[15px] md:text-[16px] text-[#2B5797] font-medium">
                  <span className="text-[18px] flex-shrink-0">{item.emoji}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-[#E8EDF3]">
              <p className="text-[13px] text-[#3A4D62] leading-[1.6]">
                Not random crafts. Real work they&apos;re proud of.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
