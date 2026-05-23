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
      colors: {
        navy: {
          DEFAULT: "#0E1A2F",
          deep: "#091322",
          2: "#152743",
        },
        line: "#1F3050",
        red: {
          DEFAULT: "#EF4A2A",
          dark: "#C13418",
          light: "#FB6F50",
        },
        cream: "#F4F2EE",
        ink: {
          DEFAULT: "#0E1A2F",
          dim: "#5A6478",
          mute: "#9099AA",
        },
        sun: "#FFD453",
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
