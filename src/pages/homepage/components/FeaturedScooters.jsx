import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FeaturedScooters = () => {
  const featuredScooters = [
    {
      id: 1,
      name: "Storm ZX - Lithium-ion",
      image: "/assets/images/bikes/scooters/LANDING PAGE Storm ZX f-01.jpg",
      startingPrice: "₹78,517",
      batteryType: "Lithium-Ion",
      range: "70-75km",
      topSpeed: "85.0km/h",
      chargeTime: "4-5hrs",
      capacity: "150.0Kg",
      motor: "250.0W Brushless",
      tyres: "3.00-10",
      brakes: "Front Disc",
      frame: "High Tubular",
      suspension: "Hydraulic",
      costPerKm: "₹0.2K/m",
      features: ["Extended Range", "Fast Charging", "Anti-theft Alert", "USB Charging Port"],
      badge: "Premium",
      badgeColor: "bg-accent",
      description: "Extra Features Tubeless Tyres with Auto Cut Off function. This 250W brushless permanent magnet motor offers reliable performance with an IP65 waterproof rating, ensuring durability in harsh conditions."
    },
    {
      id: 2,
      name: "Storm ZX - Lead Acid",
      image: "/assets/images/bikes/scooters/LANDING PAGE Storm ZX f-01.jpg",
      startingPrice: "₹55,993",
      batteryType: "Lead Acid",
      range: "50-55km",
      topSpeed: "25.0km/h",
      chargeTime: "7-8hrs",
      capacity: "150.0Kg",
      motor: "250.0W Brushless",
      tyres: "3.00-10",
      brakes: "Front Disc",
      frame: "High Tubular",
      suspension: "Hydraulic",
      costPerKm: "₹0.2K/m",
      features: ["USB Charging Port", "Tubeless Tyres", "Auto Cut Off", "Anti-theft Alert"],
      badge: "Best Value",
      badgeColor: "bg-success",
      description: "Extra Features USB Charging Port, Tubeless Tyres with Auto Cut Off function. This 250W brushless motor features a permanent magnet design, IP65 waterproof rating, and a double axle configuration."
    },
    {
      id: 3,
      name: "Roma Electric Scooter",
      image: "/assets/images/bikes/Product roma .jpg",
      startingPrice: "₹65,000",
      batteryType: "Lithium-Ion",
      range: "80km",
      topSpeed: "60km/h",
      chargeTime: "4-5hrs",
      capacity: "150kg",
      motor: "250W",
      tyres: "3.00-10",
      brakes: "Disc",
      frame: "Tubular",
      suspension: "Hydraulic",
      costPerKm: "₹0.3K/m",
      features: ["80km Range", "Fast Charging", "Digital Display", "Comfort Seat"],
      badge: "Best Seller",
      badgeColor: "bg-primary"
    },
    {
      id: 4,
      name: "Mini Lithino",
      image: "/assets/images/bikes/mini-lithino-512-x-512.jpg",
      startingPrice: "₹45,000",
      batteryType: "Lead Acid",
      range: "60km",
      topSpeed: "25km/h",
      chargeTime: "6-8hrs",
      capacity: "120kg",
      motor: "250W",
      tyres: "3.00-10",
      brakes: "Drum",
      frame: "Tubular",
      suspension: "Hydraulic",
      costPerKm: "₹0.2K/m",
      features: ["60km Range", "LED Lights", "Anti-theft", "Student Discount"],
      badge: "Budget Friendly",
      badgeColor: "bg-secondary"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Popular Electric Scooters
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our most popular electric scooters, carefully selected for their performance, 
            reliability, and value. Each model is designed to meet different riding needs and budgets.
          </p>
        </div>

        {/* Scooters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredScooters?.map((scooter) => (
            <div
              key={scooter?.id}
              className="group bg-white rounded-2xl shadow-elevation-1 border border-border overflow-hidden hover-lift transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <Image
                  src={scooter?.image}
                  alt={scooter?.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badge */}
                <div className={`absolute top-4 left-4 ${scooter?.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                  {scooter?.badge}
                </div>

                {/* Battery Type Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                  <span className="text-xs font-medium text-foreground">{scooter?.batteryType}</span>
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-12 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
                  <Icon name="Heart" size={16} className="text-muted-foreground hover:text-error" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                    {scooter?.name}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-primary">
                      {scooter?.startingPrice}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Starting price
                    </span>
                  </div>

                  {/* Key Specifications Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <Icon name="Gauge" size={14} className="text-primary flex-shrink-0" />
                      <div className="min-w-0">
                        <span className="text-xs text-muted-foreground block">Range</span>
                        <span className="text-sm font-medium text-foreground block truncate">{scooter?.range}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Zap" size={14} className="text-primary flex-shrink-0" />
                      <div className="min-w-0">
                        <span className="text-xs text-muted-foreground block">Speed</span>
                        <span className="text-sm font-medium text-foreground block truncate">{scooter?.topSpeed}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" size={14} className="text-primary flex-shrink-0" />
                      <div className="min-w-0">
                        <span className="text-xs text-muted-foreground block">Charge</span>
                        <span className="text-sm font-medium text-foreground block truncate">{scooter?.chargeTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Battery" size={14} className="text-primary flex-shrink-0" />
                      <div className="min-w-0">
                        <span className="text-xs text-muted-foreground block">Motor</span>
                        <span className="text-sm font-medium text-foreground block truncate">{scooter?.motor}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {scooter?.features?.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {scooter?.features?.length > 3 && (
                    <div className="text-xs text-muted-foreground">
                      +{scooter.features.length - 3} more features
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Button
                    variant="default"
                    fullWidth
                    iconName="ArrowRight"
                    iconPosition="right"
                    iconSize={16}
                    asChild
                  >
                    <Link to="/product-detail">Learn More</Link>
                  </Button>
                  
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="Phone"
                    iconPosition="left"
                    iconSize={16}
                    onClick={() => window.location.href = 'tel:+919030362696'}
                  >
                    Call for Price
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            iconName="Grid3X3"
            iconPosition="left"
            iconSize={20}
            asChild
          >
            <Link to="/product-catalog">View All Scooters</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedScooters;