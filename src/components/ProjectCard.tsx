"use client";

import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`} className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      <div className="relative h-64 sm:h-80 overflow-hidden bg-gray-200">
        {project.main_image_url || project.image ? (
          <img
            src={project.main_image_url ?? project.image}
            alt={project.title ?? project.name ?? "Project image"}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-500">No image available</div>
        )}

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

        <div className="flex items-center justify-between text-sm font-semibold text-[#F69F11]">
          <span>View details</span>
          <span>→</span>
        </div>
      </div>
    </Link>
  );
}
