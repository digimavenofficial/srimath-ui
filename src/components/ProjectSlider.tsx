"use client";

import { useState, useEffect } from "react";
import { PROJECTS } from "@/constants";
import ProjectCard from "./ProjectCard";

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsPerView, setProjectsPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setProjectsPerView(window.innerWidth < 768 ? 1 : 2);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.ceil(PROJECTS.length / projectsPerView) - 1;
      return prev < maxIndex ? prev + 1 : 0;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.ceil(PROJECTS.length / projectsPerView) - 1;
      return prev > 0 ? prev - 1 : maxIndex;
    });
  };

  const visibleProjects = PROJECTS.slice(
    currentIndex,
    currentIndex + projectsPerView,
  );
  const totalSlides = Math.ceil(PROJECTS.length / projectsPerView);

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of premium residential and commercial projects
            that define modern living in Chennai.
          </p>
        </div>

        {/* Slider Container */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Navigation and Pagination */}
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="p-3 rounded-full border-2 border-[#8b1e23] text-[#8b1e23] hover:bg-[#8b1e23] hover:text-white transition-all"
            aria-label="Previous projects"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Pagination Indicator */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentIndex ? "bg-[#8b1e23] w-8" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <span className="text-lg font-bold text-gray-700 min-w-20 text-center">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(totalSlides).padStart(2, "0")}
          </span>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="p-3 rounded-full border-2 border-[#8b1e23] text-[#8b1e23] hover:bg-[#8b1e23] hover:text-white transition-all"
            aria-label="Next projects"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#8b1e23] text-[#8b1e23] font-bold rounded-lg hover:bg-[#8b1e23] hover:text-white transition-all transform hover:scale-105"
          >
            VIEW ALL PROJECTS
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
