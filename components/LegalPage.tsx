import type { ReactNode } from "react";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getBreadcrumbSchema } from "@/lib/schemas";

/** Shared layout for the Terms and Privacy pages: same reading column as blog posts. */
export default function LegalPage({
  title,
  intro,
  path,
  updated,
  children,
}: {
  title: string;
  intro: string;
  path: string;
  /** ISO date the text was last changed. */
  updated: string;
  children: ReactNode;
}) {
  const updatedLabel = new Date(updated).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  return (
    <>
      <JsonLd schema={getBreadcrumbSchema([{ name: title, path }])} />
      <header className="phero">
        <div className="wrap phero-inner">
          <Breadcrumbs trail={[{ name: title, path }]} />
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </header>
      <section className="post-sec">
        <div className="wrap">
          <article className="post-body">
            <p className="post-meta">
              Last updated <time dateTime={updated}>{updatedLabel}</time>
            </p>
            {children}
          </article>
        </div>
      </section>
    </>
  );
}
