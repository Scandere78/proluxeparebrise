"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

const SERVICES = [
  {
    src: "/cass.png",
    alt: "Pare-brise endommagé par un impact",
    title: "Réparation",
    sub: "D'IMPACT",
    desc: "À partir de 0 € · pris en charge par votre assurance. En 30 minutes chrono.",
    pill: "30 min chrono",
  },
  {
    src: "/new.png",
    alt: "Pare-brise neuf après remplacement",
    title: "Remplacement",
    sub: "PARE-BRISE",
    desc: "Toutes marques · franchise offerte · 1h30 chrono.",
    pill: "1h30 chrono",
  },
];

export function ServiceStripSection() {
  return (
    <section
      id="services"
      className="strip-crosshatch relative overflow-hidden bg-red py-[60px] sm:py-[80px] text-white"
    >
      <div className="wrap">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="relative grid gap-6 sm:grid-cols-2 sm:gap-8"
        >
          {SERVICES.map((s) => (
            <motion.a
              key={s.title}
              href="#rdv"
              variants={fadeUp}
              className="group relative block overflow-hidden rounded-sm bg-black/15 transition-shadow hover:shadow-[0_30px_60px_-20px_rgba(5,42,68,0.5)]"
            >
              {/* PHOTO */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* dark gradient base */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-90"
                />
                {/* red veil that reveals on hover */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-red/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Pill top-left */}
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-red shadow-md">
                  {s.pill}
                </span>

                {/* Arrow icon top-right */}
                <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white text-red opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
                  <ArrowUpRight className="h-5 w-5" />
                </span>

                {/* Title on photo */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="display text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] text-[32px] sm:text-[40px] md:text-[46px] leading-[0.95]">
                    {s.title}
                    <span className="block text-white/70 text-[18px] sm:text-[22px] md:text-[24px]">
                      {s.sub}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text panel */}
              <div className="relative flex items-center justify-between gap-4 px-5 py-5 sm:px-6 sm:py-6">
                <p className="text-[14px] leading-[1.5] text-white/90">{s.desc}</p>
                <span className="inline-flex flex-shrink-0 items-center gap-2 rounded-xs bg-white px-4 py-[10px] text-[12px] font-extrabold uppercase tracking-[0.08em] text-blue-ink transition-colors group-hover:bg-blue group-hover:text-white">
                  Tarif →
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
