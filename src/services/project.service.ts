import type { SupabaseClient } from "@supabase/supabase-js";
import type { Project, ProjectFormValues } from "@/types";

type ProjectRow = {
  id: number;
  name: string;
  location: string;
  size: string;
  category: string;
  variant: string;
  image: string;
  starts_from: string;
  created_at: string;
  updated_at: string;
};

function mapProjectRow(row: ProjectRow): Project {
  return {
    id: row.id,
    name: row.name,
    location: row.location,
    size: row.size,
    category: row.category,
    variant: row.variant,
    image: row.image,
    starts_from: row.starts_from,
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
      location: values.location,
      size: values.size,
      category: values.category,
      variant: values.variant,
      image: values.image,
      starts_from: values.startsFrom,
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
      location: values.location,
      size: values.size,
      category: values.category,
      variant: values.variant,
      image: values.image,
      starts_from: values.startsFrom,
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
