import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import { Navigation } from '../src/components/Navigation';
import { HeroSection } from '../src/components/HeroSection';
import { SkillsSection } from '../src/components/SkillsSection';
import { ExperienceSection } from '../src/components/ExperienceSection';
import { ProjectsSection } from '../src/components/ProjectsSection';
import { ContactSection } from '../src/components/ContactSection';
import { AnimatedBackground } from '../src/components/AnimatedBackground';
import { Footer } from '../src/components/Footer';
import { useActiveSection } from '../src/hooks/useActiveSection';
import { useDarkMode } from '../src/hooks/useDarkMode';
import { useScroll } from '../src/hooks/useScroll';

export default function Home() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const scrollY = useScroll();
  
  const heroRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sections = [
    { ref: heroRef, id: 'hero' },
    { ref: skillsRef, id: 'skills' },
    { ref: experienceRef, id: 'experience' },
    { ref: projectsRef, id: 'projects' },
    { ref: contactRef, id: 'contact' }
  ];

  const activeSection = useActiveSection(sections);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>Çağdaş Aldoğan - Frontend Developer</title>
        <meta name="description" content="Creative Frontend Developer specializing in modern web technologies and user experience design" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={`min-h-screen overflow-hidden transition-all duration-1000 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900' 
          : 'bg-gradient-to-br from-gray-100 via-blue-50 to-indigo-100'
      }`}>
        <AnimatedBackground isDarkMode={isDarkMode} />
        
        <Navigation 
          activeSection={activeSection}
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
          onNavigate={scrollToSection}
        />

        <section id="hero" ref={heroRef}>
          <HeroSection isDarkMode={isDarkMode} onNavigate={scrollToSection} />
        </section>

        <section id="skills" ref={skillsRef}>
          <SkillsSection isDarkMode={isDarkMode} />
        </section>

        <section id="experience" ref={experienceRef}>
          <ExperienceSection isDarkMode={isDarkMode} />
        </section>

        <section id="projects" ref={projectsRef}>
          <ProjectsSection isDarkMode={isDarkMode} />
        </section>

        <section id="contact" ref={contactRef}>
          <ContactSection isDarkMode={isDarkMode} />
        </section>

        <Footer isDarkMode={isDarkMode} />
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); }
          50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.8); }
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 0 40px rgba(168, 85, 247, 0.8);
            transform: scale(1.05);
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        .animate-slide-in-up {
          animation: slideInUp 0.8s ease-out forwards;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        .touch-manipulation {
          touch-action: manipulation;
        }
        @media (max-width: 768px) {
          .hover-lift:hover {
            transform: translateY(-4px) scale(1.01);
          }
        }
      `}</style>
    </>
  );
}
