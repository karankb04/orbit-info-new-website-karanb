"use client";

import { useEffect } from "react";

/**
 * Category filtering for the portfolio tiles.
 *
 * Behaviour-only: the buttons and tiles are already in the server-rendered
 * markup, so this attaches listeners rather than re-rendering them in React.
 * That keeps every tile — headings, descriptions and images — in the initial
 * HTML where crawlers can see it. Filtering purely in the client means nothing
 * is ever hidden from a crawler, unlike a "load more" pattern.
 */
export default function PortfolioFilters() {
  useEffect(() => {
    const filters = Array.from(document.querySelectorAll<HTMLButtonElement>(".filter"));
    const tiles = Array.from(document.querySelectorAll<HTMLElement>(".tile"));
    if (!filters.length) return;

    const onClick = (btn: HTMLButtonElement) => () => {
      filters.forEach((f) => f.classList.remove("active"));
      btn.classList.add("active");
      const wanted = btn.dataset.f;
      tiles.forEach((tile) => {
        const show = wanted === "all" || tile.dataset.cat === wanted;
        tile.classList.toggle("hide", !show);
      });
    };

    const handlers = filters.map((btn) => {
      const h = onClick(btn);
      btn.addEventListener("click", h);
      return [btn, h] as const;
    });

    return () => handlers.forEach(([btn, h]) => btn.removeEventListener("click", h));
  }, []);

  return null;
}
