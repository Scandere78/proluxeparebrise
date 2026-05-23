"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Service = {
  title: string;
  sub: string;
  src: string;
  alt: string;
  featured?: boolean;
  fit?: "cover" | "contain";
};

const SERVICES: Service[] = [
  {
    title: "Réparation",
    sub: "Impact",
    src: "/cass.png",
    alt: "Réparation d'impact sur pare-brise",
    featured: true,
  },
  {
    title: "Remplacement",
    sub: "Pare-brise",
    src: "/new.png",
    alt: "Remplacement de pare-brise",
  },
  {
    title: "Vitres",
    sub: "Latérales",
    src: "/vitre-lateral.png",
    alt: "Vitre latérale automobile",
  },
  {
    title: "Lunette",
    sub: "Arrière",
    src: "/lunette-arriere.png",
    alt: "Lunette arrière automobile",
  },
  {
    title: "Calibrage",
    sub: "ADAS",
    src: "/calibrage-adas.png",
    alt: "Calibrage des caméras ADAS",
  },
  {
    title: "Optiques",
    sub: "Phares",
    src: "/optique.png",
    alt: "Optique de phare automobile",
  },
];

export function IconGridSection() {
  return (
    <section className="relative bg-navy py-[70px] sm:py-[90px]">
      <div className="wrap">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-12 grid items-end gap-10 lg:grid-cols-[1.1fr_1fr]"
        >
          <motion.div variants={fadeUp}>
            <div className="eyebrow">NOS SERVICES VITRAGE</div>
            <h2
              className="display mt-[18px] text-white"
              style={{ fontSize: "clamp(40px, 6vw, 64px)" }}
            >
              On répare tout
              <br />
              le <span className="text-red">vitrage auto.</span>
            </h2>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="max-w-[520px] text-[16px] leading-[1.65] text-white/70"
          >
            Du simple impact au remplacement complet en passant par le calibrage des caméras
            d&apos;aide à la conduite — notre équipe technique intervient sur{" "}
            <strong className="text-white">tous types de vitrage automobile</strong>.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6"
        >
          {SERVICES.map((s) => (
            <motion.a
              key={s.title}
              href="#rdv"
              variants={fadeUp}
              className={cn(
                "group relative block overflow-hidden rounded-sm border transition-all duration-300 hover:-translate-y-1",
                s.featured ? "border-red" : "border-line hover:border-red"
              )}
            >
              {/* PHOTO BACKGROUND */}
              <div
                className={cn(
                  "relative aspect-square w-full overflow-hidden",
                  s.fit === "contain" ? "bg-navy-deep" : ""
                )}
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 17vw"
                  className={cn(
                    "transition-transform duration-700 ease-out group-hover:scale-110",
                    s.fit === "contain" ? "object-contain p-6" : "object-cover"
                  )}
                />
                {/* dark gradient base — only for cover photos */}
                {s.fit !== "contain" && (
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-navy/10 transition-opacity duration-500"
                  />
                )}
                {/* red veil */}
                <div
                  aria-hidden
                  className={cn(
                    "absolute inset-0 transition-opacity duration-500",
                    s.featured
                      ? "bg-red/55 opacity-100"
                      : "bg-red/35 opacity-0 group-hover:opacity-100"
                  )}
                />

                {/* Arrow icon top-right on hover */}
                <span className="absolute right-2 top-2 grid h-7 w-7 translate-x-2 place-items-center rounded-full bg-white text-red opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                  <ArrowUpRight className="h-[14px] w-[14px]" />
                </span>

                {/* TITLE absolute bottom */}
                <div className="absolute inset-x-0 bottom-0 px-3 pb-3 pt-6 text-center">
                  <div className="display text-[18px] sm:text-[20px] text-white leading-[0.95]">
                    {s.title}
                  </div>
                  <div
                    className={cn(
                      "mt-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.14em]",
                      s.featured ? "text-white/90" : "text-white/70"
                    )}
                  >
                    {s.sub}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
