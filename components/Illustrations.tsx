// Thematic hand-drawn SVG illustrations for each section
// Style: loose, imperfect lines like a child's drawing but refined

export function PaintPalette({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className}>
      <path d="M60 15 C30 12, 10 35, 12 60 C14 85, 35 105, 60 108 C85 110, 108 90, 110 65 C112 40, 95 20, 75 15 C70 14, 65 14, 60 15Z"
        fill="#F0C75E" fillOpacity="0.3" stroke="#F0C75E" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="40" cy="45" r="8" fill="#E05A3A" />
      <circle cx="55" cy="30" r="7" fill="#2B5797" />
      <circle cx="75" cy="35" r="7" fill="#3A8C6E" />
      <circle cx="85" cy="55" r="6" fill="#F0C75E" />
      <circle cx="35" cy="70" r="6" fill="#9BB8D7" />
      {/* Brush */}
      <rect x="88" y="78" width="6" height="30" rx="2" fill="#8B6914" stroke="#6B5010" strokeWidth="1" transform="rotate(30, 91, 93)" />
      <path d="M85 82 L80 95 L90 98 Z" fill="#E05A3A" opacity="0.8" transform="rotate(30, 85, 90)" />
    </svg>
  );
}

export function ScienceBeaker({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 120" fill="none" className={className}>
      {/* Beaker body */}
      <path d="M35 35 L25 90 C22 105, 78 105, 75 90 L65 35" stroke="#2B5797" strokeWidth="2.5" strokeLinecap="round" fill="#9BB8D7" fillOpacity="0.2" />
      {/* Neck */}
      <line x1="35" y1="20" x2="35" y2="35" stroke="#2B5797" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="65" y1="20" x2="65" y2="35" stroke="#2B5797" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="30" y1="20" x2="70" y2="20" stroke="#2B5797" strokeWidth="2.5" strokeLinecap="round" />
      {/* Liquid */}
      <path d="M30 72 C40 68, 55 76, 70 72 L75 90 C78 105, 22 105, 25 90 Z" fill="#3A8C6E" fillOpacity="0.35" />
      {/* Bubbles */}
      <circle cx="40" cy="80" r="3" fill="#3A8C6E" fillOpacity="0.5" />
      <circle cx="55" cy="75" r="4" fill="#3A8C6E" fillOpacity="0.4" />
      <circle cx="48" cy="85" r="2.5" fill="#3A8C6E" fillOpacity="0.5" />
      {/* Steam */}
      <path d="M45 15 C43 10, 47 5, 45 0" stroke="#9BB8D7" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M55 12 C53 7, 57 2, 55 -3" stroke="#9BB8D7" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function ChefHat({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 110" fill="none" className={className}>
      {/* Hat puff */}
      <path d="M20 50 C10 45, 5 30, 15 20 C25 10, 40 8, 50 12 C60 8, 75 10, 85 20 C95 30, 90 45, 80 50"
        fill="white" stroke="#F0C75E" strokeWidth="2.5" strokeLinecap="round" />
      {/* Band */}
      <rect x="20" y="50" width="60" height="15" rx="3" fill="white" stroke="#F0C75E" strokeWidth="2" />
      {/* Spoon */}
      <line x1="70" y1="75" x2="85" y2="100" stroke="#8B6914" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="88" cy="103" rx="6" ry="4" fill="#8B6914" opacity="0.6" transform="rotate(-25, 88, 103)" />
      {/* Food dots */}
      <circle cx="35" cy="80" r="4" fill="#E05A3A" fillOpacity="0.6" />
      <circle cx="50" cy="85" r="3" fill="#F0C75E" fillOpacity="0.7" />
      <circle cx="42" cy="90" r="3.5" fill="#3A8C6E" fillOpacity="0.5" />
    </svg>
  );
}

