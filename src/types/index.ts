export interface SocialLinks {
  github: string;
  linkedin: string;
  leetcode: string;
  email: string;
}

export interface ProfileInfo {
  name: string;
  role: string;
  company: string;
  location: string;
  headline: string;
  tagline: string;
  bio: string;
  socials: SocialLinks;
  resumeUrl: string;
  statusBadge: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
  keyAchievements: string[];
  explored?: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
  description?: string;
}

export type ProjectCategory = "All" | "AI & Automation" | "Full-Stack" | "Tools" | "Extension";

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  features: string[];
  stats?: string;
  statusBadge?: string;
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  driveUrl?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  metric: string;
  subtitle: string;
  description: string;
  icon: string;
  highlight?: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  score: string;
  scoreType: string;
  highlights: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  issueDate?: string;
  credentialId?: string;
  badge?: string;
  icon: string;
}
