import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Join the Electric Revolution?
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Experience the future of mobility with our premium electric scooters. 
              Visit our showroom today for expert consultation, test rides, and exclusive offers.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/product-catalog">
              <Button
                variant="secondary"
                size="lg"
                iconName="Zap"
                iconPosition="left"
                iconSize={20}
                className="bg-white text-primary hover:bg-white/90"
              >
                Explore Our Scooters
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                iconSize={20}
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Schedule Visit
              </Button>
            </Link>
          </div>

          {/* Contact Options */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon name="Phone" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-white mb-1">Call Us</h3>
              <p className="text-white/80 text-sm">91+ 9030362696</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon name="MessageCircle" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-white mb-1">WhatsApp</h3>
              <p className="text-white/80 text-sm">Quick Support</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon name="MapPin" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-white mb-1">Visit Us</h3>
              <p className="text-white/80 text-sm">Nandipet, Nizamabad</p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} />
                <span className="text-sm">Authorized Dealer</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} />
                <span className="text-sm">Warranty Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} />
                <span className="text-sm">400+ Happy Customers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={16} />
                <span className="text-sm">4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;