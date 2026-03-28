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
      { day: "Mon", activity: "Sculpt a clay creature that can stand on its own. Name it and give it a backstory." },
      { day: "Tue", activity: "Create a full collage using pressed leaves, seeds, fabric, and paper. Mount and frame it." },
      { day: "Wed", activity: "Paint a canvas. Learn to mix your own colours from scratch. Frame it by end of day." },
      { day: "Thu", activity: "Design a tie-dye piece. Experiment with folding techniques to control the pattern." },
      { day: "Fri", activity: "Assemble your 4-piece art portfolio. Decorate the cover. Write a line about each piece." },
    ]},
  { week: 2, theme: "Science", emoji: "🧪", color: "#2B5797",
    question: "How would you figure out why this happens?",
    principle: "Hypothesise \u2192 test \u2192 observe \u2192 explain",
    oneLiner: "Real scientific method. They design experiments, not follow them.",
    takeHome: "Experiment journal + seed kit",
    longTermSkills: ["Asking good questions", "Testing ideas", "Recording observations", "Cause & effect thinking"],
    days: [
      { day: "Mon", activity: "Build a volcano and make it erupt. Then figure out how to make it erupt higher. Record what you changed." },
      { day: "Tue", activity: "Predict which 10 objects in the room are magnetic. Test all 10. Score your predictions." },
      { day: "Wed", activity: "Make slime. Then figure out: is it a liquid or a solid? Design 3 tests to prove your answer." },
      { day: "Thu", activity: "Build a seed germination kit. Write a hypothesis: what will sprout first and why?" },
      { day: "Fri", activity: "Pick your best experiment from the week. Write up how it works and demo it to the group." },
    ]},
  { week: 3, theme: "Cooking", emoji: "🍳", color: "#F0C75E",
    question: "Can you design a dish, test it, and serve it to a real customer?",
    principle: "Measurement, iteration, and presentation",
    oneLiner: "No recipe cards. They design dishes, test them, and run a restaurant on Friday.",
    takeHome: "Recipe booklet + chef hat",
    longTermSkills: ["Measurement & ratios", "Iterating on feedback", "Presentation skills", "Serving others"],
    days: [
      { day: "Mon", activity: "Create energy balls using only 5 ingredients. No recipe. Make 3 versions, taste-test, pick the best." },
      { day: "Tue", activity: "Design a fruit art platter that looks like a scene. Make it so good people don\u2019t want to eat it." },
      { day: "Wed", activity: "Make lemonade from scratch. Adjust sweetness and sourness until 3 people rate it 5 out of 5." },
      { day: "Thu", activity: "Design a full restaurant menu. Name your restaurant. Price every item. Make your chef hat." },
      { day: "Fri", activity: "Run a Pop-up Restaurant. Cook, plate, serve, and take real orders from the group." },
    ]},
  { week: 4, theme: "Nature & Design", emoji: "🌿", color: "#3A8C6E",
    question: "What can you discover if you really look?",
    principle: "Observation, patience, and documentation",
    oneLiner: "They study nature like real naturalists \u2014 observe, sketch, document, build.",
    takeHome: "Nature journal + terrarium",
    longTermSkills: ["Patience & deep focus", "Scientific illustration", "Environmental awareness", "Independent discovery"],
    days: [
      { day: "Mon", activity: "Build a mini terrarium. Choose the right soil, plants, and stones. Predict what will grow first." },
      { day: "Tue", activity: "Collect and press 10 different leaves. Why are they different shapes? Create botanical prints." },
      { day: "Wed", activity: "Draw 5 detailed nature sketches from real specimens. Label every part. Fill a full journal page." },
      { day: "Thu", activity: "Design and build a bird feeder from recycled materials. Test if it balances and holds weight." },
      { day: "Fri", activity: "Complete your nature journal. Present your terrarium and teach the group one thing you discovered." },
    ]},
  { week: 5, theme: "Robots", emoji: "🤖", color: "#9BB8D7",
    question: "Can you build something that actually works?",
    principle: "Design thinking: plan \u2192 build \u2192 test \u2192 improve",
    oneLiner: "Blueprint first. Then build. Then test. Then fix what broke. Real engineering.",
    takeHome: "Working robot + blueprint + instruction manual",
    longTermSkills: ["Planning before building", "Problem decomposition", "Learning from failure", "Explaining how things work"],
    days: [
      { day: "Mon", activity: "Design your robot on paper first. Draw 3 views. List every material you\u2019ll need before touching anything." },
      { day: "Tue", activity: "Build the robot body from your blueprint. Note where reality differs from your plan and why." },
      { day: "Wed", activity: "Create a coding card sequence that makes your friend walk a specific path. Find and fix the bugs." },
      { day: "Thu", activity: "Your robot must carry a ball across the table. Modify and test until it works. Write an instruction manual." },
      { day: "Fri", activity: "Robot Demo Day. Present your robot to the group. Show what broke and explain how you fixed it." },
    ]},
  { week: 6, theme: "Business", emoji: "💰", color: "#E05A3A",
    question: "Can you make something people actually want to buy?",
    principle: "Create value, communicate value, exchange value",
    oneLiner: "They make products, set prices, design a brand, and sell to real customers (you).",
    takeHome: "Products + business card + real earnings",
    longTermSkills: ["Communication & persuasion", "Understanding value", "Product thinking", "Confidence with adults"],
    days: [
      { day: "Mon", activity: "Figure out what people would actually pay for. Pick your product. Make your first prototype." },
      { day: "Tue", activity: "Produce 5 units. Quality-check each one. Only items good enough to sell make the cut." },
      { day: "Wed", activity: "Name your business. Design a logo, signage, and a business card from scratch." },
      { day: "Thu", activity: "Set prices for every product. Rehearse your 30-second sales pitch until it\u2019s convincing." },
      { day: "Fri", activity: "Market Day. Set up your stall. The group are real customers with real money." },
    ]},
  { week: 7, theme: "The Exhibition", emoji: "🏆", color: "#2B5797",
    question: "What are you most proud of, and can you tell us why?",
    principle: "Reflection, curation, and public speaking",
    oneLiner: "They pick their best work from 7 weeks and present it at a real gallery show.",
    takeHome: "Scrapbook + certificate + framed artwork",
    longTermSkills: ["Self-reflection", "Public speaking", "Pride in their work", "Celebrating growth"],
    days: [
      { day: "Mon", activity: "Complete your scrapbook \u2014 one illustrated page per week. Write what you learned each week." },
      { day: "Tue", activity: "Collaborate on the camp mural. Each child adds one piece that represents their journey." },
      { day: "Wed", activity: "Pick your best piece from 7 weeks. Write why you chose it. Rehearse your presentation." },
      { day: "Thu", activity: "Full dress rehearsal. Present to the group. Give and receive feedback. Refine." },
      { day: "Fri", activity: "THE EXHIBITION \u2014 gallery opening, printed labels, certificates, a room full of proud parents." },
    ]},
];

export default function Activities() {
  const [openWeek, setOpenWeek] = useState<number | null>(null);
  const selectedWeek = weeks.find((w) => w.week === openWeek);

  return (
    <section id="activities" className="relative px-6 py-[48px] md:py-[72px] lg:px-12">
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
