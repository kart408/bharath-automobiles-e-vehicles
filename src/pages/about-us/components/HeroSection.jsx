import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  // Image slides data
  const imageSlides = [
    {
      src: "/assets/images/bikes/scooters/Product roma  (1).jpg",
      alt: "Product Roma Electric Scooter"
    },
    {
      src: "/assets/images/bikes/1.jpg",
      alt: "Electric Scooter Model 1"
    },
    {
      src: "/assets/images/bikes/8.jpg",
      alt: "Electric Scooter Model 8"
    },
    {
      src: "/assets/images/bikes/mini-lithino-512-x-512.jpg",
      alt: "Mini Lithino Electric Scooter"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides with slow transition
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === imageSlides?.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000); // 4 seconds per slide for slow animation

    return () => clearInterval(slideInterval);
  }, [imageSlides?.length]);

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Driving the Future of 
                <span className="text-primary"> Electric Mobility</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since 2018, Bharath Automobiles has been Nizamabad's trusted partner in sustainable transportation, bringing cutting-edge electric scooters to the heart of Telangana.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg"
                iconName="Zap"
                iconPosition="left"
                iconSize={20}
              >
                Explore Our Fleet
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                iconName="MapPin"
                iconPosition="left"
                iconSize={20}
                onClick={() => window.open('https://maps.app.goo.gl/bgrUiKRK2Mz1GMH38', '_blank')}
              >
                Visit Our Showroom
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary">400+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-secondary">6</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-accent">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Image Slideshow */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elevation-3">
              {/* Slideshow Container */}
              <div className="relative w-full h-96 lg:h-[500px]">
                {imageSlides?.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                      index === currentSlide 
                        ? 'opacity-100 translate-x-0' 
                        : index < currentSlide 
                        ? 'opacity-0 -translate-x-full' :'opacity-0 translate-x-full'
                    }`}
                  >
                    <Image
                      src={slide?.src}
                      alt={slide?.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {imageSlides?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-white shadow-lg' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-elevation-2 p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">BA</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Authorized Dealer</div>
                  <div className="text-sm text-muted-foreground">Since 2018</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;