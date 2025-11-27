export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm z-50 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-zinc-900 dark:text-white">Portfolio</span>
          <div className="flex gap-6">
            <a href="#about" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-6">
            Hi, I'm <span className="text-blue-600">Guilherme Pereira</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl">
            A passionate developer crafting beautiful and functional web experiences
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-full font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
            About Me
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 text-center leading-relaxed">
            I'm a developer with a passion for creating elegant solutions to complex problems.
            When I'm not coding, you can find me exploring new technologies, or enjoying a good gym session.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-12 text-center">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS", "Git", "Python"].map((skill) => (
              <div
                key={skill}
                className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-center hover:scale-105 transition-transform"
              >
                <span className="text-zinc-900 dark:text-white font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-12 text-center">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Project One", description: "A brief description of this amazing project and the technologies used." },
              { title: "Project Two", description: "Another cool project showcasing different skills and capabilities." },
              { title: "Project Three", description: "Yet another impressive project that solves real-world problems." },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-zinc-200 dark:border-zinc-700"
              >
                <div className="h-40 bg-zinc-200 dark:bg-zinc-700 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-zinc-500 dark:text-zinc-400">Image</span>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  {project.description}
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-8">
            Get In Touch
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            I'm always open to new opportunities and interesting projects.
            Feel free to reach out!
          </p>
          <a
            href="mailto:pguilherme926@gmail.com"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            Say Hello
          </a>
          <div className="flex justify-center gap-6 mt-8">
            <a href="https://github.com/guilhermeperas" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto text-center text-zinc-600 dark:text-zinc-400">
          <p>© 2025 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
