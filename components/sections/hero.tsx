"use client";

import { GoogleBadge } from "@/components/ui/google-badge";
import { easeOut } from "@/lib/motion";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Image from "next/image";

/** Étiquette jaune #FFF200 — l'accent du flyer, réservé aux arguments promo. */
function PriceTag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-sun px-6 py-3 text-[12px] font-extrabold uppercase tracking-[0.1em] text-blue-ink shadow-[0_12px_30px_rgba(5,42,68,0.45)] sm:text-[14px]",
        className
      )}
    >
      {children}
    </span>
  );
}

export function HeroSection() {
  return (
    <header id="hero" className="relative isolate overflow-hidden bg-blue-ink">
      <div className="relative flex min-h-[max(620px,80vh)] w-full items-center justify-center py-24">
        {/* Full-bleed photo */}
        <Image
          src="/lunette-arriere.png"
          alt={`Lunette arrière — Atelier ${SITE.legalName}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Center vignette for legibility */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 75% 65% at 50% 50%, rgba(5,42,68,0.72), rgba(5,42,68,0.32) 60%, rgba(4,57,92,0.6) 100%)",
          }}
        />

        {/* Étiquettes promo penchées sur les côtés, à la manière du flyer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.75, ease: easeOut }}
          className="pointer-events-none absolute inset-0 z-20 hidden xl:block"
        >
          <PriceTag className="absolute left-[5%] top-[26%] -rotate-[11deg]">
            Des prix imbattables
          </PriceTag>
          <PriceTag className="absolute right-[5%] top-[62%] rotate-[9deg]">
            Pneu neuf
          </PriceTag>
        </motion.div>

        {/* Centered text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOut }}
          className="relative z-10 flex flex-col items-center px-5 text-center"
        >
          <h1
            className="display mt-6 text-white text-balance"
            style={{ fontSize: "clamp(48px, 7.5vw, 100px)" }}
          >
            Votre pare-brise,
            <br />
            <span className="text-red">notre signature.</span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 w-full max-w-[620px] rounded-sm border border-white/20 bg-blue-ink/45 px-6 py-5 backdrop-blur-[2px] sm:px-8"
          >
            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/70">
                Pour tout remplacement de pare-brise
              </span>
              <span className="display text-[24px] text-white sm:text-[30px]">
                200 € offerts <span className="text-red">ou 4 pneus offerts</span>
              </span>
            </div>

            <div className="my-4 h-px bg-white/15" />

            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/70">
                Carrosserie · Mécanique · Pièces détachées
              </span>
              <span className="display text-[24px] text-white sm:text-[30px]">
                200 € offerts
              </span>
            </div>
          </motion.div>

          {/* Étiquettes — repliées sous l'encart quand il n'y a plus de place sur les côtés */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.75, ease: easeOut }}
            className="mt-7 flex flex-wrap items-center justify-center gap-4 xl:hidden"
          >
            <PriceTag className="-rotate-[6deg]">Des prix imbattables</PriceTag>
            <PriceTag className="rotate-[6deg]">Pneu neuf</PriceTag>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-9 flex flex-col items-center gap-5 sm:flex-row sm:gap-8"
          >
            <a
              href="#rdv"
              className="rounded-sm bg-red px-7 py-4 text-[13px] font-extrabold uppercase tracking-[0.1em] text-white transition-colors hover:bg-red-dark"
            >
              Prendre rendez-vous
            </a>
            <a
              href={SITE.phone.href}
              className="group flex items-center gap-3 text-white"
            >
              <Phone className="h-4 w-4 text-red" />
              <span className="flex flex-col leading-tight text-left">
                <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/65">
                  Appel direct
                </span>
                <span className="font-sans text-[18px] font-extrabold tracking-tight transition-colors group-hover:text-red">
                  {SITE.phone.display}
                </span>
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: easeOut }}
            className="mt-9"
          >
            <GoogleBadge />
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
