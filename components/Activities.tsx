"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, sectionFade } from "@/lib/animations";
import { DoodleStar } from "./Doodles";

const weeks = [
  { week: 1, theme: "The Art Studio", emoji: "\uD83C\uDFA8", color: "#E05A3A", bg: "#FDEEEA",
    skill: "Visual art fundamentals",
    description: "Color mixing, composition, texture. They build a 5-piece art collection.",
    takeHome: "Framed painting + art portfolio",
    image: "/images/week1-art.jpg",
    longTermSkills: ["Creative confidence", "Observation & attention to detail", "Self-expression", "Fine motor skills"],
    days: [
      { day: "Mon", activity: "Clay sculpture \u2014 sculpt a creature, learn about form & texture" },
      { day: "Tue", activity: "Nature collage \u2014 collect materials outdoors, learn composition" },
      { day: "Wed", activity: "Canvas painting \u2014 color theory, mixing, free expression" },
      { day: "Thu", activity: "Tie-dye textile \u2014 pattern design, chemistry of dyes" },
      { day: "Fri", activity: "Portfolio assembly + Gallery Walk for parents" },
    ]},
  { week: 2, theme: "The Science Lab", emoji: "\uD83E\uDDEA", color: "#9BB8D7", bg: "#EBF0F7",
    skill: "The scientific method",
    description: "Hypothesis, experiment, observe, record. They learn to think like scientists.",
    takeHome: "Experiment journal + seed kit",
    image: "/images/week2-science.jpg",
    longTermSkills: ["Critical thinking", "Asking good questions", "Recording observations", "Cause & effect reasoning"],
    days: [
      { day: "Mon", activity: "Volcano build \u2014 chemical reactions, predict & test" },
      { day: "Tue", activity: "Magnet experiments \u2014 forces, attract/repel, build a toy" },
      { day: "Wed", activity: "Slime lab \u2014 states of matter, liquid vs solid" },
      { day: "Thu", activity: "Seed germination kit \u2014 biology, plant life cycles" },
      { day: "Fri", activity: "Experiment journal + Live Demo for parents" },
    ]},
  { week: 3, theme: "The Kitchen Studio", emoji: "\uD83C\uDF73", color: "#F0C75E", bg: "#FDF6E8",
    skill: "Measurement + food presentation",
    description: "Math meets creativity. They design a menu and run a pop-up restaurant.",
    takeHome: "Recipe booklet + chef hat",
    image: "/images/week3-kitchen.jpg",
    longTermSkills: ["Following instructions precisely", "Measurement & math in context", "Presentation & plating", "Teamwork & coordination"],
    days: [
      { day: "Mon", activity: "Energy balls \u2014 measuring, mixing, following a recipe" },
      { day: "Tue", activity: "Fruit art platter \u2014 design, color, presentation" },
      { day: "Wed", activity: "Lemonade stand \u2014 ratios, taste-testing, pricing" },
      { day: "Thu", activity: "Menu design + chef identity \u2014 branding their restaurant" },
      { day: "Fri", activity: "Pop-up Restaurant \u2014 kids serve parents their signature dish" },
    ]},
  { week: 4, theme: "The Nature Atelier", emoji: "\uD83C\uDF3F", color: "#3A8C6E", bg: "#EBF5F0",
    skill: "Observation + documentation",
    description: "How naturalists study the world. Slow looking, sketching, documenting.",
    takeHome: "Nature journal + bug hotel",
    image: "/images/week4-nature.jpg",
    longTermSkills: ["Patience & focus", "Scientific illustration", "Environmental awareness", "Independent discovery"],
    days: [
      { day: "Mon", activity: "Bug hotel build \u2014 insect habitats, materials from nature" },
      { day: "Tue", activity: "Leaf printing + pressed flowers \u2014 botanical art techniques" },
      { day: "Wed", activity: "Nature journal sketching \u2014 observational drawing outdoors" },
      { day: "Thu", activity: "Outdoor shelter build \u2014 engineering with natural materials" },
      { day: "Fri", activity: "Guided Nature Walk \u2014 kids teach parents what they discovered" },
    ]},
  { week: 5, theme: "The Tinker Workshop", emoji: "\uD83E\uDD16", color: "#9BB8D7", bg: "#EBF0F7",
    skill: "Design thinking",
    description: "Blueprint \u2192 prototype \u2192 test \u2192 iterate. They design and build a robot.",
    takeHome: "Working robot + blueprint + manual",
    image: "/images/week5-tinker.jpg",
    longTermSkills: ["Problem-solving", "Planning before building", "Learning from failure", "Technical communication"],
    days: [
      { day: "Mon", activity: "Robot blueprint \u2014 design on paper first, plan the build" },
      { day: "Tue", activity: "Robot body build \u2014 cardboard, foil, tubes, construction" },
      { day: "Wed", activity: "Coding cards \u2014 sequencing, logic, debugging (no screens)" },
      { day: "Thu", activity: "Finish + test + write instruction manual" },
      { day: "Fri", activity: "Robot Demo Day \u2014 each child presents their robot to parents" },
    ]},
  { week: 6, theme: "The Entrepreneur\u2019s Market", emoji: "\uD83D\uDCB0", color: "#F0C75E", bg: "#FDF6E8",
    skill: "Entrepreneurship",
    description: "Product design, pricing, pitching. They make products and sell to parents.",
    takeHome: "Products + business card + earnings",
    image: "/images/week6-market.jpg",
    longTermSkills: ["Communication & persuasion", "Basic money math", "Product thinking", "Confidence speaking to adults"],
    days: [
      { day: "Mon", activity: "Choose product + make first units (painted pots, bags, bookmarks)" },
      { day: "Tue", activity: "Production day \u2014 make 3-5 units, quality control" },
      { day: "Wed", activity: "Brand identity \u2014 business name, logo, business card design" },
      { day: "Thu", activity: "Set up stall \u2014 pricing, signage, practice sales pitch" },
      { day: "Fri", activity: "Market Day \u2014 parents are real customers, kids handle sales" },
    ]},
  { week: 7, theme: "The Exhibition", emoji: "\uD83C\uDFC6", color: "#E05A3A", bg: "#FDEEEA",
    skill: "Curation + public speaking",
    description: "They curate their best work and present it at a proper gallery exhibition.",
    takeHome: "Scrapbook + catalog + framed artwork + certificate",
    image: "/images/week7-exhibition.jpg",
    longTermSkills: ["Self-reflection", "Public speaking", "Pride in their work", "Celebrating growth"],
    days: [
      { day: "Mon", activity: "Scrapbook start \u2014 one page per week, reflect on favourites" },
      { day: "Tue", activity: "Camp mural (collaborative) + friend messages in scrapbooks" },
      { day: "Wed", activity: "Select \u201Cbest of\u201D piece, write artist statement, rehearse" },
      { day: "Thu", activity: "Camp Olympics + talent showcase dress rehearsal" },
      { day: "Fri", activity: "THE EXHIBITION \u2014 gallery opening, catalog, certificates, celebration" },
    ]},
];

