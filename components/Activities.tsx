"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, sectionFade } from "@/lib/animations";
import { DoodleStar } from "./Doodles";

const weeks = [
  { week: 1, theme: "The Art Studio", emoji: "\uD83C\uDFA8", color: "#E05A3A", bg: "#FDEEEA",
    skill: "Visual art fundamentals",
    description: "Color mixing, composition, texture. They build a 5-piece art collection and learn how artists see the world.",
    takeHome: "Framed painting + art portfolio",
    image: "https://images.unsplash.com/photo-1560421683-6856ea585c78?w=600" },
  { week: 2, theme: "The Science Lab", emoji: "\uD83E\uDDEA", color: "#9BB8D7", bg: "#EBF0F7",
    skill: "The scientific method",
    description: "Hypothesis, experiment, observe, record. They build volcanoes, magnet toys, and seed kits \u2014 and learn to think like scientists.",
    takeHome: "Experiment journal + seed kit",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600" },
  { week: 3, theme: "The Kitchen Studio", emoji: "\uD83C\uDF73", color: "#F0C75E", bg: "#FDF6E8",
    skill: "Measurement + food presentation",
    description: "How chefs turn ingredients into something beautiful. Math meets creativity. They design a menu and run a pop-up restaurant on Friday.",
    takeHome: "Recipe booklet + chef hat",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600" },
  { week: 4, theme: "The Nature Atelier", emoji: "\uD83C\uDF3F", color: "#3A8C6E", bg: "#EBF5F0",
    skill: "Observation + documentation",
    description: "How naturalists study the world. Slow looking, sketching, documenting. They build a bug hotel and fill a nature journal with Bangalore\u2019s flora and fauna.",
    takeHome: "Nature journal + bug hotel",
    image: "https://images.unsplash.com/photo-1500995617113-cf789362a3e1?w=600" },
  { week: 5, theme: "The Tinker Workshop", emoji: "\uD83E\uDD16", color: "#9BB8D7", bg: "#EBF0F7",
    skill: "Design thinking",
    description: "Blueprint \u2192 prototype \u2192 test \u2192 iterate. They design a robot from scratch, build it, and write its instruction manual.",
    takeHome: "Working robot + blueprint + manual",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600" },
  { week: 6, theme: "The Entrepreneur\u2019s Market", emoji: "\uD83D\uDCB0", color: "#F0C75E", bg: "#FDF6E8",
    skill: "Entrepreneurship",
    description: "Product design, pricing, pitching. They make real products, set up a market stall, and sell to parents on Friday. Business at age 6.",
    takeHome: "Products + business card + earnings",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600" },
  { week: 7, theme: "The Exhibition", emoji: "\uD83C\uDFC6", color: "#E05A3A", bg: "#FDEEEA",
    skill: "Curation + public speaking",
    description: "They curate their best work from every week, build a scrapbook, and present it all at a proper gallery exhibition for parents. The big moment.",
    takeHome: "Scrapbook + catalog + framed artwork + certificate",
    image: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=600" },
];

export default function Activities() {
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
            <p className="max-w-[440px] text-[16px] leading-[1.85] text-white/75 md:text-[17px]">
              Each week is a focused studio. Your child doesn&apos;t just
              dabble &mdash; they go deep, build something real, and present
              it every Friday. Every piece goes into their portfolio.
            </p>
          </div>
        </motion.div>

        {/* Cards with colored backgrounds */}
        <div className="flex gap-5 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory -mx-6 px-6 lg:-mx-12 lg:px-12">
          {weeks.map((week) => (
            <motion.div key={week.week} variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="group min-w-[280px] max-w-[310px] flex-shrink-0 snap-start rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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
                <h3 className="text-[18px] font-bold text-[#2B5797]">
                  {week.theme} <span className="text-[17px]">{week.emoji}</span>
                </h3>
                <p className="mt-1 text-[11px] font-bold tracking-[0.06em] uppercase" style={{ color: week.color }}>
                  Skill: {week.skill}
                </p>
                <p className="mt-2 text-[14px] leading-[1.7] text-[#3A4D62]">{week.description}</p>
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
