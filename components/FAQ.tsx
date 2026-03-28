"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { sectionFade, fadeUpStagger, staggerContainer } from "@/lib/animations";

const faqs = [
  { q: "What ages is this for?", a: "5 to 8 years old." },
  { q: "Is it the full 7 weeks?", a: "Yes. Each week builds on the last, and Week 7 is the exhibition. That\u2019s what makes it work." },
  { q: "Where is it?", a: "Bangalore. We\u2019ll share the exact venue once we confirm your spot." },
  { q: "What does my child need to bring?", a: "Water bottle and comfortable clothes they can get messy in. We provide everything else." },
  { q: "What if my child misses a day?", a: "We\u2019ll send home the take-home kit so they don\u2019t miss out." },
  { q: "What about safety?", a: "First-aid trained staff. 1:8 adult-to-child ratio. Gated campus with check-in/check-out." },
  { q: "What happens at the Exhibition?", a: "Week 7 ends with a real gallery opening. Your child presents their best work from 7 weeks to a room full of parents." },
  { q: "How do I register?", a: "Fill in the interest form. We\u2019ll WhatsApp you within 24 hours." },
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
        <div><p className="pb-5 text-[16px] md:text-[17px] leading-[1.85] text-[#1E2D3D] max-w-[520px] md:pb-6">{a}</p></div>
      </div>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative px-6 py-[60px] md:py-[100px] lg:px-12">
      <div className="relative z-10 mx-auto max-w-[720px]">
        <motion.h2 variants={sectionFade} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="font-display text-[28px] leading-[1.1] tracking-[-0.02em] text-[#2B5797] md:text-[42px] lg:text-[48px] mb-8 text-center">
          Questions parents ask.
        </motion.h2>
        <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-6 md:p-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}>
            {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} index={i} />)}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
