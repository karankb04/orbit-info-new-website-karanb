import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getBreadcrumbSchema } from "@/lib/schemas";
import { buildMetadata } from "@/lib/metadata";
import { getAllPosts } from "@/lib/posts";

export const metadata = buildMetadata({
  title: "Blog — IT, CCTV & Backup Advice for Mumbai Businesses",
  description:
    "Practical advice on laptop repair, CCTV installation, Tally and data backup from Orbit IT Solutions — Mumbai's IT partner since 1998.",
  path: "/blog",
});

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <JsonLd schema={getBreadcrumbSchema([{ name: "Blog", path: "/blog" }])} />

      <header className="phero">
        <div className="wrap phero-inner">
          <Breadcrumbs trail={[{ name: "Blog", path: "/blog" }]} />
          <h1>
            Advice, <span className="grad">not sales talk.</span>
          </h1>
          <p>
            What we&rsquo;ve learned fixing laptops, wiring cameras and rescuing data across
            Mumbai and Thane since 1998.
          </p>
        </div>
      </header>

      <section className="blog-sec">
        <div className="wrap">
          {posts.length === 0 ? (
            <p className="blog-empty">
              First articles are on the way. In the meantime,{" "}
              <Link href="/contact">tell us what you need</Link>.
            </p>
          ) : (
            <ul className="blog-list">
              {posts.map((post) => (
                <li key={post.slug} className="blog-card reveal">
                  <article>
                    <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
                    <h2>
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p>{post.description}</p>
                    <Link href={`/blog/${post.slug}`} className="blog-more">
                      Read more <span className="arr">→</span>
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
