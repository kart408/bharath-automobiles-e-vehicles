import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ProductGrid from './components/ProductGrid';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const ProductCatalog = () => {
  const [loading, setLoading] = useState(true);

  // Mock product data
  const allProducts = [
    {
      id: 1,
      name: "Roma Electric Scooter",
      description: "Perfect for daily commuting with excellent battery life and modern design features.",
      price: 85000,
      image: "/assets/images/bikes/Product roma .jpg",
      badge: "Popular",
      modelType: "standard",
      specifications: {
        range: "80-90 km",
        topSpeed: "45 km/h",
        chargingTime: "4-5 hours",
        batteryCapacity: "2.5 kWh",
        weight: "85 kg",
        warranty: "3 years"
      },
      keySpecs: {
        range: "85 km",
        speed: "45 km/h",
        charging: "4.5 hrs",
        battery: "2.5 kWh"
      },
      features: ["LED Headlights", "Digital Display", "Anti-theft Alarm", "USB Charging", "Regenerative Braking"]
    },
    {
      id: 2,
      name: "Storm ZX1",
      description: "High-performance electric scooter designed for speed enthusiasts and long-distance travel.",
      price: 125000,
      image: "/assets/images/bikes/Strorm ZX1 (1).jpg",
      badge: "New",
      modelType: "sport",
      specifications: {
        range: "100-120 km",
        topSpeed: "65 km/h",
        chargingTime: "3-4 hours",
        batteryCapacity: "3.2 kWh",
        weight: "95 kg",
        warranty: "3 years"
      },
      keySpecs: {
        range: "110 km",
        speed: "65 km/h",
        charging: "3.5 hrs",
        battery: "3.2 kWh"
      },
      features: ["Sport Mode", "Fast Charging", "Bluetooth Connectivity", "GPS Tracking", "Premium Suspension"]
    },
    {
      id: 3,
      name: "Mini Lithino",
      description: "Compact and lightweight design perfect for urban navigation and parking convenience.",
      price: 65000,
      image: "/assets/images/bikes/mini-lithino-512-x-512.jpg",
      badge: "Best Value",
      modelType: "eco",
      specifications: {
        range: "60-70 km",
        topSpeed: "35 km/h",
        chargingTime: "5-6 hours",
        batteryCapacity: "1.8 kWh",
        weight: "70 kg",
        warranty: "2 years"
      },
      keySpecs: {
        range: "65 km",
        speed: "35 km/h",
        charging: "5.5 hrs",
        battery: "1.8 kWh"
      },
      features: ["Lightweight Design", "Easy Parking", "Low Maintenance", "Eco Mode", "LED Indicators"]
    },
    {
      id: 4,
      name: "Electric Scooter 1",
      description: "Luxury electric scooter with premium features and superior comfort for discerning riders.",
      price: 165000,
      image: "/assets/images/bikes/1.jpg",
      badge: "Premium",
      modelType: "premium",
      specifications: {
        range: "120-140 km",
        topSpeed: "70 km/h",
        chargingTime: "2-3 hours",
        batteryCapacity: "4.2 kWh",
        weight: "105 kg",
        warranty: "5 years"
      },
      keySpecs: {
        range: "130 km",
        speed: "70 km/h",
        charging: "2.5 hrs",
        battery: "4.2 kWh"
      },
      features: ["Premium Leather Seat", "Wireless Charging", "Smart Dashboard", "Auto Lock", "Weather Protection"]
    },
    {
      id: 5,
      name: "Electric Scooter 8",
      description: "Heavy-duty electric scooter designed for commercial use and cargo transportation needs.",
      price: 95000,
      image: "/assets/images/bikes/8.jpg",
      badge: null,
      modelType: "standard",
      specifications: {
        range: "70-80 km",
        topSpeed: "40 km/h",
        chargingTime: "6-7 hours",
        batteryCapacity: "2.8 kWh",
        weight: "110 kg",
        warranty: "3 years"
      },
      keySpecs: {
        range: "75 km",
        speed: "40 km/h",
        charging: "6.5 hrs",
        battery: "2.8 kWh"
      },
      features: ["Large Storage", "Heavy Load Capacity", "Reinforced Frame", "Commercial Grade", "Extended Warranty"]
    }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Electric Scooter Catalog - Bharath Automobiles E-Vehicles</title>
        <meta 
          name="description" 
          content="Browse our complete collection of electric scooters in Nizamabad, Telangana. Compare models, prices, and specifications. Find the perfect e-scooter for your needs." 
        />
        <meta name="keywords" content="electric scooters, e-vehicles, Nizamabad, Telangana, battery scooters, eco-friendly transport" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <Breadcrumb />

          {/* Page Header with Indian Flag Gradient */}
          <div className="text-center mb-8">
            <div className="indian-flag-horizontal rounded-xl p-8 mb-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                Electric Scooter Collection
              </h1>
              <p className="text-lg text-white max-w-2xl mx-auto drop-shadow-md">
                Discover our comprehensive range of electric scooters designed for every need. 
                From eco-friendly city riders to high-performance sport models.
              </p>
            </div>
          </div>

          {/* Product Grid - No Filter Bar */}
          <ProductGrid 
            products={allProducts}
            loading={loading}
          />

          {/* Load More / Pagination */}
          {!loading && allProducts?.length > 0 && (
            <div className="text-center mt-12">
              <div className="inline-flex items-center space-x-4 bg-white rounded-lg shadow-sm border border-border p-4">
                <span className="text-sm text-muted-foreground">
                  Showing all {allProducts?.length} results
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={scrollToTop}
                  iconName="ArrowUp"
                  iconPosition="left"
                  iconSize={16}
                >
                  Back to Top
                </Button>
              </div>
            </div>
          )}

          {/* Contact CTA with Indian Flag Gradient */}
          <div className="indian-flag-horizontal rounded-xl p-8 text-center text-white mt-12">
            <div className="max-w-2xl mx-auto">
              <Icon name="Phone" size={48} className="mx-auto mb-4 opacity-90 drop-shadow-lg" />
              <h2 className="text-2xl font-bold mb-4 drop-shadow-md">
                Need Help Choosing the Right Scooter?
              </h2>
              <p className="text-lg opacity-90 mb-6 drop-shadow-sm">
                Our experts are here to help you find the perfect electric scooter for your needs. 
                Get personalized recommendations and exclusive deals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => window.location.href = 'tel:+919030362696'}
                  iconName="Phone"
                  iconPosition="left"
                  iconSize={20}
                >
                  Call Now: 91+ 9030362696
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('https://wa.me/919030362696', '_blank')}
                  iconName="MessageCircle"
                  iconPosition="left"
                  iconSize={20}
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  WhatsApp Chat
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ProductCatalog;