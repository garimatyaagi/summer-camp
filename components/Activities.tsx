"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, sectionFade } from "@/lib/animations";
import { PaintPalette, ScienceBeaker, ChefHat, LeafBranch, RobotFriend, ShopSign, TrophyCup } from "./Illustrations";

const weeks = [
  { week: 1, theme: "Stop-Motion Film", emoji: "\uD83C\uDFAC", color: "#E05A3A",
    question: "Can you make something that moves and tells a story?",
    principle: "Patience, sequencing, and storytelling",
    oneLiner: "They build clay characters, construct sets, and shoot a frame-by-frame film. Friday is movie screening day.",
    takeHome: "Clay characters + film on parent\u2019s phone",
    longTermSkills: ["Patience", "Sequencing", "Storytelling", "Attention to detail"],
    days: [
      { day: "Mon", activity: "Make 2 clay characters. Build a paper background. Practice moving them in tiny steps." },
      { day: "Tue", activity: "Build a set in a shoebox. Add trees, furniture, props from paper and clay." },
      { day: "Wed", activity: "Take photos one by one. Move character a tiny bit each time. See it come alive." },
      { day: "Thu", activity: "Add voices. Make sound effects with your mouth and hands." },
      { day: "Fri", activity: "Movie screening! Everyone\u2019s films on the big screen. Popcorn and clapping." },
    ]},
  { week: 2, theme: "Science Lab", emoji: "\uD83E\uDD4D", color: "#2B5797",
    question: "What flies, and why?",
    principle: "Test, change one thing, test again",
    oneLiner: "Paper planes, balloon rockets, parachutes, catapults \u2014 they test, tweak, and figure out the science of flight.",
    takeHome: "Paper planes + parachute + catapult + journal",
    longTermSkills: ["Scientific thinking", "Testing variables", "Recording observations", "Explaining why"],
    days: [
      { day: "Mon", activity: "Paper aeroplanes \u2014 test 3 designs. Which flies furthest? Change one thing each time." },
      { day: "Tue", activity: "Balloon rockets \u2014 string across the room, balloon + straw. Race them. What makes it faster?" },
      { day: "Wed", activity: "Build a parachute \u2014 tissue paper + string + weight. Who can make the slowest drop?" },
      { day: "Thu", activity: "Catapult \u2014 popsicle sticks + rubber band + spoon. Must land a pompom on a target. Fix until it works." },
      { day: "Fri", activity: "Flight show \u2014 each team demos their best flying invention. Explain what you changed to make it work better." },
    ]},
  { week: 3, theme: "The Invention Kitchen", emoji: "\uD83C\uDF73", color: "#F0C75E",
    question: "Can you invent a dish and get people to love it?",
    principle: "Experiment, taste, improve, serve",
    oneLiner: "No recipes. They invent food from scratch, iterate on feedback, and run a pop-up restaurant on Friday.",
    takeHome: "Recipe book + chef hat",
    longTermSkills: ["Measurement", "Iterating on feedback", "Presentation", "Serving others"],
    days: [
      { day: "Mon", activity: "Design your own energy bar \u2014 pick ingredients, test 3 versions, pick the best." },
      { day: "Tue", activity: "Invent a drink from scratch. Iterate until 3 people rate it 5/5." },
      { day: "Wed", activity: "Design a full restaurant menu \u2014 name, prices, branding." },
      { day: "Thu", activity: "Chef hat + recipe book \u2014 document every recipe you invented this week." },
      { day: "Fri", activity: "Pop-up restaurant \u2014 cook, serve, take orders from real customers." },
    ]},
  { week: 4, theme: "Design Your Game", emoji: "\uD83C\uDFB2", color: "#3A8C6E",
    question: "Can you design a game with rules that actually work?",
    principle: "Systems thinking, rules, and playtesting",
    oneLiner: "They design a board game from scratch \u2014 rules, pieces, artwork \u2014 and watch others play it.",
    takeHome: "Their board game + rule book",
    longTermSkills: ["Systems thinking", "Rule-making", "Taking feedback", "Iteration"],
    days: [
      { day: "Mon", activity: "Play 3 board games. What makes them fun? What makes them boring?" },
      { day: "Tue", activity: "Write your game\u2019s rules. Playtest with a partner. Fix what breaks." },
      { day: "Wed", activity: "Build the board, cards, pieces. Design the artwork." },
      { day: "Thu", activity: "Play each other\u2019s games. Give feedback. Redesign based on what confused people." },
      { day: "Fri", activity: "THE EXHIBITION \u2014 game arcade + gallery of all 7 weeks." },
    ]},
  { week: 5, theme: "Build, Break, Fix", emoji: "\uD83E\uDD16", color: "#9BB8D7",
    question: "Can you build a robot and make it do something?",
    principle: "Give instructions, build, code, test, fix",
    oneLiner: "Human robot games, cardboard robots, coding cards, marble runs \u2014 they learn how machines think.",
    takeHome: "Cardboard robot + marble run photo + coding cards",
    longTermSkills: ["Giving clear instructions", "Building with hands", "Debugging", "Persistence"],
    days: [
      { day: "Mon", activity: "Human Robot game \u2014 give your blindfolded partner exact commands. If you\u2019re unclear, they walk into a chair." },
      { day: "Tue", activity: "Build your cardboard robot. It must stand, arms must move, head must turn." },
      { day: "Wed", activity: "Coding cards \u2014 lay out \u2B06\uFE0F\u2B07\uFE0F\u2B05\uFE0F\u27A1\uFE0F cards in sequence. Friend walks the path. Wrong? Debug it." },
      { day: "Thu", activity: "Marble run \u2014 build a track from cardboard tubes. Marble must travel from table to floor and ring a bell." },
      { day: "Fri", activity: "Robot demo \u2014 show your marble run + coding sequence. Explain what didn\u2019t work the first time." },
    ]},
  { week: 6, theme: "Launch Pad", emoji: "\uD83D\uDE80", color: "#E05A3A",
    question: "Can you make something people actually want to buy?",
    principle: "Find demand, make it, brand it, sell it",
    oneLiner: "They interview customers, make products, build a brand, and sell at a real market on Friday.",
    takeHome: "Products + business card + earnings",
    longTermSkills: ["Communication", "Understanding value", "Persuasion", "Confidence with adults"],
    days: [
      { day: "Mon", activity: "Interview 5 people: what do you need? What would you pay for? Pick your product." },
      { day: "Tue", activity: "Make 5 products. Quality-check each. Only sellable items count." },
      { day: "Wed", activity: "Build your brand \u2014 name, logo, signage, business cards." },
      { day: "Thu", activity: "Sales pitch \u2014 price everything. Practice your 30-second pitch." },
      { day: "Fri", activity: "Market day \u2014 real stall, real customers, real money." },
    ]},
  { week: 7, theme: "The Big Show", emoji: "\uD83C\uDFAD", color: "#2B5797",
    question: "Can you create a show and perform it on a real stage?",
    principle: "Character, story, music, performance",
    oneLiner: "They create characters, write scripts, compose songs, make costumes, and perform a full musical on Friday.",
    takeHome: "Puppet + script + song lyrics",
    longTermSkills: ["Creative expression", "Collaboration", "Confidence", "Performance"],
    days: [
      { day: "Mon", activity: "Create a character \u2014 name, backstory, fear, superpower. Build a puppet." },
      { day: "Tue", activity: "Write the script \u2014 3 acts, dialogue, stage directions." },
      { day: "Wed", activity: "Song + dance \u2014 write a song for your musical. Choreograph a scene." },
      { day: "Thu", activity: "Costumes + props \u2014 make them from scratch. Full dress rehearsal." },
      { day: "Fri", activity: "The Musical \u2014 full performance with puppets, songs, costumes." },
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
