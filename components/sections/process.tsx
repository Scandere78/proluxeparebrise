"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Watermark } from "@/components/sections/benefits";

const STEPS = [
  { num: "01", label: "Déclarez", desc: "Signalez le sinistre à votre assurance, en 5 minutes." },
  { num: "02", label: "Contactez-nous", desc: "On vous trouve un créneau sous 24 heures." },
  { num: "03", label: "On répare", desc: "Intervention en 1h30 · véhicule de prêt offert." },
  { num: "04", label: "Vos bonus", desc: "Chèque 150 € ou 4 pneus offerts · franchise prise." },
];

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-cream py-[70px] sm:py-[90px] text-ink">
      <Watermark className="right-[clamp(20px,4vw,48px)] top-[30px]">PROCESS</Watermark>

      <div className="wrap relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-[50px] flex items-center gap-[14px]"
        >
          <span className="h-9 w-1 flex-shrink-0 bg-red" />
          <h2
            className="display text-navy"
            style={{ fontSize: "clamp(40px, 6vw, 64px)" }}
          >
            4 étapes · c&apos;est réglé
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-4"
        >
          {STEPS.map((s) => (
            <motion.div
              key={s.num}
              variants={fadeUp}
              className="rounded-xs border border-navy/[0.08] bg-white px-6 py-7"
            >
              <div className="display text-[64px] leading-none text-red">{s.num}</div>
              <div className="display mt-[18px] text-[24px] text-navy">{s.label}</div>
              <p className="mt-2 text-[13px] leading-[1.6] text-ink-dim">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
