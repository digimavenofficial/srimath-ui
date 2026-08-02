import type { BlogFormValues, BlogMetadata, BlogRecord } from "@/types";

const META_START = "<!-- srimath-blog-meta";
const META_END = "srimath-blog-meta -->";

function parseTags(tags: unknown): string[] {
  if (Array.isArray(tags)) {
    return tags.map((tag) => String(tag).trim()).filter(Boolean);
  }

  if (typeof tags === "string") {
    return tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
  }

  return [];
}

export function parseBlogContent(content: string) {
  const trimmedContent = content.trim();
  const match = trimmedContent.match(
    /^<!-- srimath-blog-meta\n([\s\S]*?)\nsrimath-blog-meta -->\n?([\s\S]*)$/,
  );

  if (!match) {
    return {
      metadata: { tags: [] } satisfies BlogMetadata,
      body: trimmedContent,
    };
  }

  try {
    const parsed = JSON.parse(match[1]) as Partial<BlogMetadata>;

    return {
      metadata: {
        slug: parsed.slug,
        author: parsed.author,
        category: parsed.category,
        tags: parseTags(parsed.tags),
        publishedDate: parsed.publishedDate,
      } satisfies BlogMetadata,
      body: match[2].trim(),
    };
  } catch {
    return {
      metadata: { tags: [] } satisfies BlogMetadata,
      body: trimmedContent,
    };
  }
}

export function composeBlogContent(values: BlogFormValues) {
  const metadata: BlogMetadata = {
    slug: values.slug.trim(),
    author: values.author.trim(),
    category: values.category.trim(),
    tags: parseTags(values.tags),
    publishedDate: values.publishedDate.trim(),
  };

  return `${META_START}\n${JSON.stringify(metadata)}\n${META_END}\n\n${values.content.trim()}`;
}

export function buildBlogFormValues(blog?: BlogRecord): BlogFormValues {
  if (!blog) {
    return {
      title: "",
      slug: "",
      coverImage: "",
      summary: "",
      content: "",
      author: "",
      category: "",
      tags: "",
      publishedDate: new Date().toISOString().slice(0, 10),
      isPublished: false,
    };
  }

  const parsed = parseBlogContent(blog.content);

  return {
    title: blog.title,
    slug: parsed.metadata.slug ?? "",
    coverImage: blog.cover_image ?? "",
    summary: blog.summary ?? "",
    content: parsed.body,
    author: parsed.metadata.author ?? "",
    category: parsed.metadata.category ?? "",
    tags: parsed.metadata.tags.join(", "),
    publishedDate:
      parsed.metadata.publishedDate ?? blog.created_at.slice(0, 10),
    isPublished: blog.is_published,
  };
}

export function normalizeBlogRecord(blog: BlogRecord): BlogRecord {
  const parsed = parseBlogContent(blog.content);

  return {
    ...blog,
    ...parsed.metadata,
    tags: parsed.metadata.tags,
    content: parsed.body,
  };
}
