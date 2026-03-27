import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule — Tinkerhood Summer Camp",
  description: "Day-by-day schedule for Tinkerhood summer camp. 7 weeks of making, moving, and expressing. HSR Layout, Bangalore.",
};

const timeline = [
  { time: "9:00", emoji: "\uD83C\uDF05", label: "Welcome Circle", desc: "A name game, a question, or a short song. Everyone gets seen before the day begins.", dur: "15 min", color: "#F5A623" },
  { time: "9:15", emoji: "\uD83C\uDFA8", label: "Make", desc: "The big hands-on session. Clay, paint, circuits, cooking \u2014 whatever the week\u2019s theme calls for. This is the heart of the day.", dur: "60 min", color: "#E94560" },
  { time: "10:15", emoji: "\uD83C\uDF4A", label: "Snack Break", desc: "Fruit and juice. Ten minutes to breathe, chat, and just be a kid.", dur: "15 min", color: "#4AAD8C" },
  { time: "10:30", emoji: "\u26A1", label: "Move", desc: "Obstacle courses, relay races, yoga, freeze dance, or themed outdoor games. Bodies need to move before brains can focus.", dur: "60 min", color: "#4A8FCC" },
  { time: "11:30", emoji: "\uD83C\uDFA4", label: "Express", desc: "Show-and-tell, storytelling, improv games, mini-presentations. The quietest child often surprises everyone here.", dur: "40 min", color: "#9B6DB5" },
  { time: "12:15", emoji: "\uD83C\uDF92", label: "Wind-down & Pick-up", desc: "Reflection circle. Pack the take-home. Parents arrive to a child who can\u2019t stop talking about what they made.", dur: "15 min", color: "#D4A843" },
];

