"use client";

import { useEffect } from "react";

/**
 * All the home page's interactive behaviour, ported from the inline <script>
 * that the original static index.html carried.
 *
 * This exists because the hero, service cards, stat counters and tab switcher
 * all start at opacity 0 (or display:none) in CSS and are revealed by script.
 * Porting the markup without the script left the page structurally correct but
 * visually blank — the content was in the HTML, just never shown.
 *
 * GSAP is deliberately not used. The original pulled GSAP + ScrollTrigger from
 * a CDN (~70KB, two blocking requests) for effects that the Web Animations API
 * and IntersectionObserver do natively.
 */
export default function HomeEffects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    /* ---------- Hero orbital canvas ---------- */
    const canvas = document.getElementById("orbitCanvas") as HTMLCanvasElement | null;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) {
      let w = 0, h = 0, cx = 0, cy = 0, t = 0, raf = 0;
      const dpr = window.devicePixelRatio || 1;

      const size = () => {
        w = canvas.width = canvas.offsetWidth * dpr;
        h = canvas.height = canvas.offsetHeight * dpr;
        cx = w * 0.68;
        cy = h * 0.42;
      };
      size();
      window.addEventListener("resize", size);

      const rings = [
        { rx: 0.30, ry: 0.12, rot: -0.4, col: "#2E97FF", sp: 0.5, a: 0.85 },
        { rx: 0.42, ry: 0.16, rot: 0.7, col: "#FF9933", sp: -0.35, a: 0.5 },
        { rx: 0.55, ry: 0.22, rot: 1.5, col: "#ffffff", sp: 0.22, a: 0.18 },
        { rx: 0.68, ry: 0.27, rot: 2.4, col: "#138808", sp: -0.18, a: 0.4 },
      ];

      const draw = () => {
        ctx.clearRect(0, 0, w, h);
        const base = Math.min(w, h);

        // Core glow
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, base * 0.14);
        g.addColorStop(0, "rgba(46,151,255,.9)");
        g.addColorStop(0.5, "rgba(0,123,255,.35)");
        g.addColorStop(1, "rgba(0,123,255,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, base * 0.14, 0, 7);
        ctx.fill();
        ctx.fillStyle = "rgba(255,255,255,.9)";
        ctx.beginPath();
        ctx.arc(cx, cy, base * 0.018, 0, 7);
        ctx.fill();

        rings.forEach((r, i) => {
          ctx.save();
          ctx.translate(cx, cy);
          ctx.rotate(r.rot + t * r.sp);
          ctx.beginPath();
          ctx.ellipse(0, 0, base * r.rx, base * r.ry, 0, 0, 7);
          ctx.strokeStyle = r.col;
          ctx.globalAlpha = r.a;
          ctx.lineWidth = dpr * 1.3;
          ctx.stroke();

          // Travelling node on each orbit
          const ang = t * (0.8 + i * 0.3) + i;
          const px = Math.cos(ang) * base * r.rx;
          const py = Math.sin(ang) * base * r.ry;
          ctx.globalAlpha = 1;
          ctx.fillStyle = r.col;
          ctx.beginPath();
          ctx.arc(px, py, dpr * 3.4, 0, 7);
          ctx.fill();
          ctx.shadowColor = r.col;
          ctx.shadowBlur = 18;
          ctx.beginPath();
          ctx.arc(px, py, dpr * 2, 0, 7);
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.restore();
        });

        t += reduce ? 0 : 0.0045;
        raf = requestAnimationFrame(draw);
      };
      draw();

      cleanups.push(() => {
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", size);
      });
    }

    /* ---------- Hero intro stagger ---------- */
    const heroTargets = [
      { sel: "#heroBadge", delay: 0, y: 0 },
      { sel: ".hero h1 .word", delay: 260, y: 40 },
      { sel: "#heroSub", delay: 620, y: 0 },
      { sel: "#heroCta", delay: 760, y: 0 },
      { sel: "#heroMeta", delay: 900, y: 0 },
    ];

    /**
     * Force an element visible.
     *
     * Cancels any running animation FIRST. A Web Animation with fill:"forwards"
     * sits above inline styles in the cascade, so setting style.opacity while
     * one is still running has no visible effect — the animation keeps holding
     * its current value. Cancelling drops it out of the cascade and lets the
     * inline style apply.
     */
    const revealHero = (el: HTMLElement) => {
      el.getAnimations().forEach((a) => a.cancel());
      el.style.opacity = "1";
      el.style.transform = "none";
    };

    if (reduce) {
      // No motion: show everything immediately.
      heroTargets.forEach(({ sel }) =>
        document.querySelectorAll<HTMLElement>(sel).forEach(revealHero)
      );
    } else {
      heroTargets.forEach(({ sel, delay, y }) => {
        document.querySelectorAll<HTMLElement>(sel).forEach((el, i) => {
          const anim = el.animate(
            [
              { opacity: 0, transform: "translateY(" + y + "px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            {
              duration: 700,
              // Stagger words within the headline, matching the original timeline.
              delay: delay + i * 80,
              easing: "cubic-bezier(.2,.7,.3,1)",
              fill: "forwards",
            }
          );
          // Commit the end state so the element stays visible once the
          // animation object is released.
          anim.onfinish = () => revealHero(el);
          // Cancel on unmount. Without this, React StrictMode's double-invoked
          // effect leaves two fill:forwards animations stacked on the same
          // element, both outranking any later style change.
          cleanups.push(() => anim.cancel());
        });
      });

      // Safety net: if the animations never run (background tab, blocked API),
      // show the hero anyway rather than leaving the page looking empty.
      const heroSafety = window.setTimeout(() => {
        heroTargets.forEach(({ sel }) =>
          document.querySelectorAll<HTMLElement>(sel).forEach(revealHero)
        );
      }, 4000);
      cleanups.push(() => window.clearTimeout(heroSafety));
    }

    /* ---------- Service cards: slide and lock ---------- */
    const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-card]"));
    const showCard = (el: HTMLElement) => {
      el.style.transition =
        "opacity .8s cubic-bezier(.2,.7,.3,1), transform .8s cubic-bezier(.2,.7,.3,1)";
      el.style.opacity = "1";
      el.style.transform = "none";
    };
    if (cards.length) {
      const cardIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            showCard(e.target as HTMLElement);
            cardIO.unobserve(e.target);
          });
        },
        { rootMargin: "0px 0px -12% 0px" }
      );
      cards.forEach((c) => cardIO.observe(c));
      const cardSafety = window.setTimeout(() => cards.forEach(showCard), 4000);
      cleanups.push(() => {
        cardIO.disconnect();
        window.clearTimeout(cardSafety);
      });
    }

    /* Stat counters live in <Counters />, shared with the about page. */

    /* ---------- Service tab switcher ---------- */
    const tabs = Array.from(document.querySelectorAll<HTMLElement>(".svc-tab"));
    const panels = Array.from(document.querySelectorAll<HTMLElement>(".svc-panel"));
    if (tabs.length && panels.length) {
      const activate = (idx: number) => {
        tabs.forEach((tab, i) => {
          tab.classList.toggle("active", i === idx);
          tab.setAttribute("aria-selected", String(i === idx));
        });
        panels.forEach((panel, i) => panel.classList.toggle("active", i === idx));
      };
      const handlers = tabs.map((tab, i) => {
        const h = () => activate(i);
        tab.addEventListener("click", h);
        return [tab, h] as const;
      });
      cleanups.push(() =>
        handlers.forEach(([tab, h]) => tab.removeEventListener("click", h))
      );
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
