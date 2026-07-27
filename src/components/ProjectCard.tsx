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

        {/* Status Badge */}
        <div className="absolute top-4 left-4 bg-[#8b1e23] text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold">
          {project.status}
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-white text-[#8b1e23] px-4 py-2 rounded-full text-xs sm:text-sm font-bold">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          {project.title}
        </h3>

        {/* Subtitle */}
        <p className="text-[#8b1e23] font-semibold mb-4">{project.subtitle}</p>

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
        <div className="flex gap-4 flex-col sm:flex-row">
          <button className="flex-1 px-6 py-3 bg-[#8b1e23] text-white font-bold rounded-lg hover:bg-red-900 transition-all transform hover:scale-105">
            ENTER NOW →
          </button>
          <button className="flex-1 px-6 py-3 border-2 border-[#8b1e23] text-[#8b1e23] font-bold rounded-lg hover:bg-[#8b1e23] hover:text-white transition-all transform hover:scale-105">
            MORE DETAILS →
          </button>
        </div>
      </div>
    </div>
  );
}
