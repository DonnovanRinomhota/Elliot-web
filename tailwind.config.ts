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
        ink: {
          DEFAULT: "#0D0E17",
          soft: "#171A2B",
          line: "#2A2E45",
        },
        paper: {
          DEFAULT: "#FBF9F5",
          dim: "#F2EFE7",
          line: "#E6E1D5",
        },
        // Theme-aware — flip with the `dark` class. Used for ordinary page
        // chrome: page background, card surfaces, body text hierarchy.
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
        violet: {
          DEFAULT: "#7C5CFC",
          600: "#6342E8",
          700: "#4F30C4",
          100: "#EFEAFE",
        },
        sky: {
          DEFAULT: "#2FD0F0",
          600: "#12B4D6",
          100: "#E4FBFF",
        },
        pulse: {
          DEFAULT: "#22E58F",
          soft: "#E1FCEE",
        },
        amber: {
          DEFAULT: "#E7A33E",
          soft: "#FCF1DF",
        },
        coral: {
          DEFAULT: "#FF6B5B",
          soft: "#FFEAE6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
        xl: "24px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(13,14,23,0.04), 0 8px 24px -12px rgba(13,14,23,0.12)",
        cardHover: "0 4px 16px rgba(13,14,23,0.07), 0 20px 48px -16px rgba(13,14,23,0.2)",
        glow: "0 0 0 1px rgba(124,92,252,0.16), 0 10px 34px -10px rgba(124,92,252,0.55)",
        glowLg: "0 0 0 1px rgba(124,92,252,0.2), 0 24px 60px -16px rgba(124,92,252,0.45)",
        coralGlow: "0 10px 28px -8px rgba(255,107,91,0.45)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #7C5CFC 0%, #2FD0F0 100%)",
        "brand-gradient-soft": "linear-gradient(135deg, rgba(124,92,252,0.12) 0%, rgba(47,208,240,0.12) 100%)",
        "mesh": "radial-gradient(ellipse 60% 50% at 20% 20%, rgba(124,92,252,0.35), transparent 60%), radial-gradient(ellipse 55% 45% at 85% 15%, rgba(47,208,240,0.3), transparent 60%), radial-gradient(ellipse 50% 50% at 60% 80%, rgba(255,107,91,0.18), transparent 60%)",
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
