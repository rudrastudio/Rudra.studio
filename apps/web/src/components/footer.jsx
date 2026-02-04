import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, ArrowRight, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import Logo from '@/components/Logo';

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const address = "Rudrastic Innovations, G-B, Ground Floor, Tharangini Apartment, No.54, Arunachalam Road, Kumaran Colony, Saligramam, Chennai- 600093, Tamil Nadu, India";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    toast({
      title: 'Subscribed!',
      description: 'Thank you for subscribing to our newsletter.',
    });
    setEmail('');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-cinematic-black border-t border-cinematic-lightGray pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Logo size="medium" />
            <p className="text-gray-400 leading-relaxed">
              Rudrastic Innovations is a premier media production house crafting stories that captivate through cutting-edge production and creative excellence.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-cinematic-darkGray hover:bg-cinematic-gold rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <Facebook className="h-5 w-5 text-white group-hover:text-cinematic-black" />
              </a>
              <a href="#" className="w-10 h-10 bg-cinematic-darkGray hover:bg-cinematic-gold rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <Twitter className="h-5 w-5 text-white group-hover:text-cinematic-black" />
              </a>
              <a href="#" className="w-10 h-10 bg-cinematic-darkGray hover:bg-cinematic-gold rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <Instagram className="h-5 w-5 text-white group-hover:text-cinematic-black" />
              </a>
              <a href="#" className="w-10 h-10 bg-cinematic-darkGray hover:bg-cinematic-gold rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <Linkedin className="h-5 w-5 text-white group-hover:text-cinematic-black" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 border-b border-cinematic-gold/30 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Portfolio', 'Team', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link === 'Home' ? 'hero' : link.toLowerCase())}
                    className="text-gray-400 hover:text-cinematic-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-cinematic-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 border-b border-cinematic-gold/30 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cinematic-gold flex-shrink-0 mt-1" />
                <a href="mailto:founder@rudra.studio" className="text-gray-400 hover:text-white transition-colors">
                  founder@rudra.studio
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-cinematic-cyan flex-shrink-0 mt-1" />
                <a href="tel:+918951593406" className="text-gray-400 hover:text-white transition-colors">
                  +91 89515 93406
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cinematic-accent flex-shrink-0 mt-1" />
                <a 
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Rudrastic Innovations,<br/>
                  No.54, Arunachalam Road,<br/>
                  Saligramam, Chennai- 600093
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 border-b border-cinematic-gold/30 pb-2 inline-block">Newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm">
              Subscribe to get the latest updates and insights from Rudrastic Innovations.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Your email"
                  className="w-full pl-9 pr-4 py-2.5 bg-cinematic-darkGray border border-cinematic-lightGray rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-cinematic-gold transition-colors duration-300"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-cinematic-cyan hover:bg-cinematic-cyan/90 text-cinematic-black font-semibold rounded-lg transition-all duration-300"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cinematic-lightGray">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 Rudrastic Innovations. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-cinematic-gold text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cinematic-gold text-sm transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
