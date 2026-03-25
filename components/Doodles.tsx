// Heavy doodle decorations — colorful, childlike, generous

export function SquigglyLine({ className = "", color = "#E94560" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 200 8" fill="none" className={className} preserveAspectRatio="none">
      <path d="M0 4 C10 0, 20 8, 30 4 S50 0, 60 4 S80 8, 90 4 S110 0, 120 4 S140 8, 150 4 S170 0, 180 4 S195 6, 200 4"
        stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function DoodleStar({ className = "", color = "#F4A940" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <path d="M20 3 L23 15 L36 15 L26 22 L29 35 L20 27 L11 35 L14 22 L4 15 L17 15 Z"
        stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        fill={color} fillOpacity="0.2" />
    </svg>
  );
}

export function DoodleCircle({ className = "", color = "#4A90D9" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 50 50" fill="none" className={className}>
      <path d="M25 5 C38 3, 48 12, 47 25 C46 38, 36 47, 24 46 C12 45, 3 36, 4 24 C5 12, 14 4, 25 5Z"
        stroke={color} strokeWidth="2.5" strokeLinecap="round" fill={color} fillOpacity="0.08" />
    </svg>
  );
}

export function DoodleArrow({ className = "", color = "#E94560" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 80 30" fill="none" className={className}>
      <path d="M5 15 C15 14, 35 16, 60 15" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M52 7 L63 15 L52 23" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function DoodleSun({ className = "", color = "#F4A940" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={className}>
      <circle cx="30" cy="30" r="10" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.2" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <line key={angle} x1="30" y1="30" x2={30 + 22 * Math.cos((angle * Math.PI) / 180)} y2={30 + 22 * Math.sin((angle * Math.PI) / 180)}
          stroke={color} strokeWidth="2.5" strokeLinecap="round"
          style={{ transform: `rotate(0deg)`, transformOrigin: '30px 30px' }} />
      ))}
    </svg>
  );
}

export function DoodleHeart({ className = "", color = "#E94560" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <path d="M20 35 C12 28, 3 22, 5 14 C7 6, 14 5, 20 12 C26 5, 33 6, 35 14 C37 22, 28 28, 20 35Z"
        stroke={color} strokeWidth="2" strokeLinecap="round" fill={color} fillOpacity="0.15" />
    </svg>
  );
}

export function DoodleSpiral({ className = "", color = "#2D6A4F" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 50 50" fill="none" className={className}>
      <path d="M25 25 C25 22, 28 20, 30 22 C33 24, 32 28, 29 30 C25 33, 20 31, 19 27 C17 22, 20 17, 26 16 C33 14, 38 19, 39 26 C40 34, 35 40, 27 41"
        stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function DoodleZigzag({ className = "", color = "#4A90D9" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 80 20" fill="none" className={className}>
      <path d="M2 10 L10 3 L18 17 L26 3 L34 17 L42 3 L50 17 L58 3 L66 17 L74 3 L78 10"
        stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function DoodleCrayon({ className = "", color = "#E94560" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 20 60" fill="none" className={className}>
      <rect x="3" y="15" width="14" height="40" rx="2" fill={color} fillOpacity="0.8" stroke={color} strokeWidth="1.5" />
      <path d="M3 15 L10 2 L17 15" fill={color} fillOpacity="0.6" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="3" y="15" width="14" height="8" fill={color} fillOpacity="0.3" />
    </svg>
  );
}

export function DoodlePaintBlob({ className = "", color = "#4A90D9" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 60 50" fill="none" className={className}>
      <path d="M30 5 C45 3, 55 15, 52 28 C50 38, 40 48, 28 46 C16 44, 5 35, 8 22 C10 12, 18 6, 30 5Z"
        fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleBrush({ className = "", color = "#F4A940" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={className}>
      <rect x="25" y="2" width="8" height="35" rx="3" fill={color} fillOpacity="0.6" stroke={color} strokeWidth="1.5" transform="rotate(15, 30, 30)" />
      <path d="M22 38 C18 42, 15 50, 20 55 C25 58, 35 55, 38 48 C40 43, 36 38, 30 37Z"
        fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

export function DoodleUnderline({ className = "", color = "#E94560" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 120 12" fill="none" className={className} preserveAspectRatio="none">
      <path d="M2 8 C20 3, 40 10, 60 6 S100 3, 118 7" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

// Colorful wavy section divider
export function ColorfulDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <svg viewBox="0 0 100 6" className="h-1.5 w-16" preserveAspectRatio="none">
        <path d="M0 3 Q12 0, 25 3 T50 3 T75 3 T100 3" stroke="#E94560" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
      <svg viewBox="0 0 100 6" className="h-1.5 w-16" preserveAspectRatio="none">
        <path d="M0 3 Q12 0, 25 3 T50 3 T75 3 T100 3" stroke="#F4A940" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
      <svg viewBox="0 0 100 6" className="h-1.5 w-16" preserveAspectRatio="none">
        <path d="M0 3 Q12 0, 25 3 T50 3 T75 3 T100 3" stroke="#4A90D9" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
      <svg viewBox="0 0 100 6" className="h-1.5 w-16" preserveAspectRatio="none">
        <path d="M0 3 Q12 0, 25 3 T50 3 T75 3 T100 3" stroke="#2D6A4F" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}
