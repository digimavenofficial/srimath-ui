/**
 * Project Types and Interfaces
 */

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  image: string;
  status: string;
  category: string;
  description?: string;
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
