"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "pt";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Nav
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    
    // Hero
    greeting: "Hello, I'm",
    tagline: "A developer.",
    viewWork: "View my work",
    getInTouch: "Get In Touch",
    
    // About
    aboutTitle: "About Me",
    aboutText: "I'm a developer with passion to create elegant solutions to complex problems. When I'm not coding, you can find me exploring new technologies, or enjoying a good gym session.",
    codingFor: "Coding since",
    years: "years",
    days: "days",
    hours: "hours",
    minutes: "min",
    seconds: "sec",
    
    // Skills
    skillsTitle: "Skills",
    learningTitle: "Currently Learning",
    
    // Projects
    projectsTitle: "Projects",
    projectOneTitle: "Project One",
    projectOneDesc: "A brief description of this amazing project and the technologies used.",
    projectTwoTitle: "Project Two",
    projectTwoDesc: "Another cool project showcasing different skills and capabilities.",
    projectThreeTitle: "Project Three",
    projectThreeDesc: "Yet another impressive project that solves real-world problems.",
    viewProject: "View Project →",
    imagePlaceholder: "Image",
    
    // Contact
    contactTitle: "Get In Touch",
    contactText: "I'm always open to new opportunities and interesting projects. Feel free to reach out!",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    messageLabel: "Message",
    messagePlaceholder: "Your message...",
    sendMessage: "Send Message",
    formSuccess: "Message sent successfully! I'll get back to you soon.",
    formError: "Something went wrong. Please try again.",
    formSending: "Sending...",
    
    // Footer
    copyright: "© 2025 Guilherme Pereira. All rights reserved.",
  },
  pt: {
    // Nav
    about: "Sobre",
    skills: "Habilidades",
    projects: "Projetos",
    contact: "Contato",
    
    // Hero
    greeting: "Olá, eu sou",
    tagline: "desenvolvedor.",
    viewWork: "Projetos",
    getInTouch: "Contato",
    
    // About
    aboutTitle: "Sobre Mim",
    aboutText: "Sou um programador com paixão por criar soluções elegantes para problemas complexos. Quando não estou programando, podes encontrar-me explorando novas tecnologias ou aproveitando uma boa sessão de ginásio.",
    codingFor: "Programando há",
    years: "anos",
    days: "dias",
    hours: "horas",
    minutes: "min",
    seconds: "seg",
    
    // Skills
    skillsTitle: "Habilidades",
    learningTitle: "Aprendendo Atualmente",
    
    // Projects
    projectsTitle: "Projetos",
    projectOneTitle: "Projeto Um",
    projectOneDesc: "Uma breve descrição deste projeto incrível e as tecnologias utilizadas.",
    projectTwoTitle: "Projeto Dois",
    projectTwoDesc: "Outro projeto legal mostrando diferentes habilidades e capacidades.",
    projectThreeTitle: "Projeto Três",
    projectThreeDesc: "Mais um projeto impressionante que resolve problemas do mundo real.",
    viewProject: "Ver Projeto →",
    imagePlaceholder: "Imagem",
    
    // Contact
    contactTitle: "Contato",
    contactText: "Estou sempre aberto a novas oportunidades e projetos interessantes. Fique à vontade para entrar em contato!",
    nameLabel: "Nome",
    namePlaceholder: "Nome",
    emailLabel: "Email",
    emailPlaceholder: "seu@email.com",
    messageLabel: "Mensagem",
    messagePlaceholder: "Mensagem...",
    sendMessage: "Enviar Mensagem",
    formSuccess: "Mensagem enviada com sucesso!",
    formError: "erro",
    formSending: "Enviando...",
    
    // Footer
    copyright: "© 2025 Guilherme Pereira. Todos os direitos reservados.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "pt" : "en"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
