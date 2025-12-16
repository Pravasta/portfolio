import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'fitrayanaf15@gmail.com', href: 'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlJWKzXcWpWBXhqzgCNdHqXzVGTfTmbntDCfNRKCzgRwsVqmPxzxrtnkXHGkQbNXhhcBLB' },
  { icon: MapPin, label: 'Location', value: 'Cibubur, Bekasi', href: 'https://maps.app.goo.gl/YoYLXAtQoR1BPfTEA' },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/Pravasta' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/pravasta-rama-f-004367211/' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/fitrayanaf/' },
];

export const ContactSection = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:fitrayanaf15@gmail.com?subject=Project Inquiry&body=Hi Fitriyana,%0D%0A%0D%0AI would like to discuss a project with you.';
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <SectionTitle
          title="Get in Touch"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you!"
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-3xl p-8 md:p-12 text-center"
          >
            {/* Main CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Send className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Let's Work Together</h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                Whether you have a mobile app idea, need backend development, or want to 
                discuss potential collaboration, feel free to reach out!
              </p>
              <Button
                variant="hero"
                size="xl"
                onClick={handleContactClick}
                className="group"
              >
                <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Send Me an Email
              </Button>
            </motion.div>

            {/* Divider */}
            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border/50" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-card text-muted-foreground text-sm">or connect via</span>
              </div>
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-4 mb-8"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  whileHover={{ y: -4 }}
                  className="p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all duration-300"
                >
                  {info.href ? (
                    <a href={info.href} className="flex items-center justify-center gap-3">
                      <info.icon className="w-5 h-5 text-primary" />
                      <div className="text-left">
                        <p className="text-xs text-muted-foreground">{info.label}</p>
                        <p className="font-medium hover:text-primary transition-colors">{info.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center justify-center gap-3">
                      <info.icon className="w-5 h-5 text-primary" />
                      <div className="text-left">
                        <p className="text-xs text-muted-foreground">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex justify-center gap-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-xl bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
