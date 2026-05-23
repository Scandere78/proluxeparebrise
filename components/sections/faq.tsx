"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Watermark } from "@/components/sections/benefits";
import { cn } from "@/lib/utils";

const FAQ = [
  {
    q: "J'ai contacté mon assurance, elle m'a orienté vers un garage dit « agréé » (sans franchise offerte ni avantages).",
    a: "Il suffit de déclarer votre bris de glace à votre assurance. Elle va sûrement vous proposer un garage agréé, mais vous n'y bénéficierez pas de la franchise offerte ni du chèque de 150 € ou du remplacement de vos 4 pneus. C'est pour cela que dès votre déclaration de sinistre, contactez-nous immédiatement : nous prenons en charge l'intégralité des démarches administratives à votre place.",
  },
  {
    q: "Un bris de glace est-il considéré comme un sinistre ?",
    a: "Oui, le bris de glace est bel et bien considéré comme un sinistre — la nomination de ce fait dans les constats de sinistre sur pare-brise ou rétroviseurs le confirme. Les réparations sont prises en charge par votre assureur, même si toutes les garanties ne couvrent pas tous les risques. Les causes de bris de glace sont nombreuses : accident, vandalisme, impact de projectile, etc.",
  },
  {
    q: "Comment êtes-vous rémunérés si votre offre est gratuite ?",
    a: "Nous sommes rémunérés directement par votre assurance. Vous n'avez donc rien à avancer, rien à payer — notre prestation est entièrement prise en charge par votre assureur.",
  },
  {
    q: "Fournissez-vous un véhicule de prêt ?",
    a: "Oui, nous mettons un véhicule de prêt à disposition gratuitement le temps de l'intervention, à réserver lors de la prise de RDV.",
  },
  {
    q: "Comment avoir ma franchise offerte ?",
    a: "Venez changer votre pare-brise chez nous à Épône — votre franchise est offerte, vous n'avez rien à avancer de votre poche. Nous travaillons avec toutes les assurances automobiles du marché et nous occupons de l'intégralité des démarches administratives. Aucune paperasse pour vous.",
  },
  {
    q: "Comment bénéficier des 4 pneus offerts ?",
    a: "Pour tout pare-brise remplacé, vous repartez avec : votre nouveau pare-brise + la franchise offerte + le remplacement de vos 4 pneus offerts. Nous nous occupons de tout sur le plan administratif, vous n'avez aucune démarche à faire.",
  },
  {
    q: "Quelle est l'adresse de votre garage ?",
    a: "Notre centre se trouve à la Zone industrielle des Ardilles, Chem. des Ardilles, 78680 Épône. Ouvert du lundi au samedi de 10 h à 19 h.",
  },
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-cream py-[70px] sm:py-[90px] text-ink"
    >
      <Watermark className="left-[clamp(20px,4vw,48px)] top-[30px]">FAQ</Watermark>

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
            Questions fréquentes
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="relative mx-auto max-w-[1000px]"
        >
          {FAQ.map((item, i) => {
            const isOpen = openIdx === i;
            const idx = String(i + 1).padStart(2, "0");
            return (
              <motion.div
                key={item.q}
                variants={fadeUp}
                className={cn(
                  "mb-2 overflow-hidden rounded-xs bg-white transition-colors",
                  isOpen ? "border-2 border-red" : "border border-navy/[0.08]"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 bg-transparent px-6 py-5 text-left"
                >
                  <span
                    className={cn(
                      "display text-[24px] transition-colors min-w-[36px]",
                      isOpen ? "text-red" : "text-ink-mute"
                    )}
                  >
                    {idx}
                  </span>
                  <span
                    className="display flex-1 text-left text-navy leading-[1.05]"
                    style={{ fontSize: "clamp(18px, 2.4vw, 22px)" }}
                  >
                    {item.q}
                  </span>
                  <span
                    className={cn(
                      "grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border transition-all",
                      isOpen
                        ? "border-red bg-red text-white rotate-45"
                        : "border-navy/15 text-navy"
                    )}
                  >
                    <Plus className="h-[14px] w-[14px]" strokeWidth={3} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="max-w-[760px] pb-[22px] pl-[78px] pr-6 text-[15px] leading-[1.65] text-ink-dim">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
