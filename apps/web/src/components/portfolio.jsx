import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1620942989542-b1b84b20d21c',
    title: ' Documentary',
    description: 'A compelling story of innovation and growth for a leading tech startup',
    categories: ['Documentary', 'Branding'],
  },
  {
    image: 'https://images.unsplash.com/photo-1691180279346-1120b70b2f01',
    title: 'Music Album',
    description: 'Cinematic music video featuring stunning visuals and creative direction',
    categories: ['Music Video', 'Production'],
  },
 
  {
    image: 'https://images.unsplash.com/photo-1563199592-687f283ab0e3',
    title: 'Web Series',
    description: 'Original web series with engaging storytelling and production value',
    categories: ['Web Series', 'Storytelling'],
  },
  {
    image: 'https://images.unsplash.com/photo-1620942989542-b1b84b20d21c',
    title: 'Corporate Video',
    description: 'Professional corporate video showcasing company culture and values',
    categories: ['Corporate', 'Branding'],
  },
  {
    image: 'https://images.unsplash.com/photo-1691180279346-1120b70b2f01',
    title: 'Event Coverage',
    description: 'Dynamic event coverage with multi-camera setup and live streaming',
    categories: ['Event', 'Live Production'],
  },
];

const Portfolio = () => {
  return (
    <section className="py-16 md:py-24 bg-cinematic-deepBlue">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Featured <span className="text-cinematic-cyan">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of award-winning work and creative excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-cinematic-black via-cinematic-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.categories.map((category, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-cinematic-gold/20 border border-cinematic-gold text-cinematic-gold text-xs font-semibold rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                <Button
                  variant="outline"
                  className="border-cinematic-cyan text-cinematic-cyan hover:bg-cinematic-cyan hover:text-cinematic-black w-fit"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
