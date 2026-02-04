import React from 'react';
import { motion } from 'framer-motion';
import { Video, Film, BookOpen, Palette, Music, Tv, Megaphone, Users, Mic } from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Production',
    description: 'Full-scale video production from concept to final cut, delivering cinematic quality that exceeds expectations.',
  },
  {
    icon: Film,
    title: 'Post-Production',
    description: 'Expert editing, color grading, VFX, and sound design to polish your content to perfection.',
  },
  {
    icon: BookOpen,
    title: 'Storytelling',
    description: 'Compelling narratives that connect with audiences and drive engagement through powerful storytelling.',
  },
  {
    icon: Palette,
    title: 'Branding',
    description: 'Strategic brand development and visual identity creation that sets you apart from the competition.',
  },
  {
    icon: Music,
    title: 'Music Production',
    description: 'Original scores, soundtracks, and audio production that elevates your content to new heights.',
  },
  {
    icon: Tv,
    title: 'Web Series',
    description: 'End-to-end web series production, from scriptwriting to distribution across digital platforms.',
  },
  {
    icon: Megaphone,
    title: 'Content Creation',
    description: 'Engaging digital content tailored for social media, websites, and marketing campaigns.',
  },
  {
    icon: Users,
    title: 'Management',
    description: 'Comprehensive project management ensuring seamless execution from pre-production to delivery.',
  },
  {
    icon: Mic,
    title: 'Podcasts',
    description: 'Professional podcast production with recording, editing, and distribution support.',
  },
];

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-cinematic-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-cinematic-gold">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions for all your creative and production needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-cinematic-darkGray to-cinematic-mediumGray p-8 rounded-xl border border-cinematic-lightGray hover:border-cinematic-gold transition-all duration-300 cursor-pointer group"
            >
              <div className="mb-6">
                <service.icon className="h-12 w-12 text-cinematic-cyan group-hover:text-cinematic-gold transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cinematic-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
