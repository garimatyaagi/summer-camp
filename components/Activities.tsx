"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, sectionFade } from "@/lib/animations";
import { PaintPalette, ScienceBeaker, ChefHat, LeafBranch, RobotFriend, ShopSign, TrophyCup } from "./Illustrations";

const weeks = [
  { week: 1, theme: "The Art Studio", emoji: "\uD83C\uDFA8", color: "#E05A3A",
    skill: "Visual art fundamentals",
    oneLiner: "They build a 5-piece art collection from scratch.",
    takeHome: "Framed painting + art portfolio",
    longTermSkills: ["Creative confidence", "Observation & detail", "Self-expression", "Fine motor skills"],
    days: [
      { day: "Mon", activity: "Clay sculpture \u2014 sculpt a creature, learn form & texture" },
      { day: "Tue", activity: "Nature collage \u2014 collect materials outdoors, learn composition" },
      { day: "Wed", activity: "Canvas painting \u2014 color theory, mixing, free expression" },
      { day: "Thu", activity: "Tie-dye textile \u2014 pattern design, chemistry of dyes" },
      { day: "Fri", activity: "Portfolio assembly + Gallery Walk for parents" },
    ]},
  { week: 2, theme: "The Science Lab", emoji: "\uD83E\uDDEA", color: "#2B5797",
    skill: "The scientific method",
    oneLiner: "They learn to hypothesise, test, and record.",
    takeHome: "Experiment journal + seed kit",
    longTermSkills: ["Critical thinking", "Asking good questions", "Recording observations", "Cause & effect"],
    days: [
      { day: "Mon", activity: "Volcano build \u2014 chemical reactions, predict & test" },
      { day: "Tue", activity: "Magnet experiments \u2014 forces, attract/repel, build a toy" },
      { day: "Wed", activity: "Slime lab \u2014 states of matter, liquid vs solid" },
      { day: "Thu", activity: "Seed germination kit \u2014 biology, plant life cycles" },
      { day: "Fri", activity: "Experiment journal + Live Demo for parents" },
    ]},
  { week: 3, theme: "The Kitchen Studio", emoji: "\uD83C\uDF73", color: "#F0C75E",
    skill: "Measurement + food presentation",
    oneLiner: "They design a menu and run a pop-up restaurant.",
    takeHome: "Recipe booklet + chef hat",
    longTermSkills: ["Following instructions", "Measurement & math", "Presentation", "Teamwork"],
    days: [
      { day: "Mon", activity: "Energy balls \u2014 measuring, mixing, following a recipe" },
      { day: "Tue", activity: "Fruit art platter \u2014 design, color, presentation" },
      { day: "Wed", activity: "Lemonade stand \u2014 ratios, taste-testing, pricing" },
      { day: "Thu", activity: "Menu design + chef identity \u2014 branding their restaurant" },
      { day: "Fri", activity: "Pop-up Restaurant \u2014 kids serve parents their creation" },
    ]},
  { week: 4, theme: "The Nature Atelier", emoji: "\uD83C\uDF3F", color: "#3A8C6E",
    skill: "Observation + documentation",
    oneLiner: "They study nature like real naturalists.",
    takeHome: "Nature journal + bug hotel",
    longTermSkills: ["Patience & focus", "Scientific illustration", "Environmental awareness", "Independent discovery"],
    days: [
      { day: "Mon", activity: "Bug hotel build \u2014 insect habitats, natural materials" },
      { day: "Tue", activity: "Leaf printing + pressed flowers \u2014 botanical art" },
      { day: "Wed", activity: "Nature journal sketching \u2014 observational drawing outdoors" },
      { day: "Thu", activity: "Outdoor shelter build \u2014 engineering with nature" },
      { day: "Fri", activity: "Guided Nature Walk \u2014 kids teach parents their discoveries" },
    ]},
  { week: 5, theme: "The Tinker Workshop", emoji: "\uD83E\uDD16", color: "#9BB8D7",
    skill: "Design thinking",
    oneLiner: "Blueprint \u2192 prototype \u2192 test \u2192 iterate.",
    takeHome: "Working robot + blueprint",
    longTermSkills: ["Problem-solving", "Planning before building", "Learning from failure", "Technical communication"],
    days: [
      { day: "Mon", activity: "Robot blueprint \u2014 design on paper first, plan the build" },
      { day: "Tue", activity: "Robot body build \u2014 cardboard, foil, tubes, construction" },
      { day: "Wed", activity: "Coding cards \u2014 sequencing, logic, debugging (no screens)" },
      { day: "Thu", activity: "Finish + test + write instruction manual" },
      { day: "Fri", activity: "Robot Demo Day \u2014 each child presents their robot" },
    ]},
  { week: 6, theme: "The Market", emoji: "\uD83D\uDCB0", color: "#E05A3A",
    skill: "Entrepreneurship",
    oneLiner: "They make products, price them, and sell to parents.",
    takeHome: "Products + business card + earnings",
    longTermSkills: ["Communication & persuasion", "Basic money math", "Product thinking", "Confidence with adults"],
    days: [
      { day: "Mon", activity: "Choose product + make first units (pots, bags, bookmarks)" },
      { day: "Tue", activity: "Production day \u2014 make 3-5 units, quality control" },
      { day: "Wed", activity: "Brand identity \u2014 business name, logo, business card" },
      { day: "Thu", activity: "Set up stall \u2014 pricing, signage, practice sales pitch" },
      { day: "Fri", activity: "Market Day \u2014 parents are customers, kids handle sales" },
    ]},
  { week: 7, theme: "The Exhibition", emoji: "\uD83C\uDFC6", color: "#2B5797",
    skill: "Curation + public speaking",
    oneLiner: "They curate 7 weeks of work into a real gallery show.",
    takeHome: "Scrapbook + certificate + framed artwork",
    longTermSkills: ["Self-reflection", "Public speaking", "Pride in their work", "Celebrating growth"],
    days: [
      { day: "Mon", activity: "Scrapbook \u2014 one page per week, reflect on favourites" },
      { day: "Tue", activity: "Camp mural (collaborative) + friend messages" },
      { day: "Wed", activity: "Select best-of piece, write artist statement, rehearse" },
      { day: "Thu", activity: "Camp Olympics + talent showcase rehearsal" },
      { day: "Fri", activity: "THE EXHIBITION \u2014 gallery opening, certificates, celebration" },
    ]},
];

