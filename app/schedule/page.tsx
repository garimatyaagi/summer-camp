import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule — The Summer Club Summer Camp",
  description: "Day-by-day schedule for The Summer Club summer camp. 7 weeks of making, moving, and expressing. Bangalore.",
};

const timeline = [
  { time: "9:00", emoji: "\uD83C\uDF05", label: "Welcome Circle", desc: "A name game, a question, or a short song. Everyone gets seen before the day begins.", dur: "15 min", color: "#F5A623" },
  { time: "9:15", emoji: "\uD83C\uDFA8", label: "Make", desc: "The big hands-on session. Clay, paint, circuits, cooking — whatever the week's theme calls for. This is the heart of the day.", dur: "60 min", color: "#E05A3A" },
  { time: "10:15", emoji: "\uD83C\uDF4A", label: "Snack Break", desc: "Fruit and juice. Ten minutes to breathe, chat, and just be a kid.", dur: "15 min", color: "#4AAD8C" },
  { time: "10:30", emoji: "\u26A1", label: "Move", desc: "Obstacle courses, relay races, yoga, freeze dance, or themed outdoor games. Bodies need to move before brains can focus.", dur: "60 min", color: "#4A8FCC" },
  { time: "11:30", emoji: "\uD83C\uDFA4", label: "Express", desc: "Show-and-tell, storytelling, improv games, mini-presentations. The quietest child often surprises everyone here.", dur: "40 min", color: "#9B6DB5" },
  { time: "12:15", emoji: "\uD83C\uDF92", label: "Wind-down & Pick-up", desc: "Reflection circle. Pack the take-home. Parents arrive to a child who can't stop talking about what they made.", dur: "15 min", color: "#D4A843" },
];

