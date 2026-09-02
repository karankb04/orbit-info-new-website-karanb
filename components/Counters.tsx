"use client";

import { useEffect } from "react";

/**
 * Animated stat counters.
 *
 * Drives any element carrying `data-count` (a number, with optional
 * `data-suffix`) or `data-text` (a literal like "Same-Day"). The markup ships
 * with these elements EMPTY, so if this never runs the stats render blank —
 * which is why there is a safety net below.
 *
 * Shared by the home and about pages; both carry the same stat band.
 */
export default function Counters() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-count],[data-text]")
    );
    if (!els.length) return;

    /** Writes the finished value. Used by the animation and the safety net. */
    const setFinal = (el: HTMLElement) => {
      if (el.dataset.text) {
        el.textContent = el.dataset.text;
        return;
      }
      const end = Number(el.dataset.count);
      if (!Number.isFinite(end)) return;
      el.innerHTML =
        end.toLocaleString("en-IN") +
        '<span class="u">' + (el.dataset.suffix ?? "") + "</span>";
    };

    const countUp = (el: HTMLElement) => {
      if (el.dataset.text || reduce) {
        setFinal(el);
        return;
      }
      const end = Number(el.dataset.count);
      if (!Number.isFinite(end)) return;

      const duration = 1600;
      let start: number | null = null;
      const step = (ts: number) => {
        if (start === null) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
        if (p < 1) {
          el.textContent = Math.floor(eased * end).toLocaleString("en-IN");
          requestAnimationFrame(step);
        } else {
          setFinal(el);
        }
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          countUp(e.target as HTMLElement);
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));

    /**
     * Safety net writes the final value DIRECTLY rather than calling countUp(),
     * which would start another requestAnimationFrame loop — the very mechanism
     * that failed and made the rescue necessary. Blank stats look broken, so
     * this must not be able to fail the same way twice.
     */
    const safety = window.setTimeout(() => {
      els.forEach((el) => {
        if (!el.textContent?.trim()) setFinal(el);
      });
    }, 4000);

    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, []);

  return null;
}
