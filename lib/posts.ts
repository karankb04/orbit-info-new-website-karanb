/**
 * Markdown blog loader.
 *
 * Posts are .md files in /content/blog with YAML frontmatter. They are read at
 * build time (these functions run only in Server Components and generateStaticParams),
 * so no CMS, no database, and no runtime cost — every post ships as static HTML,
 * which is both the fastest and the most reliably crawlable option.
 */

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  tags: string[];
};

export type Post = PostMeta & { contentHtml: string };

/** Frontmatter fields every post must define. A post missing any is a build error. */
const REQUIRED = ["title", "description", "datePublished"] as const;

function readPostFile(fileName: string): { slug: string; data: Record<string, unknown>; content: string } {
  const slug = fileName.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, fileName), "utf8");
  const { data, content } = matter(raw);

  /**
   * Fail the build on incomplete frontmatter rather than rendering a post with
   * an empty <title> or a missing date. A silently broken post is worse than a
   * failed deploy: it gets indexed before anyone notices.
   */
  for (const field of REQUIRED) {
    if (!data[field]) {
      throw new Error(
        `content/blog/${fileName}: missing required frontmatter field "${field}".`
      );
    }
  }
  return { slug, data, content };
}

/** All posts, newest first. Returns [] when no posts exist yet. */
export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((fileName) => {
      const { slug, data } = readPostFile(fileName);
      return {
        slug,
        title: String(data.title),
        description: String(data.description),
        datePublished: String(data.datePublished),
        ...(data.dateModified ? { dateModified: String(data.dateModified) } : {}),
        ...(data.image ? { image: String(data.image) } : {}),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      };
    })
    // Sort by date desc, tie-broken by slug so ordering is deterministic across
    // builds — an unstable sort makes pagination and sitemaps flap between deploys.
    .sort((a, b) =>
      b.datePublished.localeCompare(a.datePublished) || a.slug.localeCompare(b.slug)
    );
}

/** One post with rendered HTML, or null when the slug does not exist. */
export async function getPost(slug: string): Promise<Post | null> {
  const fileName = `${slug}.md`;
  if (!fs.existsSync(path.join(POSTS_DIR, fileName))) return null;

  const { data, content } = readPostFile(fileName);
  const processed = await remark().use(html).process(content);

  return {
    slug,
    title: String(data.title),
    description: String(data.description),
    datePublished: String(data.datePublished),
    ...(data.dateModified ? { dateModified: String(data.dateModified) } : {}),
    ...(data.image ? { image: String(data.image) } : {}),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    contentHtml: processed.toString(),
  };
}
