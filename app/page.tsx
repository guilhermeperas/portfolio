"use client";

import ParticleBackground from "./components/ParticleBackground";
import { useState, useEffect } from "react";

export default function Home() {
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
    const startDate = new Date("2020-01-01");
    
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
      
      <nav className={`fixed top-0 w-full bg-[#0a0a0f]/90 backdrop-blur-sm z-50 transition-all duration-300 ${showNav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-end items-center">
          <div className="flex items-center gap-8">
            <a href="#about" onClick={(e) => scrollToSection(e, "about")} className="text-white/60 hover:text-purple-400 transition-colors text-sm">About</a>
            <a href="/projects" className="text-white/60 hover:text-purple-400 transition-colors text-sm">Projects</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="text-white/60 hover:text-purple-400 transition-colors text-sm">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center px-6 relative z-10 snap-start snap-always">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-2">
            Hello, I'm <span className="text-purple-500">Guilherme</span>.
          </h1>
          <p className="text-4xl md:text-5xl font-light text-white/90 mb-12">
            a software engineer student.
          </p>
          <div className="flex gap-4">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="inline-flex items-center gap-2 px-8 py-3 border border-purple-500 text-purple-500 font-medium hover:bg-purple-500 hover:text-white transition-all"
            >
              View my work <span className="text-xl">↓</span>
            </a>
            <a
              href="/curriculo_guilherme_eng.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border border-purple-500 text-purple-500 font-medium hover:bg-purple-500 hover:text-white transition-all"
            >
              CV
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="h-screen flex items-center px-6 relative z-10 snap-start snap-always">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center">
              <div className="w-48 h-48 rounded-full bg-white/5 border border-white/10 overflow-hidden mb-8">
                <img 
                  src="/pfp.jpg" 
                  alt="Guilherme Pereira" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xl text-white/60 leading-relaxed mb-8">
                Currently trying to get into the game dev world, learning Unity and C#. I'm passionate about creating efficient and scalable solutions, and I'm always eager to learn new technologies and improve my skills.
              </p>
              
              {/* Coding Timer */}
              <div className="mt-6">
                <p className="text-white/40 text-base mb-2">Coding since</p>
                <div className="flex gap-4 text-center">
                  <div>
                    <span className="text-3xl font-light text-purple-500">{codingTime.years}</span>
                    <p className="text-white/40 text-sm">years</p>
                  </div>
                  <div>
                    <span className="text-3xl font-light text-purple-500">{codingTime.days}</span>
                    <p className="text-white/40 text-sm">days</p>
                  </div>
                  <div>
                    <span className="text-3xl font-light text-purple-500">{String(codingTime.hours).padStart(2, '0')}</span>
                    <p className="text-white/40 text-sm">hours</p>
                  </div>
                  <div>
                    <span className="text-3xl font-light text-purple-500">{String(codingTime.minutes).padStart(2, '0')}</span>
                    <p className="text-white/40 text-sm">min</p>
                  </div>
                  <div>
                    <span className="text-3xl font-light text-purple-500">{String(codingTime.seconds).padStart(2, '0')}</span>
                    <p className="text-white/40 text-sm">sec</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-light text-white mb-6">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "JavaScript", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg> },
                  { name: "TypeScript", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg> },
                  { name: "React", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg> },
                  { name: "Node.js", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/></svg> },
                  { name: "Git", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg> },
                  { name: "HTML", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg> },
                  { name: "CSS", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg> },
                  { name: "PHP", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z"/></svg> },
                ].map((tech) => (
                  <span
                  key={tech.name}
                  className="flex items-center gap-2 px-4 py-2 border border-white/10 text-white/70 text-base hover:border-purple-500/50 hover:text-purple-400 transition-all"
                  >
                    {tech.icon}
                    {tech.name}
                  </span>
                ))}
              </div>
              
              {/* Learning */}
              <h3 className="text-2xl font-light text-white mb-4 mt-8">Currently Learning</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Unity", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M10.4 17.8l-6-3.3V9.5l6-3.4 2.9 1.7-4.8 2.7v3.4l4.8 2.8zm8.9-9.3L22 12l-2.7 3.5-6-3.4v-3L18.1 6zm-6-4L16.1.6l6 3.4v6.7L22 8.5 19.3 12 22 15.5l-.1-2.2v6.7l-6 3.4-2.8-1.9 4.9-2.8V12l-4.9-2.8zm-2.7 4L5.8 6l6-3.4L14.6 4 9.8 6.8v3.4l4.8 2.8-2.8 1.6zm0 9.3l-2.8-1.9v-3.4l-4.8-2.8 2.8-1.6 4.8 2.8z"/></svg> },
                  { name: "C#", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M11.5 15.97l.41 2.44c-.26.14-.68.27-1.24.39-.57.13-1.24.2-2.01.2-2.21-.04-3.87-.7-4.98-1.96C2.56 15.77 2 14.16 2 12.21c.05-2.31.72-4.08 2-5.32C5.32 5.64 6.96 5 8.94 5c.75 0 1.4.07 1.94.19s.94.25 1.2.4l-.58 2.49-1.06-.34c-.4-.1-.86-.15-1.39-.15-1.16-.01-2.12.36-2.87 1.1-.76.73-1.15 1.85-1.18 3.34 0 1.36.37 2.42 1.08 3.2.71.77 1.71 1.17 2.99 1.18l1.33-.12c.43-.08.79-.19 1.1-.32zm1.95-1.93l.91 2.44c.22-.1.56-.22 1.03-.33a6.4 6.4 0 0 1 1.65-.17c.75 0 1.44.08 2.07.24.62.16 1.16.39 1.6.69h-2.51c-.22 0-.41.08-.57.23a.79.79 0 0 0-.23.56v.56c0 .2.08.38.23.53.15.15.34.23.57.23h4.79c.22 0 .41-.07.57-.22.16-.15.23-.34.23-.54v-4.4c0-.22-.08-.4-.23-.56a.77.77 0 0 0-.56-.23h-.56c-.22 0-.41.08-.56.23a.77.77 0 0 0-.24.56v1.43c-.37-.24-.82-.43-1.35-.57a6.57 6.57 0 0 0-1.75-.21c-.79 0-1.53.08-2.22.25-.69.16-1.24.35-1.67.55zm2.44-4.06l.91-2.44-.08.04c-.43-.2-.98-.39-1.67-.55a8.07 8.07 0 0 0-2.22-.25c-.61 0-1.19.07-1.75.21-.53.14-.98.33-1.35.57V6.12c0-.22-.08-.41-.24-.56a.77.77 0 0 0-.56-.23h-.56c-.22 0-.4.08-.56.23a.77.77 0 0 0-.23.56v4.4c0 .2.08.39.23.54.16.15.35.22.57.22h4.79c.23 0 .42-.08.57-.23a.72.72 0 0 0 .23-.53v-.56c0-.22-.08-.41-.23-.56a.79.79 0 0 0-.57-.23H9.83c.44-.3.98-.53 1.6-.69a7.72 7.72 0 0 1 2.07-.24c.57 0 1.11.06 1.65.17.47.11.81.23 1.03.33l-.29.3z"/></svg> },
                  { name: "Kotlin", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 24H0V0h24L12 12z"/></svg> },
                  { name: "Python", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/></svg> },
                  { name: "Android Studio", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 11.648a1.54 1.54 0 110 3.08 1.54 1.54 0 010-3.08m0-1.393a2.932 2.932 0 100 5.865 2.932 2.932 0 000-5.865M6.115 16.635a1.322 1.322 0 11-.001-2.645 1.322 1.322 0 01.001 2.645m11.77 0a1.323 1.323 0 110-2.646 1.323 1.323 0 010 2.646m-9.603-9.46l-.876-1.541a.185.185 0 01.066-.253.185.185 0 01.253.066l.888 1.56A6.7 6.7 0 0112 6.234a6.7 6.7 0 013.387.773l.888-1.56a.185.185 0 01.253-.066.185.185 0 01.066.253l-.876 1.541A6.382 6.382 0 0119 13.043v.54H5v-.54a6.382 6.382 0 013.282-5.868M5 14.983h14v5.233a1.785 1.785 0 01-1.786 1.784H6.786A1.785 1.785 0 015 20.216z"/></svg> },
                  { name: "Docker", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"/></svg> },
                  { name: "Go", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z"/></svg> },
                ].map((tech) => (
                  <span
                    key={tech.name}
                    className="flex items-center gap-2 px-4 py-2 border border-purple-500/30 text-purple-400/70 text-base hover:border-purple-500/50 hover:text-purple-400 transition-all"
                  >
                    {tech.icon}
                    {tech.name}
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
            Skills
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
            title: "Project One", 
            subtitle: "Social Media App",
            desc: "A brief description of this amazing project and the technologies used.",
            color: "from-blue-600 to-purple-600"
          },
          { 
            title: "Project Two", 
            subtitle: "Messaging App",
            desc: "Another cool project showcasing different skills and capabilities.",
            color: "from-purple-600 to-pink-600"
          },
          { 
            title: "Project Three", 
            subtitle: "Productivity App",
            desc: "Yet another impressive project that solves real-world problems.",
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
                    <span className="text-white/20 text-lg">Image</span>
                  </div>
                </div>
              </div>
              
              {/* Right side - Project Info */}
              <div className={`md:col-span-2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <h3 className="text-4xl md:text-5xl font-light text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-xl text-purple-400 mb-6">{project.subtitle}</p>
                <p className="text-lg text-white/60 leading-relaxed mb-8">
                  {project.desc}
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
        
        {/* View All Projects Button */}
        <div className="h-screen flex items-center justify-center px-6 snap-start snap-always">
          <a
            href="/projects"
            className="inline-flex items-center gap-3 px-10 py-4 border border-purple-500 text-purple-500 font-medium hover:bg-purple-500 hover:text-white transition-all text-lg"
          >
            View All Projects
            <span className="text-xl">→</span>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-screen flex flex-col justify-center px-6 relative z-10 snap-start snap-always">
        <div className="max-w-xl mx-auto w-full">
          <div className="border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-white/60 mb-8">
              I'm always open to new opportunities and interesting projects. Feel free to reach out!
            </p>
          
            <form 
              className="space-y-6"
            onSubmit={async (e) => {
              e.preventDefault();
              setFormStatus("loading");
              
              try {
                const response = await fetch("https://api.web3forms.com/submit", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    access_key: "e066c14b-f962-4045-8854-88840cda7b81",
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New Contact Form Submission from ${formData.name}`,
                  }),
                });
                
                const result = await response.json();
                
                if (result.success) {
                  setFormStatus("success");
                  setFormMessage("Message sent successfully! I'll get back to you soon.");
                  setFormData({ name: "", email: "", message: "" });
                } else {
                  setFormStatus("error");
                  setFormMessage("Something went wrong. Please try again.");
                }
              } catch {
                setFormStatus("error");
                setFormMessage("Something went wrong. Please try again.");
              }
            }}
          >
            <div>
              <label htmlFor="name" className="block text-sm text-white/60 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm text-white/60 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm text-white/60 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            
            {formStatus !== "idle" && (
              <div className={`p-3 text-sm ${
                formStatus === "success" ? "bg-green-500/20 text-green-400 border border-green-500/30" :
                formStatus === "error" ? "bg-red-500/20 text-red-400 border border-red-500/30" :
                "bg-purple-500/20 text-purple-400 border border-purple-500/30"
              }`}>
                {formStatus === "loading" ? "Sending..." : formMessage}
              </div>
            )}
            
            <button
              type="submit"
              disabled={formStatus === "loading"}
              className="w-full px-8 py-3 border border-purple-500 text-purple-500 font-medium hover:bg-purple-500 hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formStatus === "loading" ? "Sending..." : "Send Message"}
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
          <p>© 2025 Guilherme Pereira. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
