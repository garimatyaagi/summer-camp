"use client";

import { motion } from "framer-motion";

const trustPoints = [
  { icon: "\uD83D\uDEE1\uFE0F", text: "1:8 adult ratio" },
  { icon: "\uD83C\uDFE0", text: "Gated campus, Bangalore" },
  { icon: "\u2695\uFE0F", text: "First-aid trained staff" },
  { icon: "\uD83C\uDFA8", text: "Real work they bring home" },
  { icon: "\uD83D\uDCF5", text: "Zero screens, all day" },
  { icon: "\uD83C\uDF4E", text: "Snacks included" },
];

export default function TrustStrip() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative px-6 py-8 md:py-10 lg:px-12 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-12">
          {trustPoints.map((point) => (
            <span key={point.text} className="flex items-center gap-2 text-[13px] md:text-[14px] font-medium text-[#2B5797]">
              <span className="text-[16px]">{point.icon}</span>
              {point.text}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
