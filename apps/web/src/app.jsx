import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Team from '@/components/Team';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Rudrastic Innovations - Media Production & Content Creation</title>
        <meta
          name="description"
          content="Rudrastic Innovations transforms your vision into cinematic experiences through cutting-edge production, storytelling, and creative excellence. Award-winning production company specializing in video production, post-production, branding, and content creation."
        />
      </Helmet>

      <div className="bg-cinematic-black scroll-smooth">
        <Header />
        <Hero />
        <div id="services">
          <Services />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <WhyChooseUs />
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="team">
          <Team />
        </div>
        <div id="contact">
          <ContactCTA />
        </div>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
