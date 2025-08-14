import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: "Phone",
      title: "Call Us",
      primary: "91+ 9030362696",
secondary: "91+ 9030362696",
action: () => window.location.href = 'tel:+919030362696',
      color: "text-primary"
    },
    {
      icon: "Mail",
      title: "Email Us",
      primary: "bharathreddy851@gmail.com",
secondary: "bharathreddy851@gmail.com",
action: () => window.location.href = 'mailto:bharathreddy851@gmail.com',
      color: "text-secondary"
    },
    {
      icon: "MessageCircle",
      title: "WhatsApp",
      primary: "91+ 9030362696",
secondary: "Quick Response",
action: () => window.open('https://wa.me/919030362696', '_blank'),
      color: "text-success"
    },
    {
      icon: "MapPin",
      title: "Visit Us",
      primary: "Nandipet, Nizamabad",
      secondary: "Telangana 503212",
      action: () => window.open('https://maps.app.goo.gl/bgrUiKRK2Mz1GMH38', '_blank'),
      color: "text-accent"
    }
  ];

  const businessHours = [
    { day: "Monday - Saturday", hours: "9:00 AM - 7:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 6:00 PM" },
    { day: "Public Holidays", hours: "10:00 AM - 4:00 PM" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            <Icon name="Phone" size={16} className="mr-2" />
            Get In Touch
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Go Electric?
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Contact us today for expert advice, test rides, and the best deals on electric scooters. 
            Our team is here to help you find the perfect eco-friendly ride.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactMethods?.map((method, index) => (
                <div
                  key={index}
                  className="group bg-muted/30 rounded-2xl p-6 border border-border hover:shadow-elevation-2 transition-all duration-300 cursor-pointer"
                  onClick={method?.action}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-elevation-1 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon name={method?.icon} size={24} className={method?.color} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                        {method?.title}
                      </h3>
                      <p className="text-sm font-medium text-foreground mb-1">
                        {method?.primary}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {method?.secondary}
                      </p>
                    </div>
                    
                    <Icon 
                      name="ArrowUpRight" 
                      size={16} 
                      className="text-muted-foreground group-hover:text-primary transition-colors duration-200" 
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-border">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Need Immediate Assistance?
                </h3>
                <p className="text-muted-foreground">
                  Our sales team is ready to help you with product information, pricing, and test ride bookings.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  iconName="Phone"
                  iconPosition="left"
                  iconSize={16}
                  onClick={() => window.location.href = 'tel:+919030362696'}
                >
                  Call Sales Team
                </Button>
                
                <Button
                  variant="outline"
                  iconName="Calendar"
                  iconPosition="left"
                  iconSize={16}
                  asChild
                >
                  <Link to="/contact">Book Test Ride</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Business Info */}
          <div className="space-y-8">
            {/* Business Hours */}
            <div className="bg-muted/30 rounded-2xl p-6 border border-border">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Clock" size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Business Hours
                </h3>
              </div>
              
              <div className="space-y-4">
                {businessHours?.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                    <span className="text-sm font-medium text-foreground">
                      {schedule?.day}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {schedule?.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Map */}
            <div className="bg-muted/30 rounded-2xl p-6 border border-border">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" size={20} className="text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Our Location
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-foreground mb-1">
                    Bharath Automobiles
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Main Road, Nandipet<br />
                    Nizamabad, Telangana 503212<br />
                    India
                  </p>
                </div>
                
                <div className="h-32 bg-gray-100 rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    loading="lazy"
                    title="Bharath Automobiles Location"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=18.6725,78.0941&z=14&output=embed"
                    className="border-0"
                  />
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  iconName="Navigation"
                  iconPosition="left"
                  iconSize={16}
                  onClick={() => window.open('https://maps.app.goo.gl/bgrUiKRK2Mz1GMH38', '_blank')}
                >
                  Get Directions
                </Button>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-error/5 rounded-2xl p-6 border border-error/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-error/10 rounded-lg flex items-center justify-center">
                  <Icon name="AlertCircle" size={20} className="text-error" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Emergency Service
                </h3>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">
                24/7 roadside assistance for breakdowns and emergencies.
              </p>
              
              <Button
                variant="destructive"
                size="sm"
                fullWidth
                iconName="Phone"
                iconPosition="left"
                iconSize={16}
                onClick={() => window.location.href = 'tel:+919030362696'}
              >
                Emergency: 91+ 9030362696
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;