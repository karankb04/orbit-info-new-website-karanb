"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Adds `.in` to `.reveal` elements as they scroll into view.
 *
 * This replaces GSAP + ScrollTrigger, which the static build loaded from a CDN
 * (~70KB across two blocking requests) purely to toggle one class. An
 * IntersectionObserver is native, costs nothing, and removes two third-party
 * requests from the critical path — third-party scripts were the single biggest
 * drag on LCP here.
 *
 * Mounted once in the root layout; it observes whatever is on the current page.
 */
export default function Reveal() {
  /**
   * Re-run on every route change.
   *
   * This component lives in the root layout, and in the App Router a layout is
   * NOT remounted during client-side navigation — only the page below it swaps.
   * With an empty dependency array the effect ran exactly once, on first load,
   * so every page reached by clicking a nav link kept its `.reveal` elements at
   * opacity 0 forever: the whole page rendered blank.
   *
   * Depending on the pathname re-queries the DOM after each navigation.
   */
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    // Respect reduced-motion by showing everything immediately rather than
    // animating. The CSS already neutralises the transition; this makes sure
    // nothing is left stuck at opacity 0 if the observer never fires.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("in");
          io.unobserve(entry.target); // reveal once, then stop watching
        }
      },
      { rootMargin: "0px 0px -12% 0px" }
    );

    els.forEach((el) => io.observe(el));

    /**
     * Belt-and-braces: reveal everything after 4s no matter what.
     *
     * The CSS already fails visible when JS never runs, but this covers the
     * other case — JS runs, the class is applied, and then the observer never
     * fires (a rendering edge case, a background tab that never composites).
     * Without this, content would stay at opacity 0 with no way to recover.
     */
    const safety = window.setTimeout(() => {
      els.forEach((el) => el.classList.add("in"));
    }, 4000);

    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, [pathname]);

  return null;
}
