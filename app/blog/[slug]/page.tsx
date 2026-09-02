import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getBreadcrumbSchema, getBlogPostingSchema } from "@/lib/schemas";
import { buildMetadata } from "@/lib/metadata";
import { getAllPosts, getPost } from "@/lib/posts";

/** Every post is known at build time, so all of them are statically generated. */
export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  // A missing post still needs valid metadata; the page itself returns 404.
  if (!post) return buildMetadata({ title: "Not found", description: "", path: `/blog/${slug}`, noindex: true });

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.datePublished,
    ...(post.image && { image: post.image }),
  });
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        schema={getBreadcrumbSchema([
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd schema={getBlogPostingSchema(post)} />

      <header className="phero">
        <div className="wrap phero-inner">
          <Breadcrumbs trail={[{ name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }]} />
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </div>
      </header>

      <section className="post-sec">
        <div className="wrap">
          {/* <article> gives the post an explicit content boundary. */}
          <article className="post-body">
            <p className="post-meta">
              <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
            </p>
            {/*
              Markdown is converted to HTML at build time by remark. The source
              is our own content directory, never user input.
            */}
            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          </article>
        </div>
      </section>
    </>
  );
}
