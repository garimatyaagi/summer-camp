"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, sectionFade } from "@/lib/animations";
import { DoodleCircle } from "./Doodles";

const images = [
  { src: "/images/week1-art.jpg", alt: "Child painting at easel in the Art Studio", tall: true },
  { src: "/images/hero-hands.jpg", alt: "Painted handprints — the joy of making", tall: false },
  { src: "/images/week4-nature.jpg", alt: "Sketching in the Nature Atelier", tall: false },
  { src: "/images/week5-tinker.jpg", alt: "Proudly holding a handmade robot", tall: false },
  { src: "/images/week6-market.jpg", alt: "Kids running their market stall", tall: false },
  { src: "/images/week7-exhibition.jpg", alt: "The Exhibition — gallery opening day", tall: true },
];

export default function Gallery() {
  return (
    <section className="relative px-6 py-[80px] md:py-[140px] lg:px-12">
      <div className="pointer-events-none">
        <DoodleCircle className="absolute top-12 right-8 w-20 opacity-10 hidden md:block" color="#FFFFFF" />
      </div>
      <div className="mx-auto max-w-[1400px]">
        <motion.h2
          variants={sectionFade} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 font-display text-[32px] leading-[1.1] tracking-[-0.02em] text-white md:text-[48px] lg:text-[56px]"
        >
          From their hands to the gallery wall.
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
          className="mt-10 text-[14px] text-white/90">
          Camp starts April 15. Follow along on{" "}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
            className="text-coral font-medium hover:underline underline-offset-4">Instagram</a>
        </motion.p>
      </div>
    </section>
  );
}
