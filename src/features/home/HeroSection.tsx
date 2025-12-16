import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const techStack = [
  { name: 'Flutter', icon: 'https://skillicons.dev/icons?i=flutter' },
  { name: 'Dart', icon: 'https://skillicons.dev/icons?i=dart' },
  { name: 'Laravel', icon: 'https://skillicons.dev/icons?i=laravel' },
  { name: 'PHP', icon: 'https://skillicons.dev/icons?i=php' },
  { name: 'Git', icon: 'https://skillicons.dev/icons?i=git' },
  { name: 'Figma', icon: 'https://skillicons.dev/icons?i=figma' },
  { name: 'VS Code', icon: 'https://skillicons.dev/icons?i=vscode' },
  { name: 'Postman', icon: 'https://skillicons.dev/icons?i=postman' },
  { name: 'HTML', icon: 'https://skillicons.dev/icons?i=html' },
  { name: 'Go', icon: 'https://skillicons.dev/icons?i=go' },
  { name: 'REST API', icon: 'https://skillicons.dev/icons?i=network' },
  { name: 'MySQL', icon: 'https://skillicons.dev/icons?i=mysql' },
  { name: 'PostgreSQL', icon: 'https://skillicons.dev/icons?i=postgres' },
  { name: 'Firebase', icon: 'https://skillicons.dev/icons?i=firebase' },
  { name: 'Supabase', icon: 'https://skillicons.dev/icons?i=supabase' },
  { name: 'Sqlite', icon: 'https://skillicons.dev/icons?i=sqlite' },
  { name: 'Android Studio', icon: 'https://skillicons.dev/icons?i=androidstudio' }
];

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-navy-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-sm md:text-base mb-4"
            >
              👋 Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4"
            >
              <span className="gradient-text">Pravasta Rama Fitrayana</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium mb-6"
            >
              Flutter Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-base md:text-lg max-w-xl mb-8"
            >
              Passionate about creating beautiful, performant mobile applications 
              with Flutter. Currently exploring AI integration, backend development 
              with Laravel, and learning GO for real-time applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: 'https://github.com/Pravasta', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/pravasta-rama-f-004367211/', label: 'LinkedIn' },
                { icon: Mail, href: 'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlJWKzXcWpWBXhqzgCNdHqXzVGTfTmbntDCfNRKCzgRwsVqmPxzxrtnkXHGkQbNXhhcBLB', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image & Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative"
          >
            {/* Profile Picture Placeholder */}
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-navy-600/20" />
              <img 
                src="https://ui-avatars.com/api/?name=Pravasta+Rama&size=512&background=3b82f6&color=ffffff&bold=true&font-size=0.4"
                alt="Pravasta Rama Avatar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute inset-0 -z-10">
              {techStack.slice(0, 4).map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="absolute tech-badge flex items-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  style={{
                    top: `${[10, 20, 70, 80][index]}%`,
                    left: `${[-5, 85, -10, 90][index]}%`,
                  }}
                >
                  <img src={tech.icon} alt={tech.name} className="w-5 h-5 mr-1" />
                  <span className="hidden sm:inline">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 md:mt-24"
        >
          <p className="text-center text-muted-foreground text-sm mb-6">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="tech-badge cursor-default flex items-center"
              >
                <img src={tech.icon} alt={tech.name} className="w-5 h-5 mr-2" />
                {tech.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs">Scroll Down</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
