"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Renders a numeric/percentage string (e.g. "1,284", "87%") and animates
 * it counting up from 0 the first time it scrolls into view.
 */
export default function CountUp({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState<string>(value.replace(/[0-9]/g, "0"));

  useEffect(() => {
    const numeric = parseFloat(value.replace(/,/g, ""));
    if (Number.isNaN(numeric)) {
      setDisplay(value);
      return;
    }

    const suffix = value.match(/%$/) ? "%" : "";
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.disconnect();

          const duration = 1100;
          const start = performance.now();

          function tick(now: number) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(numeric * eased);
            setDisplay(`${current.toLocaleString("en-US")}${suffix}`);
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
