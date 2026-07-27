"use client";
import { url } from "inspector";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Home() {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    loadBlogs();
  }, []);

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  async function loadBlogs() {
    const response = await fetch(`${url}/rest/v1/blog`, {
      method: "GET",
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    setBlogs(data);
  }

  return (
    <div>
      <h1>Welcome to Next.js!!!</h1>
      <h2>Blogs</h2>
      {blogs.length === 0 ? (
        <p>No blogs found</p>
      ) : (
        blogs.map((blog) => (
          <div
            key={blog.id}
            style={{
              border: "1px solid gray",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </div>
        ))
      )}
    </div>
  );
}
