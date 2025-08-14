import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ProductGallery from './components/ProductGallery';
import ProductInfo from './components/ProductInfo';
import ProductTabs from './components/ProductTabs';

import RelatedProducts from './components/RelatedProducts';
import Icon from '../../components/AppIcon';

const ProductDetail = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams?.get('id') || '1';
  

  // Mock product data
  const productData = {
    1: {
      id: 1,
      name: "Roma N - Lead Acid",
      tagline: "Extra Features USB Charging Port, Remote Lock Key, Tubeless Tyres with Auto Cut Off function",
      price: 64993,
      originalPrice: 64993,
      isNew: false,
      range: "70-80 km",
      topSpeed: "25 km/h",
      chargingTime: "7-8 hours",
      motorPower: "250W",
      batteryType: "Lead Acid",
      batteryCapacity: "28Ah/32Ah",
      weight: "150 kg",
      groundClearance: "165 mm",
      seatHeight: "792 mm",
      dimensions: {
        length: "1859 mm",
        width: "715 mm",
        height: "1155 mm"
      },
      rating: 4.5,
      reviewCount: 1247,
      images: [
        "/assets/images/bikes/scooters/LANDING PAGE Storm ZX f-01.jpg",
        "/assets/images/bikes/scooters/001.jpg",
        "/assets/images/bikes/scooters/product roma 1.jpg"
      ],
      galleryImages: [
        "/assets/images/bikes/scooters/LANDING PAGE Storm ZX f-01.jpg",
        "/assets/images/bikes/scooters/001.jpg",
        "/assets/images/bikes/scooters/product roma 1.jpg"
      ],
      emiOptions: [
        { amount: 2166, tenure: 36 },
        { amount: 1625, tenure: 48 },
        { amount: 1300, tenure: 60 }
      ],
      offers: [
        "USB Charging Port",
        "Remote Lock Key",
        "Tubeless Tyres with Auto Cut Off function",
        "250W Brushless Motor with IP65 waterproof rating"
      ],
              features: [
          {
            category: "Performance Features",
            items: [
              {
                name: "250W Brushless Motor",
                description: "Permanent magnet design with IP65 waterproof rating",
                icon: "Zap"
              },
              {
                name: "Lead Acid Battery",
                description: "28Ah/32Ah options with reliable performance",
                icon: "Battery"
              },
              {
                name: "70-80km Range",
                description: "Perfect for daily commuting needs",
                icon: "MapPin"
              },
              {
                name: "25 km/h Top Speed",
                description: "Safe and efficient urban mobility",
                icon: "Gauge"
              }
            ]
          },
          {
            category: "Safety & Comfort Features",
            items: [
              {
                name: "Front & Rear Disc Brakes",
                description: "Dual disc braking system for safety",
                icon: "Shield"
              },
              {
                name: "Hydraulic Suspension",
                description: "Smooth ride on all terrains",
                icon: "Car"
              },
              {
                name: "Tubeless Tyres 3.00-12",
                description: "Puncture-resistant with auto cut-off function",
                icon: "Circle"
              },
              {
                name: "High Tubular Frame",
                description: "Durable and lightweight construction",
                icon: "Box"
              }
            ]
          }
        ],
              reviews: [
          {
            name: "Nikhil Reddy",
            rating: 5,
            comment: `Great value for money! The Roma N is perfect for daily commuting. Good range and reliable performance.\nHighly recommend for budget-conscious buyers.`,
            date: "2 weeks ago"
          },
          {
            name: "Karthik Sharma",
            rating: 4,
            comment: `Solid build quality and smooth ride. The lead acid battery is reliable and maintenance is easy.\nGood for city rides and short commutes.`,
            date: "1 month ago"
          },
          {
            name: "Ramu Patel",
            rating: 5,
            comment: `Excellent scooter for the price! The 250W motor is efficient and the tubeless tyres are a great feature.\nVery satisfied with my purchase.`,
            date: "3 weeks ago"
          }
        ]
    },
    2: {
      id: 2,
      name: "Storm ZX1",
      tagline: "High-performance electric scooter designed for speed enthusiasts and long-distance travel.",
      price: 125000,
      originalPrice: 125000,
      isNew: true,
      range: "100-120 km",
      topSpeed: "65 km/h",
      chargingTime: "3-4 hours",
      motorPower: "3000W",
      batteryType: "Lithium Ion",
      batteryCapacity: "3.2 kWh",
      weight: "95 kg",
      groundClearance: "180 mm",
      seatHeight: "800 mm",
      dimensions: {
        length: "1900 mm",
        width: "720 mm",
        height: "1200 mm"
      },
      rating: 4.7,
      reviewCount: 892,
      images: [
        "/assets/images/bikes/Strorm ZX1 (1).jpg",
        "/assets/images/bikes/Strorm ZX1 (1).jpg",
        "/assets/images/bikes/Strorm ZX1 (1).jpg"
      ],
      galleryImages: [
        "/assets/images/bikes/Strorm ZX1 (1).jpg",
        "/assets/images/bikes/Strorm ZX1 (1).jpg",
        "/assets/images/bikes/Strorm ZX1 (1).jpg"
      ],
      emiOptions: [
        { amount: 4167, tenure: 36 },
        { amount: 3125, tenure: 48 },
        { amount: 2500, tenure: 60 }
      ],
      offers: [
        "Sport Mode",
        "Fast Charging",
        "Bluetooth Connectivity",
        "GPS Tracking",
        "Premium Suspension"
      ],
      features: [
        {
          category: "Performance Features",
          items: [
            {
              name: "3000W Brushless Motor",
              description: "High-performance motor for speed enthusiasts",
              icon: "Zap"
            },
            {
              name: "Lithium Ion Battery",
              description: "3.2 kWh capacity with fast charging",
              icon: "Battery"
            },
            {
              name: "100-120km Range",
              description: "Perfect for long-distance travel",
              icon: "MapPin"
            },
            {
              name: "65 km/h Top Speed",
              description: "High-speed performance for enthusiasts",
              icon: "Gauge"
            }
          ]
        },
        {
          category: "Advanced Features",
          items: [
            {
              name: "Sport Mode",
              description: "Enhanced performance mode",
              icon: "Zap"
            },
            {
              name: "Fast Charging",
              description: "Quick charging capability",
              icon: "Battery"
            },
            {
              name: "Bluetooth Connectivity",
              description: "Smart connectivity features",
              icon: "Bluetooth"
            },
            {
              name: "GPS Tracking",
              description: "Built-in GPS for navigation",
              icon: "MapPin"
            }
          ]
        }
      ],
      reviews: [
        {
          name: "Rahul Kumar",
          rating: 5,
          comment: `Amazing performance! The Storm ZX1 is perfect for speed enthusiasts. Great range and fast charging.\nHighly recommend for those who love speed and performance.`,
          date: "1 week ago"
        },
        {
          name: "Priya Singh",
          rating: 4,
          comment: `Excellent build quality and smooth ride. The sport mode is fantastic and the GPS tracking is very useful.\nGreat for long rides and city commuting.`,
          date: "2 weeks ago"
        },
        {
          name: "Amit Patel",
          rating: 5,
          comment: `Outstanding scooter! The 3000W motor is powerful and the lithium battery provides excellent range.\nVery satisfied with the performance and features.`,
          date: "3 weeks ago"
        }
      ]
    },
    3: {
      id: 3,
      name: "Mini Lithino",
      tagline: "Compact and lightweight design perfect for urban navigation and parking convenience.",
      price: 65000,
      originalPrice: 65000,
      isNew: false,
      range: "60-70 km",
      topSpeed: "35 km/h",
      chargingTime: "5-6 hours",
      motorPower: "1500W",
      batteryType: "Lithium Ion",
      batteryCapacity: "1.8 kWh",
      weight: "70 kg",
      groundClearance: "150 mm",
      seatHeight: "750 mm",
      dimensions: {
        length: "1700 mm",
        width: "680 mm",
        height: "1100 mm"
      },
      rating: 4.3,
      reviewCount: 567,
      images: [
        "/assets/images/bikes/mini-lithino-512-x-512.jpg",
        "/assets/images/bikes/mini-lithino-512-x-512.jpg",
        "/assets/images/bikes/mini-lithino-512-x-512.jpg"
      ],
      galleryImages: [
        "/assets/images/bikes/mini-lithino-512-x-512.jpg",
        "/assets/images/bikes/mini-lithino-512-x-512.jpg",
        "/assets/images/bikes/mini-lithino-512-x-512.jpg"
      ],
      emiOptions: [
        { amount: 2167, tenure: 36 },
        { amount: 1625, tenure: 48 },
        { amount: 1300, tenure: 60 }
      ],
      offers: [
        "Lightweight Design",
        "Easy Parking",
        "Low Maintenance",
        "Eco Mode",
        "LED Indicators"
      ],
      features: [
        {
          category: "Design Features",
          items: [
            {
              name: "Compact Design",
              description: "Perfect for urban navigation",
              icon: "Box"
            },
            {
              name: "Lightweight Frame",
              description: "Easy to handle and park",
              icon: "Feather"
            },
            {
              name: "60-70km Range",
              description: "Sufficient for daily commuting",
              icon: "MapPin"
            },
            {
              name: "35 km/h Top Speed",
              description: "Safe and efficient urban speed",
              icon: "Gauge"
            }
          ]
        },
        {
          category: "Convenience Features",
          items: [
            {
              name: "Easy Parking",
              description: "Compact size for easy parking",
              icon: "Parking"
            },
            {
              name: "Low Maintenance",
              description: "Minimal maintenance required",
              icon: "Wrench"
            },
            {
              name: "Eco Mode",
              description: "Energy-efficient riding mode",
              icon: "Leaf"
            },
            {
              name: "LED Indicators",
              description: "Clear visibility and safety",
              icon: "Lightbulb"
            }
          ]
        }
      ],
      reviews: [
        {
          name: "Sneha Reddy",
          rating: 4,
          comment: `Perfect for city commuting! The compact design makes parking so easy. Great for daily use.\nHighly recommend for urban riders.`,
          date: "1 week ago"
        },
        {
          name: "Vikram Sharma",
          rating: 4,
          comment: `Lightweight and easy to handle. The eco mode is great for saving battery. Good range for city rides.\nVery satisfied with the purchase.`,
          date: "2 weeks ago"
        },
        {
          name: "Anjali Patel",
          rating: 5,
          comment: `Excellent compact scooter! Easy to park anywhere and the maintenance is minimal.\nPerfect for my daily commute to work.`,
          date: "3 weeks ago"
        }
      ]
    },
    4: {
      id: 4,
      name: "Electric Scooter 1",
      tagline: "Luxury electric scooter with premium features and superior comfort for discerning riders.",
      price: 165000,
      originalPrice: 165000,
      isNew: false,
      range: "120-140 km",
      topSpeed: "70 km/h",
      chargingTime: "2-3 hours",
      motorPower: "4000W",
      batteryType: "Lithium Ion",
      batteryCapacity: "4.2 kWh",
      weight: "105 kg",
      groundClearance: "190 mm",
      seatHeight: "820 mm",
      dimensions: {
        length: "1950 mm",
        width: "730 mm",
        height: "1250 mm"
      },
      rating: 4.8,
      reviewCount: 423,
      images: [
        "/assets/images/bikes/1.jpg",
        "/assets/images/bikes/1.jpg",
        "/assets/images/bikes/1.jpg"
      ],
      galleryImages: [
        "/assets/images/bikes/1.jpg",
        "/assets/images/bikes/1.jpg",
        "/assets/images/bikes/1.jpg"
      ],
      emiOptions: [
        { amount: 5500, tenure: 36 },
        { amount: 4125, tenure: 48 },
        { amount: 3300, tenure: 60 }
      ],
      offers: [
        "Premium Leather Seat",
        "Wireless Charging",
        "Smart Dashboard",
        "Auto Lock",
        "Weather Protection"
      ],
      features: [
        {
          category: "Premium Features",
          items: [
            {
              name: "4000W Premium Motor",
              description: "High-performance motor for luxury experience",
              icon: "Zap"
            },
            {
              name: "4.2 kWh Battery",
              description: "Large capacity for extended range",
              icon: "Battery"
            },
            {
              name: "120-140km Range",
              description: "Extended range for long journeys",
              icon: "MapPin"
            },
            {
              name: "70 km/h Top Speed",
              description: "High-speed luxury performance",
              icon: "Gauge"
            }
          ]
        },
        {
          category: "Luxury Features",
          items: [
            {
              name: "Premium Leather Seat",
              description: "Comfortable and stylish seating",
              icon: "Heart"
            },
            {
              name: "Wireless Charging",
              description: "Convenient charging solution",
              icon: "Zap"
            },
            {
              name: "Smart Dashboard",
              description: "Advanced digital display",
              icon: "Monitor"
            },
            {
              name: "Auto Lock",
              description: "Automatic security system",
              icon: "Lock"
            }
          ]
        }
      ],
      reviews: [
        {
          name: "Rajesh Kumar",
          rating: 5,
          comment: `Luxury at its best! The premium features are amazing and the comfort is unmatched.\nWorth every penny for the luxury experience.`,
          date: "1 week ago"
        },
        {
          name: "Meera Singh",
          rating: 5,
          comment: `Exceptional quality and performance. The wireless charging and smart dashboard are fantastic.\nPerfect for premium riders.`,
          date: "2 weeks ago"
        },
        {
          name: "Arun Patel",
          rating: 4,
          comment: `Outstanding luxury scooter! The extended range and premium features are excellent.\nHighly recommend for discerning riders.`,
          date: "3 weeks ago"
        }
      ]
    },
    5: {
      id: 5,
      name: "Electric Scooter 8",
      tagline: "Heavy-duty electric scooter designed for commercial use and cargo transportation needs.",
      price: 95000,
      originalPrice: 95000,
      isNew: false,
      range: "70-80 km",
      topSpeed: "40 km/h",
      chargingTime: "6-7 hours",
      motorPower: "2000W",
      batteryType: "Lead Acid",
      batteryCapacity: "2.8 kWh",
      weight: "110 kg",
      groundClearance: "170 mm",
      seatHeight: "780 mm",
      dimensions: {
        length: "1850 mm",
        width: "720 mm",
        height: "1180 mm"
      },
      rating: 4.2,
      reviewCount: 234,
      images: [
        "/assets/images/bikes/8.jpg",
        "/assets/images/bikes/8.jpg",
        "/assets/images/bikes/8.jpg"
      ],
      galleryImages: [
        "/assets/images/bikes/8.jpg",
        "/assets/images/bikes/8.jpg",
        "/assets/images/bikes/8.jpg"
      ],
      emiOptions: [
        { amount: 3167, tenure: 36 },
        { amount: 2375, tenure: 48 },
        { amount: 1900, tenure: 60 }
      ],
      offers: [
        "Large Storage",
        "Heavy Load Capacity",
        "Reinforced Frame",
        "Commercial Grade",
        "Extended Warranty"
      ],
      features: [
        {
          category: "Commercial Features",
          items: [
            {
              name: "2000W Commercial Motor",
              description: "Designed for heavy-duty use",
              icon: "Zap"
            },
            {
              name: "2.8 kWh Battery",
              description: "Reliable battery for commercial use",
              icon: "Battery"
            },
            {
              name: "70-80km Range",
              description: "Sufficient for commercial operations",
              icon: "MapPin"
            },
            {
              name: "40 km/h Top Speed",
              description: "Safe speed for cargo transport",
              icon: "Gauge"
            }
          ]
        },
        {
          category: "Durability Features",
          items: [
            {
              name: "Large Storage",
              description: "Ample space for cargo",
              icon: "Box"
            },
            {
              name: "Heavy Load Capacity",
              description: "Built for carrying heavy loads",
              icon: "Truck"
            },
            {
              name: "Reinforced Frame",
              description: "Durable construction",
              icon: "Shield"
            },
            {
              name: "Commercial Grade",
              description: "Built for commercial use",
              icon: "Building"
            }
          ]
        }
      ],
      reviews: [
        {
          name: "Suresh Kumar",
          rating: 4,
          comment: `Perfect for commercial use! The large storage and heavy load capacity are excellent.\nGreat for delivery and cargo transport.`,
          date: "1 week ago"
        },
        {
          name: "Lakshmi Reddy",
          rating: 4,
          comment: `Durable and reliable for business use. The reinforced frame is strong and handles heavy loads well.\nVery satisfied with the performance.`,
          date: "2 weeks ago"
        },
        {
          name: "Venkat Patel",
          rating: 4,
          comment: `Excellent commercial scooter! The extended warranty gives peace of mind.\nPerfect for my delivery business.`,
          date: "3 weeks ago"
        }
      ]
    }
  };

  const product = productData?.[productId] || productData?.[1];

  const breadcrumbItems = [
    { label: 'Home', path: '/homepage' },
    { label: 'Scooters', path: '/product-catalog' },
    { label: product?.name, path: `/product-detail?id=${productId}`, isLast: true }
  ];

  

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productId]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 lg:px-6 py-8">
        <Breadcrumb customItems={breadcrumbItems} />
        
        {/* Product Detail Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Product Gallery */}
          <div className="order-1">
            <ProductGallery images={product?.images} productName={product?.name} />
          </div>
          
          {/* Product Information */}
          <div className="order-2">
            <ProductInfo product={product} />
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mb-12">
          <ProductTabs product={product} />
        </div>

        {/* Related Products */}
        <div className="mb-12">
          <RelatedProducts currentProductId={parseInt(productId)} />
        </div>

        {/* Contact CTA Section */}
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Icon name="MessageCircle" size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Ready to Experience Electric?
            </h3>
            <p className="text-muted-foreground">
              Visit our showroom in Nandipet, Nizamabad for a test ride and personalized consultation.
              Our experts are ready to help you choose the perfect electric scooter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="MapPin" size={16} />
                <span>Nandipet, Nizamabad, Telangana</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Clock" size={16} />
                <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default ProductDetail;