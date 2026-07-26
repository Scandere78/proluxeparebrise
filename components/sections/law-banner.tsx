"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { SITE } from "@/lib/site";

export function LawBannerSection() {
  return (
    <section className="relative overflow-hidden bg-blue py-[70px] sm:py-[90px] text-white">
      {/* Diagonal photo wedge on the right */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[55%] lg:block"
        style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        <Image
          src="/1.png"
          alt={`Atelier ${SITE.legalName}`}
          fill
          sizes="55vw"
          className="object-cover"
        />
        {/* Red tint overlay (keeps the wedge identity) */}
        <div aria-hidden className="absolute inset-0 bg-red/65 mix-blend-multiply" />
        {/* Subtle dark vignette */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/10"
        />
      </motion.div>

      <div className="relative wrap">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-[60px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="eyebrow">
              LOI N° 2014-344 · 17 MARS 2014
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="display mt-[18px]"
              style={{ fontSize: "clamp(40px, 6vw, 64px)" }}
            >
              Ne laissez plus
              <br />
              personne <span className="text-red">choisir</span>
              <br />
              à votre place.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[480px] text-[17px] leading-[1.6] text-white/70"
            >
              Selon l&apos;article L.211-5-1, votre assurance n&apos;a pas le droit de vous
              imposer un réparateur. Vous êtes{" "}
              <strong className="text-white">libre de choisir le professionnel de votre choix</strong>.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <a href="#rdv" className="btn btn-primary">
                Prendre RDV
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Mobile photo (visible only below lg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative lg:hidden"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <Image
                src="/1.png"
                alt={`Atelier ${SITE.legalName}`}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-red/55 mix-blend-multiply" />
            </div>
          </motion.div>

          {/* Stamp on desktop — positioned in the wedge area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -14 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="relative mx-auto mt-8 inline-block bg-white px-7 py-5 text-center text-blue-ink shadow-[0_24px_60px_rgba(5,42,68,0.45)] lg:absolute lg:right-[8%] lg:top-1/2 lg:-translate-y-1/2 lg:mt-0"
          >
            <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-red">
              ★ 100 % LÉGAL
            </div>
            <div
              className="display mt-[10px] text-blue-ink"
              style={{ fontSize: "clamp(36px, 5.5vw, 50px)" }}
            >
              LIBRE
              <br />
              CHOIX
            </div>
            <div className="mt-[10px] text-[11px] font-bold uppercase tracking-[0.12em] text-ink-dim">
              Art. L.211-5-1
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
