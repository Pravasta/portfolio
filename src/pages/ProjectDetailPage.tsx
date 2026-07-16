import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Lock,
  X,
} from 'lucide-react';
import { MainLayout } from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ProjectImage } from '@/features/projects/ProjectImage';
import { PrivateCodeDialog } from '@/features/projects/PrivateCodeDialog';
import { getProjectBySlug, hasNoLinks } from '@/features/projects/projects.data';

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  const [showPrivate, setShowPrivate] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <MainLayout>
        <section className="pt-36 pb-32 text-center">
          <div className="section-container">
            <h1 className="text-3xl font-bold mb-4">Project not found</h1>
            <p className="text-muted-foreground mb-8">
              The project you’re looking for doesn’t exist or has been moved.
            </p>
            <Button asChild>
              <Link to="/projects">Browse all projects</Link>
            </Button>
          </div>
        </section>
      </MainLayout>
    );
  }

  const meta = [
    { label: 'Category', value: project.category },
    { label: 'Year', value: project.year },
    { label: 'Role', value: project.role },
  ];

  // Portrait (mobile) screenshots get phone-shaped tiles; landscape stays 16:9.
  const isPortrait = project.orientation === 'portrait';
  const tileAspect = isPortrait ? 'aspect-[9/16]' : 'aspect-video';
  const galleryCols = isPortrait
    ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
    : 'grid-cols-2 md:grid-cols-3';

  const showLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const step = (dir: 1 | -1) =>
    setLightbox((i) =>
      i === null ? i : (i + dir + project.gallery.length) % project.gallery.length,
    );

  return (
    <MainLayout>
      <article className="pt-28 md:pt-36 pb-20 md:pb-32">
        <div className="section-container">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-primary">{project.category}</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
              {project.title}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl">
              {project.summary}
            </p>
          </motion.div>

          {/* Cover */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-2xl overflow-hidden mt-8 aspect-video bg-muted/30"
          >
            <ProjectImage
              src={project.cover}
              alt={`${project.title} cover`}
              emoji={project.emoji}
              color={project.color}
              fit="contain"
              className="h-full w-full"
              emojiClassName="text-8xl"
            />
          </motion.div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 mt-8">
            {project.liveUrl && (
              <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.sourceUrl && (
              <Button variant="outline" asChild>
                <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </a>
              </Button>
            )}
            {hasNoLinks(project) && (
              <Button variant="outline" onClick={() => setShowPrivate(true)}>
                <Lock className="w-4 h-4 mr-2" />
                View Project
              </Button>
            )}
          </div>

          <div className="grid lg:grid-cols-3 gap-10 mt-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold mb-4">About this project</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </div>

            {/* Meta + tech */}
            <aside className="space-y-8">
              <div className="glass-card rounded-2xl p-6 space-y-4">
                {meta.map((m) => (
                  <div key={m.label} className="flex justify-between gap-4 text-sm">
                    <span className="text-muted-foreground">{m.label}</span>
                    <span className="font-medium text-right">{m.value}</span>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {/* Documentation gallery */}
          {project.gallery.length > 0 && (
            <section className="mt-16">
              <h2 className="text-xl font-semibold mb-6">Documentation</h2>
              <div className={`grid ${galleryCols} gap-4`}>
                {project.gallery.map((src, i) => (
                  <motion.button
                    key={src}
                    type="button"
                    onClick={() => showLightbox(i)}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
                    className={`glass-card rounded-xl overflow-hidden ${tileAspect} bg-muted/30 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary`}
                    aria-label={`Open documentation image ${i + 1}`}
                  >
                    <ProjectImage
                      src={src}
                      alt={`${project.title} documentation ${i + 1}`}
                      emoji={project.emoji}
                      color={project.color}
                      fit="contain"
                      className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                      emojiClassName="text-5xl"
                    />
                  </motion.button>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      {/* Private code dialog */}
      <PrivateCodeDialog
        open={showPrivate}
        onOpenChange={setShowPrivate}
        projectTitle={project.title}
      />

      {/* Lightbox */}
      <Dialog open={lightbox !== null} onOpenChange={(o) => !o && closeLightbox()}>
        <DialogContent className="max-w-5xl border-0 bg-transparent p-0 shadow-none [&>button]:hidden">
          {lightbox !== null && (
            <div className="relative">
              <div
                className={`glass-card rounded-2xl overflow-hidden bg-background/95 flex items-center justify-center mx-auto ${
                  isPortrait ? 'h-[85vh] aspect-[9/16]' : 'aspect-video w-full'
                }`}
              >
                <ProjectImage
                  src={project.gallery[lightbox]}
                  alt={`${project.title} documentation ${lightbox + 1}`}
                  emoji={project.emoji}
                  color={project.color}
                  fit="contain"
                  className="h-full w-full"
                  emojiClassName="text-8xl"
                />
              </div>

              <button
                type="button"
                onClick={closeLightbox}
                className="absolute -top-3 -right-3 p-2 rounded-full bg-background border border-border text-foreground hover:bg-secondary transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {project.gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 border border-border text-foreground hover:bg-secondary transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 border border-border text-foreground hover:bg-secondary transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full bg-background/80 border border-border">
                    {lightbox + 1} / {project.gallery.length}
                  </div>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
};

export default ProjectDetailPage;
