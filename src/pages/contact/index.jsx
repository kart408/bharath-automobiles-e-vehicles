import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ContactInfo from './components/ContactInfo';
import LocationMap from './components/LocationMap';
import TestimonialSection from './components/TestimonialSection';
import Icon from '../../components/AppIcon';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us - Bharath Automobiles E-Vehicles';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 lg:px-6 py-8">
        <Breadcrumb />
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Icon name="MessageSquare" size={32} className="text-primary" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to switch to electric? Contact our expert team for personalized guidance, 
            test rides, and the best deals on electric scooters in Nizamabad.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-12">
          {/* Contact Information - Takes full width on desktop */}
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>

        {/* Location Map */}
        <div className="mb-12">
          <LocationMap />
        </div>

        {/* Customer Testimonials */}
        <div className="mb-12">
          <TestimonialSection />
        </div>

        {/* Emergency Contact Banner */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 lg:p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Clock" size={24} color="white" />
              <h2 className="text-xl lg:text-2xl font-bold text-white">
                Need Immediate Assistance?
              </h2>
            </div>
            <p className="text-white/90 mb-6">
              Our customer support team is available during business hours. 
              For urgent inquiries or roadside assistance, contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="tel:+919030362696"
                className="inline-flex items-center space-x-2 bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200"
              >
                <Icon name="Phone" size={18} />
                <span>Call: 91+ 9030362696</span>
              </a>
              <a
                href="https://wa.me/919030362696?text=Hi, I need immediate assistance with my electric scooter."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white/10 text-white border border-white/20 px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors duration-200"
              >
                <Icon name="MessageCircle" size={18} />
                <span>WhatsApp Support</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-foreground text-white py-8 mt-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <img 
                  src="/assets/images/bikes/Piano B Letter Logo.jpeg" 
                  alt="Bharath Automobiles Logo" 
                  className="w-8 h-8 object-cover rounded"
                />
              </div>
              <span className="text-lg font-bold">Bharath Automobiles E-Vehicles</span>
            </div>
            <p className="text-white/70 mb-4">
              Your trusted partner for sustainable mobility solutions in Telangana
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-white/60">
              <span>Nandipet, Nizamabad</span>
              <span>•</span>
              <span>Since 2019</span>
              <span>•</span>
              <span>Authorized Dealer</span>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm text-white/50">
                © {new Date()?.getFullYear()} Bharath Automobiles E-Vehicles. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;