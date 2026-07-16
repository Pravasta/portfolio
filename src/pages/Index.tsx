import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { HeroSection } from '@/features/home/HeroSection';
import { ServicesSection } from '@/features/services/ServicesSection';
import { ProjectsSection } from '@/features/projects/ProjectsSection';
import { SkillsSection } from '@/features/skills/SkillsSection';
import { ContactSection } from '@/features/contact/ContactSection';

const Index = () => {
  const location = useLocation();

  // Support deep links like "/#projects" (e.g. returning from a project page).
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        // Defer so sections are mounted before scrolling.
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }));
      }
    }
  }, [location.hash]);

  return (
    <MainLayout>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </MainLayout>
  );
};

export default Index;
