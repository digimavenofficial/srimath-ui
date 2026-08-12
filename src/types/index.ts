/**
 * Project Types and Interfaces
 */

export interface ProjectDetailItem {
  title: string;
  description: string;
}

export interface Project {
  id: number;
  name?: string;
  title?: string;
  subtitle?: string;
  location: string;
  image?: string;
  main_image_url?: string;
  secondary_image_url?: string;
  progress_images?: string[];
  status?: string;
  category?: string;
  variant?: string;
  size?: string;
  flat_type?: string;
  deadline?: string;
  starts_from?: string;
  description?: string;
  detailed_title?: string;
  detailed_description?: string;
  other_apartment_details?: ProjectDetailItem[];
  amenities?: string[];
  nearby?: string[];
  created_at?: string;
  updated_at?: string;
}

export interface ProjectFormValues {
  name: string;
  location: string;
  size: string;
  category: string;
  variant: string;
  image: string;
  startsFrom: string;
  status: string;
  title: string;
  description: string;
  flatType: string;
  deadline: string;
  mainImageUrl: string;
  secondaryImageUrl: string;
  progressImages: string[];
  detailedTitle: string;
  detailedDescription: string;
  otherApartmentDetails: string;
  amenities: string;
  nearby: string;
}

export interface Testimonial {
  id: string;
  name: string;
  photo?: string;
  projectName: string;
  rating: number;
  testimonial: string;
  designation?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface Feature {
  icon: string; // You can use emoji or icon component
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface BlogMetadata {
  slug?: string;
  author?: string;
  category?: string;
  tags: string[];
  publishedDate?: string;
}

export interface BlogFormValues {
  title: string;
  slug: string;
  coverImage: string;
  summary: string;
  content: string;
  author: string;
  category: string;
  tags: string;
  publishedDate: string;
  isPublished: boolean;
}

export interface BlogRecord extends BlogMetadata {
  id: number;
  title: string;
  content: string;
  summary: string | null;
  cover_image: string | null;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}
