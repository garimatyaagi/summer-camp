// Heavy doodle decorations — bold branding colors, animated

/*
  Brand palette:
  Ocean Blue: #2B5797
  Kite Red:   #E05A3A
  Sunshine:   #F0C75E
  Sage:       #3A8C6E
  Sky White:  #9BB8D7
  Cloud White:#FFFFFF
*/

export function SquigglyLine({ className = "", color = "#E05A3A" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 200 8" fill="none" className={`doodle-float ${className}`} preserveAspectRatio="none">
      <path d="M0 4 C10 0, 20 8, 30 4 S50 0, 60 4 S80 8, 90 4 S110 0, 120 4 S140 8, 150 4 S170 0, 180 4 S195 6, 200 4"
        stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function DoodleStar({ className = "", color = "#F0C75E" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={`doodle-spin ${className}`}>
      <path d="M20 3 L23 15 L36 15 L26 22 L29 35 L20 27 L11 35 L14 22 L4 15 L17 15 Z"
        stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        fill={color} fillOpacity="0.35" />
    </svg>
  );
}

export function DoodleCircle({ className = "", color = "#FFFFFF" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 50 50" fill="none" className={`doodle-pulse ${className}`}>
      <path d="M25 5 C38 3, 48 12, 47 25 C46 38, 36 47, 24 46 C12 45, 3 36, 4 24 C5 12, 14 4, 25 5Z"
        stroke={color} strokeWidth="3" strokeLinecap="round" fill={color} fillOpacity="0.15" />
    </svg>
  );
}

export function DoodleArrow({ className = "", color = "#E05A3A" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 80 30" fill="none" className={`doodle-float ${className}`}>
      <path d="M5 15 C15 14, 35 16, 60 15" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M52 7 L63 15 L52 23" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function DoodleSun({ className = "", color = "#F0C75E" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={`doodle-spin-slow ${className}`}>
      <circle cx="30" cy="30" r="10" stroke={color} strokeWidth="3" fill={color} fillOpacity="0.4" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <line key={angle} x1="30" y1="30" x2={30 + 22 * Math.cos((angle * Math.PI) / 180)} y2={30 + 22 * Math.sin((angle * Math.PI) / 180)}
          stroke={color} strokeWidth="3" strokeLinecap="round" />
      ))}
    </svg>
  );
}

export function DoodleHeart({ className = "", color = "#E05A3A" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={`doodle-pulse ${className}`}>
      <path d="M20 35 C12 28, 3 22, 5 14 C7 6, 14 5, 20 12 C26 5, 33 6, 35 14 C37 22, 28 28, 20 35Z"
        stroke={color} strokeWidth="2.5" strokeLinecap="round" fill={color} fillOpacity="0.3" />
    </svg>
  );
}