const weeks = [
  {
    num: 1, theme: "Little Artists", emoji: "\uD83C\uDFA8", dates: "Apr 14–18", color: "#E8744A",
    days: [
      { day: "MON", date: "Apr 14", make: "Clay animals — sculpt your favourite creature", move: "Animal movement relay race", express: "Introduce your clay animal — give it a name + story" },
      { day: "TUE", date: "Apr 15", make: "Nature collage — pressed leaves, seeds & paper", move: "Outdoor scavenger hunt for collage materials", express: "Name your collage & tell us one thing you found" },
      { day: "WED", date: "Apr 16", make: "Canvas painting — free expression with acrylics", move: "Freeze dance: strike a pose like a painting", express: "Gallery walk — each child explains their canvas" },
      { day: "THU", date: "Apr 17", make: "Tie-dye T-shirt or bandana", move: "Colour obstacle course: hop only on your colour", express: "Design a name for your tie-dye pattern" },
      { day: "FRI", date: "Apr 18", make: "Assemble art portfolio — decorate the cover", move: "Art Olympics: sculpt + draw relay", express: "Parent showcase — mini gallery walk", friday: true },
    ],
    takeHome: "Clay animal · Collage · Painted canvas · Tie-dye piece · Art portfolio",
  },
  {
    num: 2, theme: "Tiny Scientists", emoji: "\uD83E\uDDEA", dates: "Apr 21–25", color: "#4A8FCC",
    days: [
      { day: "MON", date: "Apr 21", make: "Baking soda volcano — build, decorate & erupt", move: "Lava floor game", express: "Explain the volcano reaction to the group" },
      { day: "TUE", date: "Apr 22", make: "Magnet experiments + make a simple magnet toy", move: "Human magnet game: attract/repel in pairs", express: "Demo your magnet toy: what does it do?" },
      { day: "WED", date: "Apr 23", make: "States of matter: make slime (liquid → solid)", move: "Solid/liquid/gas freeze dance", express: "Explain: is slime a liquid or a solid?" },
      { day: "THU", date: "Apr 24", make: "Seed ball kits — mix clay, soil & seeds", move: "Seed bomb target toss", express: "Plant journal: draw what you think will grow" },
      { day: "FRI", date: "Apr 25", make: "Experiment journal — illustrate the week", move: "Science relay: 4-station experiment race", express: "Parent showcase — my favourite experiment", friday: true },
    ],
    takeHome: "Volcano model · Magnet toy · Slime · Seed ball kit · Experiment journal",
  },
  {
    num: 3, theme: "Mini Chefs", emoji: "\uD83C\uDF73", dates: "Apr 28–May 2", color: "#D4A843",
    days: [
      { day: "MON", date: "Apr 28", make: "No-bake energy balls — oats, honey, chocolate chips", move: "Kitchen relay: sort ingredients by colour", express: "Name your energy ball flavour + rate it" },
      { day: "TUE", date: "Apr 29", make: "Fruit art platter — arrange fruit into scenes", move: "Fruit freeze tag", express: "Describe your fruit scene" },
      { day: "WED", date: "Apr 30", make: "Fresh lemonade stand — squeeze, mix, taste-test", move: "Lemonade run: carry cups without spilling", express: "Design a menu + price for your lemonade" },
      { day: "THU", date: "May 1", make: "Decorate a chef hat + write a recipe booklet", move: "MasterChef obstacle course", express: "Pitch your signature dish to the group" },
      { day: "FRI", date: "May 2", make: "Mini restaurant: set up a table and serve parents", move: "Waiter relay race", express: "Parent showcase — kids run the restaurant", friday: true },
    ],
    takeHome: "Energy balls · Lemonade kit · Chef hat · Recipe booklet · Fruit art creation",
  },
  {
    num: 4, theme: "Storytellers & Puppeteers", emoji: "\uD83C\uDFAD", dates: "May 5–9", color: "#9B6DB5",
    days: [
      { day: "MON", date: "May 5", make: "Sock puppet character — fabric scraps & googly eyes", move: "Mirror game: copy puppet movements", express: "Introduce your puppet — name, age, superpower" },
      { day: "TUE", date: "May 6", make: "Build a cardboard puppet theatre", move: "Emotion charades: act out feelings", express: "Improvise a 1-minute scene with a partner" },
      { day: "WED", date: "May 7", make: "Storyboard a 3-scene story", move: "Freeze-frame theatre", express: "Tell your 3-scene story to the group" },
      { day: "THU", date: "May 8", make: "Rehearse puppet show — write dialogue, practise lines", move: "Tongue twisters + voice projection games", express: "Dress rehearsal: full run-through" },
      { day: "FRI", date: "May 9", make: "Final set + costume touches", move: "Opening ceremony: parade of characters", express: "Parent showcase — live puppet show", friday: true },
    ],
    takeHome: "Sock puppet · Puppet theatre · Storyboard · Script booklet · Show recording",
  },
  {
    num: 5, theme: "Robot Friends", emoji: "\uD83E\uDD16", dates: "May 12–16", color: "#4AAD8C",
    days: [
      { day: "MON", date: "May 12", make: "Design your robot on paper — powers, name, purpose", move: "Program your friend — movement instructions", express: "Present your robot blueprint" },
      { day: "TUE", date: "May 13", make: "Build robot body from cardboard, foil & tubes", move: "Robot walk relay: slow-motion robot style", express: "Introduce your half-built robot" },
      { day: "WED", date: "May 14", make: "Coding card set — sequence cards to complete tasks", move: "Human computer: follow code cards exactly", express: "Explain what went wrong when the code had a bug" },
      { day: "THU", date: "May 15", make: "Finish robot + add LED sticker eyes", move: "Robot Olympics: logic puzzle obstacle course", express: "Teach your robot a skill (mime it)" },
      { day: "FRI", date: "May 16", make: "Robot ID card + instruction manual", move: "Robot parade", express: "Parent showcase — Robot Friends demo day", friday: true },
    ],
    takeHome: "Robot blueprint · Cardboard robot · Coding card set · Logic puzzle · Robot ID card",
  },
  {
    num: 6, theme: "Market Day", emoji: "\uD83D\uDCB0", dates: "May 19–23", color: "#D4655A",
    days: [
      { day: "MON", date: "May 19", make: "Choose your product: painted pots, bookmarks, or bags", move: "Market walk — simulate buying & selling", express: "Pitch: I'm selling… and it's special because…" },
      { day: "TUE", date: "May 20", make: "Production day — make 3–5 units", move: "Delivery relay: transport products carefully", express: "Design your business name + logo" },
      { day: "WED", date: "May 21", make: "Set up stall — signage, pricing tags, display", move: "Mock market: visit each other's stalls", express: "Practice your sales pitch in 30 seconds" },
      { day: "THU", date: "May 22", make: "Final production + wrap/package products", move: "Shopkeeper games: give change, count play money", express: "Full dress rehearsal of market day" },
      { day: "FRI", date: "May 23", make: "Open for business — real parent market", move: "Market setup sprint", express: "Parent showcase — kids sell to real customers", friday: true },
    ],
    takeHome: "Products made · Play money earned · Business card · Stall signage · Profit envelope",
  },
  {
    num: 7, theme: "Grand Finale", emoji: "\u2B50", dates: "May 26–30", color: "#3A7CBD",
    days: [
      { day: "MON", date: "May 26", make: "Start memory scrapbook — one page per week", move: "Best-of relay: favourite activities from each week", express: "My favourite day at The Summer Club was…" },
      { day: "TUE", date: "May 27", make: "Collaborative camp mural", move: "Camp Olympics: multi-sport mini tournament", express: "Write a message on a friend's scrapbook" },
      { day: "WED", date: "May 28", make: "Decorate camp t-shirt with fabric markers", move: "T-shirt parade + group photo shoot", express: "Talent showcase rehearsal" },
      { day: "THU", date: "May 29", make: "Finish scrapbook + assemble yearbook pages", move: "Final Camp Olympics — medals ceremony", express: "Full talent showcase run-through" },
      { day: "FRI", date: "May 30", make: "Certificate personalisation", move: "Graduation parade around the campus", express: "Closing ceremony — certificates, yearbook, talent show", friday: true },
    ],
    takeHome: "Memory scrapbook · Camp t-shirt · Certificate · Yearbook · Camp Olympics medal",
  },
];

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-cream">
      <header className="bg-navy px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-display text-[1.35rem] text-cream">The Summer Club</Link>
        <span className="text-[0.75rem] text-cream/55 tracking-[0.06em] uppercase">Programme &middot; 15 Apr &ndash; 30 May 2026</span>
      </header>

      <div className="max-w-[900px] mx-auto px-6 py-12 pb-20">
        {/* Daily Schedule Timeline */}
        <div className="mb-6">
          <h2 className="font-display text-[1.7rem] text-navy leading-[1.15]">A morning at The Summer Club</h2>
          <p className="mt-1.5 text-muted text-[0.88rem]">Mon–Fri &middot; 9:00 AM – 12:30 PM &middot; Every day follows this rhythm, with content changing by week theme.</p>
        </div>

        <div className="flex flex-col">
          {timeline.map((item, i) => (
            <div key={item.time} className="grid grid-cols-[72px_40px_1fr] gap-x-4">
              <div className="text-right pt-1.5 pb-8">
                <span className="text-[1.05rem] font-bold text-navy leading-none block">{item.time.split(":")[0]}</span>
                <span className="text-[0.7rem] text-muted font-medium">:{item.time.split(":")[1]}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="w-[38px] h-[38px] rounded-full flex items-center justify-center text-[1.1rem] shadow-[0_2px_8px_rgba(0,0,0,0.12)] z-[1] flex-shrink-0"
                  style={{ background: item.color }}>{item.emoji}</span>
                {i < timeline.length - 1 && <span className="flex-1 w-0.5 bg-[#D4DCE6] mt-1" />}
              </div>
              <div className="pt-1 pb-8">
                <span className="font-bold text-[1rem] text-navy block mb-1">{item.label}</span>
                <span className="text-[0.85rem] text-[#5a5a72] leading-[1.55] block">{item.desc}</span>
                <span className="inline-block text-[0.7rem] font-semibold tracking-[0.06em] uppercase px-2 py-0.5 rounded-full bg-[#E8EDF3] text-muted mt-1.5">{item.dur}</span>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-[#D4DCE6] my-12" />

        {/* Weekly Calendar */}
        <div className="mb-7">
          <h2 className="font-display text-[1.7rem] text-navy leading-[1.15]">Seven weeks. Seven worlds.</h2>
          <p className="mt-1.5 text-muted text-[0.88rem]">Each week has a theme. Friday is always Showcase Day.</p>
        </div>

        <div className="flex flex-col gap-4">
          {weeks.map((week) => (
            <div key={week.num} className="rounded-2xl overflow-hidden border border-[#D4DCE6] bg-white shadow-[0_2px_8px_rgba(43,87,151,0.05)]">
              {/* Header */}
              <div className="px-5 py-4 flex items-center justify-between flex-wrap gap-2" style={{ background: week.color }}>
                <div className="flex items-center gap-3">
                  <div>
                    <span className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-white/75 block">Week {week.num}</span>
                    <span className="flex items-center gap-2.5">
                      <span className="text-[1.6rem]">{week.emoji}</span>
                      <span className="font-display text-[1.2rem] text-white leading-[1.1]">{week.theme}</span>
                    </span>
                  </div>
                </div>
                <span className="text-[0.75rem] font-semibold bg-white/20 text-white px-3 py-1 rounded-full">{week.dates}</span>
              </div>

              {/* Column headers */}
              <div className="hidden sm:grid grid-cols-[90px_1fr_1fr_1fr] bg-[#E8EDF3] border-t border-[#D4DCE6]">
                {["Day", "Make", "Move", "Express"].map((h) => (
                  <span key={h} className="px-3.5 py-1.5 text-[0.65rem] font-bold tracking-[0.08em] uppercase text-muted border-r border-[#D4DCE6] last:border-r-0">{h}</span>
                ))}
              </div>

              {/* Day rows */}
              {week.days.map((d) => (
                <div key={d.day} className={`grid grid-cols-1 sm:grid-cols-[90px_1fr_1fr_1fr] border-t border-[#D4DCE6] ${d.friday ? "bg-coral/[0.02]" : "hover:bg-cream"}`}>
                  <div className="px-3.5 py-3 border-r border-[#D4DCE6] flex sm:flex-col items-center sm:items-start gap-2 sm:gap-0.5">
                    <span className={`text-[0.78rem] font-bold tracking-[0.03em] ${d.friday ? "text-coral" : "text-navy"}`}>{d.day}</span>
                    <span className="text-[0.7rem] text-muted">{d.date}</span>
                    {d.friday && <span className="text-[0.62rem] font-bold tracking-[0.06em] uppercase bg-coral/10 text-coral px-1.5 py-0.5 rounded">Showcase</span>}
                  </div>
                  <div className="px-3.5 py-3 border-r border-[#D4DCE6]">
                    <span className="text-[0.65rem] font-bold tracking-[0.08em] uppercase text-coral block sm:hidden mb-0.5">Make</span>
                    <span className="text-[0.8rem] text-[#1E2D3D] leading-[1.35]">{d.make}</span>
                  </div>
                  <div className="px-3.5 py-3 border-r border-[#D4DCE6]">
                    <span className="text-[0.65rem] font-bold tracking-[0.08em] uppercase text-[#4A8FCC] block sm:hidden mb-0.5">Move</span>
                    <span className="text-[0.8rem] text-[#1E2D3D] leading-[1.35]">{d.move}</span>
                  </div>
                  <div className="px-3.5 py-3">
                    <span className="text-[0.65rem] font-bold tracking-[0.08em] uppercase text-[#4AAD8C] block sm:hidden mb-0.5">Express</span>
                    <span className="text-[0.8rem] text-[#1E2D3D] leading-[1.35]">{d.friday ? `\uD83C\uDF89 ${d.express}` : d.express}</span>
                  </div>
                </div>
              ))}

              {/* Take-home footer */}
              <div className="px-5 py-2.5 bg-[#E8EDF3] border-t border-[#D4DCE6] text-[0.78rem] text-[#1E2D3D] flex items-center gap-2">
                <span>\uD83C\uDF92</span>
                <span><strong className="text-navy font-semibold">Take home every day:</strong> {week.takeHome}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/register"
            className="inline-flex items-center gap-2 bg-coral text-white px-8 py-4 rounded-full font-semibold text-[0.95rem] shadow-[0_4px_16px_rgba(224,90,58,0.25)] hover:bg-[#C94B2E] hover:scale-[1.02] transition-all duration-300">
            Register interest &rarr;
          </Link>
          <p className="mt-3 text-[0.82rem] text-muted">
            <Link href="/" className="text-coral font-medium hover:underline underline-offset-4">&larr; Back to The Summer Club</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
