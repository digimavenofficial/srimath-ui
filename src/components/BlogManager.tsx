"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { BlogFormValues, BlogRecord } from "@/types";
import { buildBlogFormValues } from "@/lib/blog";
import { createSupabaseBrowserClient } from "@/lib/supabase";
import { createBlog, deleteBlog, updateBlog } from "@/services/blog.service";

interface BlogManagerProps {
  initialBlogs: BlogRecord[];
}

const emptyFormValues: BlogFormValues = buildBlogFormValues();

export default function BlogManager({ initialBlogs }: BlogManagerProps) {
  const router = useRouter();
  const [blogs, setBlogs] = useState(initialBlogs);
  const [formValues, setFormValues] = useState<BlogFormValues>(emptyFormValues);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const sortedBlogs = useMemo(() => blogs, [blogs]);

  const resetForm = () => {
    setFormValues(emptyFormValues);
    setEditingId(null);
  };

  const handleChange = (
    field: keyof BlogFormValues,
    value: string | boolean,
  ) => {
    setFormValues((current) => ({ ...current, [field]: value }));
  };

  const handleEdit = (blog: BlogRecord) => {
    setEditingId(blog.id);
    setFormValues(buildBlogFormValues(blog));
    document
      .getElementById("blog-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDelete = async (id: number) => {
    if (
      !window.confirm("Delete this blog post? This action cannot be undone.")
    ) {
      return;
    }

    const supabase = createSupabaseBrowserClient();

    if (!supabase) {
      setError("Supabase credentials are not configured yet.");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      await deleteBlog(supabase, id);
      setBlogs((current) => current.filter((blog) => blog.id !== id));
      setMessage("Blog deleted successfully.");
      router.refresh();
    } catch (deleteError) {
      setError(
        deleteError instanceof Error
          ? deleteError.message
          : "Failed to delete blog.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const supabase = createSupabaseBrowserClient();

    if (!supabase) {
      setError("Supabase credentials are not configured yet.");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      if (editingId) {
        const updatedBlog = await updateBlog(supabase, editingId, formValues);
        setBlogs((current) =>
          current.map((blog) => (blog.id === editingId ? updatedBlog : blog)),
        );
        setMessage("Blog updated successfully.");
      } else {
        const createdBlog = await createBlog(supabase, formValues);
        setBlogs((current) => [createdBlog, ...current]);
        setMessage("Blog created successfully.");
      }

      resetForm();
      router.refresh();
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Failed to save blog.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-10">
      <section className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#F69F11] font-semibold">
              Admin Dashboard
            </p>
            <h1 className="mt-2 text-3xl font-bold text-gray-900">
              Blog Management
            </h1>
          </div>
          <button
            type="button"
            onClick={resetForm}
            className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-[#F69F11] hover:text-gray-950"
          >
            New Blog
          </button>
        </div>

        {(message || error) && (
          <div className="mt-6 space-y-3">
            {message && (
              <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                {message}
              </div>
            )}
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}
          </div>
        )}
      </section>

      <section
        id="blog-form"
        className="rounded-[2rem] border border-gray-200 bg-white p-6 sm:p-8"
      >
        <h2 className="text-2xl font-bold text-gray-900">
          {editingId ? "Edit Blog" : "Create Blog"}
        </h2>
        <form
          className="mt-6 grid gap-5 md:grid-cols-2"
          onSubmit={handleSubmit}
        >
          <label className="space-y-2 md:col-span-2">
            <span className="text-sm font-medium text-gray-700">Title</span>
            <input
              required
              value={formValues.title}
              onChange={(event) => handleChange("title", event.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-gray-700">Slug</span>
            <input
              value={formValues.slug}
              onChange={(event) => handleChange("slug", event.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-gray-700">
              Featured Image URL
            </span>
            <input
              value={formValues.coverImage}
              onChange={(event) =>
                handleChange("coverImage", event.target.value)
              }
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
            />
          </label>

          <label className="space-y-2 md:col-span-2">
            <span className="text-sm font-medium text-gray-700">
              Short Description
            </span>
            <textarea
              value={formValues.summary}
              onChange={(event) => handleChange("summary", event.target.value)}
              rows={3}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
            />
          </label>

          <label className="space-y-2 md:col-span-2">
            <span className="text-sm font-medium text-gray-700">Content</span>
            <textarea
              required
              value={formValues.content}
              onChange={(event) => handleChange("content", event.target.value)}
              rows={8}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-gray-700">Author</span>
            <input
              value={formValues.author}
              onChange={(event) => handleChange("author", event.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-gray-700">Category</span>
            <input
              value={formValues.category}
              onChange={(event) => handleChange("category", event.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-gray-700">Tags</span>
            <input
              value={formValues.tags}
              onChange={(event) => handleChange("tags", event.target.value)}
              placeholder="homes, chennai, luxury"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-gray-700">
              Published Date
            </span>
            <input
              type="date"
              value={formValues.publishedDate}
              onChange={(event) =>
                handleChange("publishedDate", event.target.value)
              }
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
            />
          </label>

          <label className="flex items-center gap-3 rounded-xl border border-gray-300 px-4 py-3 md:col-span-2">
            <input
              type="checkbox"
              checked={formValues.isPublished}
              onChange={(event) =>
                handleChange("isPublished", event.target.checked)
              }
              className="h-4 w-4 rounded border-gray-300"
            />
            <span className="text-sm font-medium text-gray-700">
              Publish Status
            </span>
          </label>

          <div className="md:col-span-2 flex gap-3">
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-[#F69F11] px-5 py-3 font-semibold text-gray-900 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Saving..."
                : editingId
                  ? "Update Blog"
                  : "Create Blog"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition hover:border-[#F69F11]"
              >
                Cancel Edit
              </button>
            )}
          </div>
        </form>
      </section>

      <section className="rounded-[2rem] border border-gray-200 bg-white p-6 sm:p-8">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-2xl font-bold text-gray-900">Existing Blogs</h2>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
            {sortedBlogs.length} posts
          </span>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-3">
            <thead>
              <tr className="text-left text-sm uppercase tracking-[0.2em] text-gray-500">
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Author</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Published</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedBlogs.map((blog) => (
                <tr
                  key={blog.id}
                  className="rounded-2xl bg-gray-50 text-sm text-gray-700"
                >
                  <td className="px-4 py-4 font-semibold text-gray-900">
                    {blog.title}
                  </td>
                  <td className="px-4 py-4">{blog.author ?? "—"}</td>
                  <td className="px-4 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${blog.is_published ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-600"}`}
                    >
                      {blog.is_published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    {blog.publishedDate ?? blog.created_at.slice(0, 10)}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => handleEdit(blog)}
                        className="rounded-lg border border-gray-300 px-3 py-2 text-xs font-semibold transition hover:border-[#F69F11]"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(blog.id)}
                        className="rounded-lg border border-red-200 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
