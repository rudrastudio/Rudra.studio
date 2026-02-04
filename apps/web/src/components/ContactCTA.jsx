import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Calendar, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContactCTA = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const GOOGLE_FORM_LINK =
    'https://docs.google.com/forms/d/e/1FAIpQLSdQIc9eFc5R0_tr4St5jAUw8Hp9nj64srs6EWm73hcywDpkdw/viewform?usp=header';

  const address =
    'Rudrastic Innovations, G-B, Ground Floor, Tharangini Apartment, No.54, Arunachalam Road, Kumaran Colony, Saligramam, Chennai- 600093, Tamil Nadu, India';

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Common handler for all form-related actions
  const openGoogleForm = (actionLabel = 'Request Submitted') => {
    toast({
      title: actionLabel,
      description: 'You’ll be redirected to our online form.',
    });

    window.open(GOOGLE_FORM_LINK, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      openGoogleForm('Message Sent!');

      setFormData({
        name: '',
        email: '',
        serviceType: '',
        message: '',
      });

      setIsSubmitting(false);
    }, 1500);
  };

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
            Let&apos;s Create{' '}
            <span className="text-cinematic-gold">Together</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch with Rudrastic Innovations today
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cinematic-darkGray border border-cinematic-lightGray rounded-xl text-white"
                  placeholder="Madhavan"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cinematic-darkGray border border-cinematic-lightGray rounded-xl text-white"
                  placeholder="madhavan@example.com"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Service Type
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cinematic-darkGray border border-cinematic-lightGray rounded-xl text-white"
                >
                  <option value="">Select a service</option>
                  <option value="production">Production</option>
                  <option value="post-production">Post-Production</option>
                  <option value="storytelling">Storytelling</option>
                  <option value="branding">Branding</option>
                  <option value="music">Music Production</option>
                  <option value="web-series">Web Series</option>
                  <option value="content">Content Creation</option>
                  <option value="management">Management</option>
                  <option value="podcasts">Podcasts</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-cinematic-darkGray border border-cinematic-lightGray rounded-xl text-white resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cinematic-gold text-cinematic-black py-6 text-lg rounded-xl hover:scale-105"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>

          {/* Right Side Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Button
              onClick={() => openGoogleForm('Get a Quote')}
              className="w-full bg-cinematic-cyan text-cinematic-black py-6 rounded-xl"
            >
              <Phone className="mr-2 h-5 w-5" />
              Get a Quote
            </Button>

            <Button
              onClick={() => openGoogleForm('Schedule a Call')}
              variant="outline"
              className="w-full border-cinematic-gold text-cinematic-gold py-6 rounded-xl"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-white hover:text-cinematic-gold"
            >
              <MapPin />
              <span>{address}</span>
            </a>

            <a
              href="mailto:founder@rudra.studio"
              className="flex items-center gap-3 text-white hover:text-cinematic-gold"
            >
              <Mail />
              founder@rudra.studio
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
