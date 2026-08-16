"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import type { Project, ProjectFormValues } from "@/types";
import { createSupabaseBrowserClient } from "@/lib/supabase";
import {
  createProject,
  deleteProject,
  updateProject,
  uploadImage,
} from "@/services/project.service";

interface ProjectManagerProps {
  initialProjects: Project[];
  view?: "all" | "form" | "list";
}

const emptyFormValues: ProjectFormValues = {
  name: "",
  title: "",
  location: "",
  size: "",
  category: "",
  variant: "",
  image: "",
  startsFrom: "",
  status: "",
  description: "",
  flatType: "",
  deadline: "",
  mainImageUrl: "",
  secondaryImageUrl: "",
  progressImages: [],
  detailedTitle: "",
  detailedDescription: "",
  otherApartmentDetails: "",
  amenities: "",
  nearby: "",
};

export default function ProjectManager({
  initialProjects,
  view = "all",
}: ProjectManagerProps) {
  const router = useRouter();
  const [projects, setProjects] = useState(initialProjects);
  const [formValues, setFormValues] =
    useState<ProjectFormValues>(emptyFormValues);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [mainPreviewUrl, setMainPreviewUrl] = useState<string>("");
  const [secondaryPreviewUrl, setSecondaryPreviewUrl] = useState<string>("");
  const [progressPreviewImages, setProgressPreviewImages] = useState<string[]>(
    [],
  );
  const progressInputRef = useRef<HTMLInputElement | null>(null);

  const sortedProjects = useMemo(() => projects, [projects]);

  const resetForm = () => {
    setFormValues(emptyFormValues);
    setEditingId(null);
    setMainPreviewUrl("");
    setSecondaryPreviewUrl("");
    setProgressPreviewImages([]);
  };

  const handleChange = (field: keyof ProjectFormValues, value: string) => {
    setFormValues((current) => ({ ...current, [field]: value }));
  };

  const handleEdit = (project: Project) => {
    setEditingId(project.id);
    setFormValues({
      name: project.name ?? "",
      title: project.title ?? project.name ?? "",
      location: project.location ?? "",
      size: project.size ?? "",
      category: project.category ?? "",
      variant: project.variant ?? "",
      image: project.image ?? "",
      startsFrom: project.starts_from ?? "",
      status: project.status ?? "",
      description: project.description ?? "",
      flatType: project.flat_type ?? "",
      deadline: project.deadline ?? "",
      mainImageUrl: project.main_image_url ?? project.image ?? "",
      secondaryImageUrl: project.secondary_image_url ?? "",
      progressImages: project.progress_images ?? [],
      detailedTitle: project.detailed_title ?? "",
      detailedDescription: project.detailed_description ?? "",
      otherApartmentDetails:
        project.other_apartment_details
          ?.map((detail) => `${detail.title}|${detail.description}`)
          .join("\n") ?? "",
      amenities: project.amenities?.join("\n") ?? "",
      nearby: project.nearby?.join("\n") ?? "",
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
      const message = "Supabase is not configured yet.";
      setError(message);
      toast.error(message);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      await deleteProject(supabase, id);
      setProjects((current) => current.filter((project) => project.id !== id));
      const successMessage = "Project deleted successfully.";
      setMessage(successMessage);
      toast.success(successMessage);
      router.refresh();
    } catch (deleteError) {
      const message =
        deleteError instanceof Error
          ? deleteError.message
          : "Failed to delete project.";
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleSingleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
    field: "mainImageUrl" | "secondaryImageUrl",
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const supabase = createSupabaseBrowserClient();

    if (!supabase) {
      const message = "Supabase is not configured yet.";
      setError(message);
      toast.error(message);
      return;
    }

    const previousValue = formValues[field];

    try {
      setUploadingImage(true);
      setError(null);
      const previewUrl = URL.createObjectURL(file);
      if (field === "mainImageUrl") {
        setMainPreviewUrl(previewUrl);
      } else {
        setSecondaryPreviewUrl(previewUrl);
      }
      setFormValues((current) => ({
        ...current,
        [field]: "",
        ...(field === "mainImageUrl" ? { image: "" } : {}),
      }));
      const projectId = editingId ? String(editingId) : "project-images";
      const url = await uploadImage(supabase, file, projectId);
      setFormValues((current) => ({
        ...current,
        [field]: url,
        ...(field === "mainImageUrl" ? { image: url } : {}),
      }));
      if (field === "mainImageUrl") {
        setMainPreviewUrl("");
      } else {
        setSecondaryPreviewUrl("");
      }
      const successMessage = "Image uploaded successfully.";
      setMessage(successMessage);
      toast.success(successMessage);
    } catch (uploadError) {
      setFormValues((current) => ({
        ...current,
        [field]: previousValue,
        ...(field === "mainImageUrl" ? { image: previousValue } : {}),
      }));
      if (field === "mainImageUrl") {
        setMainPreviewUrl("");
      } else {
        setSecondaryPreviewUrl("");
      }
      const message =
        uploadError instanceof Error
          ? uploadError.message
          : "Image upload failed.";
      setError(message);
      toast.error(message);
    } finally {
      setUploadingImage(false);
      event.target.value = "";
    }
  };

  const handleProgressImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = Array.from(event.target.files ?? []);

    if (files.length === 0) {
      return;
    }

    const supabase = createSupabaseBrowserClient();

    if (!supabase) {
      const message = "Supabase is not configured yet.";
      setError(message);
      toast.error(message);
      return;
    }

    let previewUrls: string[] = [];

    try {
      setUploadingImage(true);
      setError(null);
      previewUrls = files.map((file) => URL.createObjectURL(file));
      setProgressPreviewImages((current) => [...current, ...previewUrls]);
      const projectId = editingId ? String(editingId) : "progress-images";
      const uploadedUrls = await Promise.all(
        files.map((file) => uploadImage(supabase, file, projectId)),
      );
      setFormValues((current) => ({
        ...current,
        progressImages: [...current.progressImages, ...uploadedUrls],
      }));
      setProgressPreviewImages((current) =>
        current.filter((url) => !previewUrls.includes(url)),
      );
      const successMessage = `${uploadedUrls.length} progress image${uploadedUrls.length > 1 ? "s" : ""} uploaded successfully.`;
      setMessage(successMessage);
      toast.success(successMessage);
    } catch (uploadError) {
      setProgressPreviewImages((current) =>
        current.filter((url) => !current.includes(url)),
      );
      const message =
        uploadError instanceof Error
          ? uploadError.message
          : "Progress image upload failed.";
      setError(message);
      toast.error(message);
    } finally {
      setUploadingImage(false);
      event.target.value = "";
    }
  };

  const removeProgressImage = (imageUrl: string) => {
    setFormValues((current) => ({
      ...current,
      progressImages: current.progressImages.filter((url) => url !== imageUrl),
    }));
    setProgressPreviewImages((current) =>
      current.filter((url) => url !== imageUrl),
    );
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const supabase = createSupabaseBrowserClient();

    if (!supabase) {
      const message = "Supabase is not configured yet.";
      setError(message);
      toast.error(message);
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
        const successMessage = "Project updated successfully.";
        setMessage(successMessage);
        toast.success(successMessage);
      } else {
        const createdProject = await createProject(supabase, formValues);
        setProjects((current) => [createdProject, ...current]);
        const successMessage = "Project created successfully.";
        setMessage(successMessage);
        toast.success(successMessage);
      }

      resetForm();
      router.refresh();
    } catch (submitError) {
      const message =
        submitError instanceof Error
          ? submitError.message
          : "Failed to save project.";
      setError(message);
      toast.error(message);
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
            <h1 className="mt-2 text-3xl font-bold text-gray-900">
              Project Management
            </h1>
          </div>
          <button
            type="button"
            onClick={resetForm}
            disabled={view === "list"}
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

      {view !== "list" ? (
        <section
          id="project-form"
          className="rounded-[2rem] border border-gray-200 bg-white p-6 sm:p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900">
            {editingId ? "Edit Project" : "Create Project"}
          </h2>
          <form
            className="mt-6 grid gap-5 md:grid-cols-2"
            onSubmit={handleSubmit}
          >
            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-medium text-gray-700">
                Project Name
              </span>
              <input
                required
                value={formValues.name}
                onChange={(event) => handleChange("name", event.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
              />
            </label>

            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-medium text-gray-700">
                Display Title
              </span>
              <input
                value={formValues.title}
                onChange={(event) => handleChange("title", event.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
              />
            </label>

            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-medium text-gray-700">
                Description
              </span>
              <textarea
                value={formValues.description}
                onChange={(event) =>
                  handleChange("description", event.target.value)
                }
                rows={3}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-gray-700">
                Location
              </span>
              <input
                required
                value={formValues.location}
                onChange={(event) =>
                  handleChange("location", event.target.value)
                }
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-gray-700">
                Flat Type
              </span>
              <input
                value={formValues.flatType}
                onChange={(event) =>
                  handleChange("flatType", event.target.value)
                }
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
              <span className="text-sm font-medium text-gray-700">
                Category
              </span>
              <input
                value={formValues.category}
                onChange={(event) =>
                  handleChange("category", event.target.value)
                }
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-gray-700">Variant</span>
              <input
                value={formValues.variant}
                onChange={(event) =>
                  handleChange("variant", event.target.value)
                }
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-gray-700">
                Deadline
              </span>
              <input
                type="date"
                value={formValues.deadline}
                onChange={(event) =>
                  handleChange("deadline", event.target.value)
                }
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
              />
            </label>

            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-medium text-gray-700">
                Main Image (max 50KB)
              </span>
              <input
                type="file"
                accept="image/*"
                onChange={(event) =>
                  handleSingleImageUpload(event, "mainImageUrl")
                }
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
              />
              {mainPreviewUrl || formValues.mainImageUrl ? (
                <div className="overflow-hidden rounded-2xl border border-gray-200">
                  <img
                    src={mainPreviewUrl || formValues.mainImageUrl}
                    alt="Main project preview"
                    className="h-40 w-full object-cover"
                  />
                </div>
              ) : null}
            </label>

            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-medium text-gray-700">
                Secondary Image (max 50KB)
              </span>
              <input
                type="file"
                accept="image/*"
                onChange={(event) =>
                  handleSingleImageUpload(event, "secondaryImageUrl")
                }
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
              />
              {secondaryPreviewUrl || formValues.secondaryImageUrl ? (
                <div className="overflow-hidden rounded-2xl border border-gray-200">
                  <img
                    src={secondaryPreviewUrl || formValues.secondaryImageUrl}
                    alt="Secondary project preview"
                    className="h-40 w-full object-cover"
                  />
                </div>
              ) : null}
            </label>

            <div className="space-y-3 md:col-span-2">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-medium text-gray-700">
                  Progress Images
                </span>
                <button
                  type="button"
                  onClick={() => progressInputRef.current?.click()}
                  className="rounded-full border border-[#F69F11] px-3 py-2 text-sm font-semibold text-[#F69F11]"
                >
                  + Add Images
                </button>
              </div>
              <input
                ref={progressInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleProgressImageUpload}
              />
              {uploadingImage ? (
                <p className="text-sm text-gray-500">Uploading image...</p>
              ) : null}
              {progressPreviewImages.length > 0 ||
              formValues.progressImages.length > 0 ? (
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {[...progressPreviewImages, ...formValues.progressImages].map(
                    (imageUrl) => (
                      <div
                        key={imageUrl}
                        className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50"
                      >
                        <img
                          src={imageUrl}
                          alt="Project progress preview"
                          className="h-32 w-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removeProgressImage(imageUrl)}
                          className="w-full px-3 py-2 text-sm font-semibold text-red-600"
                        >
                          Remove
                        </button>
                      </div>
                    ),
                  )}
                </div>
              ) : (
                <p className="rounded-2xl border border-dashed border-gray-300 px-4 py-4 text-sm text-gray-500">
                  Add progress images to showcase the construction journey.
                </p>
              )}
            </div>

            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-medium text-gray-700">
                Detailed Title
              </span>
              <input
                value={formValues.detailedTitle}
                onChange={(event) =>
                  handleChange("detailedTitle", event.target.value)
                }
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
              />
            </label>

            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-medium text-gray-700">
                Detailed Description
              </span>
              <textarea
                value={formValues.detailedDescription}
                onChange={(event) =>
                  handleChange("detailedDescription", event.target.value)
                }
                rows={3}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
              />
            </label>

            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-medium text-gray-700">
                Other Apartment Details (one per line, format:
                Title|Description)
              </span>
              <textarea
                value={formValues.otherApartmentDetails}
                onChange={(event) =>
                  handleChange("otherApartmentDetails", event.target.value)
                }
                rows={4}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
              />
            </label>

            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-medium text-gray-700">
                Amenities (one per line)
              </span>
              <textarea
                value={formValues.amenities}
                onChange={(event) =>
                  handleChange("amenities", event.target.value)
                }
                rows={4}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
              />
            </label>

            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-medium text-gray-700">
                Nearby Places (one per line)
              </span>
              <textarea
                value={formValues.nearby}
                onChange={(event) => handleChange("nearby", event.target.value)}
                rows={4}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
              />
            </label>

            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-medium text-gray-700">
                Starts From
              </span>
              <input
                value={formValues.startsFrom}
                onChange={(event) =>
                  handleChange("startsFrom", event.target.value)
                }
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#F69F11]"
              />
            </label>

            <div className="md:col-span-2 flex gap-3">
              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-[#F69F11] px-5 py-3 font-semibold text-gray-900 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Saving..."
                  : editingId
                    ? "Update Project"
                    : "Create Project"}
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
      ) : null}

      {view !== "form" ? (
        <section className="rounded-[2rem] border border-gray-200 bg-white p-6 sm:p-8">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-2xl font-bold text-gray-900">
              Existing Projects
            </h2>
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
      ) : null}
    </div>
  );
}
