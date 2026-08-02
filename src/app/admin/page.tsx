import { redirect } from "next/navigation";
import { SiteShell, BlogManager } from "@/components";
import { createSupabaseServerClient } from "@/lib/supabase.server";
import { getAllBlogs } from "@/services/blog.service";

export default async function AdminPage() {
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    redirect("/login");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const blogs = await getAllBlogs(supabase);

  return (
    <SiteShell headerVariant="admin">
      <section className="px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <BlogManager initialBlogs={blogs} />
        </div>
      </section>
    </SiteShell>
  );
}
