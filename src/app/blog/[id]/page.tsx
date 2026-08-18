import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components";
import { createSupabaseServerClient } from "@/lib/supabase.server";
import { getPublishedBlogById } from "@/services/blog.service";

type BlogDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const numericId = Number(id);

  if (Number.isNaN(numericId)) {
    notFound();
  }

  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    notFound();
  }

  const blog = await getPublishedBlogById(supabase, numericId);

  if (!blog) {
    notFound();
  }

  return (
    <SiteShell>
      <section className="px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto mt-20 max-w-4xl">
          <article className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <div className="relative aspect-[16/8] bg-gray-100">
              {blog.cover_image ? (
                <Image
                  src={blog.cover_image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-gray-200 to-gray-100 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                  SRIMATH
                </div>
              )}
            </div>

            <div className="space-y-6 p-8 sm:p-10">
              <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F69F11]">
                <span>{blog.category ?? "General"}</span>
                <span>{blog.publishedDate ?? blog.created_at.slice(0, 10)}</span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {blog.title}
              </h1>

              <p className="text-sm text-gray-500">
                {blog.author ? `By ${blog.author}` : "By SRIMATH Builders"}
              </p>

              {blog.summary ? (
                <p className="rounded-2xl bg-gray-50 p-5 text-gray-700">
                  {blog.summary}
                </p>
              ) : null}

              <div className="prose prose-gray max-w-none whitespace-pre-line text-gray-700">
                {blog.content}
              </div>

              {(blog.tags ?? []).length > 0 ? (
                <div className="flex flex-wrap gap-2 border-t border-gray-100 pt-6 text-sm text-gray-500">
                  {blog.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-gray-100 px-3 py-1">
                      #{tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