const weeks = [
  {
    num: 1, theme: "Little Artists", emoji: "\uD83C\uDFA8", dates: "Apr 14\u201318", color: "#E8744A",
    days: [
      { day: "MON", date: "Apr 14", make: "Clay animals \u2014 sculpt your favourite creature", move: "Animal movement relay race", express: "Introduce your clay animal \u2014 give it a name + story" },
      { day: "TUE", date: "Apr 15", make: "Nature collage \u2014 pressed leaves, seeds & paper", move: "Outdoor scavenger hunt for collage materials", express: "Name your collage & tell us one thing you found" },
      { day: "WED", date: "Apr 16", make: "Canvas painting \u2014 free expression with acrylics", move: "Freeze dance: strike a pose like a painting", express: "Gallery walk \u2014 each child explains their canvas" },
      { day: "THU", date: "Apr 17", make: "Tie-dye T-shirt or bandana", move: "Colour obstacle course: hop only on your colour", express: "Design a name for your tie-dye pattern" },
      { day: "FRI", date: "Apr 18", make: "Assemble art portfolio \u2014 decorate the cover", move: "Art Olympics: sculpt + draw relay", express: "Parent showcase \u2014 mini gallery walk", friday: true },
    ],
    takeHome: "Clay animal \u00b7 Collage \u00b7 Painted canvas \u00b7 Tie-dye piece \u00b7 Art portfolio",
  },
  {
    num: 2, theme: "Tiny Scientists", emoji: "\uD83E\uDDEA", dates: "Apr 21\u201325", color: "#4A8FCC",
    days: [
      { day: "MON", date: "Apr 21", make: "Baking soda volcano \u2014 build, decorate & erupt", move: "Lava floor game", express: "Explain the volcano reaction to the group" },
      { day: "TUE", date: "Apr 22", make: "Magnet experiments + make a simple magnet toy", move: "Human magnet game: attract/repel in pairs", express: "Demo your magnet toy: what does it do?" },
      { day: "WED", date: "Apr 23", make: "States of matter: make slime (liquid \u2192 solid)", move: "Solid/liquid/gas freeze dance", express: "Explain: \u201CIs slime a liquid or a solid?\u201D" },
      { day: "THU", date: "Apr 24", make: "Seed ball kits \u2014 mix clay, soil & seeds", move: "Seed bomb target toss", express: "Plant journal: draw what you think will grow" },
      { day: "FRI", date: "Apr 25", make: "Experiment journal \u2014 illustrate the week", move: "Science relay: 4-station experiment race", express: "Parent showcase \u2014 \u201Cmy favourite experiment\u201D", friday: true },
    ],
    takeHome: "Volcano model \u00b7 Magnet toy \u00b7 Slime \u00b7 Seed ball kit \u00b7 Experiment journal",
  },
  {
    num: 3, theme: "Mini Chefs", emoji: "\uD83C\uDF73", dates: "Apr 28\u2013May 2", color: "#D4A843",
    days: [
      { day: "MON", date: "Apr 28", make: "No-bake energy balls \u2014 oats, honey, chocolate chips", move: "Kitchen relay: sort ingredients by colour", express: "Name your energy ball flavour + rate it" },
      { day: "TUE", date: "Apr 29", make: "Fruit art platter \u2014 arrange fruit into scenes", move: "Fruit freeze tag", express: "Describe your fruit scene" },
      { day: "WED", date: "Apr 30", make: "Fresh lemonade stand \u2014 squeeze, mix, taste-test", move: "Lemonade run: carry cups without spilling", express: "Design a menu + price for your lemonade" },
      { day: "THU", date: "May 1", make: "Decorate a chef hat + write a recipe booklet", move: "MasterChef obstacle course", express: "Pitch your \u201Csignature dish\u201D" },
      { day: "FRI", date: "May 2", make: "Mini restaurant: set up a table and serve parents", move: "Waiter relay race", express: "Parent showcase \u2014 kids run the restaurant", friday: true },
    ],
    takeHome: "Energy balls \u00b7 Lemonade kit \u00b7 Chef hat \u00b7 Recipe booklet \u00b7 Fruit art creation",
  },
  {
    num: 4, theme: "Storytellers & Puppeteers", emoji: "\uD83C\uDFAD", dates: "May 5\u20139", color: "#9B6DB5",
    days: [
      { day: "MON", date: "May 5", make: "Sock puppet character \u2014 fabric scraps & googly eyes", move: "Mirror game: copy puppet movements", express: "Introduce your puppet \u2014 name, age, superpower" },
      { day: "TUE", date: "May 6", make: "Build a cardboard puppet theatre", move: "Emotion charades: act out feelings", express: "Improvise a 1-minute scene with a partner" },
      { day: "WED", date: "May 7", make: "Storyboard a 3-scene story", move: "Freeze-frame theatre", express: "Tell your 3-scene story to the group" },
      { day: "THU", date: "May 8", make: "Rehearse puppet show \u2014 write dialogue, practise lines", move: "Tongue twisters + voice projection games", express: "Dress rehearsal: full run-through" },
      { day: "FRI", date: "May 9", make: "Final set + costume touches", move: "Opening ceremony: parade of characters", express: "Parent showcase \u2014 live puppet show", friday: true },
    ],
    takeHome: "Sock puppet \u00b7 Puppet theatre \u00b7 Storyboard \u00b7 Script booklet \u00b7 Show recording",
  },
  {
    num: 5, theme: "Robot Friends", emoji: "\uD83E\uDD16", dates: "May 12\u201316", color: "#4AAD8C",
    days: [
      { day: "MON", date: "May 12", make: "Design your robot on paper \u2014 powers, name, purpose", move: "\u201CProgram your friend\u201D \u2014 movement instructions", express: "Present your robot blueprint" },
      { day: "TUE", date: "May 13", make: "Build robot body from cardboard, foil & tubes", move: "Robot walk relay: slow-motion robot style", express: "Introduce your half-built robot" },
      { day: "WED", date: "May 14", make: "Coding card set \u2014 sequence cards to complete tasks", move: "Human computer: follow code cards exactly", express: "Explain what went wrong when the code had a bug" },
      { day: "THU", date: "May 15", make: "Finish robot + add LED sticker eyes", move: "Robot Olympics: logic puzzle obstacle course", express: "Teach your robot a skill (mime it)" },
      { day: "FRI", date: "May 16", make: "Robot ID card + instruction manual", move: "Robot parade", express: "Parent showcase \u2014 Robot Friends demo day", friday: true },
    ],
    takeHome: "Robot blueprint \u00b7 Cardboard robot \u00b7 Coding card set \u00b7 Logic puzzle \u00b7 Robot ID card",
  },
  {
    num: 6, theme: "Market Day", emoji: "\uD83D\uDCB0", dates: "May 19\u201323", color: "#D4655A",
    days: [
      { day: "MON", date: "May 19", make: "Choose your product: painted pots, bookmarks, or bags", move: "Market walk \u2014 simulate buying & selling", express: "Pitch: \u201CI\u2019m selling\u2026 and it\u2019s special because\u2026\u201D" },
      { day: "TUE", date: "May 20", make: "Production day \u2014 make 3\u20135 units", move: "Delivery relay: transport products carefully", express: "Design your business name + logo" },
      { day: "WED", date: "May 21", make: "Set up stall \u2014 signage, pricing tags, display", move: "Mock market: visit each other\u2019s stalls", express: "Practice your sales pitch in 30 seconds" },
      { day: "THU", date: "May 22", make: "Final production + wrap/package products", move: "Shopkeeper games: give change, count play money", express: "Full dress rehearsal of market day" },
      { day: "FRI", date: "May 23", make: "Open for business \u2014 real parent market", move: "Market setup sprint", express: "Parent showcase \u2014 kids sell to real customers", friday: true },
    ],
    takeHome: "Products made \u00b7 Play money earned \u00b7 Business card \u00b7 Stall signage \u00b7 Profit envelope",
  },
  {
    num: 7, theme: "Grand Finale", emoji: "\u2B50", dates: "May 26\u201330", color: "#3A7CBD",
    days: [
      { day: "MON", date: "May 26", make: "Start memory scrapbook \u2014 one page per week", move: "Best-of relay: favourite activities from each week", express: "\u201CMy favourite day at Tinkerhood was\u2026\u201D" },
      { day: "TUE", date: "May 27", make: "Collaborative camp mural", move: "Camp Olympics: multi-sport mini tournament", express: "Write a message on a friend\u2019s scrapbook" },
      { day: "WED", date: "May 28", make: "Decorate camp t-shirt with fabric markers", move: "T-shirt parade + group photo shoot", express: "Talent showcase rehearsal" },
      { day: "THU", date: "May 29", make: "Finish scrapbook + assemble yearbook pages", move: "Final Camp Olympics \u2014 medals ceremony", express: "Full talent showcase run-through" },
      { day: "FRI", date: "May 30", make: "Certificate personalisation", move: "Graduation parade around the campus", express: "Closing ceremony \u2014 certificates, yearbook, talent show", friday: true },
    ],
    takeHome: "Memory scrapbook \u00b7 Camp t-shirt \u00b7 Certificate \u00b7 Yearbook \u00b7 Camp Olympics medal",
  },
];

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-cream">
      <header className="bg-navy px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-display text-[1.35rem] text-cream">Tinkerhood</Link>
        <span className="text-[0.75rem] text-cream/55 tracking-[0.06em] uppercase">Programme &middot; April\u2013May 2026</span>
      </header>

      <div className="max-w-[900px] mx-auto px-6 py-12 pb-20">
        {/* Daily Schedule Timeline */}
        <div className="mb-6">
          <h2 className="font-display text-[1.7rem] text-navy leading-[1.15]">A morning at Tinkerhood</h2>
          <p className="mt-1.5 text-muted text-[0.88rem]">Mon\u2013Fri &middot; 9:00 AM \u2013 12:30 PM &middot; Every day follows this rhythm, with content changing by week theme.</p>
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
                {i < timeline.length - 1 && <span className="flex-1 w-0.5 bg-[#E2D8CE] mt-1" />}
              </div>
              <div className="pt-1 pb-8">
                <span className="font-bold text-[1rem] text-navy block mb-1">{item.label}</span>
                <span className="text-[0.85rem] text-[#5a5a72] leading-[1.55] block">{item.desc}</span>
                <span className="inline-block text-[0.7rem] font-semibold tracking-[0.06em] uppercase px-2 py-0.5 rounded-full bg-[#F5EDE0] text-muted mt-1.5">{item.dur}</span>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-[#E2D8CE] my-12" />

        {/* Weekly Calendar */}
        <div className="mb-7">
          <h2 className="font-display text-[1.7rem] text-navy leading-[1.15]">Seven weeks. Seven worlds.</h2>
          <p className="mt-1.5 text-muted text-[0.88rem]">Each week has a theme. Friday is always Showcase Day.</p>
        </div>

        <div className="flex flex-col gap-4">
          {weeks.map((week) => (
            <div key={week.num} className="rounded-2xl overflow-hidden border border-[#E2D8CE] bg-white shadow-[0_2px_8px_rgba(26,26,46,0.05)]">
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
              <div className="hidden sm:grid grid-cols-[90px_1fr_1fr_1fr] bg-[#F5EDE0] border-t border-[#E2D8CE]">
                {["Day", "Make", "Move", "Express"].map((h) => (
                  <span key={h} className="px-3.5 py-1.5 text-[0.65rem] font-bold tracking-[0.08em] uppercase text-muted border-r border-[#E2D8CE] last:border-r-0">{h}</span>
                ))}
              </div>

              {/* Day rows */}
              {week.days.map((d) => (
                <div key={d.day} className={`grid grid-cols-1 sm:grid-cols-[90px_1fr_1fr_1fr] border-t border-[#E2D8CE] ${d.friday ? "bg-coral/[0.02]" : "hover:bg-cream"}`}>
                  <div className="px-3.5 py-3 border-r border-[#E2D8CE] flex sm:flex-col items-center sm:items-start gap-2 sm:gap-0.5">
                    <span className={`text-[0.78rem] font-bold tracking-[0.03em] ${d.friday ? "text-coral" : "text-navy"}`}>{d.day}</span>
                    <span className="text-[0.7rem] text-muted">{d.date}</span>
                    {d.friday && <span className="text-[0.62rem] font-bold tracking-[0.06em] uppercase bg-coral/10 text-coral px-1.5 py-0.5 rounded">Showcase</span>}
                  </div>
                  <div className="px-3.5 py-3 border-r border-[#E2D8CE]">
                    <span className="text-[0.65rem] font-bold tracking-[0.08em] uppercase text-coral block sm:hidden mb-0.5">Make</span>
                    <span className="text-[0.8rem] text-[#2C2C3E] leading-[1.35]">{d.make}</span>
                  </div>
                  <div className="px-3.5 py-3 border-r border-[#E2D8CE]">
                    <span className="text-[0.65rem] font-bold tracking-[0.08em] uppercase text-[#4A8FCC] block sm:hidden mb-0.5">Move</span>
                    <span className="text-[0.8rem] text-[#2C2C3E] leading-[1.35]">{d.move}</span>
                  </div>
                  <div className="px-3.5 py-3">
                    <span className="text-[0.65rem] font-bold tracking-[0.08em] uppercase text-[#4AAD8C] block sm:hidden mb-0.5">Express</span>
                    <span className="text-[0.8rem] text-[#2C2C3E] leading-[1.35]">{d.friday ? `\uD83C\uDF89 ${d.express}` : d.express}</span>
                  </div>
                </div>
              ))}

              {/* Take-home footer */}
              <div className="px-5 py-2.5 bg-[#F5EDE0] border-t border-[#E2D8CE] text-[0.78rem] text-[#2C2C3E] flex items-center gap-2">
                <span>\uD83C\uDF92</span>
                <span><strong className="text-navy font-semibold">Take home every day:</strong> {week.takeHome}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/register"
            className="inline-flex items-center gap-2 bg-coral text-white px-8 py-4 rounded-full font-semibold text-[0.95rem] shadow-[0_4px_16px_rgba(233,69,96,0.25)] hover:bg-[#D13A52] hover:scale-[1.02] transition-all duration-300">
            Reserve a spot &rarr;
          </Link>
          <p className="mt-3 text-[0.82rem] text-muted">
            <Link href="/" className="text-coral font-medium hover:underline underline-offset-4">&larr; Back to Tinkerhood</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
