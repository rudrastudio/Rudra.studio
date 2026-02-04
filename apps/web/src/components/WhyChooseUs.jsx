import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, Users, TrendingUp } from 'lucide-react';

const differentiators = [
  {
    icon: Award,
    title: 'Award-Winning Excellence',
    description: 'Our work has been recognized with multiple industry awards and accolades, showcasing our commitment to creative excellence.',
    stat: '1',
    statLabel: 'Awards Won',
  },
  {
    icon: Zap,
    title: 'Cutting-Edge Technology',
    description: 'We leverage the latest production technology and techniques to deliver stunning visuals and immersive experiences.',
    stat: '48+',
    statLabel: 'Projects Delivered',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our diverse team of creative professionals brings decades of combined experience across all aspects of production.',
    stat: '25+',
    statLabel: 'Team Members',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'We deliver measurable results that drive engagement, build brands, and create lasting impact for our clients.',
    stat: '98%',
    statLabel: 'Client Satisfaction',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-cinematic-black relative overflow-hidden">
      {/* Background Gradient Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cinematic-gold/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-cinematic-cyan/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Why Choose <span className="bg-gradient-to-r from-cinematic-gold to-cinematic-cyan bg-clip-text text-transparent">Rudrastic Innovations</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We combine creativity, technology, and expertise to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-cinematic-darkGray to-cinematic-mediumGray p-8 rounded-xl border border-cinematic-lightGray hover:border-cinematic-gold transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-cinematic-gold to-cinematic-cyan rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-8 w-8 text-cinematic-black" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cinematic-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold bg-gradient-to-r from-cinematic-gold to-cinematic-cyan bg-clip-text text-transparent">
                      {item.stat}
                    </span>
                    <span className="text-gray-500 text-sm font-semibold">
                      {item.statLabel}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
