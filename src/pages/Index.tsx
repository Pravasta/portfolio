import { MainLayout } from '@/layouts/MainLayout';
import { HeroSection } from '@/features/home/HeroSection';
import { ServicesSection } from '@/features/services/ServicesSection';
import { ProjectsSection } from '@/features/projects/ProjectsSection';
import { SkillsSection } from '@/features/skills/SkillsSection';
import { ContactSection } from '@/features/contact/ContactSection';

const Index = () => {
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
