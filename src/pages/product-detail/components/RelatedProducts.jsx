import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RelatedProducts = ({ currentProductId }) => {
  const relatedProducts = [
    {
      id: 2,
      name: "Ather 450X",
      tagline: "Smart Electric Scooter",
      price: 145000,
      originalPrice: 155000,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      range: "116 km",
      topSpeed: "90 km/h",
      chargingTime: "5.4 hours",
      rating: 4.6,
      isNew: false
    },
    {
      id: 3,
      name: "TVS iQube Electric",
      tagline: "Connected Electric Scooter",
      price: 135000,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop",
      range: "100 km",
      topSpeed: "78 km/h",
      chargingTime: "4.5 hours",
      rating: 4.4,
      isNew: true
    },
    {
      id: 4,
      name: "Bajaj Chetak",
      tagline: "Classic Electric Scooter",
      price: 125000,
      originalPrice: 130000,
      image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&h=300&fit=crop",
      range: "95 km",
      topSpeed: "70 km/h",
      chargingTime: "5 hours",
      rating: 4.2,
      isNew: false
    }
  ]?.filter(product => product?.id !== currentProductId);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    })?.format(price);
  };

  if (relatedProducts?.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">You Might Also Like</h2>
        <Link to="/product-catalog">
          <Button variant="outline" size="sm" iconName="ArrowRight" iconPosition="right">
            View All
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedProducts?.map((product) => (
          <div
            key={product?.id}
            className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
          >
            {/* Product Image */}
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <Image
                src={product?.image}
                alt={product?.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col space-y-2">
                {product?.isNew && (
                  <span className="bg-success text-success-foreground px-2 py-1 rounded-lg text-xs font-medium">
                    New
                  </span>
                )}
                {product?.originalPrice && (
                  <span className="bg-destructive text-destructive-foreground px-2 py-1 rounded-lg text-xs font-medium">
                    Save {formatPrice(product?.originalPrice - product?.price)}
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
                <Icon name="Star" size={14} className="text-warning fill-current" />
                <span className="text-xs font-medium text-foreground">{product?.rating}</span>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">{product?.name}</h3>
                <p className="text-sm text-muted-foreground">{product?.tagline}</p>
              </div>

              {/* Key Specs */}
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="text-center p-2 bg-muted rounded-lg">
                  <Icon name="Battery" size={14} className="text-primary mx-auto mb-1" />
                  <p className="text-muted-foreground">Range</p>
                  <p className="font-semibold text-foreground">{product?.range}</p>
                </div>
                <div className="text-center p-2 bg-muted rounded-lg">
                  <Icon name="Gauge" size={14} className="text-primary mx-auto mb-1" />
                  <p className="text-muted-foreground">Speed</p>
                  <p className="font-semibold text-foreground">{product?.topSpeed}</p>
                </div>
                <div className="text-center p-2 bg-muted rounded-lg">
                  <Icon name="Clock" size={14} className="text-primary mx-auto mb-1" />
                  <p className="text-muted-foreground">Charge</p>
                  <p className="font-semibold text-foreground">{product?.chargingTime}</p>
                </div>
              </div>

              {/* Pricing */}
              <div className="flex items-center justify-between">
                <div className="flex items-baseline space-x-2">
                  <span className="text-xl font-bold text-primary">
                    {formatPrice(product?.price)}
                  </span>
                  {product?.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {formatPrice(product?.originalPrice)}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <Button
                variant="outline"
                fullWidth
                iconName="Eye"
                iconPosition="left"
                onClick={() => {
                  // In a real app, this would navigate to the product detail page
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;