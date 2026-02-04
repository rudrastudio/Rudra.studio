import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

// Image imports
import RamkumarImg from '@/assets/team/ramkumar-ramani.png';
import PrabhuImg from '@/assets/team/prabhu-frame-n-focus.jpeg';
import KarshchiniImg from '@/assets/team/karshchini-raj-gupta.png';
import KrishanuImg from '@/assets/team/krishanu-dutta.jpeg';

const teamMembers = [
  {
    name: 'Ramkumar Ramani (Rudra)',
    role: 'Founder / Creative Director',
    subtitle: 'Founder, visionary storyteller & creative force behind Rudrastic Innovations',
    bio: 'Founder and Creative Director of Rudrastic Innovations, shaping powerful visual narratives with a strong artistic vision and strategic storytelling across films, brands, and digital media.',
    image: RamkumarImg,
    instagram: null,
  },
  {
    name: 'Prabhu (Frame N Focus)',
    role: 'Cinematographer / Independent Filmmaker',
    subtitle:
      'Explore • Experience • Expertise | 1.5+ decades of storytelling & craftsmanship',
    bio: 'A seasoned cinematographer and independent filmmaker known for cinematic depth, visual precision, and storytelling excellence across commercial and narrative formats.',
    image: PrabhuImg,
    instagram: 'https://www.instagram.com/framenfocus2014/?hl=en',
  },
  {
    name: 'Karshchini Raj Gupta',
    role: 'Head of Music Producer',
    subtitle:
      'Lead music producer, audio engineer & creative technologist at Rudrastic Innovations',
    bio: 'A lead music producer, audio engineer, and creative technologist who builds scalable systems for audio, content, and production workflows at Rudrastic Innovations.',
    image: KarshchiniImg,
    instagram: 'https://www.instagram.com/karshnirajgupta/?hl=en',
  },
  {
    name: 'Krishanu Dutta',
    role: 'Lead Music Producer',
    subtitle:
      'A versatile musician currently heading Music Production at Rudrastic Innovations',
    bio: 'A versatile musician and lead music producer delivering impactful sound design, compositions, and production leadership across films and digital media.',
    image: KrishanuImg,
    instagram: null,
  },
];

const Team = () => {
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
            Meet Our <span className="text-cinematic-cyan">Team</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The creative minds behind Rudrastic Innovations — storytelling, sound, and cinematic excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black via-cinematic-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-gray-300 text-sm mb-4">
                    {member.bio}
                  </p>

                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-cinematic-gold rounded-full flex items-center justify-center hover:bg-cinematic-cyan transition-colors duration-300"
                    >
                      <Instagram className="h-4 w-4 text-cinematic-black" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cinematic-gold transition-colors duration-300">
                {member.name}
              </h3>

              <p className="text-cinematic-cyan font-semibold">
                {member.role}
              </p>

              <p className="text-gray-400 text-sm mt-1">
                {member.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
