import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with Rudrastic Innovations transformed our brand's visual identity. Their creative vision and technical expertise delivered results beyond our expectations.",
    name: 'Karshchini Raj Gupta',
    role: 'CEO',
    logo: '🚀',
  },
  {
    quote: "The production quality Rudrastic Innovations delivered was exceptional. They brought our story to life in ways we never imagined possible.",
    name: 'Michael Raj',
    role: 'Marketing Director',
    logo: '💡',
  },
  {
    quote: "From concept to delivery, the entire process with Rudrastic Innovations was seamless. Their professionalism and creativity set them apart in the industry.",
    name: 'Monka Anandan',
    role: 'Specialist',
    logo: '⭐',
  },
  {
    quote: "Outstanding work on our web series! The storytelling and production value Rudrastic Innovations provided exceeded all expectations. Highly recommended.",
    name: 'David Sundarrajan',
    role: 'Creative Director',
    logo: '🎬',
  },
  {
    quote: "Their team's expertise in post-production and VFX is unmatched. Rudrastic Innovations turned our raw footage into a cinematic masterpiece.",
    name: 'Ramani Ram',
    role: 'Producer',
    logo: '🎥',
  },
  {
    quote: "The best investment we made for our brand. Rudrastic Innovations' creative solutions and execution were flawless from start to finish.",
    name: 'Ravi Shree',
    role: 'Brand Manager',
    logo: '🌟',
  },
];

const highlightCompanyName = (text) => {
  const parts = text.split('Rudrastic Innovations');
  return (
    <span>
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {part}
          {i < parts.length - 1 && (
            <span className="text-[#FFD700] font-bold drop-shadow-[0_0_2px_rgba(255,215,0,0.5)]">Rudrastic Innovations</span>
          )}
        </React.Fragment>
      ))}
    </span>
  );
};

const Testimonials = () => {
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
            Client <span className="text-cinematic-gold">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Hear what our clients say about working with Rudrastic Innovations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-cinematic-darkGray to-cinematic-mediumGray p-8 rounded-xl border border-cinematic-lightGray hover:border-cinematic-cyan transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-cinematic-gold/20" />
              
              <div className="mb-6">
                <p className="text-gray-300 leading-relaxed italic">
                  "{highlightCompanyName(testimonial.quote)}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-cinematic-lightGray">
                <div className="w-12 h-12 bg-gradient-to-br from-cinematic-gold to-cinematic-cyan rounded-full flex items-center justify-center text-2xl">
                  {testimonial.logo}
                </div>
                <div>
                  <h4 className="text-white font-bold">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Logos Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 pt-16 border-t border-cinematic-lightGray"
        >
          <p className="text-center text-white font-semibold mb-8 text-lg drop-shadow-lg">
            Trusted by leading brands and startups worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              { text: '🚀 TechVision', color: 'text-white' },
              { text: '💡 InnovateCo', color: 'text-[#FFD700]' },
              { text: '⭐ StartupHub', color: 'text-white' },
              { text: '🎬 MediaWorks', color: 'text-[#FFD700]' },
              { text: '🎥 FilmCraft', color: 'text-white' },
              { text: '🌟 GlobalBrands', color: 'text-[#FFD700]' },
            ].map((brand, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1 }}
                className={`text-3xl md:text-4xl font-semibold ${brand.color} hover:opacity-100 transition-opacity duration-300 drop-shadow-md`}
              >
                {brand.text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
