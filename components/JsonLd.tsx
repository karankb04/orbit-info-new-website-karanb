/**
 * Injects a JSON-LD block.
 *
 * Rendered as a plain <script type="application/ld+json"> in the server-rendered
 * HTML so it is present in the initial response — structured data added later by
 * client JS is unreliable for crawlers.
 *
 * `null` schemas are skipped, which lets callers pass a conditional generator
 * (e.g. getFaqSchema, which returns null when a page has no FAQs) without
 * guarding at every call site.
 */
export default function JsonLd({ schema }: { schema: Record<string, unknown> | null }) {
  if (!schema) return null;
  return (
    <script
      type="application/ld+json"
      // Schema objects are built from our own typed config, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
