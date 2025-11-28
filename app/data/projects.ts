export interface Project {
  title: string;
  subtitle: string;
  desc: string;
  color: string;
  github_link: string;
  live_link?: string;
  img?: string;
  tags?: string[];
}

export const projects: Project[] = [
  { 
    title: "Productivity Plus", 
    subtitle: "A Productivity App",
    desc: "A productivity app to help you stay on top of your tasks and goals.",
    color: "from-blue-600 to-purple-600",
    github_link: "https://github.com/guilhermeperas/productivity_plus",
    tags: ["React", "Node.js", "TypeScript"]
  },
  { 
    title: "Casa dos Minerais", 
    subtitle: "A Educational Game",
    desc: "An educational game focused on teaching children about minerals and their properties.",
    color: "from-cyan-600 to-blue-600",
    github_link: "https://github.com/torres-engineer/minerals-house",
    tags: ["Odin", "JavaScript", "Game Development"]
  },
  { 
    title: "My Portfolio", 
    subtitle: "Showcasing My Work",
    desc: "A personal portfolio website built to highlight my projects and skills.",
    color: "from-purple-600 to-pink-600",
    github_link: "https://github.com/guilhermeperas/portfolio",
    img: "/portfolio/project_imgs/portfolio.png",
    tags: ["Next.js", "Tailwind", "TypeScript"]
  },
];
