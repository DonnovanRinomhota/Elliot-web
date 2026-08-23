"use client";

import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative flex h-9 w-9 items-center justify-center rounded-md text-slate-600 transition-colors hover:bg-fg/[0.06] hover:text-fg ${className}`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        aria-hidden="true"
        className="transition-transform duration-500"
        style={{ transform: isDark ? "rotate(40deg)" : "rotate(0deg)" }}
      >
        {/* Sun */}
        <g
          className="transition-opacity duration-300"
          style={{ opacity: isDark ? 0 : 1 }}
        >
          <circle cx="9" cy="9" r="3.4" stroke="currentColor" strokeWidth="1.4" />
          <path
            d="M9 1.5v2M9 14.5v2M16.5 9h-2M3.5 9h-2M14.3 3.7l-1.4 1.4M5.1 12.9l-1.4 1.4M14.3 14.3l-1.4-1.4M5.1 5.1 3.7 3.7"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </g>
        {/* Moon */}
        <path
          d="M14.5 10.8A6 6 0 0 1 7.2 3.5a6 6 0 1 0 7.3 7.3Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
          className="transition-opacity duration-300"
          style={{ opacity: isDark ? 1 : 0 }}
        />
      </svg>
    </button>
  );
}
