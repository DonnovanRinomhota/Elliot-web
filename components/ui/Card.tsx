import { HTMLAttributes } from "react";

export function Card({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`panel rounded-[24px] ${className}`}
      {...props}
    />
  );
}

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

export function Badge({
  children,
  tone = "violet",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "violet" | "pulse" | "amber" | "neutral" | "coral" | "sky";
  className?: string;
}) {
  // Four-colour palette: navy, grey, brass, red. Old tone names map onto it.
  const tones: Record<string, string> = {
    violet: "bg-brass-soft text-brass-dark dark:bg-brass/20 dark:text-brass-light",
    sky: "bg-brass-soft text-brass-dark dark:bg-brass/20 dark:text-brass-light",
    amber: "gold-tile border border-[#d9a56c]/25 bg-[#d9a56c]/15 text-[#e8c08e]",
    pulse: "bg-[#14325c] text-white",
    neutral: "bg-surface-dim text-slate-600",
    coral: "bg-alert-soft text-alert dark:bg-alert/20 dark:text-[#F4A29A]",
  };
  return (
    <span
      className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-medium ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export function StatusPill({
  label,
  active = true,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-surface-line bg-card px-3 py-1 text-xs text-slate-600">
      <span
        className={`h-1.5 w-1.5 rounded-full ${active ? "bg-brass" : "bg-slate-200"}`}
      />
      {label}
    </span>
  );
}