export function LeafBranch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" fill="none" className={className}>
      {/* Stem */}
      <path d="M10 90 C30 70, 50 60, 80 30 C90 20, 100 15, 110 10"
        stroke="#3A8C6E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Leaves */}
      <path d="M30 75 C20 65, 25 50, 35 55 C40 58, 35 70, 30 75Z" fill="#3A8C6E" fillOpacity="0.4" stroke="#3A8C6E" strokeWidth="1.5" />
      <path d="M50 58 C42 48, 48 35, 56 40 C60 42, 55 55, 50 58Z" fill="#3A8C6E" fillOpacity="0.5" stroke="#3A8C6E" strokeWidth="1.5" />
      <path d="M70 40 C62 30, 68 18, 76 22 C80 24, 75 36, 70 40Z" fill="#3A8C6E" fillOpacity="0.35" stroke="#3A8C6E" strokeWidth="1.5" />
      {/* Right side leaves */}
      <path d="M40 70 C50 62, 58 68, 48 78 C44 80, 38 76, 40 70Z" fill="#F0C75E" fillOpacity="0.4" stroke="#3A8C6E" strokeWidth="1.5" />
      <path d="M60 50 C70 42, 78 48, 68 58 C64 60, 58 56, 60 50Z" fill="#F0C75E" fillOpacity="0.35" stroke="#3A8C6E" strokeWidth="1.5" />
      {/* Flower */}
      <circle cx="95" cy="18" r="5" fill="#E05A3A" fillOpacity="0.5" />
      <circle cx="95" cy="18" r="2" fill="#F0C75E" />
    </svg>
  );
}

