export interface HeroContent {
  microLabel: string;
  name: string;
  headline: string;
  subheadline?: string;
  ctas: {
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
    ghost?: { label: string; href: string };
  };
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectLinks {
  demo?: string;
  github?: string;
  caseStudy?: string;
}

export interface Project {
  id: string;
  label: string;
  title: string;
  problem: string;
  solution: string;
  metrics: ProjectMetric[];
  techStack: string[];
  image: string;
  links?: ProjectLinks;
}

export interface StackItem {
  name: string;
  years?: number;
}

export interface StackCategory {
  name: string;
  items: StackItem[];
}

export interface Pillar {
  title: string;
  description: string;
  icon: string;
}

export interface StackContent {
  categories: StackCategory[];
  pillars: Pillar[];
}

export interface AboutContent {
  paragraphs: string[];
  image: string;
  timeline?: Array<{ year: string; title: string; description: string }>;
  stats?: Array<{ value: string; label: string }>;
}

export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: string;
  highlight?: boolean;
}

export interface ContactContent {
  channels: ContactChannel[];
  footerText?: string;
}
