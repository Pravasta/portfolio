import { motion } from 'framer-motion';
import { ArrowRight, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { ProjectCard } from './ProjectCard';
import { featuredProjects, projects } from './projects.data';

export const ProjectsSection = () => {
  const remaining = projects.length - featuredProjects.length;

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="section-container">
        <SectionTitle
          title="Projects"
          subtitle="A showcase of my recent work and personal projects built with passion and precision"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}

          {/* "View all" card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: (featuredProjects.length % 3) * 0.1 }}
            whileHover={{ y: -8 }}
            className="group h-full"
          >
            <Link
              to="/projects"
              className="glass-card rounded-2xl h-full min-h-[220px] flex flex-col items-center justify-center text-center p-8 border-dashed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="View all projects"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <LayoutGrid className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                View All Projects
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Explore {remaining > 0 ? `${remaining} more` : 'the full'} project
                {remaining === 1 ? '' : 's'}
              </p>
              <span className="inline-flex items-center text-sm font-medium text-primary">
                See everything
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
