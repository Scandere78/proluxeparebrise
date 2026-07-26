"use client";

import { motion } from "framer-motion";
import { GoogleG, Stars } from "@/components/ui/google-badge";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { SITE } from "@/lib/site";

const REVIEWS = [
  {
    date: "12 MAI 2026",
    text: "« Service au top. Franchise prise en charge, 4 pneus offerts. Pare-brise changé en 1h30, comme promis. »",
    initial: "J",
    name: "Julien M.",
  },
  {
    date: "03 MAI 2026",
    text: "« Accueil très pro, aucun frais à avancer, démarches assurance gérées de A à Z. L'équipe est compétente. »",
    initial: "S",
    name: "Sandra K.",
  },
  {
    date: "28 AVR 2026",
    text: "« Excellente expérience. Véhicule de prêt fourni gratuitement le temps de l'intervention. À recommander. »",
    initial: "L",
    name: "Laurent R.",
  },
];

export function ReviewsSection() {
  return (
    <section id="avis" className="bg-white py-[70px] sm:py-[90px] text-ink">
      <div className="wrap">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-12 flex flex-wrap items-end justify-between gap-10"
        >
          <motion.div variants={fadeUp}>
            <div className="eyebrow">AVIS CLIENTS</div>
            <h2
              className="display mt-[18px] text-blue-ink"
              style={{ fontSize: "clamp(40px, 6vw, 64px)" }}
            >
              Ils nous ont fait
              <br />
              <span className="text-red">confiance.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 rounded-xs border border-line bg-cream px-6 py-[18px]"
          >
            <div className="display text-[48px] leading-none text-blue-ink">
              {SITE.google.rating}
            </div>
            <div>
              <Stars className="block text-[16px] tracking-[2px]" />
              <a
                href={SITE.google.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-center gap-[6px] text-[12px] text-ink-dim transition-colors hover:text-blue"
              >
                <GoogleG className="h-[13px] w-[13px]" />
                {SITE.google.count} avis · Google
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid gap-4 lg:grid-cols-3"
        >
          {REVIEWS.map((r) => (
            <motion.div
              key={r.name}
              variants={fadeUp}
              className="rounded-xs border border-line bg-cream p-6"
            >
              <div className="mb-[14px] flex items-center justify-between">
                <Stars className="text-[14px] tracking-[2px]" />
                <div className="text-[11px] tracking-[0.08em] text-ink-mute">{r.date}</div>
              </div>
              <p className="mb-[18px] text-[14px] leading-[1.65] text-ink-dim">{r.text}</p>
              <div className="flex items-center gap-[10px] border-t border-line pt-[14px]">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-red text-[13px] font-extrabold text-white">
                  {r.initial}
                </div>
                <div className="display text-[18px] text-blue-ink">{r.name}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
