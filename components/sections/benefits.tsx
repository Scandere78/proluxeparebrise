"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Card = {
  tag: string;
  title: string;
  price: { label?: string; num: string; unit: string; suffix?: string };
  desc: string;
  bullets: string[];
  cta: { label: string; href: string; variant: "dark" | "primary" };
  featured?: boolean;
};

const CARDS: Card[] = [
  {
    tag: "── TOUTES ASSURANCES",
    title: "Rien à payer.",
    price: { num: "0", unit: "€" },
    desc: "Votre réparation est totalement prise en charge. Sans frais cachés, sans démarches.",
    bullets: ["Franchise offerte", "Reste à charge 0 €", "Démarches gérées par nous"],
    cta: { label: "Demander un devis →", href: "#rdv", variant: "dark" },
  },
  {
    tag: "── INTERVENTION ÉCLAIR",
    title: "En 1h30.",
    price: { label: "RDV SOUS", num: "24", unit: "H" },
    desc: "Votre temps est précieux. Intervention rapide, sans tracas, le jour même.",
    bullets: ["RDV sous 24 heures", "1h30 d'intervention", "Véhicule de prêt gratuit"],
    cta: { label: "Prendre RDV →", href: "#rdv", variant: "primary" },
    featured: true,
  },
  {
    tag: "── BONUS EXCLUSIF",
    title: "150€ ou 4 pneus.",
    price: { num: "150", unit: "€", suffix: "OU 4 PNEUS" },
    desc: "En plus d'un travail de qualité, repartez avec un bonus exclusif à votre choix.",
    bullets: ["Chèque cadeau 150 €", "OU 4 pneus neufs", "Cumulable avec franchise"],
    cta: { label: "En savoir plus →", href: "#rdv", variant: "dark" },
  },
];

export function BenefitsSection() {
  return (
    <section
      id="avantages"
      className="relative overflow-hidden bg-cream py-[70px] sm:py-[90px] text-ink"
    >
      <Watermark className="left-[clamp(20px,4vw,48px)] top-[30px]">AVANTAGES</Watermark>

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
            Vos avantages
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="relative grid gap-4 lg:grid-cols-3"
        >
          {CARDS.map((c) => (
            <motion.article
              key={c.title}
              variants={fadeUp}
              className="relative flex flex-col overflow-hidden rounded border border-navy/[0.08] bg-white px-7 py-8"
            >
              {c.featured && (
                <div className="absolute -right-[38px] top-[18px] rotate-[35deg] bg-red px-10 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white">
                  LE PLUS COURANT
                </div>
              )}
              <div className="mb-[14px] text-[11px] font-extrabold uppercase tracking-[0.14em] text-red">
                {c.tag}
              </div>
              <h3 className="display text-[32px] text-navy">{c.title}</h3>
              <div className="mt-[22px] flex items-baseline gap-2 border-b border-navy/[0.08] pb-[18px]">
                {c.price.label && (
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
                    {c.price.label}
                  </span>
                )}
                <span className="display text-[64px] leading-none text-red">
                  {c.price.num}
                </span>
                <span className="display text-[32px] text-navy">{c.price.unit}</span>
                {c.price.suffix && (
                  <span className="ml-auto text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
                    {c.price.suffix}
                  </span>
                )}
              </div>
              <p className="my-5 text-[14px] leading-[1.6] text-ink-dim">{c.desc}</p>
              <ul className="mb-7 list-none p-0">
                {c.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-[10px] border-b border-dashed border-navy/10 py-2 text-[13px] text-ink last:border-b-0"
                  >
                    <Check className="h-[14px] w-[14px] flex-shrink-0 text-red" strokeWidth={3} />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href={c.cta.href}
                className={cn("btn mt-auto w-full", c.cta.variant === "primary" ? "btn-primary" : "btn-dark")}
              >
                {c.cta.label}
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function Watermark({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "display pointer-events-none absolute z-0 leading-none text-navy/[0.05]",
        className
      )}
      style={{ fontSize: "clamp(70px, 12vw, 150px)" }}
    >
      {children}
    </div>
  );
}
