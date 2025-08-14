import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      src: "/assets/images/bikes/Product roma .jpg",
      alt: "Roma Electric Scooter - Bharath Automobiles"
    },
    {
      src: "/assets/images/bikes/mini-lithino-512-x-512.jpg",
      alt: "Mini Lithino Electric Scooter - Bharath Automobiles"
    },
    {
      src: "/assets/images/bikes/1.jpg",
      alt: "Premium Electric Vehicle - Bharath Automobiles"
    },
    {
      src: "/assets/images/bikes/8.jpg",
      alt: "Modern Electric Scooter - Bharath Automobiles"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* White Background */}
      <div className="absolute inset-0 bg-white" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Drive the
                <span className="text-orange-600 block">Future Today</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto lg:mx-0">
                Discover premium electric scooters at Bharath Automobiles. Eco-friendly, cost-effective, and perfect for modern urban mobility in Nizamabad.
              </p>
            </div>

            {/* Location Badge */}
            <a 
              href="https://maps.app.goo.gl/bgrUiKRK2Mz1GMH38" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-orange-100 rounded-lg shadow-lg border border-orange-200 hover:bg-orange-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <Icon name="MapPin" size={20} className="text-orange-600 mr-3" />
              <div className="text-left">
                <p className="font-semibold text-black">Nandipet, Nizamabad</p>
                <p className="text-sm text-gray-700">Telangana, India</p>
              </div>
            </a>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                iconSize={20}
                className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-xl"
                asChild
              >
                <Link to="/product-catalog">View Our Scooters</Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                iconSize={20}
                className="bg-white text-orange-600 border-orange-600 hover:bg-orange-50 hover:border-orange-700"
                onClick={() => window.location.href = 'tel:+919030362696'}
              >
                Call Now
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <Icon name="Shield" size={16} className="text-orange-600" />
                <span>Authorized Dealer</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <Icon name="Award" size={16} className="text-orange-600" />
                <span>10+ Years in Automobiles</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <Icon name="Users" size={16} className="text-orange-600" />
                <span>400+ Happy Customers</span>
              </div>
            </div>
          </div>

          {/* Hero Image Slideshow */}
          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-elevation-3">
              {/* Image Container */}
              <div className="relative w-full h-96 max-w-lg mx-auto">
                {/* Multiple Scooter Images */}
                {slides.map((slide, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                ))}
              </div>
              
              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide ? 'bg-orange-500' : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
              >
                <Icon name="ChevronLeft" size={20} className="text-orange-600" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
              >
                <Icon name="ChevronRight" size={20} className="text-orange-600" />
              </button>
            </div>
            
            {/* Floating Elements - Positioned over the image */}
            <div className="absolute top-4 right-4 bg-white rounded-xl shadow-lg p-4 border border-orange-200 z-20">
              <div className="flex items-center space-x-2">
                <Icon name="Battery" size={20} className="text-orange-600" />
                <div>
                  <p className="text-sm font-semibold text-black">100% Electric</p>
                  <p className="text-xs text-gray-600">Zero Emissions</p>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg p-4 border border-orange-200 z-20">
              <div className="flex items-center space-x-2">
                <Icon name="IndianRupee" size={20} className="text-orange-600" />
                <div>
                  <p className="text-sm font-semibold text-black">Starting ₹45,000</p>
                  <p className="text-xs text-gray-600">Best Prices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <Icon name="ChevronDown" size={24} className="text-orange-600" />
          <span className="text-xs text-gray-700 font-medium">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;