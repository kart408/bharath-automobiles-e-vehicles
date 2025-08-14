import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ProductCard = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    })?.format(price);
  };

  const getSpecIcon = (specType) => {
    switch (specType) {
      case 'range': return 'Gauge';
      case 'speed': return 'Zap';
      case 'charging': return 'Clock';
      case 'battery': return 'Battery';
      default: return 'Info';
    }
  };

  return (
    <div 
      className={`group bg-white rounded-xl shadow-sm border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
        index % 2 === 0 ? 'animate-fade-up' : 'animate-fade-up'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={product?.image}
          alt={product?.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay with Quick Specs */}
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 text-white text-center">
              <div className="flex flex-col items-center space-y-1">
                <Icon name="Gauge" size={24} />
                <span className="text-sm font-medium">{product?.specifications?.range}</span>
                <span className="text-xs opacity-80">Range</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Icon name="Clock" size={24} />
                <span className="text-sm font-medium">{product?.specifications?.chargingTime}</span>
                <span className="text-xs opacity-80">Charging</span>
              </div>
            </div>
          </div>
        </div>

        {/* Badge */}
        {product?.badge && (
          <div className="absolute top-3 left-3">
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
              product?.badge === 'New' ? 'bg-success text-success-foreground' :
              product?.badge === 'Popular' ? 'bg-primary text-primary-foreground' :
              product?.badge === 'Best Value' ? 'bg-accent text-accent-foreground' :
              'bg-secondary text-secondary-foreground'
            }`}>
              {product?.badge}
            </span>
          </div>
        )}

        {/* Price Tag */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
          <span className="text-sm font-bold text-foreground">
            {formatPrice(product?.price)}
          </span>
        </div>
      </div>
      {/* Product Info */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
            {product?.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product?.description}
          </p>
        </div>

        {/* Key Specifications */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {Object.entries(product?.keySpecs)?.map(([key, value]) => (
            <div key={key} className="flex items-center space-x-2">
              <Icon 
                name={getSpecIcon(key)} 
                size={16} 
                className="text-primary flex-shrink-0" 
              />
              <div className="min-w-0">
                <span className="text-xs text-muted-foreground capitalize block">
                  {key?.replace(/([A-Z])/g, ' $1')?.trim()}
                </span>
                <span className="text-sm font-medium text-foreground block truncate">
                  {value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {product?.features?.slice(0, 3)?.map((feature, idx) => (
              <span 
                key={idx}
                className="inline-flex items-center px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md"
              >
                {feature}
              </span>
            ))}
            {product?.features?.length > 3 && (
              <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md">
                +{product?.features?.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-2">
          <Link to="/product-detail" className="flex-1">
            <Button
              variant="default"
              fullWidth
              iconName="Eye"
              iconPosition="left"
              iconSize={16}
            >
              View Details
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => window.open('https://wa.me/919030362696', '_blank')}
            iconName="MessageCircle"
            iconSize={16}
            className="sm:w-auto"
          >
            <span className="sr-only">Contact via WhatsApp</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;