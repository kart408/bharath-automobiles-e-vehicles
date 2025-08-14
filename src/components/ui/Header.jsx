import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import Image from '../AppImage';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { label: 'Home', path: '/homepage', icon: 'Home' },
    { label: 'Scooters', path: '/product-catalog', icon: 'Zap' },
    { label: 'About', path: '/about-us', icon: 'Info' },
    { label: 'Contact', path: '/contact', icon: 'Phone' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-elevation-2' 
            : 'bg-white'
        }`}
      >
        <div className="w-full">
          <div className="flex items-center justify-between h-16 px-4 lg:px-6">
            {/* Logo */}
            <Link 
              to="/homepage" 
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg overflow-hidden">
                <Image
                  src="/assets/images/bikes/Piano B Letter Logo.jpeg"
                  alt="Bharath Automobiles Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground leading-tight">
                  Bharath Automobiles
                </span>
                <span className="text-xs font-medium text-secondary leading-tight">
                  E-Vehicles
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                      : 'text-foreground hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20'
                  }`}
                >
                  {item?.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                iconName="Phone"
                iconPosition="left"
                iconSize={16}
                className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = 'tel:+919030362696'}
              >
                Call Now
              </Button>
              <Button
                variant="default"
                size="sm"
                iconName="MessageCircle"
                iconPosition="left"
                iconSize={16}
                className="rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://wa.me/919030362696', '_blank')}
              >
                WhatsApp
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMobileMenu}
              iconName={isMobileMenuOpen ? "X" : "Menu"}
              iconSize={24}
            >
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={toggleMobileMenu}
        />
      )}
      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-white shadow-elevation-3 transform transition-transform duration-300 ease-smooth md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg overflow-hidden">
                <Image
                  src="/assets/images/bikes/Piano B Letter Logo.jpeg"
                  alt="Bharath Automobiles Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground leading-tight">
                  Bharath Automobiles
                </span>
                <span className="text-xs font-medium text-secondary leading-tight">
                  E-Vehicles
                </span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              iconName="X"
              iconSize={20}
            >
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex-1 px-4 py-6">
            <div className="space-y-3">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`flex items-center space-x-3 px-5 py-3.5 rounded-full text-base font-medium transition-all duration-300 ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                      : 'text-foreground hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20'
                  }`}
                  onClick={toggleMobileMenu}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.label}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile CTA */}
          <div className="p-4 border-t border-border space-y-3">
            <Button
              variant="outline"
              fullWidth
              iconName="Phone"
              iconPosition="left"
              iconSize={18}
              className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300"
              onClick={() => {
                window.location.href = 'tel:+919030362696';
                toggleMobileMenu();
              }}
            >
              Call Now
            </Button>
            <Button
              variant="default"
              fullWidth
              iconName="MessageCircle"
              iconPosition="left"
              iconSize={18}
              className="rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              onClick={() => {
                window.open('https://wa.me/919030362696', '_blank');
                toggleMobileMenu();
              }}
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
      {/* Header Spacer */}
      <div className="h-16" />
    </>
  );
};

export default Header;