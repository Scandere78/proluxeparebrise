"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Wrench, Gift } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

const STEPS = [
  { Icon: CalendarCheck, label: "Prenez votre", label2: "rendez-vous" },
  { Icon: Wrench, label: "Pare-brise", label2: "remplacé" },
  { Icon: Gift, label: "Recevez votre", label2: "cadeau" },
];

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
    <section id="avis" className="bg-navy py-[70px] sm:py-[90px] text-white">
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
              className="display mt-[18px]"
              style={{ fontSize: "clamp(40px, 6vw, 64px)" }}
            >
              Ils nous ont fait
              <br />
              <span className="text-red">confiance.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 rounded-xs border border-line bg-white/[0.06] px-6 py-[18px]"
          >
            <div className="display text-[48px] leading-none">4,9</div>
            <div>
              <div className="text-[16px] tracking-[2px] text-sun">★★★★★</div>
              <div className="mt-1 text-[12px] opacity-70">286 avis · Google</div>
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
              className="rounded-xs border border-line bg-white/[0.04] p-6"
            >
              <div className="mb-[14px] flex items-center justify-between">
                <div className="text-[14px] tracking-[2px] text-sun">★★★★★</div>
                <div className="text-[11px] tracking-[0.08em] text-ink-mute">{r.date}</div>
              </div>
              <p className="mb-[18px] text-[14px] leading-[1.65] text-white/85">{r.text}</p>
              <div className="flex items-center gap-[10px] border-t border-line pt-[14px]">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-red text-[13px] font-extrabold text-white">
                  {r.initial}
                </div>
                <div className="display text-[18px]">{r.name}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 3-step process strip */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-16 sm:mt-20 rounded-sm border border-line bg-white/[0.03] px-6 py-10 sm:px-10 sm:py-12"
        >
          <motion.div variants={fadeUp} className="mb-8 text-center">
            <div className="eyebrow justify-center">Comment ça marche</div>
            <h3
              className="display mt-3 text-white"
              style={{ fontSize: "clamp(24px, 3vw, 32px)" }}
            >
              3 étapes pour repartir avec un{" "}
              <span className="text-red">cadeau</span>.
            </h3>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[1fr_auto_1fr_auto_1fr]"
          >
            {STEPS.map((s, i) => (
              <ProcessStep key={s.label} step={s} isLast={i === STEPS.length - 1} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ProcessStep({
  step,
  isLast,
}: {
  step: { Icon: typeof CalendarCheck; label: string; label2: string };
  isLast: boolean;
}) {
  const { Icon } = step;
  return (
    <>
      <div className="flex flex-col items-center text-center">
        <div className="relative grid h-20 w-20 place-items-center rounded-full border-2 border-red/40 bg-red/10 sm:h-24 sm:w-24">
          <div className="grid h-full w-full place-items-center rounded-full bg-navy">
            <Icon className="h-8 w-8 text-red sm:h-10 sm:w-10" strokeWidth={1.6} />
          </div>
        </div>
        <div className="mt-4 leading-tight">
          <div className="font-sans text-[14px] font-semibold text-white">{step.label}</div>
          <div className="font-sans text-[14px] font-semibold text-white">{step.label2}</div>
        </div>
      </div>

      {!isLast && (
        <DashedArrow />
      )}
    </>
  );
}

function DashedArrow() {
  return (
    <div
      aria-hidden
      className="hidden items-center justify-center sm:flex"
    >
      <svg width="100%" height="24" viewBox="0 0 120 24" preserveAspectRatio="none" className="w-full min-w-[60px]">
        <line
          x1="0"
          y1="12"
          x2="105"
          y2="12"
          stroke="#EF4A2A"
          strokeWidth="2"
          strokeDasharray="6 6"
          strokeLinecap="round"
        />
        <polygon points="105,4 120,12 105,20" fill="#EF4A2A" />
      </svg>
    </div>
  );
}
