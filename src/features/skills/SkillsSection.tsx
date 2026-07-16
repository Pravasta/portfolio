import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';

const skillCategories = [
  {
    title: 'Mobile Development',
    skills: [
      'Flutter',
      'Dart',
      'Android',
      'iOS',
      'Cross Platform Development',
    ],
  },
  {
    title: 'Web Development',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      'Go',
      'Laravel',
      'REST API',
      'WebSocket',
      'Node.js',
    ],
  },
  {
    title: 'Database & Cloud',
    skills: [
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'Firebase',
      'Supabase',
    ],
  },
  {
    title: 'Tools',
    skills: [
      'Git',
      'Figma',
      'Postman',
      'VS Code',
      'Android Studio',
      'Claude (AI Pair Programming)',
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-600/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <SectionTitle
          title="Skills"
          subtitle="A comprehensive overview of my technical expertise"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold mb-6 gradient-text">{category.title}</h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <span className="font-medium text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Skill Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <p className="text-center text-muted-foreground text-sm mb-6">All Technologies</p>
          <div className="flex flex-wrap justify-center gap-3">
            {skillCategories.flatMap((cat) => cat.skills).map((skill, index) => (
              <motion.span
                key={`${skill}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.02 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm font-medium hover:border-primary/50 hover:bg-secondary transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
