export interface Skill {
  name: string;
  level: number;
  color: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  type: 'current' | 'previous';
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  gradient: string;
  link?: string;
  github?: string;
  imageType?: 'emoji' | 'image';
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}
