import React from 'react';
import Icon from '../../../components/AppIcon';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Nikhil",
      text: "Best electric scooters in Nizamabad. Great service and fair prices.",
      rating: 5
    },
    {
      id: 2,
      name: "Karthik",
      text: "Very happy with my purchase. The team is helpful and honest.",
      rating: 5
    },
    {
      id: 3,
      name: "Ramu",
      text: "Good quality scooters. After sales service is excellent.",
      rating: 5
    },
    {
      id: 4,
      name: "Raghu",
      text: "Trusted dealer. Got the best deal on my electric scooter.",
      rating: 5
    },
    {
      id: 5,
      name: "Nani",
      text: "Professional service. Highly recommend Bharath Automobiles.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Customer Reviews
          </h2>
          <p className="text-lg text-muted-foreground">
            What our customers say about us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials?.map((testimonial) => (
            <div key={testimonial?.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial?.rating)]?.map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-orange-500 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-4">
                "{testimonial?.text}"
              </blockquote>

              {/* Customer Name */}
              <div className="text-right">
                <p className="font-semibold text-gray-900">
                  - {testimonial?.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Stats */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 bg-gray-50 rounded-lg px-8 py-4">
            <div>
              <div className="text-2xl font-bold text-orange-600">400+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div>
              <div className="text-2xl font-bold text-orange-600">4.9</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div>
              <div className="text-2xl font-bold text-orange-600">98%</div>
              <div className="text-sm text-gray-600">Recommend Us</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;