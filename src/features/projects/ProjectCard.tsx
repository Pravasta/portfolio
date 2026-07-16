import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectImage } from './ProjectImage';
import type { Project } from './projects.data';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const MAX_TAGS = 4;

export const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  const visibleTags = project.technologies.slice(0, MAX_TAGS);
  const extraTags = project.technologies.length - visibleTags.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <Link
        to={`/projects/${project.slug}`}
        className="glass-card rounded-2xl overflow-hidden h-full flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label={`View details for ${project.title}`}
      >
        {/* Cover */}
        <div className="relative h-48 overflow-hidden">
          <ProjectImage
            src={project.cover}
            alt={`${project.title} cover`}
            emoji={project.emoji}
            color={project.color}
            className="h-full w-full transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute top-3 left-3 text-xs font-medium px-2.5 py-1 rounded-full bg-background/70 backdrop-blur-sm text-foreground">
            {project.category}
          </span>
          <div className="absolute top-3 right-3 p-2 rounded-full bg-background/70 backdrop-blur-sm opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 text-primary" />
          </div>
        </div>

        {/* Info (no description — that lives on the detail page) */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center justify-between gap-2 mb-3">
            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <span className="text-xs text-muted-foreground shrink-0">{project.year}</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-auto">
            {visibleTags.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary"
              >
                {tech}
              </span>
            ))}
            {extraTags > 0 && (
              <span className="text-xs px-2 py-1 rounded-md bg-secondary/60 text-muted-foreground">
                +{extraTags}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
