import Link from "next/link";

/**
 * Visible breadcrumb trail, rendered as a real <nav><ol>.
 *
 * The reference audit flagged non-semantic breadcrumbs (a <div> with a text
 * separator) as a gap: the JSON-LD was correct but the markup did no work for
 * assistive tech. This mirrors the BreadcrumbList schema exactly — same items,
 * same order — so the visible trail and the structured data always agree.
 */
export default function Breadcrumbs({ trail }: { trail: { name: string; path: string }[] }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <ol>
        <li><Link href="/">Home</Link></li>
        {trail.map((item, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={item.path}>
              <span className="sep" aria-hidden="true">/</span>
              {isLast ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <Link href={item.path}>{item.name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
