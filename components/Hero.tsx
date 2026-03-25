"use client";

import { motion } from "framer-motion";
import { heroHeading, heroSub, heroCta, heroMeta } from "@/lib/animations";
import { DoodleStar, DoodleSun, DoodleHeart, DoodleCircle, DoodleSpiral, DoodleZigzag, DoodleCrayon, DoodlePaintBlob, DoodleBrush, ColorfulDivider } from "./Doodles";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pb-16 pt-28 lg:px-12 lg:pb-20 lg:pt-36">
      {/* Dense doodle background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top right cluster */}
        <motion.div initial={{ opacity: 0, scale: 0.3, rotate: -30 }} animate={{ opacity: 0.8, scale: 1, rotate: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }} className="absolute top-[8%] right-[6%]">
          <DoodleSun className="w-20 md:w-28" />
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 0.7, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }} className="absolute top-[22%] right-[3%] md:right-[12%]">
          <DoodleStar className="w-10 md:w-14" color="#E94560" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.6 }}
          transition={{ delay: 1.1, duration: 0.5 }} className="absolute top-[6%] right-[22%] hidden md:block">
          <DoodleStar className="w-7" color="#2D6A4F" />
        </motion.div>

        {/* Right side */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 0.55, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }} className="absolute top-[42%] right-[4%] md:right-[8%]">
          <DoodleCrayon className="w-6 md:w-8" color="#E94560" />
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 0.5, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }} className="absolute top-[55%] right-[2%] md:right-[15%]">
          <DoodleHeart className="w-10 md:w-14" />
        </motion.div>
        <motion.div initial={{ opacity: 0, rotate: 20 }} animate={{ opacity: 0.4, rotate: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }} className="absolute bottom-[22%] right-[6%] hidden md:block">
          <DoodlePaintBlob className="w-16 md:w-24" color="#4A90D9" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }}
          transition={{ delay: 1.6, duration: 0.5 }} className="absolute bottom-[35%] right-[20%] hidden lg:block">
          <DoodleCircle className="w-12" color="#F4A940" />
        </motion.div>

        {/* Left side (fewer, subtle) */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.3 }}
          transition={{ delay: 1.4, duration: 0.6 }} className="absolute bottom-[25%] left-[3%] hidden md:block">
          <DoodleSpiral className="w-12" color="#2D6A4F" />
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: 1.7, duration: 0.5 }} className="absolute top-[70%] left-[8%] hidden lg:block">
          <DoodleStar className="w-6" color="#F4A940" />
        </motion.div>

        {/* Bottom scattered */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.35 }}
          transition={{ delay: 1.8, duration: 0.5 }} className="absolute bottom-[8%] right-[35%] hidden md:block">
          <DoodleBrush className="w-10" color="#F4A940" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.45 }}
          transition={{ delay: 1.9, duration: 0.5 }} className="absolute bottom-[12%] left-[15%] hidden lg:block">
          <DoodleZigzag className="w-16" color="#E94560" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1400px]">
        <motion.div variants={heroMeta} initial="hidden" animate="visible">
          <ColorfulDivider className="mb-6" />
        </motion.div>

        <motion.h1 variants={heroHeading} initial="hidden" animate="visible"
          className="font-display text-[44px] leading-[1.05] tracking-[-0.025em] text-navy sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[112px] max-w-[1000px]">
          Where kids build things with their{" "}
          <span className="relative inline-block">
            hands
            <svg viewBox="0 0 120 14" fill="none" className="absolute -bottom-1 left-0 w-full h-3 md:h-5" preserveAspectRatio="none">
              <path d="M3 9 C15 4, 30 12, 50 7 S85 3, 117 8" stroke="#E94560" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              <path d="M5 11 C20 6, 40 13, 60 8 S95 5, 115 10" stroke="#F4A940" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
            </svg>
          </span>.
        </motion.h1>

        <motion.p variants={heroSub} initial="hidden" animate="visible"
          className="mt-8 max-w-[520px] text-[17px] leading-[1.8] text-text-secondary md:text-[19px] md:mt-10">
          A screen-free, maker-first summer camp in HSR Layout, Bangalore.
          Seven weeks of clay, paint, robots, cooking, and coming home buzzing.
        </motion.p>

        <motion.div variants={heroCta} initial="hidden" animate="visible"
          className="mt-10 flex flex-wrap items-center gap-4 md:mt-12">
          <a href="https://forms.google.com/REPLACE_ME" target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full bg-coral px-8 py-4 text-[14px] font-semibold tracking-[0.02em] text-white shadow-[0_4px_20px_rgba(233,69,96,0.25)] transition-all duration-300 hover:bg-coral-dark hover:scale-[1.03] hover:shadow-[0_6px_25px_rgba(233,69,96,0.35)]">
            Reserve a spot <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </a>
          <a href="#activities"
            className="inline-flex items-center gap-2 rounded-full border-2 border-navy/15 px-7 py-3.5 text-[14px] font-medium text-navy/70 transition-all duration-300 hover:border-coral/30 hover:text-coral">
            See the programme
          </a>
        </motion.div>

        <motion.div variants={heroMeta} initial="hidden" animate="visible"
          className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 md:mt-20">
          {[
            { label: "Ages 5\u20138", color: "#E94560" },
            { label: "Mon\u2013Fri, 9\u201312:30", color: "#4A90D9" },
            { label: "\u20B94,500/week", color: "#2D6A4F" },
            { label: "April\u2013May 2026", color: "#F4A940" },
          ].map((item) => (
            <span key={item.label} className="flex items-center gap-2 text-[13px] font-medium text-text-secondary">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
              {item.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
