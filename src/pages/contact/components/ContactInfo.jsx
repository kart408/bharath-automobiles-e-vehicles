import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactInfo = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const checkBusinessHours = () => {
      const now = new Date();
      const currentHour = now?.getHours();
      const currentDay = now?.getDay(); // 0 = Sunday, 6 = Saturday
      
      // Business hours: Monday to Saturday, 9 AM to 7 PM
      const isWeekday = currentDay >= 1 && currentDay <= 6;
      const isBusinessHour = currentHour >= 9 && currentHour < 19;
      
      setIsOpen(isWeekday && isBusinessHour);
    };

    checkBusinessHours();
    const interval = setInterval(checkBusinessHours, 60000);
    
    return () => clearInterval(interval);
  }, [currentTime]);

  const contactDetails = [
    {
      icon: 'Phone',
      label: 'Phone Numbers',
      primary: '91+ 9030362696',
secondary: '91+ 9030362696',
action: () => window.location.href = 'tel:+919030362696'
    },
    {
      icon: 'Mail',
      label: 'Email Address',
      primary: 'bharathreddy851@gmail.com',
secondary: 'bharathreddy851@gmail.com',
action: () => window.location.href = 'mailto:bharathreddy851@gmail.com'
    },
    {
      icon: 'MapPin',
      label: 'Showroom Address',
      primary: 'Shop No. 15-16, Main Road',
      secondary: 'Nandipet, Nizamabad, Telangana 503212',
      action: () => window.open('https://maps.app.goo.gl/bgrUiKRK2Mz1GMH38', '_blank')
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <div className="space-y-6">
      {/* Business Status */}
      <div className="bg-white rounded-xl shadow-elevation-2 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-foreground">Business Status</h3>
          <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${
            isOpen 
              ? 'bg-success/10 text-success' :'bg-destructive/10 text-destructive'
          }`}>
            <div className={`w-2 h-2 rounded-full ${
              isOpen ? 'bg-success' : 'bg-destructive'
            }`} />
            <span>{isOpen ? 'Open Now' : 'Closed'}</span>
          </div>
        </div>
        
        <div className="space-y-2">
          {businessHours?.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">{schedule?.day}</span>
              <span className="font-medium text-foreground">{schedule?.hours}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Contact Details */}
      <div className="bg-white rounded-xl shadow-elevation-2 p-6">
        <h3 className="text-lg font-bold text-foreground mb-6">Get in Touch</h3>
        
        <div className="space-y-6">
          {contactDetails?.map((contact, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name={contact?.icon} size={20} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-foreground mb-1">
                  {contact?.label}
                </h4>
                <p className="text-sm text-muted-foreground mb-1">
                  {contact?.primary}
                </p>
                <p className="text-sm text-muted-foreground">
                  {contact?.secondary}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={contact?.action}
                className="flex-shrink-0"
              >
                <Icon name="ExternalLink" size={16} />
              </Button>
            </div>
          ))}
        </div>
      </div>
      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-elevation-2 p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Quick Actions</h3>
        
        <div className="space-y-3">
          <Button
            variant="default"
            fullWidth
            iconName="Phone"
            iconPosition="left"
            onClick={() => window.location.href = 'tel:+919030362696'}
          >
            Call Now
          </Button>
          
          <Button
            variant="outline"
            fullWidth
            iconName="MessageCircle"
            iconPosition="left"
            onClick={() => window.open('https://wa.me/919030362696?text=Hi, I am interested in your electric scooters. Please share more details.', '_blank')}
          >
            WhatsApp Chat
          </Button>
          
          <Button
            variant="secondary"
            fullWidth
            iconName="Navigation"
            iconPosition="left"
            onClick={() => window.open('https://maps.app.goo.gl/bgrUiKRK2Mz1GMH38', '_blank')}
          >
            Get Directions
          </Button>
        </div>
      </div>
      {/* Dealership Credentials */}
      <div className="bg-white rounded-xl shadow-elevation-2 p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Why Choose Us</h3>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
              <Icon name="Shield" size={16} className="text-success" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Authorized Dealer</p>
              <p className="text-xs text-muted-foreground">Official dealership with warranty support</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="Users" size={16} className="text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">5+ Years Experience</p>
              <p className="text-xs text-muted-foreground">Serving Nizamabad region since 2019</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
              <Icon name="Wrench" size={16} className="text-secondary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Service Support</p>
              <p className="text-xs text-muted-foreground">On-site maintenance and repairs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;