export default function Activities() {
  const [openWeek, setOpenWeek] = useState<number | null>(null);
  const selectedWeek = weeks.find((w) => w.week === openWeek);

  return (
    <section id="activities" className="relative px-6 py-[80px] md:py-[120px] lg:px-12">
      <div className="pointer-events-none">
        <DoodleStar className="absolute top-16 right-10 w-20 opacity-15 hidden md:block" color="#FFFFFF" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <motion.div variants={sectionFade} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 grid md:grid-cols-[1fr_1fr] gap-6 md:gap-16">
          <h2 className="font-display text-[32px] leading-[1.1] tracking-[-0.02em] text-white md:text-[48px] lg:text-[56px]">
            Seven studios.{" "}
            <span className="relative inline-block">
              Seven skills
              <svg viewBox="0 0 120 14" fill="none" className="absolute -bottom-1 left-0 w-full h-3" preserveAspectRatio="none">
                <path d="M2 9 C20 4, 40 11, 60 7 S100 4, 118 8" stroke="rgba(255,255,255,0.5)" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              </svg>
            </span>.
          </h2>
          <div className="flex items-end">
            <p className="max-w-[440px] text-[17px] leading-[1.85] text-white">
              Each week is a focused studio. Click any week to see the day-by-day plan and skills.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="flex gap-5 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory -mx-6 px-6 lg:-mx-12 lg:px-12">
          {weeks.map((week) => (
            <motion.div key={week.week} variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              onClick={() => setOpenWeek(week.week)}
              className="group min-w-[280px] max-w-[310px] flex-shrink-0 snap-start rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
              style={{ backgroundColor: week.bg }}>
              <div className="grain relative aspect-[5/4] overflow-hidden">
                <Image src={week.image} alt={week.theme} fill
                  className="warm-image object-cover transition-all duration-700 group-hover:scale-[1.04]" sizes="310px" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: week.color }} />
                  <span className="text-[11px] font-bold tracking-[0.1em] uppercase" style={{ color: week.color }}>
                    Week {week.week}
                  </span>
                </div>
                <h3 className="text-[17px] font-bold text-[#2B5797]">
                  {week.theme} {week.emoji}
                </h3>
                <p className="mt-1 text-[11px] font-bold tracking-[0.06em] uppercase" style={{ color: week.color }}>
                  {week.skill}
                </p>
                <p className="mt-2 text-[13px] leading-[1.65] text-[#3A4D62]">{week.description}</p>
                <p className="mt-3 text-[11px] font-semibold text-[#2B5797] flex items-center gap-1">
                  See day-by-day plan &rarr;
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
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] max-w-[560px] w-full max-h-[85vh] overflow-y-auto">

              {/* Header */}
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

              {/* Day by day */}
              <div className="p-6 pt-4">
                <h4 className="text-[12px] font-bold tracking-[0.08em] uppercase text-[#6B7D8F] mb-3">Day-by-day plan</h4>
                <div className="space-y-2.5">
                  {selectedWeek.days.map((d) => (
                    <div key={d.day} className="flex gap-3 items-start">
                      <span className="text-[12px] font-bold text-white w-10 h-6 rounded flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: selectedWeek.color }}>
                        {d.day}
                      </span>
                      <p className="text-[14px] leading-[1.55] text-[#3A4D62]">{d.activity}</p>
                    </div>
                  ))}
                </div>

                {/* Long-term skills */}
                <h4 className="text-[12px] font-bold tracking-[0.08em] uppercase text-[#6B7D8F] mb-3 mt-6">Skills they build for life</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedWeek.longTermSkills.map((skill) => (
                    <span key={skill} className="text-[12px] font-semibold px-3 py-1.5 rounded-full border"
                      style={{ color: selectedWeek.color, borderColor: selectedWeek.color + "40", backgroundColor: selectedWeek.color + "08" }}>
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Take home */}
                <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: selectedWeek.bg }}>
                  <span className="text-[11px] font-bold tracking-[0.06em] uppercase" style={{ color: selectedWeek.color }}>
                    Portfolio piece &middot; Take home
                  </span>
                  <p className="text-[14px] font-semibold text-[#2B5797] mt-1">{selectedWeek.takeHome}</p>
                </div>

                {/* CTA */}
                <a href="/register"
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-coral py-3.5 text-[14px] font-bold text-white shadow-[0_4px_16px_rgba(224,90,58,0.2)] transition-all duration-300 hover:bg-coral-dark">
                  Reserve a spot &rarr;
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
