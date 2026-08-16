/**
 * Application Constants and Configuration
 */

import type { Project, Testimonial, StatItem, Feature, NavLink } from "@/types";

// Brand Configuration
export const BRAND_NAME = "SRIMATH BUILDERS";
export const WHATSAPP_NUMBER = "+91-80150-50994";
export const COMPANY_EMAIL = "hello@srimathbuilders.com";
export const COMPANY_PHONE = "+91 801 505 0994";
export const OFFICE_ADDRESS =
  "Ragham Apartments, M10/G4, 1st Main Rd, Thiruvalluvar Nagar, Thiruvanmiyur, Chennai, Tamil Nadu 600041";

// Navigation Links
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  { label: "Construction", href: "/construction" },
  { label: "Joint Venture", href: "/joint-venture" },
  { label: "Blog", href: "/blog" },
  { label: "Login", href: "/login" },
  { label: "Contact Us", href: "/contact" },
];

// Statistics
export const STATISTICS: StatItem[] = [
  { value: "100+", label: "Completed Projects" },
  { value: "60L+", label: "Sq. Ft. Area" },
  { value: "600+", label: "Happy Families" },
  { value: "10+", label: "Ongoing Projects" },
];

// Features / Why Choose Us
export const FEATURES: Feature[] = [
  {
    icon: "✓",
    title: "QUALITY",
    description:
      "We use premium materials and superior craftsmanship in every project, ensuring durability and elegance.",
  },
  {
    icon: "✓",
    title: "TRANSPARENCY",
    description:
      "Complete transparency in pricing, timelines, and project updates. No hidden costs.",
  },
  {
    icon: "✓",
    title: "ON-TIME DELIVERY",
    description:
      "We respect your timeline and deliver projects on schedule, every time.",
  },
  {
    icon: "✓",
    title: "CUSTOMER FIRST",
    description:
      "Your satisfaction is our priority. We listen, adapt, and deliver beyond expectations.",
  },
];

// Projects
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "SRIMATH GRANDEUR",
    subtitle: "Premium Apartments",
    location: "OMR, Chennai",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    status: "READY TO MOVE",
    category: "Premium Homes",
    description:
      "Luxurious apartment complex featuring modern amenities, spacious layouts, and premium finishes.",
  },
  {
    id: 2,
    title: "SRIMATH HEIGHTS",
    subtitle: "Luxury Villas",
    location: "Ambattur, Chennai",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    status: "UNDER CONSTRUCTION",
    category: "Villa Community",
    description:
      "Exclusive gated community with world-class amenities and premium villa designs.",
  },
  {
    id: 3,
    title: "SRIMATH PLAZA",
    subtitle: "Commercial Complex",
    location: "Guindy, Chennai",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop",
    status: "READY TO MOVE",
    category: "Commercial",
    description:
      "Modern commercial spaces designed for contemporary businesses.",
  },
  {
    id: 4,
    title: "SRIMATH RIVERSIDE",
    subtitle: "Waterfront Residences",
    location: "Thiruvanmiyur, Chennai",
    image:
      "https://images.unsplash.com/photo-1512080248-a52364e2dba1?w=800&h=600&fit=crop",
    status: "LAUNCHING SOON",
    category: "Premium Waterfront",
    description:
      "Exclusive waterfront living with stunning views and premium lifestyle amenities.",
  },
];

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    projectName: "SRIMATH GRANDEUR",
    rating: 5,
    testimonial:
      "Exceptional quality and professionalism. SRIMATH Builders exceeded our expectations in every aspect. Our new home is a dream come true!",
    designation: "IT Professional",
  },
  {
    id: "2",
    name: "Priya Sharma",
    projectName: "SRIMATH HEIGHTS",
    rating: 5,
    testimonial:
      "Incredible attention to detail and customer service. The team was transparent about every step of the construction. Highly recommended!",
    designation: "Doctor",
  },
  {
    id: "3",
    name: "Vikram Patel",
    projectName: "SRIMATH PLAZA",
    rating: 5,
    testimonial:
      "We chose SRIMATH for our commercial space and haven't looked back. Professional, reliable, and on-time delivery. Perfect partner for business growth.",
    designation: "Business Owner",
  },
  {
    id: "4",
    name: "Anjali Nair",
    projectName: "SRIMATH RIVERSIDE",
    rating: 5,
    testimonial:
      "Best investment decision we made. The team's dedication to quality and customer satisfaction is unmatched. Truly premium living experience.",
    designation: "Finance Manager",
  },
];

// Quick Links
export const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Login", href: "/login" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/contact" },
];

// Project Links
export const PROJECT_LINKS = [
  { label: "Ongoing Projects", href: "#" },
  { label: "Completed Projects", href: "#" },
  { label: "Upcoming Projects", href: "#" },
];

// Social Links
export const SOCIAL_LINKS = [
  { icon: "instagram", label: "Instagram", href: "https://instagram.com" },
  { icon: "facebook", label: "Facebook", href: "https://facebook.com" },
  { icon: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
  { icon: "youtube", label: "YouTube", href: "https://youtube.com" },
];