export default function Activities() {
  const [openWeek, setOpenWeek] = useState<number | null>(null);
  const selectedWeek = weeks.find((w) => w.week === openWeek);

  return (
    <section id="activities" className="relative px-6 py-[80px] md:py-[120px] lg:px-12">
      <div className="relative z-10 mx-auto max-w-[1200px]">
        <motion.div variants={sectionFade} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 max-w-[600px]">
          <h2 className="font-display text-[28px] leading-[1.1] tracking-[-0.02em] text-[#2B5797] md:text-[42px] lg:text-[48px]">
            The programme.
          </h2>
          <p className="mt-4 text-[17px] md:text-[18px] leading-[1.75] text-[#1E2D3D]">
            Each week is a studio. Each studio teaches one real skill.
            Click any week to see the day-by-day plan.
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
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold tracking-[0.1em] uppercase" style={{ color: week.color }}>
                    Week {week.week}
                  </span>
                  <span className="w-10 h-10 flex-shrink-0">
                    {week.week === 1 && <PaintPalette className="w-10 h-10" />}
                    {week.week === 2 && <ScienceBeaker className="w-10 h-10" />}
                    {week.week === 3 && <ChefHat className="w-10 h-10" />}
                    {week.week === 4 && <LeafBranch className="w-10 h-10" />}
                    {week.week === 5 && <RobotFriend className="w-10 h-10" />}
                    {week.week === 6 && <ShopSign className="w-10 h-10" />}
                    {week.week === 7 && <TrophyCup className="w-10 h-10" />}
                  </span>
                </div>
                <h3 className="text-[17px] font-bold text-[#2B5797] leading-[1.2]">
                  {week.theme}
                </h3>
                <p className="mt-1.5 text-[14px] md:text-[15px] leading-[1.6] text-[#1E2D3D]">
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
                    Week {selectedWeek.week}
                  </span>
                  <h3 className="text-[22px] font-bold text-[#2B5797] mt-1">
                    {selectedWeek.theme} {selectedWeek.emoji}
                  </h3>
                  <p className="text-[13px] font-semibold mt-1" style={{ color: selectedWeek.color }}>
                    Skill: {selectedWeek.skill}
                  </p>
                </div>
                <button onClick={() => setOpenWeek(null)}
                  className="w-8 h-8 rounded-full bg-[#E8EDF3] flex items-center justify-center text-[#6B7D8F] hover:bg-[#D4DCE6] transition-colors text-[16px] flex-shrink-0">
                  &times;
                </button>
              </div>
              <div className="p-6 pt-4">
                <h4 className="text-[12px] font-bold tracking-[0.08em] uppercase text-[#6B7D8F] mb-3">Day-by-day plan</h4>
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
