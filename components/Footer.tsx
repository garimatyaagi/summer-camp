import { ColorfulDivider, DoodleStar, DoodleHeart, DoodleCrayon, DoodleBrush, DoodlePaintBlob } from "./Doodles";

export default function Footer() {
  return (
    <footer className="relative px-6 py-14 lg:px-12 lg:py-16 bg-navy overflow-hidden">
      <div className="pointer-events-none">
        <DoodleStar className="absolute top-8 right-12 w-14 opacity-20" color="#F0C75E" />
        <DoodleHeart className="absolute bottom-12 left-10 w-10 opacity-15" color="#E05A3A" />
        <DoodleCrayon className="absolute top-[40%] left-4 w-10 opacity-15 hidden md:block" color="#F7F9FC" />
        <DoodleBrush className="absolute bottom-8 right-[25%] w-12 opacity-12 hidden md:block" color="#F7F9FC" />
        <DoodleStar className="absolute bottom-6 right-8 w-6 opacity-12 hidden md:block" color="#F7F9FC" />
        <DoodlePaintBlob className="absolute top-6 left-[40%] w-14 opacity-10 hidden lg:block" color="#F7F9FC" />
      </div>
      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="grid gap-10 md:grid-cols-[1.5fr_auto_auto] md:gap-16">
          <div>
            <p className="font-display text-[24px] text-cream">The Summer Club</p>
            <p className="mt-3 text-[15px] leading-[1.8] text-cream/50 max-w-[300px]">
              A screen-free summer camp where kids build things with their hands. HSR Layout, Bangalore.
            </p>
          </div>
          <div>
            <p className="text-[12px] font-bold tracking-[0.1em] uppercase text-cream/30 mb-4">Connect</p>
            <div className="flex flex-col gap-2.5">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[14px] text-cream/60 hover:text-cream transition-colors">Instagram</a>
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-[14px] text-cream/60 hover:text-cream transition-colors">WhatsApp</a>
              <a href="mailto:hello@tinkerhood.in" className="text-[14px] text-cream/60 hover:text-cream transition-colors">hello@tinkerhood.in</a>
            </div>
          </div>
          <div>
            <p className="text-[12px] font-bold tracking-[0.1em] uppercase text-cream/30 mb-4">Navigate</p>
            <div className="flex flex-col gap-2.5">
              <a href="#activities" className="text-[14px] text-cream/60 hover:text-cream transition-colors">Programme</a>
              <a href="#pricing" className="text-[14px] text-cream/60 hover:text-cream transition-colors">Pricing</a>
              <a href="/schedule" className="text-[14px] text-cream/60 hover:text-cream transition-colors">Full Schedule</a>
              <a href="/register" className="text-[14px] text-cream/60 hover:text-cream transition-colors">Register</a>
              <a href="#faq" className="text-[14px] text-cream/60 hover:text-cream transition-colors">FAQ</a>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-7 md:flex-row md:items-center md:justify-between">
          <p className="text-[13px] text-cream/30">&copy; 2026 The Summer Club. Made with clay, paint, and zero screens.</p>
          <p className="text-[13px] text-cream/30">HSR Layout, Bangalore</p>
        </div>
      </div>
    </footer>
  );
}
