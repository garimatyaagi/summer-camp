"use client";

import { useState, useRef } from "react";
import Link from "next/link";

const weekOptions = [
  { value: "week1", label: "Week 1", dates: "Apr 14–18", theme: "Little Artists" },
  { value: "week2", label: "Week 2", dates: "Apr 21–25", theme: "Tiny Scientists" },
  { value: "week3", label: "Week 3", dates: "Apr 28–May 2", theme: "Mini Chefs" },
  { value: "week4", label: "Week 4", dates: "May 5–9", theme: "Storytellers" },
  { value: "week5", label: "Week 5", dates: "May 12–16", theme: "Robot Friends" },
  { value: "week6", label: "Week 6", dates: "May 19–23", theme: "Market Day" },
  { value: "week7", label: "Week 7", dates: "May 26–30", theme: "Grand Finale" },
];

export default function RegisterPage() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [childNameDisplay, setChildNameDisplay] = useState("");
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState({
    child_name: "", child_dob: "", blood_group: "", gender: "", medical: "",
    plan: "", weeks: [] as string[], extended_play: "no", sibling: "no",
    parent_name: "", parent_phone: "", parent_email: "", emergency_contact: "",
    referral: "", notes: "",
    photo_consent: false, activity_consent: false, tnc_consent: false,
  });

  function update(field: string, value: string | boolean | string[]) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
  }

  function toggleWeek(week: string) {
    setForm((prev) => ({
      ...prev,
      weeks: prev.weeks.includes(week) ? prev.weeks.filter((w) => w !== week) : [...prev.weeks, week],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    // Validation
    const required: (keyof typeof form)[] = ["child_name", "child_dob", "gender", "medical", "plan", "parent_name", "parent_phone", "parent_email", "emergency_contact", "referral"];
    for (const field of required) {
      if (!form[field] || (typeof form[field] === "string" && !(form[field] as string).trim())) {
        setError(`Please fill in all required fields.`);
        return;
      }
    }
    if (form.weeks.length === 0) { setError("Please select at least one week."); return; }
    if (!form.photo_consent || !form.activity_consent || !form.tnc_consent) { setError("Please accept all consent checkboxes."); return; }

    setSubmitting(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setChildNameDisplay(form.child_name.split(" ")[0] || "your little one");
      setSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-cream">
        <header className="bg-navy px-6 py-5 flex items-center justify-between">
          <Link href="/" className="font-display text-[1.35rem] text-cream">Tinkerhood</Link>
          <span className="text-[0.75rem] text-cream/55 tracking-[0.06em] uppercase">HSR Layout &middot; April–May 2026</span>
        </header>
        <div className="max-w-[680px] mx-auto px-6 py-20 text-center">
          <div className="w-[72px] h-[72px] bg-[#3DAA6B] rounded-full flex items-center justify-center mx-auto mb-5 text-[2rem]">
            <span role="img" aria-label="celebration">&#x1F389;</span>
          </div>
          <h2 className="font-display text-[1.8rem] text-navy mb-3">You&apos;re in!</h2>
          <p className="text-text-secondary text-[0.95rem] max-w-[340px] mx-auto mb-6 leading-[1.6]">
            We&apos;ve got your registration. Expect a WhatsApp message from us within 24 hours with your confirmed spot and payment details.
          </p>
          <p className="text-[0.85rem] text-text-secondary">
            Can&apos;t wait to see <strong className="text-navy">{childNameDisplay}</strong> on April 14.
          </p>
          <Link href="/" className="inline-block mt-8 text-[0.9rem] font-semibold text-coral hover:underline underline-offset-4">
            &larr; Back to Tinkerhood
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-navy px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-display text-[1.35rem] text-cream">Tinkerhood</Link>
        <span className="text-[0.75rem] text-cream/55 tracking-[0.06em] uppercase">HSR Layout &middot; April–May 2026</span>
      </header>

      {/* Hero strip */}
      <div className="bg-coral px-6 py-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_20px,rgba(255,255,255,0.04)_20px,rgba(255,255,255,0.04)_40px)]" />
        <div className="relative z-10">
          <span className="inline-block bg-white/20 text-white text-[0.75rem] font-semibold tracking-[0.1em] uppercase px-4 py-1 rounded-full mb-4">Registration</span>
          <h1 className="font-display text-white text-[clamp(1.8rem,5vw,2.8rem)] leading-[1.15]">
            Reserve your child&apos;s<br /><em className="text-white/85">spot at camp</em>
          </h1>
          <p className="mt-3 text-white/85 text-[1rem]">Takes about 3 minutes. We&apos;ll follow up over WhatsApp.</p>
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {["Ages 5–8", "Mon–Fri \u00b7 9–12:30", "April 14 – May 30", "Gated campus \u00b7 HSR Layout"].map((t) => (
              <span key={t} className="bg-white/15 text-white text-[0.82rem] font-medium px-3.5 py-1 rounded-full border border-white/25">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-[680px] mx-auto px-6 py-10 pb-20">
        {/* Early bird banner */}
        <div className="bg-navy text-cream rounded-[14px] p-4 px-5 mb-7 flex items-center gap-3.5">
          <span className="text-[1.6rem] flex-shrink-0" role="img" aria-label="bird">&#x1F426;</span>
          <div>
            <strong className="block text-[0.9rem]">Early bird: &#8377;3,800/week for the first 25 sign-ups</strong>
            <span className="text-[0.78rem] text-cream/70">Regular price is &#8377;4,500/week. Lock in the lower rate while spots last.</span>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} noValidate>
          {/* Section 1: Child */}
          <SectionHeader num={1} title="About your child" />
          <div className="bg-white border border-[#E2D8CE] rounded-2xl p-6 mb-3 shadow-[0_1px_4px_rgba(26,26,46,0.04)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Child's full name" required className="sm:col-span-2">
                <input type="text" value={form.child_name} onChange={(e) => update("child_name", e.target.value)}
                  placeholder="As it should appear on their name tag" className="form-input" />
              </Field>
              <Field label="Date of birth" required>
                <input type="date" value={form.child_dob} onChange={(e) => update("child_dob", e.target.value)} className="form-input" />
              </Field>
              <Field label="Blood group" hint="(optional)">
                <select value={form.blood_group} onChange={(e) => update("blood_group", e.target.value)} className="form-input form-select">
                  <option value="">Select if known</option>
                  {["A+", "A\u2212", "B+", "B\u2212", "AB+", "AB\u2212", "O+", "O\u2212", "Not sure"].map((bg) => (
                    <option key={bg}>{bg}</option>
                  ))}
                </select>
              </Field>
              <Field label="Gender" required className="sm:col-span-2">
                <div className="flex flex-wrap gap-2">
                  {[{ v: "girl", l: "Girl" }, { v: "boy", l: "Boy" }, { v: "prefer_not", l: "Prefer not to say" }].map((opt) => (
                    <label key={opt.v} className={`radio-opt ${form.gender === opt.v ? "selected" : ""}`}>
                      <input type="radio" name="gender" value={opt.v} checked={form.gender === opt.v}
                        onChange={() => update("gender", opt.v)} className="accent-coral w-4 h-4" />
                      {opt.l}
                    </label>
                  ))}
                </div>
              </Field>
              <Field label="Any allergies, medical conditions, or things we should know?" required className="sm:col-span-2">
                <textarea value={form.medical} onChange={(e) => update("medical", e.target.value)}
                  placeholder="Food allergies, asthma, sensory needs — anything that helps us take better care of them. Write 'None' if nothing to note."
                  className="form-input min-h-[90px] resize-y" />
              </Field>
            </div>
          </div>

          {/* Section 2: Plan */}
          <SectionHeader num={2} title="Choose your plan" />
          <div className="bg-white border border-[#E2D8CE] rounded-2xl p-6 mb-3 shadow-[0_1px_4px_rgba(26,26,46,0.04)]">
            <Field label="Which plan works best for you?" required>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-2">
                {[
                  { v: "weekly", name: "Weekly", price: "\u20B94,500", sub: "\u20B93,800 early bird", subColor: "#E94560", save: "" },
                  { v: "4week", name: "4-Week Bundle", price: "\u20B915,000", sub: "", subColor: "", save: "Save \u20B93,000", badge: "Popular" },
                  { v: "season", name: "Full Season", price: "\u20B924,500", sub: "", subColor: "", save: "Save \u20B97,000" },
                ].map((plan) => (
                  <label key={plan.v} className={`plan-opt ${form.plan === plan.v ? "selected" : ""}`}>
                    <input type="radio" name="plan" value={plan.v} checked={form.plan === plan.v}
                      onChange={() => update("plan", plan.v)} className="hidden" />
                    {plan.badge && <span className="plan-badge">{plan.badge}</span>}
                    <span className="text-[0.82rem] font-semibold text-[#2C2C3E]">{plan.name}</span>
                    <span className="font-display text-[1.4rem] text-navy leading-none">{plan.price}</span>
                    {plan.sub && <span className="text-[0.72rem] font-semibold" style={{ color: plan.subColor }}>{plan.sub}</span>}
                    {plan.save && <span className="text-[0.72rem] font-semibold text-[#3DAA6B]">{plan.save}</span>}
                  </label>
                ))}
              </div>
            </Field>

            <Field label="Which weeks would you like to enrol for?" required hint="Select all that apply" className="mt-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mt-2">
                {weekOptions.map((w) => (
                  <label key={w.value} className={`week-opt ${form.weeks.includes(w.value) ? "selected" : ""}`}>
                    <input type="checkbox" checked={form.weeks.includes(w.value)} onChange={() => toggleWeek(w.value)} className="hidden" />
                    <span className="text-[0.82rem] font-semibold text-navy">{w.label}</span>
                    <span className="text-[0.75rem] text-[#7a7a96]">{w.dates}</span>
                    <span className="text-[0.75rem] font-medium text-coral">{w.theme}</span>
                  </label>
                ))}
              </div>
            </Field>

            <Field label="Would you like Extended Play?" hint="(optional)" className="mt-5">
              <p className="text-[0.8rem] text-[#7a7a96] mb-2">12:30–2:30 PM &middot; &#8377;1,500/week &middot; Lunch included</p>
              <div className="flex flex-wrap gap-2">
                {[{ v: "yes", l: "Yes, sign me up" }, { v: "maybe", l: "Maybe — tell me more" }, { v: "no", l: "No, thanks" }].map((opt) => (
                  <label key={opt.v} className={`radio-opt ${form.extended_play === opt.v ? "selected" : ""}`}>
                    <input type="radio" name="extended_play" value={opt.v} checked={form.extended_play === opt.v}
                      onChange={() => update("extended_play", opt.v)} className="accent-coral w-4 h-4" />
                    {opt.l}
                  </label>
                ))}
              </div>
            </Field>

            <Field label="Do you have more than one child joining?" hint="(optional)" className="mt-5">
              <p className="text-[0.8rem] text-[#7a7a96] mb-2">Sibling discount: 15% off child #2 onwards</p>
              <div className="flex flex-wrap gap-2">
                {[{ v: "yes", l: "Yes — applying sibling discount" }, { v: "no", l: "No, just the one" }].map((opt) => (
                  <label key={opt.v} className={`radio-opt ${form.sibling === opt.v ? "selected" : ""}`}>
                    <input type="radio" name="sibling" value={opt.v} checked={form.sibling === opt.v}
                      onChange={() => update("sibling", opt.v)} className="accent-coral w-4 h-4" />
                    {opt.l}
                  </label>
                ))}
              </div>
            </Field>
          </div>

          {/* Section 3: Parent */}
          <SectionHeader num={3} title="Your details" />
          <div className="bg-white border border-[#E2D8CE] rounded-2xl p-6 mb-3 shadow-[0_1px_4px_rgba(26,26,46,0.04)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Your name" required className="sm:col-span-2">
                <input type="text" value={form.parent_name} onChange={(e) => update("parent_name", e.target.value)}
                  placeholder="Parent or guardian" className="form-input" />
              </Field>
              <Field label="WhatsApp number" required>
                <input type="tel" value={form.parent_phone} onChange={(e) => update("parent_phone", e.target.value)}
                  placeholder="+91 98765 43210" className="form-input" />
              </Field>
              <Field label="Email address" required>
                <input type="email" value={form.parent_email} onChange={(e) => update("parent_email", e.target.value)}
                  placeholder="you@email.com" className="form-input" />
              </Field>
              <Field label="Second emergency contact" required hint="Name + phone number" className="sm:col-span-2">
                <input type="text" value={form.emergency_contact} onChange={(e) => update("emergency_contact", e.target.value)}
                  placeholder="e.g. Priya Sharma \u00b7 +91 98765 00000" className="form-input" />
              </Field>
            </div>
          </div>

          {/* Section 4: More */}
          <SectionHeader num={4} title="A little more" />
          <div className="bg-white border border-[#E2D8CE] rounded-2xl p-6 mb-3 shadow-[0_1px_4px_rgba(26,26,46,0.04)]">
            <div className="grid gap-4">
              <Field label="How did you hear about Tinkerhood?" required>
                <select value={form.referral} onChange={(e) => update("referral", e.target.value)} className="form-input form-select">
                  <option value="">Select one</option>
                  <option value="whatsapp">WhatsApp group</option>
                  <option value="instagram">Instagram</option>
                  <option value="friend">A friend told me</option>
                  <option value="meta_ad">Facebook / Instagram ad</option>
                  <option value="google">Google search</option>
                  <option value="other">Something else</option>
                </select>
              </Field>
              <Field label="Anything else you'd like us to know?" hint="(optional)">
                <textarea value={form.notes} onChange={(e) => update("notes", e.target.value)}
                  placeholder="Questions, special requests, excitement — all welcome here."
                  className="form-input min-h-[90px] resize-y" />
              </Field>
            </div>
          </div>

          {/* Section 5: Consent */}
          <SectionHeader num={5} title="Before you submit" />
          <div className="bg-white border border-[#E2D8CE] rounded-2xl p-6 mb-3 shadow-[0_1px_4px_rgba(26,26,46,0.04)]">
            <div className="flex flex-col gap-3">
              <ConsentBox checked={form.photo_consent} onChange={(v) => update("photo_consent", v)}
                title="Photos & videos"
                text="I'm happy for Tinkerhood to photograph and video my child during camp activities, and to use these on Instagram and WhatsApp parent updates." />
              <ConsentBox checked={form.activity_consent} onChange={(v) => update("activity_consent", v)}
                title="Activity participation"
                text="I give my child permission to take part in all Tinkerhood activities, including outdoor play, cooking, and hands-on making sessions." />
              <ConsentBox checked={form.tnc_consent} onChange={(v) => update("tnc_consent", v)}
                title="Terms & policies"
                text="I understand that missed days cannot be refunded or transferred, and that camp fees are due before the first day of each enrolled week." />
            </div>
            <div className="mt-4 bg-coral/[0.06] border border-coral/20 rounded-[10px] px-4 py-3 text-[0.82rem] text-coral font-medium">
              &#x1F512; Your information is only used to run the camp and keep your child safe. We don&apos;t share it with anyone.
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="mt-4 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-[0.88rem]">
              {error}
            </div>
          )}

          {/* Submit */}
          <div className="mt-8 text-center">
            <button type="submit" disabled={submitting}
              className="bg-navy text-cream border-0 px-12 py-4 rounded-full font-semibold text-[1rem] tracking-[0.01em] cursor-pointer transition-all duration-200 shadow-[0_4px_16px_rgba(26,26,46,0.2)] hover:bg-coral hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(233,69,96,0.3)] active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed">
              {submitting ? "Submitting..." : "Reserve our spot \u2192"}
            </button>
            <p className="mt-3 text-[0.78rem] text-[#7a7a96]">We&apos;ll confirm over WhatsApp within 24 hours and send payment details.</p>
          </div>
        </form>
      </div>
    </div>
  );
}

function SectionHeader({ num, title }: { num: number; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4 mt-8 first:mt-0">
      <span className="w-7 h-7 rounded-full bg-navy text-cream text-[0.78rem] font-bold flex items-center justify-center flex-shrink-0">{num}</span>
      <span className="font-display text-[1.15rem] text-navy">{title}</span>
      <span className="flex-1 h-px bg-[#E2D8CE]" />
    </div>
  );
}

function Field({ label, required, hint, className, children }: {
  label: string; required?: boolean; hint?: string; className?: string; children: React.ReactNode;
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className || ""}`}>
      <label className="text-[0.84rem] font-semibold text-navy tracking-[0.01em]">
        {label}{required && <span className="text-coral ml-0.5">*</span>}
        {hint && <span className="font-normal text-[#7a7a96] text-[0.78rem] ml-1">{hint}</span>}
      </label>
      {children}
    </div>
  );
}

function ConsentBox({ checked, onChange, title, text }: {
  checked: boolean; onChange: (v: boolean) => void; title: string; text: string;
}) {
  return (
    <label className={`flex items-start gap-3 p-3.5 rounded-[10px] border-[1.5px] cursor-pointer transition-all duration-150 ${
      checked ? "border-coral bg-coral/[0.04]" : "border-[#E2D8CE] bg-cream"
    }`}>
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)}
        className="accent-coral w-[18px] h-[18px] flex-shrink-0 mt-0.5 cursor-pointer" />
      <span className="text-[0.86rem] text-[#2C2C3E] leading-[1.5]">
        <strong>{title}</strong><br />{text}
      </span>
    </label>
  );
}
