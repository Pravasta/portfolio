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
  {
    title: 'POS Application',
    description: 'A POS application designed specifically for small and medium-sized businesses (UMKM). This application offers a complete set of features including real-time stock tracking, sales transaction processing and receipt printing, detailed reporting and analytics, reservation and seating management, integrated payment gateways, offline and online operation modes, multi-store management for different types of businesses, staff and customer management, cashier opening and closing, subscription management, AI integration, and many more tools to support daily operations efficiently.',
    image: '🧾',
    technologies: ['Flutter', 'Node.js', 'MySQL', 'SQLite', 'Firebase'],
    github: 'https://github.com',
    demo: 'https://example.com',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Qobiltu Indonesia',
    description: 'An application designed to facilitate the Islamic marriage process, including ta’aruf, nadzhor, and khitbah, in a structured, respectful, and sharia-compliant manner.This platform helps individuals and families connect through a guided process that prioritizes values, intentions, and transparency. It provides features for profile introduction based on personal values and background, supervised communication, family involvement, scheduled nadzhor sessions, khitbah planning, and proper documentation throughout each stage. The application aims to support sincere intentions toward marriage while maintaining ethical boundaries, privacy, and cultural sensitivity.',
    image: '💍',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST API', 'Figma'],
    github: 'https://qobiltu.id/',
    demo: 'https://qobiltu.id/',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Madang App',
    description: 'Preferred to save in favorite food list and create schedule for meal planning.',
    image: '🍜',
    technologies: ['Flutter', 'Dart', 'REST API'],
    github: 'https://github.com/Pravasta/MadangApp',
    demo: 'https://github.com/Pravasta/MadangApp',
    color: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    title: 'Small Chat Using GO-WebSocket',
    description: 'A real-time chat application built with Flutter for the frontend and Go for the backend, utilizing WebSocket technology to enable instant messaging capabilities. This project demonstrates the integration of a high-performance Go server that manages WebSocket connections, allowing users to send and receive messages in real-time with minimal latency. The Flutter frontend provides a user-friendly interface for seamless communication, showcasing the power of combining these technologies for efficient and responsive chat applications.',
    image: '🔌',
    technologies: ['Flutter', 'Go', 'WebSocket'],
    github: 'https://github.com/Pravasta/chat_flutter_go_socket',
    demo: 'https://github.com/Pravasta/chat_flutter_go_socket',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'More Projects',
    description: 'For more of my projects, please visit my GitHub profile.',
    image: '🚀',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    github: 'https://github.com/Pravasta',
    demo: 'https://github.com/Pravasta',
    color: 'from-indigo-500/20 to-blue-500/20',
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
