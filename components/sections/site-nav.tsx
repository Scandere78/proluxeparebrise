"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { Brand, BrandMark } from "@/components/ui/brand";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Accueil", href: "#hero", id: "hero" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Avantages", href: "#avantages", id: "avantages" },
  { label: "Avis", href: "#avis", id: "avis" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function SiteNav() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120;
      let current = NAV_LINKS[0].id;
      for (const l of NAV_LINKS) {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= y) current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-navy-deep py-[18px]">
        <div className="wrap flex items-center gap-3 sm:gap-6">
          <Brand />

          <div className="mx-auto hidden items-center gap-1 rounded-full bg-white/5 p-[6px] lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.id}
                href={l.href}
                className={cn(
                  "rounded-full px-[18px] py-[10px] text-[12px] font-bold uppercase tracking-[0.06em] text-white transition-colors",
                  active === l.id ? "bg-white/10" : "hover:bg-white/10"
                )}
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="tel:0123456789"
            className="hidden items-center gap-[10px] rounded-full bg-red px-[22px] py-3 pl-[14px] text-[13px] font-extrabold uppercase tracking-[0.06em] text-white transition-colors hover:bg-red-dark lg:inline-flex"
          >
            <span className="grid h-[26px] w-[26px] place-items-center rounded-full bg-white text-red">
              <Phone className="h-[13px] w-[13px]" />
            </span>
            Appelez-nous
          </a>

          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen(true)}
            className="ml-auto grid h-11 w-11 place-items-center rounded-lg bg-white/[0.08] lg:hidden"
          >
            <Menu className="h-[22px] w-[22px] text-white" strokeWidth={2.5} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex flex-col bg-navy-deep p-6"
          >
            <button
              type="button"
              aria-label="Fermer"
              onClick={() => setOpen(false)}
              className="self-end grid h-11 w-11 place-items-center rounded-lg bg-white/[0.08]"
            >
              <X className="h-[22px] w-[22px] text-white" strokeWidth={2.5} />
            </button>

            {NAV_LINKS.concat({ label: "FAQ", href: "#faq", id: "faq" }).map((l, i) => (
              <motion.a
                key={l.id}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.04 }}
                className="display border-b border-line py-[18px] text-[32px] text-white last:border-b-0"
              >
                {l.label}
              </motion.a>
            ))}

            <a
              href="#rdv"
              onClick={() => setOpen(false)}
              className="btn btn-primary btn-skewed mt-6"
            >
              Prendre RDV
            </a>

            <div className="mt-auto flex items-center gap-3 pt-6">
              <BrandMark />
              <div className="font-display italic font-black uppercase text-white text-[16px] leading-[0.95]">
                PROLUXE
                <small className="block text-[11px] text-red">PARE BRISE</small>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
