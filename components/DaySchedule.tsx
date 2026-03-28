"use client";

import { motion } from "framer-motion";
import { fadeUpStagger, staggerContainer, sectionFade } from "@/lib/animations";
import { DoodleStar } from "./Doodles";
import { ClockIcon, PaintPalette, HandsUp } from "./Illustrations";

const schedule = [
  { time: "9:00", title: "Welcome circle", description: "A game, a song, or a question to start the day. Everyone\u2019s name matters.", color: "#F0C75E" },
  { time: "9:15", title: "Make", description: "The deep-focus session. This week\u2019s challenge in action. No step-by-step instructions \u2014 kids figure it out with guidance, not answers.", color: "#E05A3A" },
  { time: "10:15", title: "Snack break", description: "Fruit, juice, and ten minutes to just be a kid.", color: "#3A8C6E" },
  { time: "10:30", title: "Move", description: "Obstacle courses, yoga, relay races, dance. Bodies need to move before brains can focus.", color: "#9BB8D7" },
  { time: "11:30", title: "Present", description: "Show-and-tell, storytelling, presenting their work. Practice for the Friday Showcase. The quietest kid often surprises everyone here.", color: "#F0C75E" },
  { time: "12:15", title: "Wind-down + pick-up", description: "Reflection circle. Pack the take-home. Parents arrive to a child who can\u2019t stop talking about their day.", color: "#E05A3A" },
];

export default function DaySchedule() {
  return (
    <section id="schedule" className="relative px-6 py-[80px] md:py-[120px] lg:px-12">
      <div className="pointer-events-none">
        <ClockIcon className="absolute top-16 right-8 w-20 md:w-28 opacity-12 hidden md:block" />
        <PaintPalette className="absolute bottom-20 left-6 w-16 opacity-10 hidden lg:block" />
        <DoodleStar className="absolute top-8 left-6 w-16 opacity-15 hidden md:block" color="#FFFFFF" />
      </div>
      <div className="relative z-10 mx-auto max-w-[1400px]">
        <motion.h2 variants={sectionFade} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 font-display text-[28px] leading-[1.1] tracking-[-0.02em] text-[#2B5797] md:text-[42px] lg:text-[48px]">
          What a morning{" "}
          <span className="relative inline-block">
            looks like
            <svg viewBox="0 0 120 14" fill="none" className="absolute -bottom-1 left-0 w-full h-3" preserveAspectRatio="none">
              <path d="M2 9 C20 4, 40 11, 60 7 S100 4, 118 8" stroke="rgba(255,255,255,0.5)" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            </svg>
          </span>.
        </motion.h2>

        <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-6 md:p-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} className="max-w-[720px]">
            {schedule.map((item, i) => (
              <motion.div key={item.time} variants={fadeUpStagger} custom={i}
                className="grid grid-cols-[56px_1fr] gap-4 py-6 md:grid-cols-[80px_1fr] md:gap-6 md:py-7"
                style={{ borderTop: i > 0 ? `2px solid ${item.color}15` : 'none' }}>
                <div className="flex flex-col items-center gap-1">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold text-white"
                    style={{ backgroundColor: item.color }}>
                    {item.time.replace(':00', '').replace(':15', '').replace(':30', '')}
                  </span>
                  <span className="text-[12px] font-semibold tabular-nums" style={{ color: item.color }}>{item.time}</span>
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-[#2B5797] md:text-[18px]">{item.title}</h3>
                  <p className="mt-1.5 text-[16px] md:text-[17px] leading-[1.8] text-[#1E2D3D] max-w-[460px]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
