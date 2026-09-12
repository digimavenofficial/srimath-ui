import Image from "next/image";
import {
  Header,
  Hero,
  PartnershipSection,
  ProjectsIntroSection,
  ProjectSlider,
  Testimonials,
  Footer,
  WhatsAppButton,
  ScrollToTop,
} from "@/components";
import { createSupabaseServerClient } from "@/lib/supabase.server";
import { getAllProjects } from "@/services/project.service";

export default async function Home() {
  const supabase = await createSupabaseServerClient();
  const projects = supabase ? await getAllProjects(supabase) : [];

  return (
    <main className="w-full">
      {/* Header/Navigation */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Partnership Section */}
      <PartnershipSection />

      {/* Projects Introduction */}
      <ProjectsIntroSection />

      {/* Projects Slider */}
      <ProjectSlider projects={projects} />

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />

      {/* Floating Buttons */}
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
}
