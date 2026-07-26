"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

export function CtaStripSection() {
  return (
    <section id="rdv" className="bg-red py-9 text-white">
      <div className="wrap flex flex-wrap items-center justify-between gap-5">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="display"
          style={{ fontSize: "clamp(32px, 5vw, 44px)" }}
        >
          Un impact ? Réagissez vite.
        </motion.h2>
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          href={SITE.phone.href}
          className="btn btn-light"
        >
          Prendre RDV
          <ArrowRight className="h-4 w-4" />
        </motion.a>
      </div>
    </section>
  );
}
