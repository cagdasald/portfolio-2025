import { Skill, Experience, Project } from '../types';

export interface SkillCategory {
  title: string;
  skills: Skill[];
  icon: string;
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Core Web Technologies",
    icon: "🌐",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "HTML5", level: 95, color: "from-orange-500 to-red-500" },
      { name: "CSS3", level: 92, color: "from-blue-400 to-indigo-500" },
      { name: "JavaScript", level: 90, color: "from-yellow-400 to-orange-500" },
      { name: "TypeScript", level: 88, color: "from-blue-500 to-blue-700" }
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: "⚛️",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "React.js", level: 95, color: "from-cyan-400 to-blue-500" },
      { name: "Next.js", level: 90, color: "from-gray-700 to-gray-900" },
      { name: "Vue.js", level: 85, color: "from-green-400 to-emerald-500" },
      { name: "Angular", level: 80, color: "from-red-500 to-pink-500" },
      { name: "Redux", level: 88, color: "from-purple-500 to-indigo-500" },
      { name: "TailwindCSS", level: 92, color: "from-cyan-400 to-teal-500" },
      { name: "Sass", level: 85, color: "from-pink-500 to-rose-500" }
    ]
  },
  {
    title: "Backend & Data",
    icon: "🔧",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "REST API", level: 90, color: "from-blue-500 to-cyan-500" },
      { name: "Firebase", level: 85, color: "from-orange-500 to-yellow-500" },
      { name: "Supabase", level: 80, color: "from-green-500 to-emerald-500" },
      { name: "JWT", level: 88, color: "from-purple-500 to-indigo-500" },
      { name: "WebSockets", level: 82, color: "from-blue-400 to-cyan-400" }
    ]
  },
  {
    title: "Testing & QA",
    icon: "🧪",
    color: "from-yellow-500 to-orange-500",
    skills: [
      { name: "Jest", level: 85, color: "from-red-500 to-pink-500" },
      { name: "React Testing Library", level: 80, color: "from-blue-500 to-cyan-500" },
      { name: "Mocha", level: 75, color: "from-amber-500 to-orange-500" }
    ]
  },
  {
    title: "Build Tools & DevOps",
    icon: "⚙️",
    color: "from-gray-500 to-slate-500",
    skills: [
      { name: "Webpack", level: 85, color: "from-blue-500 to-cyan-500" },
      { name: "Vite", level: 90, color: "from-purple-500 to-pink-500" },
      { name: "Git", level: 95, color: "from-orange-500 to-red-500" },
      { name: "GitHub Actions", level: 80, color: "from-gray-700 to-gray-900" },
      { name: "ESLint", level: 88, color: "from-purple-500 to-indigo-500" }
    ]
  },
  {
    title: "Mobile & Cross-Platform",
    icon: "📱",
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "React Native", level: 85, color: "from-cyan-400 to-blue-500" }
    ]
  }
];

export const experience: Experience[] = [
  {
    title: 'Senior Frontend Developer',
    company: 'The Despatch Company',
    period: '2025 - present',
    description: 'Working on Voila project, a comprehensive logistics platform with integrations to major courier companies serving numerous clients. Users can generate shipping labels and manage logistics operations across multiple carriers. Additionally, contributed to various internal company projects, developing scalable solutions and maintaining high code quality standards.',
    technologies: ['Vue', 'React', 'JavaScript', 'TypeScript', 'Framer'],
    type: 'current'
  },
  {
    title: 'Senior Frontend Developer',
    company: 'Bringo',
    period: '2023 - 2025',
    description: 'Developed comprehensive warehouse management system including order tracking, route planning, and logistics optimization. Built mobile application for real-time courier tracking, order delivery management, and live location services. Led a team of 2 developers, mentoring junior developers and implementing best practices for scalable web applications.',
    technologies: ['React', 'React Native', 'Next', 'TypeScript', 'Firebase', 'Node'],
    type: 'previous'
  },
  {
    title: 'Frontend Developer',
    company: 'Freelancer',
    period: '2023 - 2023',
    description: 'Provided frontend development services to various startup companies and tech firms. Participated in YTU Technopark pre-incubation program, working on AI-powered quantitative test result analysis through image processing. Collaborated with project partners to develop innovative solutions for medical and scientific data visualization.',
    technologies: ['ReactNative', 'Python', 'JavaScript'],
    type: 'previous'
  },
  {
    title: 'Frontend Developer',
    company: 'Solid ICT',
    period: '2021 - 2023',
    description: 'Developed frontend solutions for major corporate clients including Turkcell, Pepsi, Boyner, and Fenerbahçe. Created responsive and interactive user interfaces for various web applications and e-commerce platforms, contributing to both client projects and internal company initiatives.',
    technologies: ['React', 'Next', 'Angular', 'Vue'],
    type: 'previous'
  },
  {
    title: 'Intern Developer',
    company: 'BukyTalk',
    period: '2021 - 2021',
    description: 'Developed full-stack web applications using PHP for backend development and modern frontend technologies. Built responsive template websites with custom functionality and database integration.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
    type: 'previous'
  }
];

export const projects: Project[] = [
  {
    title: 'Freyjan',
    description: 'Design-focused promotional website with modern UI/UX, interactive animations, and responsive design',
    image: '/images/freyjan.png',
    tech: ['Next', 'Framer Motion', 'TailwindCSS', 'TypeScript'],
    gradient: 'from-purple-500 to-pink-500',
    link: 'https://freyjan.com',
    imageType: 'image'
  },
  {
    title: 'Bringo App',
    description: 'Real-time courier tracking, order delivery management, and live location services for Bringo',
    image: '/images/bringo.png',
    tech: ['React Native', 'Firebase', 'Redux', 'TypeScript', 'Node'],
    gradient: 'from-blue-500 to-purple-500',
    link: 'https://apps.apple.com/kz/app/bringo/id6670236863',
    imageType: 'image'
  },
  {
    title: 'GB Business',
    description: 'Digital promotion platform enabling businesses to create mobile campaigns with FreeByte rewards.',
    image: '/images/gb-business.png',
    tech: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
    gradient: 'from-green-500 to-blue-500',
    link: 'https://www.1gb.kim/',
    imageType: 'image'
  }
];
