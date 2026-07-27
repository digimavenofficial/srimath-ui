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

export default function Home() {
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
      <ProjectSlider />

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
