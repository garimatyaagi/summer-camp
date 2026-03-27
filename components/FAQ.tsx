"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { sectionFade, fadeUpStagger, staggerContainer } from "@/lib/animations";

const faqs = [
  { q: "What ages is this for?", a: "5 to 8 years old. We run two groups \u2014 Explorers (5\u20136) and Makers (7\u20138) \u2014 so activities match their level. Both groups follow the same weekly theme but with different complexity." },
  { q: "Is it the full 7 weeks or can we join partway?", a: "It\u2019s a complete 7-week programme. Each week builds on the last, and Week 7 is the exhibition where they present everything. The full journey is what makes it work." },
  { q: "Where is it?", a: "HSR Layout, Bangalore. Gated campus with AC indoor space and an outdoor play area. We\u2019ll share the exact address once you register." },
  { q: "What does my child need to bring?", a: "A water bottle, comfortable clothes they can get messy in, and sunscreen. We provide everything else \u2014 snacks, materials, all of it." },
  { q: "What if my child misses a day?", a: "Life happens. Missed days can\u2019t be refunded, but we\u2019ll send home the take-home so they don\u2019t miss the making." },
  { q: "What about safety?", a: "First-aid trained staff at all times. 1:8 adult-to-child ratio. Gated entry with check-in/check-out protocol. You\u2019ll have both founders\u2019 phone numbers." },
  { q: "What happens at the Exhibition?", a: "Week 7 ends with a proper gallery opening. Fairy lights, printed labels, a catalog. Every child presents their best work to a room full of parents. It\u2019s the moment they feel genuinely proud \u2014 and the photo you\u2019ll share." },
  { q: "Is there a sibling discount?", a: "Yes \u2014 15% off for the second child onwards." },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div variants={fadeUpStagger} custom={index} className="border-t border-[#E8EDF3]">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-5 text-left md:py-6">
        <span className="pr-6 text-[16px] font-semibold text-[#2B5797] md:text-[17px]">{q}</span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#E8EDF3] flex items-center justify-center text-[13px] text-[#6B7D8F] transition-all duration-300 ${open ? "rotate-45 border-coral text-coral" : ""}`}>+</span>
      </button>
      <div className={`faq-answer ${open ? "open" : ""}`}>
        <div><p className="pb-5 text-[15px] leading-[1.85] text-[#3A4D62] max-w-[520px] md:pb-6">{a}</p></div>
      </div>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative px-6 py-[80px] md:py-[140px] lg:px-12">
      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
          <motion.h2 variants={sectionFade} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="font-display text-[32px] leading-[1.1] tracking-[-0.02em] text-white md:text-[48px] lg:text-[56px]">
            Questions parents ask.
          </motion.h2>
          <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-6 md:p-8">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}>
              {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} index={i} />)}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
