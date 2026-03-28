"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, sectionFade } from "@/lib/animations";
import { PaintPalette, ScienceBeaker, ChefHat, LeafBranch, RobotFriend, ShopSign, TrophyCup } from "./Illustrations";

const weeks = [
  { week: 1, theme: "Art & Craft", emoji: "🎨", color: "#E05A3A",
    question: "Can you create something that makes you feel proud?",
    principle: "Self-expression through experimentation",
    oneLiner: "No instructions. Just materials and one question: what do YOU want to make?",
    takeHome: "Framed painting + art portfolio",
    longTermSkills: ["Creative confidence", "Decision-making", "Self-expression", "Learning from mistakes"],
    days: [
      { day: "Mon", activity: "Clay sculpture \u2014 sculpt a creature that stands on its own. Name it, give it a story." },
      { day: "Tue", activity: "Canvas painting \u2014 mix your own colours from scratch. Paint something you\u2019re proud of." },
      { day: "Wed", activity: "Tie-dye \u2014 experiment with folding techniques to control the pattern." },
      { day: "Thu", activity: "Comic Book 1 \u2014 design characters, draw panels, write dialogue." },
      { day: "Fri", activity: "Comic Book 2 \u2014 finish, colour, and bind your comic. Present it to the group." },
    ]},
  { week: 2, theme: "Science", emoji: "🔬", color: "#2B5797",
    question: "How would you figure out why this happens?",
    principle: "Hypothesise \u2192 test \u2192 observe \u2192 explain",
    oneLiner: "Real scientific method. They design experiments, not follow them.",
    takeHome: "Experiment journal + seed kit",
    longTermSkills: ["Asking good questions", "Testing ideas", "Recording observations", "Cause & effect thinking"],
    days: [
      { day: "Mon", activity: "Volcano \u2014 build it, make it erupt, then figure out how to make it erupt higher." },
      { day: "Tue", activity: "Magnets \u2014 predict which 10 objects are magnetic. Test all 10. Score your predictions." },
      { day: "Wed", activity: "Slime \u2014 make it, then prove whether it\u2019s a liquid or solid. Design 3 tests." },
      { day: "Thu", activity: "Seed kit / Press leaves / Terrarium \u2014 build a germination kit and predict what sprouts first." },
      { day: "Fri", activity: "Experiment demo \u2014 pick your best experiment and explain the science behind it." },
    ]},
  { week: 3, theme: "Cooking", emoji: "🍳", color: "#F0C75E",
    question: "Can you design a dish, test it, and serve it to a real customer?",
    principle: "Measurement, iteration, and presentation",
    oneLiner: "No recipe cards. They design dishes, test them, and run a restaurant on Friday.",
    takeHome: "Recipe booklet + chef hat",
    longTermSkills: ["Measurement & ratios", "Iterating on feedback", "Presentation skills", "Serving others"],
    days: [
      { day: "Mon", activity: "Green foods activity \u2014 create healthy snacks using only natural ingredients." },
      { day: "Tue", activity: "Fruit art \u2014 design a platter that looks like a scene. Make people want to eat it." },
      { day: "Wed", activity: "Lemonade \u2014 make it from scratch. Adjust until 3 people rate it 5 out of 5." },
      { day: "Thu", activity: "Menu design \u2014 name your restaurant, price every item, make your chef hat." },
      { day: "Fri", activity: "Pop-up restaurant \u2014 cook, plate, serve, and take real orders from the group." },
    ]},
  { week: 4, theme: "Theatre", emoji: "🎭", color: "#3A8C6E",
    question: "Can you invent a character and bring them to life on stage?",
    principle: "Imagination, expression, and performance",
    oneLiner: "They create characters, write storylines, compose music, and perform a musical on Friday.",
    takeHome: "Puppet + script + musical recording",
    longTermSkills: ["Creative expression", "Storytelling", "Public speaking", "Collaboration"],
    days: [
      { day: "Mon", activity: "Character + puppet \u2014 invent a character with a name, fear, and superpower. Build a puppet." },
      { day: "Tue", activity: "Storyline \u2014 write a 3-part story. Storyboard it in panels." },
      { day: "Wed", activity: "Music \u2014 create a simple song or soundtrack for your story using instruments and voice." },
      { day: "Thu", activity: "Music + rehearsal \u2014 combine story, puppet, and music. Practice timing and expression." },
      { day: "Fri", activity: "Musical \u2014 perform your complete musical to the group." },
    ]},
  { week: 5, theme: "Robots", emoji: "🤖", color: "#9BB8D7",
    question: "Can you build something that actually works?",
    principle: "Design thinking: plan \u2192 build \u2192 test \u2192 improve",
    oneLiner: "Blueprint first. Then build. Then test. Then fix what broke. Real engineering.",
    takeHome: "Working robot + blueprint + instruction manual",
    longTermSkills: ["Planning before building", "Problem decomposition", "Learning from failure", "Explaining how things work"],
    days: [
      { day: "Mon", activity: "Robot blueprint \u2014 design on paper. Draw 3 views. List every material before touching anything." },
      { day: "Tue", activity: "Robot build \u2014 construct from your blueprint. Note where reality differs from your plan." },
      { day: "Wed", activity: "Coding cards \u2014 create a sequence that makes your friend walk a path. Debug the errors." },
      { day: "Thu", activity: "Robot testing \u2014 your robot must carry a ball across the table. Modify until it works." },
      { day: "Fri", activity: "Robot demo \u2014 present to the group. Show what broke and how you fixed it." },
    ]},
  { week: 6, theme: "Business", emoji: "💰", color: "#E05A3A",
    question: "Can you make something people actually want to buy?",
    principle: "Create value, communicate value, exchange value",
    oneLiner: "They make products, set prices, design a brand, and sell to real customers (you).",
    takeHome: "Products + business card + real earnings",
    longTermSkills: ["Communication & persuasion", "Understanding value", "Product thinking", "Confidence with adults"],
    days: [
      { day: "Mon", activity: "Product research \u2014 figure out what people would pay for. Pick your product. Make a prototype." },
      { day: "Tue", activity: "Production \u2014 make 5 units. Quality-check each one. Only sellable items make the cut." },
      { day: "Wed", activity: "Branding \u2014 name your business. Design a logo, signage, and business card from scratch." },
      { day: "Thu", activity: "Sales pitch \u2014 set prices. Rehearse your 30-second pitch until it\u2019s convincing." },
      { day: "Fri", activity: "Market day \u2014 set up your stall. The group are real customers with real money." },
    ]},
  { week: 7, theme: "Design Your Game", emoji: "🏆", color: "#2B5797",
    question: "Can you design a game from scratch and get people to play it?",
    principle: "Systems thinking, rules design, and playtesting",
    oneLiner: "They design a board game or card game from scratch \u2014 rules, pieces, artwork \u2014 and playtest it. Friday is the exhibition of everything from 7 weeks.",
    takeHome: "Custom game + scrapbook + certificate",
    longTermSkills: ["Systems thinking", "Rule-making", "Playtesting & iteration", "Celebrating growth"],
    days: [
      { day: "Mon", activity: "Game design \u2014 choose your game type (board/card/physical). Write the rules. Sketch the layout." },
      { day: "Tue", activity: "Game build \u2014 create the board, cards, or pieces. Design the artwork." },
      { day: "Wed", activity: "Playtest \u2014 others play your game. Watch what confuses them. Fix the rules." },
      { day: "Thu", activity: "Final version + scrapbook \u2014 polish the game. Complete your 7-week scrapbook." },
      { day: "Fri", activity: "THE EXHIBITION \u2014 game arcade + gallery of 7 weeks of work. Parents play the games. Certificates for all." },
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
