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
  { 
    title: "Number Picking Game", 
    subtitle: "A Fun Math Game",
    desc: "A simple and engaging number picking game ",
    color: "from-purple-600 to-pink-600",
    github_link: "https://github.com/guilhermeperas/number_picker",
    img: "/portfolio/project_imgs/number_picker.png",
    live_link: "https://guilhermeperas.github.io/number_picker/",
    tags: ["JavaScript", "HTML", "CSS"]
  },
  { 
    title: "Weather App", 
    subtitle: "Real-time Weather Updates",
    desc: "A weather application that provides real-time weather updates and forecasts for any location.",
    color: "from-purple-600 to-pink-600",
    github_link: "https://github.com/guilhermeperas/weather-app",
    img: "/portfolio/project_imgs/weather_app.png",
    live_link: "https://learning-weather-app.up.railway.app/",
    tags: ["Python", "Flask", "APIs"]
  },
];
