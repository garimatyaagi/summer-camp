"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Programme", href: "#activities" },
  { label: "Pricing", href: "#pricing" },
  { label: "Schedule", href: "/schedule" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "bg-transparent"
    }`}>
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <a href="#" className={`font-display text-[22px] transition-colors duration-300 flex items-center gap-2 ${scrolled ? "text-navy" : "text-white"}`}>
          <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
            <circle cx="14" cy="14" r="6" fill="#F0C75E"/>
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <line key={angle} x1="14" y1="3" x2="14" y2="6.5" stroke="#F0C75E" strokeWidth="2" strokeLinecap="round"
                transform={`rotate(${angle} 14 14)`}/>
            ))}
          </svg>
          The Summer Club
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              className={`text-[14px] font-medium transition-colors duration-300 ${scrolled ? "text-text-secondary hover:text-navy" : "text-white/80 hover:text-white"}`}>
              {link.label}
            </a>
          ))}
          <a
            href="/register"
            className="group flex items-center gap-2 rounded-full bg-coral px-6 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-coral-dark hover:scale-[1.02]"
          >
            Register interest
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">&rarr;</span>
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`block h-[1.5px] w-5 transition-all duration-300 ${mobileOpen ? "translate-y-[6.5px] rotate-45 bg-navy" : scrolled ? "bg-navy" : "bg-white"}`} />
          <span className={`block h-[1.5px] w-5 transition-all duration-300 ${mobileOpen ? "opacity-0 bg-navy" : scrolled ? "bg-navy" : "bg-white"}`} />
          <span className={`block h-[1.5px] w-5 transition-all duration-300 ${mobileOpen ? "-translate-y-[6.5px] -rotate-45 bg-navy" : scrolled ? "bg-navy" : "bg-white"}`} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-start justify-center bg-cream px-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a key={link.href} href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.35 }}
                className="border-b border-border/50 py-5 font-display text-[28px] text-navy w-full">
                {link.label}
              </motion.a>
            ))}
            <motion.a href="/register"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.35 }}
              className="mt-8 rounded-full bg-coral px-8 py-3.5 text-[14px] font-semibold text-white">
              Register interest &rarr;
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
