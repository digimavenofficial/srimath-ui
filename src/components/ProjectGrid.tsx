"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/types";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  initialProjects: Project[];
}

const FILTER_OPTIONS = [
  { label: "All", value: "all" },
  { label: "Ongoing Projects", value: "ongoing" },
  { label: "Upcoming Projects", value: "upcoming" },
  { label: "Completed Projects", value: "completed" },
];

function matchesFilter(project: Project, filterValue: string) {
  if (filterValue === "all") {
    return true;
  }

  const category = project.category?.toLowerCase() ?? "";
  const variant = project.variant?.toLowerCase() ?? "";
  const name = project.name?.toLowerCase() ?? "";
  const startsFrom = project.starts_from?.toLowerCase() ?? "";

  return [category, variant, name, startsFrom].some((value) =>
    value.includes(filterValue),
  );
}

export default function ProjectGrid({ initialProjects }: ProjectGridProps) {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredProjects = useMemo(
    () =>
      initialProjects.filter((project) =>
        matchesFilter(project, selectedFilter),
      ),
    [initialProjects, selectedFilter],
  );

  return (
    <div className="space-y-10 mt-20">
      <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#F69F11] font-semibold">
              Projects
            </p>
            <h1 className="mt-2 text-4xl font-bold text-gray-900">
              All Projects
            </h1>
            <p className="mt-3 text-gray-600 max-w-2xl">
              Browse every project in our portfolio. Use the filters to focus on ongoing, upcoming, or completed work.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {FILTER_OPTIONS.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setSelectedFilter(filter.value)}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                  selectedFilter === filter.value
                    ? "bg-[#F69F11] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="rounded-[2rem] border border-gray-200 bg-white p-10 text-center text-gray-600 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          No projects match the selected filter.
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
