"use client";

import Image from "next/image";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      {/* Image Container */}
      <div className="relative h-64 sm:h-80 overflow-hidden bg-gray-200">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Status / Variant Badge */}
        <div className="absolute top-4 left-4 bg-[#F69F11] text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold">
          {project.variant ?? project.status ?? "Project"}
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-white text-[#F69F11] px-4 py-2 rounded-full text-xs sm:text-sm font-bold">
          {project.category ?? "General"}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          {project.name ?? project.title}
        </h3>

        {/* Subtitle */}
        <p className="text-[#F69F11] font-semibold mb-4">
          {project.subtitle ?? project.variant ?? project.starts_from}
        </p>

        {/* Location */}
        <p className="text-gray-600 mb-6 flex items-center gap-2">
          <span>📍</span>
          {project.location}
        </p>

        {/* Description */}
        {project.description && (
          <p className="text-gray-700 text-sm mb-6 line-clamp-2">
            {project.description}
          </p>
        )}

        {/* Buttons */}
        {/* <div className="flex gap-4 flex-col sm:flex-row">
          <a
          href="/projects"
          className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-[#F69F11] text-white font-bold rounded-lg hover:bg-amber-400 transition-all transform hover:scale-105"
        >
          VIEW PROJECTS →
        </a>
        <button className="flex-1 px-6 py-3 border-2 border-[#F69F11] text-[#F69F11] font-bold rounded-lg hover:bg-[#F69F11] hover:text-white transition-all transform hover:scale-105">
          MORE DETAILS →
        </button>
        </div> */}
      </div>
    </div>
  );
}
