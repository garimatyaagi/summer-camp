"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, sectionFade } from "@/lib/animations";
import { SquigglyLine, DoodleHeart } from "./Doodles";

const images = [
  { src: "https://images.unsplash.com/photo-1560421683-6856ea585c78?w=600", alt: "Colorful craft materials", tall: true },
  { src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600", alt: "Paint brushes and art", tall: false },
  { src: "https://images.unsplash.com/photo-1500995617113-cf789362a3e1?w=600", alt: "Nature exploration", tall: false },
  { src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600", alt: "Colorful toys and building", tall: false },
  { src: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=600", alt: "Kids group activity", tall: false },
  { src: "https://images.unsplash.com/photo-1560421683-6856ea585c78?w=600&q=90", alt: "Art supplies close-up", tall: true },
];

export default function Gallery() {
  return (
    <section className="relative px-6 py-[80px] md:py-[140px] lg:px-12">
      <div className="pointer-events-none absolute bottom-32 right-10 opacity-20 hidden md:block">
        <DoodleHeart className="w-10" />
      </div>
      <div className="mx-auto max-w-[1400px]">
        <SquigglyLine className="w-24 h-2 mb-12" color="#DDD6CA" />

        <motion.h2
          variants={sectionFade} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 font-display text-[32px] leading-[1.1] tracking-[-0.02em] text-navy md:text-[48px] lg:text-[56px]"
        >
          Made by little hands.
        </motion.h2>

        <div className="columns-2 gap-4 space-y-4 md:columns-3 md:gap-5 md:space-y-5">
          {images.map((img, i) => (
            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grain relative overflow-hidden rounded-2xl bg-sand break-inside-avoid">
              <div className={img.tall ? "aspect-[3/4]" : "aspect-[4/3]"}>
                <Image src={img.src} alt={img.alt} fill className="warm-image object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p variants={sectionFade} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 text-[14px] text-muted">
          Camp starts April 14. Follow along on{" "}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
            className="text-coral font-medium hover:underline underline-offset-4">Instagram</a>
        </motion.p>
      </div>
    </section>
  );
}
