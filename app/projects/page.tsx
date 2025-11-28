"use client";

import ParticleBackground from "../components/ParticleBackground";
import Link from "next/link";

const projects = [
  { 
    title: "Project One", 
    subtitle: "Social Media App",
    desc: "A brief description of this amazing project and the technologies used.",
    color: "from-blue-600 to-purple-600",
    tags: ["React", "Node.js", "MongoDB"]
  },
  { 
    title: "Project Two", 
    subtitle: "Messaging App",
    desc: "Another cool project showcasing different skills and capabilities.",
    color: "from-purple-600 to-pink-600",
    tags: ["TypeScript", "Socket.io", "PostgreSQL"]
  },
  { 
    title: "Project Three", 
    subtitle: "Productivity App",
    desc: "Yet another impressive project that solves real-world problems.",
    color: "from-cyan-600 to-blue-600",
    tags: ["Next.js", "Tailwind", "Prisma"]
  },
  { 
    title: "Project Four", 
    subtitle: "E-commerce Platform",
    desc: "A brief description of this amazing project and the technologies used.",
    color: "from-green-600 to-teal-600",
    tags: ["React", "Stripe", "Node.js"]
  },
  { 
    title: "Project Five", 
    subtitle: "Portfolio Template",
    desc: "Another cool project showcasing different skills and capabilities.",
    color: "from-orange-600 to-red-600",
    tags: ["Next.js", "Tailwind", "Framer Motion"]
  },
  { 
    title: "Project Six", 
    subtitle: "Task Manager",
    desc: "Yet another impressive project that solves real-world problems.",
    color: "from-indigo-600 to-purple-600",
    tags: ["React", "Firebase", "TypeScript"]
  },
];

export default function ProjectsPage() {

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <ParticleBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0a0a0f]/90 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <Link 
            href="/"
            className="text-white/60 hover:text-purple-400 transition-colors text-sm flex items-center gap-2"
          >
            <span>←</span> Home
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/#about" className="text-white/60 hover:text-purple-400 transition-colors text-sm">About</Link>
            <span className="text-purple-400 text-sm">Projects</span>
            <Link href="/#contact" className="text-white/60 hover:text-purple-400 transition-colors text-sm">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light text-white mb-4">
            Projects
          </h1>
          <p className="text-xl text-white/60 max-w-2xl">
            A collection of my work and side projects.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white/[0.02] border border-white/10 rounded-lg overflow-hidden hover:border-purple-500/50 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                  <div className="aspect-video flex items-center justify-center bg-[#0a0a0f]">
                    <span className="text-white/20 text-lg">Image</span>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-light text-white mb-1 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-purple-400 text-sm mb-3">{project.subtitle}</p>
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">
                    {project.desc}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs border border-white/10 text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-white hover:text-purple-400 text-sm font-medium transition-colors"
                    >
                      LIVE APP →
                    </a>
                    <a
                      href="#"
                      className="text-white/60 hover:text-purple-400 text-sm font-medium transition-colors"
                    >
                      GITHUB
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white/30 text-sm">
          <p>© 2025 Guilherme Pereira. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
