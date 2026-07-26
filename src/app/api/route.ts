import { NextResponse } from "next/server";
import { getAllBlogs } from "@/services/blog.service";

export async function GET() {
  try {
    const blogs = await getAllBlogs();

    return NextResponse.json(blogs, { status: 200 });

  } catch (error) {

    return NextResponse.json(
      {
        message: "Failed to fetch blogs"
      },
      {
        status: 500
      }
    );
  }
}