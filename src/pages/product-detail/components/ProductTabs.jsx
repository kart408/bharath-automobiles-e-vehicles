import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState('specifications');

  const tabs = [
    { id: 'specifications', label: 'Specifications', icon: 'FileText' },
    { id: 'features', label: 'Features', icon: 'Star' },
    { id: 'gallery', label: 'Gallery', icon: 'Image' },
    { id: 'reviews', label: 'Reviews', icon: 'MessageSquare' }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    })?.format(price);
  };

  const renderSpecifications = () => (
    <div className="space-y-6">
      {/* Performance Specs */}
      <div>
        <h4 className="text-lg font-semibold text-foreground mb-4">Performance</h4>
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              { label: 'Motor Power', value: product?.motorPower },
              { label: 'Top Speed', value: product?.topSpeed },
              { label: 'Range per Charge', value: product?.range },
              { label: 'Charging Time', value: product?.chargingTime },
              { label: 'Battery Type', value: product?.batteryType },
              { label: 'Battery Capacity', value: product?.batteryCapacity },
              { label: 'Tyres', value: '3.00-12 Tubeless' },
              { label: 'Brakes', value: 'Front & Rear Disc' },
              { label: 'Suspension', value: 'Hydraulic' },
              { label: 'Frame', value: 'High Tubular' },
              { label: 'Capacity', value: '150 kg' },
              { label: 'Cost per km', value: '₹0.2' }
            ]?.map((spec, index) => (
              <div
                key={index}
                className={`p-4 ${index % 3 === 0 ? 'bg-muted/30' : index % 3 === 1 ? 'bg-card' : 'bg-muted/30'} ${
                  index < 9 ? 'border-b border-border' : ''
                } ${index % 3 !== 2 ? 'md:border-r border-border' : ''}`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">{spec?.label}</span>
                  <span className="font-semibold text-foreground">{spec?.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Physical Specs */}
      <div>
        <h4 className="text-lg font-semibold text-foreground mb-4">Dimensions & Weight</h4>
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {[
              { label: 'Length', value: product?.dimensions?.length || 'N/A' },
              { label: 'Width', value: product?.dimensions?.width || 'N/A' },
              { label: 'Height', value: product?.dimensions?.height || 'N/A' },
              { label: 'Weight', value: product?.weight || 'N/A' },
              { label: 'Ground Clearance', value: product?.groundClearance || 'N/A' },
              { label: 'Seat Height', value: product?.seatHeight || 'N/A' }
            ]?.map((spec, index) => (
              <div
                key={index}
                className={`p-4 ${index % 2 === 0 ? 'bg-muted/30' : 'bg-card'} ${
                  index < 4 ? 'border-b border-border' : ''
                } ${index % 2 === 0 ? 'md:border-r border-border' : ''}`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">{spec?.label}</span>
                  <span className="font-semibold text-foreground">{spec?.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderFeatures = () => (
    <div className="space-y-6">
      {product?.features?.map((featureGroup, groupIndex) => (
        <div key={groupIndex}>
          <h4 className="text-lg font-semibold text-foreground mb-4">{featureGroup?.category}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featureGroup?.items?.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-4 flex items-start space-x-3"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={feature?.icon} size={20} className="text-primary" />
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-1">{feature?.name}</h5>
                  <p className="text-sm text-muted-foreground">{feature?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderGallery = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {product?.galleryImages?.map((image, index) => (
        <div key={index} className="aspect-square bg-muted rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={`${product?.name} gallery image ${index + 1}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );

  const renderReviews = () => (
    <div className="space-y-6">
      {/* Overall Rating */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="text-4xl font-bold text-primary">{product?.rating}</div>
          <div>
            <div className="flex items-center space-x-1 mb-1">
              {[...Array(5)]?.map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={20}
                  className={i < Math.floor(product?.rating) ? 'text-warning fill-current' : 'text-muted-foreground'}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">Based on {product?.reviewCount} reviews</p>
          </div>
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-4">
        {product?.reviews?.map((review, index) => (
          <div key={index} className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold">
                  {review?.name?.charAt(0)}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold text-foreground">{review?.name}</h5>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className={i < review?.rating ? 'text-warning fill-current' : 'text-muted-foreground'}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-2">{review?.comment}</p>
                <p className="text-xs text-muted-foreground">{review?.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'specifications':
        return renderSpecifications();
      case 'features':
        return renderFeatures();
      case 'gallery':
        return renderGallery();
      case 'reviews':
        return renderReviews();
      default:
        return renderSpecifications();
    }
  };

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-border">
        <div className="flex space-x-0 overflow-x-auto">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-3 text-sm font-medium border-b-2 transition-colors duration-200 whitespace-nowrap rounded-t-lg ${
                activeTab === tab?.id
                  ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Tab Content */}
      <div className="min-h-[400px]">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ProductTabs;