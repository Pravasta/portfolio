import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';

const skillCategories = [
  {
    title: 'Mobile Development',
    skills: [
      { name: 'Flutter', level: 'Advanced' },
      { name: 'Dart', level: 'Advanced' },
      { name: 'Android', level: 'Advanced' },
      { name: 'iOS', level: 'Advanced' },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Laravel', level: 'Intermediate' },
      { name: 'Firebase', level: 'Intermediate' },
      { name: 'MySQL', level: 'Intermediate' },
      { name: 'REST APIs', level: 'Intermediate' },
      { name: 'Go', level: 'Beginner' },
    ],
  },
  {
    title: 'Tools & Design',
    skills: [
      { name: 'Git', level: 'Advanced' },
      { name: 'Figma', level: 'Advanced' },
      { name: 'VS Code', level: 'Advanced' },
      { name: 'Postman', level: 'Advanced' },
      { name: 'Android Studio', level: 'Intermediate' },
    ],
  },
  {
    title: 'Other Technologies',
    skills: [
      { name: 'HTML/CSS', level: 'Beginner' },
      { name: 'PostgreSQL', level: 'Beginner' },
      { name: 'Supabase', level: 'Beginner' },
      { name: 'SQLite', level: 'Intermediate' },
    ],
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Expert':
      return 'bg-primary text-primary-foreground';
    case 'Advanced':
      return 'bg-navy-600 text-foreground';
    case 'Intermediate':
      return 'bg-secondary text-secondary-foreground';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

const getLevelPercentage = (level: string) => {
  switch (level) {
    case 'Expert':
      return 100;
    case 'Advanced':
      return 85;
    case 'Intermediate':
      return 65;
    default:
      return 40;
  }
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-600/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <SectionTitle
          title="Skills"
          subtitle="A comprehensive overview of my technical expertise and proficiency levels"
        />

        <div className="grid md:grid-cols-2 gap-8">
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
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative h-2 bg-secondary/30 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${getLevelPercentage(skill.level)}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2, ease: 'easeOut' }}
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                      />
                    </div>
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
                key={`${skill.name}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.02 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm font-medium hover:border-primary/50 hover:bg-secondary transition-all duration-300 cursor-default"
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
