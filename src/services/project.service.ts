import type { SupabaseClient } from "@supabase/supabase-js";
import type { Project, ProjectFormValues } from "@/types";

type ProjectRow = {
  id: number;
  name?: string;
  title?: string;
  location: string;
  size?: string;
  category?: string;
  variant?: string;
  image?: string;
  main_image_url?: string;
  secondary_image_url?: string;
  progress_images?: string[] | null;
  flat_type?: string;
  deadline?: string;
  starts_from?: string;
  description?: string;
  detailed_title?: string;
  detailed_description?: string;
  other_apartment_details?: Array<{ title: string; description: string }> | null;
  amenities?: string[] | null;
  nearby?: string[] | null;
  created_at?: string;
  updated_at?: string;
};

function sanitizeImageValue(value?: string) {
  if (!value || value.startsWith("blob:")) {
    return "";
  }

  return value;
}

function sanitizeImageList(values?: string[] | null) {
  return (values ?? []).filter((value) => Boolean(value) && !value.startsWith("blob:"));
}

function mapProjectRow(row: ProjectRow): Project {
  return {
    id: row.id,
    name: row.name,
    title: row.title ?? row.name,
    location: row.location,
    image: sanitizeImageValue(row.image ?? row.main_image_url),
    main_image_url: sanitizeImageValue(row.main_image_url),
    secondary_image_url: sanitizeImageValue(row.secondary_image_url),
    progress_images: sanitizeImageList(row.progress_images),
    size: row.size,
    category: row.category,
    variant: row.variant,
    flat_type: row.flat_type,
    deadline: row.deadline,
    starts_from: row.starts_from,
    description: row.description,
    detailed_title: row.detailed_title,
    detailed_description: row.detailed_description,
    other_apartment_details: row.other_apartment_details ?? [],
    amenities: row.amenities ?? [],
    nearby: row.nearby ?? [],
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}

export async function getAllProjects(client: SupabaseClient) {
  const { data, error } = await client
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map((project) => mapProjectRow(project as ProjectRow));
}

export async function getProjectById(client: SupabaseClient, id: number) {
  const { data, error } = await client
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      return null;
    }
    throw new Error(error.message);
  }

  return mapProjectRow(data as ProjectRow);
}

export async function createProject(
  client: SupabaseClient,
  values: ProjectFormValues,
) {
  const { data, error } = await client
    .from("projects")
    .insert({
      name: values.name,
      title: values.title || values.name,
      location: values.location,
      size: values.size,
      category: values.category,
      variant: values.variant,
      image: sanitizeImageValue(values.mainImageUrl || values.image),
      main_image_url: sanitizeImageValue(values.mainImageUrl || values.image),
      secondary_image_url: sanitizeImageValue(values.secondaryImageUrl),
      progress_images: sanitizeImageList(values.progressImages ?? []),
      flat_type: values.flatType,
      deadline: values.deadline,
      starts_from: values.startsFrom,
      description: values.description,
      detailed_title: values.detailedTitle,
      detailed_description: values.detailedDescription,
      other_apartment_details: values.otherApartmentDetails
        ? values.otherApartmentDetails
            .split("\n")
            .filter(Boolean)
            .map((entry) => {
              const [title, ...rest] = entry.split("|");
              return { title: title?.trim() ?? "Detail", description: rest.join("|").trim() };
            })
        : [],
      amenities: values.amenities
        ? values.amenities.split("\n").filter(Boolean)
        : [],
      nearby: values.nearby
        ? values.nearby.split("\n").filter(Boolean)
        : [],
    })
    .select("*")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return mapProjectRow(data as ProjectRow);
}

export async function updateProject(
  client: SupabaseClient,
  id: number,
  values: ProjectFormValues,
) {
  const { data, error } = await client
    .from("projects")
    .update({
      name: values.name,
      title: values.title || values.name,
      location: values.location,
      size: values.size,
      category: values.category,
      variant: values.variant,
      image: sanitizeImageValue(values.mainImageUrl || values.image),
      main_image_url: sanitizeImageValue(values.mainImageUrl || values.image),
      secondary_image_url: sanitizeImageValue(values.secondaryImageUrl),
      progress_images: sanitizeImageList(values.progressImages ?? []),
      flat_type: values.flatType,
      deadline: values.deadline,
      starts_from: values.startsFrom,
      description: values.description,
      detailed_title: values.detailedTitle,
      detailed_description: values.detailedDescription,
      other_apartment_details: values.otherApartmentDetails
        ? values.otherApartmentDetails
            .split("\n")
            .filter(Boolean)
            .map((entry) => {
              const [title, ...rest] = entry.split("|");
              return { title: title?.trim() ?? "Detail", description: rest.join("|").trim() };
            })
        : [],
      amenities: values.amenities
        ? values.amenities.split("\n").filter(Boolean)
        : [],
      nearby: values.nearby
        ? values.nearby.split("\n").filter(Boolean)
        : [],
    })
    .eq("id", id)
    .select("*")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return mapProjectRow(data as ProjectRow);
}

export async function deleteProject(client: SupabaseClient, id: number) {
  const { error } = await client.from("projects").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}

export async function uploadImage(
  client: SupabaseClient,
  file: File,
  projectId: string,
) {
  const MAX_FILE_SIZE_KB = 50;
  const fileSizeInKB = file.size / 1024;

  if (fileSizeInKB > MAX_FILE_SIZE_KB) {
    throw new Error("Image must be 50KB or smaller.");
  }

  const fileName = `${projectId}/${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
  const { data: uploadData, error: uploadError } = await client.storage
    .from("project-images")
    .upload(fileName, file, {
      cacheControl: "3600",
      upsert: true,
    });

  if (uploadError) {
    throw new Error(uploadError.message || `Upload failed for ${file.name}`);
  }

  if (!uploadData?.path) {
    throw new Error("Upload completed but returned no file path.");
  }

  const { data } = client.storage.from("project-images").getPublicUrl(fileName);

  if (!data?.publicUrl) {
    throw new Error("Unable to generate a public URL for the uploaded image.");
  }

  return data.publicUrl;
}
