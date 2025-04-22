"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SectionTransition from '@/components/SectionTransition';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'services', 
        'how-it-works', 
        'pricing', 
        'testimonials', 
        'about', 
        'contact'
      ];
      
      const sectionElements = sections.map(id => 
        document.getElementById(id)
      );
      
      const scrollPosition = window.scrollY + 100; // Add offset for header
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          // Update URL hash without scrolling
          history.replaceState(null, null, `#${sections[i] !== 'hero' ? sections[i] : ''}`);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <Header activeSection={activeSection} />
      
      <SectionTransition id="hero">
        <Hero />
      </SectionTransition>
      
      <SectionTransition id="services">
        <Services />
      </SectionTransition>
      
      <SectionTransition id="how-it-works">
        <HowItWorks />
      </SectionTransition>
      
      <SectionTransition id="pricing">
        <Pricing />
      </SectionTransition>
      
      <SectionTransition id="testimonials">
        <Testimonials />
      </SectionTransition>
      
      <SectionTransition id="about">
        <About />
      </SectionTransition>
      
      <SectionTransition id="contact">
        <Contact />
      </SectionTransition>
      
      <Footer />
    </main>
  );
}
