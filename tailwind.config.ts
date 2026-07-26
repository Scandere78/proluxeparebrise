import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "3rem",
      },
      screens: {
        "2xl": "1240px",
      },
    },
    extend: {
      /**
       * Palette LCDP — relevée dans « flyer LCDP ok recto verso.pdf » (CMJN)
       * et recoupée sur les pixels de public/logo.png.
       *   rouge  C0  M100 Y100 K0  →  #ED1C24 (logo : #EF1B27)
       *   bleu   C85 M50  Y0   K0  →  #0681BD (logo : #0681BD → #006498)
       *   jaune  C0  M0   Y100 K0  →  #FFF200 (accent étiquettes uniquement)
       */
      colors: {
        blue: {
          DEFAULT: "#0681BD",
          dark: "#006498",
          /* assombrissement du #0681BD à teinte constante (H 200°, S 94 %) */
          deep: "#04547C",
          ink: "#052A44",
          soft: "#E8F2FA",
        },
        red: {
          DEFAULT: "#ED1C24",
          dark: "#BE161D",
          light: "#F5555B",
        },
        sun: "#FFF200",
        /* ambre Google — réservé aux étoiles de notation, hors palette LCDP */
        star: "#FBBC04",
        cream: "#F3F8FC",
        line: "#D7E4EF",
        ink: {
          DEFAULT: "#052A44",
          dim: "#4A6379",
          mute: "#8399AC",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Barlow Condensed", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        DEFAULT: "10px",
      },
      letterSpacing: {
        eyebrow: "0.14em",
        widest: "0.18em",
      },
      opacity: {
        8: "0.08",
        12: "0.12",
        15: "0.15",
        35: "0.35",
        45: "0.45",
        55: "0.55",
        65: "0.65",
        85: "0.85",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "accordion-down": "accordion-down .35s ease",
        "accordion-up": "accordion-up .35s ease",
      },
    },
  },
  plugins: [],
};

export default config;
