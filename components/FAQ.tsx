"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { sectionFade, fadeUpStagger, staggerContainer } from "@/lib/animations";
import { SquigglyLine } from "./Doodles";

const faqs = [
  { q: "What ages is this for?", a: "5 to 8 years old. We run two cohorts \u2014 Juniors (5\u20137) and Seniors (8\u201310) \u2014 so activities are age-appropriate. From Week 3, we may add a 9\u201312 track if there\u2019s demand." },
  { q: "Where exactly is the camp?", a: "HSR Layout, Bangalore. It\u2019s a gated campus with AC indoor space and an outdoor play area. We\u2019ll share the exact address and Google Maps link once you register." },
  { q: "What does my child need to bring?", a: "A water bottle, comfortable clothes they can get messy in, and sunscreen. We provide snacks, all materials, and a whole lot of fun." },
  { q: "Is food included?", a: "A mid-morning snack (fruit + juice) is included. If you add Extended Play (12:30\u20132:30 PM), lunch is included too." },
  { q: "What if my child misses a day?", a: "Life happens. Missed days can\u2019t be refunded or transferred, but we\u2019ll send home the take-home kit so they don\u2019t miss out on the making." },
  { q: "Is there a sibling discount?", a: "Yes \u2014 15% off for the second child onwards." },
  { q: "What about safety?", a: "First-aid trained staff on-site at all times. 1:8 adult-to-child ratio. Gated entry with check-in/check-out protocol. Allergy management. You\u2019ll have both founders\u2019 phone numbers." },
  { q: "Can I visit during the camp?", a: "Absolutely. We also host a Friday Showcase every week where parents come see what the kids made. It\u2019s our favourite part of the week." },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div variants={fadeUpStagger} custom={index} className="border-t border-border">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-5 text-left md:py-6">
        <span className="pr-6 text-[16px] font-semibold text-navy md:text-[17px]">{q}</span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full border-2 border-border flex items-center justify-center text-[13px] text-muted transition-all duration-300 ${open ? "rotate-45 border-coral text-coral" : ""}`}>+</span>
      </button>
      <div className={`faq-answer ${open ? "open" : ""}`}>
        <div><p className="pb-5 text-[15px] leading-[1.85] text-text-secondary max-w-[520px] md:pb-6">{a}</p></div>
      </div>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="px-6 py-[80px] md:py-[140px] lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <SquigglyLine className="w-24 h-2 mb-12" color="#DDD6CA" />

        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
          <motion.h2 variants={sectionFade} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="font-display text-[32px] leading-[1.1] tracking-[-0.02em] text-navy md:text-[48px] lg:text-[56px]">
            Questions parents ask.
          </motion.h2>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}>
            {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} index={i} />)}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
