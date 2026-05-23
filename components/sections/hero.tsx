"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { easeOut } from "@/lib/motion";

export function HeroSection() {
  return (
    <header id="hero" className="relative isolate overflow-hidden bg-navy-deep">
      <div className="relative flex h-[80vh] min-h-[620px] w-full items-center justify-center">
        {/* Full-bleed photo */}
        <Image
          src="/lunette-arriere.png"
          alt="Lunette arrière — Atelier Proluxe Pare Brise"
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
              "radial-gradient(ellipse 75% 65% at 50% 50%, rgba(9,19,34,0.7), rgba(9,19,34,0.3) 60%, rgba(9,19,34,0.55) 100%)",
          }}
        />

        {/* Centered text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOut }}
          className="relative z-10 flex flex-col items-center px-5 text-center"
        >
          <div className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/65">
            Proluxe Pare Brise — Épône (78)
          </div>

          <h1
            className="display mt-6 text-white text-balance"
            style={{ fontSize: "clamp(48px, 7.5vw, 100px)" }}
          >
            Votre pare-brise,
            <br />
            <span className="text-red">notre signature.</span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:gap-8"
          >
            <a
              href="#rdv"
              className="rounded-sm bg-red px-7 py-4 text-[13px] font-extrabold uppercase tracking-[0.1em] text-white transition-colors hover:bg-red-dark"
            >
              Prendre rendez-vous
            </a>
            <a
              href="tel:0123456789"
              className="group flex items-center gap-3 text-white"
            >
              <Phone className="h-4 w-4 text-red" />
              <span className="flex flex-col leading-tight text-left">
                <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/65">
                  Appel direct
                </span>
                <span className="font-sans text-[18px] font-extrabold tracking-tight transition-colors group-hover:text-red">
                  01 23 45 67 89
                </span>
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
