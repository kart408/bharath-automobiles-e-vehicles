import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Bharath Reddy",
      role: "Founder & CEO",
      image: "/assets/images/bharath.jpeg",
      experience: "15+ Years",
      specialization: "Electric Vehicle Industry",
      description: "Visionary leader with extensive experience in automotive industry and sustainable transportation solutions."
    },
    {
      id: 2,
      name: "Rahul Reddy",
      role: "Co-Founder & CTO",
      image: "/assets/images/rahul.jpeg",
      experience: "3+ Years",
      specialization: "New Generational Founder",
      description: "Pushing the tech enabled development through the e motors etc."
    },
    {
      id: 3,
      name: "Saya Reddy",
      role: "Co-Founder & COO",
      image: "/assets/images/bikes/scooters/WhatsApp Image 2025-08-15 at 01.47.14.jpeg",
      experience: "30+ Years",
      specialization: "Founding Member of the Business",
      description: "Ex-Sarpanch of the Gadapalli, Nandipet, Nizamabad etc. Expert in business operations and customer relationship management with focus on expanding market reach."
    }
  ];

  const certifications = [
    {
      title: "Authorized Dealer",
      description: "Official dealership for leading EV brands",
      icon: "Award"
    },
    {
      title: "Certified Service",
      description: "Factory-trained technicians",
      icon: "Settings"
    },
    {
      title: "Quality Assurance",
      description: "ISO certified processes",
      icon: "CheckCircle"
    },
    {
      title: "Customer Excellence",
      description: "5-star customer service rating",
      icon: "Star"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Owners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the visionary leaders behind our electric mobility revolution, bringing years of experience and passion for sustainable transportation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {teamMembers?.map((member) => (
            <div key={member?.id} className="group">
              <div className="bg-white rounded-2xl shadow-elevation-2 overflow-hidden border border-border hover:shadow-elevation-3 transition-all duration-300">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={member?.image}
                    alt={member?.name}
                    className="w-full h-72 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {member?.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-2">
                      {member?.role}
                    </p>
                    <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
                      <span>{member?.experience}</span>
                      <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
                      <span>{member?.specialization}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {member?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-r from-primary/10 via-white to-secondary/10 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Our Certifications & Credentials
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Recognized expertise and official partnerships that ensure quality service and authentic products.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert?.icon} size={28} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {cert?.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {cert?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;