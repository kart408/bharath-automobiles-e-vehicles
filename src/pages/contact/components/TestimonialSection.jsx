import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Nikhil',
      location: 'Nizamabad',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      review: 'Best electric scooters in Nizamabad. Great service and fair prices.',
      scooterModel: 'Roma Electric',
      purchaseDate: 'January 2025'
    },
    {
      id: 2,
      name: 'Karthik',
      location: 'Nandipet',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      review: 'Very happy with my purchase. The team is helpful and honest.',
      scooterModel: 'Storm ZX',
      purchaseDate: 'December 2024'
    },
    {
      id: 3,
      name: 'Ramu',
      location: 'Armoor',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      review: 'Good quality scooters. After sales service is excellent.',
      scooterModel: 'Mini Lithino',
      purchaseDate: 'November 2024'
    },
    {
      id: 4,
      name: 'Raghu',
      location: 'Bodhan',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      review: 'Trusted dealer. Got the best deal on my electric scooter.',
      scooterModel: 'Roma Electric',
      purchaseDate: 'October 2024'
    },
    {
      id: 5,
      name: 'Nani',
      location: 'Nizamabad',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      review: 'Professional service. Highly recommend Bharath Automobiles.',
      scooterModel: 'Storm ZX',
      purchaseDate: 'September 2024'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={14}
        className={index < rating ? 'text-amber-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-elevation-2 p-6">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-foreground mb-2">
          Customer Reviews
        </h3>
        <p className="text-sm text-muted-foreground">
          What our customers say about their experience with us
        </p>
      </div>
      <div className="space-y-6">
        {testimonials?.map((testimonial) => (
          <div key={testimonial?.id} className="border-b border-border last:border-b-0 pb-6 last:pb-0">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image
                  src={testimonial?.avatar}
                  alt={`${testimonial?.name} profile`}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="text-sm font-bold text-foreground">
                      {testimonial?.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {testimonial?.location} • {testimonial?.purchaseDate}
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonial?.rating)}
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {testimonial?.review}
                </p>
                
                <div className="flex items-center space-x-2">
                  <div className="bg-primary/10 px-2 py-1 rounded-md">
                    <span className="text-xs font-medium text-primary">
                      {testimonial?.scooterModel}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Icon name="CheckCircle" size={12} className="text-success" />
                    <span>Verified Purchase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-border">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 mb-3">
            <div className="flex items-center space-x-1">
              <Icon name="Star" size={16} className="text-amber-400 fill-current" />
              <span className="text-sm font-bold text-foreground">4.9</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Based on 400+ reviews
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Join our satisfied customers across Telangana region
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;