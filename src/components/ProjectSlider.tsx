"use client";

import { useState, useEffect } from "react";
import type { Project } from "@/types";
import ProjectCard from "./ProjectCard";

interface ProjectSliderProps {
  projects?: Project[];
}

export default function ProjectSlider({ projects = [] }: ProjectSliderProps) {
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
      const maxIndex = Math.ceil(projects.length / projectsPerView) - 1;
      return prev < maxIndex ? prev + 1 : 0;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.ceil(projects.length / projectsPerView) - 1;
      return prev > 0 ? prev - 1 : maxIndex;
    });
  };

  const visibleProjects = projects.slice(
    currentIndex,
    currentIndex + projectsPerView,
  );
  const totalSlides = Math.max(1, Math.ceil(projects.length / projectsPerView));
  const hasProjects = projects.length > 0;

  useEffect(() => {
    const maxIndex = Math.max(
      0,
      Math.ceil(projects.length / projectsPerView) - 1,
    );
    if (currentIndex > maxIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex, projects.length, projectsPerView]);

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
            {hasProjects ? (
              visibleProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <p className="col-span-full rounded-2xl border border-gray-200 bg-white p-8 text-center text-gray-500">
                Projects will be displayed here once they are available.
              </p>
            )}
          </div>
        </div>

        {/* Navigation and Pagination */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            disabled={!hasProjects}
            className="p-3 rounded-full border-2 border-[#F69F11] text-[#F69F11] hover:bg-[#F69F11] hover:text-white transition-all"
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
                  i === currentIndex ? "bg-[#F69F11] w-8" : "bg-gray-300"
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
            disabled={!hasProjects}
            className="p-3 rounded-full border-2 border-[#F69F11] text-[#F69F11] hover:bg-[#F69F11] hover:text-white transition-all"
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
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#F69F11] text-[#F69F11] font-bold rounded-lg hover:bg-[#F69F11] hover:text-white transition-all transform hover:scale-105"
          >
            VIEW ALL PROJECTS
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
