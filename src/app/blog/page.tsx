import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components";
import { createSupabaseServerClient } from "@/lib/supabase.server";
import { getPublishedBlogs } from "@/services/blog.service";

export default async function BlogPage() {
  const supabase = await createSupabaseServerClient();
  const blogs = supabase ? await getPublishedBlogs(supabase) : [];

  return (
    <SiteShell>
      <section className="px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-10 mt-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F69F11]">
              Blog
            </p>
            <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">
              Insights, updates, and project stories.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Read the latest posts from SRIMATH Builders without logging in.
            </p>
          </div>

          {blogs.length === 0 ? (
            <div className="rounded-[2rem] border border-gray-200 bg-white p-8 text-gray-600 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              No published blog posts are available yet.
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {blogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.id}`}
                  className="group block overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(0,0,0,0.1)]"
                >
                  <article>
                    <div className="relative aspect-[16/10] bg-gray-100">
                      {blog.cover_image ? (
                        <Image
                          src={blog.cover_image}
                          alt={blog.title}
                          fill
                          className="object-cover transition duration-300 group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-gradient-to-br from-gray-200 to-gray-100 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                          SRIMATH
                        </div>
                      )}
                    </div>
                    <div className="space-y-4 p-6">
                      <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F69F11]">
                        <span>{blog.category ?? "General"}</span>
                        <span>{blog.is_published ? "Published" : "Draft"}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {blog.title}
                      </h2>
                      <p className="text-sm text-gray-500">
                        {blog.author
                          ? `By ${blog.author}`
                          : "By SRIMATH Builders"}
                      </p>
                      <p className="text-gray-600">
                        {blog.summary ?? blog.content.slice(0, 160)}
                      </p>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                        {(blog.tags ?? []).slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-gray-100 px-3 py-1"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm font-semibold text-[#C27A00]">
                        Read full article →
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </SiteShell>
  );
}
