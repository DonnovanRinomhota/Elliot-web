"use client";

import { useEffect } from "react";

/**
 * Mounts once in the root layout. Watches every element with the `.reveal`
 * class (see globals.css) and adds `.is-visible` when it scrolls into view.
 * Sections stay as ordinary server components — no need to convert each
 * one to a client component just to animate it.
 */
export default function ScrollRevealInit() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
