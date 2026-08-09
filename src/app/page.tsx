import Image from "next/image";
import {
  Header,
  Hero,
  PartnershipSection,
  StatsSection,
  VideoShowcase,
  ProjectsIntroSection,
  ProjectSlider,
  WhyChooseUs,
  Testimonials,
  CTASection,
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

      {/* Statistics Section */}
      <StatsSection />

      {/* Video Showcase */}
      <VideoShowcase />

      {/* Projects Introduction */}
      <ProjectsIntroSection />

      {/* Projects Slider */}
      <ProjectSlider projects={projects} />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <CTASection />

      {/* Footer */}
      <Footer />

      {/* Floating Buttons */}
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
}
