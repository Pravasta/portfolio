import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { useState } from 'react';

const projects = [
  // {
  //   title: 'JualinFnb (Launching Soon)',
  //   description:
  //     'An all-in-one Point of Sale platform for food and beverage businesses, built by a team of three founders. I contribute to the development of the Flutter application while collaborating on product design, system architecture, and feature planning. The platform includes a cashier app, business dashboard, and landing page, with support for inventory management, reporting, multi-store operations, and resilient online-first transactions with offline fallback capabilities.',
  //   image: '🚀',
  //   technologies: [
  //     'Flutter',
  //     'Node.js',
  //     'React',
  //     'PostgreSQL',
  //     'SQLite',
  //     'Figma',
  //     'REST API',
  //   ],
  //   github: '#',
  //   demo: '#',
  //   color: 'from-sky-500/20 to-blue-500/20',
  // },
  {
    title: 'Point of Sale (POS) System',
    description:
      'Professional project developed at PT Sadavir Utama Nusamedia. A multi-platform POS solution built with Flutter for Android, iOS, macOS, and Linux. Features include offline-first transactions using SQLite, real-time synchronization via WebSocket, inventory management, receipt printing, cashier operations, QR/barcode scanning, and POS hardware integration. Currently in final development and preparing for production release.',
    image: '🧾',
    technologies: [
      'Flutter',
      'Go',
      'SQLite',
      'WebSocket',
      'MySQL',
      'Firebase',
    ],
    github: '#',
    demo: '#',
    color: 'from-blue-500/20 to-cyan-500/20',
  },

  {
    title: 'Infusion Monitoring System',
    description:
      'A real-time healthcare monitoring application developed for client operations. Built using Flutter and Go with WebSocket technology to provide live infusion status updates, device identification, event monitoring, and critical alert notifications. Successfully deployed and actively used in operational environments.',
    image: '🏥',
    technologies: [
      'Flutter',
      'Go',
      'WebSocket',
      'Bloc',
      'REST API',
      'VPS',
    ],
    github: 'https://github.com/Pravasta/health_reminder',
    demo: 'https://github.com/Pravasta/health_reminder',
    color: 'from-red-500/20 to-orange-500/20',
  },

  {
    title: 'Qobiltu Indonesia',
    description:
      'Mobile application developed for Qobiltu Indonesia, a platform supporting the Islamic marriage process including ta’aruf, nadzhor, and khitbah. Responsible for Flutter development, REST API integration, Firebase Authentication, analytics, push notifications, and implementation of the design system from Figma.',
    image: '💍',
    technologies: [
      'Flutter',
      'Firebase',
      'REST API',
      'Figma',
      'Analytics',
    ],
    github: 'https://qobiltu.id/',
    demo: 'https://qobiltu.id/',
    color: 'from-purple-500/20 to-pink-500/20',
  },

  {
    title: 'Recycle Management System',
    description:
      'An internal enterprise application developed for recycling operations management. Built with Flutter to support cross-platform workflows, order management, material tracking, and operational reporting. Focused on responsive user interfaces, maintainable architecture, and seamless backend integration.',
    image: '♻️',
    technologies: [
      'Flutter',
      'REST API',
      'Linux',
      'Android',
      'Cross Platform',
    ],
    github: '#',
    demo: '#',
    color: 'from-green-500/20 to-emerald-500/20',
  },

  {
    title: 'Madang App',
    description:
      'A meal planning application that helps users organize daily meals, save favorite foods, and create personalized eating schedules. Built as a personal project to explore mobile application development and user-centered design.',
    image: '🍜',
    technologies: [
      'Flutter',
      'Dart',
      'REST API',
    ],
    github: 'https://github.com/Pravasta/MadangApp',
    demo: 'https://github.com/Pravasta/MadangApp',
    color: 'from-orange-500/20 to-yellow-500/20',
  },
];

export const ProjectsSection = () => {
  const [showDevDialog, setShowDevDialog] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState<{ [key: string]: boolean }>({});

  const handlePOSClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDevDialog(true);
  };

  const toggleDescription = (projectTitle: string) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectTitle]: !prev[projectTitle]
    }));
  };

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="section-container">
        <SectionTitle
          title="Projects"
          subtitle="A showcase of my recent work and personal projects built with passion and precision"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col">
                {/* Project Image */}
                <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <motion.span
                    className="text-6xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {project.image}
                  </motion.span>

                  {/* Overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    {project.title === 'POS Application' ? (
                      <>
                        <motion.button
                          onClick={handlePOSClick}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-3 rounded-xl bg-secondary/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                          onClick={handlePOSClick}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-3 rounded-xl bg-secondary/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.button>
                      </>
                    ) : (
                      <>
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-3 rounded-xl bg-secondary/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-3 rounded-xl bg-secondary/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      </>
                    )}
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="mb-4 flex-1">
                    <p 
                      className={`text-muted-foreground text-sm leading-relaxed ${
                        !expandedProjects[project.title] ? 'line-clamp-4' : ''
                      }`}
                    >
                      {project.description}
                    </p>
                    {project.description.length > 150 && (
                      <button
                        onClick={() => toggleDescription(project.title)}
                        className="text-primary text-xs mt-2 hover:underline"
                      >
                        {expandedProjects[project.title] ? 'Show Less' : 'Show More'}
                      </button>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.title === 'POS Application' ? (
                    <Button variant="ghost" size="sm" className="w-fit group/btn" onClick={handlePOSClick}>
                      View Project
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  ) : (
                    <Button variant="ghost" size="sm" className="w-fit group/btn" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        View Project
                        <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Development Dialog */}
      <AlertDialog open={showDevDialog} onOpenChange={setShowDevDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>🚧 Under Development</AlertDialogTitle>
            <AlertDialogDescription>
              Aplikasi ini sedang dalam tahap pengembangan dan akan segera rilis. 
              Terima kasih atas kesabaran Anda menunggu!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Mengerti</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
};
