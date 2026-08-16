import type { SupabaseClient } from "@supabase/supabase-js";
import type { BlogFormValues, BlogRecord } from "@/types";
import { composeBlogContent, normalizeBlogRecord } from "@/lib/blog";

export async function removeStorageFileByUrl(
  client: SupabaseClient,
  url?: string | null,
) {
  if (!url) {
    return false;
  }

  const bucketNames = ["project-images", "blog-images", "images"];

  try {
    const parsedUrl = new URL(url);
    const pathname = decodeURIComponent(parsedUrl.pathname);

    for (const bucketName of bucketNames) {
      const prefix = `/storage/v1/object/public/${bucketName}/`;

      if (!pathname.includes(prefix)) {
        continue;
      }

      const objectPath = pathname.slice(prefix.length).replace(/^\/+/, "");
      const { error } = await client.storage
        .from(bucketName)
        .remove([objectPath]);

      if (error) {
        throw new Error(error.message);
      }

      return true;
    }
  } catch {
    return false;
  }

  return false;
}

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
  const { data: existingBlog, error: fetchError } = await client
    .from("blog")
    .select("cover_image")
    .eq("id", id)
    .single();

  if (fetchError && fetchError.code !== "PGRST116") {
    throw new Error(fetchError.message);
  }

  const { error } = await client.from("blog").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  if (existingBlog?.cover_image) {
    try {
      await removeStorageFileByUrl(client, existingBlog.cover_image);
    } catch {
      // Ignore storage cleanup failures to avoid breaking the delete action.
    }
  }
}

export async function uploadImage(
  client: SupabaseClient,
  file: File,
  blogId: string,
) {
  const MAX_FILE_SIZE_KB = 50;
  const fileSizeInKB = file.size / 1024;

  if (fileSizeInKB > MAX_FILE_SIZE_KB) {
    throw new Error("Image must be 50KB or smaller.");
  }

  const fileName = `${blogId}/${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
  const { data: uploadData, error: uploadError } = await client.storage
    .from("project-images")
    .upload(fileName, file, {
      cacheControl: "3600",
      upsert: true,
    });

  if (uploadError) {
    throw new Error(uploadError.message || `Upload failed for ${file.name}`);
  }

  if (!uploadData?.path) {
    throw new Error("Upload completed but returned no file path.");
  }

  const { data } = client.storage.from("project-images").getPublicUrl(fileName);

  if (!data?.publicUrl) {
    throw new Error("Unable to generate a public URL for the uploaded image.");
  }

  return data.publicUrl;
}
