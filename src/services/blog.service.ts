import type { SupabaseClient } from "@supabase/supabase-js";
import type { BlogFormValues, BlogRecord } from "@/types";
import { composeBlogContent, normalizeBlogRecord } from "@/lib/blog";

type BlogRow = {
  id: number;
  title: string;
  content: string;
  summary: string | null;
  cover_image: string | null;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

function mapBlogRow(row: BlogRow): BlogRecord {
  return normalizeBlogRecord({
    ...row,
    slug: "",
    author: "",
    category: "",
    tags: [],
    publishedDate: "",
  });
}

export async function getPublishedBlogs(client: SupabaseClient) {
  const { data, error } = await client
    .from("blog")
    .select("*")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map((blog) => mapBlogRow(blog as BlogRow));
}

export async function getAllBlogs(client: SupabaseClient) {
  const { data, error } = await client
    .from("blog")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map((blog) => mapBlogRow(blog as BlogRow));
}

export async function getBlogById(client: SupabaseClient, id: number) {
  const { data, error } = await client
    .from("blog")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      return null;
    }

    throw new Error(error.message);
  }

  return mapBlogRow(data as BlogRow);
}

export async function createBlog(
  client: SupabaseClient,
  values: BlogFormValues,
) {
  const { data, error } = await client
    .from("blog")
    .insert({
      title: values.title,
      summary: values.summary || null,
      cover_image: values.coverImage || null,
      content: composeBlogContent(values),
      is_published: values.isPublished,
    })
    .select("*")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return mapBlogRow(data as BlogRow);
}

export async function updateBlog(
  client: SupabaseClient,
  id: number,
  values: BlogFormValues,
) {
  const { data, error } = await client
    .from("blog")
    .update({
      title: values.title,
      summary: values.summary || null,
      cover_image: values.coverImage || null,
      content: composeBlogContent(values),
      is_published: values.isPublished,
    })
    .eq("id", id)
    .select("*")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return mapBlogRow(data as BlogRow);
}

export async function deleteBlog(client: SupabaseClient, id: number) {
  const { error } = await client.from("blog").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}
