import { HTMLAttributes } from "react";

export function Card({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`hover-lift rounded-lg border border-surface-line bg-card/70 shadow-card hover:border-violet/30 hover:shadow-glow ${className}`}
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
  const tones: Record<string, string> = {
    violet: "bg-violet-100 text-violet-600 dark:bg-violet/15 dark:text-violet",
    pulse: "bg-pulse-soft text-emerald-700 dark:bg-pulse/15 dark:text-pulse",
    amber: "bg-amber-soft text-amber-700 dark:bg-amber/15 dark:text-amber",
    neutral: "bg-surface-dim text-slate-600",
    coral: "bg-coral-soft text-coral-600 dark:bg-coral/15 dark:text-coral",
    sky: "bg-sky-100 text-sky-600 dark:bg-sky/15 dark:text-sky",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${tones[tone]} ${className}`}
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
    <span className="inline-flex items-center gap-1.5 rounded-full border border-surface-line bg-card px-3 py-1 text-xs font-mono text-slate-600">
      <span
        className={`h-1.5 w-1.5 rounded-full ${active ? "bg-pulse animate-pulseDot" : "bg-slate-200"}`}
      />
      {label}
    </span>
  );
}
