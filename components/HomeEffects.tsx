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
      let w = 0, h = 0, cx = 0, cy = 0, R = 0, t = 0, raf = 0;
      const dpr = window.devicePixelRatio || 1;
      const core = document.getElementById("heroCore");

      const size = () => {
        w = canvas.width = canvas.offsetWidth * dpr;
        h = canvas.height = canvas.offsetHeight * dpr;
        const narrow = canvas.offsetWidth < 980;
        if (narrow) {
          /**
           * On phones there is no room beside the copy, so the system centres
           * behind it and is allowed to bleed off both edges. Symmetrical
           * bleed reads as an intentional halo; the old off-centre bleed read
           * as stray lines.
           */
          cx = w * 0.5;
          cy = h * 0.52;
          R = Math.max(w, h) * 0.34;
        } else {
          cx = w * 0.7;
          cy = h * 0.5;
          /**
           * R is the largest radius that still fits inside the canvas on every
           * side, with a margin. The previous version sized the rings off
           * min(w,h) with no regard for where the centre sat, so the outer two
           * escaped the hero entirely and read as stray lines cutting through
           * the nav.
           */
          R = Math.min(w - cx, cx, cy, h - cy) * 0.86;
        }
        if (core) {
          core.style.left = cx / dpr + "px";
          core.style.top = cy / dpr + "px";
        }
      };
      size();
      window.addEventListener("resize", size);

      /**
       * One shared tilt for every ring. Previously each ring carried its own
       * rotation *and* spun at its own speed, so the ellipses tumbled against
       * each other — chaotic rather than orbital. Fixing the plane and moving
       * only the bodies is what makes it read as a system.
       */
      const TILT = -0.3;
      const rings = [
        { rx: 0.52, ry: 0.19, col: "#2E97FF", a: 0.75, sp: 0.55, n: 4.0 },
        { rx: 0.72, ry: 0.26, col: "#FF9933", a: 0.55, sp: -0.38, n: 3.5 },
        { rx: 0.92, ry: 0.33, col: "#ffffff", a: 0.16, sp: 0.26, n: 2.8 },
      ];
      // The logo's own red/green/blue arc banding, re-used as signal ripples.
      const ARC = ["rgba(46,151,255,", "rgba(60,200,110,", "rgba(240,70,70,"];

      const draw = () => {
        ctx.clearRect(0, 0, w, h);

        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.75);
        g.addColorStop(0, "rgba(46,151,255,.30)");
        g.addColorStop(0.45, "rgba(24,90,190,.14)");
        g.addColorStop(1, "rgba(10,30,70,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, R * 0.75, 0, 7);
        ctx.fill();

        // Signal ripples breathing outward from the mark — "around you...".
        for (let i = 0; i < 2; i++) {
          const prog = ((t * 0.13) + i / 2) % 1;
          const rad = R * (0.34 + prog * 0.6);
          const fade = Math.sin(prog * Math.PI) * 0.42;
          ARC.forEach((c, k) => {
            const rr = rad + k * 7 * dpr;
            ctx.lineWidth = dpr * 2.1;
            ctx.strokeStyle = c + fade + ")";
            ctx.beginPath();
            ctx.arc(cx, cy, rr, -2.42, -0.72);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(cx, cy, rr, 0.72, 2.42);
            ctx.stroke();
          });
        }

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(TILT);
        rings.forEach((r, i) => {
          ctx.beginPath();
          ctx.ellipse(0, 0, R * r.rx, R * r.ry, 0, 0, 7);
          ctx.strokeStyle = r.col;
          ctx.globalAlpha = r.a;
          ctx.lineWidth = dpr * 1.2;
          ctx.stroke();

          const ang = t * r.sp + i * 2.1;
          const px = Math.cos(ang) * R * r.rx;
          const py = Math.sin(ang) * R * r.ry;
          ctx.globalAlpha = 1;
          ctx.fillStyle = r.col;
          ctx.shadowColor = r.col;
          ctx.shadowBlur = 15 * dpr;
          ctx.beginPath();
          ctx.arc(px, py, dpr * r.n, 0, 7);
          ctx.fill();
          ctx.shadowBlur = 0;
        });
        ctx.restore();

        t += reduce ? 0 : 0.006;
        raf = requestAnimationFrame(draw);
      };
      draw();
      if (core) core.classList.add("in");

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
