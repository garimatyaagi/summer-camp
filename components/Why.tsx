"use client";

import { motion } from "framer-motion";
import { fadeUpStagger, staggerContainer } from "@/lib/animations";

export default function Why() {
  return (
    <section className="relative px-6 py-[48px] md:py-[72px] lg:px-12 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1200px]">

        {/* THE BIG IDEA */}
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
            We give kids a challenge, the raw materials, and one question: <em className="font-semibold text-[#2B5797] not-italic">&ldquo;How would you figure this out?&rdquo;</em>
          </p>
        </motion.div>

        {/* 3 pillars */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid md:grid-cols-3 gap-4 md:gap-5"
        >
          {[
            {
              num: "01",
              title: "Start with why, not how",
              desc: "Before they build a volcano, they ask: what makes things erupt? Understanding comes before doing.",
              color: "#E05A3A",
            },
            {
              num: "02",
              title: "Try, fail, try differently",
              desc: "The robot didn\u2019t move? Good. Why not? Kids learn more from one failure they fix than ten successes they copied.",
              color: "#2B5797",
            },
            {
              num: "03",
              title: "Own the outcome",
              desc: "No two projects look the same. Every painting, robot, and business is theirs \u2014 because they made every decision.",
              color: "#3A8C6E",
            },
          ].map((pillar, i) => (
            <motion.div key={pillar.num} variants={fadeUpStagger} custom={i}
              className="bg-white rounded-2xl p-6 shadow-[0_2px_16px_rgba(0,0,0,0.05)]">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[13px] font-bold text-white"
                style={{ backgroundColor: pillar.color }}>{pillar.num}</span>
              <h3 className="mt-3 text-[17px] md:text-[19px] font-bold text-[#2B5797] leading-[1.3]">{pillar.title}</h3>
              <p className="mt-2 text-[14px] md:text-[15px] leading-[1.7] text-[#3A4D62]">{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* What this looks like — reframed as OUR approach, not a comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-10 bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] overflow-hidden"
        >
          <div className="p-6 pb-0">
            <h3 className="text-[20px] md:text-[24px] font-bold text-[#2B5797]">What we actually say to kids.</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {[
              { week: "Art week", icon: "🎨", prompt: "Here\u2019s a canvas and 6 colours. Make something that makes you feel proud." },
              { week: "Science week", icon: "🧪", prompt: "How would you make this erupt higher? You have 3 attempts." },
              { week: "Story week", icon: "📖", prompt: "Invent a character with a fear and a superpower. Write their story." },
              { week: "Robot week", icon: "🤖", prompt: "Your robot needs to carry a ball across the table. Figure out how." },
            ].map((item) => (
              <div key={item.week} className="p-5 md:p-6 border-t border-[#E8EDF3] sm:odd:border-r">
                <span className="text-[18px]">{item.icon}</span>
                <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#6B7D8F] ml-2">{item.week}</span>
                <p className="mt-2 text-[16px] md:text-[17px] font-semibold text-[#2B5797] leading-[1.45] italic">&ldquo;{item.prompt}&rdquo;</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
