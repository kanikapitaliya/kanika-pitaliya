export type TimelineType = 'EDUCATION' | 'EXPERIENCE';

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  description?: string;
  skills: string[];
}

export interface TimelineItem {
  id: string;
  type: TimelineType;
  title: string;
  subtitle: string;
  location?: string;
  period: string;
  narrative: string;
  focus?: string[];
  technologies?: string[];
}

export interface ProjectMetric {
  value: string;
  label: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  oneLiner: string;
  technologies: string[];
  featured: boolean;
  metrics: ProjectMetric[];
  problem: string;
  approach: string;
  engineering?: string;
  evaluation?: string;
  keyInsight?: string;
  dataset?: string;
  interestingThemes: string[];
  highlightNote?: string;
  evaluationNote?: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  award: string;
  description: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  credentialUrl?: string;
  date?: string;
}

export interface PersonalDetails {
  name: string;
  primaryTitle: string;
  supportingIdentity: string;
  heroDescription: string;
  rotatingDescriptors: string[];
  aboutNarrative: string[];
  currentlyExploring: string[];
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
}
