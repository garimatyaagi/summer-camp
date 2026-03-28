"use client";

import { motion } from "framer-motion";
import { fadeUpStagger, staggerContainer } from "@/lib/animations";

export default function Why() {
  return (
    <section className="relative px-6 py-[80px] md:py-[120px] lg:px-12 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1200px]">

        {/* THE BIG IDEA — first principles */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-[800px]"
        >
          <p className="text-[12px] md:text-[13px] font-bold tracking-[0.12em] uppercase text-[#E05A3A] mb-4">Our philosophy</p>
          <h2 className="font-display text-[32px] leading-[1.08] tracking-[-0.02em] text-[#2B5797] md:text-[48px] lg:text-[60px]">
            We teach kids to think{" "}
            <span className="relative inline-block">
              from first principles
              <svg viewBox="0 0 200 12" fill="none" className="absolute -bottom-1 left-0 w-full h-3 md:h-5" preserveAspectRatio="none">
                <path d="M3 8 C30 3, 60 11, 100 6 S160 3, 197 8" stroke="#E05A3A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                <path d="M5 10 C35 5, 65 12, 105 7 S165 4, 195 9" stroke="#F0C75E" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
              </svg>
            </span>.
          </h2>
          <p className="mt-6 text-[18px] md:text-[21px] leading-[1.7] text-[#1E2D3D] max-w-[600px]">
            Not &ldquo;follow these steps.&rdquo; Not &ldquo;copy this example.&rdquo;
            We give kids a problem, the raw materials, and one question: <em className="font-semibold text-[#2B5797] not-italic">&ldquo;How would you figure this out?&rdquo;</em>
          </p>
        </motion.div>

        {/* The 3 pillars — what first principles means here */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid md:grid-cols-3 gap-5"
        >
          {[
            {
              num: "01",
              title: "Start with why, not how",
              desc: "Before they build a volcano, they ask: what makes things erupt? Before they paint, they ask: what makes a colour feel warm? Understanding comes before doing.",
              color: "#E05A3A",
            },
            {
              num: "02",
              title: "Try, fail, try differently",
              desc: "The robot didn't move? Good. Why not? What if you changed the wheels? Kids learn more from one failure they fix than ten successes they copied.",
              color: "#2B5797",
            },
            {
              num: "03",
              title: "Own the outcome",
              desc: "No two projects look the same. Every child's painting, robot, and business is theirs — because they made every decision along the way.",
              color: "#3A8C6E",
            },
          ].map((pillar, i) => (
            <motion.div key={pillar.num} variants={fadeUpStagger} custom={i}
              className="bg-white rounded-2xl p-6 md:p-7 shadow-[0_2px_16px_rgba(0,0,0,0.05)]">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[13px] font-bold text-white"
                style={{ backgroundColor: pillar.color }}>{pillar.num}</span>
              <h3 className="mt-4 text-[18px] md:text-[20px] font-bold text-[#2B5797] leading-[1.3]">{pillar.title}</h3>
              <p className="mt-3 text-[15px] md:text-[16px] leading-[1.75] text-[#3A4D62]">{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison — what this looks like vs normal camps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] overflow-hidden"
        >
          <div className="p-6 md:p-8 pb-0 md:pb-0">
            <p className="text-[12px] font-bold tracking-[0.1em] uppercase text-[#6B7D8F] mb-1">In practice</p>
            <h3 className="text-[22px] md:text-[26px] font-bold text-[#2B5797]">Same activities. Completely different approach.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {[
              { week: "Art week", icon: "🎨", old: "\"Paint this landscape step by step\"", ours: "\"Here's a canvas and 6 colours. Make something that makes you feel proud.\"" },
              { week: "Science week", icon: "🧪", old: "\"Follow these instructions to make a volcano\"", ours: "\"How would you make this baking soda erupt higher? Try 3 different things.\"" },
              { week: "Cooking week", icon: "🍳", old: "\"Follow this recipe exactly\"", ours: "\"Here are 10 ingredients. Design a dish. Test it. Serve it to us.\"" },
              { week: "Robot week", icon: "🤖", old: "\"Assemble this kit\"", ours: "\"Your robot needs to carry a ball across the table. Figure out how.\"" },
            ].map((item) => (
              <div key={item.week} className="p-6 md:p-7 border-t border-[#E8EDF3] md:odd:border-r">
                <span className="text-[20px]">{item.icon}</span>
                <span className="text-[12px] font-bold tracking-[0.08em] uppercase text-[#6B7D8F] ml-2">{item.week}</span>
                <p className="mt-3 text-[14px] text-[#8A95A5] line-through leading-[1.5]">{item.old}</p>
                <p className="mt-1.5 text-[16px] md:text-[17px] font-semibold text-[#2B5797] leading-[1.45]">{item.ours}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* What they walk out with */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-16"
        >
          <h3 className="font-display text-[26px] md:text-[36px] leading-[1.1] text-[#2B5797] mb-8">
            What they walk out with.
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { emoji: "🎨", text: "A painting they framed" },
              { emoji: "🧪", text: "A science journal" },
              { emoji: "🍳", text: "A recipe book" },
              { emoji: "🌿", text: "A nature journal" },
              { emoji: "🤖", text: "A robot they built" },
              { emoji: "💰", text: "Real earnings from their business" },
              { emoji: "🏆", text: "An exhibition they presented" },
              { emoji: "🧠", text: "The ability to figure things out" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-[0_1px_8px_rgba(0,0,0,0.04)] flex items-start gap-3">
                <span className="text-[22px] flex-shrink-0">{item.emoji}</span>
                <span className="text-[14px] md:text-[15px] font-medium text-[#2B5797] leading-[1.4]">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
