"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { Project, ProjectFormValues } from "@/types";
import { createSupabaseBrowserClient } from "@/lib/supabase";
import {
  createProject,
  deleteProject,
  updateProject,
} from "@/services/project.service";

interface ProjectManagerProps {
  initialProjects: Project[];
}

const emptyFormValues: ProjectFormValues = {
  name: "",
  location: "",
  size: "",
  category: "",
  variant: "",
  image: "",
  startsFrom: "",
  status: "",
};

export default function ProjectManager({ initialProjects }: ProjectManagerProps) {
  const router = useRouter();
  const [projects, setProjects] = useState(initialProjects);
  const [formValues, setFormValues] = useState<ProjectFormValues>(emptyFormValues);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const sortedProjects = useMemo(() => projects, [projects]);

  const resetForm = () => {
    setFormValues(emptyFormValues);
    setEditingId(null);
  };

  const handleChange = (field: keyof ProjectFormValues, value: string) => {
    setFormValues((current) => ({ ...current, [field]: value }));
  };

  const handleEdit = (project: Project) => {
    setEditingId(project.id);
    setFormValues({
      name: project.name ?? "",
      location: project.location ?? "",
      size: project.size ?? "",
      category: project.category ?? "",
      variant: project.variant ?? "",
      image: project.image ?? "",
      startsFrom: project.starts_from ?? "",
      status: project.status ?? "",
    });
    document
      .getElementById("project-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Delete this project? This action cannot be undone.")) {
      return;
    }

    const supabase = createSupabaseBrowserClient();

    if (!supabase) {
      setError("Supabase is not configured yet.");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      await deleteProject(supabase, id);
      setProjects((current) => current.filter((project) => project.id !== id));
      setMessage("Project deleted successfully.");
      router.refresh();
    } catch (deleteError) {
      setError(
        deleteError instanceof Error
          ? deleteError.message
          : "Failed to delete project.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const supabase = createSupabaseBrowserClient();

    if (!supabase) {
      setError("Supabase is not configured yet.");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      if (editingId) {
        const updatedProject = await updateProject(
          supabase,
          editingId,
          formValues,
        );

        setProjects((current) =>
          current.map((project) =>
            project.id === editingId ? updatedProject : project,
          ),
        );
        setMessage("Project updated successfully.");
      } else {
        const createdProject = await createProject(supabase, formValues);
        setProjects((current) => [createdProject, ...current]);
        setMessage("Project created successfully.");
      }

      resetForm();
      router.refresh();
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Failed to save project.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-10">
      <section className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#F69F11] font-semibold">
              Admin Dashboard
            </p>
            <h1 className="mt-2 text-3xl font-bold text-gray-900">Project Management</h1>
          </div>
          <button
            type="button"
            onClick={resetForm}
            className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-[#F69F11] hover:text-gray-950"
          >
            New Project
          </button>
        </div>

        {(message || error) && (
          <div className="mt-6 space-y-3">
            {message && (
              <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                {message}
              </div>
            )}
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}
          </div>
        )}
      </section>

      <section id="project-form" className="rounded-[2rem] border border-gray-200 bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900">
          {editingId ? "Edit Project" : "Create Project"}
        </h2>
        <form className="mt-6 grid gap-5 md:grid-cols-2" onSubmit={handleSubmit}>
          <label className="space-y-2 md:col-span-2">
            <span className="text-sm font-medium text-gray-700">Name</span>
            <input
              required
              value={formValues.name}
              onChange={(event) => handleChange("name", event.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-gray-700">Location</span>
            <input
              required
              value={formValues.location}
              onChange={(event) => handleChange("location", event.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-gray-700">Size</span>
            <input
              value={formValues.size}
              onChange={(event) => handleChange("size", event.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-gray-700">Category</span>
            <input
              value={formValues.category}
              onChange={(event) => handleChange("category", event.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-gray-700">Variant</span>
            <input
              value={formValues.variant}
              onChange={(event) => handleChange("variant", event.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-gray-700">Image URL</span>
            <input
              value={formValues.image}
              onChange={(event) => handleChange("image", event.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
            />
          </label>

          <label className="space-y-2 md:col-span-2">
            <span className="text-sm font-medium text-gray-700">Starts From</span>
            <input
              value={formValues.startsFrom}
              onChange={(event) => handleChange("startsFrom", event.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
            />
          </label>

          <div className="md:col-span-2 flex gap-3">
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-[#F69F11] px-5 py-3 font-semibold text-gray-900 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Saving..." : editingId ? "Update Project" : "Create Project"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition hover:border-[#F69F11]"
              >
                Cancel Edit
              </button>
            )}
          </div>
        </form>
      </section>

      <section className="rounded-[2rem] border border-gray-200 bg-white p-6 sm:p-8">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-2xl font-bold text-gray-900">Existing Projects</h2>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
            {sortedProjects.length} projects
          </span>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-3">
            <thead>
              <tr className="text-left text-sm uppercase tracking-[0.2em] text-gray-500">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Location</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Variant</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedProjects.map((project) => (
                <tr
                  key={project.id}
                  className="rounded-2xl bg-gray-50 text-sm text-gray-700"
                >
                  <td className="px-4 py-4 font-semibold text-gray-900">
                    {project.name}
                  </td>
                  <td className="px-4 py-4">{project.location}</td>
                  <td className="px-4 py-4">{project.category}</td>
                  <td className="px-4 py-4">{project.variant}</td>
                  <td className="px-4 py-4">
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => handleEdit(project)}
                        className="rounded-lg border border-gray-300 px-3 py-2 text-xs font-semibold transition hover:border-[#F69F11]"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(project.id)}
                        className="rounded-lg border border-red-200 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
