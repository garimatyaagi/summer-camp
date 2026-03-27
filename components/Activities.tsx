"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, sectionFade } from "@/lib/animations";
import { ColorfulDivider, DoodleStar, DoodlePaintBlob, DoodleHeart } from "./Doodles";

const weeks = [
  { week: 1, theme: "Little Artists", emoji: "\uD83C\uDFA8", color: "#E05A3A", bg: "#FDEEEA",
    description: "Clay animals, nature collages, canvas painting, tie-dye. Your child comes home with an art portfolio and paint on their clothes.",
    takeHome: "Clay animal + art portfolio",
    image: "https://images.unsplash.com/photo-1560421683-6856ea585c78?w=600" },
  { week: 2, theme: "Tiny Scientists", emoji: "\uD83E\uDDEA", color: "#9BB8D7", bg: "#EBF0F7",
    description: "Volcanoes, magnets, seed balls, states-of-matter relay races. Science through their hands, not a textbook.",
    takeHome: "Seed ball kit + experiment journal",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600" },
  { week: 3, theme: "Mini Chefs", emoji: "\uD83C\uDF73", color: "#F0C75E", bg: "#FDF6E8",
    description: "No-fire cooking: energy balls, fruit art, lemonade stands. They\u2019ll design a menu, run a restaurant, and feed you their creation.",
    takeHome: "Recipe booklet + chef hat",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600" },
  { week: 4, theme: "Jungle Explorers", emoji: "\uD83C\uDF3F", color: "#3A8C6E", bg: "#EBF5F0",
    description: "Bug hotels, leaf printing, nature journals, outdoor scavenger hunts. The backyard becomes a wilderness.",
    takeHome: "Nature journal + bug hotel",
    image: "https://images.unsplash.com/photo-1500995617113-cf789362a3e1?w=600" },
  { week: 5, theme: "Robot Friends", emoji: "\uD83E\uDD16", color: "#9BB8D7", bg: "#EBF0F7",
    description: "Cardboard robots, \u201Cprogram your friend\u201D coding games, logic puzzles. AI and coding \u2014 without a single screen.",
    takeHome: "Cardboard robot + coding card set",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600" },
  { week: 6, theme: "Market Day", emoji: "\uD83D\uDCB0", color: "#F0C75E", bg: "#FDF6E8",
    description: "Kids make products (tie-dye bags, painted pots, bookmarks), then sell them to parents in a Friday market.",
    takeHome: "Their products + play money earned",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600" },
  { week: 7, theme: "Grand Finale", emoji: "\u2B50", color: "#E05A3A", bg: "#FDEEEA",
    description: "Memory scrapbook, camp mural, Camp Olympics, talent showcase. The best week \u2014 because now they know each other.",
    takeHome: "Scrapbook + certificate + camp t-shirt",
    image: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=600" },
];

export default function Activities() {
  return (
    <section id="activities" className="relative px-6 py-[80px] md:py-[120px] lg:px-12 bg-white">
      <div className="pointer-events-none">
        <DoodleStar className="absolute top-16 right-10 w-20 opacity-55 hidden md:block" color="#F0C75E" />
        <DoodlePaintBlob className="absolute bottom-20 left-6 w-32 opacity-35 hidden lg:block" color="#9BB8D7" />
        <DoodleHeart className="absolute top-[50%] right-6 w-16 opacity-45 hidden md:block" />
        <DoodleStar className="absolute top-10 left-8 w-12 opacity-40 hidden md:block" color="#E05A3A" />
        <DoodleStar className="absolute bottom-[30%] right-[20%] w-10 opacity-30 hidden lg:block" color="#3A8C6E" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <ColorfulDivider className="mb-10" />

        <motion.div variants={sectionFade} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 grid md:grid-cols-[1fr_1fr] gap-6 md:gap-16">
          <h2 className="font-display text-[32px] leading-[1.1] tracking-[-0.02em] text-navy md:text-[48px] lg:text-[56px]">
            Seven weeks.{" "}
            <span className="relative inline-block">
              Seven worlds
              <svg viewBox="0 0 120 14" fill="none" className="absolute -bottom-1 left-0 w-full h-3" preserveAspectRatio="none">
                <path d="M2 9 C20 4, 40 11, 60 7 S100 4, 118 8" stroke="#F0C75E" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              </svg>
            </span>.
          </h2>
          <div className="flex items-end">
            <p className="max-w-[440px] text-[16px] leading-[1.85] text-text-secondary md:text-[17px]">
              Each week has a theme. Every day inside that week, the activities
              connect &mdash; so your child builds a real understanding of
              something, not just a random collection of crafts.
            </p>
          </div>
        </motion.div>

        {/* Cards with colored backgrounds */}
        <div className="flex gap-5 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory -mx-6 px-6 lg:-mx-12 lg:px-12">
          {weeks.map((week) => (
            <motion.div key={week.week} variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="group min-w-[280px] max-w-[310px] flex-shrink-0 snap-start rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ borderColor: week.color + "30", backgroundColor: week.bg }}>
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
                <h3 className="text-[18px] font-bold text-navy">
                  {week.theme} <span className="text-[17px]">{week.emoji}</span>
                </h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-text-secondary">{week.description}</p>
                <p className="mt-3 text-[11px] font-bold tracking-[0.04em] uppercase" style={{ color: week.color + "99" }}>
                  Take-home: {week.takeHome}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
