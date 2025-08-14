import React from 'react';
import Icon from '../../../components/AppIcon';

const StorySection = () => {
  const milestones = [
    {
      year: "2018",
      title: "Foundation",
      description: "Started as a small electric vehicle dealership in Nandipet, Nizamabad with a vision to promote sustainable transportation."
    },
    {
      year: "2020",
      title: "Expansion",
      description: "Expanded our showroom and became an authorized dealer for multiple leading electric scooter brands."
    },
    {
      year: "2022",
      title: "Service Excellence",
      description: "Launched our dedicated service center with certified technicians and genuine spare parts inventory."
    },
    {
      year: "2024",
      title: "Digital Innovation",
      description: "Embraced digital transformation with online booking, virtual consultations, and enhanced customer experience."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From humble beginnings to becoming Telangana's trusted electric vehicle partner, 
            our story is one of passion, innovation, and commitment to sustainable mobility.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Pioneering Electric Mobility in Nizamabad
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Founded with a mission to make electric vehicles accessible to every family in Telangana, 
                Bharath Automobiles has grown from a small dealership to a comprehensive electric mobility solution provider.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our founder, Mr. Bharath Reddy, recognized the potential of electric vehicles early on and 
                dedicated himself to bringing the latest eco-friendly transportation options to our community. 
                Today, we're proud to serve customers across Nizamabad and surrounding districts.
              </p>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Leaf" size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Sustainability</h4>
                  <p className="text-sm text-muted-foreground">Committed to reducing carbon footprint through electric mobility</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Users" size={20} className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Community</h4>
                  <p className="text-sm text-muted-foreground">Building stronger communities through accessible transportation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Award" size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Excellence</h4>
                  <p className="text-sm text-muted-foreground">Delivering superior products and unmatched service quality</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Zap" size={20} className="text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Innovation</h4>
                  <p className="text-sm text-muted-foreground">Embracing cutting-edge technology for better mobility solutions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {milestones?.map((milestone, index) => (
              <div key={milestone?.year} className="flex items-start space-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {milestone?.year?.slice(-2)}
                  </div>
                  {index < milestones?.length - 1 && (
                    <div className="w-0.5 h-16 bg-border mt-4"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-white rounded-lg p-6 shadow-elevation-1 border border-border">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-primary">{milestone?.year}</span>
                      <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
                      <h4 className="font-semibold text-foreground">{milestone?.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {milestone?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;