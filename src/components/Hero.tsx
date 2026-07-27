"use client";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1604813614405-92fc801d440d?w=1920&h=1080&fit=crop"
      >
        <source src="/videos/hero_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Tag */}
        <div className="inline-block mb-6 px-6 py-3 bg-[#8b1e23] rounded-full">
          <p className="text-sm font-semibold tracking-wide">
            BEST BUILDER IN CHENNAI
          </p>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Building Spaces.
          <br />
          Creating Legacies.
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          At SRIMATH Builders, we're committed to delivering premium residential
          and commercial spaces that redefine modern living in Chennai. Quality,
          trust, and excellence define every project.
        </p>

        {/* CTA Button */}
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById("projects");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#8b1e23] text-white font-bold rounded-lg hover:bg-red-900 transition-all transform hover:scale-105"
        >
          EXPLORE OUR PROJECTS
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
