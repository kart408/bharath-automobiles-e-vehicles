import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/homepage' },
    { label: 'Our Scooters', path: '/product-catalog' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Contact', path: '/contact' }
  ];

  const services = [
    'Electric Scooter Sales',
    'Service & Maintenance',
    'Spare Parts',
    'Insurance Assistance',
    'Test Rides',
    'EMI Options'
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', url: 'https://facebook.com' },
    { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com' },
    { name: 'YouTube', icon: 'Youtube', url: 'https://youtube.com' }
  ];

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                  <Icon name="Zap" size={24} color="white" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-tight">
                    Bharath Automobiles
                  </span>
                  <span className="text-sm font-medium text-secondary leading-tight">
                    E-Vehicles
                  </span>
                </div>
              </div>
              
              <p className="text-sm text-gray-300 leading-relaxed">
                Your trusted partner for premium electric scooters in Nizamabad. 
                Driving the future of sustainable transportation in Telangana.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={16} className="text-secondary flex-shrink-0" />
                  <span className="text-sm text-gray-300">
                    Nandipet, Nizamabad, Telangana 503212
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} className="text-secondary flex-shrink-0" />
                  <span className="text-sm text-gray-300">
                    91+ 9030362696
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={16} className="text-secondary flex-shrink-0" />
                  <span className="text-sm text-gray-300">
                    bharathreddy851@gmail.com
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">
                Quick Links
              </h3>
              
              <ul className="space-y-3">
                {quickLinks?.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link?.path}
                      className="text-sm text-gray-300 hover:text-primary transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <Icon 
                        name="ArrowRight" 
                        size={14} 
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                      />
                      <span>{link?.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">
                Our Services
              </h3>
              
              <ul className="space-y-3">
                {services?.map((service, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                    <span className="text-sm text-gray-300">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">
                Connect With Us
              </h3>
              
              <div className="space-y-4">
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    iconName="Phone"
                    iconPosition="left"
                    iconSize={16}
                    onClick={() => window.location.href = 'tel:+919030362696'}
                    className="border-gray-600 text-gray-300 hover:border-primary hover:text-primary"
                  >
                    Call Now
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    iconName="MessageCircle"
                    iconPosition="left"
                    iconSize={16}
                    onClick={() => window.open('https://wa.me/919030362696', '_blank')}
                    className="border-gray-600 text-gray-300 hover:border-success hover:text-success"
                  >
                    WhatsApp
                  </Button>
                </div>
                
                {/* Social Links */}
                <div>
                  <p className="text-sm text-gray-400 mb-3">Follow us on social media</p>
                  <div className="flex space-x-3">
                    {socialLinks?.map((social, index) => (
                      <button
                        key={index}
                        onClick={() => window.open(social?.url, '_blank')}
                        className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200 group"
                        aria-label={`Follow us on ${social?.name}`}
                      >
                        <Icon 
                          name={social?.icon} 
                          size={18} 
                          className="text-gray-400 group-hover:text-white" 
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-gray-400">
                © {currentYear} Bharath Automobiles. All rights reserved.
              </p>
              
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <button className="hover:text-primary transition-colors duration-200">
                  Privacy Policy
                </button>
                <span>•</span>
                <button className="hover:text-primary transition-colors duration-200">
                  Terms of Service
                </button>
                <span>•</span>
                <button className="hover:text-primary transition-colors duration-200">
                  Warranty
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <Icon name="Shield" size={14} className="text-success" />
                <span>Authorized Dealer</span>
              </div>
              
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <Icon name="Award" size={14} className="text-primary" />
                <span>ISO Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;