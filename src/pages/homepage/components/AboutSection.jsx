import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const AboutSection = () => {
  const credentials = [
    {
      icon: "Shield",
      title: "Authorized Dealer",
      description: "Official dealership with manufacturer warranty and genuine parts support",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: "Award",
      title: "10+ Years Experience",
      description: "Trusted expertise in electric vehicle sales and service in Telangana region",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: "Users",
      title: "400+ Happy Customers",
      description: "Serving satisfied customers across Nizamabad and surrounding areas",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: "Wrench",
      title: "Expert Service",
      description: "Professional maintenance and repair services with trained technicians",
      color: "bg-orange-50 text-orange-600"
    }
  ];

  const certifications = [
    "Authorized Electric Vehicle Dealer",
    "ISO 9001:2015 Certified",
    "Government Approved Service Center",
    "Telangana State Transport Approved"
  ];

  const stats = [
    { number: "10+", label: "Years of Excellence", sublabel: "In Automobiles" },
    { number: "400+", label: "Happy Customers", sublabel: "Across Telangana" },
    { number: "24/7", label: "Service Support", sublabel: "Always Available" }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 lg:px-6 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-primary font-semibold text-sm mb-6 border border-primary/20">
            <Icon name="Building2" size={18} className="mr-2" />
            About Bharath Automobiles
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Your Trusted Electric Vehicle
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary block">
              Partner in Nizamabad, Nandipet
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Established in 2019, Bharath Automobiles has been at the forefront of the electric vehicle revolution in Telangana. 
            We are committed to providing eco-friendly transportation solutions that combine cutting-edge technology with affordability.
          </p>
        </div>

        {/* Content Section - Centered */}
        <div className="max-w-4xl mx-auto">
          {/* Main Description */}
          <div className="space-y-6 mb-12">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full"></div>
              <div className="pl-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Located in the heart of Nandipet, Nizamabad, we serve customers across Telangana with premium electric scooters, 
                  comprehensive after-sales service, and genuine spare parts.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our mission is to make sustainable mobility accessible to everyone while providing exceptional customer service 
                  and technical expertise.
                </p>
              </div>
            </div>
          </div>

          {/* Credentials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {credentials?.map((credential, index) => (
              <div key={index} className="group relative p-6 bg-white rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-14 h-14 ${credential.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={credential?.icon} size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">
                      {credential?.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {credential?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border mb-12">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
              <Icon name="CheckCircle" size={20} className="text-success mr-2" />
              Certifications & Approvals
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications?.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                  <div className="w-2 h-2 bg-success rounded-full flex-shrink-0"></div>
                  <span className="text-sm font-medium text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
              iconSize={18}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link to="/about-us">Learn More About Us</Link>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              iconName="MapPin"
              iconPosition="left"
              iconSize={18}
              className="border-2 hover:bg-primary hover:text-white transition-all duration-300"
              onClick={() => window.open('https://maps.app.goo.gl/bgrUiKRK2Mz1GMH38', '_blank')}
            >
              Visit Our Showroom
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;