export function DoodleSpiral({ className = "", color = "#3A8C6E" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 50 50" fill="none" className={`doodle-spin ${className}`}>
      <path d="M25 25 C25 22, 28 20, 30 22 C33 24, 32 28, 29 30 C25 33, 20 31, 19 27 C17 22, 20 17, 26 16 C33 14, 38 19, 39 26 C40 34, 35 40, 27 41"
        stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function DoodleZigzag({ className = "", color = "#FFFFFF" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 80 20" fill="none" className={`doodle-float ${className}`}>
      <path d="M2 10 L10 3 L18 17 L26 3 L34 17 L42 3 L50 17 L58 3 L66 17 L74 3 L78 10"
        stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function DoodleCrayon({ className = "", color = "#E05A3A" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 20 60" fill="none" className={`doodle-float ${className}`}>
      <rect x="3" y="15" width="14" height="40" rx="2" fill={color} fillOpacity="0.9" stroke={color} strokeWidth="1.5" />
      <path d="M3 15 L10 2 L17 15" fill={color} fillOpacity="0.7" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="3" y="15" width="14" height="8" fill="#FFFFFF" fillOpacity="0.3" />
    </svg>
  );
}

export function DoodlePaintBlob({ className = "", color = "#FFFFFF" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 60 50" fill="none" className={`doodle-pulse ${className}`}>
      <path d="M30 5 C45 3, 55 15, 52 28 C50 38, 40 48, 28 46 C16 44, 5 35, 8 22 C10 12, 18 6, 30 5Z"
        fill={color} fillOpacity="0.2" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleBrush({ className = "", color = "#F0C75E" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={`doodle-float ${className}`}>
      <rect x="25" y="2" width="8" height="35" rx="3" fill={color} fillOpacity="0.7" stroke={color} strokeWidth="1.5" transform="rotate(15, 30, 30)" />
      <path d="M22 38 C18 42, 15 50, 20 55 C25 58, 35 55, 38 48 C40 43, 36 38, 30 37Z"
        fill={color} fillOpacity="0.45" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

export function DoodleUnderline({ className = "", color = "#E05A3A" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 120 12" fill="none" className={className} preserveAspectRatio="none">
      <path d="M2 8 C20 3, 40 10, 60 6 S100 3, 118 7" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

// Colorful wavy section divider — bolder strokes
export function ColorfulDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <svg viewBox="0 0 100 6" className="h-2 w-16" preserveAspectRatio="none">
        <path d="M0 3 Q12 0, 25 3 T50 3 T75 3 T100 3" stroke="#E05A3A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>
      <svg viewBox="0 0 100 6" className="h-2 w-16" preserveAspectRatio="none">
        <path d="M0 3 Q12 0, 25 3 T50 3 T75 3 T100 3" stroke="#F0C75E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>
      <svg viewBox="0 0 100 6" className="h-2 w-16" preserveAspectRatio="none">
        <path d="M0 3 Q12 0, 25 3 T50 3 T75 3 T100 3" stroke="#FFFFFF" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>
      <svg viewBox="0 0 100 6" className="h-2 w-16" preserveAspectRatio="none">
        <path d="M0 3 Q12 0, 25 3 T50 3 T75 3 T100 3" stroke="#3A8C6E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/* ─── Large-format doodles — bold fills, branding colors ─── */

export function DoodleSplatter({ className = "", color = "#FFFFFF" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 120 100" fill="none" className={`doodle-pulse ${className}`}>
      <path d="M60 15 C35 8, 12 25, 18 50 S30 82, 55 85 C72 87, 95 75, 100 55 S105 20, 75 12 C68 10, 63 13, 60 15Z" fill={color} fillOpacity={0.25} stroke={color} strokeWidth={2} />
      <circle cx="20" cy="20" r="5" fill={color} fillOpacity={0.35} />
      <circle cx="100" cy="30" r="4" fill={color} fillOpacity={0.3} />
      <circle cx="90" cy="85" r="6" fill={color} fillOpacity={0.2} />
      <circle cx="15" cy="70" r="4" fill={color} fillOpacity={0.3} />
      <circle cx="50" cy="10" r="3" fill={color} fillOpacity={0.4} />
      <circle cx="108" cy="60" r="3" fill={color} fillOpacity={0.25} />
    </svg>
  );
}

export function DoodleConfettiDots({ className = "", color = "#E05A3A" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 200 80" fill="none" className={`doodle-float ${className}`}>
      <circle cx="15" cy="25" r="5" fill="#E05A3A" fillOpacity={0.6} />
      <circle cx="42" cy="12" r="3" fill="#F0C75E" fillOpacity={0.5} />
      <circle cx="70" cy="40" r="6" fill="#FFFFFF" fillOpacity={0.5} />
      <circle cx="95" cy="18" r="4" fill="#3A8C6E" fillOpacity={0.45} />
      <circle cx="120" cy="55" r="7" fill="#F0C75E" fillOpacity={0.5} />
      <circle cx="145" cy="22" r="3" fill="#E05A3A" fillOpacity={0.55} />
      <circle cx="30" cy="60" r="4" fill="#FFFFFF" fillOpacity={0.35} />
      <circle cx="165" cy="45" r="5" fill="#2B5797" fillOpacity={0.4} />
      <circle cx="55" cy="68" r="3" fill="#3A8C6E" fillOpacity={0.55} />
      <circle cx="185" cy="30" r="4" fill="#F0C75E" fillOpacity={0.5} />
      <circle cx="110" cy="70" r="3" fill="#E05A3A" fillOpacity={0.35} />
      <circle cx="175" cy="65" r="6" fill="#FFFFFF" fillOpacity={0.3} />
      <circle cx="80" cy="8" r="4" fill="#2B5797" fillOpacity={0.45} />
      <circle cx="155" cy="10" r="2.5" fill="#3A8C6E" fillOpacity={0.5} />
    </svg>
  );
}

export function DoodleCrayonScribble({ className = "", color = "#F0C75E" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 300 60" fill="none" className={`doodle-float ${className}`}>
      <path d="M5 30 C15 10, 35 50, 50 25 S70 5, 85 35 C95 55, 110 15, 130 30 S155 50, 170 20 C185 5, 200 45, 220 28 S245 10, 260 38 C270 50, 285 20, 295 30"
        stroke={color} strokeWidth={3} strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function DoodleWavyDivider({ className = "", color = "#E05A3A" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 1200 40" fill="none" className={className} preserveAspectRatio="none">
      <path d="M0 20 C50 8, 100 32, 150 20 S250 8, 300 20 S400 32, 450 20 S550 8, 600 20 S700 32, 750 20 S850 8, 900 20 S1000 32, 1050 20 S1150 8, 1200 20"
        stroke={color} strokeWidth={3} strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function DoodlePaintStroke({ className = "", color = "#2B5797" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 180 30" fill="none" className={`doodle-float ${className}`}>
      <path d="M5 18 C20 8, 40 5, 60 10 S100 18, 120 12 S150 5, 170 15 C175 18, 178 16, 175 14"
        fill={color} fillOpacity={0.25} stroke={color} strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}

export function DoodleScribbleCircle({ className = "", color = "#FFFFFF" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 150 150" fill="none" className={`doodle-spin-slow ${className}`}>
      <path d="M75 15 C110 10, 140 40, 138 75 S115 140, 75 138 C40 136, 10 110, 12 75 S35 18, 75 15"
        stroke={color} strokeWidth={2.5} strokeOpacity={0.6} fill="none" />
      <path d="M78 18 C115 15, 142 45, 135 78 S110 135, 72 135 C38 133, 8 105, 15 72 S40 22, 78 18"
        stroke={color} strokeWidth={2.5} strokeOpacity={0.4} fill="none" />
      <path d="M72 12 C108 8, 145 38, 140 72 S118 142, 78 140 C42 138, 5 108, 10 70 S32 15, 72 12"
        stroke={color} strokeWidth={2.5} strokeOpacity={0.25} fill="none" />
    </svg>
  );
}

export function DoodlePencilLine({ className = "", color = "#FFFFFF" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 200 15" fill="none" className={`doodle-float ${className}`}>
      <path d="M5 8 C20 6, 40 10, 60 7 S100 5, 120 8 S160 10, 180 7"
        stroke={color} strokeWidth={2.5} strokeLinecap="round" fill="none" />
      <polygon points="180,7 195,4 195,10" fill={color} fillOpacity={0.7} />
    </svg>
  );
}

export function DoodleCrossHatch({ className = "", color = "#FFFFFF" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={`doodle-pulse ${className}`}>
      <path d="M5 5 L55 55 M15 2 L58 45 M2 15 L45 58 M25 2 L58 35 M2 25 L35 58"
        stroke={color} strokeWidth={2} strokeLinecap="round" strokeOpacity={0.35} />
      <path d="M55 5 L5 55 M45 2 L2 45 M58 15 L15 58 M35 2 L2 35 M58 25 L25 58"
        stroke={color} strokeWidth={2} strokeLinecap="round" strokeOpacity={0.25} />
    </svg>
  );
}
