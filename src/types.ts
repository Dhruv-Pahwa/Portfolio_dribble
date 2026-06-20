export type TabId = "home" | "about" | "experience" | "projects" | "skills" | "blog" | "contact";

export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  techStack: string[];
  problemSolved: string;
  keyMetrics: { label: string; value: string }[];
  liveLink: string;
  codeLink: string;
  image: string;
  status: "live" | "beta" | "internal";
  category: "AI & ML" | "Systems" | "Frontend" | "Data Science";
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  status: string;
  impactMetrics: string[];
  achievements: string[];
  techStack: string[];
}

export interface SkillNode {
  name: string;
  proficiency: number;
  category: "AI & ML" | "Data Science" | "Systems" | "Frontend" | "Tools";
  experienceYears: number;
  details: string;
}

export interface BlogPost {
  id: string;
  title: string;
  readingTime: string;
  date: string;
  category: "Technical" | "AI & Systems" | "Product Design" | "Philosophy";
  preview: string;
  content: string; // Markdown supported content
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  review: string;
  image: string;
}

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}
