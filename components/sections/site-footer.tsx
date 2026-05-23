"use client";

import { motion } from "framer-motion";
import { Brand } from "@/components/ui/brand";
import { CtaStripSection } from "@/components/sections/cta-strip";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-navy-deep pt-0 text-white">
      <CtaStripSection />

      <div className="wrap mt-[60px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid gap-9 border-b border-line pb-9 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]"
        >
          <motion.div variants={fadeUp}>
            <Brand />
            <p className="mt-4 max-w-[280px] text-[13px] leading-[1.6] text-white/55">
              Centre agréé · réparation et remplacement de pare-brise · toutes marques, toutes
              assurances.
            </p>
          </motion.div>

          <FooterCol title="CONTACT" variants={fadeUp}>
            <a href="tel:0123456789" className="font-bold">01 23 45 67 89</a>
            <a href="mailto:contact@proluxe-parebrise.fr">contact@proluxe-parebrise.fr</a>
          </FooterCol>

          <FooterCol title="ADRESSE" variants={fadeUp}>
            <p className="font-bold">Z.I des Ardilles</p>
            <p>Chem. des Ardilles</p>
            <p>78680 Épône</p>
          </FooterCol>

          <FooterCol title="HORAIRES" variants={fadeUp}>
            <p className="font-bold">Lun – Sam</p>
            <p>10h – 19h</p>
            <p>Dimanche fermé</p>
          </FooterCol>
        </motion.div>

        <div className="flex flex-wrap justify-between gap-3 pb-6 pt-5 text-[12px] uppercase tracking-[0.1em] text-white/40">
          <div>© Proluxe Pare Brise 2022 — Tous droits réservés</div>
          <div>Mentions légales · CGV · Confidentialité</div>
        </div>
      </div>
    </footer>
  );
}

import type { Variants } from "framer-motion";

function FooterCol({
  title,
  variants,
  children,
}: {
  title: string;
  variants: Variants;
  children: React.ReactNode;
}) {
  return (
    <motion.div variants={variants}>
      <h4 className="mb-[14px] text-[11px] font-extrabold uppercase tracking-[0.14em] text-red">
        <span className="opacity-60">── </span>
        {title}
      </h4>
      <div className="space-y-2 text-[14px] text-white/85 [&_a]:block [&_a]:transition-colors [&_a]:hover:text-white [&_p]:m-0">
        {children}
      </div>
    </motion.div>
  );
}
