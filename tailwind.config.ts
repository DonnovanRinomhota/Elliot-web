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
          DEFAULT: "#0A1528",
          soft: "#12223B",
          line: "#24385A",
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
        // Gold of the logo. On the navy site, "dark" is the text shade.
        brass: {
          DEFAULT: "#D9A56C",
          dark: "#E2B47E",
          light: "#EBC48F",
          soft: "#2A2418",
        },
        alert: {
          DEFAULT: "#F07167",
          soft: "#3A1716",
        },
        violet: {
          DEFAULT: "#D9A56C",
          400: "#EBC48F",
          600: "#E2B47E",
          700: "#C58D55",
          100: "#2A2418",
        },
        sky: {
          DEFAULT: "#E2B47E",
          600: "#C58D55",
          100: "#2A2418",
        },
        pulse: {
          DEFAULT: "#7FA3D6",
          soft: "#14233D",
        },
        amber: {
          DEFAULT: "#D9A56C",
          700: "#E2B47E",
          soft: "#2A2418",
        },
        coral: {
          DEFAULT: "#F07167",
          600: "#F07167",
          soft: "#3A1716",
        },
        // Elliot's product blue (the dashboard's accent).
        elliot: {
          DEFAULT: "#2F6BFF",
          light: "#6E9BFF",
          soft: "#E8EFFF",
        },
        emerald: {
          700: "#13223A",
        },
        red: {
          600: "#B42318",
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        body: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
        xl: "24px",
        "2xl": "28px",
      },
      boxShadow: {
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 40px -30px rgba(0,0,0,0.7)",
        cardHover: "0 1px 0 rgba(255,255,255,0.06) inset, 0 24px 48px -28px rgba(0,0,0,0.8)",
        gold: "0 10px 30px -10px rgba(217,165,108,0.55)",
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
        content: "1320px",
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
