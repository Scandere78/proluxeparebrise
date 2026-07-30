"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { Brand, BrandMark } from "@/components/ui/brand";
import { SITE } from "@/lib/site";
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
  /** false = posée sur le hero (transparente) · true = décollée (blanche) */
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

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
      <nav
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,padding,box-shadow] duration-300",
          scrolled
            ? "border-line bg-white py-[10px] shadow-[0_1px_20px_rgba(5,42,68,0.08)]"
            : "border-transparent bg-transparent py-[14px]"
        )}
      >
        <div className="wrap flex items-center gap-3 sm:gap-6">
          <Brand showText={false} markSize={scrolled ? 52 : 64} />

          <div
            className={cn(
              "mx-auto hidden items-center gap-1 rounded-full p-[6px] transition-colors duration-300 lg:flex",
              scrolled ? "bg-blue-soft" : "bg-white/10 backdrop-blur-sm"
            )}
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.id}
                href={l.href}
                className={cn(
                  "rounded-full px-[18px] py-[10px] text-[12px] font-bold uppercase tracking-[0.06em] transition-colors",
                  active === l.id
                    ? scrolled
                      ? "bg-blue text-white"
                      : "bg-white text-blue-ink"
                    : scrolled
                      ? "text-ink-dim hover:bg-white hover:text-blue"
                      : "text-white hover:bg-white/20"
                )}
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href={SITE.phone.href}
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
            className={cn(
              "ml-auto grid h-11 w-11 place-items-center rounded-lg transition-colors duration-300 lg:hidden",
              scrolled ? "bg-blue-soft" : "bg-white/15 backdrop-blur-sm"
            )}
          >
            <Menu
              className={cn("h-[22px] w-[22px]", scrolled ? "text-blue-ink" : "text-white")}
              strokeWidth={2.5}
            />
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
            className="fixed inset-0 z-[100] flex flex-col bg-white p-6"
          >
            <button
              type="button"
              aria-label="Fermer"
              onClick={() => setOpen(false)}
              className="self-end grid h-11 w-11 place-items-center rounded-lg bg-blue-soft"
            >
              <X className="h-[22px] w-[22px] text-blue-ink" strokeWidth={2.5} />
            </button>

            {NAV_LINKS.concat({ label: "FAQ", href: "#faq", id: "faq" }).map((l, i) => (
              <motion.a
                key={l.id}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.04 }}
                className="display border-b border-line py-[18px] text-[32px] text-blue-ink last:border-b-0"
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
              <BrandMark size={72} />
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
