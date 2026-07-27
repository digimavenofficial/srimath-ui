import { supabase } from "@/lib/supabase";

export async function getAllBlogs() {
  const { data, error } = await supabase
    .from("blog")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}