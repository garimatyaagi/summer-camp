"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ parent_name: "", parent_phone: "", area: "" });

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.parent_name.trim() || !form.parent_phone.trim() || !form.area.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parent_name: form.parent_name,
          parent_phone: form.parent_phone,
          area: form.area,
          // Minimal form — everything else discussed on call
          child_name: "", child_dob: "", blood_group: "", gender: "", medical: "",
          plan: "interest", weeks: [], extended_play: "no", sibling: "no",
          parent_email: "", emergency_contact: "", referral: "", notes: "",
          photo_consent: false, activity_consent: false, tnc_consent: false,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
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
          <Link href="/" className="font-display text-[1.35rem] text-cream">The Summer Club</Link>
        </header>
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-[400px] text-center py-20">
            <div className="w-[64px] h-[64px] bg-[#3A8C6E] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.8rem]">&#x2705;</div>
            <h2 className="font-display text-[1.6rem] text-[#2B5797] mb-3">We&apos;ve got it!</h2>
            <p className="text-[#3A4D62] text-[0.95rem] leading-[1.6] mb-6">
              Expect a WhatsApp message from us within 24 hours. We&apos;ll tell you everything about the programme and answer any questions.
            </p>
            <Link href="/" className="text-[0.9rem] font-semibold text-[#E05A3A] hover:underline underline-offset-4">
              &larr; Back to The Summer Club
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <header className="bg-navy px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-display text-[1.35rem] text-cream">The Summer Club</Link>
        <Link href="/" className="text-[0.8rem] text-cream/60 hover:text-cream transition-colors">&larr; Back</Link>
      </header>

      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-[420px]">
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
        </div>
      </div>
    </div>
  );
}
