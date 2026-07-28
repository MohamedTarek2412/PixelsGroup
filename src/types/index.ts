// ============================================================
// PIXELS GROUP — TypeScript Type Definitions
// ============================================================

export interface Service {
  id: string;
  icon: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  features: string[];
}

export interface Package {
  id: string;
  name: string;
  nameAr: string;
  tier: "silver" | "gold" | "platinum" | "vip";
  badge?: string;
  isPopular?: boolean;
  features: string[];
  image: string;
  ctaText: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  type: string;
  area?: string;
  year: string;
  coverImage: string;
  images: string[];
  description: string;
  category: "residential" | "commercial" | "administrative";
}

export interface ProcessStep {
  number: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  projectType: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface WhyUsPoint {
  icon: string;
  titleEn: string;
  titleAr: string;
}

export interface ContactInfo {
  phones: string[];
  whatsapp: string[];
  email?: string;
  address?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
