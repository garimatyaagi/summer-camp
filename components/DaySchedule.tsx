"use client";

import { motion } from "framer-motion";
import { fadeUpStagger, staggerContainer, sectionFade } from "@/lib/animations";

const schedule = [
  { time: "9:00", title: "Welcome Circle", desc: "A name game, a question, or a short song. Everyone gets seen before the day begins. Instructor-led warm-up to bring the group together.", dur: "15 min", color: "#F0C75E" },
  { time: "9:15", title: "Make", desc: "The big hands-on session. Clay, paint, circuits, cooking, puppets \u2014 whatever the week\u2019s theme calls for. This is the heart of the day. Kids work at their own pace with instructor support.", dur: "60 min", color: "#E05A3A" },
  { time: "10:15", title: "Snack Break", desc: "Fruit and juice. Ten minutes to breathe, chat, and just be a kid. No structured activity \u2014 free time to refuel.", dur: "15 min", color: "#3A8C6E" },
  { time: "10:30", title: "Move", desc: "Obstacle courses, relay races, yoga, freeze dance. Bodies need to move before brains can focus again. Adapted to the week\u2019s theme.", dur: "60 min", color: "#9BB8D7" },
  { time: "11:30", title: "Express", desc: "Show-and-tell, storytelling, improv games, mini-presentations, puppet shows. Kids share what they made or invented. The quietest child often surprises everyone here.", dur: "40 min", color: "#F0C75E" },
  { time: "12:15", title: "Wind-down & Pick-up", desc: "Reflection circle \u2014 one word about the day. Pack the take-home. Parents arrive to a child who can\u2019t stop talking about what they made.", dur: "15 min", color: "#E05A3A" },
];

export default function DaySchedule() {
  return (
    <section id="schedule" className="relative px-6 py-[60px] md:py-[100px] lg:px-12">
      <div className="relative z-10 mx-auto max-w-[720px]">
        <motion.div variants={sectionFade} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} className="text-center mb-10">
          <h2 className="font-display text-[28px] leading-[1.1] tracking-[-0.02em] text-[#2B5797] md:text-[42px] lg:text-[48px]">
            A morning at camp.
          </h2>
          <p className="mt-3 text-[15px] md:text-[16px] text-[#3A4D62]">
            Mon&ndash;Fri &middot; 9:00 AM &ndash; 12:30 PM &middot; Every day follows this rhythm.
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-5 md:p-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}>
            {schedule.map((item, i) => (
              <motion.div key={item.time} variants={fadeUpStagger} custom={i}
                className={`flex gap-4 md:gap-5 py-5 ${i > 0 ? "border-t border-[#E8EDF3]" : ""}`}>
                <div className="flex flex-col items-center gap-1 flex-shrink-0 w-[50px]">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[14px] font-bold text-white"
                    style={{ backgroundColor: item.color }}>
                    {item.time.split(":")[0]}
                  </span>
                  <span className="text-[11px] font-semibold tabular-nums" style={{ color: item.color }}>
                    {item.time}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[17px] md:text-[18px] font-bold text-[#2B5797]">{item.title}</h3>
                  <p className="mt-1 text-[14px] md:text-[15px] leading-[1.7] text-[#3A4D62]">{item.desc}</p>
                  <span className="inline-block text-[11px] font-bold tracking-[0.06em] uppercase px-2.5 py-0.5 rounded-full bg-[#E8EDF3] text-[#6B7D8F] mt-2">{item.dur}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
