import type { Status } from "@/lib/capabilities";

/** The "Available now / In testing / Not yet" tag. One look everywhere. */
export function StatusTag({ status, label }: { status: Status; label: string }) {
  const tone =
    status === "live"
      ? "bg-ink text-white dark:bg-white/10"
      : status === "testing"
        ? "bg-brass-soft text-brass-dark dark:bg-brass/20 dark:text-brass-light"
        : "border border-surface-line text-slate-600";
  return (
    <span className={`inline-flex shrink-0 items-center rounded px-2 py-0.5 text-xs font-medium ${tone}`}>
      {label}
    </span>
  );
}