export function RobotFriend({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 120" fill="none" className={className}>
      {/* Antenna */}
      <line x1="50" y1="5" x2="50" y2="25" stroke="#9BB8D7" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="50" cy="5" r="4" fill="#E05A3A" />
      {/* Head */}
      <rect x="25" y="25" width="50" height="35" rx="8" fill="#9BB8D7" fillOpacity="0.3" stroke="#2B5797" strokeWidth="2.5" />
      {/* Eyes */}
      <circle cx="38" cy="40" r="6" fill="white" stroke="#2B5797" strokeWidth="2" />
      <circle cx="62" cy="40" r="6" fill="white" stroke="#2B5797" strokeWidth="2" />
      <circle cx="39" cy="39" r="3" fill="#2B5797" />
      <circle cx="63" cy="39" r="3" fill="#2B5797" />
      {/* Mouth */}
      <path d="M40 52 L45 55 L50 52 L55 55 L60 52" stroke="#2B5797" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Body */}
      <rect x="30" y="62" width="40" height="35" rx="6" fill="#F0C75E" fillOpacity="0.3" stroke="#2B5797" strokeWidth="2.5" />
      {/* Body detail */}
      <circle cx="50" cy="78" r="5" fill="#E05A3A" fillOpacity="0.5" stroke="#E05A3A" strokeWidth="1.5" />
      {/* Arms */}
      <line x1="28" y1="70" x2="15" y2="82" stroke="#2B5797" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="72" y1="70" x2="85" y2="82" stroke="#2B5797" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="15" cy="82" r="4" fill="#9BB8D7" fillOpacity="0.4" stroke="#2B5797" strokeWidth="1.5" />
      <circle cx="85" cy="82" r="4" fill="#9BB8D7" fillOpacity="0.4" stroke="#2B5797" strokeWidth="1.5" />
      {/* Legs */}
      <line x1="40" y1="97" x2="38" y2="112" stroke="#2B5797" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="60" y1="97" x2="62" y2="112" stroke="#2B5797" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function ShopSign({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 110 100" fill="none" className={className}>
      {/* Pole */}
      <line x1="20" y1="15" x2="20" y2="95" stroke="#8B6914" strokeWidth="3" strokeLinecap="round" />
      {/* Sign board */}
      <rect x="25" y="20" width="75" height="45" rx="5" fill="white" stroke="#E05A3A" strokeWidth="2.5" />
      {/* "OPEN" text representation */}
      <circle cx="42" cy="42" r="8" stroke="#E05A3A" strokeWidth="2" fill="none" />
      <path d="M55 34 L55 50" stroke="#F0C75E" strokeWidth="3" strokeLinecap="round" />
      <path d="M65 34 L65 50 M65 34 L75 34 M65 42 L73 42 M65 50 L75 50" stroke="#3A8C6E" strokeWidth="2" strokeLinecap="round" />
      <path d="M82 34 L82 50 M82 34 L92 50 M92 34 L92 50" stroke="#2B5797" strokeWidth="2" strokeLinecap="round" />
      {/* Hanging bracket */}
      <path d="M20 18 L28 18" stroke="#8B6914" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M20 63 L28 63" stroke="#8B6914" strokeWidth="2.5" strokeLinecap="round" />
      {/* Coins */}
      <circle cx="45" cy="82" r="6" fill="#F0C75E" fillOpacity="0.6" stroke="#F0C75E" strokeWidth="1.5" />
      <circle cx="60" cy="85" r="5" fill="#F0C75E" fillOpacity="0.5" stroke="#F0C75E" strokeWidth="1.5" />
      <circle cx="52" cy="90" r="4" fill="#F0C75E" fillOpacity="0.4" stroke="#F0C75E" strokeWidth="1.5" />
    </svg>
  );
}

export function TrophyCup({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 110" fill="none" className={className}>
      {/* Cup */}
      <path d="M30 20 L25 60 C22 75, 78 75, 75 60 L70 20 Z" fill="#F0C75E" fillOpacity="0.35" stroke="#F0C75E" strokeWidth="2.5" strokeLinecap="round" />
      {/* Handles */}
      <path d="M30 30 C15 32, 12 50, 25 55" stroke="#F0C75E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M70 30 C85 32, 88 50, 75 55" stroke="#F0C75E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Star on cup */}
      <path d="M50 35 L53 43 L62 43 L55 48 L57 57 L50 52 L43 57 L45 48 L38 43 L47 43 Z"
        fill="#E05A3A" fillOpacity="0.6" />
      {/* Base */}
      <rect x="40" y="72" width="20" height="8" rx="2" fill="#F0C75E" fillOpacity="0.5" stroke="#F0C75E" strokeWidth="2" />
      <rect x="35" y="80" width="30" height="6" rx="2" fill="#F0C75E" fillOpacity="0.4" stroke="#F0C75E" strokeWidth="2" />
      {/* Sparkles */}
      <path d="M20 15 L22 20 L27 18" stroke="#F0C75E" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M80 10 L78 16 L83 15" stroke="#E05A3A" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M85 25 L88 22" stroke="#F0C75E" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ClockIcon({ className = "" }: { className?: string }) {
  // Pre-computed hour marker positions (avoids hydration mismatch from Math.cos/sin)
  const markers = [
    { cx: 40, cy: 15 },    // 12
    { cx: 52.5, cy: 18.3 }, // 1
    { cx: 61.7, cy: 27.5 }, // 2
    { cx: 65, cy: 40 },     // 3
    { cx: 61.7, cy: 52.5 }, // 4
    { cx: 52.5, cy: 61.7 }, // 5
    { cx: 40, cy: 65 },     // 6
    { cx: 27.5, cy: 61.7 }, // 7
    { cx: 18.3, cy: 52.5 }, // 8
    { cx: 15, cy: 40 },     // 9
    { cx: 18.3, cy: 27.5 }, // 10
    { cx: 27.5, cy: 18.3 }, // 11
  ];
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className}>
      <circle cx="40" cy="40" r="30" fill="white" stroke="#2B5797" strokeWidth="2.5" />
      <circle cx="40" cy="40" r="2" fill="#2B5797" />
      <line x1="40" y1="40" x2="40" y2="22" stroke="#2B5797" strokeWidth="3" strokeLinecap="round" />
      <line x1="40" y1="40" x2="55" y2="35" stroke="#E05A3A" strokeWidth="2" strokeLinecap="round" />
      {markers.map((m, i) => (
        <circle key={i} cx={m.cx} cy={m.cy} r="1.5" fill="#2B5797" />
      ))}
    </svg>
  );
}

export function HandsUp({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" fill="none" className={className}>
      {/* Left hand */}
      <path d="M25 60 C20 45, 15 30, 20 20 C25 12, 32 15, 30 25 L28 45"
        stroke="#E05A3A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M30 55 C28 42, 22 28, 25 18 C28 10, 35 13, 33 22"
        stroke="#E05A3A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Right hand */}
      <path d="M95 60 C100 45, 105 30, 100 20 C95 12, 88 15, 90 25 L92 45"
        stroke="#F0C75E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M90 55 C92 42, 98 28, 95 18 C92 10, 85 13, 87 22"
        stroke="#F0C75E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Paint splashes */}
      <circle cx="35" cy="15" r="4" fill="#2B5797" fillOpacity="0.4" />
      <circle cx="85" cy="12" r="3" fill="#3A8C6E" fillOpacity="0.4" />
      <circle cx="60" cy="8" r="5" fill="#E05A3A" fillOpacity="0.3" />
      {/* Bottom curve (arms) */}
      <path d="M25 60 C40 75, 80 75, 95 60" stroke="#9BB8D7" strokeWidth="2" strokeLinecap="round" fill="none" strokeDasharray="4 4" />
    </svg>
  );
}
