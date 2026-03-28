"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, sectionFade } from "@/lib/animations";
import { PaintPalette, ScienceBeaker, ChefHat, LeafBranch, RobotFriend, ShopSign, TrophyCup } from "./Illustrations";

const weeks = [
  { week: 1, theme: "Art", emoji: "🎨", color: "#E05A3A",
    question: "Can you create something that makes you feel proud?",
    principle: "Self-expression through experimentation",
    oneLiner: "No instructions. Just materials and one question: what do YOU want to make?",
    takeHome: "Framed painting + art portfolio",
    longTermSkills: ["Creative confidence", "Decision-making", "Self-expression", "Learning from mistakes"],
    days: [
      { day: "Mon", activity: "Goal: sculpt a clay creature that can stand on its own. Name it. Give it a story." },
      { day: "Tue", activity: "Goal: create a full collage using pressed leaves, seeds, fabric, and paper. Mount it." },
      { day: "Wed", activity: "Goal: paint a canvas. Mix your own colours. Frame it by end of day." },
      { day: "Thu", activity: "Goal: design and create a tie-dye piece. Predict the pattern. Compare to result." },
      { day: "Fri", activity: "Goal: assemble your 4-piece portfolio. Present each piece at the Parent Gallery Walk." },
    ]},
  { week: 2, theme: "Science", emoji: "🧪", color: "#2B5797",
    question: "How would you figure out why this happens?",
    principle: "Hypothesise \u2192 test \u2192 observe \u2192 explain",
    oneLiner: "Real scientific method. They design experiments, not follow them.",
    takeHome: "Experiment journal + seed kit",
    longTermSkills: ["Asking good questions", "Testing ideas", "Recording observations", "Cause & effect thinking"],
    days: [
      { day: "Mon", activity: "Goal: build a volcano and make it erupt. Then make it erupt higher. Record what changed." },
      { day: "Tue", activity: "Goal: predict which 10 objects are magnetic. Test all 10. Score your predictions." },
      { day: "Wed", activity: "Goal: make slime. Prove whether it\u2019s a liquid or solid. Design 3 tests." },
      { day: "Thu", activity: "Goal: build a seed germination kit. Write a hypothesis: what will sprout first and why?" },
      { day: "Fri", activity: "Goal: present your best experiment to parents. Explain the science behind it." },
    ]},
  { week: 3, theme: "Cooking", emoji: "🍳", color: "#F0C75E",
    question: "Can you design a dish, test it, and serve it to a real customer?",
    principle: "Measurement, iteration, and presentation",
    oneLiner: "No recipe cards. They design dishes, test them, and run a restaurant on Friday.",
    takeHome: "Recipe booklet + chef hat",
    longTermSkills: ["Measurement & ratios", "Iterating on feedback", "Presentation skills", "Serving others"],
    days: [
      { day: "Mon", activity: "Goal: create energy balls using 5 ingredients. No recipe. Taste-test 3 versions. Pick the best." },
      { day: "Tue", activity: "Goal: design a fruit art platter that looks like a scene. Make people want to eat it." },
      { day: "Wed", activity: "Goal: make lemonade. Adjust sweetness and sourness until 3 people rate it 5/5." },
      { day: "Thu", activity: "Goal: design a full restaurant menu. Name your restaurant. Price every item. Make a chef hat." },
      { day: "Fri", activity: "Goal: run a Pop-up Restaurant. Cook, plate, serve, and take orders from parents." },
    ]},
  { week: 4, theme: "Nature & Design", emoji: "🌿", color: "#3A8C6E",
    question: "What can you discover if you really look?",
    principle: "Observation, patience, and documentation",
    oneLiner: "They study nature like real naturalists \u2014 observe, sketch, document, build.",
    takeHome: "Nature journal + terrarium",
    longTermSkills: ["Patience & deep focus", "Scientific illustration", "Environmental awareness", "Independent discovery"],
    days: [
      { day: "Mon", activity: "Goal: build a mini terrarium. Choose the right soil, plants, and stones. Predict what will grow." },
      { day: "Tue", activity: "Goal: collect and press 10 different leaves. Identify patterns. Create botanical prints." },
      { day: "Wed", activity: "Goal: draw 5 detailed nature sketches. Label every part. Fill a full journal page." },
      { day: "Thu", activity: "Goal: design and build a bird feeder from recycled materials. Test if it balances." },
      { day: "Fri", activity: "Goal: present your nature journal and terrarium to parents. Teach them one thing you discovered." },
    ]},
  { week: 5, theme: "Robots", emoji: "🤖", color: "#9BB8D7",
    question: "Can you build something that actually works?",
    principle: "Design thinking: plan \u2192 build \u2192 test \u2192 improve",
    oneLiner: "Blueprint first. Then build. Then test. Then fix what broke. Real engineering.",
    takeHome: "Working robot + blueprint + instruction manual",
    longTermSkills: ["Planning before building", "Problem decomposition", "Learning from failure", "Explaining how things work"],
    days: [
      { day: "Mon", activity: "Goal: design your robot on paper. Draw 3 views. List every material you need." },
      { day: "Tue", activity: "Goal: build the robot body. Follow your blueprint. Note where you deviate and why." },
      { day: "Wed", activity: "Goal: create a coding card sequence that makes your friend walk a specific path. Debug errors." },
      { day: "Thu", activity: "Goal: your robot must carry a ball across the table. Modify until it works. Write an instruction manual." },
      { day: "Fri", activity: "Goal: Robot Demo Day. Present your robot, show what broke, explain how you fixed it." },
    ]},
  { week: 6, theme: "Business", emoji: "💰", color: "#E05A3A",
    question: "Can you make something people actually want to buy?",
    principle: "Create value, communicate value, exchange value",
    oneLiner: "They make products, set prices, design a brand, and sell to real customers (you).",
    takeHome: "Products + business card + real earnings",
    longTermSkills: ["Communication & persuasion", "Understanding value", "Product thinking", "Confidence with adults"],
    days: [
      { day: "Mon", activity: "Goal: research what people buy. Pick your product. Make your first prototype." },
      { day: "Tue", activity: "Goal: produce 5 units. Quality-check each one. Only sellable items make the cut." },
      { day: "Wed", activity: "Goal: name your business. Design a logo, signage, and a business card from scratch." },
      { day: "Thu", activity: "Goal: set prices for every product. Rehearse your 30-second sales pitch until it\u2019s convincing." },
      { day: "Fri", activity: "Goal: Market Day. Set up your stall. Parents are real customers with real money." },
    ]},
  { week: 7, theme: "The Exhibition", emoji: "🏆", color: "#2B5797",
    question: "What are you most proud of, and can you tell us why?",
    principle: "Reflection, curation, and public speaking",
    oneLiner: "They pick their best work from 7 weeks and present it at a real gallery show.",
    takeHome: "Scrapbook + certificate + framed artwork",
    longTermSkills: ["Self-reflection", "Public speaking", "Pride in their work", "Celebrating growth"],
    days: [
      { day: "Mon", activity: "Goal: complete your scrapbook \u2014 one illustrated page per week. Write what you learned." },
      { day: "Tue", activity: "Goal: collaborate on the camp mural. Each child adds one piece that represents their journey." },
      { day: "Wed", activity: "Goal: pick your best piece from 7 weeks. Write an artist statement. Rehearse your presentation." },
      { day: "Thu", activity: "Goal: full dress rehearsal. Present to the group. Give and receive feedback." },
      { day: "Fri", activity: "Goal: THE EXHIBITION \u2014 gallery opening, printed labels, certificates, a room full of proud parents." },
    ]},
];

