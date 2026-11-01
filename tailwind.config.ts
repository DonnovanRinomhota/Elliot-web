import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Literal, non-theme-reactive — used only for the intentionally
        // "always dark" console/product panels (activity timeline, final
        // CTA, dashboard sidebar). These stay dark in both light and dark
        // site themes, like a code editor panel.
        // Palette (matches the Elliot dashboard): navy ink, cool greys, brass
        // for highlights, signal red for urgency. The old accent names are
        // kept so existing classes keep working, but now point at these:
        //   violet / sky -> brass   (accents, icon tiles, eyebrows)
        //   pulse        -> steel   (status dots, "live" markers)
        //   amber        -> brass   (waiting / in testing)
        //   coral        -> alert   (urgent)
        // Literal, non-theme-reactive dark panels (console, final CTA).
        ink: {
          DEFAULT: "#13223A",
          soft: "#1C2F4D",
          line: "#2D4163",
        },
        paper: {
          DEFAULT: "#F5F6F8",
          dim: "#ECEFF3",
          line: "#DDE2E9",
        },
        // Theme-aware -- flip with the `dark` class.
        surface: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          dim: "rgb(var(--surface-dim) / <alpha-value>)",
          line: "rgb(var(--surface-line) / <alpha-value>)",
        },
        card: "rgb(var(--card) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        slate: {
          900: "rgb(var(--slate-900) / <alpha-value>)",
          700: "rgb(var(--slate-700) / <alpha-value>)",
          600: "rgb(var(--slate-600) / <alpha-value>)",
          400: "rgb(var(--slate-400) / <alpha-value>)",
          200: "rgb(var(--slate-200) / <alpha-value>)",
        },
        brass: {
          DEFAULT: "#9A7328",
          dark: "#7A5A1C",
          light: "#C9A55E",
          soft: "#F6EFE1",
        },
        alert: {
          DEFAULT: "#B42318",
          soft: "#FCEDEB",
        },
        violet: {
          DEFAULT: "#9A7328",
          400: "#C9A55E",
          600: "#7A5A1C",
          700: "#5E4515",
          100: "#F6EFE1",
        },
        sky: {
          DEFAULT: "#7A5A1C",
          600: "#5E4515",
          100: "#F6EFE1",
        },
        pulse: {
          DEFAULT: "#4C6A92",
          soft: "#EDF0F5",
        },
        amber: {
          DEFAULT: "#9A7328",
          700: "#7A5A1C",
          soft: "#F6EFE1",
        },
        coral: {
          DEFAULT: "#B42318",
          600: "#912018",
          soft: "#FCEDEB",
        },
        emerald: {
          700: "#13223A",
        },
        red: {
          600: "#B42318",
        },
      },
      fontFamily: {
        display: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
        body: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
        xl: "24px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(19,34,58,0.04)",
        cardHover: "0 1px 2px rgba(19,34,58,0.04), 0 8px 24px -16px rgba(19,34,58,0.18)",
        // Glows retired: kept as quiet borders so old class names stay harmless.
        glow: "0 0 0 1px rgba(19,34,58,0.08)",
        glowLg: "0 0 0 1px rgba(19,34,58,0.1)",
        coralGlow: "none",
      },
      backgroundImage: {
        // Gradients retired in favour of flat colour.
        "brand-gradient": "linear-gradient(#13223A, #13223A)",
        "brand-gradient-soft": "linear-gradient(#ECEFF3, #ECEFF3)",
        mesh: "none",
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.55", transform: "scale(0.85)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        typingDot: {
          "0%, 60%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "30%": { transform: "translateY(-3px)", opacity: "1" },
        },
        blobFloat: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(3%, -4%) scale(1.05)" },
          "66%": { transform: "translate(-3%, 3%) scale(0.97)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        pulseDot: "pulseDot 2s ease-in-out infinite",
        fadeUp: "fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        typingDot: "typingDot 1.1s ease-in-out infinite",
        blobFloat: "blobFloat 14s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        floatY: "floatY 4s ease-in-out infinite",
        gradientShift: "gradientShift 6s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
