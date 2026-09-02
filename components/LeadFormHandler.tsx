"use client";

import { useEffect } from "react";

/**
 * Wires up the quote form, which posts to a Google Apps Script Web App that
 * appends each lead to a Google Sheet.
 *
 * Behaviour-only, like Reveal and PortfolioFilters: the <form> markup is
 * server-rendered so it exists in the initial HTML.
 *
 * The endpoint is public by nature — it ends up in the client bundle either
 * way — so the env var exists for configurability, not secrecy.
 */
const ENDPOINT =
  process.env.NEXT_PUBLIC_LEAD_FORM_ENDPOINT ??
  "https://script.google.com/macros/s/AKfycbxRAqYiySkvaFWY5Z3TsNs94poEbceyndvYLSIGB4-UxrEr1TklTgE2Tbnh5bC1-hU/exec";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LeadFormHandler() {
  useEffect(() => {
    const form = document.getElementById("leadForm") as HTMLFormElement | null;
    if (!form) return;

    const service = document.getElementById("service") as HTMLSelectElement | null;
    const onServiceChange = () =>
      service?.classList.toggle("filled", Boolean(service.value));
    service?.addEventListener("change", onServiceChange);

    const onSubmit = (e: Event) => {
      e.preventDefault();

      const name = document.getElementById("name") as HTMLInputElement;
      const email = document.getElementById("email") as HTMLInputElement;
      const svc = document.getElementById("service") as HTMLSelectElement;

      let ok = true;
      const mark = (el: HTMLElement, invalid: boolean) => {
        el.closest(".fld")?.classList.toggle("invalid", invalid);
        if (invalid) ok = false;
      };

      // Name, email and service are required. Phone is deliberately optional
      // and unvalidated — landline, mobile and WhatsApp formats all differ,
      // and a rejected valid number costs a lead.
      mark(name, !name.value.trim());
      mark(email, !EMAIL_RE.test(email.value.trim()));
      mark(svc, !svc.value);
      if (!ok) return;

      /**
       * Fire-and-forget: we intentionally do NOT await this.
       *
       * The Apps Script endpoint is `no-cors`, so the response is opaque and
       * tells us nothing anyway — and a cold start can take ~20 seconds. Waiting
       * for it left users staring at a "Sending…" state long enough to assume
       * the form had broken. The request still completes in the background.
       */
      void fetch(ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          name: name.value.trim(),
          email: email.value.trim(),
          phone: (document.getElementById("phone") as HTMLInputElement | null)?.value.trim() ?? "",
          service: svc.value,
          message: (document.getElementById("message") as HTMLTextAreaElement | null)?.value.trim() ?? "",
        }),
      }).catch(() => {
        // Swallowed: with no-cors there is no meaningful failure signal to act on.
      });

      form.style.display = "none";
      document.getElementById("formSuccess")?.classList.add("show");
    };

    form.addEventListener("submit", onSubmit);

    // Clear the red invalid state as soon as the user starts correcting a field,
    // rather than leaving it flagged until the next submit attempt.
    const fields = Array.from(
      form.querySelectorAll<HTMLElement>(".fld input, .fld textarea")
    );
    const clear = (el: HTMLElement) => () =>
      el.closest(".fld")?.classList.remove("invalid");
    const fieldHandlers = fields.map((el) => {
      const h = clear(el);
      el.addEventListener("input", h);
      return [el, h] as const;
    });

    return () => {
      form.removeEventListener("submit", onSubmit);
      service?.removeEventListener("change", onServiceChange);
      fieldHandlers.forEach(([el, h]) => el.removeEventListener("input", h));
    };
  }, []);

  return null;
}
