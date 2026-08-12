"use client";

import Link from "next/link";
import type { Project } from "@/types";
import CountdownTimer from "./CountdownTimer";

interface ProjectDetailProps {
  project: Project;
}

function renderList(items?: string[] | null) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700">
          <span className="mt-1 text-[#F69F11]">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const detailTitle = project.detailed_title || project.name || "Project Details";
  const detailDescription = project.detailed_description || project.description || "More details coming soon.";
  const otherApartmentDetails = project.other_apartment_details ?? [];
  const amenities = project.amenities ?? [];
  const nearby = project.nearby ?? [];
  const progressImages = project.progress_images ?? [];

  return (
    <div className="space-y-10">
      <section className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[320px] bg-gray-100">
            {project.main_image_url ? (
              <img
                src={project.main_image_url}
                alt={project.title ?? project.name ?? "Project image"}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-gray-500">No image available</div>
            )}
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-[#F69F11] font-semibold">Project Overview</p>
            <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              {project.title ?? project.name}
            </h1>
            <p className="mt-4 text-gray-600">{project.description}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Flat Type</p>
                <p className="mt-1 font-semibold text-gray-900">{project.flat_type ?? "Details coming soon"}</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Deadline</p>
                <p className="mt-1 font-semibold text-gray-900">{project.deadline ?? "To be announced"}</p>
              </div>
            </div>

            <div className="mt-6">
              <CountdownTimer deadline={project.deadline} />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:srimathbuilders@example.com?subject=Enquiry%20for%20Project"
                className="rounded-xl bg-[#F69F11] px-5 py-3 font-semibold text-gray-900 transition hover:bg-amber-400"
              >
                Enquire Now
              </a>
              <Link href="/projects" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition hover:border-[#F69F11]">
                Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900">{detailTitle}</h2>
          <p className="mt-4 text-gray-600">{detailDescription}</p>

          {otherApartmentDetails.length > 0 && (
            <div className="mt-8 grid gap-4">
              {otherApartmentDetails.map((detail, index) => (
                <div key={`${detail.title}-${index}`} className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <h3 className="font-semibold text-gray-900">{detail.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{detail.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="rounded-[2rem] border border-gray-200 bg-white p-6 sm:p-8">
          {project.secondary_image_url ? (
            <div className="relative h-64 overflow-hidden rounded-2xl bg-gray-100">
              <img src={project.secondary_image_url} alt={`${project.title ?? project.name} overview`} className="h-full w-full object-cover" />
            </div>
          ) : null}

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-900">Amenities</h3>
            {renderList(amenities)}
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900">Nearby Places</h3>
            {renderList(nearby)}
          </div>
        </div>
      </section>

      {progressImages.length > 0 ? (
        <section className="rounded-[2rem] border border-gray-200 bg-white p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-[#F69F11] font-semibold">Progress Gallery</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900">Each Frame Shows your home in progress</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {progressImages.map((imageUrl, index) => (
              <div key={`${imageUrl}-${index}`} className="overflow-hidden rounded-[1.5rem] border border-gray-200 bg-gray-50 shadow-sm">
                <img src={imageUrl} alt={`Progress image ${index + 1}`} className="h-44 w-full object-cover" />
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
