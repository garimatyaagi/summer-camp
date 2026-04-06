"use client";

import { motion } from "framer-motion";
import { heroHeading, heroSub, heroCta, heroMeta } from "@/lib/animations";
import { DoodleStar, DoodleSun, DoodleHeart, DoodleCrayon, ColorfulDivider } from "./Doodles";
import { PaintPalette, ScienceBeaker, ChefHat, RobotFriend } from "./Illustrations";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pb-16 pt-28 lg:px-12 lg:pb-20 lg:pt-36">
      {/* Reduced doodle set — iconic top-right cluster + crayon */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Sun — top right */}
        <motion.div initial={{ opacity: 0, scale: 0.3, rotate: -30 }} animate={{ opacity: 0.9, scale: 1, rotate: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }} className="absolute top-[6%] right-[4%]">
          <DoodleSun className="w-28 md:w-44" />
        </motion.div>
        {/* Star — coral */}
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 0.8, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }} className="absolute top-[20%] right-[2%] md:right-[10%]">
          <DoodleStar className="w-16 md:w-22" color="#E05A3A" />
        </motion.div>
        {/* Star — green */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.7 }}
          transition={{ delay: 1.1, duration: 0.5 }} className="absolute top-[4%] right-[20%] hidden md:block">
          <DoodleStar className="w-12" color="#3A8C6E" />
        </motion.div>
        {/* Heart */}
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 0.65, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }} className="absolute top-[53%] right-[1%] md:right-[13%]">
          <DoodleHeart className="w-14 md:w-20" />
        </motion.div>
        {/* Crayon */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }} className="absolute top-[40%] right-[3%] md:right-[6%]">
          <DoodleCrayon className="w-8 md:w-12" color="#E05A3A" />
        </motion.div>
        {/* One more star, left side for balance */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.35 }}
          transition={{ delay: 1.0, duration: 0.6 }} className="absolute top-[15%] left-[4%] hidden md:block">
          <DoodleStar className="w-10" color="rgba(255,255,255,0.5)" />
        </motion.div>
        {/* Thematic illustrations — bottom area */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 0.12, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }} className="absolute bottom-[8%] left-[5%] hidden lg:block">
          <PaintPalette className="w-28" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 0.1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }} className="absolute bottom-[12%] left-[20%] hidden lg:block">
          <ScienceBeaker className="w-20" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 0.1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.8 }} className="absolute bottom-[6%] right-[25%] hidden lg:block">
          <ChefHat className="w-20" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 0.12, y: 0 }}
          transition={{ delay: 2.1, duration: 0.8 }} className="absolute bottom-[10%] right-[8%] hidden lg:block">
          <RobotFriend className="w-24" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1400px]">
        <motion.div variants={heroMeta} initial="hidden" animate="visible">
          <ColorfulDivider className="mb-6" />
        </motion.div>

        <motion.h1 variants={heroHeading} initial="hidden" animate="visible"
          className="font-display text-[44px] leading-[1.05] tracking-[-0.025em] text-white sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[112px] max-w-[1000px]">
          A summer camp where kids make{" "}
          <span className="relative inline-block">
            amazing things
            <svg viewBox="0 0 120 14" fill="none" className="absolute -bottom-1 left-0 w-full h-3 md:h-5" preserveAspectRatio="none">
              <path d="M3 9 C15 4, 30 12, 50 7 S85 3, 117 8" stroke="#E05A3A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              <path d="M5 11 C20 6, 40 13, 60 8 S95 5, 115 10" stroke="#F0C75E" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
            </svg>
          </span>.
        </motion.h1>

        <motion.p variants={heroSub} initial="hidden" animate="visible"
          className="mt-8 max-w-[520px] text-[18px] leading-[1.75] text-white md:text-[20px] md:mt-10">
          We teach kids to think from first principles &mdash; not by following instructions, but by figuring it out themselves.
        </motion.p>

        {/* Key details — prominent, right after subtitle */}
        <motion.div variants={heroCta} initial="hidden" animate="visible"
          className="mt-8 flex flex-wrap gap-3 md:mt-10">
          {[
            { label: "Ages 5\u20138", icon: "👧" },
            { label: "Mon\u2013Fri, 9\u201312:30 PM", icon: "🕘" },
            { label: "7 weeks", icon: "📅" },
            { label: "Bangalore", icon: "📍" },
            { label: "April\u2013May 2026", icon: "☀️" },
          ].map((item) => (
            <span key={item.label} className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full px-4 py-2 text-[14px] md:text-[15px] font-semibold">
              <span className="text-[16px]">{item.icon}</span>
              {item.label}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div variants={heroCta} initial="hidden" animate="visible"
          className="mt-10 flex flex-wrap items-center gap-4">
          <a href="/register"
            className="group inline-flex items-center gap-2.5 rounded-full bg-coral px-8 py-4 text-[15px] font-semibold tracking-[0.02em] text-white shadow-[0_4px_20px_rgba(224,90,58,0.25)] transition-all duration-300 hover:bg-coral-dark hover:scale-[1.03] hover:shadow-[0_6px_25px_rgba(224,90,58,0.35)]">
            Register interest <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </a>
          <a href="#activities"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-7 py-3.5 text-[15px] font-medium text-white transition-all duration-300 hover:border-white/50 hover:bg-white/10">
            See the programme
          </a>
        </motion.div>

        {/* Early bird */}
        <motion.div variants={heroMeta} initial="hidden" animate="visible"
          className="mt-6 inline-flex items-center gap-2.5 rounded-xl bg-white/15 border border-white/20 px-5 py-2.5">
          <span className="text-[15px]">🐦</span>
          <span className="text-[13px] font-semibold text-white">Early bird: &#8377;28,000 for the full programme</span>
          <span className="text-[12px] text-white/80">&middot; first 25 families</span>
        </motion.div>
      </div>
    </section>
  );
}
