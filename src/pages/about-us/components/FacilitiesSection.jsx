import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const FacilitiesSection = () => {
  const facilities = [
    {
      id: 1,
      title: "Showroom",
      description: "See the latest electric scooters in our bright display area. Enjoy interactive screens and a relaxing lounge while you browse.",
      image: "https://images.unsplash.com/photo-1562141961-4d2d4b1b5b8a?w=400&h=300&fit=crop",
      features: ["Air Conditioned", "Interactive Displays", "Comfortable Lounge", "Test Ride Area"]
    },
    {
      id: 2,
      title: "Service Center",
      description: "Our workshop has skilled mechanics, original parts, and the right tools to keep your scooter running smoothly.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      features: ["Trained Technicians", "Genuine Parts", "Fast Service", "Warranty Support"]
    },
    {
      id: 3,
      title: "Customer Care",
      description: "We're here to help with scooter advice, loan options, and after-sales support anytime you need.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      features: ["Expert Advice", "Loan Help", "Insurance Support", "24/7 Helpline"]
    }
  ];

  const amenities = [
    {
      icon: "Car",
      title: "Test Ride Facility",
      description: "Experience our electric scooters with guided test rides on our dedicated track."
    },
    {
      icon: "Wifi",
      title: "Free WiFi",
      description: "Stay connected while you explore our showroom and complete your purchase."
    },
    {
      icon: "Coffee",
      title: "Refreshment Area",
      description: "Complimentary refreshments while you wait for service or consultation."
    },
    {
      icon: "CreditCard",
      title: "Digital Payments",
      description: "Multiple payment options including UPI, cards, and digital wallets."
    },
    {
      icon: "MapPin",
      title: "Easy Location",
      description: "Conveniently located in Nandipet with ample parking space."
    },
    {
      icon: "Clock",
      title: "Extended Hours",
      description: "Open 7 days a week with extended hours for your convenience."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Facilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer friendly service in a clean, modern space, making it easy and comfortable to buy and own your electric scooter.
          </p>
        </div>

        {/* Main Facilities */}
        <div className="space-y-16 mb-16">
          {facilities?.map((facility, index) => (
            <div key={facility?.id} className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-elevation-3">
                  <Image
                    src={facility?.image}
                    alt={facility?.title}
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {facility?.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {facility?.description}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {facility?.features?.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities Grid */}
        <div className="bg-muted/30 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Additional Amenities
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We've thought of everything to make your visit comfortable and convenient.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities?.map((amenity, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name={amenity?.icon} size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {amenity?.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {amenity?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location Info */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Visit Our Showroom
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground">
                      Bharath Automobiles, Main Road, Nandipet,<br />
                      Nizamabad, Telangana - 503212
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="Clock" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Business Hours</p>
                    <p className="text-muted-foreground">
                      Mon - Sat: 9:00 AM - 8:00 PM<br />
                      Sunday: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="Phone" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Contact</p>
                    <p className="text-muted-foreground">
                      91+ 9030362696<br />
                      bharathreddy851@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-elevation-2">
              <iframe
                width="100%"
                height="300"
                loading="lazy"
                title="Bharath Automobiles Location"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=18.6725,78.0941&z=14&output=embed"
                className="border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;