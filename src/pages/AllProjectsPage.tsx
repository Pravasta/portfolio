import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { ProjectCard } from '@/features/projects/ProjectCard';
import { projects } from '@/features/projects/projects.data';

const AllProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <section className="pt-28 md:pt-36 pb-20 md:pb-32">
        <div className="section-container">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 md:mb-16"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">All Projects</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
              The complete collection of my professional and personal work —
              {' '}{projects.length} projects and counting.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AllProjectsPage;
