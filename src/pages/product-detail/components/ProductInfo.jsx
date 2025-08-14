import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductInfo = ({ product }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    })?.format(price);
  };

  const keySpecs = [
    { label: 'Range', value: product?.range, icon: 'Battery' },
    { label: 'Top Speed', value: product?.topSpeed, icon: 'Gauge' },
    { label: 'Charging Time', value: product?.chargingTime, icon: 'Clock' },
    { label: 'Motor Power', value: product?.motorPower, icon: 'Zap' },
    { label: 'Battery Type', value: product?.batteryType, icon: 'Battery' },
    { label: 'Capacity', value: '150 kg', icon: 'Scale' }
  ];

  return (
    <div className="space-y-6">
      {/* Product Title & Badge */}
      <div className="space-y-2">
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
            {product?.name}
          </h1>
          {product?.isNew && (
            <span className="bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-medium">
              New Launch
            </span>
          )}
        </div>
        <p className="text-muted-foreground text-lg">
          {product?.tagline}
        </p>
      </div>
      {/* Pricing */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="space-y-4">
          <div className="flex items-baseline space-x-3">
            <span className="text-3xl lg:text-4xl font-bold text-primary">
              {formatPrice(product?.price)}
            </span>
            {product?.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                {formatPrice(product?.originalPrice)}
              </span>
            )}
          </div>
          
          {product?.emiOptions && (
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">EMI Options Available</p>
              <div className="flex flex-wrap gap-2">
                {product?.emiOptions?.map((emi, index) => (
                  <span
                    key={index}
                    className="bg-muted text-muted-foreground px-3 py-1 rounded-lg text-sm"
                  >
                    {formatPrice(emi?.amount)}/month for {emi?.tenure} months
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Pricing Table for Roma N Variants */}
          <div className="bg-muted/30 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-foreground mb-3">Pricing Options</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">28Ah Model</span>
                <span className="font-semibold text-foreground">₹64,993</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">32Ah Model</span>
                <span className="font-semibold text-foreground">₹69,993</span>
              </div>
            </div>
          </div>

          {product?.offers && product?.offers?.length > 0 && (
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Tag" size={16} className="text-accent" />
                <span className="text-sm font-medium text-accent">Special Offers</span>
              </div>
              <ul className="space-y-1">
                {product?.offers?.map((offer, index) => (
                  <li key={index} className="text-sm text-foreground">
                    • {offer}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* Key Specifications */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Key Specifications</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {keySpecs?.map((spec, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-4 flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name={spec?.icon} size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{spec?.label}</p>
                <p className="font-semibold text-foreground">{spec?.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Action Buttons */}
      <div className="space-y-3">

        
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            iconName="Phone"
            iconPosition="left"
            onClick={() => window.location.href = 'tel:+919030362696'}
          >
            Call Now
          </Button>
          <Button
            variant="secondary"
            iconName="MessageCircle"
            iconPosition="left"
            onClick={() => window.open('https://wa.me/919030362696', '_blank')}
          >
            WhatsApp
          </Button>
        </div>
      </div>
      {/* Availability */}
      <div className="bg-muted rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="MapPin" size={16} className="text-primary" />
          <span className="text-sm font-medium text-foreground">Availability</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Available at our Nandipet, Nizamabad showroom. Test ride available by appointment.
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;