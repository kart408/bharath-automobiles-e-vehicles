import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import TeamSection from './components/TeamSection';
import TestimonialsSection from './components/TestimonialsSection';
import FacilitiesSection from './components/FacilitiesSection';
import CTASection from './components/CTASection';

const AboutUs = () => {
  useEffect(() => {
    document.title = 'About Us - Bharath Automobiles E-Vehicles';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-4">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <Breadcrumb />
        </div>
        
        <HeroSection />
        <StorySection />
        <TeamSection />
        <TestimonialsSection />
        <FacilitiesSection />
        <CTASection />
      </main>
    </div>
  );
};

export default AboutUs;