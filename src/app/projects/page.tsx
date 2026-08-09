import { SiteShell } from "@/components";
import { createSupabaseServerClient } from "@/lib/supabase.server";
import { getAllProjects } from "@/services/project.service";
import ProjectGrid from "@/components/ProjectGrid";

export default async function ProjectsPage() {
  const supabase = await createSupabaseServerClient();
  const projects = supabase ? await getAllProjects(supabase) : [];

  return (
    <SiteShell>
      <section className="px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <ProjectGrid initialProjects={projects} />
        </div>
      </section>
    </SiteShell>
  );
}
