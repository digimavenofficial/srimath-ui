import { notFound } from "next/navigation";
import { SiteShell } from "@/components";
import ProjectDetail from "@/components/ProjectDetail";
import { createSupabaseServerClient } from "@/lib/supabase.server";
import { getProjectById } from "@/services/project.service";

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    notFound();
  }

  const project = await getProjectById(supabase, Number(id));

  if (!project) {
    notFound();
  }

  return (
    <SiteShell>
      <section className="px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <ProjectDetail project={project} />
        </div>
      </section>
    </SiteShell>
  );
}