export default function Activities() {
  const [openWeek, setOpenWeek] = useState<number | null>(null);
  const selectedWeek = weeks.find((w) => w.week === openWeek);

  return (
    <section id="activities" className="relative px-6 py-[60px] md:py-[100px] lg:px-12">
      <div className="relative z-10 mx-auto max-w-[1200px]">
        <motion.div variants={sectionFade} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 max-w-[600px]">
          <h2 className="font-display text-[28px] leading-[1.1] tracking-[-0.02em] text-[#2B5797] md:text-[42px] lg:text-[48px]">
            7 weeks. 7 challenges.
          </h2>
          <p className="mt-4 text-[17px] md:text-[18px] leading-[1.75] text-[#1E2D3D]">
            Each week starts with a question. By Friday, they&apos;ve answered it — their way.
            Click any week to see the daily challenges.
          </p>
        </motion.div>

        {/* Grid of cards — no images, clean text cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {weeks.map((week) => (
            <motion.div key={week.week} variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              onClick={() => setOpenWeek(week.week)}
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] cursor-pointer">
              {/* Colored top bar */}
              <div className="h-2 w-full" style={{ backgroundColor: week.color }} />
              <div className="p-5 pt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold tracking-[0.1em] uppercase" style={{ color: week.color }}>
                    Week {week.week} · {week.theme}
                  </span>
                  <span className="text-[22px]">{week.emoji}</span>
                </div>
                <h3 className="text-[15px] md:text-[16px] font-semibold text-[#2B5797] leading-[1.35] italic">
                  &ldquo;{week.question}&rdquo;
                </h3>
                <p className="mt-2 text-[13px] md:text-[14px] leading-[1.6] text-[#3A4D62]">
                  {week.oneLiner}
                </p>
                <div className="mt-3 pt-3 border-t border-[#E8EDF3]">
                  <p className="text-[11px] font-bold tracking-[0.04em] uppercase text-[#6B7D8F]">
                    Take home: <span className="text-[#2B5797] font-semibold normal-case">{week.takeHome}</span>
                  </p>
                </div>
                <p className="mt-3 text-[12px] font-semibold text-[#E05A3A] flex items-center gap-1 group-hover:gap-2 transition-all">
                  See day-by-day plan <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedWeek && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={() => setOpenWeek(null)}>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] max-w-[560px] w-full max-h-[85vh] overflow-y-auto">
              <div className="p-6 pb-4 border-b border-[#E8EDF3] flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.1em] uppercase" style={{ color: selectedWeek.color }}>
                    Week {selectedWeek.week} · {selectedWeek.theme}
                  </span>
                  <h3 className="text-[20px] md:text-[22px] font-bold text-[#2B5797] mt-1 italic">
                    &ldquo;{selectedWeek.question}&rdquo;
                  </h3>
                  <p className="text-[13px] font-medium mt-2 text-[#3A4D62]">
                    First principle: {selectedWeek.principle}
                  </p>
                </div>
                <button onClick={() => setOpenWeek(null)}
                  className="w-8 h-8 rounded-full bg-[#E8EDF3] flex items-center justify-center text-[#6B7D8F] hover:bg-[#D4DCE6] transition-colors text-[16px] flex-shrink-0">
                  &times;
                </button>
              </div>
              <div className="p-6 pt-4">
                <h4 className="text-[12px] font-bold tracking-[0.08em] uppercase text-[#6B7D8F] mb-3">Daily challenges</h4>
                <div className="space-y-2.5">
                  {selectedWeek.days.map((d) => (
                    <div key={d.day} className="flex gap-3 items-start">
                      <span className="text-[12px] font-bold text-white w-10 h-6 rounded flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: selectedWeek.color }}>
                        {d.day}
                      </span>
                      <p className="text-[14px] leading-[1.55] text-[#1E2D3D]">{d.activity}</p>
                    </div>
                  ))}
                </div>
                <h4 className="text-[12px] font-bold tracking-[0.08em] uppercase text-[#6B7D8F] mb-3 mt-6">Skills they build for life</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedWeek.longTermSkills.map((skill) => (
                    <span key={skill} className="text-[12px] font-semibold px-3 py-1.5 rounded-full border"
                      style={{ color: selectedWeek.color, borderColor: selectedWeek.color + "40", backgroundColor: selectedWeek.color + "08" }}>
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-xl bg-[#F0F4F9]">
                  <span className="text-[11px] font-bold tracking-[0.06em] uppercase" style={{ color: selectedWeek.color }}>
                    Take home
                  </span>
                  <p className="text-[14px] font-semibold text-[#2B5797] mt-1">{selectedWeek.takeHome}</p>
                </div>
                <a href="/register"
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#E05A3A] py-3.5 text-[14px] font-bold text-white shadow-[0_4px_16px_rgba(224,90,58,0.2)] transition-all duration-300 hover:bg-[#C94B2E]">
                  Register interest &rarr;
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
