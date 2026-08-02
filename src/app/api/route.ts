import { NextResponse } from "next/server";
import { getAllBlogs } from "@/services/blog.service";
import { createSupabaseServerClient } from "@/lib/supabase.server";

export async function GET() {
  try {
    const supabase = await createSupabaseServerClient();

    if (!supabase) {
      return NextResponse.json(
        { message: "Supabase is not configured" },
        { status: 500 },
      );
    }

    const blogs = await getAllBlogs(supabase);

    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch blogs" },
      { status: 500 },
    );
  }
}
