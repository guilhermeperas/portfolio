"use client";

import { useLanguage } from "./LanguageContext";
import ParticleBackground from "./components/ParticleBackground";
import { useState, useEffect } from "react";

export default function Home() {
  const { language, toggleLanguage, t } = useLanguage();
  const [showNav, setShowNav] = useState(false);
  const [codingTime, setCodingTime] = useState({ years: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const container = document.getElementById("main-container");
    const section = document.getElementById(sectionId);
    if (container && section) {
      const sectionTop = section.offsetTop;
      container.scrollTo({
        top: sectionTop,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const container = document.getElementById("main-container");
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection && container) {
        const containerRect = container.getBoundingClientRect();
        const aboutRect = aboutSection.getBoundingClientRect();
        setShowNav(aboutRect.top <= containerRect.top + 100);
      }
    };

    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Start date: 4 years ago from now (adjust this to your actual start date)
    const startDate = new Date("2021-01-01");
    
    const updateTimer = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setCodingTime({ years, days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="main-container" className="min-h-screen bg-[#0a0a0f] text-white snap-y snap-mandatory h-screen overflow-y-auto scroll-smooth">
      <ParticleBackground />
      
      {/* Navigation - only shows after about section */}
      <nav className={`fixed top-0 w-full bg-[#0a0a0f]/90 backdrop-blur-sm z-50 transition-all duration-300 ${showNav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-end items-center">
          <div className="flex items-center gap-8">
            <a href="#about" onClick={(e) => scrollToSection(e, "about")} className="text-white/60 hover:text-purple-400 transition-colors text-sm">{t("about")}</a>
            <a href="#projects" onClick={(e) => scrollToSection(e, "projects")} className="text-white/60 hover:text-purple-400 transition-colors text-sm">{t("projects")}</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="text-white/60 hover:text-purple-400 transition-colors text-sm">{t("contact")}</a>
            <button
              onClick={toggleLanguage}
              className="text-sm text-white/60 hover:text-purple-400 transition-colors font-medium"
              title={language === "en" ? "Mudar para Português" : "Switch to English"}
            >
              {language === "en" ? "PT" : "ENG"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center px-6 relative z-10 snap-start snap-always">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-2">
            {t("greeting")} <span className="text-purple-500">Guilherme</span>.
          </h1>
          <p className="text-4xl md:text-5xl font-light text-white/90 mb-12">
            {t("tagline")}
          </p>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className="inline-flex items-center gap-2 px-8 py-3 border border-purple-500 text-purple-500 font-medium hover:bg-purple-500 hover:text-white transition-all"
          >
            {t("viewWork")} <span className="text-xl">↓</span>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="h-screen flex items-center px-6 relative z-10 snap-start snap-always">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-12">
            {t("aboutTitle")}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left side - Image and About text */}
            <div>
              <div className="aspect-square max-w-sm bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                <span className="text-white/20 text-lg">{t("imagePlaceholder")}</span>
              </div>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                {t("aboutText")}
              </p>
              
              {/* Coding Timer */}
              <div className="mt-6">
                <p className="text-white/40 text-sm mb-2">{t("codingFor")}</p>
                <div className="flex gap-4 text-center">
                  <div>
                    <span className="text-2xl font-light text-purple-500">{codingTime.years}</span>
                    <p className="text-white/40 text-xs">{t("years")}</p>
                  </div>
                  <div>
                    <span className="text-2xl font-light text-purple-500">{codingTime.days}</span>
                    <p className="text-white/40 text-xs">{t("days")}</p>
                  </div>
                  <div>
                    <span className="text-2xl font-light text-purple-500">{String(codingTime.hours).padStart(2, '0')}</span>
                    <p className="text-white/40 text-xs">{t("hours")}</p>
                  </div>
                  <div>
                    <span className="text-2xl font-light text-purple-500">{String(codingTime.minutes).padStart(2, '0')}</span>
                    <p className="text-white/40 text-xs">{t("minutes")}</p>
                  </div>
                  <div>
                    <span className="text-2xl font-light text-purple-500">{String(codingTime.seconds).padStart(2, '0')}</span>
                    <p className="text-white/40 text-xs">{t("seconds")}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Tech stack */}
            <div>
              <h3 className="text-xl font-light text-white mb-6">{t("skillsTitle")}</h3>
              <div className="flex flex-wrap gap-3">
                {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS", "Git", "Python", "HTML", "CSS", "MongoDB", "Express.js"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 border border-white/10 text-white/70 text-sm hover:border-purple-500/50 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 relative z-10 hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-12">
            {t("skillsTitle")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS", "Git", "Python"].map((skill) => (
              <div
                key={skill}
                className="p-4 border border-white/10 text-center hover:border-purple-500/50 hover:bg-white/5 transition-all"
              >
                <span className="text-white/80 font-light">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Full screen per project with snap scrolling */}
      <section id="projects" className="relative z-10">
        {[
          { 
            titleKey: "projectOneTitle", 
            subtitle: "Social Media App",
            descKey: "projectOneDesc",
            color: "from-blue-600 to-purple-600"
          },
          { 
            titleKey: "projectTwoTitle", 
            subtitle: "Messaging App",
            descKey: "projectTwoDesc",
            color: "from-purple-600 to-pink-600"
          },
          { 
            titleKey: "projectThreeTitle", 
            subtitle: "Productivity App",
            descKey: "projectThreeDesc",
            color: "from-cyan-600 to-blue-600"
          },
        ].map((project, index) => (
          <div
            key={index}
            className="h-screen flex items-center px-6 snap-start snap-always"
          >
            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-5 gap-8 items-center">
              {/* Left side - Project Image (larger) */}
              <div className={`relative md:col-span-3 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 blur-3xl scale-110`}></div>
                <div className="relative bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-lg overflow-hidden">
                  <div className="aspect-[16/10] flex items-center justify-center bg-[#0a0a0f]">
                    <span className="text-white/20 text-lg">{t("imagePlaceholder")}</span>
                  </div>
                </div>
              </div>
              
              {/* Right side - Project Info */}
              <div className={`md:col-span-2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <h3 className="text-4xl md:text-5xl font-light text-white mb-2">
                  {t(project.titleKey)}
                </h3>
                <p className="text-xl text-purple-400 mb-6">{project.subtitle}</p>
                <p className="text-lg text-white/60 leading-relaxed mb-8">
                  {t(project.descKey)}
                </p>
                <div className="flex flex-col gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-white hover:text-purple-400 font-medium tracking-wider text-sm transition-colors group"
                  >
                    LIVE APP
                    <span className="w-8 h-px bg-purple-500 group-hover:w-12 transition-all"></span>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-white hover:text-purple-400 font-medium tracking-wider text-sm transition-colors group"
                  >
                    LEARN MORE
                    <span className="w-8 h-px bg-purple-500 group-hover:w-12 transition-all"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-screen flex flex-col justify-center px-6 relative z-10 snap-start snap-always">
        <div className="max-w-xl mx-auto w-full">
          <div className="border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              {t("contactTitle")}
            </h2>
            <p className="text-lg text-white/60 mb-8">
              {t("contactText")}
            </p>
          
            <form 
              className="space-y-6"
            onSubmit={async (e) => {
              e.preventDefault();
              setFormStatus("loading");
              
              try {
                const response = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(formData),
                });
                
                const result = await response.json();
                
                if (response.ok) {
                  setFormStatus("success");
                  setFormMessage(t("formSuccess"));
                  setFormData({ name: "", email: "", message: "" });
                } else {
                  setFormStatus("error");
                  setFormMessage(result.error || t("formError"));
                }
              } catch {
                setFormStatus("error");
                setFormMessage(t("formError"));
              }
            }}
          >
            <div>
              <label htmlFor="name" className="block text-sm text-white/60 mb-2">
                {t("nameLabel")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-purple-500 focus:outline-none transition-colors"
                placeholder={t("namePlaceholder")}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm text-white/60 mb-2">
                {t("emailLabel")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-purple-500 focus:outline-none transition-colors"
                placeholder={t("emailPlaceholder")}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm text-white/60 mb-2">
                {t("messageLabel")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                placeholder={t("messagePlaceholder")}
              />
            </div>
            
            {formStatus !== "idle" && (
              <div className={`p-3 text-sm ${
                formStatus === "success" ? "bg-green-500/20 text-green-400 border border-green-500/30" :
                formStatus === "error" ? "bg-red-500/20 text-red-400 border border-red-500/30" :
                "bg-purple-500/20 text-purple-400 border border-purple-500/30"
              }`}>
                {formStatus === "loading" ? t("formSending") : formMessage}
              </div>
            )}
            
            <button
              type="submit"
              disabled={formStatus === "loading"}
              className="w-full px-8 py-3 border border-purple-500 text-purple-500 font-medium hover:bg-purple-500 hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formStatus === "loading" ? t("formSending") : t("sendMessage")}
            </button>
          </form>
          </div>
          
          <div className="flex gap-6 mt-8 justify-center">
            <a href="https://github.com/guilhermeperas" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-purple-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/guilherme-pereira-748449252/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-purple-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white/30 text-sm">
          <p>{t("copyright")}</p>
        </div>
      </footer>
    </div>
  );
}
