import { motion } from 'framer-motion';
import { Smartphone, Server, Cloud, Code } from 'lucide-react';
import { AnimatedCard } from '@/components/AnimatedCard/AnimatedCard';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';

const services = [
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Building beautiful, cross-platform mobile applications using Flutter with exceptional performance and native-like experiences.',
    technologies: ['Flutter', 'Dart', 'Android', 'iOS', 'Figma', 'Git', 'VS Code' ],
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Creating robust and scalable backend solutions using Laravel. Currently learning Go for high-performance real-time applications.',
    technologies: ['Laravel', 'PHP', 'Go', 'MySQL', 'PostgreSQL', 'Firebase', 'Supabase'],
  },
  {
    icon: Cloud,
    title: 'Cloud Integration',
    description: 'Integrating cloud services for authentication, storage, and real-time data synchronization in mobile applications.',
    technologies: ['Firebase', 'Google Cloud', 'REST API'],
  },
  {
    icon: Code,
    title: 'AI Integration',
    description: 'Contributing to AI-powered features and integrating intelligent solutions into mobile and web applications.',
    technologies: ['AI/ML', 'API Integration', 'Flutter'],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <SectionTitle
          title="Services"
          subtitle="Comprehensive solutions tailored to bring your ideas to life with cutting-edge technologies"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, index) => (
            <AnimatedCard key={service.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                  >
                    <service.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                </div>

                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatedCard>
          ))}
        </div>

        {/* Card ke-4 di tengah */}
        <div className="flex justify-center mt-6">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <AnimatedCard delay={0.3}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                  >
                    {(() => {
                      const Icon = services[3].icon;
                      return <Icon className="w-6 h-6 text-primary" />;
                    })()}
                  </motion.div>
                </div>

                <h3 className="text-xl font-semibold mb-3">{services[3].title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {services[3].description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {services[3].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};
