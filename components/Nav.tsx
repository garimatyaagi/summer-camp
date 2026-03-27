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
      scrolled ? "bg-white/92 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "bg-transparent"
    }`}>
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <a href="#" className="font-display text-[22px] text-navy">The Summer Club</a>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              className="text-[14px] font-medium text-text-secondary transition-colors duration-300 hover:text-navy">
              {link.label}
            </a>
          ))}
          <a
            href="/register"
            className="group flex items-center gap-2 rounded-full bg-coral px-6 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-coral-dark hover:scale-[1.02]"
          >
            Reserve a spot
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">&rarr;</span>
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`block h-[1.5px] w-5 bg-navy transition-all duration-300 ${mobileOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`block h-[1.5px] w-5 bg-navy transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[1.5px] w-5 bg-navy transition-all duration-300 ${mobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
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
              Reserve a spot &rarr;
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
