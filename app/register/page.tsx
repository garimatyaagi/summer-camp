"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

/* Floating doodle SVGs for the register page */
function DoodleSun({ className }: { className?: string }) {
  return (
    <motion.svg viewBox="0 0 64 64" fill="none" className={className}
      animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
      <circle cx="32" cy="32" r="10" fill="#F0C75E" opacity="0.5"/>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <line key={angle} x1="32" y1="8" x2="32" y2="16" stroke="#F0C75E" strokeWidth="3" strokeLinecap="round" opacity="0.4"
          transform={`rotate(${angle} 32 32)`}/>
      ))}
    </motion.svg>
  );
}

function DoodleStar({ className }: { className?: string }) {
  return (
    <motion.svg viewBox="0 0 48 48" fill="none" className={className}
      animate={{ scale: [1, 1.15, 1], rotate: [0, 10, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
      <path d="M24 4 L28 18 L42 18 L30 26 L34 40 L24 30 L14 40 L18 26 L6 18 L20 18 Z"
        fill="#F0C75E" opacity="0.3" stroke="#F0C75E" strokeWidth="1" strokeLinejoin="round"/>
    </motion.svg>
  );
}

function DoodleSpiral({ className }: { className?: string }) {
  return (
    <motion.svg viewBox="0 0 60 60" fill="none" className={className}
      animate={{ rotate: [0, 15, -15, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
      <path d="M30 30 C30 22, 38 18, 42 24 C46 30, 38 38, 30 38 C22 38, 14 30, 18 22 C22 14, 34 10, 42 16"
        stroke="#E05A3A" strokeWidth="2.5" strokeLinecap="round" opacity="0.25" fill="none"/>
    </motion.svg>
  );
}

function DoodleZigzag({ className }: { className?: string }) {
  return (
    <motion.svg viewBox="0 0 80 30" fill="none" className={className}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.3 }}
      transition={{ duration: 2, delay: 0.5 }}>
      <path d="M4 15 L16 5 L28 20 L40 8 L52 22 L64 6 L76 18"
        stroke="#9BB8D7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.3"/>
    </motion.svg>
  );
}

function DoodlePaintDot({ className, color = "#3A8C6E" }: { className?: string; color?: string }) {
  return (
    <motion.svg viewBox="0 0 24 24" fill="none" className={className}
      animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.35, 0.2] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
      <circle cx="12" cy="12" r="10" fill={color} opacity="0.3"/>
    </motion.svg>
  );
}

export default function RegisterPage() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ parent_name: "", parent_phone: "", child_age: "", area: "" });

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.parent_name.trim() || !form.parent_phone.trim() || !form.child_age.trim() || !form.area.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead");
      }
      setSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-cream flex flex-col">
        <header className="bg-navy px-6 py-5 flex items-center justify-between">
          <Link href="/" className="font-display text-[1.35rem] text-cream flex items-center gap-2">
            <SunLogo />
            The Summer Club
          </Link>
        </header>
        <div className="flex-1 flex items-center justify-center px-6 relative overflow-hidden">
          {/* Celebration doodles */}
          <DoodleStar className="absolute top-12 right-10 w-16 hidden md:block" />
          <DoodleSun className="absolute bottom-20 left-8 w-20 hidden md:block" />
          <DoodlePaintDot className="absolute top-1/3 left-12 w-8" color="#E05A3A" />
          <DoodlePaintDot className="absolute bottom-1/3 right-16 w-6" color="#F0C75E" />

          <div className="relative z-10 max-w-[400px] text-center py-20">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", duration: 0.6 }}
              className="w-[64px] h-[64px] bg-[#3A8C6E] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.8rem]">
              &#x2705;
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="font-display text-[1.6rem] text-[#2B5797] mb-3">We&apos;ve got it!</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="text-[#3A4D62] text-[0.95rem] leading-[1.6] mb-6">
              Expect a WhatsApp message from us within 24 hours. We&apos;ll tell you everything about the programme and answer any questions.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              <Link href="/" className="text-[0.9rem] font-semibold text-[#E05A3A] hover:underline underline-offset-4">
                &larr; Back to The Summer Club
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream flex flex-col relative overflow-hidden">
      {/* Background doodles */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <DoodleSun className="absolute top-20 right-6 w-24 md:w-32 md:right-16" />
        <DoodleStar className="absolute top-40 left-4 w-12 md:left-12 md:w-16" />
        <DoodleSpiral className="absolute bottom-32 right-8 w-16 md:w-24 md:right-24" />
        <DoodleZigzag className="absolute bottom-48 left-6 w-20 md:w-32 hidden md:block" />
        <DoodlePaintDot className="absolute top-[60%] right-[10%] w-8" color="#E05A3A" />
        <DoodlePaintDot className="absolute top-[30%] left-[8%] w-6" color="#3A8C6E" />
        <DoodlePaintDot className="absolute bottom-[20%] left-[15%] w-10" color="#F0C75E" />
        <DoodlePaintDot className="absolute top-[50%] right-[5%] w-5" color="#9BB8D7" />
      </div>

      <header className="relative z-10 bg-navy px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-display text-[1.35rem] text-cream flex items-center gap-2">
          <SunLogo />
          The Summer Club
        </Link>
        <Link href="/" className="text-[0.8rem] text-cream/60 hover:text-cream transition-colors">&larr; Back</Link>
      </header>

      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full max-w-[420px]">
          <h1 className="font-display text-[1.8rem] md:text-[2.2rem] text-[#2B5797] leading-[1.15] mb-2">
            Interested?
          </h1>
          <p className="text-[#3A4D62] text-[0.95rem] leading-[1.6] mb-8">
            Leave your details and we&apos;ll call you to tell you everything.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-[0.84rem] font-semibold text-[#2B5797] block mb-1.5">Your name</label>
              <input type="text" value={form.parent_name} onChange={(e) => update("parent_name", e.target.value)}
                placeholder="First and last name" className="form-input" />
            </div>
            <div>
              <label className="text-[0.84rem] font-semibold text-[#2B5797] block mb-1.5">WhatsApp number</label>
              <input type="tel" value={form.parent_phone} onChange={(e) => update("parent_phone", e.target.value)}
                placeholder="+91 98765 43210" className="form-input" />
            </div>
            <div>
              <label className="text-[0.84rem] font-semibold text-[#2B5797] block mb-1.5">Child&apos;s age</label>
              <select value={form.child_age} onChange={(e) => update("child_age", e.target.value)}
                className="form-input form-select">
                <option value="">Select age</option>
                <option value="4">4 years</option>
                <option value="5">5 years</option>
                <option value="6">6 years</option>
                <option value="7">7 years</option>
                <option value="8">8 years</option>
                <option value="9">9 years</option>
                <option value="10">10 years</option>
              </select>
            </div>
            <div>
              <label className="text-[0.84rem] font-semibold text-[#2B5797] block mb-1.5">Which area are you in?</label>
              <input type="text" value={form.area} onChange={(e) => update("area", e.target.value)}
                placeholder="e.g. HSR Layout, Koramangala, Indiranagar" className="form-input" />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-[0.88rem]">
                {error}
              </div>
            )}

            <button type="submit" disabled={submitting}
              className="w-full bg-[#E05A3A] text-white border-0 px-8 py-4 rounded-full font-semibold text-[1rem] cursor-pointer transition-all duration-200 shadow-[0_4px_16px_rgba(224,90,58,0.25)] hover:bg-[#C94B2E] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed mt-2">
              {submitting ? "Sending..." : "I\u2019m interested \u2192"}
            </button>

            <p className="text-center text-[0.78rem] text-[#6B7D8F] mt-3">
              We&apos;ll reach out over WhatsApp within 24 hours.
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

function SunLogo() {
  return (
    <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
      <circle cx="14" cy="14" r="6" fill="#F0C75E"/>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <line key={angle} x1="14" y1="3" x2="14" y2="6.5" stroke="#F0C75E" strokeWidth="2" strokeLinecap="round"
          transform={`rotate(${angle} 14 14)`}/>
      ))}
    </svg>
  );
}
