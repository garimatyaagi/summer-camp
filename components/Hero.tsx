"use client";

import { motion } from "framer-motion";
import { heroHeading, heroSub, heroCta, heroMeta } from "@/lib/animations";
import { DoodleStar, DoodleSun, DoodleHeart, DoodleCircle, DoodleSpiral, DoodleZigzag, DoodleCrayon, DoodlePaintBlob, DoodleBrush, ColorfulDivider } from "./Doodles";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pb-16 pt-28 lg:px-12 lg:pb-20 lg:pt-36">
      {/* Dense doodle background — SCALED UP 50%+ */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top right cluster — BIG */}
        <motion.div initial={{ opacity: 0, scale: 0.3, rotate: -30 }} animate={{ opacity: 0.9, scale: 1, rotate: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }} className="absolute top-[6%] right-[4%]">
          <DoodleSun className="w-28 md:w-44" />
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 0.8, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }} className="absolute top-[20%] right-[2%] md:right-[10%]">
          <DoodleStar className="w-16 md:w-22" color="#E05A3A" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.7 }}
          transition={{ delay: 1.1, duration: 0.5 }} className="absolute top-[4%] right-[20%] hidden md:block">
          <DoodleStar className="w-12" color="#3A8C6E" />
        </motion.div>

        {/* Right side — bigger, bolder */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }} className="absolute top-[40%] right-[3%] md:right-[6%]">
          <DoodleCrayon className="w-8 md:w-12" color="#E05A3A" />
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 0.65, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }} className="absolute top-[53%] right-[1%] md:right-[13%]">
          <DoodleHeart className="w-14 md:w-20" />
        </motion.div>
        <motion.div initial={{ opacity: 0, rotate: 20 }} animate={{ opacity: 0.5, rotate: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }} className="absolute bottom-[20%] right-[4%] hidden md:block">
          <DoodlePaintBlob className="w-28 md:w-40" color="#9BB8D7" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.6 }}
          transition={{ delay: 1.6, duration: 0.5 }} className="absolute bottom-[33%] right-[18%] hidden lg:block">
          <DoodleCircle className="w-20" color="#F0C75E" />
        </motion.div>

        {/* Left side — more prominent now */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.45 }}
          transition={{ delay: 1.4, duration: 0.6 }} className="absolute bottom-[22%] left-[2%] hidden md:block">
          <DoodleSpiral className="w-20" color="#3A8C6E" />
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 0.55, scale: 1 }}
          transition={{ delay: 1.7, duration: 0.5 }} className="absolute top-[68%] left-[6%] hidden lg:block">
          <DoodleStar className="w-12" color="#F0C75E" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.35 }}
          transition={{ delay: 1.0, duration: 0.6 }} className="absolute top-[15%] left-[4%] hidden md:block">
          <DoodleStar className="w-10" color="#9BB8D7" />
        </motion.div>

        {/* Bottom scattered — bigger */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }}
          transition={{ delay: 1.8, duration: 0.5 }} className="absolute bottom-[6%] right-[32%] hidden md:block">
          <DoodleBrush className="w-16" color="#F0C75E" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.55 }}
          transition={{ delay: 1.9, duration: 0.5 }} className="absolute bottom-[10%] left-[12%] hidden lg:block">
          <DoodleZigzag className="w-28" color="#E05A3A" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.3 }}
          transition={{ delay: 1.2, duration: 0.8 }} className="absolute bottom-[15%] left-[30%] hidden lg:block">
          <DoodleCircle className="w-16" color="#E05A3A" />
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
              <path d="M3 9 C15 4, 30 12, 50 7 S85 3, 117 8" stroke="#E05A3A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              <path d="M5 11 C20 6, 40 13, 60 8 S95 5, 115 10" stroke="#F0C75E" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
            </svg>
          </span>.
        </motion.h1>

        <motion.p variants={heroSub} initial="hidden" animate="visible"
          className="mt-8 max-w-[520px] text-[17px] leading-[1.8] text-text-secondary md:text-[19px] md:mt-10">
          A screen-free, maker-first summer camp in HSR Layout, Bangalore.
          Seven weeks of clay, paint, robots, cooking, and coming home buzzing.
        </motion.p>

        {/* Early bird banner */}
        <motion.div variants={heroCta} initial="hidden" animate="visible"
          className="mt-6 inline-flex items-center gap-2.5 rounded-xl bg-navy/[0.06] border border-navy/10 px-5 py-2.5 max-w-fit">
          <span className="text-[15px]" role="img" aria-label="bird">&#x1F426;</span>
          <span className="text-[13px] font-semibold text-navy">Early bird: &#8377;3,800/week</span>
          <span className="text-[12px] text-text-secondary">for the first 25 families</span>
        </motion.div>

        <motion.div variants={heroCta} initial="hidden" animate="visible"
          className="mt-10 flex flex-wrap items-center gap-4 md:mt-12">
          <a href="/register"
            className="group inline-flex items-center gap-2.5 rounded-full bg-coral px-8 py-4 text-[14px] font-semibold tracking-[0.02em] text-white shadow-[0_4px_20px_rgba(224,90,58,0.25)] transition-all duration-300 hover:bg-coral-dark hover:scale-[1.03] hover:shadow-[0_6px_25px_rgba(224,90,58,0.35)]">
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
            { label: "Ages 5\u20138", color: "#E05A3A" },
            { label: "Mon\u2013Fri, 9\u201312:30", color: "#9BB8D7" },
            { label: "From \u20B93,800/week", color: "#3A8C6E" },
            { label: "April 14 \u2013 May 30, 2026", color: "#F0C75E" },
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
